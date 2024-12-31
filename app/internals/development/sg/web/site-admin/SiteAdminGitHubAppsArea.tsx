import type { FC } from 'react'

import { Routes, Route } from '@remix-run/react'

import { useQuery } from '~/internals/development/sg/http-client'
import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { LoadingSpinner, ErrorAlert } from '~/internals/development/sg/wildcard'

import {
    GitHubAppDomain,
    GitHubAppKind,
    type SiteExternalServiceConfigResult,
    type SiteExternalServiceConfigVariables,
} from '../graphql-operations.ts'

import { SITE_EXTERNAL_SERVICE_CONFIG } from './backend.ts'

const CreateGitHubAppPage = lazyComponent(
    () => import('../components/gitHubApps/CreateGitHubAppPage.tsx'),
    'CreateGitHubAppPage'
)
const GitHubAppPage = lazyComponent(() => import('../components/gitHubApps/GitHubAppPage.tsx'), 'GitHubAppPage')
const GitHubAppsPage = lazyComponent(() => import('../components/gitHubApps/GitHubAppsPage.tsx'), 'GitHubAppsPage')

interface Props extends TelemetryProps, PlatformContextProps {
    authenticatedUser: AuthenticatedUser
    batchChangesEnabled: boolean
}

const DEFAULT_EVENTS = [
    'repository',
    'public',
    'member',
    'membership',
    'organization',
    'team',
    'team_add',
    'meta',
    'push',
]

const DEFAULT_PERMISSIONS = {
    contents: 'read',
    emails: 'read',
    members: 'read',
    metadata: 'read',
}

export const SiteAdminGitHubAppsArea: FC<Props> = props => {
    const { data, error, loading } = useQuery<SiteExternalServiceConfigResult, SiteExternalServiceConfigVariables>(
        SITE_EXTERNAL_SERVICE_CONFIG,
        {}
    )

    if (error && !loading) {
        return <ErrorAlert error={error} />
    }

    if (loading && !error) {
        return <LoadingSpinner />
    }

    if (!data) {
        return null
    }

    return (
        <Routes>
            <Route
                index={true}
                element={
                    <GitHubAppsPage
                        batchChangesEnabled={props.batchChangesEnabled}
                        telemetryRecorder={props.platformContext.telemetryRecorder}
                    />
                }
            />

            <Route
                path="new"
                element={
                    <CreateGitHubAppPage
                        appKind={GitHubAppKind.REPO_SYNC}
                        defaultEvents={DEFAULT_EVENTS}
                        defaultPermissions={DEFAULT_PERMISSIONS}
                        appDomain={GitHubAppDomain.REPOS}
                        telemetryRecorder={props.platformContext.telemetryRecorder}
                        {...props}
                    />
                }
            />
            <Route
                path=":appID"
                element={
                    <GitHubAppPage
                        headerParentBreadcrumb={{ to: '/site-admin/github-apps', text: 'GitHub Apps' }}
                        telemetryRecorder={props.platformContext.telemetryRecorder}
                        {...props}
                    />
                }
            />
        </Routes>
    )
}
