import type { FC } from 'react'

import { useIsLightTheme } from '~/internals/development/sg/shared/theme.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { Text } from '~/internals/development/sg/wildcard'

import type { OrgExecutorSecretsListPageProps } from '../../enterprise/executors/secrets/ExecutorSecretsListPage.tsx'
import { SiteAdminAlert } from '../../site-admin/SiteAdminAlert.tsx'

import type { OrgSettingsAreaRoute, OrgSettingsAreaRouteContext } from './OrgSettingsArea.tsx'

const SettingsArea = lazyComponent(() => import('../../settings/SettingsArea.tsx'), 'SettingsArea')

const OrgExecutorSecretsListPage = lazyComponent<OrgExecutorSecretsListPageProps, 'OrgExecutorSecretsListPage'>(
    () => import('../../enterprise/executors/secrets/ExecutorSecretsListPage.tsx'),
    'OrgExecutorSecretsListPage'
)

export const orgSettingsAreaRoutes: readonly OrgSettingsAreaRoute[] = [
    {
        path: '',
        render: props => <SettingsAreaIndexPage {...props} />,
    },
    {
        path: 'profile',
        render: lazyComponent(() => import('./profile/OrgSettingsProfilePage.tsx'), 'OrgSettingsProfilePage'),
    },
    {
        path: 'members',
        render: lazyComponent(() => import('./members/OrgSettingsMembersPage.tsx'), 'OrgSettingsMembersPage'),
    },
    {
        path: '/executors/secrets',
        render: props => (
            <OrgExecutorSecretsListPage
                {...props}
                orgID={props.org.id}
                telemetryRecorder={props.platformContext.telemetryRecorder}
            />
        ),
        condition: ({ batchChangesEnabled, org: { viewerCanAdminister } }) =>
            batchChangesEnabled && viewerCanAdminister && window.context?.codeSearchEnabledOnInstance,
    },
]

interface SettingsAreaIndexPageProps extends OrgSettingsAreaRouteContext {}

const SettingsAreaIndexPage: FC<SettingsAreaIndexPageProps> = props => {
    const isLightTheme = useIsLightTheme()

    return (
        <div>
            <SettingsArea
                {...props}
                isLightTheme={isLightTheme}
                subject={props.org}
                extraHeader={
                    <>
                        {props.authenticatedUser && props.org.viewerCanAdminister && !props.org.viewerIsMember && (
                            <SiteAdminAlert className="sidebar__alert">
                                Viewing settings for <strong>{props.org.name}</strong>
                            </SiteAdminAlert>
                        )}
                        <Text>
                            Organization settings apply to all members. User settings override organization settings.
                        </Text>
                    </>
                }
            />
        </div>
    )
}
