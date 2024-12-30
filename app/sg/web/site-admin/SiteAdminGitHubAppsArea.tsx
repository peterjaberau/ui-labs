import type { FC } from 'react'

import { Routes, Route } from '@remix-run/react'

import { useQuery } from '~/sg/http-client'
import type { AuthenticatedUser } from '~/sg/shared/auth'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'
import { LoadingSpinner, ErrorAlert } from '~/sg/wildcard'

import {
    GitHubAppDomain,
    GitHubAppKind,
    type SiteExternalServiceConfigResult,
    type SiteExternalServiceConfigVariables,
} from '../graphql-operations'

import { SITE_EXTERNAL_SERVICE_CONFIG } from './backend'

const CreateGitHubAppPage = lazyComponent(
    () => import('../components/gitHubApps/CreateGitHubAppPage'),
    'CreateGitHubAppPage'
)
const GitHubAppPage = lazyComponent(() => import('../components/gitHubApps/GitHubAppPage'), 'GitHubAppPage')
const GitHubAppsPage = lazyComponent(() => import('../components/gitHubApps/GitHubAppsPage'), 'GitHubAppsPage')

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
