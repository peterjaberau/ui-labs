import React from 'react'

import { Routes, Route } from '@remix-run/react'

import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { AuthenticatedUser } from '../../../auth.ts'
import { Page } from '../../../components/Page.tsx'

interface Props extends TelemetryProps, PlatformContextProps, SettingsCascadeProps {
    authenticatedUser: AuthenticatedUser | null
    isSourcegraphDotCom: boolean
}

const CodeMonitoringPage = lazyComponent(() => import('../CodeMonitoringPage.tsx'), 'CodeMonitoringPage')
const CreateCodeMonitorPage = lazyComponent(() => import('../CreateCodeMonitorPage.tsx'), 'CreateCodeMonitorPage')
const ManageCodeMonitorPage = lazyComponent(() => import('../ManageCodeMonitorPage.tsx'), 'ManageCodeMonitorPage')

/**
 * The global code monitoring area.
 */
export const GlobalCodeMonitoringArea: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    ...outerProps
}) => (
    <div className="w-100">
        <Page>
            <Routes>
                <Route
                    path=""
                    element={
                        <CodeMonitoringPage
                            {...outerProps}
                            telemetryRecorder={outerProps.platformContext.telemetryRecorder}
                        />
                    }
                />
                <Route
                    path="new"
                    element={
                        <CreateCodeMonitorPage
                            {...outerProps}
                            telemetryRecorder={outerProps.platformContext.telemetryRecorder}
                        />
                    }
                />
                <Route
                    path=":id"
                    element={
                        <ManageCodeMonitorPage
                            {...outerProps}
                            telemetryRecorder={outerProps.platformContext.telemetryRecorder}
                        />
                    }
                />
            </Routes>
        </Page>
    </div>
)
