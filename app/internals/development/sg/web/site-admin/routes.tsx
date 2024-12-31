import { Navigate, useLocation } from '@remix-run/react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { FeedbackBadge } from '~/internals/development/sg/wildcard'

import type { BatchSpecsPageProps } from '../enterprise/batches/BatchSpecsPage.tsx'
import { SHOW_BUSINESS_FEATURES } from '../enterprise/dotcom/productSubscriptions/features.ts'
import { OwnAnalyticsPage } from '../enterprise/own/admin-ui/OwnAnalyticsPage.tsx'
import type { SiteAdminRolesPageProps } from '../enterprise/rbac/SiteAdminRolesPage.tsx'
import type { RoleAssignmentModalProps } from '../enterprise/site-admin/UserManagement/components/RoleAssignmentModal.tsx'
import { GitHubAppKind } from '../graphql-operations.ts'
import { checkRequestAccessAllowed } from '../util/checkRequestAccessAllowed.ts'

import { isPackagesEnabled } from './flags.ts'
import { PermissionsSyncJobsTable } from './permissions-center/PermissionsSyncJobsTable.tsx'
import type { SiteAdminAreaRoute } from './SiteAdminArea.tsx'

const AnalyticsOverviewPage = lazyComponent(() => import('./analytics/AnalyticsOverviewPage'), 'AnalyticsOverviewPage')
const AnalyticsSearchPage = lazyComponent(() => import('./analytics/AnalyticsSearchPage'), 'AnalyticsSearchPage')
const AnalyticsCodeIntelPage = lazyComponent(
    () => import('./analytics/AnalyticsCodeIntelPage'),
    'AnalyticsCodeIntelPage'
)
const AnalyticsExtensionsPage = lazyComponent(
    () => import('./analytics/AnalyticsExtensionsPage'),
    'AnalyticsExtensionsPage'
)
const AnalyticsUsersPage = lazyComponent(() => import('./analytics/AnalyticsUsersPage'), 'AnalyticsUsersPage')
const AnalyticsCodyPage = lazyComponent(() => import('./analytics/AnalyticsCodyPage'), 'AnalyticsCodyPage')
const AnalyticsCodeInsightsPage = lazyComponent(
    () => import('./analytics/AnalyticsCodeInsightsPage'),
    'AnalyticsCodeInsightsPage'
)
const AnalyticsBatchChangesPage = lazyComponent(
    () => import('./analytics/AnalyticsBatchChangesPage'),
    'AnalyticsBatchChangesPage'
)
const AnalyticsNotebooksPage = lazyComponent(
    () => import('./analytics/AnalyticsNotebooksPage'),
    'AnalyticsNotebooksPage'
)
const SiteAdminConfigurationPage = lazyComponent(
    () => import('./SiteAdminConfigurationPage.tsx'),
    'SiteAdminConfigurationPage'
)
const SiteAdminSettingsPage = lazyComponent(() => import('./SiteAdminSettingsPage.tsx'), 'SiteAdminSettingsPage')
const SiteAdminOnboardingTourPage = lazyComponent(
    () => import('./SiteAdminOnboardingTourPage.tsx'),
    'SiteAdminOnboardingTourPage'
)
const SiteAdminExternalServicesArea = lazyComponent(
    () => import('./SiteAdminExternalServicesArea.tsx'),
    'SiteAdminExternalServicesArea'
)
const SiteAdminGitHubAppsArea = lazyComponent(() => import('./SiteAdminGitHubAppsArea.tsx'), 'SiteAdminGitHubAppsArea')
const SiteAdminRepositoriesPage = lazyComponent(
    () => import('./SiteAdminRepositoriesPage.tsx'),
    'SiteAdminRepositoriesPage'
)
const SiteAdminOrgsPage = lazyComponent(() => import('./SiteAdminOrgsPage.tsx'), 'SiteAdminOrgsPage')
export const UsersManagement = lazyComponent(() => import('./UserManagement'), 'UsersManagement')
const AccessRequestsPage = lazyComponent(() => import('./AccessRequestsPage'), 'AccessRequestsPage')

const SiteAdminCreateUserPage = lazyComponent(() => import('./SiteAdminCreateUserPage.tsx'), 'SiteAdminCreateUserPage')
const SiteAdminTokensPage = lazyComponent(() => import('./SiteAdminTokensPage.tsx'), 'SiteAdminTokensPage')
const SiteAdminUpdatesPage = lazyComponent(() => import('./SiteAdminUpdatesPage.tsx'), 'SiteAdminUpdatesPage')
const SiteAdminPingsPage = lazyComponent(() => import('./SiteAdminPingsPage.tsx'), 'SiteAdminPingsPage')
const SiteAdminReportBugPage = lazyComponent(() => import('./SiteAdminReportBugPage.tsx'), 'SiteAdminReportBugPage')
const SiteAdminSurveyResponsesPage = lazyComponent(
    () => import('./SiteAdminSurveyResponsesPage.tsx'),
    'SiteAdminSurveyResponsesPage'
)
const SiteAdminMigrationsPage = lazyComponent(() => import('./SiteAdminMigrationsPage.tsx'), 'SiteAdminMigrationsPage')
const SiteAdminOutboundRequestsPage = lazyComponent(
    () => import('./SiteAdminOutboundRequestsPage.tsx'),
    'SiteAdminOutboundRequestsPage'
)
const SiteAdminBackgroundJobsPage = lazyComponent(
    () => import('./SiteAdminBackgroundJobsPage.tsx'),
    'SiteAdminBackgroundJobsPage'
)
const SiteAdminFeatureFlagsPage = lazyComponent(
    () => import('./SiteAdminFeatureFlagsPage.tsx'),
    'SiteAdminFeatureFlagsPage'
)
const SiteAdminFeatureFlagConfigurationPage = lazyComponent(
    () => import('./SiteAdminFeatureFlagConfigurationPage.tsx'),
    'SiteAdminFeatureFlagConfigurationPage'
)
const OutboundWebhooksPage = lazyComponent(
    () => import('./outbound-webhooks/OutboundWebhooksPage.tsx'),
    'OutboundWebhooksPage'
)
const OutgoingWebhookCreatePage = lazyComponent(() => import('./outbound-webhooks/CreatePage.tsx'), 'CreatePage')
const OutgoingWebhookEditPage = lazyComponent(() => import('./outbound-webhooks/EditPage.tsx'), 'EditPage')
const SiteAdminWebhooksPage = lazyComponent(() => import('./SiteAdminWebhooksPage.tsx'), 'SiteAdminWebhooksPage')
const SiteAdminWebhookCreatePage = lazyComponent(
    () => import('./SiteAdminWebhookCreatePage.tsx'),
    'SiteAdminWebhookCreatePage'
)
const SiteAdminWebhookPage = lazyComponent(() => import('./SiteAdminWebhookPage.tsx'), 'SiteAdminWebhookPage')
const SiteAdminSlowRequestsPage = lazyComponent(
    () => import('./SiteAdminSlowRequestsPage.tsx'),
    'SiteAdminSlowRequestsPage'
)
const SiteAdminWebhookUpdatePage = lazyComponent(
    () => import('./SiteAdminWebhookUpdatePage.tsx'),
    'SiteAdminWebhookUpdatePage'
)
const SiteAdminPackagesPage = lazyComponent(() => import('./SiteAdminPackagesPage.tsx'), 'SiteAdminPackagesPage')
const GitserversPageProps = lazyComponent(() => import('./SiteAdminGitserversPage.tsx'), 'SiteAdminGitserversPage')

const SiteAdminProductSubscriptionPage = lazyComponent(
    () => import('../enterprise/site-admin/productSubscription/SiteAdminProductSubscriptionPage.tsx'),
    'SiteAdminProductSubscriptionPage'
)
const SiteAdminCreateProductSubscriptionPage = lazyComponent(
    () => import('../enterprise/site-admin/dotcom/productSubscriptions/SiteAdminCreateProductSubscriptionPage.tsx'),
    'SiteAdminCreateProductSubscriptionPage'
)
const DotComSiteAdminProductSubscriptionPage = lazyComponent(
    () => import('../enterprise/site-admin/dotcom/productSubscriptions/SiteAdminProductSubscriptionPage.tsx'),
    'SiteAdminProductSubscriptionPage'
)
const SiteAdminProductSubscriptionsPage = lazyComponent(
    () => import('../enterprise/site-admin/dotcom/productSubscriptions/SiteAdminProductSubscriptionsPage.tsx'),
    'SiteAdminProductSubscriptionsPage'
)
const SiteAdminLicenseKeyLookupPage = lazyComponent(
    () => import('../enterprise/site-admin/dotcom/productSubscriptions/SiteAdminLicenseKeyLookupPage.tsx'),
    'SiteAdminLicenseKeyLookupPage'
)
const SiteAdminAuthenticationProvidersPage = lazyComponent(
    () => import('../enterprise/site-admin/SiteAdminAuthenticationProvidersPage.tsx'),
    'SiteAdminAuthenticationProvidersPage'
)
const SiteAdminExternalAccountsPage = lazyComponent(
    () => import('../enterprise/site-admin/SiteAdminExternalAccountsPage.tsx'),
    'SiteAdminExternalAccountsPage'
)
const BatchChangesSiteConfigSettingsPage = lazyComponent(
    () => import('../enterprise/batches/settings/BatchChangesSiteConfigSettingsPage.tsx'),
    'BatchChangesSiteConfigSettingsPage'
)
const BatchChangesCreateGitHubAppPage = lazyComponent(
    () => import('../enterprise/batches/settings/BatchChangesCreateGitHubAppPage.tsx'),
    'BatchChangesCreateGitHubAppPage'
)
const GitHubAppPage = lazyComponent(() => import('../components/gitHubApps/GitHubAppPage.tsx'), 'GitHubAppPage')
const BatchSpecsPage = lazyComponent<BatchSpecsPageProps, 'BatchSpecsPage'>(
    () => import('../enterprise/batches/BatchSpecsPage.tsx'),
    'BatchSpecsPage'
)
const AdminCodeIntelArea = lazyComponent(
    () => import('../enterprise/codeintel/admin/AdminCodeIntelArea.tsx'),
    'AdminCodeIntelArea'
)
const SiteAdminPreciseIndexPage = lazyComponent(
    () => import('../enterprise/site-admin/SiteAdminPreciseIndexPage.tsx'),
    'SiteAdminPreciseIndexPage'
)
const ExecutorsSiteAdminArea = lazyComponent(
    () => import('../enterprise/executors/ExecutorsSiteAdminArea.tsx'),
    'ExecutorsSiteAdminArea'
)

const SiteAdminRolesPage = lazyComponent<SiteAdminRolesPageProps, 'SiteAdminRolesPage'>(
    () => import('../enterprise/rbac/SiteAdminRolesPage.tsx'),
    'SiteAdminRolesPage'
)

const RoleAssignmentModal = lazyComponent<RoleAssignmentModalProps, 'RoleAssignmentModal'>(
    () => import('../enterprise/site-admin/UserManagement/components/RoleAssignmentModal.tsx'),
    'RoleAssignmentModal'
)

const CodeInsightsJobsPage = lazyComponent(
    () => import('../enterprise/insights/admin-ui/CodeInsightsJobs.tsx'),
    'CodeInsightsJobs'
)
const OwnStatusPage = lazyComponent(() => import('../enterprise/own/admin-ui/OwnStatusPage.tsx'), 'OwnStatusPage')

export const otherSiteAdminRoutes: readonly SiteAdminAreaRoute[] = [
    {
        path: '/',
        render: props => <AnalyticsOverviewPage {...props} />,
    },
    {
        path: '/analytics/search',
        render: props => <AnalyticsSearchPage {...props} />,
        condition: () => window.context?.codeSearchEnabledOnInstance,
    },
    {
        path: '/analytics/code-intel',
        render: props => <AnalyticsCodeIntelPage {...props} />,
        condition: () => window.context?.codeSearchEnabledOnInstance,
    },
    {
        path: '/analytics/extensions',
        render: props => <AnalyticsExtensionsPage {...props} />,
    },
    {
        path: '/analytics/users',
        render: props => <AnalyticsUsersPage {...props} />,
    },
    {
        path: '/analytics/cody',
        render: props => <AnalyticsCodyPage {...props} />,
        condition: () => window.context?.codyEnabledOnInstance,
    },
    {
        path: '/analytics/code-insights',
        render: props => <AnalyticsCodeInsightsPage {...props} />,
        condition: ({ codeInsightsEnabled }) => codeInsightsEnabled,
    },
    {
        path: '/analytics/batch-changes',
        render: props => <AnalyticsBatchChangesPage {...props} />,
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
    {
        path: '/analytics/notebooks',
        render: props => <AnalyticsNotebooksPage {...props} />,
        condition: () => window.context?.codeSearchEnabledOnInstance,
    },
    {
        path: '/configuration',
        render: props => <SiteAdminConfigurationPage {...props} />,
    },
    {
        path: '/global-settings',
        render: props => <SiteAdminSettingsPage {...props} />,
    },
    {
        path: '/end-user-onboarding',
        render: props => <SiteAdminOnboardingTourPage {...props} />,
        condition: ({ endUserOnboardingEnabled }) => endUserOnboardingEnabled,
    },
    {
        path: '/github-apps/*',
        render: props => <SiteAdminGitHubAppsArea {...props} />,
    },
    {
        path: '/external-services/*',
        render: props => <SiteAdminExternalServicesArea {...props} />,
    },
    {
        path: '/repositories',
        render: props => <SiteAdminRepositoriesPage {...props} />,
    },
    {
        path: '/organizations',
        render: props => <SiteAdminOrgsPage {...props} />,
    },
    {
        path: '/account-requests',
        render: props => <AccessRequestsPage {...props} />,
        condition: () => checkRequestAccessAllowed(window.context),
    },
    {
        path: '/users/new',
        render: props => <SiteAdminCreateUserPage {...props} />,
    },
    {
        path: '/tokens',
        render: props => <SiteAdminTokensPage {...props} />,
    },
    {
        path: '/updates',
        render: props => <SiteAdminUpdatesPage {...props} />,
    },
    {
        path: '/pings',
        render: props => <SiteAdminPingsPage {...props} />,
    },
    {
        path: '/report-bug',
        render: props => <SiteAdminReportBugPage {...props} />,
    },
    {
        path: '/surveys',
        render: props => <SiteAdminSurveyResponsesPage {...props} />,
    },
    {
        path: '/migrations',
        render: props => <SiteAdminMigrationsPage {...props} />,
    },
    {
        path: '/outbound-requests',
        render: props => <SiteAdminOutboundRequestsPage {...props} />,
    },
    {
        path: '/background-jobs',
        render: props => <SiteAdminBackgroundJobsPage {...props} />,
    },
    {
        path: '/feature-flags',
        render: props => <SiteAdminFeatureFlagsPage {...props} />,
    },
    {
        path: '/feature-flags/configuration/:name',
        render: props => <SiteAdminFeatureFlagConfigurationPage {...props} />,
    },
    {
        path: '/webhooks/outgoing',
        render: props => <OutboundWebhooksPage {...props} />,
    },
    {
        path: '/webhooks/outgoing/create',
        render: props => <OutgoingWebhookCreatePage {...props} />,
    },
    {
        path: '/webhooks/outgoing/:id',
        render: props => <OutgoingWebhookEditPage {...props} />,
    },
    {
        path: '/webhooks/incoming',
        render: props => <SiteAdminWebhooksPage {...props} />,
    },
    {
        path: '/webhooks/incoming/create',
        render: props => <SiteAdminWebhookCreatePage {...props} />,
    },
    {
        path: '/webhooks/incoming/:id',
        render: props => <SiteAdminWebhookPage {...props} />,
    },
    {
        path: '/webhooks/incoming/:id/edit',
        render: props => <SiteAdminWebhookUpdatePage {...props} />,
    },
    {
        path: '/slow-requests',
        render: props => <SiteAdminSlowRequestsPage {...props} />,
    },
    {
        path: '/packages',
        render: props => <SiteAdminPackagesPage {...props} />,
        condition: isPackagesEnabled,
    },
    {
        path: '/permissions-syncs',
        render: props => <PermissionsSyncJobsTable {...props} />,
    },
    {
        path: '/gitservers',
        render: props => <GitserversPageProps {...props} />,
    },
    {
        path: '/users',
        render: props => (
            <UsersManagement
                renderAssignmentModal={(onCancel, onSuccess, user) => (
                    <RoleAssignmentModal onCancel={onCancel} onSuccess={onSuccess} user={user} />
                )}
                {...props}
            />
        ),
    },
    {
        path: '/license',
        render: props => (
            <SiteAdminProductSubscriptionPage telemetryRecorder={props.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/dotcom/product/subscriptions/new',
        render: props => <SiteAdminCreateProductSubscriptionPage {...props} />,
        condition: () => SHOW_BUSINESS_FEATURES,
    },
    {
        path: '/dotcom/product/subscriptions/:subscriptionUUID',
        render: props => <DotComSiteAdminProductSubscriptionPage {...props} />,
        condition: () => SHOW_BUSINESS_FEATURES,
    },
    {
        path: '/dotcom/product/subscriptions',
        render: props => (
            <SiteAdminProductSubscriptionsPage {...props} telemetryRecorder={props.platformContext.telemetryRecorder} />
        ),
        condition: () => SHOW_BUSINESS_FEATURES,
    },
    {
        path: '/dotcom/product/licenses',
        render: props => <SiteAdminLicenseKeyLookupPage {...props} />,
        condition: () => SHOW_BUSINESS_FEATURES,
    },
    {
        path: '/auth/providers',
        render: () => <SiteAdminAuthenticationProvidersPage />,
    },
    {
        path: '/auth/external-accounts',
        render: () => <SiteAdminExternalAccountsPage />,
    },
    {
        path: '/batch-changes',
        render: props => <BatchChangesSiteConfigSettingsPage {...props} />,
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
    {
        path: '/batch-changes/github-apps/new',
        render: ({ authenticatedUser }) => (
            <BatchChangesCreateGitHubAppPage
                authenticatedUser={authenticatedUser}
                kind={GitHubAppKind.COMMIT_SIGNING}
            />
        ),
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
    {
        path: '/batch-changes/github-apps/:appID',
        render: props => (
            <GitHubAppPage
                headerParentBreadcrumb={{ to: '/site-admin/batch-changes', text: 'Batch Changes settings' }}
                headerAnnotation={<FeedbackBadge status="beta" feedback={{ mailto: 'support@domain.com' }} />}
                telemetryService={props.telemetryService}
                telemetryRecorder={props.platformContext.telemetryRecorder}
            />
        ),
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
    {
        path: '/batch-changes/specs',
        render: props => <BatchSpecsPage {...props} />,
        condition: ({ batchChangesEnabled, batchChangesExecutionEnabled }) =>
            batchChangesEnabled && batchChangesExecutionEnabled,
    },
    // Old batch changes webhooks logs page redirects to new incoming webhooks page.
    // The old page components and documentation are still available in the codebase
    // but should be fully removed in the next release.
    {
        path: '/batch-changes/webhook-logs',
        render: () => <Navigate to="/site-admin/webhooks/incoming" replace={true} />,
        condition: ({ batchChangesEnabled, batchChangesWebhookLogsEnabled }) =>
            batchChangesEnabled && batchChangesWebhookLogsEnabled,
    },

    // Enterprise maintenance area

    {
        exact: true,
        path: '/code-insights-jobs',
        render: props => <CodeInsightsJobsPage {...props} />,
        condition: ({ codeInsightsEnabled }) => codeInsightsEnabled,
    },
    {
        exact: true,
        path: '/own-signal-page',
        render: props => <OwnStatusPage telemetryRecorder={props.platformContext.telemetryRecorder} />,
    },

    // Code intelligence redirect
    {
        path: '/code-intelligence/*',
        render: () => <NavigateToCodeGraph />,
        condition: () => window.context?.codeSearchEnabledOnInstance,
    },
    // Code graph routes
    {
        path: '/code-graph/*',
        render: props => <AdminCodeIntelArea {...props} />,
        condition: () => window.context?.codeSearchEnabledOnInstance,
    },
    {
        path: '/lsif-uploads/:id',
        render: props => <SiteAdminPreciseIndexPage {...props} />,
    },

    // Executor routes
    {
        path: '/executors/*',
        render: props => <ExecutorsSiteAdminArea telemetryRecorder={props.platformContext.telemetryRecorder} />,
        condition: () => Boolean(window.context?.executorsEnabled),
    },

    // rbac-related routes
    {
        path: '/roles',
        exact: true,
        render: props => <SiteAdminRolesPage telemetryRecorder={props.platformContext.telemetryRecorder} />,
    },

    // Own analytics
    {
        exact: true,
        path: '/analytics/own',
        render: props => <OwnAnalyticsPage telemetryRecorder={props.platformContext.telemetryRecorder} />,
    },
]

function NavigateToCodeGraph(): JSX.Element {
    const location = useLocation()
    return <Navigate to={location.pathname.replace('/code-intelligence', '/code-graph')} />
}

const siteAdminUserManagementRoute: SiteAdminAreaRoute = {
    path: '/users',
    render: props => <UsersManagement renderAssignmentModal={() => null} {...props} />,
}

export const siteAdminAreaRoutes: readonly SiteAdminAreaRoute[] = [
    ...otherSiteAdminRoutes,
    siteAdminUserManagementRoute,
]
