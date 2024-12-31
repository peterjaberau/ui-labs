import React, { useEffect } from 'react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import { PageTitle } from '../../../../../components/PageTitle.tsx'

import { CodeInsightsExamples } from './components/code-insights-examples/CodeInsightsExamples.tsx'
import { CodeInsightsTemplates } from './components/code-insights-templates/CodeInsightsTemplates.tsx'
import { DynamicCodeInsightExample } from './components/dynamic-code-insight-example/DynamicCodeInsightExample.tsx'

import styles from './CodeInsightsGettingStartedPage.module.scss'

interface CodeInsightsGettingStartedPageProps extends TelemetryProps, TelemetryV2Props {}

export const CodeInsightsGettingStartedPage: React.FunctionComponent<
    React.PropsWithChildren<CodeInsightsGettingStartedPageProps>
> = props => {
    const { telemetryService, telemetryRecorder } = props

    useEffect(() => {
        telemetryService.logViewEvent('InsightsGetStartedPage')
        telemetryRecorder.recordEvent('insights.getStarted', 'view')
    }, [telemetryService, telemetryRecorder])

    return (
        <main className="pb-5">
            <PageTitle title="Code Insights" />
            <DynamicCodeInsightExample telemetryService={telemetryService} telemetryRecorder={telemetryRecorder} />
            <CodeInsightsExamples
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
                className={styles.section}
            />
            <CodeInsightsTemplates
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
                className={styles.section}
            />
        </main>
    )
}
