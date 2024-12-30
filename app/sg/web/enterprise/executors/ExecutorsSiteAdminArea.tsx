import type { FC } from 'react'

import { Route, Routes } from '@remix-run/react'

import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import { NotFoundPage } from '../../components/HeroPage'

import type { ExecutorsListPageProps } from './instances/ExecutorsListPage'
import type { GlobalExecutorSecretsListPageProps } from './secrets/ExecutorSecretsListPage'

interface ExecutorsSiteAdminAreaProps extends TelemetryV2Props {}

const ExecutorsListPage = lazyComponent<ExecutorsListPageProps, 'ExecutorsListPage'>(
    () => import('./instances/ExecutorsListPage'),
    'ExecutorsListPage'
)

const GlobalExecutorSecretsListPage = lazyComponent<
    GlobalExecutorSecretsListPageProps,
    'GlobalExecutorSecretsListPage'
>(() => import('./secrets/ExecutorSecretsListPage'), 'GlobalExecutorSecretsListPage')

/** The page area for all executors settings in site-admin. */
export const ExecutorsSiteAdminArea: FC<ExecutorsSiteAdminAreaProps> = props => (
    <Routes>
        <Route index={true} element={<ExecutorsListPage {...props} />} />
        <Route path="secrets" element={<GlobalExecutorSecretsListPage {...props} />} />
        <Route path="*" element={<NotFoundPage pageType="settings" />} />
    </Routes>
)
