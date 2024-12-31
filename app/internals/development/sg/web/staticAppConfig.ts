import type { RouteObject } from '@remix-run/react'

import type { SearchContextProps } from '~/internals/development/sg/shared/search'

import type { BatchChangesProps } from './batches'
import type { CodeIntelligenceProps } from './codeintel'
import type { CodeMonitoringProps } from './codeMonitoring'
import type { SearchJobsProps } from './enterprise/search-jobs'
import type { CodeInsightsProps } from './insights/types.ts'
import type { NotebookProps } from './notebooks'
import type { OrgAreaRoute } from './org/area/OrgArea.tsx'
import type { OrgAreaHeaderNavItem } from './org/area/OrgHeader.tsx'
import type { OrgSettingsAreaRoute } from './org/settings/OrgSettingsArea.tsx'
import type { OrgSettingsSidebarItems } from './org/settings/OrgSettingsSidebar.tsx'
import type { OwnConfigProps } from './own/OwnConfigProps.ts'
import type { RepoContainerRoute } from './repo/RepoContainer.tsx'
import type { RepoRevisionContainerRoute } from './repo/RepoRevisionContainer.tsx'
import type { RepoSettingsAreaRoute } from './repo/settings/RepoSettingsArea.tsx'
import type { RepoSettingsSideBarGroup } from './repo/settings/RepoSettingsSidebar.tsx'
import type { SearchAggregationProps } from './search'
import type { SiteAdminAreaRoute } from './site-admin/SiteAdminArea.tsx'
import type { SiteAdminSideBarGroups } from './site-admin/SiteAdminSidebar.tsx'
import type { UserAreaRoute } from './user/area/UserArea.tsx'
import type { UserAreaHeaderNavItem } from './user/area/UserAreaHeader.tsx'
import type { UserSettingsAreaRoute } from './user/settings/UserSettingsArea.tsx'
import type { UserSettingsSidebarItems } from './user/settings/UserSettingsSidebar.tsx'

export interface StaticAppConfig extends StaticInjectedAppConfig, StaticWindowContextComputedAppConfig {}

/**
 * Non-primitive values (components, objects) we inject at the tip of the React tree.
 */
export interface StaticInjectedAppConfig extends Pick<CodeIntelligenceProps, 'brainDot'> {
    siteAdminAreaRoutes: readonly SiteAdminAreaRoute[]
    siteAdminSideBarGroups: SiteAdminSideBarGroups
    siteAdminOverviewComponents: readonly React.ComponentType<React.PropsWithChildren<unknown>>[]
    userAreaHeaderNavItems: readonly UserAreaHeaderNavItem[]
    userAreaRoutes: readonly UserAreaRoute[]
    userSettingsSideBarItems: UserSettingsSidebarItems
    userSettingsAreaRoutes: readonly UserSettingsAreaRoute[]
    orgSettingsSideBarItems: OrgSettingsSidebarItems
    orgSettingsAreaRoutes: readonly OrgSettingsAreaRoute[]
    orgAreaHeaderNavItems: readonly OrgAreaHeaderNavItem[]
    orgAreaRoutes: readonly OrgAreaRoute[]
    repoContainerRoutes: readonly RepoContainerRoute[]
    repoRevisionContainerRoutes: readonly RepoRevisionContainerRoute[]
    repoSettingsAreaRoutes: readonly RepoSettingsAreaRoute[]
    repoSettingsSidebarGroups: readonly RepoSettingsSideBarGroup[]
    routes: RouteObject[]
}

/**
 * Static values we compute based on the `window.context`.
 *
 * Static in the sense that there are no other ways to change
 * these values except by refetching the entire original value (window.contexxt)
 */
export interface StaticWindowContextComputedAppConfig
    extends Pick<BatchChangesProps, 'batchChangesEnabled'>,
        Pick<SearchAggregationProps, 'searchAggregationEnabled'>,
        Pick<CodeMonitoringProps, 'codeMonitoringEnabled'>,
        Pick<NotebookProps, 'notebooksEnabled'>,
        Pick<SearchContextProps, 'searchContextsEnabled'>,
        Pick<CodeInsightsProps, 'codeInsightsEnabled'>,
        Pick<CodeIntelligenceProps, 'codeIntelligenceEnabled'>,
        Pick<OwnConfigProps, 'ownEnabled'>,
        Pick<SearchJobsProps, 'searchJobsEnabled'> {
    isSourcegraphDotCom: boolean
    needsRepositoryConfiguration: boolean
    batchChangesWebhookLogsEnabled: boolean
}

/**
 * This configuration object is universal for both versions of the app:
 * enterprise and open source.
 */
export const windowContextConfig = {
    isSourcegraphDotCom: window.context.sourcegraphDotComMode,
    needsRepositoryConfiguration: window.context.needsRepositoryConfiguration,
    batchChangesWebhookLogsEnabled: window.context.batchChangesWebhookLogsEnabled,
    batchChangesEnabled: window.context.batchChangesEnabled,
    codeInsightsEnabled: window.context.codeInsightsEnabled,
    codeIntelligenceEnabled: window.context.codeIntelligenceEnabled,
    searchContextsEnabled: window.context.searchContextsEnabled,
    notebooksEnabled: window.context.notebooksEnabled,
    codeMonitoringEnabled: window.context.codeMonitoringEnabled,
    searchAggregationEnabled: window.context.searchAggregationEnabled,
    ownEnabled: window.context.ownEnabled,
    searchJobsEnabled: window.context.searchJobsEnabled,
} satisfies StaticWindowContextComputedAppConfig
