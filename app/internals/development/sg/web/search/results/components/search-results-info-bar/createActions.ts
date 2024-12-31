import { mdiMagnify } from '@mdi/js'

import { FilterType } from '~/internals/development/sg/shared/search/query/filters.ts'
import { FilterKind, findFilter } from '~/internals/development/sg/shared/search/query/query.ts'
import { omitFilter } from '~/internals/development/sg/shared/search/query/transformer.ts'
import type { IconType } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../../../auth.ts'
import { BatchChangesIcon } from '../../../../batches/icons.tsx'
import { CodeMonitoringLogo } from '../../../../code-monitoring/CodeMonitoringLogo.tsx'
import type { SearchPatternType } from '../../../../graphql-operations.ts'
import { CodeInsightsIcon } from '../../../../insights/Icons.tsx'

export interface CreateAction {
    url: string
    icon: IconType
    label: string
    tooltip: string
    disabled?: boolean
    eventToLog?: string
}

export function getSearchContextCreateAction(
    query: string | undefined,
    authenticatedUser: Pick<AuthenticatedUser, 'id'> | null
): CreateAction | null {
    if (!query || !authenticatedUser) {
        return null
    }

    const contextFilter = findFilter(query, FilterType.context, FilterKind.Global)
    if (!contextFilter || contextFilter.value?.value !== 'global') {
        return null
    }

    const sanitizedQuery = omitFilter(query, contextFilter)
    const searchParameters = new URLSearchParams()
    searchParameters.set('q', sanitizedQuery)
    const url = `/contexts/new?${searchParameters.toString()}`

    return { url, icon: mdiMagnify, label: 'Create context', tooltip: 'Create a search context based on this query.' }
}

export function getInsightsCreateAction(
    query: string | undefined,
    patternType: SearchPatternType,
    enableCodeInsights: boolean | undefined
): CreateAction | null {
    if (!enableCodeInsights || !query) {
        return null
    }

    const searchParameters = new URLSearchParams()
    searchParameters.set('query', `${query} patterntype:${patternType}`)
    const url = `/insights/create/search?${searchParameters.toString()}`

    return {
        url,
        icon: CodeInsightsIcon,
        label: 'Create insight',
        tooltip: 'Create Insight based on this search query.',
    }
}

export function getCodeMonitoringCreateAction(
    query: string | undefined,
    patternType: SearchPatternType,
    enableCodeMonitoring: boolean
): CreateAction | null {
    if (!enableCodeMonitoring || !query) {
        return null
    }
    const searchParameters = new URLSearchParams(location.search)
    searchParameters.set('trigger-query', `${query} patterntype:${patternType}`)
    const url = `/code-monitoring/new?${searchParameters.toString()}`

    return {
        url,
        icon: CodeMonitoringLogo,
        label: 'monitor',
        tooltip: 'Create a code monitor based on this query.',
    }
}

export function getBatchChangeCreateAction(
    query: string | undefined,
    patternType: SearchPatternType,
    canCreateBatchChange: boolean | string
): CreateAction | null {
    if (canCreateBatchChange === false) {
        return null
    }

    let disabled = false
    let tooltip: string | undefined
    if (typeof canCreateBatchChange === 'string') {
        disabled = true
        tooltip = canCreateBatchChange
    }

    const searchParameters = new URLSearchParams(location.search)
    searchParameters.set('trigger-query', `${query} patterntype:${patternType}`)
    const url = `/batch-changes/create?${searchParameters.toString()}`

    return {
        url,
        icon: BatchChangesIcon,
        label: 'Create batch change',
        tooltip: tooltip || 'Create a batch change based on this query.',
        eventToLog: 'search_result_page:create_batch_change:clicked',
        disabled,
    }
}
