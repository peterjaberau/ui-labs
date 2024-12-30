import type { FC } from 'react'

import { useLocation } from '@remix-run/react'

import { TraceSpanProvider } from '~/sg/observability-client'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import type { LegacyLayoutRouteContext } from '../LegacyRouteContext'

import { parseSearchURLQuery } from '.'

const SearchPage = lazyComponent(() => import('./home/SearchPage'), 'SearchPage')
const StreamingSearchResults = lazyComponent(() => import('./results/StreamingSearchResults'), 'StreamingSearchResults')

/**
 * Renders the Search home page or Search results depending on whether a query
 * was submitted (present in the URL) or not.
 */
export const SearchPageWrapper: FC<LegacyLayoutRouteContext> = props => {
    const location = useLocation()
    const hasSearchQuery = parseSearchURLQuery(location.search)

    return hasSearchQuery ? (
        <TraceSpanProvider name="StreamingSearchResults">
            <StreamingSearchResults {...props} />
        </TraceSpanProvider>
    ) : (
        <TraceSpanProvider name="SearchPage">
            <SearchPage {...props} />
        </TraceSpanProvider>
    )
}
