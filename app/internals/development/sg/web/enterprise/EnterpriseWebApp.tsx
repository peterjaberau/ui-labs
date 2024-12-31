import type { FC } from 'react'

import '../SourcegraphWebApp.scss'

import { logger } from '~/internals/development/sg/common'

import { LegacySourcegraphWebApp } from '../LegacySourcegraphWebApp.tsx'
import { orgAreaHeaderNavItems } from '../org/area/navitems.ts'
import { orgAreaRoutes } from '../org/area/routes.tsx'
import { orgSettingsAreaRoutes } from '../org/settings/routes.tsx'
import { orgSettingsSideBarItems } from '../org/settings/sidebaritems.ts'
import { repoSettingsAreaRoutes } from '../repo/settings/routes.tsx'
import { repoSettingsSideBarGroups } from '../repo/settings/sidebaritems.ts'
import { routes } from '../routes.tsx'
import { siteAdminAreaRoutes } from '../site-admin/routes.tsx'
import { siteAdminSidebarGroups } from '../site-admin/sidebaritems.ts'
import { SourcegraphWebApp } from '../SourcegraphWebApp.tsx'
import { type StaticAppConfig, type StaticInjectedAppConfig, windowContextConfig } from '../staticAppConfig.ts'
import type { AppShellInit } from '../storm/app-shell-init.ts'
import { routes as stormRoutes } from '../storm/routes.tsx'
import { userAreaHeaderNavItems } from '../user/area/navitems.ts'
import { userAreaRoutes } from '../user/area/routes.tsx'
import { userSettingsAreaRoutes } from '../user/settings/routes.tsx'
import { userSettingsSideBarItems } from '../user/settings/sidebaritems.ts'

import { BrainDot } from './codeintel/dashboard/components/BrainDot.tsx'
import { enterpriseRepoContainerRoutes } from './repo/enterpriseRepoContainerRoutes.tsx'
import { enterpriseRepoRevisionContainerRoutes } from './repo/enterpriseRepoRevisionContainerRoutes.tsx'
import { siteAdminOverviewComponents } from './site-admin/overview/overviewComponents.ts'

const injectedValuesConfig = {
    /**
     * Routes and nav links
     */
    siteAdminAreaRoutes,
    siteAdminSideBarGroups: siteAdminSidebarGroups,
    siteAdminOverviewComponents,
    userAreaHeaderNavItems,
    userAreaRoutes,
    userSettingsSideBarItems,
    userSettingsAreaRoutes,
    orgSettingsSideBarItems,
    orgSettingsAreaRoutes,
    orgAreaRoutes,
    orgAreaHeaderNavItems,
    repoContainerRoutes: enterpriseRepoContainerRoutes,
    repoRevisionContainerRoutes: enterpriseRepoRevisionContainerRoutes,
    repoSettingsAreaRoutes,
    repoSettingsSidebarGroups: repoSettingsSideBarGroups,
    routes,

    /**
     * Per feature injections
     */
    brainDot: BrainDot,
} satisfies StaticInjectedAppConfig

const staticAppConfig = {
    ...injectedValuesConfig,
    ...windowContextConfig,
} satisfies StaticAppConfig

export const EnterpriseWebApp: FC<AppShellInit> = props => {
    if (window.context.experimentalFeatures.enableStorm) {
        const { graphqlClient, temporarySettingsStorage } = props

        logger.log('Storm 🌪️ is enabled for this page load.')

        return (
            <SourcegraphWebApp
                {...staticAppConfig}
                routes={stormRoutes}
                graphqlClient={graphqlClient}
                temporarySettingsStorage={temporarySettingsStorage}
                telemetryRecorder={window.context.telemetryRecorder}
            />
        )
    }

    return <LegacySourcegraphWebApp {...staticAppConfig} />
}
