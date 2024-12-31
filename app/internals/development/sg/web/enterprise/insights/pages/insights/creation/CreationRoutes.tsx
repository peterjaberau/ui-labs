import type { FC } from 'react'

import { Routes, Route } from '@remix-run/react'

import { useExperimentalFeatures } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { InsightCreationPageType } from './InsightCreationPage.tsx'

const IntroCreationLazyPage = lazyComponent(() => import('./intro/IntroCreationPage.tsx'), 'IntroCreationPage')
const InsightCreationLazyPage = lazyComponent(() => import('./InsightCreationPage.tsx'), 'InsightCreationPage')

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
