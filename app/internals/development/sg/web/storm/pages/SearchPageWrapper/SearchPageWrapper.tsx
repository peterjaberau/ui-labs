import type { FC } from 'react'

import { useLocation } from '@remix-run/react'

import { TraceSpanProvider } from '~/internals/development/sg/observability-client'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { LegacyRoute } from '../../../LegacyRouteContext.tsx'
import { parseSearchURLQuery } from '../../../search'

const SearchPage = lazyComponent(() => import('../SearchPage/SearchPage.tsx'), 'SearchPage')
const LegacyStreamingSearchResults = lazyComponent(
    () => import('../../../search/results/StreamingSearchResults.tsx'),
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
