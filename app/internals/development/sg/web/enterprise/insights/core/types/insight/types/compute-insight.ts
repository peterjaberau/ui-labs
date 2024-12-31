import type { GroupByField } from '~/internals/development/sg/shared/graphql-operations.ts'

import type { BaseInsight, InsightFilters, InsightType } from '../common.ts'

import type { SearchBasedInsightSeries } from './search-insight.ts'

export interface ComputeInsight extends BaseInsight {
    type: InsightType.Compute
    repositories: string[]
    filters: InsightFilters
    series: SearchBasedInsightSeries[]
    groupBy: GroupByField
}
