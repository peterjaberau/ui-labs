import type { FC } from 'react'

import { useLocation } from '@remix-run/react'

import { TraceSpanProvider } from '~/internals/development/sg/observability-client'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { LegacyLayoutRouteContext } from '../LegacyRouteContext.tsx'

import { parseSearchURLQuery } from './index.ts'

const SearchPage = lazyComponent(() => import('./home/SearchPage.tsx'), 'SearchPage')
const StreamingSearchResults = lazyComponent(() => import('./results/StreamingSearchResults.tsx'), 'StreamingSearchResults')

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
