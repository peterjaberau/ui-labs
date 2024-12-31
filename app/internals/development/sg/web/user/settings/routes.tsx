import type { FC } from 'react'

import { Navigate } from '@remix-run/react'

import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { useIsLightTheme } from '~/internals/development/sg/shared/theme.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { Text } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { canWriteBatchChanges } from '../../batches/utils.ts'
import type { ExecutorsUserAreaProps } from '../../enterprise/executors/ExecutorsUserArea.tsx'
import type { UserEventLogsPageProps } from '../../enterprise/user/settings/UserEventLogsPage.tsx'
import type { UserSettingsAreaUserFields } from '../../graphql-operations.ts'
import { SiteAdminAlert } from '../../site-admin/SiteAdminAlert.tsx'

import type { UserSettingsAreaRoute, UserSettingsAreaRouteContext } from './UserSettingsArea.tsx'

const ExecutorsUserArea = lazyComponent<ExecutorsUserAreaProps, 'ExecutorsUserArea'>(
    () => import('../../enterprise/executors/ExecutorsUserArea.tsx'),
    'ExecutorsUserArea'
)

const SettingsArea = lazyComponent(() => import('../../settings/SettingsArea.tsx'), 'SettingsArea')

const UserSettingsSecurityPage = lazyComponent(
    () => import('./auth/UserSettingsSecurityPage.tsx'),
    'UserSettingsSecurityPage'
)

const shouldRenderBatchChangesPage = ({
    batchChangesEnabled,
    user: { viewerCanAdminister },
    authenticatedUser,
}: UserSettingsAreaRouteContext): boolean =>
    batchChangesEnabled && viewerCanAdminister && canWriteBatchChanges(authenticatedUser)

export const userSettingsAreaRoutes: readonly UserSettingsAreaRoute[] = [
    {
        path: '',
        render: props => <UserSettingAreaIndexPage {...props} />,
    },
    {
        path: 'profile',
        render: lazyComponent(() => import('./profile/UserSettingsProfilePage.tsx'), 'UserSettingsProfilePage'),
    },
    {
        path: 'password',
        render: () => <Navigate to="../security" replace={true} />,
    },
    {
        path: 'quota',
        render: lazyComponent(() => import('./quota/UserQuotaProfilePage.tsx'), 'UserQuotaProfilePage'),
        condition: ({ authenticatedUser }) => authenticatedUser.siteAdmin,
    },
    {
        path: 'emails',
        render: lazyComponent(() => import('./emails/UserSettingsEmailsPage.tsx'), 'UserSettingsEmailsPage'),
    },
    {
        path: 'tokens/*',
        render: lazyComponent(() => import('./accessTokens/UserSettingsTokensArea.tsx'), 'UserSettingsTokensArea'),
        condition: () => window.context.accessTokensAllow !== 'none',
    },
    // future GA Cloud routes
    {
        path: 'security',
        render: props => <UserSettingsSecurityPage {...props} context={window.context} />,
    },
    {
        path: 'product-research',
        render: lazyComponent(() => import('./research/ProductResearch.tsx'), 'ProductResearchPage'),
        condition: () => window.context.productResearchPageEnabled,
    },
    {
        path: 'permissions',
        render: lazyComponent(
            () => import('../../enterprise/user/settings/auth/UserSettingsPermissionsPage.tsx'),
            'UserSettingsPermissionsPage'
        ),
    },
    {
        path: 'event-log',
        render: lazyComponent<UserEventLogsPageProps, 'UserEventLogsPage'>(
            () => import('../../enterprise/user/settings/UserEventLogsPage.tsx'),
            'UserEventLogsPage'
        ),
    },
    {
        path: 'executors/*',
        render: props => (
            <ExecutorsUserArea
                {...props}
                telemetryRecorder={props.platformContext.telemetryRecorder}
                namespaceID={props.user.id}
            />
        ),
        condition: shouldRenderBatchChangesPage,
    },
    {
        path: 'batch-changes',
        render: lazyComponent(
            () => import('../../enterprise/batches/settings/BatchChangesSettingsArea.tsx'),
            'BatchChangesSettingsArea'
        ),
        condition: shouldRenderBatchChangesPage,
    },
]

interface UserSettingAreaIndexPageProps extends PlatformContextProps, SettingsCascadeProps, TelemetryProps {
    isSourcegraphDotCom: boolean
    authenticatedUser: AuthenticatedUser
    user: UserSettingsAreaUserFields
    extraHeader?: JSX.Element
    className?: string
}

const UserSettingAreaIndexPage: FC<UserSettingAreaIndexPageProps> = props => {
    const { isSourcegraphDotCom, authenticatedUser, user } = props
    const isLightTheme = useIsLightTheme()

    if (isSourcegraphDotCom && authenticatedUser && user.id !== authenticatedUser.id) {
        return (
            <SiteAdminAlert className="sidebar__alert" variant="danger">
                Only the user may access their individual settings.
            </SiteAdminAlert>
        )
    }
    return (
        <SettingsArea
            {...props}
            subject={props.user}
            isLightTheme={isLightTheme}
            extraHeader={
                <>
                    {authenticatedUser && user.id !== authenticatedUser.id && (
                        <SiteAdminAlert className="sidebar__alert">
                            Viewing settings for <strong>{user.username}</strong>
                        </SiteAdminAlert>
                    )}
                    <Text>User settings override global and organization settings.</Text>
                </>
            }
        />
    )
}
