import { type FC, useContext, useMemo } from 'react'

import { useExperimentalFeatures } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { LoadingSpinner, useObservable } from '~/internals/development/sg/wildcard'

import { SmartInsightsViewGrid, InsightContext, type GridApi } from '../../../../../../../components'
import { CodeInsightsBackendContext, type CustomInsightDashboard } from '../../../../../../../core'
import { EmptyCustomDashboard } from '../empty-insight-dashboard/EmptyInsightDashboard.tsx'

interface DashboardInsightsProps extends TelemetryProps, TelemetryV2Props {
    currentDashboard: CustomInsightDashboard
    className?: string
    onAddInsightRequest?: () => void
    onDashboardCreate?: (dashboardApi: GridApi) => void
}

export const DashboardInsights: FC<DashboardInsightsProps> = props => {
    const { currentDashboard, telemetryService, telemetryRecorder, className, onAddInsightRequest, onDashboardCreate } =
        props

    const { getInsights } = useContext(CodeInsightsBackendContext)
    const codeInsightsCompute = useExperimentalFeatures(settings => settings.codeInsightsCompute ?? false)

    const insights = useObservable(
        useMemo(
            () =>
                getInsights({
                    dashboardId: currentDashboard.id,
                    withCompute: codeInsightsCompute,
                }),
            [getInsights, codeInsightsCompute, currentDashboard.id]
        )
    )

    const insightContextValue = useMemo(() => ({ currentDashboard }), [currentDashboard])

    if (insights === undefined) {
        return <LoadingSpinner aria-hidden={true} inline={false} />
    }

    return (
        <InsightContext.Provider value={insightContextValue}>
            {insights.length > 0 ? (
                <SmartInsightsViewGrid
                    id={currentDashboard.id}
                    insights={insights}
                    telemetryService={telemetryService}
                    telemetryRecorder={telemetryRecorder}
                    className={className}
                    onGridCreate={onDashboardCreate}
                />
            ) : (
                <EmptyCustomDashboard dashboard={currentDashboard} onAddInsightRequest={onAddInsightRequest} />
            )}
        </InsightContext.Provider>
    )
}
