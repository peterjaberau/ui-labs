import type { FunctionComponent } from 'react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import { type Insight, isBackendInsight } from '../../../../core'

import { StandaloneBackendInsight } from './standalone-backend-insight/StandaloneBackendInsight.tsx'
import { StandaloneLangStatsInsight } from './standalone-lang-stats-insight/StandaloneLangStatsInsight.tsx'

interface SmartStandaloneInsightProps extends TelemetryProps, TelemetryV2Props {
    insight: Insight
    className?: string
}

export const SmartStandaloneInsight: FunctionComponent<SmartStandaloneInsightProps> = props => {
    const { insight, telemetryService, telemetryRecorder, className } = props

    if (isBackendInsight(insight)) {
        return (
            <StandaloneBackendInsight
                insight={insight}
                telemetryService={telemetryService}
                className={className}
                telemetryRecorder={telemetryRecorder}
            />
        )
    }

    // Search based extension and lang stats insight are handled by built-in fetchers
    return (
        <StandaloneLangStatsInsight
            insight={insight}
            telemetryService={telemetryService}
            className={className}
            telemetryRecorder={telemetryRecorder}
        />
    )
}
