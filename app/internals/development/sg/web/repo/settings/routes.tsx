import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { RedirectRoute } from '../../components/RedirectRoute.tsx'
import type { RepoSettingsLogsPageProps } from '../../enterprise/repo/settings/RepoSettingsLogsPage.tsx'
import type { RepoSettingsPermissionsPageProps } from '../../enterprise/repo/settings/RepoSettingsPermissionsPage.tsx'

import type { RepoSettingsAreaRoute } from './RepoSettingsArea.tsx'

const RepoSettingsPermissionsPage = lazyComponent<RepoSettingsPermissionsPageProps, 'RepoSettingsPermissionsPage'>(
    () => import('../../enterprise/repo/settings/RepoSettingsPermissionsPage.tsx'),
    'RepoSettingsPermissionsPage'
)

const RepoSettingsLogsPage = lazyComponent<RepoSettingsLogsPageProps, 'RepoSettingsLogsPage'>(
    () => import('../../enterprise/repo/settings/RepoSettingsLogsPage.tsx'),
    'RepoSettingsLogsPage'
)

export const repoSettingsAreaPath = '/-/settings/*'

export const repoSettingsAreaRoutes: readonly RepoSettingsAreaRoute[] = [
    {
        path: '',
        render: lazyComponent(() => import('./RepoSettingsMirrorPage.tsx'), 'RepoSettingsMirrorPage'),
    },
    {
        path: '/index',
        render: lazyComponent(() => import('./RepoSettingsIndexPage.tsx'), 'RepoSettingsIndexPage'),
    },
    {
        path: '/mirror',
        // The /mirror page used to be separate but we combined this one and the
        // '' route above, so we redirect here in case people still link to this
        // page.
        render: () => <RedirectRoute getRedirectURL={() => '..'} />,
    },
    {
        path: '/permissions',
        render: props => <RepoSettingsPermissionsPage {...props} />,
    },
    {
        path: '/logs',
        render: props => <RepoSettingsLogsPage {...props} />,
    },

    // Legacy routes
    {
        path: '/code-intelligence/lsif-uploads/:id',
        render: () => <RedirectRoute getRedirectURL={({ params }) => `../uploads/${params.id}`} />,
    },
    {
        path: '/code-intelligence/*',
        render: () => <RedirectRoute getRedirectURL={({ location }) => location.pathname.replace('/settings/', '/')} />,
    },
]
