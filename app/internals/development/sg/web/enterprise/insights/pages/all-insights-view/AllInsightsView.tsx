import { useEffect, type FC } from 'react'

import { mdiPlus } from '@mdi/js'

import { isDefined } from '~/internals/development/sg/common'
import { dataOrThrowErrors } from '~/internals/development/sg/http-client'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Card, Icon, Link, LoadingSpinner, Button, ErrorAlert } from '~/internals/development/sg/wildcard'

import { useShowMorePagination } from '../../../../components/FilteredConnection/hooks/useShowMorePagination.ts'
import type {
    GetAllInsightConfigurationsResult,
    GetAllInsightConfigurationsVariables,
    InsightViewNode,
} from '../../../../graphql-operations.ts'
import { SmartInsightsViewGrid } from '../../components'
import { createInsightView } from '../../core/backend/gql-backend'

import { GET_ALL_INSIGHT_CONFIGURATIONS } from './query.ts'

import styles from './AllInsightsView.module.scss'

interface AllInsightsViewProps extends TelemetryProps, TelemetryV2Props {}

export const AllInsightsView: FC<AllInsightsViewProps> = props => {
    const { connection, loading, hasNextPage, error, fetchMore } = useShowMorePagination<
        GetAllInsightConfigurationsResult,
        GetAllInsightConfigurationsVariables,
        InsightViewNode | null
    >({
        query: GET_ALL_INSIGHT_CONFIGURATIONS,
        variables: { first: 15, after: null },
        getConnection: result => {
            const { insightViews } = dataOrThrowErrors(result)

            return insightViews
        },
        options: { fetchPolicy: 'cache-and-network' },
    })

    useEffect(() => props.telemetryRecorder.recordEvent('insights.allInsights', 'view'), [props.telemetryRecorder])

    if (connection === undefined) {
        return <LoadingSpinner aria-hidden={true} inline={false} />
    }

    if (error) {
        return <ErrorAlert error={error} />
    }

    const insights = connection.nodes.filter(isDefined).map(createInsightView)

    return insights.length > 0 ? (
        <div className={styles.content}>
            <SmartInsightsViewGrid
                id="all-insights-dashboard"
                insights={insights}
                persistSizeAndOrder={false}
                telemetryService={props.telemetryService}
                telemetryRecorder={props.telemetryRecorder}
            />

            <footer className={styles.footer}>
                {hasNextPage && (
                    <Button variant="secondary" outline={true} disabled={loading} onClick={fetchMore}>
                        Show more
                    </Button>
                )}
                <span className={styles.paginationInfo}>
                    {connection.totalCount ?? 0} <b>insights</b> total{' '}
                    {hasNextPage && <>(showing first {insights.length})</>}
                </span>
            </footer>
        </div>
    ) : (
        <Card as={Link} to="/insights/create" className={styles.emptyCard}>
            <Icon svgPath={mdiPlus} inline={false} aria-hidden={true} height="2rem" width="2rem" />
            <span>It seems that you don't have any insights yet, you can create your first insight from here.</span>
        </Card>
    )
}
