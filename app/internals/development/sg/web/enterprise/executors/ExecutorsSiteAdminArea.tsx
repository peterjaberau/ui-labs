import type { FC } from 'react'

import { Route, Routes } from '@remix-run/react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { NotFoundPage } from '../../components/HeroPage.tsx'

import type { ExecutorsListPageProps } from './instances/ExecutorsListPage.tsx'
import type { GlobalExecutorSecretsListPageProps } from './secrets/ExecutorSecretsListPage.tsx'

interface ExecutorsSiteAdminAreaProps extends TelemetryV2Props {}

const ExecutorsListPage = lazyComponent<ExecutorsListPageProps, 'ExecutorsListPage'>(
    () => import('./instances/ExecutorsListPage.tsx'),
    'ExecutorsListPage'
)

const GlobalExecutorSecretsListPage = lazyComponent<
    GlobalExecutorSecretsListPageProps,
    'GlobalExecutorSecretsListPage'
>(() => import('./secrets/ExecutorSecretsListPage.tsx'), 'GlobalExecutorSecretsListPage')

/** The page area for all executors settings in site-admin. */
export const ExecutorsSiteAdminArea: FC<ExecutorsSiteAdminAreaProps> = props => (
    <Routes>
        <Route index={true} element={<ExecutorsListPage {...props} />} />
        <Route path="secrets" element={<GlobalExecutorSecretsListPage {...props} />} />
        <Route path="*" element={<NotFoundPage pageType="settings" />} />
    </Routes>
)
