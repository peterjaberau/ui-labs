import type { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PathMatch, RepositoryMatch, SearchMatch, SymbolMatch } from '~/internals/development/sg/shared/search/stream.ts'
import { fetchStreamSuggestionsPatternType } from '~/internals/development/sg/shared/search/suggestions'

export function fetchSuggestions<T extends RepositoryMatch | PathMatch | SymbolMatch, O>(
    query: string,
    patternType: SearchPatternType,
    filterSuggestionFunc: (match: SearchMatch) => match is T,
    mapSuggestionFunc: (match: T) => O
): Observable<O[]> {
    return fetchStreamSuggestionsPatternType(query, patternType).pipe(
        map(suggestions => suggestions.filter(filterSuggestionFunc).map(mapSuggestionFunc))
    )
}
