import { FilterType, resolveFilter } from '~/internals/development/sg/shared/search/query/filters.ts'
import { scanSearchQuery } from '~/internals/development/sg/shared/search/query/scanner.ts'
import type { Filter } from '~/internals/development/sg/shared/search/query/token.ts'

import { SeriesSortDirection, SeriesSortMode } from '../../../../../../../graphql-operations.ts'
import { InsightType, type MinimalCaptureGroupInsightData } from '../../../../../core'
import type { CaptureGroupFormFields } from '../types.ts'

export function getSanitizedCaptureGroupInsight(values: CaptureGroupFormFields): MinimalCaptureGroupInsightData {
    return {
        title: values.title.trim(),
        query: getSanitizedCaptureQuery(values.groupSearchQuery.trim()),
        type: InsightType.CaptureGroup,
        step: { [values.step]: +values.stepValue },
        repoQuery: values.repoMode === 'search-query' ? values.repoQuery.query : '',
        repositories: values.repoMode === 'urls-list' ? values.repositories : [],

        filters: {
            includeRepoRegexp: '',
            excludeRepoRegexp: '',
            context: '',
            seriesDisplayOptions: {
                limit: null,
                numSamples: null,
                sortOptions: {
                    direction: SeriesSortDirection.DESC,
                    mode: SeriesSortMode.RESULT_COUNT,
                },
            },
        },
        dashboards: [],
    }
}

export const getSanitizedCaptureQuery = (query: string): string => {
    const tokens = scanSearchQuery(query)

    if (tokens.type === 'success') {
        const filters = tokens.term.filter(token => token.type === 'filter') as Filter[]

        const hasRegExpPattern = filters.some(
            filter =>
                resolveFilter(filter.field.value)?.type === FilterType.patterntype && filter.value?.value === 'regexp'
        )

        return hasRegExpPattern ? query : `patterntype:regexp ${query}`
    }

    return query
}
