import type { Extension } from '@codemirror/state'
import { EditorView, type ViewUpdate } from '@codemirror/view'
import type { NavigateFunction } from '@remix-run/react'
import type { Observable } from 'rxjs'

import { createCancelableFetchSuggestions } from '~/internals/development/sg/shared/search/query/providers-utils.ts'
import type { SearchMatch } from '~/internals/development/sg/shared/search/stream.ts'

import {
    createDefaultSuggestionSources,
    type DefaultSuggestionSourcesOptions,
    searchQueryAutocompletion,
    type StandardSuggestionSource,
} from './completion.ts'
import { loadingIndicator } from './loading-indicator.ts'

export { tokenAt, tokens } from './parsedQuery.ts'
export { placeholder } from './placeholder.ts'

export { createDefaultSuggestionSources, searchQueryAutocompletion }
export type { StandardSuggestionSource }

/**
 * Creates an extension that calls the provided callback whenever the editor
 * content has changed.
 */
export const changeListener = (callback: (value: string) => void): Extension =>
    EditorView.updateListener.of((update: ViewUpdate) => {
        if (update.docChanged) {
            return callback(update.state.sliceDoc())
        }
    })

interface CreateDefaultSuggestionsOptions extends Omit<DefaultSuggestionSourcesOptions, 'fetchSuggestions'> {
    fetchSuggestions: (query: string) => Observable<SearchMatch[]>
    /**
     * If enabled, pressing Enter will navigate to the URL associated with the
     * selected suggestion, if available. In this case `navigate` must be provided as well.
     * Defaults to false.
     */
    enableJumpToSuggestion?: boolean
    navigate?: NavigateFunction
}

/**
 * Creates a search query suggestions extension with default suggestion sources
 * and cancable requests.
 */
export const createDefaultSuggestions = ({
    isSourcegraphDotCom,
    fetchSuggestions,
    disableFilterCompletion,
    disableSymbolCompletion,
    navigate,
    enableJumpToSuggestion = false,
    showWhenEmpty,
}: CreateDefaultSuggestionsOptions): Extension => [
    searchQueryAutocompletion(
        createDefaultSuggestionSources({
            fetchSuggestions: createCancelableFetchSuggestions(fetchSuggestions),
            isSourcegraphDotCom,
            disableSymbolCompletion,
            disableFilterCompletion,
            showWhenEmpty,
        }),
        enableJumpToSuggestion,
        navigate
    ),
    loadingIndicator(),
]
