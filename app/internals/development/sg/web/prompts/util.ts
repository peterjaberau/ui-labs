import { type PromptFields } from '../graphql-operations.ts'

export function urlToEditPrompt(prompt: Pick<PromptFields, 'url'>): string {
    return `${prompt.url}/edit`
}
