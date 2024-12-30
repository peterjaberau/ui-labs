import { FILTERS_URL_KEY } from '~/sg/branded/search-ui/results/filters/hooks'
import { compatNavigate } from '~/sg/common'
import { type SubmitSearchParameters, TELEMETRY_SEARCH_SOURCE_TYPE } from '~/sg/shared/search'
import { appendContextFilter } from '~/sg/shared/search/query/transformer'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/sg/shared/telemetry/web/eventLogger'
import { buildSearchURLQuery } from '~/sg/shared/util/url'

import { AGGREGATION_MODE_URL_KEY, AGGREGATION_UI_MODE_URL_KEY } from './results/components/aggregation/constants'

/**
 * By default {@link submitSearch} overrides all existing query parameters.
 * This breaks all functionality that is built on top of URL query params and history
 * state. This list of query keys will be preserved between searches.
 */
const PRESERVED_QUERY_PARAMETERS = [
    'feat',
    'trace',
    AGGREGATION_MODE_URL_KEY,
    AGGREGATION_UI_MODE_URL_KEY,
    FILTERS_URL_KEY,
]

/**
 * Returns a URL query string with only the parameters in PRESERVED_QUERY_PARAMETERS.
 */
function preservedQuery(query: string): string {
    const old = new URLSearchParams(query)
    const filtered = new URLSearchParams()
    for (const key of PRESERVED_QUERY_PARAMETERS) {
        for (const value of old.getAll(key)) {
            filtered.append(key, value)
        }
    }
    return filtered.toString()
}

/**
 * @param activation If set, records the DidSearch activation event for the new user activation
 * flow.
 */
export function submitSearch({
    historyOrNavigate,
    location,
    query,
    patternType,
    caseSensitive,
    selectedSearchContextSpec,
    searchMode,
    source,
    telemetryRecorder,
}: SubmitSearchParameters & TelemetryV2Props): void {
    let searchQueryParameter = buildSearchURLQuery(
        query,
        patternType,
        caseSensitive,
        selectedSearchContextSpec,
        searchMode
    )

    const preserved = preservedQuery(location.search)
    if (preserved !== '') {
        searchQueryParameter = searchQueryParameter + '&' + preserved
    }

    const queryWithContext = appendContextFilter(query, selectedSearchContextSpec)
    EVENT_LOGGER.log(
        'SearchSubmitted',
        {
            query: queryWithContext,
            source,
        },
        { source, patternType }
    )
    telemetryRecorder.recordEvent('search', 'submit', { metadata: { source: TELEMETRY_SEARCH_SOURCE_TYPE[source] } })

    const state = {
        ...(typeof location.state === 'object' ? location.state : null),
        queryTimestamp: Date.now(),
        query,
    }

    // Go to search results page
    compatNavigate(historyOrNavigate, '/search?' + searchQueryParameter, {
        state,
        replace: searchQueryParameter === location.search.slice(1),
    })
}