import React from 'react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { UserExecutorSecretsListPageProps } from './secrets/ExecutorSecretsListPage.tsx'

const UserExecutorSecretsListPage = lazyComponent<UserExecutorSecretsListPageProps, 'UserExecutorSecretsListPage'>(
    () => import('./secrets/ExecutorSecretsListPage.tsx'),
    'UserExecutorSecretsListPage'
)

export interface ExecutorsUserAreaProps extends TelemetryV2Props {
    namespaceID: string
}

/** The page area for all executors settings in user settings. */
export const ExecutorsUserArea: React.FunctionComponent<React.PropsWithChildren<ExecutorsUserAreaProps>> = props => (
    <UserExecutorSecretsListPage userID={props.namespaceID} {...props} />
)
