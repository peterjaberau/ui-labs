import type { FC } from 'react'

import { Routes, Route } from '@remix-run/react'

import { useExperimentalFeatures } from '~/sg/shared/settings/settings'
import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import { InsightCreationPageType } from './InsightCreationPage'

const IntroCreationLazyPage = lazyComponent(() => import('./intro/IntroCreationPage'), 'IntroCreationPage')
const InsightCreationLazyPage = lazyComponent(() => import('./InsightCreationPage'), 'InsightCreationPage')

interface CreationRoutesProps extends TelemetryProps, TelemetryV2Props {}

/**
 * Code insight sub-router for the creation area/routes.
 * Renders code insights creation routes (insight creation UI pages, creation intro page)
 */
export const CreationRoutes: FC<CreationRoutesProps> = props => {
    const { telemetryService, telemetryRecorder } = props

    const codeInsightsCompute = useExperimentalFeatures(settings => settings.codeInsightsCompute)

    return (
        <Routes>
            <Route
                index={true}
                element={
                    <IntroCreationLazyPage telemetryService={telemetryService} telemetryRecorder={telemetryRecorder} />
                }
            />

            <Route
                path="search"
                element={
                    <InsightCreationLazyPage
                        mode={InsightCreationPageType.Search}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                    />
                }
            />

            <Route
                path="capture-group"
                element={
                    <InsightCreationLazyPage
                        mode={InsightCreationPageType.CaptureGroup}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                    />
                }
            />

            <Route
                path="lang-stats"
                element={
                    <InsightCreationLazyPage
                        mode={InsightCreationPageType.LangStats}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                    />
                }
            />

            {codeInsightsCompute && (
                <Route
                    path="group-results"
                    element={
                        <InsightCreationLazyPage
                            mode={InsightCreationPageType.Compute}
                            telemetryService={telemetryService}
                            telemetryRecorder={telemetryRecorder}
                        />
                    }
                />
            )}
        </Routes>
    )
}
