import type { GroupByField } from '~/sg/shared/graphql-operations'

import type { BaseInsight, InsightFilters, InsightType } from '../common'

import type { SearchBasedInsightSeries } from './search-insight'

export interface ComputeInsight extends BaseInsight {
    type: InsightType.Compute
    repositories: string[]
    filters: InsightFilters
    series: SearchBasedInsightSeries[]
    groupBy: GroupByField
}
