import { CodebaseContext } from '../codebase-context'
import type { ConfigurationWithAccessToken } from '../configuration.ts'
import type { Editor } from '../editor'
import { type PrefilledOptions, withPreselectedOptions } from '../editor/withPreselectedOptions.ts'
import { SourcegraphEmbeddingsSearchClient } from '../embeddings/client.ts'
import { SourcegraphIntentDetectorClient } from '../intent-detector/client.ts'
import { SourcegraphBrowserCompletionsClient } from '../sourcegraph-api/completions/browserClient.ts'
import type { CompletionsClientConfig, SourcegraphCompletionsClient } from '../sourcegraph-api/completions/client.ts'
import { SourcegraphGraphQLAPIClient } from '../sourcegraph-api/graphql'
import { isError } from '../utils.ts'

import { BotResponseMultiplexer } from './bot-response-multiplexer.ts'
import { ChatClient } from './chat.ts'
import { getPreamble } from './preamble.ts'
import { getRecipe } from './recipes/browser-recipes.ts'
import type { RecipeID } from './recipes/recipe.ts'
import { Transcript, type TranscriptJSON } from './transcript'
import type { ChatMessage } from './transcript/messages.ts'
import { reformatBotMessage } from './viewHelpers.ts'

export type { TranscriptJSON }
export { Transcript }

export type ClientInitConfig = Pick<
    ConfigurationWithAccessToken,
    'serverEndpoint' | 'codebase' | 'useContext' | 'accessToken' | 'customHeaders' | 'experimentalLocalSymbols'
>

export interface ClientInit {
    config: ClientInitConfig
    setMessageInProgress: (messageInProgress: ChatMessage | null) => void
    setTranscript: (transcript: Transcript) => void
    editor: Editor
    initialTranscript?: Transcript
    createCompletionsClient?: (config: CompletionsClientConfig) => SourcegraphCompletionsClient
}

export interface Client {
    readonly transcript: Transcript
    readonly isMessageInProgress: boolean
    submitMessage: (text: string) => Promise<void>
    executeRecipe: (
        recipeId: RecipeID,
        options?: {
            prefilledOptions?: PrefilledOptions
            humanChatInput?: string
            data?: any // returned as is
        }
    ) => Promise<void>
    reset: () => void
    codebaseContext: CodebaseContext
    sourcegraphStatus: { authenticated: boolean; version: string }
    codyStatus: { enabled: boolean; version: string }
    graphqlClient: SourcegraphGraphQLAPIClient
}

export async function createClient({
    config,
    setMessageInProgress,
    setTranscript,
    editor,
    initialTranscript,
    createCompletionsClient = config => new SourcegraphBrowserCompletionsClient(config),
}: ClientInit): Promise<Client | null> {
    const fullConfig = { debugEnable: false, ...config }

    const graphqlClient = new SourcegraphGraphQLAPIClient(fullConfig)
    const sourcegraphVersion = await graphqlClient.getSiteVersion()

    const sourcegraphStatus = { authenticated: false, version: '' }
    if (!isError(sourcegraphVersion)) {
        sourcegraphStatus.authenticated = true
        sourcegraphStatus.version = sourcegraphVersion
    }

    const codyStatus = await graphqlClient.isCodyEnabled()

    if (sourcegraphStatus.authenticated && codyStatus.enabled) {
        const completionsClient = createCompletionsClient(fullConfig)
        const chatClient = new ChatClient(completionsClient)

        const repoId = config.codebase ? await graphqlClient.getRepoIdIfEmbeddingExists(config.codebase) : null
        if (isError(repoId)) {
            throw new Error(
                `Cody could not access the '${config.codebase}' repository on your Sourcegraph instance. Details: ${repoId.message}`
            )
        }

        const embeddingsSearch = repoId ? new SourcegraphEmbeddingsSearchClient(graphqlClient, repoId, true) : null
        const codebaseContext = new CodebaseContext(config, config.codebase, embeddingsSearch, null, null, null)

        const intentDetector = new SourcegraphIntentDetectorClient(graphqlClient, completionsClient)

        const transcript = initialTranscript || new Transcript()

        let isMessageInProgress = false

        const sendTranscript = (data?: any): void => {
            if (isMessageInProgress) {
                const messages = transcript.toChat()
                setTranscript(transcript)
                const message = messages.at(-1)!
                if (data) {
                    message.data = data
                }
                setMessageInProgress(message)
            } else {
                setTranscript(transcript)
                if (data) {
                    setMessageInProgress({ data, speaker: 'assistant' })
                } else {
                    setMessageInProgress(null)
                }
            }
        }

        async function executeRecipe(
            recipeId: RecipeID,
            options?: {
                prefilledOptions?: PrefilledOptions
                humanChatInput?: string
                data?: any
            }
        ): Promise<void> {
            const humanChatInput = options?.humanChatInput ?? ''
            const recipe = getRecipe(recipeId)
            if (!recipe) {
                return
            }

            const interaction = await recipe.getInteraction(humanChatInput, {
                editor: options?.prefilledOptions ? withPreselectedOptions(editor, options.prefilledOptions) : editor,
                intentDetector,
                codebaseContext,
                responseMultiplexer: new BotResponseMultiplexer(),
                firstInteraction: transcript.isEmpty,
            })
            if (!interaction) {
                return
            }
            isMessageInProgress = true
            transcript.addInteraction(interaction)

            const { prompt, contextFiles, preciseContexts } = await transcript.getPromptForLastInteraction(
                getPreamble(config.codebase)
            )
            transcript.setUsedContextFilesForLastInteraction(contextFiles, preciseContexts)

            const responsePrefix = interaction.getAssistantMessage().prefix ?? ''
            let rawText = ''
            chatClient.chat(prompt, {
                onChange(_rawText) {
                    rawText = _rawText

                    const text = reformatBotMessage(rawText, responsePrefix)
                    transcript.addAssistantResponse(text)

                    sendTranscript(options?.data)
                },
                onComplete() {
                    isMessageInProgress = false

                    const text = reformatBotMessage(rawText, responsePrefix)
                    transcript.addAssistantResponse(text)
                    sendTranscript(options?.data)
                },
                onError(error) {
                    // Display error message as assistant response
                    transcript.addErrorAsAssistantResponse(error)
                    isMessageInProgress = false
                    sendTranscript(options?.data)
                },
            })
        }

        return {
            get transcript() {
                return transcript
            },
            get isMessageInProgress() {
                return isMessageInProgress
            },
            submitMessage(text: string) {
                return executeRecipe('chat-question', { humanChatInput: text })
            },
            executeRecipe,
            reset() {
                isMessageInProgress = false
                transcript.reset()
                sendTranscript()
            },
            codebaseContext,
            sourcegraphStatus,
            codyStatus,
            graphqlClient,
        }
    }

    return null
}
