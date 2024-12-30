import type { FC } from 'react'

import { useLocation } from '@remix-run/react'

import { TraceSpanProvider } from '~/sg/observability-client'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import { LegacyRoute } from '../../../LegacyRouteContext'
import { parseSearchURLQuery } from '../../../search'

const SearchPage = lazyComponent(() => import('../SearchPage/SearchPage'), 'SearchPage')
const LegacyStreamingSearchResults = lazyComponent(
    () => import('../../../search/results/StreamingSearchResults'),
    'StreamingSearchResults'
)

/**
 * Renders the Search home page or Search results depending on whether a query
 * was submitted (present in the URL) or not.
 */
export const SearchPageWrapper: FC = () => {
    const location = useLocation()
    const hasSearchQuery = parseSearchURLQuery(location.search)

    return hasSearchQuery ? (
        <TraceSpanProvider name="StreamingSearchResults">
            <LegacyRoute render={props => <LegacyStreamingSearchResults {...props} />} />
        </TraceSpanProvider>
    ) : (
        <TraceSpanProvider name="SearchPage">
            <SearchPage />
        </TraceSpanProvider>
    )
}
