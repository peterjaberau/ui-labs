import React from 'react'

import { Routes, Route } from '@remix-run/react'

import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { SettingsCascadeProps } from '~/sg/shared/settings/settings'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import type { AuthenticatedUser } from '../../../auth'
import { Page } from '../../../components/Page'

interface Props extends TelemetryProps, PlatformContextProps, SettingsCascadeProps {
    authenticatedUser: AuthenticatedUser | null
    isSourcegraphDotCom: boolean
}

const CodeMonitoringPage = lazyComponent(() => import('../CodeMonitoringPage'), 'CodeMonitoringPage')
const CreateCodeMonitorPage = lazyComponent(() => import('../CreateCodeMonitorPage'), 'CreateCodeMonitorPage')
const ManageCodeMonitorPage = lazyComponent(() => import('../ManageCodeMonitorPage'), 'ManageCodeMonitorPage')

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
