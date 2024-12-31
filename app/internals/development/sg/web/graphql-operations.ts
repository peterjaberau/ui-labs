import { AccessRequestStatus } from '~/internals/development/sg/shared/graphql-operations.ts';
import { AlertType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { AnalyticsDateRange } from '~/internals/development/sg/shared/graphql-operations.ts';
import { AnalyticsGrouping } from '~/internals/development/sg/shared/graphql-operations.ts';
import { AuditLogOperation } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BackfillQueueOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BackgroundRoutineType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BatchChangeState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BatchSpecSource } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BatchSpecState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BatchSpecWorkspaceResolutionState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BatchSpecWorkspaceState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BulkOperationState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { BulkOperationType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CancelPermissionsSyncJobResultMessage } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetCheckState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetExternalState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetPublicationState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetReconcilerState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetReviewState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetSpecOperation } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetSpecType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ChangesetState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CloneStatus } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodeGraphDataProvenance } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodeHostStatus } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodyContextFiltersVersion } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodyGatewayRateLimitSource } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodySubscriptionPlan } from '~/internals/development/sg/shared/graphql-operations.ts';
import { CodySubscriptionStatus } from '~/internals/development/sg/shared/graphql-operations.ts';
import { DiagnosticSeverity } from '~/internals/development/sg/shared/graphql-operations.ts';
import { DiffHunkLineType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { EventBillingID } from '~/internals/development/sg/shared/graphql-operations.ts';
import { EventBillingProductCategory } from '~/internals/development/sg/shared/graphql-operations.ts';
import { EventClient } from '~/internals/development/sg/shared/graphql-operations.ts';
import { EventSource } from '~/internals/development/sg/shared/graphql-operations.ts';
import { EventStatus } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ExecutorCompatibility } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ExecutorSecretScope } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ExternalServiceKind } from '~/internals/development/sg/shared/graphql-operations.ts';
import { ExternalServiceSyncJobState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { GitHubAppDomain } from '~/internals/development/sg/shared/graphql-operations.ts';
import { GitHubAppKind } from '~/internals/development/sg/shared/graphql-operations.ts';
import { GitObjectType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { GitRefType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { GroupByField } from '~/internals/development/sg/shared/graphql-operations.ts';
import { HighlightResponseFormat } from '~/internals/development/sg/shared/graphql-operations.ts';
import { InsightQueueItemState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { MonitorEmailPriority } from '~/internals/development/sg/shared/graphql-operations.ts';
import { NotAvailableReasonType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { NotebookBlockType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { NotebooksOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { OrganizationInvitationResponseType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { OwnershipReasonType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PackageMatchBehaviour } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PackageRepoReferenceKind } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionNamespace } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionSource } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionsSyncJobPriority } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionsSyncJobReason } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionsSyncJobReasonGroup } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionsSyncJobsSearchType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PermissionsSyncJobState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PreciseIndexState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PromptsOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { PromptVisibility } from '~/internals/development/sg/shared/graphql-operations.ts';
import { RepoEmbeddingJobState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { RepositoryOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { RepositoryPermission } from '~/internals/development/sg/shared/graphql-operations.ts';
import { RepositoryType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SavedSearchesOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SavedSearchVisibility } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchAggregationMode } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchContextsOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchJobsOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchJobState } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchQueryOutputFormat } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchQueryOutputPhase } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchQueryOutputVerbosity } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SearchVersion } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SeriesSortDirection } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SeriesSortMode } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SiteUserOrderBy } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SpeakerType } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SurveyUseCase } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SymbolKind } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SymbolRole } from '~/internals/development/sg/shared/graphql-operations.ts';
import { SymbolUsageKind } from '~/internals/development/sg/shared/graphql-operations.ts';
import { TimeIntervalStepUnit } from '~/internals/development/sg/shared/graphql-operations.ts';
import { UserActivePeriod } from '~/internals/development/sg/shared/graphql-operations.ts';
import { UserEvent } from '~/internals/development/sg/shared/graphql-operations.ts';
import { WorkspacesSortOrder } from '~/internals/development/sg/shared/graphql-operations.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export interface WebGraphQlOperations {

/** web/src/batches/backend.ts */
RepoChangesetsStats: (variables: RepoChangesetsStatsVariables) => RepoChangesetsStatsResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
UsePreciseCodeIntelForPosition: (variables: UsePreciseCodeIntelForPositionVariables) => UsePreciseCodeIntelForPositionResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
LoadAdditionalReferences: (variables: LoadAdditionalReferencesVariables) => LoadAdditionalReferencesResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
LoadAdditionalImplementations: (variables: LoadAdditionalImplementationsVariables) => LoadAdditionalImplementationsResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
LoadAdditionalPrototypes: (variables: LoadAdditionalPrototypesVariables) => LoadAdditionalPrototypesResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
ReferencesPanelHighlightedBlob: (variables: ReferencesPanelHighlightedBlobVariables) => ReferencesPanelHighlightedBlobResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
CodeIntelSearch2: (variables: CodeIntelSearch2Variables) => CodeIntelSearch2Result


/** web/src/codeintel/ReferencesPanelQueries.ts */
LocalCodeIntel: (variables: LocalCodeIntelVariables) => LocalCodeIntelResult


/** web/src/codeintel/ReferencesPanelQueries.ts */
ResolveRepoAndRevision: (variables: ResolveRepoAndRevisionVariables) => ResolveRepoAndRevisionResult


/** web/src/cody/subscription/queries.tsx */
UserCodyPlan: (variables: UserCodyPlanVariables) => UserCodyPlanResult


/** web/src/cody/subscription/queries.tsx */
UserCodyUsage: (variables: UserCodyUsageVariables) => UserCodyUsageResult


/** web/src/cody/useCodyIgnore.tsx */
CodyIgnoreContent: (variables: CodyIgnoreContentVariables) => CodyIgnoreContentResult


/** web/src/cody/useCodyIgnore.tsx */
ContextFilters: (variables: ContextFiltersVariables) => ContextFiltersResult


/** web/src/components/FilteredConnection/hooks/useShowMorePagination.test.tsx */
TestShowMorePaginationQuery: (variables: TestShowMorePaginationQueryVariables) => TestShowMorePaginationQueryResult


/** web/src/components/externalServices/backend.ts */
AddExternalService: (variables: AddExternalServiceVariables) => AddExternalServiceResult


/** web/src/components/externalServices/backend.ts */
UpdateExternalService: (variables: UpdateExternalServiceVariables) => UpdateExternalServiceResult


/** web/src/components/externalServices/backend.ts */
DeleteExternalService: (variables: DeleteExternalServiceVariables) => DeleteExternalServiceResult


/** web/src/components/externalServices/backend.ts */
ExternalServiceCheckConnectionById: (variables: ExternalServiceCheckConnectionByIdVariables) => ExternalServiceCheckConnectionByIdResult


/** web/src/components/externalServices/backend.ts */
ExternalServiceSyncJobs: (variables: ExternalServiceSyncJobsVariables) => ExternalServiceSyncJobsResult


/** web/src/components/externalServices/backend.ts */
ExternalService: (variables: ExternalServiceVariables) => ExternalServiceResult


/** web/src/components/externalServices/backend.ts */
ExternalServices: (variables: ExternalServicesVariables) => ExternalServicesResult


/** web/src/components/externalServices/backend.ts */
ExternalServiceIDsAndNames: (variables: ExternalServiceIDsAndNamesVariables) => ExternalServiceIDsAndNamesResult


/** web/src/components/externalServices/backend.ts */
SyncExternalService: (variables: SyncExternalServiceVariables) => SyncExternalServiceResult


/** web/src/components/externalServices/backend.ts */
CancelExternalServiceSync: (variables: CancelExternalServiceSyncVariables) => CancelExternalServiceSyncResult


/** web/src/components/fuzzyFinder/FuzzyFiles.tsx */
FileNames: (variables: FileNamesVariables) => FileNamesResult


/** web/src/components/fuzzyFinder/FuzzyFiles.tsx */
FuzzyFinderFiles: (variables: FuzzyFinderFilesVariables) => FuzzyFinderFilesResult


/** web/src/components/fuzzyFinder/FuzzyRepos.tsx */
FuzzyFinderRepo: (variables: FuzzyFinderRepoVariables) => FuzzyFinderRepoResult


/** web/src/components/fuzzyFinder/FuzzySymbols.tsx */
FuzzyFinderSymbols: (variables: FuzzyFinderSymbolsVariables) => FuzzyFinderSymbolsResult


/** web/src/components/gitHubApps/backend.ts */
GitHubApps: (variables: GitHubAppsVariables) => GitHubAppsResult


/** web/src/components/gitHubApps/backend.ts */
GitHubAppsWithInstalls: (variables: GitHubAppsWithInstallsVariables) => GitHubAppsWithInstallsResult


/** web/src/components/gitHubApps/backend.ts */
GitHubAppByID: (variables: GitHubAppByIDVariables) => GitHubAppByIDResult


/** web/src/components/gitHubApps/backend.ts */
GitHubAppByAppID: (variables: GitHubAppByAppIDVariables) => GitHubAppByAppIDResult


/** web/src/components/gitHubApps/backend.ts */
GitHubAppClientSecret: (variables: GitHubAppClientSecretVariables) => GitHubAppClientSecretResult


/** web/src/components/gitHubApps/backend.ts */
SiteConfigForApps: (variables: SiteConfigForAppsVariables) => SiteConfigForAppsResult


/** web/src/components/gitHubApps/backend.ts */
DeleteGitHubApp: (variables: DeleteGitHubAppVariables) => DeleteGitHubAppResult


/** web/src/components/own/graphqlQueries.ts */
AssignOwner: (variables: AssignOwnerVariables) => AssignOwnerResult


/** web/src/components/own/graphqlQueries.ts */
AssignTeam: (variables: AssignTeamVariables) => AssignTeamResult


/** web/src/devsettings/DeveloperDialog.tsx */
DeveloperSettingsEvaluatedFeatureFlags: (variables: DeveloperSettingsEvaluatedFeatureFlagsVariables) => DeveloperSettingsEvaluatedFeatureFlagsResult


/** web/src/enterprise/batches/backend.ts */
BatchSpecs: (variables: BatchSpecsVariables) => BatchSpecsResult


/** web/src/enterprise/batches/backend.ts */
BatchChangeBatchSpecs: (variables: BatchChangeBatchSpecsVariables) => BatchChangeBatchSpecsResult


/** web/src/enterprise/batches/backend.ts */
BatchSpecWorkspaceFile: (variables: BatchSpecWorkspaceFileVariables) => BatchSpecWorkspaceFileResult


/** web/src/enterprise/batches/backend.ts */
BatchChangesSiteConfiguration: (variables: BatchChangesSiteConfigurationVariables) => BatchChangesSiteConfigurationResult


/** web/src/enterprise/batches/batch-spec/edit/editor/backend.ts */
BatchSpecExecutionAvailableSecretKeys: (variables: BatchSpecExecutionAvailableSecretKeysVariables) => BatchSpecExecutionAvailableSecretKeysResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
BatchSpecExecutionByID: (variables: BatchSpecExecutionByIDVariables) => BatchSpecExecutionByIDResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
BatchSpecWorkspaceByID: (variables: BatchSpecWorkspaceByIDVariables) => BatchSpecWorkspaceByIDResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
BatchSpecWorkspaceStep: (variables: BatchSpecWorkspaceStepVariables) => BatchSpecWorkspaceStepResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
CancelBatchSpecExecution: (variables: CancelBatchSpecExecutionVariables) => CancelBatchSpecExecutionResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
BatchSpecWorkspaceStepFileDiffs: (variables: BatchSpecWorkspaceStepFileDiffsVariables) => BatchSpecWorkspaceStepFileDiffsResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
BatchSpecWorkspaces: (variables: BatchSpecWorkspacesVariables) => BatchSpecWorkspacesResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
RetryWorkspaceExecution: (variables: RetryWorkspaceExecutionVariables) => RetryWorkspaceExecutionResult


/** web/src/enterprise/batches/batch-spec/execute/backend.ts */
RetryBatchSpecExecution: (variables: RetryBatchSpecExecutionVariables) => RetryBatchSpecExecutionResult


/** web/src/enterprise/batches/close/backend.ts */
CloseBatchChange: (variables: CloseBatchChangeVariables) => CloseBatchChangeResult


/** web/src/enterprise/batches/create/backend.ts */
GetBatchChangeToEdit: (variables: GetBatchChangeToEditVariables) => GetBatchChangeToEditResult


/** web/src/enterprise/batches/create/backend.ts */
ExecuteBatchSpec: (variables: ExecuteBatchSpecVariables) => ExecuteBatchSpecResult


/** web/src/enterprise/batches/create/backend.ts */
CreateEmptyBatchChange: (variables: CreateEmptyBatchChangeVariables) => CreateEmptyBatchChangeResult


/** web/src/enterprise/batches/create/backend.ts */
CreateBatchSpecFromRaw: (variables: CreateBatchSpecFromRawVariables) => CreateBatchSpecFromRawResult


/** web/src/enterprise/batches/create/backend.ts */
ReplaceBatchSpecInput: (variables: ReplaceBatchSpecInputVariables) => ReplaceBatchSpecInputResult


/** web/src/enterprise/batches/create/backend.ts */
WorkspaceResolutionStatus: (variables: WorkspaceResolutionStatusVariables) => WorkspaceResolutionStatusResult


/** web/src/enterprise/batches/create/backend.ts */
BatchSpecWorkspacesPreview: (variables: BatchSpecWorkspacesPreviewVariables) => BatchSpecWorkspacesPreviewResult


/** web/src/enterprise/batches/create/backend.ts */
BatchSpecImportingChangesets: (variables: BatchSpecImportingChangesetsVariables) => BatchSpecImportingChangesetsResult


/** web/src/enterprise/batches/create/backend.ts */
CheckExecutorsAccessToken: (variables: CheckExecutorsAccessTokenVariables) => CheckExecutorsAccessTokenResult


/** web/src/enterprise/batches/detail/backend.ts */
BatchChangeByNamespace: (variables: BatchChangeByNamespaceVariables) => BatchChangeByNamespaceResult


/** web/src/enterprise/batches/detail/backend.ts */
BatchChangeChangesets: (variables: BatchChangeChangesetsVariables) => BatchChangeChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
SyncChangeset: (variables: SyncChangesetVariables) => SyncChangesetResult


/** web/src/enterprise/batches/detail/backend.ts */
ReenqueueChangeset: (variables: ReenqueueChangesetVariables) => ReenqueueChangesetResult


/** web/src/enterprise/batches/detail/backend.ts */
ExternalChangesetFileDiffs: (variables: ExternalChangesetFileDiffsVariables) => ExternalChangesetFileDiffsResult


/** web/src/enterprise/batches/detail/backend.ts */
ChangesetCountsOverTime: (variables: ChangesetCountsOverTimeVariables) => ChangesetCountsOverTimeResult


/** web/src/enterprise/batches/detail/backend.ts */
DeleteBatchChange: (variables: DeleteBatchChangeVariables) => DeleteBatchChangeResult


/** web/src/enterprise/batches/detail/backend.ts */
ChangesetDiff: (variables: ChangesetDiffVariables) => ChangesetDiffResult


/** web/src/enterprise/batches/detail/backend.ts */
ChangesetScheduleEstimate: (variables: ChangesetScheduleEstimateVariables) => ChangesetScheduleEstimateResult


/** web/src/enterprise/batches/detail/backend.ts */
DetachChangesets: (variables: DetachChangesetsVariables) => DetachChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
CreateChangesetComments: (variables: CreateChangesetCommentsVariables) => CreateChangesetCommentsResult


/** web/src/enterprise/batches/detail/backend.ts */
ReenqueueChangesets: (variables: ReenqueueChangesetsVariables) => ReenqueueChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
MergeChangesets: (variables: MergeChangesetsVariables) => MergeChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
CloseChangesets: (variables: CloseChangesetsVariables) => CloseChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
PublishChangesets: (variables: PublishChangesetsVariables) => PublishChangesetsResult


/** web/src/enterprise/batches/detail/backend.ts */
GetChangesetsByIDs: (variables: GetChangesetsByIDsVariables) => GetChangesetsByIDsResult


/** web/src/enterprise/batches/detail/backend.ts */
BatchChangeBulkOperations: (variables: BatchChangeBulkOperationsVariables) => BatchChangeBulkOperationsResult


/** web/src/enterprise/batches/detail/backend.ts */
AllChangesetIDs: (variables: AllChangesetIDsVariables) => AllChangesetIDsResult


/** web/src/enterprise/batches/detail/backend.ts */
AvailableBulkOperations: (variables: AvailableBulkOperationsVariables) => AvailableBulkOperationsResult


/** web/src/enterprise/batches/list/backend.ts */
BatchChanges: (variables: BatchChangesVariables) => BatchChangesResult


/** web/src/enterprise/batches/list/backend.ts */
BatchChangesByNamespace: (variables: BatchChangesByNamespaceVariables) => BatchChangesByNamespaceResult


/** web/src/enterprise/batches/list/backend.ts */
GetLicenseAndUsageInfo: (variables: GetLicenseAndUsageInfoVariables) => GetLicenseAndUsageInfoResult


/** web/src/enterprise/batches/list/backend.ts */
GlobalChangesetsStats: (variables: GlobalChangesetsStatsVariables) => GlobalChangesetsStatsResult


/** web/src/enterprise/batches/preview/backend.ts */
BatchSpecByID: (variables: BatchSpecByIDVariables) => BatchSpecByIDResult


/** web/src/enterprise/batches/preview/backend.ts */
QueryApplyPreviewStats: (variables: QueryApplyPreviewStatsVariables) => QueryApplyPreviewStatsResult


/** web/src/enterprise/batches/preview/backend.ts */
CreateBatchChange: (variables: CreateBatchChangeVariables) => CreateBatchChangeResult


/** web/src/enterprise/batches/preview/backend.ts */
ApplyBatchChange: (variables: ApplyBatchChangeVariables) => ApplyBatchChangeResult


/** web/src/enterprise/batches/preview/list/backend.ts */
BatchSpecApplyPreview: (variables: BatchSpecApplyPreviewVariables) => BatchSpecApplyPreviewResult


/** web/src/enterprise/batches/preview/list/backend.ts */
ChangesetSpecFileDiffs: (variables: ChangesetSpecFileDiffsVariables) => ChangesetSpecFileDiffsResult


/** web/src/enterprise/batches/preview/list/backend.ts */
AllPublishableChangesetSpecIDs: (variables: AllPublishableChangesetSpecIDsVariables) => AllPublishableChangesetSpecIDsResult


/** web/src/enterprise/batches/repo/backend.ts */
RepoBatchChangeStats: (variables: RepoBatchChangeStatsVariables) => RepoBatchChangeStatsResult


/** web/src/enterprise/batches/repo/backend.ts */
RepoBatchChanges: (variables: RepoBatchChangesVariables) => RepoBatchChangesResult


/** web/src/enterprise/batches/settings/backend.ts */
CreateBatchChangesCredential: (variables: CreateBatchChangesCredentialVariables) => CreateBatchChangesCredentialResult


/** web/src/enterprise/batches/settings/backend.ts */
DeleteBatchChangesCredential: (variables: DeleteBatchChangesCredentialVariables) => DeleteBatchChangesCredentialResult


/** web/src/enterprise/batches/settings/backend.ts */
UserBatchChangesCodeHosts: (variables: UserBatchChangesCodeHostsVariables) => UserBatchChangesCodeHostsResult


/** web/src/enterprise/batches/settings/backend.ts */
GlobalBatchChangesCodeHosts: (variables: GlobalBatchChangesCodeHostsVariables) => GlobalBatchChangesCodeHostsResult


/** web/src/enterprise/batches/settings/backend.ts */
CheckBatchChangesCredential: (variables: CheckBatchChangesCredentialVariables) => CheckBatchChangesCredentialResult


/** web/src/enterprise/batches/settings/backend.ts */
RefreshGitHubApp: (variables: RefreshGitHubAppVariables) => RefreshGitHubAppResult


/** web/src/enterprise/code-monitoring/CodeMonitoringLogs.tsx */
MonitorTriggerEvents: (variables: MonitorTriggerEventsVariables) => MonitorTriggerEventsResult


/** web/src/enterprise/code-monitoring/backend.ts */
CreateCodeMonitor: (variables: CreateCodeMonitorVariables) => CreateCodeMonitorResult


/** web/src/enterprise/code-monitoring/backend.ts */
ListUserCodeMonitors: (variables: ListUserCodeMonitorsVariables) => ListUserCodeMonitorsResult


/** web/src/enterprise/code-monitoring/backend.ts */
ListAllCodeMonitors: (variables: ListAllCodeMonitorsVariables) => ListAllCodeMonitorsResult


/** web/src/enterprise/code-monitoring/backend.ts */
ToggleCodeMonitorEnabled: (variables: ToggleCodeMonitorEnabledVariables) => ToggleCodeMonitorEnabledResult


/** web/src/enterprise/code-monitoring/backend.ts */
FetchCodeMonitor: (variables: FetchCodeMonitorVariables) => FetchCodeMonitorResult


/** web/src/enterprise/code-monitoring/backend.ts */
UpdateCodeMonitor: (variables: UpdateCodeMonitorVariables) => UpdateCodeMonitorResult


/** web/src/enterprise/code-monitoring/backend.ts */
DeleteCodeMonitor: (variables: DeleteCodeMonitorVariables) => DeleteCodeMonitorResult


/** web/src/enterprise/code-monitoring/backend.ts */
ResetTriggerQueryTimestamps: (variables: ResetTriggerQueryTimestampsVariables) => ResetTriggerQueryTimestampsResult


/** web/src/enterprise/code-monitoring/components/actions/EmailAction.tsx */
SendTestEmail: (variables: SendTestEmailVariables) => SendTestEmailResult


/** web/src/enterprise/code-monitoring/components/actions/SlackWebhookAction.tsx */
SendTestSlackWebhook: (variables: SendTestSlackWebhookVariables) => SendTestSlackWebhookResult


/** web/src/enterprise/code-monitoring/components/actions/WebhookAction.tsx */
SendTestWebhook: (variables: SendTestWebhookVariables) => SendTestWebhookResult


/** web/src/enterprise/codeintel/configuration/backend.ts */
GetRepoId: (variables: GetRepoIdVariables) => GetRepoIdResult


/** web/src/enterprise/codeintel/configuration/backend.ts */
InferAutoIndexJobsForRepo: (variables: InferAutoIndexJobsForRepoVariables) => InferAutoIndexJobsForRepoResult


/** web/src/enterprise/codeintel/configuration/backend.ts */
InferredIndexConfiguration: (variables: InferredIndexConfigurationVariables) => InferredIndexConfigurationResult


/** web/src/enterprise/codeintel/configuration/backend.ts */
IndexConfiguration: (variables: IndexConfigurationVariables) => IndexConfigurationResult


/** web/src/enterprise/codeintel/configuration/hooks/queryPolicies.tsx */
CodeIntelligenceConfigurationPolicies: (variables: CodeIntelligenceConfigurationPoliciesVariables) => CodeIntelligenceConfigurationPoliciesResult


/** web/src/enterprise/codeintel/configuration/hooks/useDeletePolicies.tsx */
DeleteCodeIntelligenceConfigurationPolicy: (variables: DeleteCodeIntelligenceConfigurationPolicyVariables) => DeleteCodeIntelligenceConfigurationPolicyResult


/** web/src/enterprise/codeintel/configuration/hooks/useInferenceScript.tsx */
CodeGraphInferenceScript: (variables: CodeGraphInferenceScriptVariables) => CodeGraphInferenceScriptResult


/** web/src/enterprise/codeintel/configuration/hooks/usePolicyConfigurationById.tsx */
CodeIntelligenceConfigurationPolicy: (variables: CodeIntelligenceConfigurationPolicyVariables) => CodeIntelligenceConfigurationPolicyResult


/** web/src/enterprise/codeintel/configuration/hooks/usePreviewGitObjectFilter.tsx */
PreviewGitObjectFilter: (variables: PreviewGitObjectFilterVariables) => PreviewGitObjectFilterResult


/** web/src/enterprise/codeintel/configuration/hooks/usePreviewRepositoryFilter.tsx */
PreviewRepositoryFilter: (variables: PreviewRepositoryFilterVariables) => PreviewRepositoryFilterResult


/** web/src/enterprise/codeintel/configuration/hooks/useSavePolicyConfiguration.tsx */
CreateCodeIntelligenceConfigurationPolicy: (variables: CreateCodeIntelligenceConfigurationPolicyVariables) => CreateCodeIntelligenceConfigurationPolicyResult


/** web/src/enterprise/codeintel/configuration/hooks/useSavePolicyConfiguration.tsx */
UpdateCodeIntelligenceConfigurationPolicy: (variables: UpdateCodeIntelligenceConfigurationPolicyVariables) => UpdateCodeIntelligenceConfigurationPolicyResult


/** web/src/enterprise/codeintel/configuration/hooks/useUpdateConfigurationForRepository.tsx */
UpdateRepositoryIndexConfiguration: (variables: UpdateRepositoryIndexConfigurationVariables) => UpdateRepositoryIndexConfigurationResult


/** web/src/enterprise/codeintel/configuration/hooks/useUpdateInferenceScript.tsx */
UpdateCodeGraphInferenceScript: (variables: UpdateCodeGraphInferenceScriptVariables) => UpdateCodeGraphInferenceScriptResult


/** web/src/enterprise/codeintel/dashboard/backend.ts */
GlobalCodeIntelStatus: (variables: GlobalCodeIntelStatusVariables) => GlobalCodeIntelStatusResult


/** web/src/enterprise/codeintel/dashboard/backend.ts */
RepoCodeIntelStatus: (variables: RepoCodeIntelStatusVariables) => RepoCodeIntelStatusResult


/** web/src/enterprise/codeintel/dashboard/backend.ts */
VisibleIndexes: (variables: VisibleIndexesVariables) => VisibleIndexesResult


/** web/src/enterprise/codeintel/indexes/hooks/queryDependencyGraph.tsx */
PreciseIndexDependencyGraph: (variables: PreciseIndexDependencyGraphVariables) => PreciseIndexDependencyGraphResult


/** web/src/enterprise/codeintel/indexes/hooks/queryPreciseIndex.tsx */
PreciseIndex: (variables: PreciseIndexVariables) => PreciseIndexResult


/** web/src/enterprise/codeintel/indexes/hooks/queryPreciseIndexRetention.tsx */
PreciseIndexRetention: (variables: PreciseIndexRetentionVariables) => PreciseIndexRetentionResult


/** web/src/enterprise/codeintel/indexes/hooks/queryPreciseIndexes.tsx */
PreciseIndexes: (variables: PreciseIndexesVariables) => PreciseIndexesResult


/** web/src/enterprise/codeintel/indexes/hooks/useDeletePreciseIndex.tsx */
DeletePreciseIndex: (variables: DeletePreciseIndexVariables) => DeletePreciseIndexResult


/** web/src/enterprise/codeintel/indexes/hooks/useDeletePreciseIndexes.tsx */
DeletePreciseIndexes: (variables: DeletePreciseIndexesVariables) => DeletePreciseIndexesResult


/** web/src/enterprise/codeintel/indexes/hooks/useEnqueueIndexJob.tsx */
QueueAutoIndexJobsForRepo: (variables: QueueAutoIndexJobsForRepoVariables) => QueueAutoIndexJobsForRepoResult


/** web/src/enterprise/codeintel/indexes/hooks/useReindexPreciseIndex.tsx */
ReindexPreciseIndex: (variables: ReindexPreciseIndexVariables) => ReindexPreciseIndexResult


/** web/src/enterprise/codeintel/indexes/hooks/useReindexPreciseIndexes.tsx */
ReindexPreciseIndexes: (variables: ReindexPreciseIndexesVariables) => ReindexPreciseIndexesResult


/** web/src/enterprise/codeintel/indexes/pages/CodeIntelPreciseIndexesPage.tsx */
IndexerList: (variables: IndexerListVariables) => IndexerListResult


/** web/src/enterprise/codeintel/ranking/pages/backend.ts */
RankingSummary: (variables: RankingSummaryVariables) => RankingSummaryResult


/** web/src/enterprise/codeintel/ranking/pages/backend.ts */
BumpDerivativeGraphKey: (variables: BumpDerivativeGraphKeyVariables) => BumpDerivativeGraphKeyResult


/** web/src/enterprise/codeintel/ranking/pages/backend.ts */
DeleteRankingProgress: (variables: DeleteRankingProgressVariables) => DeleteRankingProgressResult


/** web/src/enterprise/executors/instances/useExecutors.tsx */
Executors: (variables: ExecutorsVariables) => ExecutorsResult


/** web/src/enterprise/executors/secrets/backend.ts */
CreateExecutorSecret: (variables: CreateExecutorSecretVariables) => CreateExecutorSecretResult


/** web/src/enterprise/executors/secrets/backend.ts */
UpdateExecutorSecret: (variables: UpdateExecutorSecretVariables) => UpdateExecutorSecretResult


/** web/src/enterprise/executors/secrets/backend.ts */
DeleteExecutorSecret: (variables: DeleteExecutorSecretVariables) => DeleteExecutorSecretResult


/** web/src/enterprise/executors/secrets/backend.ts */
UserExecutorSecrets: (variables: UserExecutorSecretsVariables) => UserExecutorSecretsResult


/** web/src/enterprise/executors/secrets/backend.ts */
OrgExecutorSecrets: (variables: OrgExecutorSecretsVariables) => OrgExecutorSecretsResult


/** web/src/enterprise/executors/secrets/backend.ts */
GlobalExecutorSecrets: (variables: GlobalExecutorSecretsVariables) => GlobalExecutorSecretsResult


/** web/src/enterprise/executors/secrets/backend.ts */
ExecutorSecretAccessLogs: (variables: ExecutorSecretAccessLogsVariables) => ExecutorSecretAccessLogsResult


/** web/src/enterprise/insights/CodeInsightsAppRouter.tsx */
GetFirstAvailableDashboard: (variables: GetFirstAvailableDashboardVariables) => GetFirstAvailableDashboardResult


/** web/src/enterprise/insights/admin-ui/components/job-actions/CodeInsightsJobsActions.tsx */
RetryInsightSeriesBackfillBlank: (variables: RetryInsightSeriesBackfillBlankVariables) => RetryInsightSeriesBackfillBlankResult


/** web/src/enterprise/insights/admin-ui/components/job-actions/CodeInsightsJobsActions.tsx */
RetryCodeInsightsJobs: (variables: RetryCodeInsightsJobsVariables) => RetryCodeInsightsJobsResult


/** web/src/enterprise/insights/admin-ui/components/job-actions/CodeInsightsJobsActions.tsx */
MoveToFrontCodeInsightsJobs: (variables: MoveToFrontCodeInsightsJobsVariables) => MoveToFrontCodeInsightsJobsResult


/** web/src/enterprise/insights/admin-ui/components/job-actions/CodeInsightsJobsActions.tsx */
MoveToBackCodeInsighsJobs: (variables: MoveToBackCodeInsighsJobsVariables) => MoveToBackCodeInsighsJobsResult


/** web/src/enterprise/insights/admin-ui/query.ts */
GetCodeInsightsJobs: (variables: GetCodeInsightsJobsVariables) => GetCodeInsightsJobsResult


/** web/src/enterprise/insights/components/creation-ui/insight-repo-section/InsightRepoSection.tsx */
InsightRepositoriesCount: (variables: InsightRepositoriesCountVariables) => InsightRepositoriesCountResult


/** web/src/enterprise/insights/components/creation-ui/insight-repo-section/use-repo-fields.ts */
ValidateInsightRepoQuery: (variables: ValidateInsightRepoQueryVariables) => ValidateInsightRepoQueryResult


/** web/src/enterprise/insights/components/form/repositories-field/hooks/use-repo-suggestions.ts */
RepositorySearchSuggestions: (variables: RepositorySearchSuggestionsVariables) => RepositorySearchSuggestionsResult


/** web/src/enterprise/insights/components/insights-view-grid/components/backend-insight/components/drill-down-filters-panel/drill-down-filters/validators.ts */
GetSearchContextByName: (variables: GetSearchContextByNameVariables) => GetSearchContextByNameResult


/** web/src/enterprise/insights/components/insights-view-grid/components/backend-insight/components/drill-down-filters-panel/search-context/DrillDownSearchContextFilter.tsx */
GetSearchContexts: (variables: GetSearchContextsVariables) => GetSearchContextsResult


/** web/src/enterprise/insights/components/modals/ShareLinkModal/get-sharable-insight-info.ts */
GetDashboardsThatHaveInsight: (variables: GetDashboardsThatHaveInsightVariables) => GetDashboardsThatHaveInsightResult


/** web/src/enterprise/insights/core/backend/gql-backend/code-insights-gql-backend.ts */
GetFrozenInsightsCount: (variables: GetFrozenInsightsCountVariables) => GetFrozenInsightsCountResult


/** web/src/enterprise/insights/core/backend/gql-backend/code-insights-gql-backend.ts */
DeleteInsightView: (variables: DeleteInsightViewVariables) => DeleteInsightViewResult


/** web/src/enterprise/insights/core/backend/gql-backend/code-insights-gql-backend.ts */
DeleteDashboard: (variables: DeleteDashboardVariables) => DeleteDashboardResult


/** web/src/enterprise/insights/core/backend/gql-backend/code-insights-gql-backend.ts */
AddInsightViewToDashboard: (variables: AddInsightViewToDashboardVariables) => AddInsightViewToDashboardResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/GetDashboardInsights.ts */
GetDashboardInsights: (variables: GetDashboardInsightsVariables) => GetDashboardInsightsResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/GetInsightSubjects.ts */
InsightSubjects: (variables: InsightSubjectsVariables) => InsightSubjectsResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/GetInsightView.ts */
GetInsightView: (variables: GetInsightViewVariables) => GetInsightViewResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/GetInsights.ts */
GetInsights: (variables: GetInsightsVariables) => GetInsightsResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/RemoveInsightFromDashboard.ts */
RemoveInsightViewFromDashboard: (variables: RemoveInsightViewFromDashboardVariables) => RemoveInsightViewFromDashboardResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/UpdateLangStatsInsight.ts */
UpdateLangStatsInsight: (variables: UpdateLangStatsInsightVariables) => UpdateLangStatsInsightResult


/** web/src/enterprise/insights/core/backend/gql-backend/gql/UpdateLineChartSearchInsight.ts */
UpdateLineChartSearchInsight: (variables: UpdateLineChartSearchInsightVariables) => UpdateLineChartSearchInsightResult


/** web/src/enterprise/insights/core/backend/gql-backend/methods/create-dashboard/create-dashboard.ts */
CreateDashboard: (variables: CreateDashboardVariables) => CreateDashboardResult


/** web/src/enterprise/insights/core/backend/gql-backend/methods/create-insight/create-insight.ts */
CreateLangStatsInsight: (variables: CreateLangStatsInsightVariables) => CreateLangStatsInsightResult


/** web/src/enterprise/insights/core/backend/gql-backend/methods/create-insight/create-insight.ts */
CreateSearchBasedInsight: (variables: CreateSearchBasedInsightVariables) => CreateSearchBasedInsightResult


/** web/src/enterprise/insights/core/backend/gql-backend/methods/update-dashboard.ts */
UpdateDashboard: (variables: UpdateDashboardVariables) => UpdateDashboardResult


/** web/src/enterprise/insights/core/hooks/live-preview-insight/use-live-preview-lang-stats-insight.ts */
LangStatsInsightContent: (variables: LangStatsInsightContentVariables) => LangStatsInsightContentResult


/** web/src/enterprise/insights/core/hooks/live-preview-insight/use-live-preview-series-insight.ts */
GetInsightPreview: (variables: GetInsightPreviewVariables) => GetInsightPreviewResult


/** web/src/enterprise/insights/core/hooks/use-insight-dashboards.ts */
InsightsDashboards: (variables: InsightsDashboardsVariables) => InsightsDashboardsResult


/** web/src/enterprise/insights/core/hooks/use-save-insight-as-new-view.ts */
SaveInsightAsNewView: (variables: SaveInsightAsNewViewVariables) => SaveInsightAsNewViewResult


/** web/src/enterprise/insights/hooks/use-license.ts */
IsCodeInsightsLicensed: (variables: IsCodeInsightsLicensedVariables) => IsCodeInsightsLicensedResult


/** web/src/enterprise/insights/modals/GaConfirmationModal.story.tsx */
TemporarySettings: (variables: TemporarySettingsVariables) => TemporarySettingsResult


/** web/src/enterprise/insights/pages/all-insights-view/query.ts */
GetAllInsightConfigurations: (variables: GetAllInsightConfigurationsVariables) => GetAllInsightConfigurationsResult


/** web/src/enterprise/insights/pages/dashboards/dashboard-view/components/add-insight-modal/query.ts */
FindInsightsBySearchTerm: (variables: FindInsightsBySearchTermVariables) => FindInsightsBySearchTermResult


/** web/src/enterprise/insights/pages/insights/creation/lang-stats/components/validators.ts */
CheckRepositoryExists: (variables: CheckRepositoryExistsVariables) => CheckRepositoryExistsResult


/** web/src/enterprise/insights/pages/landing/getting-started/components/dynamic-code-insight-example/DynamicCodeInsightExample.tsx */
GetExampleRepository: (variables: GetExampleRepositoryVariables) => GetExampleRepositoryResult


/** web/src/enterprise/own/admin-ui/query.ts */
GetOwnSignalConfigurations: (variables: GetOwnSignalConfigurationsVariables) => GetOwnSignalConfigurationsResult


/** web/src/enterprise/own/admin-ui/query.ts */
UpdateSignalConfigs: (variables: UpdateSignalConfigsVariables) => UpdateSignalConfigsResult


/** web/src/enterprise/own/admin-ui/query.ts */
GetInstanceOwnStats: (variables: GetInstanceOwnStatsVariables) => GetInstanceOwnStatsResult


/** web/src/enterprise/own/graphqlQueries.ts */
GetIngestedCodeowners: (variables: GetIngestedCodeownersVariables) => GetIngestedCodeownersResult


/** web/src/enterprise/own/graphqlQueries.ts */
AddIngestedCodeowners: (variables: AddIngestedCodeownersVariables) => AddIngestedCodeownersResult


/** web/src/enterprise/own/graphqlQueries.ts */
UpdateIngestedCodeowners: (variables: UpdateIngestedCodeownersVariables) => UpdateIngestedCodeownersResult


/** web/src/enterprise/own/graphqlQueries.ts */
DeleteIngestedCodeowners: (variables: DeleteIngestedCodeownersVariables) => DeleteIngestedCodeownersResult


/** web/src/enterprise/rbac/backend.ts */
AllRoles: (variables: AllRolesVariables) => AllRolesResult


/** web/src/enterprise/rbac/backend.ts */
CreateRole: (variables: CreateRoleVariables) => CreateRoleResult


/** web/src/enterprise/rbac/backend.ts */
DeleteRole: (variables: DeleteRoleVariables) => DeleteRoleResult


/** web/src/enterprise/rbac/backend.ts */
AllPermissions: (variables: AllPermissionsVariables) => AllPermissionsResult


/** web/src/enterprise/rbac/backend.ts */
SetPermissions: (variables: SetPermissionsVariables) => SetPermissionsResult


/** web/src/enterprise/repo/settings/backend.ts */
RepoPermissionsInfo: (variables: RepoPermissionsInfoVariables) => RepoPermissionsInfoResult


/** web/src/enterprise/repo/settings/backend.ts */
RepositoryRecordedCommands: (variables: RepositoryRecordedCommandsVariables) => RepositoryRecordedCommandsResult


/** web/src/enterprise/search-jobs/SearchJobModal/SearchJobModal.tsx */
DeleteSearchJob: (variables: DeleteSearchJobVariables) => DeleteSearchJobResult


/** web/src/enterprise/search-jobs/SearchJobModal/SearchJobModal.tsx */
CancelSearchJob: (variables: CancelSearchJobVariables) => CancelSearchJobResult


/** web/src/enterprise/search-jobs/SearchJobModal/SearchJobModal.tsx */
CreateSearchJob: (variables: CreateSearchJobVariables) => CreateSearchJobResult


/** web/src/enterprise/search-jobs/SearchJobsPage.tsx */
SearchJobs: (variables: SearchJobsVariables) => SearchJobsResult


/** web/src/enterprise/search-jobs/UsersPicker.tsx */
GetUsersList: (variables: GetUsersListVariables) => GetUsersListResult


/** web/src/enterprise/searchContexts/backend.ts */
RepositoriesByNames: (variables: RepositoriesByNamesVariables) => RepositoriesByNamesResult


/** web/src/enterprise/searchContexts/hooks/useDefaultContext.ts */
setDefaultSearchContext: (variables: setDefaultSearchContextVariables) => setDefaultSearchContextResult


/** web/src/enterprise/searchContexts/hooks/useToggleSearchContextStar.ts */
createSearchContextStar: (variables: createSearchContextStarVariables) => createSearchContextStarResult


/** web/src/enterprise/searchContexts/hooks/useToggleSearchContextStar.ts */
deleteSearchContextStar: (variables: deleteSearchContextStarVariables) => deleteSearchContextStarResult


/** web/src/enterprise/site-admin/SiteAdminAuthenticationProvidersPage.tsx */
AuthProviders: (variables: AuthProvidersVariables) => AuthProvidersResult


/** web/src/enterprise/site-admin/SiteAdminExternalAccountsPage.tsx */
ExternalAccounts: (variables: ExternalAccountsVariables) => ExternalAccountsResult


/** web/src/enterprise/site-admin/UserManagement/backend.ts */
GetAllRolesAndUserRoles: (variables: GetAllRolesAndUserRolesVariables) => GetAllRolesAndUserRolesResult


/** web/src/enterprise/site-admin/UserManagement/backend.ts */
SetRolesForUser: (variables: SetRolesForUserVariables) => SetRolesForUserResult


/** web/src/enterprise/site-admin/backend.ts */
SiteAdminPreciseIndex: (variables: SiteAdminPreciseIndexVariables) => SiteAdminPreciseIndexResult


/** web/src/enterprise/site-admin/productSubscription/ProductSubscriptionStatus.tsx */
ProductLicenseInfo: (variables: ProductLicenseInfoVariables) => ProductLicenseInfoResult


/** web/src/enterprise/user/settings/ExternalAccountNode.tsx */
DeleteExternalAccount: (variables: DeleteExternalAccountVariables) => DeleteExternalAccountResult


/** web/src/enterprise/user/settings/UserEventLogsPage.tsx */
UserEventLogs: (variables: UserEventLogsVariables) => UserEventLogsResult


/** web/src/enterprise/user/settings/auth/backend.ts */
ScheduleUserPermissionsSync: (variables: ScheduleUserPermissionsSyncVariables) => ScheduleUserPermissionsSyncResult


/** web/src/enterprise/user/settings/auth/backend.ts */
UserPermissionsInfo: (variables: UserPermissionsInfoVariables) => UserPermissionsInfoResult


/** web/src/featureFlags/featureFlags.ts */
OrgFeatureFlagOverrides: (variables: OrgFeatureFlagOverridesVariables) => OrgFeatureFlagOverridesResult


/** web/src/featureFlags/useFeatureFlag.ts */
EvaluateFeatureFlag: (variables: EvaluateFeatureFlagVariables) => EvaluateFeatureFlagResult


/** web/src/global/GlobalAlerts.tsx */
GlobalAlertsSiteFlags: (variables: GlobalAlertsSiteFlagsVariables) => GlobalAlertsSiteFlagsResult


/** web/src/hooks/useHandleSubmitFeedback.ts */
SubmitHappinessFeedback: (variables: SubmitHappinessFeedbackVariables) => SubmitHappinessFeedbackResult


/** web/src/library/useLibraryConfiguration.ts */
LibraryConfiguration: (variables: LibraryConfigurationVariables) => LibraryConfigurationResult


/** web/src/marketing/backend.ts */
FetchSurveyResponses: (variables: FetchSurveyResponsesVariables) => FetchSurveyResponsesResult


/** web/src/marketing/backend.ts */
FetchAllUsersWithSurveyResponses: (variables: FetchAllUsersWithSurveyResponsesVariables) => FetchAllUsersWithSurveyResponsesResult


/** web/src/marketing/backend.ts */
FetchSurveyResponseAggregates: (variables: FetchSurveyResponseAggregatesVariables) => FetchSurveyResponseAggregatesResult


/** web/src/marketing/page/SurveyForm.tsx */
SubmitSurvey: (variables: SubmitSurveyVariables) => SubmitSurveyResult


/** web/src/marketing/toast/SurveyToast.test.tsx */
GetTemporarySettings: (variables: GetTemporarySettingsVariables) => GetTemporarySettingsResult


/** web/src/namespaces/useAffiliatedNamespaces.ts */
ViewerAffiliatedNamespaces: (variables: ViewerAffiliatedNamespacesVariables) => ViewerAffiliatedNamespacesResult


/** web/src/nav/StatusMessagesNavItemQueries.ts */
StatusAndRepoCount: (variables: StatusAndRepoCountVariables) => StatusAndRepoCountResult


/** web/src/notebooks/backend.ts */
ListNotebooks: (variables: ListNotebooksVariables) => ListNotebooksResult


/** web/src/notebooks/backend.ts */
FetchNotebook: (variables: FetchNotebookVariables) => FetchNotebookResult


/** web/src/notebooks/backend.ts */
CreateNotebook: (variables: CreateNotebookVariables) => CreateNotebookResult


/** web/src/notebooks/backend.ts */
UpdateNotebook: (variables: UpdateNotebookVariables) => UpdateNotebookResult


/** web/src/notebooks/backend.ts */
DeleteNotebook: (variables: DeleteNotebookVariables) => DeleteNotebookResult


/** web/src/notebooks/backend.ts */
CreateNotebookStar: (variables: CreateNotebookStarVariables) => CreateNotebookStarResult


/** web/src/notebooks/backend.ts */
DeleteNotebookStar: (variables: DeleteNotebookStarVariables) => DeleteNotebookStarResult


/** web/src/onboarding/queries.ts */
SiteConfig: (variables: SiteConfigVariables) => SiteConfigResult


/** web/src/onboarding/queries.ts */
UpdateSiteConfiguration: (variables: UpdateSiteConfigurationVariables) => UpdateSiteConfigurationResult


/** web/src/org/area/OrgArea.tsx */
Organization: (variables: OrganizationVariables) => OrganizationResult


/** web/src/org/area/OrgInvitationPageLegacy.tsx */
RespondToOrganizationInvitation: (variables: RespondToOrganizationInvitationVariables) => RespondToOrganizationInvitationResult


/** web/src/org/backend.ts */
OrganizationSettingsMembers: (variables: OrganizationSettingsMembersVariables) => OrganizationSettingsMembersResult


/** web/src/org/backend.ts */
CreateOrganization: (variables: CreateOrganizationVariables) => CreateOrganizationResult


/** web/src/org/backend.ts */
RemoveUserFromOrganization: (variables: RemoveUserFromOrganizationVariables) => RemoveUserFromOrganizationResult


/** web/src/org/backend.ts */
UpdateOrganization: (variables: UpdateOrganizationVariables) => UpdateOrganizationResult


/** web/src/org/invitations/OrgInvitationPage.tsx */
RespondToOrgInvitation: (variables: RespondToOrgInvitationVariables) => RespondToOrgInvitationResult


/** web/src/org/invitations/OrgInvitationPage.tsx */
InvitationByToken: (variables: InvitationByTokenVariables) => InvitationByTokenResult


/** web/src/org/settings/DeleteOrgModal.tsx */
DeleteOrganization: (variables: DeleteOrganizationVariables) => DeleteOrganizationResult


/** web/src/org/settings/members/InviteForm.tsx */
InviteUserToOrganization: (variables: InviteUserToOrganizationVariables) => InviteUserToOrganizationResult


/** web/src/org/settings/members/InviteForm.tsx */
AddUserToOrganization: (variables: AddUserToOrganizationVariables) => AddUserToOrganizationResult


/** web/src/prompts/graphql.ts */
Prompts: (variables: PromptsVariables) => PromptsResult


/** web/src/prompts/graphql.ts */
Prompt: (variables: PromptVariables) => PromptResult


/** web/src/prompts/graphql.ts */
CreatePrompt: (variables: CreatePromptVariables) => CreatePromptResult


/** web/src/prompts/graphql.ts */
UpdatePrompt: (variables: UpdatePromptVariables) => UpdatePromptResult


/** web/src/prompts/graphql.ts */
TransferPromptOwnership: (variables: TransferPromptOwnershipVariables) => TransferPromptOwnershipResult


/** web/src/prompts/graphql.ts */
ChangePromptVisibility: (variables: ChangePromptVisibilityVariables) => ChangePromptVisibilityResult


/** web/src/prompts/graphql.ts */
DeletePrompt: (variables: DeletePromptVariables) => DeletePromptResult


/** web/src/regression/core.test.ts */
CurrentUsername: (variables: CurrentUsernameVariables) => CurrentUsernameResult


/** web/src/regression/util/api.ts */
ResolveRev: (variables: ResolveRevVariables) => ResolveRevResult


/** web/src/regression/util/api.ts */
ExternalServicesRegression: (variables: ExternalServicesRegressionVariables) => ExternalServicesRegressionResult


/** web/src/regression/util/api.ts */
UpdateExternalServiceRegression: (variables: UpdateExternalServiceRegressionVariables) => UpdateExternalServiceRegressionResult


/** web/src/regression/util/api.ts */
DeleteUser: (variables: DeleteUserVariables) => DeleteUserResult


/** web/src/regression/util/api.ts */
SetUserIsSiteAdmin: (variables: SetUserIsSiteAdminVariables) => SetUserIsSiteAdminResult


/** web/src/regression/util/api.ts */
SetTosAccepted: (variables: SetTosAcceptedVariables) => SetTosAcceptedResult


/** web/src/regression/util/api.ts */
SiteProductVersion: (variables: SiteProductVersionVariables) => SiteProductVersionResult


/** web/src/regression/util/api.ts */
Organizations: (variables: OrganizationsVariables) => OrganizationsResult


/** web/src/regression/util/api.ts */
CreateUser: (variables: CreateUserVariables) => CreateUserResult


/** web/src/regression/util/api.ts */
User: (variables: UserVariables) => UserResult


/** web/src/regression/util/api.ts */
addExternalService: (variables: addExternalServiceVariables) => addExternalServiceResult


/** web/src/regression/util/api.ts */
Search: (variables: SearchVariables) => SearchResult


/** web/src/regression/util/api.ts */
Site: (variables: SiteVariables) => SiteResult


/** web/src/repo/GitReference.tsx */
RepositoryGitRefs: (variables: RepositoryGitRefsVariables) => RepositoryGitRefsResult


/** web/src/repo/RepoLinkPicker.tsx */
RepositoriesSuggestions: (variables: RepositoriesSuggestionsVariables) => RepositoriesSuggestionsResult


/** web/src/repo/RepoMetadataPage/query.ts */
SearchRepoMetaKeys: (variables: SearchRepoMetaKeysVariables) => SearchRepoMetaKeysResult


/** web/src/repo/RepoMetadataPage/query.ts */
SearchRepoMetaValues: (variables: SearchRepoMetaValuesVariables) => SearchRepoMetaValuesResult


/** web/src/repo/RepoMetadataPage/query.ts */
AddRepoMetadata: (variables: AddRepoMetadataVariables) => AddRepoMetadataResult


/** web/src/repo/RepoMetadataPage/query.ts */
DeleteRepoMetadata: (variables: DeleteRepoMetadataVariables) => DeleteRepoMetadataResult


/** web/src/repo/RepoMetadataPage/query.ts */
GetRepoMetadata: (variables: GetRepoMetadataVariables) => GetRepoMetadataResult


/** web/src/repo/RepoRevisionSidebarCommits.tsx */
FetchCommits: (variables: FetchCommitsVariables) => FetchCommitsResult


/** web/src/repo/RepoRevisionSidebarFileTree.tsx */
FileTreeEntries: (variables: FileTreeEntriesVariables) => FileTreeEntriesResult


/** web/src/repo/RepoRevisionSidebarSymbols.tsx */
Symbols: (variables: SymbolsVariables) => SymbolsResult


/** web/src/repo/RepositoriesPopover/RepositoriesPopover.tsx */
RepositoriesForPopover: (variables: RepositoriesForPopoverVariables) => RepositoriesForPopoverResult


/** web/src/repo/RevisionsPopover/RevisionsPopoverCommits.tsx */
RepositoryGitCommit: (variables: RepositoryGitCommitVariables) => RepositoryGitCommitResult


/** web/src/repo/backend.ts */
ResolveRepoRev: (variables: ResolveRepoRevVariables) => ResolveRepoRevResult


/** web/src/repo/backend.ts */
FileExternalLinks: (variables: FileExternalLinksVariables) => FileExternalLinksResult


/** web/src/repo/backend.ts */
CommitMessage: (variables: CommitMessageVariables) => CommitMessageResult


/** web/src/repo/blame/hooks.ts */
ExternalRepoURLs: (variables: ExternalRepoURLsVariables) => ExternalRepoURLsResult


/** web/src/repo/blob/backend.ts */
Blob: (variables: BlobVariables) => BlobResult


/** web/src/repo/blob/own/grapqlQueries.ts */
FetchOwnership: (variables: FetchOwnershipVariables) => FetchOwnershipResult


/** web/src/repo/blob/own/grapqlQueries.ts */
FetchTreeOwnership: (variables: FetchTreeOwnershipVariables) => FetchTreeOwnershipResult


/** web/src/repo/blob/own/grapqlQueries.ts */
FetchOwnersAndHistory: (variables: FetchOwnersAndHistoryVariables) => FetchOwnersAndHistoryResult


/** web/src/repo/blob/own/grapqlQueries.ts */
RemoveAssignedOwner: (variables: RemoveAssignedOwnerVariables) => RemoveAssignedOwnerResult


/** web/src/repo/blob/own/grapqlQueries.ts */
RemoveAssignedTeam: (variables: RemoveAssignedTeamVariables) => RemoveAssignedTeamResult


/** web/src/repo/branches/backend.ts */
RepositoryGitBranchesOverview: (variables: RepositoryGitBranchesOverviewVariables) => RepositoryGitBranchesOverviewResult


/** web/src/repo/commit/backend.ts */
RepositoryCommit: (variables: RepositoryCommitVariables) => RepositoryCommitResult


/** web/src/repo/commit/backend.ts */
RepositoryChangelist: (variables: RepositoryChangelistVariables) => RepositoryChangelistResult


/** web/src/repo/commits/RepositoryCommitsPage.tsx */
RepositoryGitCommits: (variables: RepositoryGitCommitsVariables) => RepositoryGitCommitsResult


/** web/src/repo/compare/RepositoryCompareCommitsPage.tsx */
RepositoryComparisonCommits: (variables: RepositoryComparisonCommitsVariables) => RepositoryComparisonCommitsResult


/** web/src/repo/compare/RepositoryCompareDiffPage.tsx */
RepositoryComparisonDiff: (variables: RepositoryComparisonDiffVariables) => RepositoryComparisonDiffResult


/** web/src/repo/compare/RepositoryCompareOverviewPage.tsx */
RepositoryComparison: (variables: RepositoryComparisonVariables) => RepositoryComparisonResult


/** web/src/repo/settings/RepoSettingsIndexPage.tsx */
RepositoryTextSearchIndex: (variables: RepositoryTextSearchIndexVariables) => RepositoryTextSearchIndexResult


/** web/src/repo/settings/RepoSettingsIndexPage.tsx */
reindex: (variables: reindexVariables) => reindexResult


/** web/src/repo/settings/backend.ts */
SettingsAreaRepository: (variables: SettingsAreaRepositoryVariables) => SettingsAreaRepositoryResult


/** web/src/repo/settings/backend.ts */
ExcludeRepoFromExternalServices: (variables: ExcludeRepoFromExternalServicesVariables) => ExcludeRepoFromExternalServicesResult


/** web/src/repo/stats/RepositoryStatsContributorsPage.tsx */
RepositoryContributors: (variables: RepositoryContributorsVariables) => RepositoryContributorsResult


/** web/src/repo/tree/TreePage.tsx */
FileCommits: (variables: FileCommitsVariables) => FileCommitsResult


/** web/src/repo/tree/TreePageContent.tsx */
TreePageRepositoryContributors: (variables: TreePageRepositoryContributorsVariables) => TreePageRepositoryContributorsResult


/** web/src/repo/tree/TreePageContent.tsx */
TreePageOwnership: (variables: TreePageOwnershipVariables) => TreePageOwnershipResult


/** web/src/savedSearches/graphql.ts */
SavedSearches: (variables: SavedSearchesVariables) => SavedSearchesResult


/** web/src/savedSearches/graphql.ts */
SavedSearch: (variables: SavedSearchVariables) => SavedSearchResult


/** web/src/savedSearches/graphql.ts */
CreateSavedSearch: (variables: CreateSavedSearchVariables) => CreateSavedSearchResult


/** web/src/savedSearches/graphql.ts */
UpdateSavedSearch: (variables: UpdateSavedSearchVariables) => UpdateSavedSearchResult


/** web/src/savedSearches/graphql.ts */
TransferSavedSearchOwnership: (variables: TransferSavedSearchOwnershipVariables) => TransferSavedSearchOwnershipResult


/** web/src/savedSearches/graphql.ts */
ChangeSavedSearchVisibility: (variables: ChangeSavedSearchVisibilityVariables) => ChangeSavedSearchVisibilityResult


/** web/src/savedSearches/graphql.ts */
DeleteSavedSearch: (variables: DeleteSavedSearchVariables) => DeleteSavedSearchResult


/** web/src/search/autocompletion/sources.ts */
AutocompleteRepo: (variables: AutocompleteRepoVariables) => AutocompleteRepoResult


/** web/src/search/backend.tsx */
EventLogsData: (variables: EventLogsDataVariables) => EventLogsDataResult


/** web/src/search/home/SearchPage.tsx */
ExternalServicesTotalCount: (variables: ExternalServicesTotalCountVariables) => ExternalServicesTotalCountResult


/** web/src/search/input/suggestions.ts */
SuggestionsRepo: (variables: SuggestionsRepoVariables) => SuggestionsRepoResult


/** web/src/search/input/suggestions.ts */
SuggestionsFile: (variables: SuggestionsFileVariables) => SuggestionsFileResult


/** web/src/search/input/suggestions.ts */
SuggestionsSymbol: (variables: SuggestionsSymbolVariables) => SuggestionsSymbolResult


/** web/src/search/input/suggestions.ts */
SuggestionsSearchContext: (variables: SuggestionsSearchContextVariables) => SuggestionsSearchContextResult


/** web/src/search/input/useRecentSearches.ts */
SearchHistoryEventLogsQuery: (variables: SearchHistoryEventLogsQueryVariables) => SearchHistoryEventLogsQueryResult


/** web/src/search/results/components/aggregation/hooks.ts */
GetSearchAggregation: (variables: GetSearchAggregationVariables) => GetSearchAggregationResult


/** web/src/search/results/sidebar/Revisions.tsx */
SearchSidebarGitRefs: (variables: SearchSidebarGitRefsVariables) => SearchSidebarGitRefsResult


/** web/src/settings/SettingsArea.tsx */
SettingsCascade: (variables: SettingsCascadeVariables) => SettingsCascadeResult


/** web/src/settings/tokens/AccessTokenNode.tsx */
DeleteAccessToken: (variables: DeleteAccessTokenVariables) => DeleteAccessTokenResult


/** web/src/setup-wizard/components/remote-repositories-step/components/code-hosts/github/GithubConnectView.tsx */
ValidateAccessToken: (variables: ValidateAccessTokenVariables) => ValidateAccessTokenResult


/** web/src/setup-wizard/components/remote-repositories-step/components/code-hosts/github/GithubEntityPickers.tsx */
GetGitHubOrganizations: (variables: GetGitHubOrganizationsVariables) => GetGitHubOrganizationsResult


/** web/src/setup-wizard/components/remote-repositories-step/components/code-hosts/github/GithubEntityPickers.tsx */
GetGitHubRepositories: (variables: GetGitHubRepositoriesVariables) => GetGitHubRepositoriesResult


/** web/src/setup-wizard/components/remote-repositories-step/queries.ts */
GetCodeHosts: (variables: GetCodeHostsVariables) => GetCodeHostsResult


/** web/src/setup-wizard/components/remote-repositories-step/queries.ts */
GetExternalServiceById: (variables: GetExternalServiceByIdVariables) => GetExternalServiceByIdResult


/** web/src/setup-wizard/components/remote-repositories-step/queries.ts */
DeleteCodeHost: (variables: DeleteCodeHostVariables) => DeleteCodeHostResult


/** web/src/setup-wizard/queries.ts */
AddRemoteCodeHost: (variables: AddRemoteCodeHostVariables) => AddRemoteCodeHostResult


/** web/src/setup-wizard/queries.ts */
UpdateRemoteCodeHost: (variables: UpdateRemoteCodeHostVariables) => UpdateRemoteCodeHostResult


/** web/src/setup-wizard/queries.ts */
DeleteRemoteCodeHost: (variables: DeleteRemoteCodeHostVariables) => DeleteRemoteCodeHostResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
GetAccessRequests: (variables: GetAccessRequestsVariables) => GetAccessRequestsResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
HasLicenseSeats: (variables: HasLicenseSeatsVariables) => HasLicenseSeatsResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
RejectAccessRequest: (variables: RejectAccessRequestVariables) => RejectAccessRequestResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
DoesUsernameExist: (variables: DoesUsernameExistVariables) => DoesUsernameExistResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
ApproveAccessRequest: (variables: ApproveAccessRequestVariables) => ApproveAccessRequestResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
AccessRequestCreateUser: (variables: AccessRequestCreateUserVariables) => AccessRequestCreateUserResult


/** web/src/site-admin/AccessRequestsPage/queries.tsx */
AccessRequestsCount: (variables: AccessRequestsCountVariables) => AccessRequestsCountResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
create: (variables: createVariables) => createResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
update: (variables: updateVariables) => updateResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
delete: (variables: deleteVariables) => deleteResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
createFeatureFlagOverride: (variables: createFeatureFlagOverrideVariables) => createFeatureFlagOverrideResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
updateFeatureFlagOverride: (variables: updateFeatureFlagOverrideVariables) => updateFeatureFlagOverrideResult


/** web/src/site-admin/SiteAdminFeatureFlagConfigurationPage.tsx */
deleteFeatureFlagOverride: (variables: deleteFeatureFlagOverrideVariables) => deleteFeatureFlagOverrideResult


/** web/src/site-admin/UserManagement/queries.tsx */
UsersManagementSummary: (variables: UsersManagementSummaryVariables) => UsersManagementSummaryResult


/** web/src/site-admin/UserManagement/queries.tsx */
UsersManagementUsersList: (variables: UsersManagementUsersListVariables) => UsersManagementUsersListResult


/** web/src/site-admin/UserManagement/queries.tsx */
InvalidateSessionsByIDs: (variables: InvalidateSessionsByIDsVariables) => InvalidateSessionsByIDsResult


/** web/src/site-admin/UserManagement/queries.tsx */
DeleteUsers: (variables: DeleteUsersVariables) => DeleteUsersResult


/** web/src/site-admin/UserManagement/queries.tsx */
DeleteUsersForever: (variables: DeleteUsersForeverVariables) => DeleteUsersForeverResult


/** web/src/site-admin/UserManagement/queries.tsx */
RecoverUsers: (variables: RecoverUsersVariables) => RecoverUsersResult


/** web/src/site-admin/analytics/AnalyticsBatchChangesPage/queries.ts */
BatchChangesStatistics: (variables: BatchChangesStatisticsVariables) => BatchChangesStatisticsResult


/** web/src/site-admin/analytics/AnalyticsCodeInsightsPage/queries.ts */
InsightsStatistics: (variables: InsightsStatisticsVariables) => InsightsStatisticsResult


/** web/src/site-admin/analytics/AnalyticsCodeIntelPage/queries.ts */
CodeIntelStatistics: (variables: CodeIntelStatisticsVariables) => CodeIntelStatisticsResult


/** web/src/site-admin/analytics/AnalyticsExtensionsPage/queries.ts */
ExtensionsStatistics: (variables: ExtensionsStatisticsVariables) => ExtensionsStatisticsResult


/** web/src/site-admin/analytics/AnalyticsNotebooksPage/queries.ts */
NotebooksStatistics: (variables: NotebooksStatisticsVariables) => NotebooksStatisticsResult


/** web/src/site-admin/analytics/AnalyticsOverviewPage/queries.ts */
OverviewStatistics: (variables: OverviewStatisticsVariables) => OverviewStatisticsResult


/** web/src/site-admin/analytics/AnalyticsOverviewPage/queries.ts */
OverviewDevTimeSaved: (variables: OverviewDevTimeSavedVariables) => OverviewDevTimeSavedResult


/** web/src/site-admin/analytics/AnalyticsSearchPage/queries.ts */
SearchStatistics: (variables: SearchStatisticsVariables) => SearchStatisticsResult


/** web/src/site-admin/analytics/AnalyticsUsersPage/queries.ts */
UsersStatistics: (variables: UsersStatisticsVariables) => UsersStatisticsResult


/** web/src/site-admin/backend.ts */
Repositories: (variables: RepositoriesVariables) => RepositoriesResult


/** web/src/site-admin/backend.ts */
SlowRequests: (variables: SlowRequestsVariables) => SlowRequestsResult


/** web/src/site-admin/backend.ts */
OutboundRequests: (variables: OutboundRequestsVariables) => OutboundRequestsResult


/** web/src/site-admin/backend.ts */
BackgroundJobs: (variables: BackgroundJobsVariables) => BackgroundJobsResult


/** web/src/site-admin/backend.ts */
UpdateMirrorRepository: (variables: UpdateMirrorRepositoryVariables) => UpdateMirrorRepositoryResult


/** web/src/site-admin/backend.ts */
CheckMirrorRepositoryConnection: (variables: CheckMirrorRepositoryConnectionVariables) => CheckMirrorRepositoryConnectionResult


/** web/src/site-admin/backend.ts */
ScheduleRepositoryPermissionsSync: (variables: ScheduleRepositoryPermissionsSyncVariables) => ScheduleRepositoryPermissionsSyncResult


/** web/src/site-admin/backend.ts */
RecloneRepository: (variables: RecloneRepositoryVariables) => RecloneRepositoryResult


/** web/src/site-admin/backend.ts */
AllConfig: (variables: AllConfigVariables) => AllConfigResult


/** web/src/site-admin/backend.ts */
ReloadSite: (variables: ReloadSiteVariables) => ReloadSiteResult


/** web/src/site-admin/backend.ts */
RandomizeUserPassword: (variables: RandomizeUserPasswordVariables) => RandomizeUserPasswordResult


/** web/src/site-admin/backend.ts */
SiteAdminCreateUser: (variables: SiteAdminCreateUserVariables) => SiteAdminCreateUserResult


/** web/src/site-admin/backend.ts */
SiteUpdateCheck: (variables: SiteUpdateCheckVariables) => SiteUpdateCheckResult


/** web/src/site-admin/backend.ts */
SiteUpgradeReadiness: (variables: SiteUpgradeReadinessVariables) => SiteUpgradeReadinessResult


/** web/src/site-admin/backend.ts */
AutoUpgradeEnabled: (variables: AutoUpgradeEnabledVariables) => AutoUpgradeEnabledResult


/** web/src/site-admin/backend.ts */
SetAutoUpgrade: (variables: SetAutoUpgradeVariables) => SetAutoUpgradeResult


/** web/src/site-admin/backend.ts */
OutOfBandMigrations: (variables: OutOfBandMigrationsVariables) => OutOfBandMigrationsResult


/** web/src/site-admin/backend.ts */
FeatureFlags: (variables: FeatureFlagsVariables) => FeatureFlagsResult


/** web/src/site-admin/backend.ts */
StatusAndRepoStats: (variables: StatusAndRepoStatsVariables) => StatusAndRepoStatsResult


/** web/src/site-admin/backend.ts */
SiteAdminAccessTokens: (variables: SiteAdminAccessTokensVariables) => SiteAdminAccessTokensResult


/** web/src/site-admin/backend.ts */
SiteExternalServiceConfig: (variables: SiteExternalServiceConfigVariables) => SiteExternalServiceConfigResult


/** web/src/site-admin/backend.ts */
WebhooksList: (variables: WebhooksListVariables) => WebhooksListResult


/** web/src/site-admin/backend.ts */
WebhookById: (variables: WebhookByIdVariables) => WebhookByIdResult


/** web/src/site-admin/backend.ts */
WebhookPageHeader: (variables: WebhookPageHeaderVariables) => WebhookPageHeaderResult


/** web/src/site-admin/backend.ts */
CreateWebhook: (variables: CreateWebhookVariables) => CreateWebhookResult


/** web/src/site-admin/backend.ts */
UpdateWebhook: (variables: UpdateWebhookVariables) => UpdateWebhookResult


/** web/src/site-admin/backend.ts */
ExternalServiceKinds: (variables: ExternalServiceKindsVariables) => ExternalServiceKindsResult


/** web/src/site-admin/backend.ts */
Packages: (variables: PackagesVariables) => PackagesResult


/** web/src/site-admin/backend.ts */
SiteConfigurationHistory: (variables: SiteConfigurationHistoryVariables) => SiteConfigurationHistoryResult


/** web/src/site-admin/backend.ts */
Gitservers: (variables: GitserversVariables) => GitserversResult


/** web/src/site-admin/backend.ts */
WebhookExternalServices: (variables: WebhookExternalServicesVariables) => WebhookExternalServicesResult


/** web/src/site-admin/backend.ts */
DeleteWebhook: (variables: DeleteWebhookVariables) => DeleteWebhookResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
CreateOutboundWebhook: (variables: CreateOutboundWebhookVariables) => CreateOutboundWebhookResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
DeleteOutboundWebhook: (variables: DeleteOutboundWebhookVariables) => DeleteOutboundWebhookResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
OutboundWebhookByID: (variables: OutboundWebhookByIDVariables) => OutboundWebhookByIDResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
OutboundWebhooksList: (variables: OutboundWebhooksListVariables) => OutboundWebhooksListResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
UpdateOutboundWebhook: (variables: UpdateOutboundWebhookVariables) => UpdateOutboundWebhookResult


/** web/src/site-admin/outbound-webhooks/backend.ts */
OutboundWebhookEventTypes: (variables: OutboundWebhookEventTypesVariables) => OutboundWebhookEventTypesResult


/** web/src/site-admin/outbound-webhooks/logs/backend.ts */
OutboundWebhookLogs: (variables: OutboundWebhookLogsVariables) => OutboundWebhookLogsResult


/** web/src/site-admin/packages/backend.ts */
PackageRepoReferencesMatchingFilter: (variables: PackageRepoReferencesMatchingFilterVariables) => PackageRepoReferencesMatchingFilterResult


/** web/src/site-admin/packages/backend.ts */
PackageRepoFilters: (variables: PackageRepoFiltersVariables) => PackageRepoFiltersResult


/** web/src/site-admin/packages/backend.ts */
AddPackageRepoFilter: (variables: AddPackageRepoFilterVariables) => AddPackageRepoFilterResult


/** web/src/site-admin/packages/backend.ts */
DeletePackageRepoFilter: (variables: DeletePackageRepoFilterVariables) => DeletePackageRepoFilterResult


/** web/src/site-admin/packages/backend.ts */
UpdatePackageRepoFilter: (variables: UpdatePackageRepoFilterVariables) => UpdatePackageRepoFilterResult


/** web/src/site-admin/permissions-center/backend.ts */
PermissionsSyncJobs: (variables: PermissionsSyncJobsVariables) => PermissionsSyncJobsResult


/** web/src/site-admin/permissions-center/backend.ts */
ScheduleRepoPermissionsSync: (variables: ScheduleRepoPermissionsSyncVariables) => ScheduleRepoPermissionsSyncResult


/** web/src/site-admin/permissions-center/backend.ts */
CancelPermissionsSyncJob: (variables: CancelPermissionsSyncJobVariables) => CancelPermissionsSyncJobResult


/** web/src/site-admin/permissions-center/backend.ts */
PermissionsSyncJobsStats: (variables: PermissionsSyncJobsStatsVariables) => PermissionsSyncJobsStatsResult


/** web/src/site-admin/user-select/backend.ts */
UserSelectSearch: (variables: UserSelectSearchVariables) => UserSelectSearchResult


/** web/src/site-admin/webhooks/backend.ts */
WebhookLogPageHeader: (variables: WebhookLogPageHeaderVariables) => WebhookLogPageHeaderResult


/** web/src/site-admin/webhooks/backend.ts */
WebhookLogsByWebhookID: (variables: WebhookLogsByWebhookIDVariables) => WebhookLogsByWebhookIDResult


/** web/src/site-admin/webhooks/backend.ts */
WebhookByIDLogPageHeader: (variables: WebhookByIDLogPageHeaderVariables) => WebhookByIDLogPageHeaderResult


/** web/src/storm/pages/LayoutPage/LayoutPage.loader.ts */
LayoutPageQuery: (variables: LayoutPageQueryVariables) => LayoutPageQueryResult


/** web/src/storm/pages/SearchPage/SearchPage.loader.ts */
SearchPageQuery: (variables: SearchPageQueryVariables) => SearchPageQueryResult


/** web/src/sveltekit/util.ts */
EnableSveltePrototype: (variables: EnableSveltePrototypeVariables) => EnableSveltePrototypeResult


/** web/src/team/area/backend.ts */
Team: (variables: TeamVariables) => TeamResult


/** web/src/team/area/backend.ts */
ChangeTeamDisplayName: (variables: ChangeTeamDisplayNameVariables) => ChangeTeamDisplayNameResult


/** web/src/team/area/backend.ts */
AssignParentTeam: (variables: AssignParentTeamVariables) => AssignParentTeamResult


/** web/src/team/area/backend.ts */
RemoveParentTeam: (variables: RemoveParentTeamVariables) => RemoveParentTeamResult


/** web/src/team/backend.ts */
CreateTeam: (variables: CreateTeamVariables) => CreateTeamResult


/** web/src/team/list/backend.ts */
ListTeams: (variables: ListTeamsVariables) => ListTeamsResult


/** web/src/team/list/backend.ts */
ListTeamsOfParent: (variables: ListTeamsOfParentVariables) => ListTeamsOfParentResult


/** web/src/team/list/backend.ts */
DeleteTeam: (variables: DeleteTeamVariables) => DeleteTeamResult


/** web/src/team/members/backend.ts */
ListTeamMembers: (variables: ListTeamMembersVariables) => ListTeamMembersResult


/** web/src/team/members/backend.ts */
RemoveTeamMembers: (variables: RemoveTeamMembersVariables) => RemoveTeamMembersResult


/** web/src/team/members/backend.ts */
AddTeamMembers: (variables: AddTeamMembersVariables) => AddTeamMembersResult


/** web/src/team/members/user-select/backend.ts */
TeamMemberUserSelectSearch: (variables: TeamMemberUserSelectSearchVariables) => TeamMemberUserSelectSearchResult


/** web/src/team/new/team-select/backend.ts */
ParentTeamSelectSearch: (variables: ParentTeamSelectSearchVariables) => ParentTeamSelectSearchResult


/** web/src/telemetry/apolloTelemetryExporter.ts */
ExportTelemetryEvents: (variables: ExportTelemetryEventsVariables) => ExportTelemetryEventsResult


/** web/src/tour/GettingStartedTourSetup.tsx */
UserOnboardingRepoValidation: (variables: UserOnboardingRepoValidationVariables) => UserOnboardingRepoValidationResult


/** web/src/tour/data/index.tsx */
OnboardingTourConfig: (variables: OnboardingTourConfigVariables) => OnboardingTourConfigResult


/** web/src/tour/data/index.tsx */
OnboardingTourConfigMutation: (variables: OnboardingTourConfigMutationVariables) => OnboardingTourConfigMutationResult


/** web/src/user/area/UserArea.tsx */
UserAreaUserProfile: (variables: UserAreaUserProfileVariables) => UserAreaUserProfileResult


/** web/src/user/settings/UserSettingsArea.tsx */
UserSettingsAreaUserProfile: (variables: UserSettingsAreaUserProfileVariables) => UserSettingsAreaUserProfileResult


/** web/src/user/settings/accessTokens/UserSettingsTokensPage.tsx */
AccessTokens: (variables: AccessTokensVariables) => AccessTokensResult


/** web/src/user/settings/accessTokens/create.ts */
CreateAccessToken: (variables: CreateAccessTokenVariables) => CreateAccessTokenResult


/** web/src/user/settings/auth/AddGerritAccountModal.tsx */
AddExternalAccount: (variables: AddExternalAccountVariables) => AddExternalAccountResult


/** web/src/user/settings/backend.tsx */
UpdatePassword: (variables: UpdatePasswordVariables) => UpdatePasswordResult


/** web/src/user/settings/backend.tsx */
CreatePassword: (variables: CreatePasswordVariables) => CreatePasswordResult


/** web/src/user/settings/backend.tsx */
UserExternalAccountsWithAccountData: (variables: UserExternalAccountsWithAccountDataVariables) => UserExternalAccountsWithAccountDataResult


/** web/src/user/settings/backend.tsx */
SetUserEmailVerified: (variables: SetUserEmailVerifiedVariables) => SetUserEmailVerifiedResult


/** web/src/user/settings/emails/AddUserEmailForm.tsx */
AddUserEmail: (variables: AddUserEmailVariables) => AddUserEmailResult


/** web/src/user/settings/emails/SetUserPrimaryEmailForm.tsx */
SetUserEmailPrimary: (variables: SetUserEmailPrimaryVariables) => SetUserEmailPrimaryResult


/** web/src/user/settings/emails/UserEmail.tsx */
ResendVerificationEmail: (variables: ResendVerificationEmailVariables) => ResendVerificationEmailResult


/** web/src/user/settings/emails/UserEmail.tsx */
RemoveUserEmail: (variables: RemoveUserEmailVariables) => RemoveUserEmailResult


/** web/src/user/settings/emails/UserSettingsEmailsPage.tsx */
UserSettingsEmailsSiteFlags: (variables: UserSettingsEmailsSiteFlagsVariables) => UserSettingsEmailsSiteFlagsResult


/** web/src/user/settings/emails/UserSettingsEmailsPage.tsx */
UserEmails: (variables: UserEmailsVariables) => UserEmailsResult


/** web/src/user/settings/profile/EditUserProfileForm.tsx */
UpdateUser: (variables: UpdateUserVariables) => UpdateUserResult


/** web/src/user/settings/quota/backend.ts */
UserRequestQuotas: (variables: UserRequestQuotasVariables) => UserRequestQuotasResult


/** web/src/user/settings/quota/backend.ts */
SetUserCompletionsQuota: (variables: SetUserCompletionsQuotaVariables) => SetUserCompletionsQuotaResult


/** web/src/user/settings/quota/backend.ts */
SetUserCodeCompletionsQuota: (variables: SetUserCodeCompletionsQuotaVariables) => SetUserCodeCompletionsQuotaResult

}

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An arbitrarily large integer encoded as a decimal string. */
  BigInt: string;
  /**
   * An RFC 3339-encoded UTC date string, such as 1973-11-29T21:33:09Z. This value can be parsed into a
   * JavaScript Date using Date.parse. To produce this value from a JavaScript Date instance, use
   * Date#toISOString.
   */
  DateTime: string;
  /** A Git object ID (SHA-1 hash, 40 hexadecimal characters). */
  GitObjectID: string;
  /** A string that contains valid JSON, with additional support for //-style comments and trailing commas. */
  JSONCString: string;
  /** A valid JSON value. */
  JSONValue: unknown;
  /** A quadruple that represents all possible states of the published value: true, false, 'draft', or null. */
  PublishedValue: boolean | 'draft';
}

export { AccessRequestStatus };

/** A new external service. */
export interface AddExternalServiceInput {
  /** The JSON configuration of the external service. */
  config: Scalars['String'];
  /** The display name of the external service. */
  displayName: Scalars['String'];
  /** The kind of the external service. */
  kind: ExternalServiceKind;
  /**
   * The namespace this external service belongs to.
   * This can be used both for a user and an organization.
   */
  namespace?: InputMaybe<Scalars['ID']>;
}

/** Input object for adding insight view to dashboard. */
export interface AddInsightViewToDashboardInput {
  /** ID of the dashboard. */
  dashboardId: Scalars['ID'];
  /** ID of the insight view to attach to the dashboard */
  insightViewId: Scalars['ID'];
}

export { AlertType };

export { AnalyticsDateRange };

export { AnalyticsGrouping };

/** AssignOwnerOrTeamInput represents the input for assigning or deleting an owner team or person. */
export interface AssignOwnerOrTeamInput {
  /** Path of the file/directory or a root path of the repo, which is assigned for ownership. */
  absolutePath: Scalars['String'];
  /** ID of an assigned owner or team. */
  assignedOwnerID: Scalars['ID'];
  /** ID of a repo, which (or which directory/file) is assigned for ownership. */
  repoID: Scalars['ID'];
}

export { AuditLogOperation };

export { BackfillQueueOrderBy };

export { BackgroundRoutineType };

export { BatchChangeState };

export { BatchSpecSource };

export { BatchSpecState };

export { BatchSpecWorkspaceResolutionState };

export { BatchSpecWorkspaceState };

export { BulkOperationState };

export { BulkOperationType };

export { CancelPermissionsSyncJobResultMessage };

export { ChangesetCheckState };

export { ChangesetExternalState };

export { ChangesetPublicationState };

export { ChangesetReconcilerState };

export { ChangesetReviewState };

export { ChangesetSpecOperation };

/**
 * A ChangesetSpecPublicationStateInput is a tuple containing a changeset spec ID
 * and its desired UI publication state.
 */
export interface ChangesetSpecPublicationStateInput {
  /** The changeset spec ID. */
  changesetSpec: Scalars['ID'];
  /** The desired publication state. */
  publicationState: Scalars['PublishedValue'];
}

export { ChangesetSpecType };

export { ChangesetState };

export { CloneStatus };

/** EXPERIMENTAL: This type may change in a backwards-incompatible way. */
export interface CodeGraphDataFilter {
  /**
   * If this field is not set, then the codeGraphData API
   * will go through each provenance each provenance one by one
   * in the order Precise -> Syntactic -> SearchBased
   * and stop when some data is available.
   */
  provenance?: InputMaybe<CodeGraphDataProvenanceComparator>;
}

export { CodeGraphDataProvenance };

/** EXPERIMENTAL: This type may change in a backwards-incompatible way. */
export interface CodeGraphDataProvenanceComparator {
  /** Checks for exact equality. */
  equals?: InputMaybe<CodeGraphDataProvenance>;
}

export { CodeHostStatus };

/** CodeownersFileInput represents the input for ingesting codeowners files */
export interface CodeownersFileInput {
  /** fileContents is the text of the codeowners file */
  fileContents: Scalars['String'];
  /** The repo ID to ingest the file for. Cannot be set with repositoryName. */
  repoID?: InputMaybe<Scalars['ID']>;
  /** The repo name to ingest the file for. Cannot be set with repositoryID. */
  repoName?: InputMaybe<Scalars['String']>;
}

export { CodyContextFiltersVersion };

export { CodyGatewayRateLimitSource };

export { CodySubscriptionPlan };

export { CodySubscriptionStatus };

/** Input wrapper for completions */
export interface CompletionsInput {
  /** Maximum number of tokens to sample */
  maxTokensToSample: Scalars['Int'];
  /** List of conversation messages */
  messages: Array<Message>;
  /** Temperature for sampling - higher means more random completions */
  temperature: Scalars['Float'];
  /** Number of highest probability completions to return */
  topK: Scalars['Int'];
  /** Probability threshold for inclusion in results */
  topP: Scalars['Int'];
}

/**
 * DEPRECATED: This type was renamed to SettingsEdit.
 * NOTE: GraphQL does not support @deprecated directives on INPUT_FIELD_DEFINITION (input fields).
 */
export interface ConfigurationEdit {
  /** DEPRECATED */
  keyPath: Array<KeyPathSegment>;
  /** DEPRECATED */
  value?: InputMaybe<Scalars['JSONValue']>;
  /** DEPRECATED */
  valueIsJSONCEncodedString?: InputMaybe<Scalars['Boolean']>;
}

/** CreateFileBlockInput contains the information necessary to create a file block. */
export interface CreateFileBlockInput {
  /** Path within the repository, e.g. "client/web/file.tsx". */
  filePath: Scalars['String'];
  /** An optional line range. If omitted, we display the entire file. */
  lineRange?: InputMaybe<CreateFileBlockLineRangeInput>;
  /** Name of the repository, e.g. "github.com/sourcegraph/sourcegraph". */
  repositoryName: Scalars['String'];
  /**
   * An optional revision, e.g. "pr/feature-1", "a9505a2947d3df53558e8c88ff8bcef390fc4e3e".
   * If omitted, we use the latest revision (HEAD).
   */
  revision?: InputMaybe<Scalars['String']>;
}

/** Input to create a line range for a file block. */
export interface CreateFileBlockLineRangeInput {
  /** The last line to fetch (0-indexed, exclusive). */
  endLine: Scalars['Int'];
  /** The first line to fetch (0-indexed, inclusive). */
  startLine: Scalars['Int'];
}

/** Input object for creating a new dashboard. */
export interface CreateInsightsDashboardInput {
  /** Permissions to grant to the dashboard. */
  grants: InsightsPermissionGrantsInput;
  /** Dashboard title. */
  title: Scalars['String'];
}

/**
 * GraphQL does not accept union types as inputs, so we have to use
 * all possible optional inputs with an enum to select the actual block input we want to use.
 */
export interface CreateNotebookBlockInput {
  /** File input. */
  fileInput?: InputMaybe<CreateFileBlockInput>;
  /** ID of the block. */
  id: Scalars['String'];
  /** Markdown input. */
  markdownInput?: InputMaybe<Scalars['String']>;
  /** Query input. */
  queryInput?: InputMaybe<Scalars['String']>;
  /** Symbol input. */
  symbolInput?: InputMaybe<CreateSymbolBlockInput>;
  /** Block type. */
  type: NotebookBlockType;
}

/** CreateSymbolBlockInput contains the information necessary to create a symbol block. */
export interface CreateSymbolBlockInput {
  /** Path within the repository, e.g. "client/web/file.tsx". */
  filePath: Scalars['String'];
  /** Number of lines to show before and after the matched symbol line. */
  lineContext: Scalars['Int'];
  /** Name of the repository, e.g. "github.com/sourcegraph/sourcegraph". */
  repositoryName: Scalars['String'];
  /**
   * An optional revision, e.g. "pr/feature-1", "a9505a2947d3df53558e8c88ff8bcef390fc4e3e".
   * If omitted, we use the latest revision (HEAD).
   */
  revision?: InputMaybe<Scalars['String']>;
  /** Name of the symbol container. */
  symbolContainerName: Scalars['String'];
  /** The symbol kind. */
  symbolKind: SymbolKind;
  /** The symbol name. */
  symbolName: Scalars['String'];
}

/**
 * A repository to pass to the deleteCodeownersFiles mutation. Either repoID or repoName
 * must be provided.
 */
export interface DeleteCodeownersFilesInput {
  /** The repo ID to ingest the file for. Cannot be set with repositoryName. */
  repoID?: InputMaybe<Scalars['ID']>;
  /** The repo name to ingest the file for. Cannot be set with repositoryID. */
  repoName?: InputMaybe<Scalars['String']>;
}

export { DiagnosticSeverity };

export { DiffHunkLineType };

/** A description of a user event. */
export interface Event {
  /** The additional argument information. */
  argument?: InputMaybe<Scalars['String']>;
  /** The billing ID for the event, used for tagging user events for billing aggregation purposes. */
  billingEventID?: InputMaybe<Scalars['String']>;
  /** The product category for the event, used for billing purposes. */
  billingProductCategory?: InputMaybe<Scalars['String']>;
  /** The client that this event is being sent from. */
  client?: InputMaybe<Scalars['String']>;
  /**
   * An optional cohort ID to identify the user as part of a specific A/B test.
   * The cohort ID is expected to be a date in the form YYYY-MM-DD
   */
  cohortID?: InputMaybe<Scalars['String']>;
  /** The site ID that the client was connected to when the event was logged. */
  connectedSiteID?: InputMaybe<Scalars['String']>;
  /** Device ID used for Amplitude analytics. Used on Sourcegraph Cloud only. */
  deviceID?: InputMaybe<Scalars['String']>;
  /** Device session ID to identify the user's session for analytics. */
  deviceSessionID?: InputMaybe<Scalars['String']>;
  /** The name of the event. */
  event: Scalars['String'];
  /**
   * Event ID used to deduplicate events that occur simultaneously in Amplitude analytics.
   * See https://developers.amplitude.com/docs/http-api-v2#optional-keys. Used on Sourcegraph Cloud only.
   */
  eventID?: InputMaybe<Scalars['Int']>;
  /** The first sourcegraph URL visited by the user, stored in a browser cookie. */
  firstSourceURL?: InputMaybe<Scalars['String']>;
  /** The connected site's license key, hashed using sha256. Used for uniquely identifying the site. */
  hashedLicenseKey?: InputMaybe<Scalars['String']>;
  /**
   * Insert ID used to deduplicate events that re-occur in the event of retries or
   * backfills in Amplitude analytics. See https://developers.amplitude.com/docs/http-api-v2#optional-keys.
   * Used on Sourcegraph Cloud only.
   */
  insertID?: InputMaybe<Scalars['String']>;
  /** The last sourcegraph URL visited by the user, stored in a browser cookie. */
  lastSourceURL?: InputMaybe<Scalars['String']>;
  /** The original referrer for a user */
  originalReferrer?: InputMaybe<Scalars['String']>;
  /**
   * Public argument information. PRIVACY: Do NOT include any potentially private information in this field.
   * These properties get sent to our analytics tools for Cloud, so must not include private information,
   * such as search queries or repository names.
   */
  publicArgument?: InputMaybe<Scalars['String']>;
  /**
   * An optional referrer parameter for the user's current session.
   * Only captured and stored on Sourcegraph Cloud.
   */
  referrer?: InputMaybe<Scalars['String']>;
  /** The sessions first url for a user */
  sessionFirstURL?: InputMaybe<Scalars['String']>;
  /** The session referrer for a user */
  sessionReferrer?: InputMaybe<Scalars['String']>;
  /** The source of the event. */
  source: EventSource;
  /** The URL when the event was logged. */
  url: Scalars['String'];
  /** The randomly generated unique user ID stored in a browser cookie. */
  userCookieID: Scalars['String'];
}

export { EventBillingID };

export { EventBillingProductCategory };

export { EventClient };

export { EventSource };

export { EventStatus };

export { ExecutorCompatibility };

export { ExecutorSecretScope };

export { ExternalServiceKind };

export { ExternalServiceSyncJobState };

/** Additional options when performing a permissions sync. */
export interface FetchPermissionsOptions {
  /**
   * Indicate that any caches added for optimization encountered during this permissions
   * sync should be invalidated.
   */
  invalidateCaches?: InputMaybe<Scalars['Boolean']>;
}

export { GitHubAppDomain };

export { GitHubAppKind };

export { GitObjectType };

export { GitRefType };

export { GroupByField };

/** Input for a happiness feedback submission. */
export interface HappinessFeedbackSubmissionInput {
  /** The path that the happiness feedback will be submitted from. */
  currentPath?: InputMaybe<Scalars['String']>;
  /** The feedback text from the user. */
  feedback?: InputMaybe<Scalars['String']>;
}

/** A specific highlighted line range to fetch. */
export interface HighlightLineRange {
  /**
   * The last line to fetch (0-indexed, inclusive). Values outside the bounds of the file will
   * automatically be clamped within the valid range.
   */
  endLine: Scalars['Int'];
  /**
   * The first line to fetch (0-indexed, inclusive). Values outside the bounds of the file will
   * automatically be clamped within the valid range.
   */
  startLine: Scalars['Int'];
}

export { HighlightResponseFormat };

/** EXPERIMENTAL: Representation of a context item used as API param (doesn't have to support full metadata available on the client). */
export interface InputContextItem {
  /** Content of the context item. */
  content: Scalars['String'];
  /** The end line of the relevant chunk (exclusive). */
  endLine?: InputMaybe<Scalars['Int']>;
  /** Optional: Name of the file associated with this context item. */
  fileName?: InputMaybe<Scalars['String']>;
  /** Retriever that produced this item */
  retriever: Scalars['String'];
  /** Optional: score assigned by the retriever. */
  score?: InputMaybe<Scalars['Float']>;
  /** The start line of the relevant chunk (inclusive). */
  startLine?: InputMaybe<Scalars['Int']>;
}

export { InsightQueueItemState };

/** Input object for permissions to grant. */
export interface InsightsPermissionGrantsInput {
  /** Set global to true to grant global permission. */
  global?: InputMaybe<Scalars['Boolean']>;
  /** Organizations to grant permissions to. */
  organizations?: InputMaybe<Array<Scalars['ID']>>;
  /** Specific users to grant permissions to. */
  users?: InputMaybe<Array<Scalars['ID']>>;
}

/** Input for the default values for filters and aggregates for an insight. */
export interface InsightViewControlsInput {
  /** Input for the default filters for an insight. */
  filters: InsightViewFiltersInput;
  /** Input for series' sort order. */
  seriesDisplayOptions: SeriesDisplayOptionsInput;
}

/** Input for the default values by which the insight is filtered. */
export interface InsightViewFiltersInput {
  /** A regex string for which to exclude repositories in a filter. */
  excludeRepoRegex?: InputMaybe<Scalars['String']>;
  /** A regex string for which to include repositories in a filter. */
  includeRepoRegex?: InputMaybe<Scalars['String']>;
  /** A list of query based search contexts to include in the filters for the view. */
  searchContexts?: InputMaybe<Array<Scalars['String']>>;
}

/**
 * A segment of a key path that locates a nested JSON value in a root JSON value. Exactly one field in each
 * KeyPathSegment must be non-null.
 * For example, in {"a": [0, {"b": 3}]}, the value 3 is located at the key path ["a", 1, "b"].
 */
export interface KeyPathSegment {
  /** The index of the array at this location to descend into. */
  index?: InputMaybe<Scalars['Int']>;
  /** The name of the property in the object at this location to descend into. */
  property?: InputMaybe<Scalars['String']>;
}

/** Options for a line chart data series */
export interface LineChartDataSeriesOptionsInput {
  /** The label for the data series. */
  label?: InputMaybe<Scalars['String']>;
  /** The line color for the data series. */
  lineColor?: InputMaybe<Scalars['String']>;
}

/** Options for a line chart */
export interface LineChartOptionsInput {
  /** The chart title. */
  title?: InputMaybe<Scalars['String']>;
}

/** Input for a line chart search insight data series. */
export interface LineChartSearchInsightDataSeriesInput {
  /** Whether or not to generate the timeseries results from the query capture groups. Defaults to false if not provided. */
  generatedFromCaptureGroups?: InputMaybe<Scalars['Boolean']>;
  /** The field to group results by. (For compute powered insights only.) This field is experimental and should be considered unstable in the API. */
  groupBy?: InputMaybe<GroupByField>;
  /** Options for this line chart data series. */
  options: LineChartDataSeriesOptionsInput;
  /** The query string. */
  query: Scalars['String'];
  /**
   * The scope of repositories. The repository scope can be provided at the LineChartSearchInsightInput level.
   * If scope is provided here will take priority of any other scope provide at a higher level in the input.
   */
  repositoryScope?: InputMaybe<RepositoryScopeInput>;
  /** Unique ID for the series. Omit this field if it's a new series. */
  seriesId?: InputMaybe<Scalars['String']>;
  /**
   * The scope of time. This time scope can also be provided at the LineChartSearchInsightInput level.
   * If the scope is provided here it will take priority over any other scope provided at a higher level in the input.
   */
  timeScope?: InputMaybe<TimeScopeInput>;
}

/** Input for a line chart search insight. */
export interface LineChartSearchInsightInput {
  /** The dashboard IDs to associate this insight with once created. */
  dashboards?: InputMaybe<Array<Scalars['ID']>>;
  /** The list of data series to create (or add) to this insight. */
  dataSeries: Array<LineChartSearchInsightDataSeriesInput>;
  /** The options for this line chart. */
  options: LineChartOptionsInput;
  /** The scope of repositories for the insight. If provided here it will apply to all series unless overwritten. */
  repositoryScope?: InputMaybe<RepositoryScopeInput>;
  /** The scope of time for the insight view. If provided here it will apply to all series unless overwritten. */
  timeScope?: InputMaybe<TimeScopeInput>;
  /** The default values for filters and aggregates for this line chart. */
  viewControls?: InputMaybe<InsightViewControlsInput>;
}

/** Describes options for rendering Markdown. */
export interface MarkdownOptions {
  /** A dummy null value (empty input types are not allowed yet). */
  alwaysNil?: InputMaybe<Scalars['String']>;
}

/** Message to or from the LLM */
export interface Message {
  /** Speaker of the message (human/assistant) */
  speaker: SpeakerType;
  /** Text content of the message */
  text: Scalars['String'];
}

/** The input required to create an action. */
export interface MonitorActionInput {
  /** An email action. */
  email?: InputMaybe<MonitorEmailInput>;
  /** A Slack webhook action. */
  slackWebhook?: InputMaybe<MonitorSlackWebhookInput>;
  /** A webhook action. */
  webhook?: InputMaybe<MonitorWebhookInput>;
}

/** The input required to edit an action. */
export interface MonitorEditActionInput {
  /** An email action. */
  email?: InputMaybe<MonitorEditEmailInput>;
  /** A Slack webhook action. */
  slackWebhook?: InputMaybe<MonitorEditSlackWebhookInput>;
  /** A webhook action. */
  webhook?: InputMaybe<MonitorEditWebhookInput>;
}

/** The input required to edit an email action. */
export interface MonitorEditEmailInput {
  /**
   * The id of an email action. If unset, this will
   * be treated as a new email action and be created
   * rather than updated.
   */
  id?: InputMaybe<Scalars['ID']>;
  /** The desired state after the update. */
  update: MonitorEmailInput;
}

/** The input required to edit a code monitor. */
export interface MonitorEditInput {
  /** The id of the monitor. */
  id: Scalars['ID'];
  /** The desired state after the udpate. */
  update: MonitorInput;
}

/** The input required to edit a Slack webhook action. */
export interface MonitorEditSlackWebhookInput {
  /**
   * The id of a Slack webhook action. If unset, this will
   * be treated as a new Slack webhook action and be created
   * rather than updated.
   */
  id?: InputMaybe<Scalars['ID']>;
  /** The desired state after the update. */
  update: MonitorSlackWebhookInput;
}

/** The input required to edit a trigger. */
export interface MonitorEditTriggerInput {
  /** The id of the Trigger. */
  id: Scalars['ID'];
  /** The desired state after the udpate. */
  update: MonitorTriggerInput;
}

/** The input required to edit a webhook action. */
export interface MonitorEditWebhookInput {
  /**
   * The id of a webhook action. If unset, this will
   * be treated as a new webhook action and be created
   * rather than updated.
   */
  id?: InputMaybe<Scalars['ID']>;
  /** The desired state after the update. */
  update: MonitorWebhookInput;
}

/** The input required to create an email action. */
export interface MonitorEmailInput {
  /** Whether the email action is enabled or not. */
  enabled: Scalars['Boolean'];
  /** Use header to automatically approve the message in a read-only or moderated mailing list. */
  header: Scalars['String'];
  /** Whether to include the result contents in the email message */
  includeResults: Scalars['Boolean'];
  /** The priority of the email. */
  priority: MonitorEmailPriority;
  /** A list of users or orgs which will receive the email. */
  recipients: Array<Scalars['ID']>;
}

export { MonitorEmailPriority };

/** The input required to create a code monitor. */
export interface MonitorInput {
  /** A meaningful description of the code monitor. */
  description: Scalars['String'];
  /** Whether the code monitor is enabled or not. */
  enabled: Scalars['Boolean'];
  /**
   * The namespace represents the owner of the code monitor.
   * Owners can either be users or organizations.
   */
  namespace: Scalars['ID'];
}

/** The input required to create a Slack webhook action. */
export interface MonitorSlackWebhookInput {
  /** Whether the Slack webhook action is enabled or not. */
  enabled: Scalars['Boolean'];
  /** Whether to include the result contents in Slack notification message. */
  includeResults: Scalars['Boolean'];
  /** The URL that will receive a payload when the action is triggered. */
  url: Scalars['String'];
}

/** The input required to create a trigger. */
export interface MonitorTriggerInput {
  /** The query string. */
  query: Scalars['String'];
}

/** The input required to create a webhook action. */
export interface MonitorWebhookInput {
  /** Whether the webhook action is enabled or not. */
  enabled: Scalars['Boolean'];
  /** Whether to include the result contents in webhook payload. */
  includeResults: Scalars['Boolean'];
  /** The URL that will receive a payload when the action is triggered. */
  url: Scalars['String'];
}

export { NotAvailableReasonType };

export { NotebookBlockType };

/** Input for a new notebook. */
export interface NotebookInput {
  /** Array of notebook blocks. */
  blocks: Array<CreateNotebookBlockInput>;
  /**
   * Notebook namespace (user or org). Controls the visibility of the notebook
   * and who can edit the notebook. Only the notebook creator can update the namespace.
   */
  namespace: Scalars['ID'];
  /**
   * Public property controls the visibility of the notebook. A public notebook is available to
   * any user on the instance. Private notebooks are only available to their creators.
   */
  public: Scalars['Boolean'];
  /** The title of the notebook. */
  title: Scalars['String'];
}

export { NotebooksOrderBy };

export { OrganizationInvitationResponseType };

/** Input for the createOutboundWebhook mutation. */
export interface OutboundWebhookCreateInput {
  /**
   * The event types the outbound webhook will receive.
   *
   * At least one event type must be provided.
   */
  eventTypes: Array<OutboundWebhookScopedEventTypeInput>;
  /** The secret shared with the outbound webhook. */
  secret: Scalars['String'];
  /** The outbound webhook URL. */
  url: Scalars['String'];
}

/** Event type input for the outbound webhook mutations. */
export interface OutboundWebhookScopedEventTypeInput {
  /**
   * The event type, which must match a key returned from
   * outboundWebhookEventTypes.
   */
  eventType: Scalars['String'];
  /**
   * An optional scope for the event type.
   *
   * Currently unused.
   */
  scope?: InputMaybe<Scalars['String']>;
}

/** Input for the updateOutboundWebhook mutation. */
export interface OutboundWebhookUpdateInput {
  /**
   * The event types the outbound webhook will receive. This list replaces the
   * event types previously registered on the webhook.
   *
   * At least one event type must be provided.
   */
  eventTypes: Array<OutboundWebhookScopedEventTypeInput>;
  /** The outbound webhook URL. */
  url: Scalars['String'];
}

export { OwnershipReasonType };

/** OwnSignalConfigurationUpdate represents an update to an OwnSignalConfiguration. */
export interface OwnSignalConfigurationUpdate {
  /** Whether or not the signal configuration should be enabled. */
  enabled: Scalars['Boolean'];
  /** A list of repository name patterns to exclude from the signal. */
  excludedRepoPatterns: Array<Scalars['String']>;
  /** The new name for the signal configuration. */
  name: Scalars['String'];
}

export { PackageMatchBehaviour };

/** A package repo reference filter that matches names. */
export interface PackageNameFilterInput {
  /** Glob string to match names. */
  packageGlob: Scalars['String'];
}

export { PackageRepoReferenceKind };

/** A package repo reference filter that matches versions for a specific name. */
export interface PackageVersionFilterInput {
  /** Exact package name to match. */
  packageName: Scalars['String'];
  /** Glob string to match versions. */
  versionGlob: Scalars['String'];
}

/** A name or version matching filter for. One of either nameFilter or versionFilter must be provided. */
export interface PackageVersionOrNameFilterInput {
  /** Optional name-matching filter. */
  nameFilter?: InputMaybe<PackageNameFilterInput>;
  /** Optional package-specific version-matching filter. */
  versionFilter?: InputMaybe<PackageVersionFilterInput>;
}

export { PermissionNamespace };

export { PermissionSource };

export { PermissionsSyncJobPriority };

export { PermissionsSyncJobReason };

export { PermissionsSyncJobReasonGroup };

export { PermissionsSyncJobsSearchType };

export { PermissionsSyncJobState };

/** Options for a pie chart */
export interface PieChartOptionsInput {
  /**
   * The threshold for which groups fall into the "other category". Only categories with a percentage greater than
   * this value will be separately rendered.
   */
  otherThreshold: Scalars['Float'];
  /** The title for the pie chart. */
  title: Scalars['String'];
}

/** Input for a pie chart search insight */
export interface PieChartSearchInsightInput {
  /** The dashboard IDs to associate this insight with once created. */
  dashboards?: InputMaybe<Array<Scalars['ID']>>;
  /** Options for this pie chart. */
  presentationOptions: PieChartOptionsInput;
  /** The query string. */
  query: Scalars['String'];
  /** The scope of repositories. */
  repositoryScope: RepositoryScopeInput;
}

/**
 * Analogous to Position but as an input type.
 *
 * EXPERIMENTAL: This type may make backwards-incompatible changes in the future.
 */
export interface PositionInput {
  /** Zero-based UTF-16 code unit offset from preceding newline (\n or \r\n) character. */
  character: Scalars['Int'];
  /** Zero-based count of newline (\n or \r\n) characters before this position. */
  line: Scalars['Int'];
}

export { PreciseIndexState };

/**
 * An input type that describes a product license to be generated and signed.
 * FOR INTERNAL USE ONLY.
 */
export interface ProductLicenseInput {
  /** The expiration date of this product license, expressed as the number of seconds since the epoch. */
  expiresAt: Scalars['Int'];
  /** The Salesforce opportunity ID associated with this product license. */
  salesforceOpportunityID?: InputMaybe<Scalars['String']>;
  /** The Salesforce subscription ID associated with this product license. */
  salesforceSubscriptionID?: InputMaybe<Scalars['String']>;
  /** The tags that indicate which features are activated by this license. */
  tags: Array<Scalars['String']>;
  /** The number of users for which this product subscription is valid. */
  userCount: Scalars['Int'];
}

/** The input that describes a prompt template to create. */
export interface PromptInput {
  /** The prompt template definition. */
  definitionText: Scalars['String'];
  /** The description of the prompt. */
  description: Scalars['String'];
  /** Whether the prompt is a draft. */
  draft: Scalars['Boolean'];
  /** The name of the prompt. */
  name: Scalars['String'];
  /** The owner of the prompt, either a user or organization. */
  owner: Scalars['ID'];
  /** The visibility state for the prompt. */
  visibility: PromptVisibility;
}

export { PromptsOrderBy };

/** The input that describes an edit to a prompt template. */
export interface PromptUpdateInput {
  /** The prompt template definition. */
  definitionText: Scalars['String'];
  /** The description of the prompt. */
  description: Scalars['String'];
  /** Whether the prompt is a draft. */
  draft: Scalars['Boolean'];
  /** The name of the prompt. */
  name: Scalars['String'];
}

export { PromptVisibility };

/**
 * A range inside a particular blob, describing a usage of a symbol,
 * which can be used to locate other usages of the same symbol.
 *
 * The range must be an *exact match*.
 *
 * In general, a single range may correspond to multiple symbols.
 * A caller can further drill down on a specific symbol using SymbolComparator.
 *
 * EXPERIMENTAL: This type may make backwards-incompatible changes in the future.
 */
export interface RangeInput {
  /** End position of the range (exclusive) */
  end: PositionInput;
  /** The path containing the initial usage for the symbol. */
  path: Scalars['String'];
  /** The repository containing the initial usage for a symbol. */
  repository: Scalars['String'];
  /**
   * The revision containing the initial usage for the symbol.
   *
   * Defaults to HEAD of the default branch if not specified.
   */
  revision?: InputMaybe<Scalars['String']>;
  /** Start position of the range (inclusive) */
  start: PositionInput;
}

/** Options for context ranking. */
export interface RankOptions {
  /** Ranker to use for context ranking. Empty value means "server decides". */
  ranker: Scalars['String'];
}

/** Input object for adding insight view to dashboard. */
export interface RemoveInsightViewFromDashboardInput {
  /** ID of the dashboard. */
  dashboardId: Scalars['ID'];
  /** ID of the insight view to remove from the dashboard */
  insightViewId: Scalars['ID'];
}

export { RepoEmbeddingJobState };

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface RepositoryFilter {
  /** Compare the repository by name. */
  name: StringComparator;
}

export { RepositoryOrderBy };

export { RepositoryPermission };

/** A custom repository scope for an insight data series. */
export interface RepositoryScopeInput {
  /** The list of repositories included in this scope. */
  repositories: Array<Scalars['String']>;
  /** A search query to select repositories for this scope. */
  repositoryCriteria?: InputMaybe<Scalars['String']>;
}

export { RepositoryType };

export { SavedSearchesOrderBy };

/** The input that describes a saved search. */
export interface SavedSearchInput {
  /** A description of the saved search. */
  description: Scalars['String'];
  /** Whether the saved search is a draft. */
  draft: Scalars['Boolean'];
  /** The owner of the saved search, either a user or organization. */
  owner: Scalars['ID'];
  /** The search query. */
  query: Scalars['String'];
  /** The visibility state for the saved search. */
  visibility: SavedSearchVisibility;
}

/** The input that describes a saved search. */
export interface SavedSearchUpdateInput {
  /** A description of the saved search. */
  description: Scalars['String'];
  /** Whether the saved search is a draft. */
  draft: Scalars['Boolean'];
  /** The search query. */
  query: Scalars['String'];
}

export { SavedSearchVisibility };

/** Input for saving a new view on an insight. */
export interface SaveInsightAsNewViewInput {
  /** The dashboard ID to associate this insight with once created. */
  dashboard?: InputMaybe<Scalars['ID']>;
  /** The insight view ID we are creating a new view from. */
  insightViewId: Scalars['ID'];
  /** The options for this line chart. */
  options: LineChartOptionsInput;
  /** The default values for filters and aggregates for this line chart. */
  viewControls?: InputMaybe<InsightViewControlsInput>;
}

export { SearchAggregationMode };

/** Input for editing an existing search context. */
export interface SearchContextEditInput {
  /** Search context description. */
  description: Scalars['String'];
  /**
   * Search context name. Not the same as the search context spec. Search context namespace and search context name
   * are used to construct the fully-qualified search context spec.
   * Example mappings from search context spec to search context name: global -> global, @user -> user, @org -> org,
   * @user/ctx1 -> ctx1, @org/ctxs/ctx -> ctxs/ctx.
   */
  name: Scalars['String'];
  /**
   * Public property controls the visibility of the search context. Public search context is available to
   * any user on the instance. If a public search context contains private repositories, those are filtered out
   * for unauthorized users. Private search contexts are only available to their owners. Private user search context
   * is available only to the user, private org search context is available only to the members of the org, and private
   * instance-level search contexts are available only to site-admins.
   */
  public: Scalars['Boolean'];
  /**
   * Sourcegraph search query that defines the search context.
   * e.g. "r:^github\.com/org (rev:bar or rev:HEAD) file:^sub/dir"
   */
  query: Scalars['String'];
}

/** Input for a new search context. */
export interface SearchContextInput {
  /** Search context description. */
  description: Scalars['String'];
  /**
   * Search context name. Not the same as the search context spec. Search context namespace and search context name
   * are used to construct the fully-qualified search context spec.
   * Example mappings from search context spec to search context name: global -> global, @user -> user, @org -> org,
   * @user/ctx1 -> ctx1, @org/ctxs/ctx -> ctxs/ctx.
   */
  name: Scalars['String'];
  /** Namespace of the search context (user or org). If not set, search context is considered instance-level. */
  namespace?: InputMaybe<Scalars['ID']>;
  /**
   * Public property controls the visibility of the search context. Public search context is available to
   * any user on the instance. If a public search context contains private repositories, those are filtered out
   * for unauthorized users. Private search contexts are only available to their owners. Private user search context
   * is available only to the user, private org search context is available only to the members of the org, and private
   * instance-level search contexts are available only to site-admins.
   */
  public: Scalars['Boolean'];
  /**
   * Sourcegraph search query that defines the search context.
   * e.g. "r:^github\.com/org (rev:bar or rev:HEAD) file:^sub/dir"
   */
  query: Scalars['String'];
}

/** Input for a set of revisions to be searched within a repository. */
export interface SearchContextRepositoryRevisionsInput {
  /** ID of the repository to be searched. */
  repositoryID: Scalars['ID'];
  /** Revisions in the repository to be searched. */
  revisions: Array<Scalars['String']>;
}

export { SearchContextsOrderBy };

/** Required input to generate a time series for a search insight using live preview. */
export interface SearchInsightLivePreviewInput {
  /** Whether or not to generate the timeseries results from the query capture groups. */
  generatedFromCaptureGroups: Scalars['Boolean'];
  /** Use this field to specify a compute insight. Note: this is experimental and should be considered unstable */
  groupBy?: InputMaybe<GroupByField>;
  /** The desired label for the series. Will be overwritten when series are dynamically generated. */
  label: Scalars['String'];
  /** The query string. */
  query: Scalars['String'];
  /** The scope of repositories. */
  repositoryScope: RepositoryScopeInput;
  /** The scope of time. */
  timeScope: TimeScopeInput;
}

/** Required input to generate a live preview for an insight. */
export interface SearchInsightPreviewInput {
  /** The scope of repositories. */
  repositoryScope: RepositoryScopeInput;
  /** The series to generate previews for */
  series: Array<SearchSeriesPreviewInput>;
  /** The scope of time. */
  timeScope: TimeScopeInput;
}

export { SearchJobsOrderBy };

export { SearchJobState };

export { SearchPatternType };

export { SearchQueryOutputFormat };

export { SearchQueryOutputPhase };

export { SearchQueryOutputVerbosity };

/** Required input to generate a live preview for a series. */
export interface SearchSeriesPreviewInput {
  /** Whether or not to generate the timeseries results from the query capture groups. */
  generatedFromCaptureGroups: Scalars['Boolean'];
  /** Use this field to specify a compute insight. Note: this is experimental and should be considered unstable */
  groupBy?: InputMaybe<GroupByField>;
  /** The desired label for the series. Will be overwritten when series are dynamically generated. */
  label: Scalars['String'];
  /** The query string. */
  query: Scalars['String'];
}

export { SearchVersion };

/** Input type for series display options. */
export interface SeriesDisplayOptionsInput {
  /** Max number of series to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Max number of samples to return. */
  numSamples?: InputMaybe<Scalars['Int']>;
  /** Sort options for the series. */
  sortOptions?: InputMaybe<SeriesSortOptionsInput>;
}

export { SeriesSortDirection };

export { SeriesSortMode };

/** Input type for series sort options. */
export interface SeriesSortOptionsInput {
  /** Sort direction for series. */
  direction: SeriesSortDirection;
  /** Sort mode for series. */
  mode: SeriesSortMode;
}

/** An edit to a JSON property in a settings JSON object. The JSON property to edit can be nested. */
export interface SettingsEdit {
  /**
   * The key path of the property to update.
   *
   * Inserting into an existing array is not yet supported.
   */
  keyPath: Array<KeyPathSegment>;
  /**
   * The new JSON-encoded value to insert. If the field's value is not set, the property is removed. (This is
   * different from the field's value being the JSON null value.)
   *
   * When the value is a non-primitive type, it must be specified using a GraphQL variable, not an inline literal,
   * or else the GraphQL parser will return an error.
   */
  value?: InputMaybe<Scalars['JSONValue']>;
  /**
   * Whether to treat the value as a JSONC-encoded string, which makes it possible to perform an edit that
   * preserves (or adds/removes) comments.
   */
  valueIsJSONCEncodedString?: InputMaybe<Scalars['Boolean']>;
}

/**
 * Input for Mutation.settingsMutation, which contains fields that all settings (global, organization, and user
 * settings) mutations need.
 */
export interface SettingsMutationGroupInput {
  /**
   * The ID of the last-known settings known to the client, or null if there is none. This field is used to
   * prevent race conditions when there are concurrent editors.
   */
  lastID?: InputMaybe<Scalars['Int']>;
  /** The subject whose settings to mutate (organization, user, etc.). */
  subject: Scalars['ID'];
}

export { SiteUserOrderBy };

/** SiteUsersDateRangeInput argument to filter based on date range or date equals to null */
export interface SiteUsersDateRangeInput {
  /** Equal to Null */
  empty?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Less than or equal to */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Negation */
  not?: InputMaybe<Scalars['Boolean']>;
}

/** SiteUsersNumberRangeInput argument to filter based on the number range */
export interface SiteUsersNumberRangeInput {
  /** Less than or equal to */
  gte?: InputMaybe<Scalars['Float']>;
  /** Greater than or equal to */
  lte?: InputMaybe<Scalars['Float']>;
}

export { SpeakerType };

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface StringComparator {
  /** Checks for exact equality. */
  equals?: InputMaybe<Scalars['String']>;
}

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface SurroundingLines {
  /** The number of lines after the current line to include. */
  linesAfter?: InputMaybe<Scalars['Int']>;
  /** The number of lines before the current line to include. */
  linesBefore?: InputMaybe<Scalars['Int']>;
}

/** Input for a user satisfaction (NPS) survey submission. */
export interface SurveySubmissionInput {
  /** The answer to "What would make Sourcegraph better?" */
  better?: InputMaybe<Scalars['String']>;
  /**
   * User-provided email address, if there is no currently authenticated user. If there is, this value
   * will not be used.
   */
  email?: InputMaybe<Scalars['String']>;
  /** The answer to "What do you use Sourcegraph for?". */
  otherUseCase?: InputMaybe<Scalars['String']>;
  /** User's likelihood of recommending Sourcegraph to a friend, from 0-10. */
  score: Scalars['Int'];
}

export { SurveyUseCase };

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface SymbolComparator {
  /** Describes how the symbol name should be compared. */
  name: SymbolNameComparator;
  /**
   * Describes the provenance of the symbol. This value should be based
   * on the provenance value obtained from the CodeGraphData type.
   */
  provenance: CodeGraphDataProvenanceComparator;
}

export { SymbolKind };

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface SymbolNameComparator {
  /** Checks for exact equality. */
  equals?: InputMaybe<Scalars['String']>;
}

export { SymbolRole };

export { SymbolUsageKind };

/**
 * Options to specify a user for team membership. Multiple options can be provided,
 * with the following precedence order: (Other mismatches will be discarded)
 * - UserID
 * - Username
 * - Email
 * - External Account fields
 *
 * Examples:
 * - If ID is set and no match, return.
 * - If ID and username is set, and ID matches but username doesn't, match.
 */
export interface TeamMemberInput {
  /** If the email is associated to a user and verified, the user account will be matched. */
  email?: InputMaybe<Scalars['String']>;
  /**
   * If the user has an associated external account, use this.
   * externalAccountServiceID and externalAccountServiceType must be set and
   * either of externalAccountAccountID externalAccountLogin are required as well.
   * Account ID is the unique identifier on the external account platform.
   */
  externalAccountAccountID?: InputMaybe<Scalars['String']>;
  /**
   * If the user has an associated external account, use this.
   * externalAccountServiceID and externalAccountServiceType must be set and
   * either of externalAccountAccountID externalAccountLogin are required as well.
   * Account Login is usually the username on the external account platform.
   */
  externalAccountLogin?: InputMaybe<Scalars['String']>;
  /**
   * If the user has an associated external account, use this.
   * externalAccountServiceID and externalAccountServiceType must be set and
   * either of externalAccountAccountID externalAccountLogin are required as well.
   * Service ID for the GitHub OAuth provider, for example, is https://github.com/.
   */
  externalAccountServiceID?: InputMaybe<Scalars['String']>;
  /**
   * If the user has an associated external account, use this.
   * externalAccountServiceID and externalAccountServiceType must be set and
   * either of externalAccountAccountID externalAccountLogin are required as well.
   * Service Type for the GitHub OAuth provider, for example, is github.
   */
  externalAccountServiceType?: InputMaybe<Scalars['String']>;
  /** Explicitly define a user by ID. */
  userID?: InputMaybe<Scalars['ID']>;
  /** Explicitly define a user by username in Sourcegraph. */
  username?: InputMaybe<Scalars['String']>;
}

/** Billing-related metadata for a telemetry event. */
export interface TelemetryEventBillingMetadataInput {
  /**
   * Billing category ID the event falls into.
   *
   * IDs must come from a static set of values in libraries - it is left as a
   * string in the API to allow some flexibility.
   */
  category: Scalars['String'];
  /**
   * Billing product ID associated with the event.
   *
   * IDs must come from a static set of values in libraries - it is left as a
   * string in the API to allow some flexibility.
   */
  product: Scalars['String'];
}

/** Properties comprising a telemetry V2 event that can be reported by a client. */
export interface TelemetryEventInput {
  /**
   * Action associated with the event in camelCase, e.g. 'pageView'.
   *
   * Action names must come from a static set of values in libraries - it is
   * left as a string in the API to allow some flexibility.
   */
  action: Scalars['String'];
  /**
   * Feature associated with the event in camelCase, e.g. 'myFeature'.
   *
   * Feature names must come from a static set of values in libraries - it is
   * left as a string in the API to allow some flexibility.
   */
  feature: Scalars['String'];
  /**
   * Optional marketing campaign tracking parameters.
   *
   * 🚨 SECURITY: This metadata is NEVER exported from private Sourcegraph instances,
   * and is only exported for events tracked in the public Sourcegraph.com instance.
   */
  marketingTracking?: InputMaybe<TelemetryEventMarketingTrackingInput>;
  /** Parameters of the event. */
  parameters: TelemetryEventParametersInput;
  /** Information about where this event came from. */
  source: TelemetryEventSourceInput;
  /**
   * Timestamp at which the time was recorded. If not provided, a timestamp is
   * generated when the server receives the event, but this does not guarantee
   * consistent ordering or accuracy.
   *
   * This parameter is only available in Sourcegraph 5.2.5 and later.
   */
  timestamp?: InputMaybe<Scalars['DateTime']>;
}

/**
 * Marketing campaign tracking parameters for a telemetry V2 event.
 *
 * 🚨 SECURITY: This metadata is NEVER exported from private Sourcegraph instances,
 * and is only exported for events tracked in the public Sourcegraph.com instance.
 */
export interface TelemetryEventMarketingTrackingInput {
  /** Cohort ID to identify the user as part of a specific A/B test. */
  cohortID?: InputMaybe<Scalars['String']>;
  /** Device session ID to identify the user's session. */
  deviceSessionID?: InputMaybe<Scalars['String']>;
  /** Initial URL the user landed on. */
  firstSourceURL?: InputMaybe<Scalars['String']>;
  /** Last source URL visited by the user. */
  lastSourceURL?: InputMaybe<Scalars['String']>;
  /** Referrer URL that refers the user to Sourcegraph. */
  referrer?: InputMaybe<Scalars['String']>;
  /** First URL the user visited in their current session. */
  sessionFirstURL?: InputMaybe<Scalars['String']>;
  /** Session referrer URL for the user. */
  sessionReferrer?: InputMaybe<Scalars['String']>;
  /** URL the event occurred on. */
  url?: InputMaybe<Scalars['String']>;
}

/** A single, PII-free metadata item for telemetry V2 events. */
export interface TelemetryEventMetadataInput {
  /** The key identifying this metadata entry. */
  key: Scalars['String'];
  /**
   * Numeric value associated with the key. Enforcing numeric values eliminates
   * risks of accidentally shipping sensitive or private data.
   *
   * The value type in the schema is JSONValue for flexibility, but we ONLY
   * accept numeric values (integers and floats) - any other value will be
   * rejected.
   */
  value: Scalars['JSONValue'];
}

/** Properties of a telemetry V2 event. */
export interface TelemetryEventParametersInput {
  /** Billing-related metadata. */
  billingMetadata?: InputMaybe<TelemetryEventBillingMetadataInput>;
  /**
   * Optional interaction ID that can be provided to indicate the interaction
   * this event belongs to. It overrides the X-Sourcegraph-Interaction-ID header
   * if one is set on the request recording the event.
   *
   * This parameter is only available in Sourcegraph 5.2.4 and later.
   */
  interactionID?: InputMaybe<Scalars['String']>;
  /** Strictly typed metadata that must not contain any sensitive data or PII. */
  metadata?: InputMaybe<Array<TelemetryEventMetadataInput>>;
  /**
   * Private metadata in JSON format. Unlike metadata, values can be of any type,
   * not just numeric.
   *
   * 🚨 SECURITY: This metadata is NOT exported from instances by default, as it
   * can contain arbitrarily-shaped data that may accidentally contain sensitive
   * or private contents.
   */
  privateMetadata?: InputMaybe<Scalars['JSONValue']>;
  /**
   * Version of the event parameters, used for indicating the "shape" of this
   * event's metadata.
   */
  version: Scalars['Int'];
}

/** Properties comprising the source of a telemetry V2 event reported by a client. */
export interface TelemetryEventSourceInput {
  /** Source client of the event. */
  client: Scalars['String'];
  /** Version of the source client of the event. */
  clientVersion?: InputMaybe<Scalars['String']>;
}

/** A time scope defined using a time interval (ex. 5 days) */
export interface TimeIntervalStepInput {
  /** The time unit for the interval. */
  unit: TimeIntervalStepUnit;
  /** The value for the interval. */
  value: Scalars['Int'];
}

export { TimeIntervalStepUnit };

/** A custom time scope for an insight data series. */
export interface TimeScopeInput {
  /** Sets a time scope using a step interval (intervals of time). */
  stepInterval?: InputMaybe<TimeIntervalStepInput>;
}

/** Partial update to apply to a subscription's Cody Gateway access. Omitted fields are not applied. */
export interface UpdateCodyGatewayAccessInput {
  /**
   * Override the set of allowed models for chat completions
   * for this subscription.
   */
  chatCompletionsAllowedModels?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Override default requests per time interval.
   *
   * Set to 0 to remove the override.
   */
  chatCompletionsRateLimit?: InputMaybe<Scalars['BigInt']>;
  /**
   * Override default interval for rate limiting.
   *
   * Set to 0 to remove the override.
   */
  chatCompletionsRateLimitIntervalSeconds?: InputMaybe<Scalars['Int']>;
  /**
   * Override the set of allowed models for chat completions
   * for this subscription.
   */
  codeCompletionsAllowedModels?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Override default requests per time interval.
   *
   * Set to 0 to remove the override.
   */
  codeCompletionsRateLimit?: InputMaybe<Scalars['BigInt']>;
  /**
   * Override default interval for rate limiting.
   *
   * Set to 0 to remove the override.
   */
  codeCompletionsRateLimitIntervalSeconds?: InputMaybe<Scalars['Int']>;
  /** Override the set of allowed models for embeddings generation for this subscription. */
  embeddingsAllowedModels?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Override default requests per time interval for embeddings generation.
   *
   * Set to 0 to remove the override.
   */
  embeddingsRateLimit?: InputMaybe<Scalars['BigInt']>;
  /**
   * Override default interval for rate limiting for embeddings generation.
   *
   * Set to 0 to remove the override.
   */
  embeddingsRateLimitIntervalSeconds?: InputMaybe<Scalars['Int']>;
  /** Enable or disable Cody Gateway access. */
  enabled?: InputMaybe<Scalars['Boolean']>;
}

/** Fields to update for an existing external service. */
export interface UpdateExternalServiceInput {
  /** The updated config, if provided. */
  config?: InputMaybe<Scalars['String']>;
  /** The updated display name, if provided. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The id of the external service to update. */
  id: Scalars['ID'];
}

/** Input object for updating a dashboard. */
export interface UpdateInsightsDashboardInput {
  /** Permissions to grant to the dashboard. */
  grants?: InputMaybe<InsightsPermissionGrantsInput>;
  /** Dashboard title. */
  title?: InputMaybe<Scalars['String']>;
}

/** Input object for update insight series mutation. */
export interface UpdateInsightSeriesInput {
  /** The desired activity state (enabled or disabled) for the series. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Unique ID for the series. */
  seriesId: Scalars['String'];
}

/** Input for updating a line chart search insight. */
export interface UpdateLineChartSearchInsightInput {
  /** The complete list of data series on this line chart. Note: excluding a data series will remove it. */
  dataSeries: Array<LineChartSearchInsightDataSeriesInput>;
  /** The presentation options for this line chart. */
  presentationOptions: LineChartOptionsInput;
  /** The scope of repositories for the insight, this scope will apply to all dataSeries unless another scope is provided by a series. */
  repositoryScope?: InputMaybe<RepositoryScopeInput>;
  /** The time scope for this insight, this scope will apply to all dataSeries unless another scope is provided by a series. */
  timeScope?: InputMaybe<TimeScopeInput>;
  /** The default values for filters and aggregates for this line chart. */
  viewControls: InsightViewControlsInput;
}

/** Input for updating a pie chart search insight */
export interface UpdatePieChartSearchInsightInput {
  /** Options for this pie chart. */
  presentationOptions: PieChartOptionsInput;
  /** The query string. */
  query: Scalars['String'];
  /** The scope of repositories. */
  repositoryScope: RepositoryScopeInput;
}

/** Partial update to apply to a subscription. Omitted fields are not applied. */
export interface UpdateProductSubscriptionInput {
  /** Partial update to Cody Gateway access granted to this subscription. */
  codyGatewayAccess?: InputMaybe<UpdateCodyGatewayAccessInput>;
}

/** UpdateSignalConfigurationsInput represents the input for updating multiple signal configurations. */
export interface UpdateSignalConfigurationsInput {
  /** The signal configuration updates. */
  configs: Array<OwnSignalConfigurationUpdate>;
}

/**
 * An empty filter allows all kinds of usages for all paths in all repositories.
 *
 * However, if the symbol used for lookup is a file-local symbol or a
 * repository-local symbol, then usages will automatically be limited to the
 * same file or same repository respectively.
 *
 * EXPERIMENTAL: This type may make backwards-incompatible changes in the future.
 */
export interface UsagesFilter {
  /**
   * Negate another UsageFilter. For example, this can be used to find matches
   * outside of a specific repository.
   */
  not?: InputMaybe<UsagesFilter>;
  /**
   * Filter for limiting which repositories to find the usages in.
   * For cross-repository symbols as well as search-based results,
   * an empty value will find results across the Sourcegraph instance.
   */
  repository?: InputMaybe<RepositoryFilter>;
}

export { UserActivePeriod };

export { UserEvent };

/** Input type of a user (identified either by username or email address) with its repository permission. */
export interface UserPermissionInput {
  /**
   * Depending on the bindID option in the permissions.userMapping site configuration property,
   * the elements of the list are either all usernames (bindID of "username") or all email
   * addresses (bindID of "email").
   */
  bindID: Scalars['String'];
  /** The highest level of repository permission. */
  permission?: InputMaybe<RepositoryPermission>;
}

/** A user (identified either by username or email address) with its sub-repository permissions. */
export interface UserSubRepoPermission {
  /**
   * Depending on the bindID option in the permissions.userMapping site configuration property,
   * the elements of the list are either all usernames (bindID of "username") or all email
   * addresses (bindID of "email").
   */
  bindID: Scalars['String'];
  /**
   * DEPRECATED
   * An array of paths that the user is not allowed to access, in glob format.
   */
  pathExcludes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * DEPRECATED
   * An array of paths that the user is allowed to access, in glob format.
   */
  pathIncludes?: InputMaybe<Array<Scalars['String']>>;
  /**
   * An array of paths in glob format. Paths starting with a minus (-)
   * (i.e. "-/dev/private") prevent access, otherwise paths grant access.
   * The last applicable path takes precedence.
   * When paths is set, pathIncludes and pathExcludes are ignored.
   */
  paths?: InputMaybe<Array<Scalars['String']>>;
}

export { WorkspacesSortOrder };

export type FileDiffHunkRangeFields = { __typename?: 'FileDiffHunkRange', startLine: number, lines: number };

export type DiffStatFields = { __typename: 'DiffStat', added: number, deleted: number };

export type FileDiffHunkFields = { __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } };

export type FileDiffFields = { __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } };

export type RepoChangesetsStatsVariables = Exact<{
  name: Scalars['String'];
}>;


export type RepoChangesetsStatsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, changesetsStats: { __typename?: 'RepoChangesetsStats', open: number, merged: number } } | null };

export type LocationFields = { __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null };

export type LocationConnectionFields = { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } };

export type GitBlobFields = { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } };

export type RangeFields = { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } };

export type PreciseCodeIntelForLocationFields = { __typename?: 'GitBlobLSIFData', references: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, implementations: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, prototypes: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, definitions: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } };

export type UsePreciseCodeIntelForPositionVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  afterReferences: InputMaybe<Scalars['String']>;
  firstReferences: InputMaybe<Scalars['Int']>;
  afterImplementations: InputMaybe<Scalars['String']>;
  firstImplementations: InputMaybe<Scalars['Int']>;
  afterPrototypes: InputMaybe<Scalars['String']>;
  firstPrototypes: InputMaybe<Scalars['Int']>;
  filter: InputMaybe<Scalars['String']>;
}>;


export type UsePreciseCodeIntelForPositionResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', references: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, implementations: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, prototypes: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } }, definitions: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type LoadAdditionalReferencesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  afterReferences: InputMaybe<Scalars['String']>;
  firstReferences: InputMaybe<Scalars['Int']>;
  filter: InputMaybe<Scalars['String']>;
}>;


export type LoadAdditionalReferencesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', references: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type LoadAdditionalImplementationsVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  afterImplementations: InputMaybe<Scalars['String']>;
  firstImplementations: InputMaybe<Scalars['Int']>;
  filter: InputMaybe<Scalars['String']>;
}>;


export type LoadAdditionalImplementationsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', implementations: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type LoadAdditionalPrototypesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  afterPrototypes: InputMaybe<Scalars['String']>;
  firstPrototypes: InputMaybe<Scalars['Int']>;
  filter: InputMaybe<Scalars['String']>;
}>;


export type LoadAdditionalPrototypesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', prototypes: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string, content: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type HighlightedGitBlobFields = { __typename?: 'GitBlob', highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } };

export type ReferencesPanelHighlightedBlobVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  format: HighlightResponseFormat;
}>;


export type ReferencesPanelHighlightedBlobResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', content: string, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | null } | null } | null };

export type CodeIntelSearch2Variables = Exact<{
  query: Scalars['String'];
  version: SearchVersion;
}>;


export type CodeIntelSearch2Result = { __typename?: 'Query', search: { __typename: 'Search', results: { __typename: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', url: string, path: string, content: string, commit: { __typename?: 'GitCommit', oid: string } }, repository: { __typename?: 'Repository', id: string, name: string }, symbols: Array<{ __typename?: 'Symbol', name: string, kind: SymbolKind, fileLocal: boolean, location: { __typename?: 'Location', url: string, resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }>, lineMatches: Array<{ __typename?: 'LineMatch', lineNumber: number, offsetAndLengths: Array<Array<number>> }> } | { __typename?: 'Repository' }> } } | null };

export type LocalCodeIntelVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
}>;


export type LocalCodeIntelResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, localCodeIntel: unknown | null } | null } | null } | null };

export type RepoRevisionBlobFields = { __typename?: 'Repository', id: string, name: string, url: string, isFork: boolean, isArchived: boolean, commit: { __typename?: 'GitCommit', oid: string, file: { __typename?: 'BatchSpecWorkspaceFile', content: string } | { __typename?: 'GitBlob', content: string } | { __typename?: 'VirtualFile', content: string } | null } | null, defaultBranch: { __typename?: 'GitRef', abbrevName: string } | null };

export type ResolveRepoAndRevisionVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  filePath: Scalars['String'];
}>;


export type ResolveRepoAndRevisionResult = { __typename?: 'Query', repositoryRedirect: { __typename: 'Redirect', url: string } | { __typename: 'Repository', id: string, name: string, url: string, isFork: boolean, isArchived: boolean, commit: { __typename?: 'GitCommit', oid: string, file: { __typename?: 'BatchSpecWorkspaceFile', content: string } | { __typename?: 'GitBlob', content: string } | { __typename?: 'VirtualFile', content: string } | null } | null, defaultBranch: { __typename?: 'GitRef', abbrevName: string } | null } | null };

export type UserCodyPlanVariables = Exact<{ [key: string]: never; }>;


export type UserCodyPlanResult = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, codySubscription: { __typename?: 'CodySubscription', status: CodySubscriptionStatus, plan: CodySubscriptionPlan, applyProRateLimits: boolean, currentPeriodStartAt: string, currentPeriodEndAt: string, cancelAtPeriodEnd: boolean } | null } | null };

export type UserCodyUsageVariables = Exact<{ [key: string]: never; }>;


export type UserCodyUsageResult = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, codyCurrentPeriodChatUsage: number, codyCurrentPeriodCodeUsage: number, codyCurrentPeriodChatLimit: number, codySubscription: { __typename?: 'CodySubscription', status: CodySubscriptionStatus, plan: CodySubscriptionPlan, applyProRateLimits: boolean, currentPeriodStartAt: string, currentPeriodEndAt: string, cancelAtPeriodEnd: boolean } | null } | null };

export type CodyIgnoreContentVariables = Exact<{
  repoName: Scalars['String'];
  repoRev: Scalars['String'];
  filePath: Scalars['String'];
}>;


export type CodyIgnoreContentResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', content: string } | null } | null } | null };

export type ContextFiltersVariables = Exact<{ [key: string]: never; }>;


export type ContextFiltersResult = { __typename?: 'Query', site: { __typename?: 'Site', codyContextFilters: { __typename?: 'CodyContextFilters', raw: unknown | null } } };

export type TestShowMorePaginationQueryVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
}>;


export type TestShowMorePaginationQueryResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', totalCount: number, nodes: Array<{ __typename?: 'Repository', id: string, name: string }>, pageInfo: { __typename?: 'ConnectionPageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type TestShowMorePaginationQueryFields = { __typename?: 'Repository', name: string, id: string };

export type RateLimiterStateFields = { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean };

export type ExternalServiceFields = { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null };

export type AddExternalServiceVariables = Exact<{
  input: AddExternalServiceInput;
}>;


export type AddExternalServiceResult = { __typename?: 'Mutation', addExternalService: { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null } };

export type UpdateExternalServiceVariables = Exact<{
  input: UpdateExternalServiceInput;
}>;


export type UpdateExternalServiceResult = { __typename?: 'Mutation', updateExternalService: { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null } };

export type DeleteExternalServiceVariables = Exact<{
  externalService: Scalars['ID'];
}>;


export type DeleteExternalServiceResult = { __typename?: 'Mutation', deleteExternalService: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type ExternalServiceCheckConnectionByIdVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ExternalServiceCheckConnectionByIdResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService', id: string, hasConnectionCheck: boolean, checkConnection: { __typename: 'ExternalServiceAvailabilityUnknown' } | { __typename: 'ExternalServiceAvailable' } | { __typename: 'ExternalServiceUnavailable', suspectedReason: string } } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ExternalServiceSyncJobListFields = { __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number };

export type ExternalServiceSyncJobConnectionFields = { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> };

export type ExternalServiceSyncJobsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  externalService: Scalars['ID'];
}>;


export type ExternalServiceSyncJobsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService', syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ListExternalServiceFields = { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null, syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } };

export type ExternalServiceVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ExternalServiceResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null, syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ExternalServicesVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  repo: InputMaybe<Scalars['ID']>;
}>;


export type ExternalServicesResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null, syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type ExternalServiceIDsAndNamesVariables = Exact<{ [key: string]: never; }>;


export type ExternalServiceIDsAndNamesResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, displayName: string }> } };

export type SyncExternalServiceVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SyncExternalServiceResult = { __typename?: 'Mutation', syncExternalService: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CancelExternalServiceSyncVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CancelExternalServiceSyncResult = { __typename?: 'Mutation', cancelExternalServiceSync: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type FileNamesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
}>;


export type FileNamesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, fileNames: Array<string> } | null } | null };

export type FuzzyFinderFilesVariables = Exact<{
  query: Scalars['String'];
}>;


export type FuzzyFinderFilesResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', symbols: Array<{ __typename?: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string }>, repository: { __typename?: 'Repository', name: string }, file: { __typename?: 'GitBlob', path: string } } | { __typename?: 'Repository' }> } } | null };

export type FileMatchFields = { __typename?: 'FileMatch', symbols: Array<{ __typename?: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string }>, repository: { __typename?: 'Repository', name: string }, file: { __typename?: 'GitBlob', path: string } };

export type FuzzyFinderRepoVariables = Exact<{
  query: Scalars['String'];
}>;


export type FuzzyFinderRepoResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', repositories: Array<{ __typename?: 'Repository', name: string, stars: number }> } } | null };

export type FuzzyFinderSymbolsVariables = Exact<{
  query: Scalars['String'];
}>;


export type FuzzyFinderSymbolsResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', symbols: Array<{ __typename?: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string }>, repository: { __typename?: 'Repository', name: string }, file: { __typename?: 'GitBlob', path: string } } | { __typename?: 'Repository' }> } } | null };

export type GitHubAppsVariables = Exact<{
  domain: InputMaybe<GitHubAppDomain>;
}>;


export type GitHubAppsResult = { __typename?: 'Query', gitHubApps: { __typename?: 'GitHubAppConnection', nodes: Array<{ __typename?: 'GitHubApp', id: string, appID: number, name: string, slug: string, appURL: string, clientID: string, logo: string, createdAt: string, updatedAt: string }> } };

export type GitHubAppsWithInstallsVariables = Exact<{ [key: string]: never; }>;


export type GitHubAppsWithInstallsResult = { __typename?: 'Query', gitHubApps: { __typename?: 'GitHubAppConnection', nodes: Array<{ __typename?: 'GitHubApp', id: string, appID: number, name: string, baseURL: string, logo: string, installations: Array<{ __typename?: 'Installation', id: number, account: { __typename?: 'GitHubAccount', login: string, avatarURL: string, url: string, type: string } }> }> } };

export type GitHubAppByIDFields = { __typename?: 'GitHubApp', id: string, appID: number, domain: string, baseURL: string, name: string, slug: string, appURL: string, clientID: string, logo: string, createdAt: string, updatedAt: string, installations: Array<{ __typename?: 'Installation', id: number, url: string, account: { __typename?: 'GitHubAccount', login: string, avatarURL: string, url: string, type: string }, externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null, syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } }> } }>, webhook: { __typename?: 'Webhook', id: string } | null };

export type GitHubAppByIDVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GitHubAppByIDResult = { __typename?: 'Query', gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, domain: string, baseURL: string, name: string, slug: string, appURL: string, clientID: string, logo: string, createdAt: string, updatedAt: string, installations: Array<{ __typename?: 'Installation', id: number, url: string, account: { __typename?: 'GitHubAccount', login: string, avatarURL: string, url: string, type: string }, externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, warning: string | null, lastSyncError: string | null, repoCount: number, lastSyncAt: string | null, nextSyncAt: string | null, updatedAt: string, createdAt: string, hasConnectionCheck: boolean, unrestricted: boolean, rateLimiterState: { __typename: 'RateLimiterState', currentCapacity: number, burst: number, limit: number, interval: number, lastReplenishment: string, infinite: boolean } | null, creator: { __typename?: 'User', username: string, url: string } | null, lastUpdater: { __typename?: 'User', username: string, url: string } | null, syncJobs: { __typename?: 'ExternalServiceSyncJobConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalServiceSyncJob', id: string, state: ExternalServiceSyncJobState, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, reposSynced: number, repoSyncErrors: number, reposAdded: number, reposDeleted: number, reposModified: number, reposUnmodified: number }> } }> } }>, webhook: { __typename?: 'Webhook', id: string } | null } | null };

export type GitHubAppByAppIDVariables = Exact<{
  appID: Scalars['Int'];
  baseURL: Scalars['String'];
}>;


export type GitHubAppByAppIDResult = { __typename?: 'Query', gitHubAppByAppID: { __typename?: 'GitHubApp', id: string, name: string } | null };

export type GitHubAppClientSecretVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GitHubAppClientSecretResult = { __typename?: 'Query', gitHubApp: { __typename?: 'GitHubApp', id: string, clientSecret: string } | null };

export type SiteConfigForAppsVariables = Exact<{ [key: string]: never; }>;


export type SiteConfigForAppsResult = { __typename?: 'Query', site: { __typename: 'Site', id: string, configuration: { __typename?: 'SiteConfiguration', effectiveContents: string } } };

export type DeleteGitHubAppVariables = Exact<{
  gitHubApp: Scalars['ID'];
}>;


export type DeleteGitHubAppResult = { __typename?: 'Mutation', deleteGitHubApp: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type AssignOwnerVariables = Exact<{
  input: AssignOwnerOrTeamInput;
}>;


export type AssignOwnerResult = { __typename?: 'Mutation', assignOwner: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type AssignTeamVariables = Exact<{
  input: AssignOwnerOrTeamInput;
}>;


export type AssignTeamResult = { __typename?: 'Mutation', assignTeam: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DeveloperSettingsEvaluatedFeatureFlagsVariables = Exact<{ [key: string]: never; }>;


export type DeveloperSettingsEvaluatedFeatureFlagsResult = { __typename?: 'Query', evaluatedFeatureFlags: Array<{ __typename?: 'EvaluatedFeatureFlag', name: string, value: boolean }> };

export type ViewerBatchChangesCodeHostsFields = { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceURL: string, externalServiceKind: ExternalServiceKind }> };

export type BatchSpecsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  includeLocallyExecutedSpecs: InputMaybe<Scalars['Boolean']>;
  excludeEmptySpecs: InputMaybe<Scalars['Boolean']>;
}>;


export type BatchSpecsResult = { __typename?: 'Query', batchSpecs: { __typename?: 'BatchSpecConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, startedAt: string | null, finishedAt: string | null, createdAt: string, source: BatchSpecSource, originalInput: string, description: { __typename: 'BatchChangeDescription', name: string }, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, creator: { __typename?: 'User', username: string } | null, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null }> } };

export type BatchChangeBatchSpecsVariables = Exact<{
  id: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  includeLocallyExecutedSpecs: InputMaybe<Scalars['Boolean']>;
  excludeEmptySpecs: InputMaybe<Scalars['Boolean']>;
}>;


export type BatchChangeBatchSpecsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange', batchSpecs: { __typename?: 'BatchSpecConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, startedAt: string | null, finishedAt: string | null, createdAt: string, source: BatchSpecSource, originalInput: string, description: { __typename: 'BatchChangeDescription', name: string }, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, creator: { __typename?: 'User', username: string } | null, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null }> } } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type PartialBatchSpecWorkspaceFileFields = { __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string };

export type BatchSpecWorkspaceFileFields = { __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, html: string } };

export type BatchSpecListFields = { __typename: 'BatchSpec', id: string, state: BatchSpecState, startedAt: string | null, finishedAt: string | null, createdAt: string, source: BatchSpecSource, originalInput: string, description: { __typename: 'BatchChangeDescription', name: string }, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, creator: { __typename?: 'User', username: string } | null, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null };

export type BatchSpecListConnectionFields = { __typename?: 'BatchSpecConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, startedAt: string | null, finishedAt: string | null, createdAt: string, source: BatchSpecSource, originalInput: string, description: { __typename: 'BatchChangeDescription', name: string }, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, creator: { __typename?: 'User', username: string } | null, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null }> };

export type BatchSpecWorkspaceFileVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BatchSpecWorkspaceFileResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, html: string } } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type BatchChangesSiteConfigurationVariables = Exact<{ [key: string]: never; }>;


export type BatchChangesSiteConfigurationResult = { __typename?: 'Query', site: { __typename?: 'Site', configuration: { __typename?: 'SiteConfiguration', effectiveContents: string } } };

export type BatchSpecExecutionAvailableSecretKeysVariables = Exact<{
  namespace: Scalars['ID'];
}>;


export type BatchSpecExecutionAvailableSecretKeysResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org', executorSecrets: { __typename?: 'ExecutorSecretConnection', nodes: Array<{ __typename?: 'ExecutorSecret', key: string }> } } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', executorSecrets: { __typename?: 'ExecutorSecretConnection', nodes: Array<{ __typename?: 'ExecutorSecret', key: string }> } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspaceStepOutputLines = { __typename: 'BatchSpecWorkspaceStepOutputLineConnection', nodes: Array<string>, totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

type BatchSpecWorkspaceFields_HiddenBatchSpecWorkspace_ = { __typename: 'HiddenBatchSpecWorkspace', id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

type BatchSpecWorkspaceFields_VisibleBatchSpecWorkspace_ = { __typename: 'VisibleBatchSpecWorkspace', id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type BatchSpecWorkspaceFields = BatchSpecWorkspaceFields_HiddenBatchSpecWorkspace_ | BatchSpecWorkspaceFields_VisibleBatchSpecWorkspace_;

export type VisibleBatchSpecWorkspaceFields = { __typename: 'VisibleBatchSpecWorkspace', searchResultPaths: Array<string>, failureMessage: string | null, path: string, id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, steps: Array<{ __typename?: 'BatchSpecWorkspaceStep', number: number, run: string, container: string, ifCondition: string | null, cachedResultFound: boolean, skipped: boolean, startedAt: string | null, finishedAt: string | null, exitCode: number | null, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null, environment: Array<{ __typename?: 'BatchSpecWorkspaceEnvironmentVariable', name: string, value: string | null }>, outputVariables: Array<{ __typename?: 'BatchSpecWorkspaceOutputVariable', name: string, value: unknown }> | null }>, changesetSpecs: Array<{ __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', title: string, body: string, published: boolean | 'draft' | null, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } } }> | null, repository: { __typename?: 'Repository', name: string, url: string }, branch: { __typename?: 'GitRef', displayName: string }, stages: { __typename?: 'BatchSpecWorkspaceStages', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, srcExec: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, executor: { __typename: 'Executor', id: string, queueName: string | null, queueNames: Array<string> | null, hostname: string, active: boolean, os: string, compatibility: ExecutorCompatibility | null, architecture: string, dockerVersion: string, executorVersion: string, gitVersion: string, igniteVersion: string, srcCliVersion: string, firstSeenAt: string, lastSeenAt: string } | null, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type HiddenBatchSpecWorkspaceFields = { __typename: 'HiddenBatchSpecWorkspace', id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type BatchSpecWorkspaceStepFields = { __typename?: 'BatchSpecWorkspaceStep', number: number, run: string, container: string, ifCondition: string | null, cachedResultFound: boolean, skipped: boolean, startedAt: string | null, finishedAt: string | null, exitCode: number | null, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null, environment: Array<{ __typename?: 'BatchSpecWorkspaceEnvironmentVariable', name: string, value: string | null }>, outputVariables: Array<{ __typename?: 'BatchSpecWorkspaceOutputVariable', name: string, value: unknown }> | null };

export type BatchSpecWorkspaceExecutionLogEntryFields = { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null };

type BatchSpecWorkspaceChangesetSpecFields_HiddenChangesetSpec_ = { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType };

type BatchSpecWorkspaceChangesetSpecFields_VisibleChangesetSpec_ = { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', title: string, body: string, published: boolean | 'draft' | null, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } } };

export type BatchSpecWorkspaceChangesetSpecFields = BatchSpecWorkspaceChangesetSpecFields_HiddenChangesetSpec_ | BatchSpecWorkspaceChangesetSpecFields_VisibleChangesetSpec_;

export type BatchSpecWorkspaceStats = { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number };

export type BatchSpecExecutionFields = { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, state: BatchSpecState, createdAt: string, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, applyURL: string | null, viewerCanRetry: boolean, description: { __typename?: 'BatchChangeDescription', name: string }, creator: { __typename?: 'User', id: string, url: string, displayName: string | null, username: string } | null, namespace: { __typename?: 'Org', id: string, url: string, namespaceName: string } | { __typename?: 'User', id: string, url: string, namespaceName: string }, appliesToBatchChange: { __typename?: 'BatchChange', url: string } | null, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', stats: { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number } } } | null };

export type BatchSpecExecutionByIDVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BatchSpecExecutionByIDResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, state: BatchSpecState, createdAt: string, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, applyURL: string | null, viewerCanRetry: boolean, description: { __typename?: 'BatchChangeDescription', name: string }, creator: { __typename?: 'User', id: string, url: string, displayName: string | null, username: string } | null, namespace: { __typename?: 'Org', id: string, url: string, namespaceName: string } | { __typename?: 'User', id: string, url: string, namespaceName: string }, appliesToBatchChange: { __typename?: 'BatchChange', url: string } | null, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', stats: { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number } } } | null } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspaceByIDVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BatchSpecWorkspaceByIDResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace', id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace', searchResultPaths: Array<string>, failureMessage: string | null, path: string, id: string, queuedAt: string | null, startedAt: string | null, finishedAt: string | null, state: BatchSpecWorkspaceState, placeInQueue: number | null, placeInGlobalQueue: number | null, onlyFetchWorkspace: boolean, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, steps: Array<{ __typename?: 'BatchSpecWorkspaceStep', number: number, run: string, container: string, ifCondition: string | null, cachedResultFound: boolean, skipped: boolean, startedAt: string | null, finishedAt: string | null, exitCode: number | null, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null, environment: Array<{ __typename?: 'BatchSpecWorkspaceEnvironmentVariable', name: string, value: string | null }>, outputVariables: Array<{ __typename?: 'BatchSpecWorkspaceOutputVariable', name: string, value: unknown }> | null }>, changesetSpecs: Array<{ __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', title: string, body: string, published: boolean | 'draft' | null, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } } }> | null, repository: { __typename?: 'Repository', name: string, url: string }, branch: { __typename?: 'GitRef', displayName: string }, stages: { __typename?: 'BatchSpecWorkspaceStages', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, srcExec: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, executor: { __typename: 'Executor', id: string, queueName: string | null, queueNames: Array<string> | null, hostname: string, active: boolean, os: string, compatibility: ExecutorCompatibility | null, architecture: string, dockerVersion: string, executorVersion: string, gitVersion: string, igniteVersion: string, srcCliVersion: string, firstSeenAt: string, lastSeenAt: string } | null, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspaceStepVariables = Exact<{
  workspaceID: Scalars['ID'];
  stepIndex: Scalars['Int'];
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
}>;


export type BatchSpecWorkspaceStepResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace', step: { __typename?: 'BatchSpecWorkspaceStep', outputLines: { __typename: 'BatchSpecWorkspaceStepOutputLineConnection', nodes: Array<string>, totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type CancelBatchSpecExecutionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CancelBatchSpecExecutionResult = { __typename?: 'Mutation', cancelBatchSpecExecution: { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, state: BatchSpecState, createdAt: string, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, applyURL: string | null, viewerCanRetry: boolean, description: { __typename?: 'BatchChangeDescription', name: string }, creator: { __typename?: 'User', id: string, url: string, displayName: string | null, username: string } | null, namespace: { __typename?: 'Org', id: string, url: string, namespaceName: string } | { __typename?: 'User', id: string, url: string, namespaceName: string }, appliesToBatchChange: { __typename?: 'BatchChange', url: string } | null, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', stats: { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number } } } | null } };

export type BatchSpecWorkspaceStepFileDiffsFields = { __typename?: 'VisibleBatchSpecWorkspace', step: { __typename?: 'BatchSpecWorkspaceStep', diff: { __typename?: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null } | null };

export type WorkspaceStepFileDiffConnectionFields = { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

export type BatchSpecWorkspaceStepFileDiffsVariables = Exact<{
  node: Scalars['ID'];
  step: Scalars['Int'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type BatchSpecWorkspaceStepFileDiffsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace', step: { __typename?: 'BatchSpecWorkspaceStep', diff: { __typename?: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null } | null } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspacesVariables = Exact<{
  batchSpecID: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  state: InputMaybe<BatchSpecWorkspaceState>;
}>;


export type BatchSpecWorkspacesResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', id: string, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'HiddenBatchSpecWorkspace', id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } | { __typename: 'VisibleBatchSpecWorkspace', path: string, id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, repository: { __typename?: 'Repository', name: string, url: string }, branch: { __typename?: 'GitRef', displayName: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null }> } } | null } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspacesConnectionFields = { __typename?: 'BatchSpecWorkspaceConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'HiddenBatchSpecWorkspace', id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } | { __typename: 'VisibleBatchSpecWorkspace', path: string, id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, repository: { __typename?: 'Repository', name: string, url: string }, branch: { __typename?: 'GitRef', displayName: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null }> };

type BatchSpecWorkspaceListFields_HiddenBatchSpecWorkspace_ = { __typename: 'HiddenBatchSpecWorkspace', id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

type BatchSpecWorkspaceListFields_VisibleBatchSpecWorkspace_ = { __typename: 'VisibleBatchSpecWorkspace', id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type BatchSpecWorkspaceListFields = BatchSpecWorkspaceListFields_HiddenBatchSpecWorkspace_ | BatchSpecWorkspaceListFields_VisibleBatchSpecWorkspace_;

export type VisibleBatchSpecWorkspaceListFields = { __typename: 'VisibleBatchSpecWorkspace', path: string, id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, repository: { __typename?: 'Repository', name: string, url: string }, branch: { __typename?: 'GitRef', displayName: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type HiddenBatchSpecWorkspaceListFields = { __typename: 'HiddenBatchSpecWorkspace', id: string, state: BatchSpecWorkspaceState, placeInQueue: number | null, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null };

export type RetryWorkspaceExecutionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RetryWorkspaceExecutionResult = { __typename?: 'Mutation', retryBatchSpecWorkspaceExecution: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RetryBatchSpecExecutionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RetryBatchSpecExecutionResult = { __typename?: 'Mutation', retryBatchSpecExecution: { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, state: BatchSpecState, createdAt: string, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, applyURL: string | null, viewerCanRetry: boolean, description: { __typename?: 'BatchChangeDescription', name: string }, creator: { __typename?: 'User', id: string, url: string, displayName: string | null, username: string } | null, namespace: { __typename?: 'Org', id: string, url: string, namespaceName: string } | { __typename?: 'User', id: string, url: string, namespaceName: string }, appliesToBatchChange: { __typename?: 'BatchChange', url: string } | null, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', stats: { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number } } } | null } };

export type CloseBatchChangeVariables = Exact<{
  batchChange: Scalars['ID'];
  closeChangesets: InputMaybe<Scalars['Boolean']>;
}>;


export type CloseBatchChangeResult = { __typename?: 'Mutation', closeBatchChange: { __typename?: 'BatchChange', id: string } };

export type GetBatchChangeToEditVariables = Exact<{
  namespace: Scalars['ID'];
  name: Scalars['String'];
}>;


export type GetBatchChangeToEditResult = { __typename?: 'Query', batchChange: { __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, viewerCanAdminister: boolean, state: BatchChangeState, namespace: { __typename: 'Org', name: string, displayName: string | null, namespaceName: string, viewerCanAdminister: boolean, url: string, id: string } | { __typename: 'User', username: string, displayName: string | null, namespaceName: string, viewerCanAdminister: boolean, url: string, id: string }, currentSpec: { __typename?: 'BatchSpec', id: string, originalInput: string, createdAt: string, startedAt: string | null, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename?: 'BatchSpec', id: string, originalInput: string, createdAt: string, startedAt: string | null, state: BatchSpecState, applyURL: string | null }> } } | null };

export type EditBatchChangeFields = { __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, viewerCanAdminister: boolean, state: BatchChangeState, namespace: { __typename: 'Org', name: string, displayName: string | null, namespaceName: string, viewerCanAdminister: boolean, url: string, id: string } | { __typename: 'User', username: string, displayName: string | null, namespaceName: string, viewerCanAdminister: boolean, url: string, id: string }, currentSpec: { __typename?: 'BatchSpec', id: string, originalInput: string, createdAt: string, startedAt: string | null, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename?: 'BatchSpec', id: string, originalInput: string, createdAt: string, startedAt: string | null, state: BatchSpecState, applyURL: string | null }> } };

export type ExecuteBatchSpecVariables = Exact<{
  batchSpec: Scalars['ID'];
  noCache: InputMaybe<Scalars['Boolean']>;
}>;


export type ExecuteBatchSpecResult = { __typename?: 'Mutation', executeBatchSpec: { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, state: BatchSpecState, createdAt: string, startedAt: string | null, finishedAt: string | null, failureMessage: string | null, applyURL: string | null, viewerCanRetry: boolean, description: { __typename?: 'BatchChangeDescription', name: string }, creator: { __typename?: 'User', id: string, url: string, displayName: string | null, username: string } | null, namespace: { __typename?: 'Org', id: string, url: string, namespaceName: string } | { __typename?: 'User', id: string, url: string, namespaceName: string }, appliesToBatchChange: { __typename?: 'BatchChange', url: string } | null, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', workspaces: { __typename?: 'BatchSpecWorkspaceConnection', stats: { __typename?: 'BatchSpecWorkspacesStats', errored: number, completed: number, processing: number, queued: number, ignored: number } } } | null } };

export type CreateEmptyBatchChangeVariables = Exact<{
  namespace: Scalars['ID'];
  name: Scalars['String'];
}>;


export type CreateEmptyBatchChangeResult = { __typename?: 'Mutation', createEmptyBatchChange: { __typename?: 'BatchChange', id: string, url: string } };

export type CreateBatchSpecFromRawVariables = Exact<{
  spec: Scalars['String'];
  namespace: Scalars['ID'];
  batchChange: Scalars['ID'];
}>;


export type CreateBatchSpecFromRawResult = { __typename?: 'Mutation', createBatchSpecFromRaw: { __typename?: 'BatchSpec', id: string, createdAt: string, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', startedAt: string | null, state: BatchSpecWorkspaceResolutionState, failureMessage: string | null } | null } };

export type ReplaceBatchSpecInputVariables = Exact<{
  previousSpec: Scalars['ID'];
  spec: Scalars['String'];
}>;


export type ReplaceBatchSpecInputResult = { __typename?: 'Mutation', replaceBatchSpecInput: { __typename?: 'BatchSpec', id: string, createdAt: string, workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', startedAt: string | null, state: BatchSpecWorkspaceResolutionState, failureMessage: string | null } | null } };

export type WorkspaceResolutionStatusVariables = Exact<{
  batchSpec: Scalars['ID'];
}>;


export type WorkspaceResolutionStatusResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', workspaceResolution: { __typename?: 'BatchSpecWorkspaceResolution', startedAt: string | null, state: BatchSpecWorkspaceResolutionState, failureMessage: string | null } | null } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BatchSpecWorkspacesPreviewVariables = Exact<{
  batchSpec: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
}>;


export type BatchSpecWorkspacesPreviewResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', workspaceResolution: { __typename: 'BatchSpecWorkspaceResolution', workspaces: { __typename: 'BatchSpecWorkspaceConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename: 'HiddenBatchSpecWorkspace', id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number } | { __typename: 'VisibleBatchSpecWorkspace', path: string, searchResultPaths: Array<string>, id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number, repository: { __typename: 'Repository', id: string, name: string, url: string }, branch: { __typename: 'GitRef', id: string, displayName: string, url: string, target: { __typename: 'GitObject', oid: string } } }> } } | null } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

type PreviewBatchSpecWorkspaceFields_HiddenBatchSpecWorkspace_ = { __typename: 'HiddenBatchSpecWorkspace', id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number };

type PreviewBatchSpecWorkspaceFields_VisibleBatchSpecWorkspace_ = { __typename: 'VisibleBatchSpecWorkspace', id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number };

export type PreviewBatchSpecWorkspaceFields = PreviewBatchSpecWorkspaceFields_HiddenBatchSpecWorkspace_ | PreviewBatchSpecWorkspaceFields_VisibleBatchSpecWorkspace_;

export type PreviewVisibleBatchSpecWorkspaceFields = { __typename: 'VisibleBatchSpecWorkspace', path: string, searchResultPaths: Array<string>, id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number, repository: { __typename: 'Repository', id: string, name: string, url: string }, branch: { __typename: 'GitRef', id: string, displayName: string, url: string, target: { __typename: 'GitObject', oid: string } } };

export type PreviewHiddenBatchSpecWorkspaceFields = { __typename: 'HiddenBatchSpecWorkspace', id: string, ignored: boolean, unsupported: boolean, cachedResultFound: boolean, stepCacheResultCount: number };

export type BatchSpecImportingChangesetsVariables = Exact<{
  batchSpec: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type BatchSpecImportingChangesetsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', importingChangesets: { __typename: 'ChangesetSpecConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename: 'HiddenChangesetSpec', id: string } | { __typename: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription' } }> } | null } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type PreviewBatchSpecImportingChangesetFields = { __typename: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription' } };

export type PreviewBatchSpecImportingHiddenChangesetFields = { __typename: 'HiddenChangesetSpec', id: string };

export type CheckExecutorsAccessTokenVariables = Exact<{ [key: string]: never; }>;


export type CheckExecutorsAccessTokenResult = { __typename?: 'Query', areExecutorsConfigured: boolean };

export type ChangesetsStatsFields = { __typename: 'ChangesetsStats', total: number, closed: number, deleted: number, draft: number, merged: number, open: number, unpublished: number, archived: number, isCompleted: boolean, percentComplete: number, failed: number, retrying: number, scheduled: number, processing: number };

export type BulkOperationFields = { __typename: 'BulkOperation', id: string, type: BulkOperationType, state: BulkOperationState, progress: number, changesetCount: number, createdAt: string, finishedAt: string | null, errors: Array<{ __typename?: 'ChangesetJobError', error: string | null, changeset: { __typename: 'ExternalChangeset', title: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', id: string, name: string, url: string } } | { __typename: 'HiddenExternalChangeset' } }>, initiator: { __typename?: 'User', username: string, url: string } };

export type BatchChangeFields = { __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, lastAppliedAt: string | null, state: BatchChangeState, updatedAt: string, closedAt: string | null, viewerCanAdminister: boolean, namespace: { __typename: 'Org', displayName: string | null, name: string, id: string, namespaceName: string, url: string } | { __typename: 'User', displayName: string | null, username: string, id: string, namespaceName: string, url: string }, creator: { __typename?: 'User', username: string, url: string } | null, lastApplier: { __typename?: 'User', username: string, url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number }, changesetsStats: { __typename: 'ChangesetsStats', total: number, closed: number, deleted: number, draft: number, merged: number, open: number, unpublished: number, archived: number, isCompleted: boolean, percentComplete: number, failed: number, retrying: number, scheduled: number, processing: number }, bulkOperations: { __typename: 'BulkOperationConnection', totalCount: number }, activeBulkOperations: { __typename: 'BulkOperationConnection', totalCount: number, nodes: Array<{ __typename: 'BulkOperation', id: string, state: BulkOperationState }> }, currentSpec: { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, description: { __typename: 'BatchChangeDescription', name: string }, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null, supersedingBatchSpec: { __typename?: 'BatchSpec', createdAt: string, applyURL: string | null } | null, codeHostsWithoutWebhooks: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } }, viewerBatchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceURL: string, externalServiceKind: ExternalServiceKind }> } }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename?: 'BatchSpec', state: BatchSpecState }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type ActiveBulkOperationsConnectionFields = { __typename: 'BulkOperationConnection', totalCount: number, nodes: Array<{ __typename: 'BulkOperation', id: string, state: BulkOperationState }> };

export type ActiveBulkOperationFields = { __typename: 'BulkOperation', id: string, state: BulkOperationState };

export type ChangesetLabelFields = { __typename: 'ChangesetLabel', color: string, description: string | null, text: string };

export type BatchChangeByNamespaceVariables = Exact<{
  namespaceID: Scalars['ID'];
  batchChange: Scalars['String'];
  createdAfter: Scalars['DateTime'];
}>;


export type BatchChangeByNamespaceResult = { __typename?: 'Query', batchChange: { __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, lastAppliedAt: string | null, state: BatchChangeState, updatedAt: string, closedAt: string | null, viewerCanAdminister: boolean, namespace: { __typename: 'Org', displayName: string | null, name: string, id: string, namespaceName: string, url: string } | { __typename: 'User', displayName: string | null, username: string, id: string, namespaceName: string, url: string }, creator: { __typename?: 'User', username: string, url: string } | null, lastApplier: { __typename?: 'User', username: string, url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number }, changesetsStats: { __typename: 'ChangesetsStats', total: number, closed: number, deleted: number, draft: number, merged: number, open: number, unpublished: number, archived: number, isCompleted: boolean, percentComplete: number, failed: number, retrying: number, scheduled: number, processing: number }, bulkOperations: { __typename: 'BulkOperationConnection', totalCount: number }, activeBulkOperations: { __typename: 'BulkOperationConnection', totalCount: number, nodes: Array<{ __typename: 'BulkOperation', id: string, state: BulkOperationState }> }, currentSpec: { __typename?: 'BatchSpec', id: string, originalInput: string, source: BatchSpecSource, description: { __typename: 'BatchChangeDescription', name: string }, files: { __typename?: 'BatchSpecWorkspaceFileConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'BatchSpecWorkspaceFile', id: string, name: string, binary: boolean, byteSize: number, url: string }> } | null, supersedingBatchSpec: { __typename?: 'BatchSpec', createdAt: string, applyURL: string | null } | null, codeHostsWithoutWebhooks: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } }, viewerBatchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceURL: string, externalServiceKind: ExternalServiceKind }> } }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename?: 'BatchSpec', state: BatchSpecState }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | null };

export type HiddenExternalChangesetFields = { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState };

export type ExternalChangesetFields = { __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null };

type ChangesetFields_ExternalChangeset_ = { __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null };

type ChangesetFields_HiddenExternalChangeset_ = { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState };

export type ChangesetFields = ChangesetFields_ExternalChangeset_ | ChangesetFields_HiddenExternalChangeset_;

export type BatchChangeChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  state: InputMaybe<ChangesetState>;
  reviewState: InputMaybe<ChangesetReviewState>;
  checkState: InputMaybe<ChangesetCheckState>;
  onlyPublishedByThisBatchChange: InputMaybe<Scalars['Boolean']>;
  search: InputMaybe<Scalars['String']>;
  onlyArchived: InputMaybe<Scalars['Boolean']>;
  onlyClosable: InputMaybe<Scalars['Boolean']>;
}>;


export type BatchChangeChangesetsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange', changesets: { __typename: 'ChangesetConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null } | { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState }> } } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type SyncChangesetVariables = Exact<{
  changeset: Scalars['ID'];
}>;


export type SyncChangesetResult = { __typename?: 'Mutation', syncChangeset: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type ReenqueueChangesetVariables = Exact<{
  changeset: Scalars['ID'];
}>;


export type ReenqueueChangesetResult = { __typename?: 'Mutation', reenqueueChangeset: { __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null } | { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState } };

type GitRefSpecFields_GitObject_ = { __typename: 'GitObject', oid: string };

type GitRefSpecFields_GitRef_ = { __typename: 'GitRef', target: { __typename?: 'GitObject', oid: string } };

type GitRefSpecFields_GitRevSpecExpr_ = { __typename: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null };

export type GitRefSpecFields = GitRefSpecFields_GitObject_ | GitRefSpecFields_GitRef_ | GitRefSpecFields_GitRevSpecExpr_;

export type ExternalChangesetFileDiffsFields = { __typename?: 'ExternalChangeset', diff: { __typename: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | { __typename: 'RepositoryComparison', range: { __typename?: 'GitRevisionRange', base: { __typename: 'GitObject', oid: string } | { __typename: 'GitRef', target: { __typename?: 'GitObject', oid: string } } | { __typename: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null }, head: { __typename: 'GitObject', oid: string } | { __typename: 'GitRef', target: { __typename?: 'GitObject', oid: string } } | { __typename: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null } }, fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null };

export type ExternalChangesetFileDiffsVariables = Exact<{
  externalChangeset: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type ExternalChangesetFileDiffsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset', diff: { __typename: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | { __typename: 'RepositoryComparison', range: { __typename?: 'GitRevisionRange', base: { __typename: 'GitObject', oid: string } | { __typename: 'GitRef', target: { __typename?: 'GitObject', oid: string } } | { __typename: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null }, head: { __typename: 'GitObject', oid: string } | { __typename: 'GitRef', target: { __typename?: 'GitObject', oid: string } } | { __typename: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null } }, fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ChangesetCountsOverTimeFields = { __typename?: 'ChangesetCounts', date: string, merged: number, closed: number, draft: number, openApproved: number, openChangesRequested: number, openPending: number, total: number };

export type ChangesetCountsOverTimeVariables = Exact<{
  batchChange: Scalars['ID'];
  includeArchived: Scalars['Boolean'];
}>;


export type ChangesetCountsOverTimeResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange', changesetCountsOverTime: Array<{ __typename?: 'ChangesetCounts', date: string, merged: number, closed: number, draft: number, openApproved: number, openChangesRequested: number, openPending: number, total: number }> } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type DeleteBatchChangeVariables = Exact<{
  batchChange: Scalars['ID'];
}>;


export type DeleteBatchChangeResult = { __typename?: 'Mutation', deleteBatchChange: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ChangesetDiffFields = { __typename?: 'ExternalChangeset', currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', commits: Array<{ __typename?: 'GitCommitDescription', diff: string }> } } | null };

export type ChangesetDiffVariables = Exact<{
  changeset: Scalars['ID'];
}>;


export type ChangesetDiffResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset', currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', commits: Array<{ __typename?: 'GitCommitDescription', diff: string }> } } | null } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ChangesetScheduleEstimateFields = { __typename?: 'ExternalChangeset', scheduleEstimateAt: string | null };

export type ChangesetScheduleEstimateVariables = Exact<{
  changeset: Scalars['ID'];
}>;


export type ChangesetScheduleEstimateResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset', scheduleEstimateAt: string | null } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type DetachChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
}>;


export type DetachChangesetsResult = { __typename?: 'Mutation', detachChangesets: { __typename?: 'BulkOperation', id: string } };

export type CreateChangesetCommentsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
  body: Scalars['String'];
}>;


export type CreateChangesetCommentsResult = { __typename?: 'Mutation', createChangesetComments: { __typename?: 'BulkOperation', id: string } };

export type ReenqueueChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
}>;


export type ReenqueueChangesetsResult = { __typename?: 'Mutation', reenqueueChangesets: { __typename?: 'BulkOperation', id: string } };

export type MergeChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
  squash: Scalars['Boolean'];
}>;


export type MergeChangesetsResult = { __typename?: 'Mutation', mergeChangesets: { __typename?: 'BulkOperation', id: string } };

export type CloseChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
}>;


export type CloseChangesetsResult = { __typename?: 'Mutation', closeChangesets: { __typename?: 'BulkOperation', id: string } };

export type PublishChangesetsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
  draft: Scalars['Boolean'];
}>;


export type PublishChangesetsResult = { __typename?: 'Mutation', publishChangesets: { __typename?: 'BulkOperation', id: string } };

export type GetChangesetsByIDsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
}>;


export type GetChangesetsByIDsResult = { __typename?: 'Query', getChangesetsByIDs: { __typename?: 'ChangesetConnection', nodes: Array<{ __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', name: string } } | { __typename?: 'HiddenExternalChangeset' }> } };

export type BatchChangeBulkOperationsVariables = Exact<{
  batchChange: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type BatchChangeBulkOperationsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange', bulkOperations: { __typename: 'BulkOperationConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename: 'BulkOperation', id: string, type: BulkOperationType, state: BulkOperationState, progress: number, changesetCount: number, createdAt: string, finishedAt: string | null, errors: Array<{ __typename?: 'ChangesetJobError', error: string | null, changeset: { __typename: 'ExternalChangeset', title: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', id: string, name: string, url: string } } | { __typename: 'HiddenExternalChangeset' } }>, initiator: { __typename?: 'User', username: string, url: string } }> } } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type BulkOperationConnectionFields = { __typename: 'BulkOperationConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename: 'BulkOperation', id: string, type: BulkOperationType, state: BulkOperationState, progress: number, changesetCount: number, createdAt: string, finishedAt: string | null, errors: Array<{ __typename?: 'ChangesetJobError', error: string | null, changeset: { __typename: 'ExternalChangeset', title: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', id: string, name: string, url: string } } | { __typename: 'HiddenExternalChangeset' } }>, initiator: { __typename?: 'User', username: string, url: string } }> };

export type AllChangesetIDsVariables = Exact<{
  batchChange: Scalars['ID'];
  after: InputMaybe<Scalars['String']>;
  state: InputMaybe<ChangesetState>;
  reviewState: InputMaybe<ChangesetReviewState>;
  checkState: InputMaybe<ChangesetCheckState>;
  onlyPublishedByThisBatchChange: InputMaybe<Scalars['Boolean']>;
  search: InputMaybe<Scalars['String']>;
  onlyArchived: InputMaybe<Scalars['Boolean']>;
}>;


export type AllChangesetIDsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange', changesets: { __typename?: 'ChangesetConnection', nodes: Array<{ __typename: 'ExternalChangeset', id: string } | { __typename: 'HiddenExternalChangeset', id: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ChangesetIDConnectionFields = { __typename?: 'ChangesetConnection', nodes: Array<{ __typename: 'ExternalChangeset', id: string } | { __typename: 'HiddenExternalChangeset', id: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

export type AvailableBulkOperationsVariables = Exact<{
  batchChange: Scalars['ID'];
  changesets: Array<Scalars['ID']>;
}>;


export type AvailableBulkOperationsResult = { __typename?: 'Query', availableBulkOperations: Array<BulkOperationType> };

export type BatchChangesFields = { __typename?: 'BatchChangeConnection', totalCount: number, nodes: Array<{ __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, state: BatchChangeState, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number }, currentSpec: { __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type ListBatchChange = { __typename?: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, state: BatchChangeState, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number }, currentSpec: { __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }> } };

export type ListBatchChangeLatestSpecFields = { __typename?: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null };

export type BatchChangesVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  states: InputMaybe<Array<BatchChangeState>>;
  viewerCanAdminister: InputMaybe<Scalars['Boolean']>;
}>;


export type BatchChangesResult = { __typename?: 'Query', batchChanges: { __typename: 'BatchChangeConnection', totalCount: number, nodes: Array<{ __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, state: BatchChangeState, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number }, currentSpec: { __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type BatchChangesByNamespaceVariables = Exact<{
  namespaceID: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  states: InputMaybe<Array<BatchChangeState>>;
  viewerCanAdminister: InputMaybe<Scalars['Boolean']>;
}>;


export type BatchChangesByNamespaceResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org', batchChanges: { __typename: 'BatchChangeConnection', totalCount: number, nodes: Array<{ __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, state: BatchChangeState, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number }, currentSpec: { __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', batchChanges: { __typename: 'BatchChangeConnection', totalCount: number, nodes: Array<{ __typename: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, state: BatchChangeState, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number }, currentSpec: { __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }, batchSpecs: { __typename?: 'BatchSpecConnection', nodes: Array<{ __typename: 'BatchSpec', id: string, state: BatchSpecState, applyURL: string | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GetLicenseAndUsageInfoVariables = Exact<{ [key: string]: never; }>;


export type GetLicenseAndUsageInfoResult = { __typename?: 'Query', maxUnlicensedChangesets: number, campaigns: boolean, batchChanges: boolean, allBatchChanges: { __typename?: 'BatchChangeConnection', totalCount: number } };

export type GlobalChangesetsStatsVariables = Exact<{ [key: string]: never; }>;


export type GlobalChangesetsStatsResult = { __typename?: 'Query', batchChanges: { __typename?: 'BatchChangeConnection', totalCount: number }, globalChangesetsStats: { __typename?: 'GlobalChangesetsStats', open: number, closed: number, merged: number } };

export type SupersedingBatchSpecFields = { __typename?: 'BatchSpec', createdAt: string, applyURL: string | null };

export type BatchSpecFields = { __typename?: 'BatchSpec', id: string, createdAt: string, expiresAt: string | null, viewerCanAdminister: boolean, originalInput: string, description: { __typename?: 'BatchChangeDescription', name: string, description: string }, appliesToBatchChange: { __typename?: 'BatchChange', id: string, name: string, url: string } | null, creator: { __typename?: 'User', username: string, url: string } | null, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, applyPreview: { __typename?: 'ChangesetApplyPreviewConnection', totalCount: number, stats: { __typename?: 'ChangesetApplyPreviewConnectionStats', archive: number } }, supersedingBatchSpec: { __typename?: 'BatchSpec', createdAt: string, applyURL: string | null } | null, viewerBatchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceURL: string, externalServiceKind: ExternalServiceKind }> } };

export type BatchSpecByIDVariables = Exact<{
  batchSpec: Scalars['ID'];
}>;


export type BatchSpecByIDResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', id: string, createdAt: string, expiresAt: string | null, viewerCanAdminister: boolean, originalInput: string, description: { __typename?: 'BatchChangeDescription', name: string, description: string }, appliesToBatchChange: { __typename?: 'BatchChange', id: string, name: string, url: string } | null, creator: { __typename?: 'User', username: string, url: string } | null, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, applyPreview: { __typename?: 'ChangesetApplyPreviewConnection', totalCount: number, stats: { __typename?: 'ChangesetApplyPreviewConnectionStats', archive: number } }, supersedingBatchSpec: { __typename?: 'BatchSpec', createdAt: string, applyURL: string | null } | null, viewerBatchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceURL: string, externalServiceKind: ExternalServiceKind }> } } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type QueryApplyPreviewStatsVariables = Exact<{
  batchSpec: Scalars['ID'];
  publicationStates: InputMaybe<Array<ChangesetSpecPublicationStateInput>>;
}>;


export type QueryApplyPreviewStatsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', id: string, applyPreview: { __typename?: 'ChangesetApplyPreviewConnection', stats: { __typename?: 'ChangesetApplyPreviewConnectionStats', close: number, detach: number, archive: number, import: number, publish: number, publishDraft: number, push: number, reopen: number, undraft: number, update: number, reattach: number, added: number, modified: number, removed: number } } } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ApplyPreviewStatsFields = { __typename?: 'ChangesetApplyPreviewConnection', stats: { __typename?: 'ChangesetApplyPreviewConnectionStats', close: number, detach: number, archive: number, import: number, publish: number, publishDraft: number, push: number, reopen: number, undraft: number, update: number, reattach: number, added: number, modified: number, removed: number } };

export type CreateBatchChangeVariables = Exact<{
  batchSpec: Scalars['ID'];
  publicationStates: InputMaybe<Array<ChangesetSpecPublicationStateInput>>;
}>;


export type CreateBatchChangeResult = { __typename?: 'Mutation', createBatchChange: { __typename?: 'BatchChange', id: string, url: string } };

export type ApplyBatchChangeVariables = Exact<{
  batchSpec: Scalars['ID'];
  batchChange: Scalars['ID'];
  publicationStates: InputMaybe<Array<ChangesetSpecPublicationStateInput>>;
}>;


export type ApplyBatchChangeResult = { __typename?: 'Mutation', applyBatchChange: { __typename?: 'BatchChange', id: string, url: string } };

type CommonChangesetSpecFields_HiddenChangesetSpec_ = { __typename?: 'HiddenChangesetSpec', type: ChangesetSpecType };

type CommonChangesetSpecFields_VisibleChangesetSpec_ = { __typename?: 'VisibleChangesetSpec', type: ChangesetSpecType };

export type CommonChangesetSpecFields = CommonChangesetSpecFields_HiddenChangesetSpec_ | CommonChangesetSpecFields_VisibleChangesetSpec_;

export type HiddenChangesetSpecFields = { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType };

export type VisibleChangesetSpecFields = { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null };

export type ExistingChangesetReferenceFields = { __typename?: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } };

export type GitBranchChangesetDescriptionFields = { __typename?: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } };

export type BatchSpecApplyPreviewConnectionFields = { __typename?: 'ChangesetApplyPreviewConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType } } | { __typename: 'HiddenApplyPreviewTargetsDetach', changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } | { __typename: 'HiddenApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType }, changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } } | { __typename: 'VisibleChangesetApplyPreview', operations: Array<ChangesetSpecOperation>, delta: { __typename?: 'ChangesetSpecDelta', titleChanged: boolean, bodyChanged: boolean, baseRefChanged: boolean, diffChanged: boolean, authorEmailChanged: boolean, authorNameChanged: boolean, commitMessageChanged: boolean }, targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } } | { __typename: 'VisibleApplyPreviewTargetsDetach', changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', url: string, name: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null }, changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, title: string, body: string, commits: Array<{ __typename?: 'GitCommitDescription', body: string | null, subject: string, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }> } } | null, author: { __typename?: 'Person', email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } | null } } }> };

type ChangesetApplyPreviewFields_HiddenChangesetApplyPreview_ = { __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType } } | { __typename: 'HiddenApplyPreviewTargetsDetach', changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } | { __typename: 'HiddenApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType }, changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } };

type ChangesetApplyPreviewFields_VisibleChangesetApplyPreview_ = { __typename: 'VisibleChangesetApplyPreview', operations: Array<ChangesetSpecOperation>, delta: { __typename?: 'ChangesetSpecDelta', titleChanged: boolean, bodyChanged: boolean, baseRefChanged: boolean, diffChanged: boolean, authorEmailChanged: boolean, authorNameChanged: boolean, commitMessageChanged: boolean }, targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } } | { __typename: 'VisibleApplyPreviewTargetsDetach', changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', url: string, name: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null }, changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, title: string, body: string, commits: Array<{ __typename?: 'GitCommitDescription', body: string | null, subject: string, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }> } } | null, author: { __typename?: 'Person', email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } | null } } };

export type ChangesetApplyPreviewFields = ChangesetApplyPreviewFields_HiddenChangesetApplyPreview_ | ChangesetApplyPreviewFields_VisibleChangesetApplyPreview_;

export type HiddenChangesetApplyPreviewFields = { __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType } } | { __typename: 'HiddenApplyPreviewTargetsDetach', changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } | { __typename: 'HiddenApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType }, changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } };

export type VisibleChangesetApplyPreviewFields = { __typename: 'VisibleChangesetApplyPreview', operations: Array<ChangesetSpecOperation>, delta: { __typename?: 'ChangesetSpecDelta', titleChanged: boolean, bodyChanged: boolean, baseRefChanged: boolean, diffChanged: boolean, authorEmailChanged: boolean, authorNameChanged: boolean, commitMessageChanged: boolean }, targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } } | { __typename: 'VisibleApplyPreviewTargetsDetach', changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', url: string, name: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null }, changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, title: string, body: string, commits: Array<{ __typename?: 'GitCommitDescription', body: string | null, subject: string, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }> } } | null, author: { __typename?: 'Person', email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } | null } } };

export type BatchSpecApplyPreviewVariables = Exact<{
  batchSpec: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  currentState: InputMaybe<ChangesetState>;
  action: InputMaybe<ChangesetSpecOperation>;
  publicationStates: InputMaybe<Array<ChangesetSpecPublicationStateInput>>;
}>;


export type BatchSpecApplyPreviewResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', applyPreview: { __typename?: 'ChangesetApplyPreviewConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType } } | { __typename: 'HiddenApplyPreviewTargetsDetach', changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } | { __typename: 'HiddenApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'HiddenChangesetSpec', id: string, type: ChangesetSpecType }, changeset: { __typename?: 'HiddenExternalChangeset', id: string, state: ChangesetState } } } | { __typename: 'VisibleChangesetApplyPreview', operations: Array<ChangesetSpecOperation>, delta: { __typename?: 'ChangesetSpecDelta', titleChanged: boolean, bodyChanged: boolean, baseRefChanged: boolean, diffChanged: boolean, authorEmailChanged: boolean, authorNameChanged: boolean, commitMessageChanged: boolean }, targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } } | { __typename: 'VisibleApplyPreviewTargetsDetach', changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, repository: { __typename?: 'Repository', url: string, name: string }, diffStat: { __typename?: 'DiffStat', added: number, deleted: number } | null } } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference', externalID: string, baseRepository: { __typename?: 'Repository', name: string, url: string } } | { __typename: 'GitBranchChangesetDescription', title: string, published: boolean | 'draft' | null, body: string, baseRef: string, headRef: string, baseRepository: { __typename?: 'Repository', name: string, url: string }, commits: Array<{ __typename?: 'GitCommitDescription', subject: string, body: string | null, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }>, diffStat: { __typename: 'DiffStat', added: number, deleted: number } }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null }, changeset: { __typename?: 'ExternalChangeset', id: string, title: string | null, state: ChangesetState, externalID: string | null, externalURL: { __typename?: 'ExternalLink', url: string } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, title: string, body: string, commits: Array<{ __typename?: 'GitCommitDescription', body: string | null, subject: string, author: { __typename?: 'Person', avatarURL: string | null, email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } }> } } | null, author: { __typename?: 'Person', email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null } | null } } }> } } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ChangesetSpecFileDiffsFields = { __typename?: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', diff: { __typename?: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } } };

export type ChangesetSpecFileDiffConnectionFields = { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

export type ChangesetSpecFileDiffsVariables = Exact<{
  changesetSpec: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type ChangesetSpecFileDiffsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec', description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', diff: { __typename?: 'PreviewRepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } } } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type PublishableChangesetSpecIDsConnectionFields = { __typename?: 'ChangesetApplyPreviewConnection', nodes: Array<{ __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach' } | { __typename: 'HiddenApplyPreviewTargetsDetach' } | { __typename: 'HiddenApplyPreviewTargetsUpdate' } } | { __typename: 'VisibleChangesetApplyPreview', targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } } } | { __typename: 'VisibleApplyPreviewTargetsDetach' } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } }, changeset: { __typename?: 'ExternalChangeset', state: ChangesetState } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

type PublishableChangesetSpecIDsChangesetApplyPreviewFields_HiddenChangesetApplyPreview_ = { __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach' } | { __typename: 'HiddenApplyPreviewTargetsDetach' } | { __typename: 'HiddenApplyPreviewTargetsUpdate' } };

type PublishableChangesetSpecIDsChangesetApplyPreviewFields_VisibleChangesetApplyPreview_ = { __typename: 'VisibleChangesetApplyPreview', targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } } } | { __typename: 'VisibleApplyPreviewTargetsDetach' } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } }, changeset: { __typename?: 'ExternalChangeset', state: ChangesetState } } };

export type PublishableChangesetSpecIDsChangesetApplyPreviewFields = PublishableChangesetSpecIDsChangesetApplyPreviewFields_HiddenChangesetApplyPreview_ | PublishableChangesetSpecIDsChangesetApplyPreviewFields_VisibleChangesetApplyPreview_;

export type PublishableChangesetSpecIDsHiddenChangesetApplyPreviewFields = { __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach' } | { __typename: 'HiddenApplyPreviewTargetsDetach' } | { __typename: 'HiddenApplyPreviewTargetsUpdate' } };

export type PublishableChangesetSpecIDsVisibleChangesetApplyPreviewFields = { __typename: 'VisibleChangesetApplyPreview', targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } } } | { __typename: 'VisibleApplyPreviewTargetsDetach' } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } }, changeset: { __typename?: 'ExternalChangeset', state: ChangesetState } } };

export type PublishableChangesetSpecIDsVisibleChangesetSpecFields = { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } };

export type AllPublishableChangesetSpecIDsVariables = Exact<{
  batchSpec: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  currentState: InputMaybe<ChangesetState>;
  action: InputMaybe<ChangesetSpecOperation>;
}>;


export type AllPublishableChangesetSpecIDsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec', applyPreview: { __typename?: 'ChangesetApplyPreviewConnection', nodes: Array<{ __typename: 'HiddenChangesetApplyPreview', targets: { __typename: 'HiddenApplyPreviewTargetsAttach' } | { __typename: 'HiddenApplyPreviewTargetsDetach' } | { __typename: 'HiddenApplyPreviewTargetsUpdate' } } | { __typename: 'VisibleChangesetApplyPreview', targets: { __typename: 'VisibleApplyPreviewTargetsAttach', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } } } | { __typename: 'VisibleApplyPreviewTargetsDetach' } | { __typename: 'VisibleApplyPreviewTargetsUpdate', changesetSpec: { __typename?: 'VisibleChangesetSpec', id: string, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', published: boolean | 'draft' | null } }, changeset: { __typename?: 'ExternalChangeset', state: ChangesetState } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type RepoBatchChangeStats = { __typename?: 'Repository', batchChangesDiffStat: { __typename?: 'DiffStat', added: number, deleted: number }, changesetsStats: { __typename?: 'RepoChangesetsStats', unpublished: number, draft: number, open: number, merged: number, closed: number, total: number } };

export type RepoBatchChangeStatsVariables = Exact<{
  name: Scalars['String'];
}>;


export type RepoBatchChangeStatsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', batchChangesDiffStat: { __typename?: 'DiffStat', added: number, deleted: number }, changesetsStats: { __typename?: 'RepoChangesetsStats', unpublished: number, draft: number, open: number, merged: number, closed: number, total: number } } | null };

export type RepoBatchChange = { __typename?: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesets: { __typename?: 'ChangesetConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null } | { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState }> }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number } };

export type RepoBatchChangesVariables = Exact<{
  name: Scalars['String'];
  repoID: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  state: InputMaybe<BatchChangeState>;
  viewerCanAdminister: InputMaybe<Scalars['Boolean']>;
}>;


export type RepoBatchChangesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', batchChanges: { __typename?: 'BatchChangeConnection', totalCount: number, nodes: Array<{ __typename?: 'BatchChange', id: string, url: string, name: string, description: string | null, createdAt: string, closedAt: string | null, namespace: { __typename?: 'Org', namespaceName: string, url: string } | { __typename?: 'User', namespaceName: string, url: string }, changesets: { __typename?: 'ChangesetConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'ExternalChangeset', id: string, title: string | null, body: string | null, state: ChangesetState, reviewState: ChangesetReviewState | null, checkState: ChangesetCheckState | null, error: string | null, syncerError: string | null, forkNamespace: string | null, externalID: string | null, createdAt: string, updatedAt: string, nextSyncAt: string | null, labels: Array<{ __typename: 'ChangesetLabel', color: string, description: string | null, text: string }>, repository: { __typename?: 'Repository', id: string, name: string, url: string }, externalURL: { __typename?: 'ExternalLink', url: string } | null, diffStat: { __typename: 'DiffStat', added: number, deleted: number } | null, commitVerification: { __typename?: 'GitHubCommitVerification', verified: boolean } | null, currentSpec: { __typename?: 'VisibleChangesetSpec', id: string, type: ChangesetSpecType, description: { __typename: 'ExistingChangesetReference' } | { __typename: 'GitBranchChangesetDescription', baseRef: string, headRef: string }, forkTarget: { __typename?: 'ForkTarget', pushUser: boolean, namespace: string | null } | null } | null } | { __typename: 'HiddenExternalChangeset', id: string, createdAt: string, updatedAt: string, nextSyncAt: string | null, state: ChangesetState }> }, changesetsStats: { __typename?: 'ChangesetsStats', open: number, closed: number, merged: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | null };

export type BatchChangesCredentialFields = { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null };

export type CreateBatchChangesCredentialVariables = Exact<{
  user: InputMaybe<Scalars['ID']>;
  credential: Scalars['String'];
  username: InputMaybe<Scalars['String']>;
  externalServiceKind: ExternalServiceKind;
  externalServiceURL: Scalars['String'];
}>;


export type CreateBatchChangesCredentialResult = { __typename?: 'Mutation', createBatchChangesCredential: { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null } };

export type DeleteBatchChangesCredentialVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBatchChangesCredentialResult = { __typename?: 'Mutation', deleteBatchChangesCredential: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type BatchChangesCodeHostsFields = { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string, requiresSSH: boolean, requiresUsername: boolean, supportsCommitSigning: boolean, credential: { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null } | null, commitSigningConfiguration: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null }> };

export type BatchChangesCodeHostFields = { __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string, requiresSSH: boolean, requiresUsername: boolean, supportsCommitSigning: boolean, credential: { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null } | null, commitSigningConfiguration: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null };

export type UserBatchChangesCodeHostsVariables = Exact<{
  user: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type UserBatchChangesCodeHostsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', batchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string, requiresSSH: boolean, requiresUsername: boolean, supportsCommitSigning: boolean, credential: { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null } | null, commitSigningConfiguration: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null }> } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GlobalBatchChangesCodeHostsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type GlobalBatchChangesCodeHostsResult = { __typename?: 'Query', batchChangesCodeHosts: { __typename?: 'BatchChangesCodeHostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'BatchChangesCodeHost', externalServiceKind: ExternalServiceKind, externalServiceURL: string, requiresSSH: boolean, requiresUsername: boolean, supportsCommitSigning: boolean, credential: { __typename?: 'BatchChangesCredential', id: string, sshPublicKey: string | null, isSiteCredential: boolean, gitHubApp: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null } | null, commitSigningConfiguration: { __typename?: 'GitHubApp', id: string, appID: number, name: string, appURL: string, baseURL: string, logo: string } | null }> } };

export type CheckBatchChangesCredentialVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CheckBatchChangesCredentialResult = { __typename?: 'Query', checkBatchChangesCredential: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RefreshGitHubAppVariables = Exact<{
  gitHubApp: Scalars['ID'];
}>;


export type RefreshGitHubAppResult = { __typename?: 'Mutation', refreshGitHubApp: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type MonitorTriggerEventsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  triggerEventsFirst: InputMaybe<Scalars['Int']>;
  triggerEventsAfter: InputMaybe<Scalars['String']>;
}>;


export type MonitorTriggerEventsResult = { __typename?: 'Query', currentUser: { __typename?: 'User', monitors: { __typename?: 'MonitorConnection', totalCount: number, nodes: Array<{ __typename?: 'Monitor', description: string, id: string, trigger: { __typename?: 'MonitorQuery', query: string, events: { __typename?: 'MonitorTriggerEventConnection', totalCount: number, nodes: Array<{ __typename?: 'MonitorTriggerEvent', id: string, status: EventStatus, message: string | null, timestamp: string, resultCount: number, query: string | null, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | null };

export type CodeMonitorTriggerEvents = { __typename?: 'MonitorQuery', events: { __typename?: 'MonitorTriggerEventConnection', totalCount: number, nodes: Array<{ __typename?: 'MonitorTriggerEvent', id: string, status: EventStatus, message: string | null, timestamp: string, resultCount: number, query: string | null, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type MonitorTriggerEventWithActions = { __typename?: 'MonitorTriggerEvent', id: string, status: EventStatus, message: string | null, timestamp: string, resultCount: number, query: string | null, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } }> } };

export type CodeMonitorWithEvents = { __typename?: 'Monitor', description: string, id: string, trigger: { __typename?: 'MonitorQuery', query: string, events: { __typename?: 'MonitorTriggerEventConnection', totalCount: number, nodes: Array<{ __typename?: 'MonitorTriggerEvent', id: string, status: EventStatus, message: string | null, timestamp: string, resultCount: number, query: string | null, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } } | { __typename: 'MonitorWebhook', id: string, events: { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> } }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } };

export type MonitorActionEvents = { __typename?: 'MonitorActionEventConnection', nodes: Array<{ __typename?: 'MonitorActionEvent', id: string, status: EventStatus, message: string | null, timestamp: string }> };

export type MonitorEmailFields = { __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } };

export type MonitorWebhookFields = { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string };

export type MonitorSlackWebhookFields = { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string };

export type CodeMonitorFields = { __typename?: 'Monitor', id: string, description: string, enabled: boolean, trigger: { __typename?: 'MonitorQuery', id: string, query: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } };

export type ListCodeMonitors = { __typename?: 'MonitorConnection', totalCount: number, nodes: Array<{ __typename?: 'Monitor', id: string, description: string, enabled: boolean, trigger: { __typename?: 'MonitorQuery', id: string, query: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type CreateCodeMonitorVariables = Exact<{
  monitor: MonitorInput;
  trigger: MonitorTriggerInput;
  actions: Array<MonitorActionInput>;
}>;


export type CreateCodeMonitorResult = { __typename?: 'Mutation', createCodeMonitor: { __typename?: 'Monitor', description: string } };

export type ListUserCodeMonitorsVariables = Exact<{
  id: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type ListUserCodeMonitorsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', monitors: { __typename?: 'MonitorConnection', totalCount: number, nodes: Array<{ __typename?: 'Monitor', id: string, description: string, enabled: boolean, trigger: { __typename?: 'MonitorQuery', id: string, query: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ListAllCodeMonitorsVariables = Exact<{
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
}>;


export type ListAllCodeMonitorsResult = { __typename?: 'Query', monitors: { __typename?: 'MonitorConnection', totalCount: number, nodes: Array<{ __typename?: 'Monitor', id: string, description: string, enabled: boolean, trigger: { __typename?: 'MonitorQuery', id: string, query: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type ToggleCodeMonitorEnabledVariables = Exact<{
  id: Scalars['ID'];
  enabled: Scalars['Boolean'];
}>;


export type ToggleCodeMonitorEnabledResult = { __typename?: 'Mutation', toggleCodeMonitor: { __typename?: 'Monitor', id: string, enabled: boolean } };

export type FetchCodeMonitorVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FetchCodeMonitorResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename: 'Monitor', id: string, description: string, enabled: boolean, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string, url: string } | { __typename?: 'User', id: string, url: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, trigger: { __typename?: 'MonitorQuery', id: string, query: string } } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type UpdateCodeMonitorVariables = Exact<{
  monitor: MonitorEditInput;
  trigger: MonitorEditTriggerInput;
  actions: Array<MonitorEditActionInput>;
}>;


export type UpdateCodeMonitorResult = { __typename?: 'Mutation', updateCodeMonitor: { __typename?: 'Monitor', id: string, description: string, enabled: boolean, trigger: { __typename?: 'MonitorQuery', id: string, query: string }, actions: { __typename?: 'MonitorActionConnection', nodes: Array<{ __typename: 'MonitorEmail', id: string, enabled: boolean, includeResults: boolean, recipients: { __typename?: 'MonitorActionEmailRecipientsConnection', nodes: Array<{ __typename?: 'Org', id: string } | { __typename?: 'User', id: string }> } } | { __typename: 'MonitorSlackWebhook', id: string, enabled: boolean, includeResults: boolean, url: string } | { __typename: 'MonitorWebhook', id: string, enabled: boolean, includeResults: boolean, url: string }> }, owner: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } } };

export type DeleteCodeMonitorVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCodeMonitorResult = { __typename?: 'Mutation', deleteCodeMonitor: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type ResetTriggerQueryTimestampsVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ResetTriggerQueryTimestampsResult = { __typename?: 'Mutation', resetTriggerQueryTimestamps: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SendTestEmailVariables = Exact<{
  namespace: Scalars['ID'];
  description: Scalars['String'];
  email: MonitorEmailInput;
}>;


export type SendTestEmailResult = { __typename?: 'Mutation', triggerTestEmailAction: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SendTestSlackWebhookVariables = Exact<{
  namespace: Scalars['ID'];
  description: Scalars['String'];
  slackWebhook: MonitorSlackWebhookInput;
}>;


export type SendTestSlackWebhookResult = { __typename?: 'Mutation', triggerTestSlackWebhookAction: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SendTestWebhookVariables = Exact<{
  namespace: Scalars['ID'];
  description: Scalars['String'];
  webhook: MonitorWebhookInput;
}>;


export type SendTestWebhookResult = { __typename?: 'Mutation', triggerTestWebhookAction: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type LsifUploadsAuditLogsFields = { __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> };

export type GetRepoIdVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetRepoIdResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string } | null };

export type AutoIndexJobDescriptionFields = { __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } };

export type AutoIndexLsifIndexStepsFields = { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } };

export type AutoIndexLsifPreIndexFields = { __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> };

export type AutoIndexLsifIndexFields = { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null };

export type InferAutoIndexJobsForRepoVariables = Exact<{
  repository: Scalars['ID'];
  rev: InputMaybe<Scalars['String']>;
  script: InputMaybe<Scalars['String']>;
}>;


export type InferAutoIndexJobsForRepoResult = { __typename?: 'Query', inferAutoIndexJobsForRepo: { __typename?: 'InferAutoIndexJobsResult', inferenceOutput: string, jobs: Array<{ __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } }> } };

export type InferredIndexConfigurationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InferredIndexConfigurationResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename: 'Repository', indexConfiguration: { __typename?: 'IndexConfiguration', inferredConfiguration: { __typename?: 'InferredConfiguration', configuration: string, parsedConfiguration: Array<{ __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } }> | null } | null } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryInferredIndexConfigurationFields = { __typename: 'Repository', indexConfiguration: { __typename?: 'IndexConfiguration', inferredConfiguration: { __typename?: 'InferredConfiguration', configuration: string, parsedConfiguration: Array<{ __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } }> | null } | null } | null };

export type IndexConfigurationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IndexConfigurationResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename: 'Repository', indexConfiguration: { __typename?: 'IndexConfiguration', configuration: string | null, parsedConfiguration: Array<{ __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } }> | null } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryIndexConfigurationFields = { __typename: 'Repository', indexConfiguration: { __typename?: 'IndexConfiguration', configuration: string | null, parsedConfiguration: Array<{ __typename?: 'AutoIndexJobDescription', comparisonKey: string, root: string, indexer: { __typename?: 'CodeIntelIndexer', key: string, imageName: string | null, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string> }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, commands: Array<string>, requestedEnvVars: Array<string> | null } } }> | null } | null };

export type CodeIntelligenceConfigurationPoliciesVariables = Exact<{
  repository: InputMaybe<Scalars['ID']>;
  query: InputMaybe<Scalars['String']>;
  forDataRetention: InputMaybe<Scalars['Boolean']>;
  forPreciseIndexing: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  protected: InputMaybe<Scalars['Boolean']>;
}>;


export type CodeIntelligenceConfigurationPoliciesResult = { __typename?: 'Query', codeIntelligenceConfigurationPolicies: { __typename?: 'CodeIntelligenceConfigurationPolicyConnection', totalCount: number | null, nodes: Array<{ __typename: 'CodeIntelligenceConfigurationPolicy', id: string, name: string, repositoryPatterns: Array<string> | null, type: GitObjectType, pattern: string, protected: boolean, retentionEnabled: boolean, retentionDurationHours: number | null, retainIntermediateCommits: boolean, indexingEnabled: boolean, syntacticIndexingEnabled: boolean | null, indexCommitMaxAgeHours: number | null, indexIntermediateCommits: boolean, repository: { __typename?: 'CodeIntelRepository', id: string, name: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type CodeIntelligenceConfigurationPolicyFields = { __typename: 'CodeIntelligenceConfigurationPolicy', id: string, name: string, repositoryPatterns: Array<string> | null, type: GitObjectType, pattern: string, protected: boolean, retentionEnabled: boolean, retentionDurationHours: number | null, retainIntermediateCommits: boolean, indexingEnabled: boolean, syntacticIndexingEnabled: boolean | null, indexCommitMaxAgeHours: number | null, indexIntermediateCommits: boolean, repository: { __typename?: 'CodeIntelRepository', id: string, name: string } | null };

export type DeleteCodeIntelligenceConfigurationPolicyVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCodeIntelligenceConfigurationPolicyResult = { __typename?: 'Mutation', deleteCodeIntelligenceConfigurationPolicy: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type CodeGraphInferenceScriptVariables = Exact<{ [key: string]: never; }>;


export type CodeGraphInferenceScriptResult = { __typename?: 'Query', codeIntelligenceInferenceScript: string };

export type CodeIntelligenceConfigurationPolicyVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CodeIntelligenceConfigurationPolicyResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy', id: string, name: string, repositoryPatterns: Array<string> | null, type: GitObjectType, pattern: string, protected: boolean, retentionEnabled: boolean, retentionDurationHours: number | null, retainIntermediateCommits: boolean, indexingEnabled: boolean, syntacticIndexingEnabled: boolean | null, indexCommitMaxAgeHours: number | null, indexIntermediateCommits: boolean, repository: { __typename?: 'CodeIntelRepository', id: string, name: string } | null } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type PreviewGitObjectFilterVariables = Exact<{
  id: Scalars['ID'];
  type: GitObjectType;
  pattern: Scalars['String'];
  countObjectsYoungerThanHours: InputMaybe<Scalars['Int']>;
  first: InputMaybe<Scalars['Int']>;
}>;


export type PreviewGitObjectFilterResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename: 'Repository', previewGitObjectFilter: { __typename?: 'GitObjectFilterPreview', totalCount: number, totalCountYoungerThanThreshold: number | null, nodes: Array<{ __typename?: 'CodeIntelGitObject', name: string, rev: string, committedAt: string }> } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryPreviewGitObjectFilter = { __typename: 'Repository', previewGitObjectFilter: { __typename?: 'GitObjectFilterPreview', totalCount: number, totalCountYoungerThanThreshold: number | null, nodes: Array<{ __typename?: 'CodeIntelGitObject', name: string, rev: string, committedAt: string }> } };

export type PreviewRepositoryFilterVariables = Exact<{
  patterns: Array<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
}>;


export type PreviewRepositoryFilterResult = { __typename?: 'Query', previewRepositoryFilter: { __typename?: 'RepositoryFilterPreview', totalCount: number, totalMatches: number, limit: number | null, nodes: Array<{ __typename?: 'CodeIntelRepository', name: string, url: string, externalRepository: { __typename?: 'CodeIntelExternalRepository', serviceID: string, serviceType: string } | null }> } };

export type CreateCodeIntelligenceConfigurationPolicyVariables = Exact<{
  repositoryId: InputMaybe<Scalars['ID']>;
  repositoryPatterns: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  type: GitObjectType;
  pattern: Scalars['String'];
  retentionEnabled: Scalars['Boolean'];
  retentionDurationHours: InputMaybe<Scalars['Int']>;
  retainIntermediateCommits: Scalars['Boolean'];
  indexingEnabled: Scalars['Boolean'];
  syntacticIndexingEnabled: Scalars['Boolean'];
  indexCommitMaxAgeHours: InputMaybe<Scalars['Int']>;
  indexIntermediateCommits: Scalars['Boolean'];
}>;


export type CreateCodeIntelligenceConfigurationPolicyResult = { __typename?: 'Mutation', createCodeIntelligenceConfigurationPolicy: { __typename?: 'CodeIntelligenceConfigurationPolicy', id: string } };

export type UpdateCodeIntelligenceConfigurationPolicyVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  repositoryPatterns: InputMaybe<Array<Scalars['String']>>;
  type: GitObjectType;
  pattern: Scalars['String'];
  retentionEnabled: Scalars['Boolean'];
  retentionDurationHours: InputMaybe<Scalars['Int']>;
  retainIntermediateCommits: Scalars['Boolean'];
  indexingEnabled: Scalars['Boolean'];
  syntacticIndexingEnabled: Scalars['Boolean'];
  indexCommitMaxAgeHours: InputMaybe<Scalars['Int']>;
  indexIntermediateCommits: Scalars['Boolean'];
}>;


export type UpdateCodeIntelligenceConfigurationPolicyResult = { __typename?: 'Mutation', updateCodeIntelligenceConfigurationPolicy: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type UpdateRepositoryIndexConfigurationVariables = Exact<{
  id: Scalars['ID'];
  content: Scalars['String'];
}>;


export type UpdateRepositoryIndexConfigurationResult = { __typename?: 'Mutation', updateRepositoryIndexConfiguration: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type UpdateCodeGraphInferenceScriptVariables = Exact<{
  script: Scalars['String'];
}>;


export type UpdateCodeGraphInferenceScriptResult = { __typename?: 'Mutation', updateCodeIntelligenceInferenceScript: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DashboardRepoFields = { __typename?: 'CodeIntelRepository', name: string, url: string, externalRepository: { __typename?: 'CodeIntelExternalRepository', serviceID: string, serviceType: string } | null };

export type GlobalCodeIntelStatusVariables = Exact<{ [key: string]: never; }>;


export type GlobalCodeIntelStatusResult = { __typename?: 'Query', codeIntelSummary: { __typename?: 'CodeIntelSummary', numRepositoriesWithCodeIntelligence: number, repositoriesWithErrors: { __typename?: 'CodeIntelRepositoryWithErrorConnection', nodes: Array<{ __typename?: 'CodeIntelRepositoryWithError', count: number, repository: { __typename?: 'CodeIntelRepository', id: string, name: string, url: string, externalRepository: { __typename?: 'CodeIntelExternalRepository', serviceID: string, serviceType: string } | null } }> }, repositoriesWithConfiguration: { __typename?: 'CodeIntelRepositoryWithConfigurationConnection', nodes: Array<{ __typename?: 'CodeIntelRepositoryWithConfiguration', repository: { __typename?: 'CodeIntelRepository', id: string, name: string, url: string, externalRepository: { __typename?: 'CodeIntelExternalRepository', serviceID: string, serviceType: string } | null }, indexers: Array<{ __typename?: 'IndexerWithCount', count: number, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null }> }> } | null } };

export type InferredAvailableIndexersFields = { __typename?: 'InferredAvailableIndexers', roots: Array<string>, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } };

export type InferredAvailableIndexersWithKeysFields = { __typename?: 'InferredAvailableIndexers', indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string }, rootsWithKeys: Array<{ __typename?: 'RootWithKey', root: string, comparisonKey: string }> };

export type RepoCodeIntelStatusCommitGraphFields = { __typename?: 'CodeIntelligenceCommitGraph', stale: boolean, updatedAt: string | null };

export type RepoCodeIntelStatusSummaryFields = { __typename?: 'CodeIntelRepositorySummary', lastIndexScan: string | null, lastUploadRetentionScan: string | null, recentActivity: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }>, availableIndexers: Array<{ __typename?: 'InferredAvailableIndexers', indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string }, rootsWithKeys: Array<{ __typename?: 'RootWithKey', root: string, comparisonKey: string }> }> };

export type RepoCodeIntelStatusVariables = Exact<{
  repository: Scalars['String'];
}>;


export type RepoCodeIntelStatusResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, codeIntelSummary: { __typename?: 'CodeIntelRepositorySummary', lastIndexScan: string | null, lastUploadRetentionScan: string | null, recentActivity: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }>, availableIndexers: Array<{ __typename?: 'InferredAvailableIndexers', indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string }, rootsWithKeys: Array<{ __typename?: 'RootWithKey', root: string, comparisonKey: string }> }> }, codeIntelligenceCommitGraph: { __typename?: 'CodeIntelligenceCommitGraph', stale: boolean, updatedAt: string | null } } | null };

export type VisibleIndexesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
}>;


export type VisibleIndexesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', blob: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', visibleIndexes: Array<{ __typename?: 'PreciseIndex', id: string, uploadedAt: string | null, inputCommit: string, indexer: { __typename?: 'CodeIntelIndexer', name: string, url: string } | null }> | null } | null } | null } | null } | null };

export type PreciseIndexDependencyGraphVariables = Exact<{
  dependencyOf: InputMaybe<Scalars['ID']>;
  dependentOf: InputMaybe<Scalars['ID']>;
  query: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type PreciseIndexDependencyGraphResult = { __typename?: 'Query', preciseIndexes: { __typename?: 'PreciseIndexConnection', totalCount: number | null, nodes: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type PreciseIndexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PreciseIndexResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type PreciseIndexRetentionVariables = Exact<{
  id: Scalars['ID'];
  matchesOnly: Scalars['Boolean'];
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
  numReferences: InputMaybe<Scalars['Int']>;
}>;


export type PreciseIndexRetentionResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex', retentionPolicyOverview: { __typename: 'CodeIntelligenceRetentionPolicyMatchesConnection', totalCount: number | null, nodes: Array<{ __typename: 'CodeIntelligenceRetentionPolicyMatch', matches: boolean, protectingCommits: Array<string> | null, configurationPolicy: { __typename: 'CodeIntelligenceConfigurationPolicy', id: string, name: string, type: GitObjectType, retentionDurationHours: number | null } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null, preciseIndexes: { __typename: 'PreciseIndexConnection', totalCount: number | null, nodes: Array<{ __typename?: 'PreciseIndex', id: string, inputCommit: string, inputRoot: string, projectRoot: { __typename?: 'CodeIntelGitTree', repository: { __typename?: 'CodeIntelRepository', name: string, id: string } } | null }> } };

export type PreciseIndexesVariables = Exact<{
  repo: InputMaybe<Scalars['ID']>;
  states: InputMaybe<Array<PreciseIndexState>>;
  indexerKey: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type PreciseIndexesResult = { __typename?: 'Query', preciseIndexes: { __typename?: 'PreciseIndexConnection', totalCount: number | null, nodes: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type CodeIntelIndexerFields = { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string };

export type PreciseIndexFields = { __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null };

export type LsifIndexStepsFields = { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> };

export type ExecutionLogEntryFields = { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null };

export type PreciseIndexAuditLogFields = { __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> };

export type PreciseIndexConnectionFields = { __typename?: 'PreciseIndexConnection', totalCount: number | null, nodes: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type DeletePreciseIndexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePreciseIndexResult = { __typename?: 'Mutation', deletePreciseIndex: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DeletePreciseIndexesVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
  states: InputMaybe<Array<PreciseIndexState>>;
  indexerKey: InputMaybe<Scalars['String']>;
  repo: InputMaybe<Scalars['ID']>;
  isLatestForRepo: InputMaybe<Scalars['Boolean']>;
}>;


export type DeletePreciseIndexesResult = { __typename?: 'Mutation', deletePreciseIndexes: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type QueueAutoIndexJobsForRepoVariables = Exact<{
  id: Scalars['ID'];
  rev: InputMaybe<Scalars['String']>;
}>;


export type QueueAutoIndexJobsForRepoResult = { __typename?: 'Mutation', queueAutoIndexJobsForRepo: Array<{ __typename: 'PreciseIndex', id: string, inputCommit: string, tags: Array<string>, inputRoot: string, inputIndexer: string, state: PreciseIndexState, queuedAt: string | null, uploadedAt: string | null, indexingStartedAt: string | null, indexingFinishedAt: string | null, processingStartedAt: string | null, processingFinishedAt: string | null, failure: string | null, placeInQueue: number | null, shouldReindex: boolean, isLatestForRepo: boolean, projectRoot: { __typename?: 'CodeIntelGitTree', url: string, path: string, repository: { __typename?: 'CodeIntelRepository', url: string, name: string }, commit: { __typename?: 'CodeIntelCommit', url: string, oid: string, abbreviatedOID: string } } | null, indexer: { __typename?: 'CodeIntelIndexer', key: string, name: string, url: string } | null, steps: { __typename?: 'IndexSteps', setup: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }>, preIndex: Array<{ __typename?: 'PreIndexStep', root: string, image: string, commands: Array<string>, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }>, index: { __typename?: 'IndexStep', indexerArgs: Array<string>, outfile: string | null, logEntry: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null }, upload: { __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null } | null, teardown: Array<{ __typename?: 'ExecutionLogEntry', key: string, command: Array<string>, startTime: string, exitCode: number | null, out: string, durationMilliseconds: number | null }> } | null, auditLogs: Array<{ __typename?: 'LSIFUploadAuditLog', logTimestamp: string, reason: string | null, operation: AuditLogOperation, changedColumns: Array<{ __typename?: 'AuditLogColumnChange', column: string, old: string | null, new: string | null }> }> | null }> };

export type ReindexPreciseIndexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReindexPreciseIndexResult = { __typename?: 'Mutation', reindexPreciseIndex: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ReindexPreciseIndexesVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
  states: InputMaybe<Array<PreciseIndexState>>;
  indexerKey: InputMaybe<Scalars['String']>;
  repo: InputMaybe<Scalars['ID']>;
  isLatestForRepo: InputMaybe<Scalars['Boolean']>;
}>;


export type ReindexPreciseIndexesResult = { __typename?: 'Mutation', reindexPreciseIndexes: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type IndexerListVariables = Exact<{ [key: string]: never; }>;


export type IndexerListResult = { __typename?: 'Query', indexerKeys: Array<string> };

export type RankingSummaryFields = { __typename?: 'RankingSummary', graphKey: string, visibleToZoekt: boolean, pathMapperProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number }, referenceMapperProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number }, reducerProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number } | null };

export type RankingSummaryProgressFields = { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number };

export type RankingSummaryVariables = Exact<{ [key: string]: never; }>;


export type RankingSummaryResult = { __typename?: 'Query', rankingSummary: { __typename?: 'GlobalRankingSummary', derivativeGraphKey: string | null, nextJobStartsAt: string | null, numExportedIndexes: number, numTargetIndexes: number, numRepositoriesWithoutCurrentRanks: number, rankingSummary: Array<{ __typename?: 'RankingSummary', graphKey: string, visibleToZoekt: boolean, pathMapperProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number }, referenceMapperProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number }, reducerProgress: { __typename?: 'RankingSummaryProgress', startedAt: string, completedAt: string | null, processed: number, total: number } | null }> } };

export type BumpDerivativeGraphKeyVariables = Exact<{ [key: string]: never; }>;


export type BumpDerivativeGraphKeyResult = { __typename?: 'Mutation', bumpDerivativeGraphKey: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type DeleteRankingProgressVariables = Exact<{
  graphKey: Scalars['String'];
}>;


export type DeleteRankingProgressResult = { __typename?: 'Mutation', deleteRankingProgress: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ExecutorFields = { __typename: 'Executor', id: string, hostname: string, queueName: string | null, queueNames: Array<string> | null, active: boolean, os: string, compatibility: ExecutorCompatibility | null, architecture: string, dockerVersion: string, executorVersion: string, gitVersion: string, igniteVersion: string, srcCliVersion: string, firstSeenAt: string, lastSeenAt: string };

export type ExecutorsVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
  active: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type ExecutorsResult = { __typename?: 'Query', executors: { __typename?: 'ExecutorConnection', totalCount: number, nodes: Array<{ __typename: 'Executor', id: string, hostname: string, queueName: string | null, queueNames: Array<string> | null, active: boolean, os: string, compatibility: ExecutorCompatibility | null, architecture: string, dockerVersion: string, executorVersion: string, gitVersion: string, igniteVersion: string, srcCliVersion: string, firstSeenAt: string, lastSeenAt: string }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type ExecutorConnectionFields = { __typename?: 'ExecutorConnection', totalCount: number, nodes: Array<{ __typename: 'Executor', id: string, hostname: string, queueName: string | null, queueNames: Array<string> | null, active: boolean, os: string, compatibility: ExecutorCompatibility | null, architecture: string, dockerVersion: string, executorVersion: string, gitVersion: string, igniteVersion: string, srcCliVersion: string, firstSeenAt: string, lastSeenAt: string }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type ExecutorSecretFields = { __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null };

export type CreateExecutorSecretVariables = Exact<{
  scope: ExecutorSecretScope;
  namespace: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  value: Scalars['String'];
}>;


export type CreateExecutorSecretResult = { __typename?: 'Mutation', createExecutorSecret: { __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null } };

export type UpdateExecutorSecretVariables = Exact<{
  scope: ExecutorSecretScope;
  secret: Scalars['ID'];
  value: Scalars['String'];
}>;


export type UpdateExecutorSecretResult = { __typename?: 'Mutation', updateExecutorSecret: { __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null } };

export type DeleteExecutorSecretVariables = Exact<{
  scope: ExecutorSecretScope;
  id: Scalars['ID'];
}>;


export type DeleteExecutorSecretResult = { __typename?: 'Mutation', deleteExecutorSecret: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ExecutorSecretConnectionFields = { __typename?: 'ExecutorSecretConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null }> };

export type UserExecutorSecretsVariables = Exact<{
  user: Scalars['ID'];
  scope: ExecutorSecretScope;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type UserExecutorSecretsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', executorSecrets: { __typename?: 'ExecutorSecretConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null }> } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type OrgExecutorSecretsVariables = Exact<{
  org: Scalars['ID'];
  scope: ExecutorSecretScope;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type OrgExecutorSecretsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org', executorSecrets: { __typename?: 'ExecutorSecretConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null }> } } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GlobalExecutorSecretsVariables = Exact<{
  scope: ExecutorSecretScope;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type GlobalExecutorSecretsResult = { __typename?: 'Query', executorSecrets: { __typename?: 'ExecutorSecretConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename?: 'ExecutorSecret', id: string, key: string, scope: ExecutorSecretScope, overwritesGlobalSecret: boolean, createdAt: string, updatedAt: string, creator: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string } | null, namespace: { __typename?: 'Org', id: string, namespaceName: string, url: string } | { __typename?: 'User', id: string, namespaceName: string, url: string } | null }> } };

export type ExecutorSecretAccessLogsVariables = Exact<{
  secret: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type ExecutorSecretAccessLogsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret', accessLogs: { __typename?: 'ExecutorSecretAccessLogConnection', totalCount: number, nodes: Array<{ __typename?: 'ExecutorSecretAccessLog', id: string, createdAt: string, user: { __typename?: 'User', id: string, email: string, username: string, displayName: string | null, url: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ExecutorSecretAccessLogConnectionFields = { __typename?: 'ExecutorSecretAccessLogConnection', totalCount: number, nodes: Array<{ __typename?: 'ExecutorSecretAccessLog', id: string, createdAt: string, user: { __typename?: 'User', id: string, email: string, username: string, displayName: string | null, url: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type ExecutorSecretAccessLogFields = { __typename?: 'ExecutorSecretAccessLog', id: string, createdAt: string, user: { __typename?: 'User', id: string, email: string, username: string, displayName: string | null, url: string } | null };

export type GetFirstAvailableDashboardVariables = Exact<{
  lastVisitedDashboardId: InputMaybe<Scalars['ID']>;
}>;


export type GetFirstAvailableDashboardResult = { __typename?: 'Query', lastVisitedDashboard: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string }> }, firstAvailableDashboard: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string }> } };

export type RetryInsightSeriesBackfillBlankVariables = Exact<{ [key: string]: never; }>;


export type RetryInsightSeriesBackfillBlankResult = { __typename?: 'Mutation', retryInsightSeriesBackfill: { __typename?: 'InsightBackfillQueueItem', id: string } };

export type RetryCodeInsightsJobsVariables = Exact<{ [key: string]: never; }>;


export type RetryCodeInsightsJobsResult = { __typename: 'Mutation' };

export type MoveToFrontCodeInsightsJobsVariables = Exact<{ [key: string]: never; }>;


export type MoveToFrontCodeInsightsJobsResult = { __typename: 'Mutation' };

export type MoveToBackCodeInsighsJobsVariables = Exact<{ [key: string]: never; }>;


export type MoveToBackCodeInsighsJobsResult = { __typename: 'Mutation' };

export type InsightJob = { __typename?: 'InsightBackfillQueueItem', id: string, insightViewTitle: string, seriesLabel: string, seriesSearchQuery: string, backfillQueueStatus: { __typename?: 'BackfillStatus', state: InsightQueueItemState, queuePosition: number | null, errors: Array<string> | null, cost: number | null, percentComplete: number | null, createdAt: string | null, startedAt: string | null, completedAt: string | null, runtime: string | null } };

export type GetCodeInsightsJobsVariables = Exact<{
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<BackfillQueueOrderBy>;
  states: InputMaybe<Array<InsightQueueItemState>>;
}>;


export type GetCodeInsightsJobsResult = { __typename?: 'Query', insightAdminBackfillQueue: { __typename?: 'InsightBackfillQueueItemConnection', totalCount: number, nodes: Array<{ __typename?: 'InsightBackfillQueueItem', id: string, insightViewTitle: string, seriesLabel: string, seriesSearchQuery: string, backfillQueueStatus: { __typename?: 'BackfillStatus', state: InsightQueueItemState, queuePosition: number | null, errors: Array<string> | null, cost: number | null, percentComplete: number | null, createdAt: string | null, startedAt: string | null, completedAt: string | null, runtime: string | null } }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type InsightRepositoriesCountVariables = Exact<{
  query: Scalars['String'];
}>;


export type InsightRepositoriesCountResult = { __typename?: 'Query', previewRepositoriesFromQuery: { __typename?: 'RepositoryPreviewPayload', numberOfRepositories: number | null } };

export type ValidateInsightRepoQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type ValidateInsightRepoQueryResult = { __typename?: 'Query', validateScopedInsightQuery: { __typename?: 'ScopedInsightQueryPayload', isValid: boolean, invalidReason: string | null } };

export type RepositorySearchSuggestionsVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
}>;


export type RepositorySearchSuggestionsResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', nodes: Array<{ __typename?: 'Repository', id: string, name: string }> } };

export type GetSearchContextByNameVariables = Exact<{
  query: Scalars['String'];
}>;


export type GetSearchContextByNameResult = { __typename?: 'Query', searchContexts: { __typename?: 'SearchContextConnection', nodes: Array<{ __typename?: 'SearchContext', spec: string, query: string }> } };

export type GetSearchContextsVariables = Exact<{
  query: Scalars['String'];
}>;


export type GetSearchContextsResult = { __typename?: 'Query', searchContexts: { __typename?: 'SearchContextConnection', nodes: Array<{ __typename?: 'SearchContext', id: string, spec: string, query: string, description: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type GetDashboardsThatHaveInsightVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDashboardsThatHaveInsightResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } }> } | null } | null> }, currentUser: { __typename?: 'User', id: string, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null }> } } | null };

export type InsightsDashboardNode = { __typename?: 'InsightsDashboard', id: string, title: string, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } };

export type InsightsDashboardCurrentUser = { __typename?: 'User', id: string, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null }> } };

export type GetFrozenInsightsCountVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetFrozenInsightsCountResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string } | null> } };

export type DeleteInsightViewVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteInsightViewResult = { __typename?: 'Mutation', deleteInsightView: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type DeleteDashboardVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDashboardResult = { __typename?: 'Mutation', deleteInsightsDashboard: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AddInsightViewToDashboardVariables = Exact<{
  insightViewId: Scalars['ID'];
  dashboardId: Scalars['ID'];
}>;


export type AddInsightViewToDashboardResult = { __typename?: 'Mutation', addInsightViewToDashboard: { __typename?: 'InsightsDashboardPayload', dashboard: { __typename?: 'InsightsDashboard', id: string } } };

export type GetDashboardInsightsVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
}>;


export type GetDashboardInsightsResult = { __typename?: 'Query', insightsDashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, views: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } | null> } | null }> } };

export type InsightSubjectsVariables = Exact<{ [key: string]: never; }>;


export type InsightSubjectsResult = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, name: string, displayName: string | null }> } } | null, site: { __typename?: 'Site', id: string } };

export type GetInsightViewVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  filters: InputMaybe<InsightViewFiltersInput>;
  seriesDisplayOptions: InputMaybe<SeriesDisplayOptionsInput>;
}>;


export type GetInsightViewResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string, dataSeries: Array<{ __typename?: 'InsightsSeries', seriesId: string, label: string, points: Array<{ __typename?: 'InsightDataPoint', dateTime: string, value: number, pointInTimeQuery: string | null }>, status: { __typename?: 'InsightSeriesStatus', isLoadingData: boolean | null, incompleteDatapoints: Array<{ __typename: 'GenericIncompleteDatapointAlert', time: string, reason: string } | { __typename: 'TimeoutDatapointAlert', time: string }> } }> } | null> } };

export type InsightDataNode = { __typename?: 'InsightView', id: string, dataSeries: Array<{ __typename?: 'InsightsSeries', seriesId: string, label: string, points: Array<{ __typename?: 'InsightDataPoint', dateTime: string, value: number, pointInTimeQuery: string | null }>, status: { __typename?: 'InsightSeriesStatus', isLoadingData: boolean | null, incompleteDatapoints: Array<{ __typename: 'GenericIncompleteDatapointAlert', time: string, reason: string } | { __typename: 'TimeoutDatapointAlert', time: string }> } }> };

export type InsightDataSeries = { __typename?: 'InsightsSeries', seriesId: string, label: string, points: Array<{ __typename?: 'InsightDataPoint', dateTime: string, value: number, pointInTimeQuery: string | null }>, status: { __typename?: 'InsightSeriesStatus', isLoadingData: boolean | null, incompleteDatapoints: Array<{ __typename: 'GenericIncompleteDatapointAlert', time: string, reason: string } | { __typename: 'TimeoutDatapointAlert', time: string }> } };

export type InsightViewSeries = { __typename?: 'InsightView', presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> };

export type InsightViewNode = { __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> };

export type GetInsightsVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
}>;


export type GetInsightsResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } | null> } };

export type RemoveInsightViewFromDashboardVariables = Exact<{
  insightId: Scalars['ID'];
  dashboardId: Scalars['ID'];
}>;


export type RemoveInsightViewFromDashboardResult = { __typename?: 'Mutation', removeInsightViewFromDashboard: { __typename?: 'InsightsDashboardPayload', dashboard: { __typename?: 'InsightsDashboard', id: string } } };

export type UpdateLangStatsInsightVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePieChartSearchInsightInput;
}>;


export type UpdateLangStatsInsightResult = { __typename?: 'Mutation', updatePieChartSearchInsight: { __typename?: 'InsightViewPayload', view: { __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } } };

export type UpdateLineChartSearchInsightVariables = Exact<{
  input: UpdateLineChartSearchInsightInput;
  id: Scalars['ID'];
}>;


export type UpdateLineChartSearchInsightResult = { __typename?: 'Mutation', updateLineChartSearchInsight: { __typename?: 'InsightViewPayload', view: { __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } } };

export type CreateDashboardVariables = Exact<{
  input: CreateInsightsDashboardInput;
}>;


export type CreateDashboardResult = { __typename?: 'Mutation', createInsightsDashboard: { __typename?: 'InsightsDashboardPayload', dashboard: { __typename?: 'InsightsDashboard', id: string, title: string, views: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string } | null> } | null, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } } } };

export type NewDashboard = { __typename?: 'InsightsDashboard', id: string, title: string, views: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string } | null> } | null, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } };

export type CreateLangStatsInsightVariables = Exact<{
  input: PieChartSearchInsightInput;
}>;


export type CreateLangStatsInsightResult = { __typename?: 'Mutation', createPieChartSearchInsight: { __typename?: 'InsightViewPayload', view: { __typename?: 'InsightView', id: string } } };

export type CreateSearchBasedInsightVariables = Exact<{
  input: LineChartSearchInsightInput;
}>;


export type CreateSearchBasedInsightResult = { __typename?: 'Mutation', createLineChartSearchInsight: { __typename?: 'InsightViewPayload', view: { __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } } };

export type UpdateDashboardVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateInsightsDashboardInput;
}>;


export type UpdateDashboardResult = { __typename?: 'Mutation', updateInsightsDashboard: { __typename?: 'InsightsDashboardPayload', dashboard: { __typename?: 'InsightsDashboard', id: string, title: string, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } } } };

export type LangStatsInsightContentVariables = Exact<{
  query: Scalars['String'];
  version: SearchVersion;
}>;


export type LangStatsInsightContentResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', limitHit: boolean }, stats: { __typename?: 'SearchResultsStats', languages: Array<{ __typename?: 'LanguageStatistics', name: string, totalLines: number }> } } | null };

export type GetInsightPreviewVariables = Exact<{
  input: SearchInsightPreviewInput;
}>;


export type GetInsightPreviewResult = { __typename?: 'Query', searchInsightPreview: Array<{ __typename?: 'SearchInsightLivePreviewSeries', label: string, points: Array<{ __typename?: 'InsightDataPoint', dateTime: string, value: number, pointInTimeQuery: string | null }> }> };

export type InsightsDashboardsVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
}>;


export type InsightsDashboardsResult = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null }> } } | null, insightsDashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string, grants: { __typename?: 'InsightsPermissionGrants', users: Array<string>, organizations: Array<string>, global: boolean } }> } };

export type SaveInsightAsNewViewVariables = Exact<{
  input: SaveInsightAsNewViewInput;
}>;


export type SaveInsightAsNewViewResult = { __typename?: 'Mutation', saveInsightAsNewView: { __typename?: 'InsightViewPayload', view: { __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } } };

export type IsCodeInsightsLicensedVariables = Exact<{ [key: string]: never; }>;


export type IsCodeInsightsLicensedResult = { __typename?: 'Query', enterpriseLicenseHasFeature: boolean };

export type TemporarySettingsVariables = Exact<{ [key: string]: never; }>;


export type TemporarySettingsResult = { __typename?: 'Query', temporarySettings: { __typename?: 'TemporarySettings', contents: string } };

export type GetAllInsightConfigurationsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type GetAllInsightConfigurationsResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', totalCount: number | null, nodes: Array<{ __typename?: 'InsightView', id: string, isFrozen: boolean, dashboardReferenceCount: number, repositoryDefinition: { __typename: 'InsightRepositoryScope', repositories: Array<string> } | { __typename: 'RepositorySearchScope', search: string }, defaultSeriesDisplayOptions: { __typename?: 'SeriesDisplayOptions', limit: number | null, numSamples: number | null, sortOptions: { __typename?: 'SeriesSortOptions', mode: SeriesSortMode | null, direction: SeriesSortDirection | null } }, defaultFilters: { __typename?: 'InsightViewFilters', includeRepoRegex: string | null, excludeRepoRegex: string | null, searchContexts: Array<string> | null }, dashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string, title: string }> } | null, presentation: { __typename: 'LineChartInsightViewPresentation', title: string, seriesPresentation: Array<{ __typename?: 'LineChartDataSeriesPresentation', seriesId: string, label: string, color: string }> } | { __typename: 'PieChartInsightViewPresentation', title: string, otherThreshold: number }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', seriesId: string, query: string, isCalculated: boolean, generatedFromCaptureGroups: boolean, groupBy: GroupByField | null, timeScope: { __typename?: 'InsightIntervalTimeScope', unit: TimeIntervalStepUnit, value: number } }> } | null>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type DashboardInsights = { __typename?: 'InsightsDashboard', views: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string, presentation: { __typename: 'LineChartInsightViewPresentation', title: string } | { __typename: 'PieChartInsightViewPresentation', title: string } } | null> } | null };

export type FindInsightsBySearchTermVariables = Exact<{
  search: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  excludeIds: InputMaybe<Array<Scalars['ID']>>;
}>;


export type FindInsightsBySearchTermResult = { __typename?: 'Query', insightViews: { __typename?: 'InsightViewConnection', totalCount: number | null, nodes: Array<{ __typename?: 'InsightView', id: string, presentation: { __typename: 'LineChartInsightViewPresentation', title: string } | { __typename: 'PieChartInsightViewPresentation', title: string }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', query: string, groupBy: GroupByField | null, generatedFromCaptureGroups: boolean }> } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type AssignableInsight = { __typename?: 'InsightView', id: string, presentation: { __typename: 'LineChartInsightViewPresentation', title: string } | { __typename: 'PieChartInsightViewPresentation', title: string }, dataSeriesDefinitions: Array<{ __typename?: 'SearchInsightDataSeriesDefinition', query: string, groupBy: GroupByField | null, generatedFromCaptureGroups: boolean }> };

export type CheckRepositoryExistsVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;


export type CheckRepositoryExistsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', name: string } | null };

export type GetExampleRepositoryVariables = Exact<{ [key: string]: never; }>;


export type GetExampleRepositoryResult = { __typename?: 'Query', todoRepo: { __typename?: 'Search', results: { __typename?: 'SearchResults', repositories: Array<{ __typename?: 'Repository', name: string }> } } | null, firstRepo: { __typename?: 'Search', results: { __typename?: 'SearchResults', repositories: Array<{ __typename?: 'Repository', name: string }> } } | null };

export type OwnSignalConfig = { __typename?: 'OwnSignalConfiguration', name: string, description: string, isEnabled: boolean, excludedRepoPatterns: Array<string> };

export type GetOwnSignalConfigurationsVariables = Exact<{ [key: string]: never; }>;


export type GetOwnSignalConfigurationsResult = { __typename?: 'Query', ownSignalConfigurations: Array<{ __typename?: 'OwnSignalConfiguration', name: string, description: string, isEnabled: boolean, excludedRepoPatterns: Array<string> }> };

export type UpdateSignalConfigsVariables = Exact<{
  input: UpdateSignalConfigurationsInput;
}>;


export type UpdateSignalConfigsResult = { __typename?: 'Mutation', updateOwnSignalConfigurations: Array<{ __typename?: 'OwnSignalConfiguration', isEnabled: boolean, name: string, description: string, excludedRepoPatterns: Array<string> }> };

export type GetInstanceOwnStatsVariables = Exact<{ [key: string]: never; }>;


export type GetInstanceOwnStatsResult = { __typename?: 'Query', instanceOwnershipStats: { __typename?: 'OwnershipStats', totalFiles: number, totalCodeownedFiles: number, totalOwnedFiles: number, totalAssignedOwnershipFiles: number, updatedAt: string | null } };

export type IngestedCodeowners = { __typename?: 'CodeownersIngestedFile', contents: string, updatedAt: string };

export type GetIngestedCodeownersVariables = Exact<{
  repoID: Scalars['ID'];
}>;


export type GetIngestedCodeownersResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', ingestedCodeowners: { __typename?: 'CodeownersIngestedFile', contents: string, updatedAt: string } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type AddIngestedCodeownersVariables = Exact<{
  repoID: Scalars['ID'];
  contents: Scalars['String'];
}>;


export type AddIngestedCodeownersResult = { __typename?: 'Mutation', addCodeownersFile: { __typename?: 'CodeownersIngestedFile', contents: string, updatedAt: string } };

export type UpdateIngestedCodeownersVariables = Exact<{
  repoID: Scalars['ID'];
  contents: Scalars['String'];
}>;


export type UpdateIngestedCodeownersResult = { __typename?: 'Mutation', updateCodeownersFile: { __typename?: 'CodeownersIngestedFile', contents: string, updatedAt: string } };

export type DeleteIngestedCodeownersVariables = Exact<{
  repoID: Scalars['ID'];
}>;


export type DeleteIngestedCodeownersResult = { __typename?: 'Mutation', deleteCodeownersFiles: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type PermissionFields = { __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string };

export type RoleFields = { __typename: 'Role', id: string, name: string, system: boolean, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } };

export type AllRolesVariables = Exact<{ [key: string]: never; }>;


export type AllRolesResult = { __typename?: 'Query', roles: { __typename: 'RoleConnection', totalCount: number, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ __typename: 'Role', id: string, name: string, system: boolean, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } }> } };

export type CreateRoleVariables = Exact<{
  name: Scalars['String'];
  permissions: Array<Scalars['ID']>;
}>;


export type CreateRoleResult = { __typename?: 'Mutation', createRole: { __typename: 'Role', id: string, name: string, system: boolean, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } } };

export type DeleteRoleVariables = Exact<{
  role: Scalars['ID'];
}>;


export type DeleteRoleResult = { __typename?: 'Mutation', deleteRole: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AllPermissionsVariables = Exact<{ [key: string]: never; }>;


export type AllPermissionsResult = { __typename?: 'Query', permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } };

export type SetPermissionsVariables = Exact<{
  role: Scalars['ID'];
  permissions: Array<Scalars['ID']>;
}>;


export type SetPermissionsResult = { __typename?: 'Mutation', setPermissions: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RepoPermissionsInfoVariables = Exact<{
  repoID: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type RepoPermissionsInfoResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', permissionsInfo: { __typename?: 'PermissionsInfo', syncedAt: string | null, updatedAt: string | null, unrestricted: boolean, users: { __typename?: 'PermissionsInfoUsersConnection', totalCount: number, nodes: Array<{ __typename?: 'PermissionsInfoUserNode', id: string, reason: string, updatedAt: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, email: string, avatarURL: string | null } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type RepoPermissionsInfoRepoNode = { __typename?: 'Repository', permissionsInfo: { __typename?: 'PermissionsInfo', syncedAt: string | null, updatedAt: string | null, unrestricted: boolean, users: { __typename?: 'PermissionsInfoUsersConnection', totalCount: number, nodes: Array<{ __typename?: 'PermissionsInfoUserNode', id: string, reason: string, updatedAt: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, email: string, avatarURL: string | null } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null } | null };

export type PermissionsInfoUserFields = { __typename?: 'PermissionsInfoUserNode', id: string, reason: string, updatedAt: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, email: string, avatarURL: string | null } | null };

export type RepositoryRecordedCommandsVariables = Exact<{
  id: Scalars['ID'];
  offset: Scalars['Int'];
  limit: InputMaybe<Scalars['Int']>;
}>;


export type RepositoryRecordedCommandsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', isRecordingEnabled: boolean, recordedCommands: { __typename?: 'RecordedCommandConnection', totalCount: number, nodes: Array<{ __typename?: 'RecordedCommand', path: string, start: string, duration: number, command: string, dir: string, output: string, isSuccess: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type RepositoryRecordedCommandFields = { __typename?: 'RecordedCommand', path: string, start: string, duration: number, command: string, dir: string, output: string, isSuccess: boolean };

export type DeleteSearchJobVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSearchJobResult = { __typename?: 'Mutation', deleteSearchJob: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CancelSearchJobVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CancelSearchJobResult = { __typename?: 'Mutation', cancelSearchJob: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type CreateSearchJobVariables = Exact<{
  query: Scalars['String'];
}>;


export type CreateSearchJobResult = { __typename?: 'Mutation', createSearchJob: { __typename?: 'SearchJob', id: string, query: string, state: SearchJobState, URL: string | null, startedAt: string | null, finishedAt: string | null, repoStats: { __typename?: 'SearchJobStats', total: number, completed: number, failed: number, inProgress: number }, creator: { __typename?: 'User', id: string, displayName: string | null, username: string, avatarURL: string | null } | null } };

export type SearchJobNode = { __typename?: 'SearchJob', id: string, query: string, state: SearchJobState, URL: string | null, logURL: string | null, startedAt: string | null, finishedAt: string | null, repoStats: { __typename?: 'SearchJobStats', total: number, completed: number, failed: number, inProgress: number }, creator: { __typename?: 'User', id: string, displayName: string | null, username: string, avatarURL: string | null } | null };

export type SearchJobsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  before: InputMaybe<Scalars['String']>;
  query: Scalars['String'];
  userIDs: InputMaybe<Array<Scalars['ID']>>;
  states: InputMaybe<Array<SearchJobState>>;
  orderBy: InputMaybe<SearchJobsOrderBy>;
}>;


export type SearchJobsResult = { __typename?: 'Query', searchJobs: { __typename?: 'SearchJobConnection', totalCount: number, nodes: Array<{ __typename?: 'SearchJob', id: string, query: string, state: SearchJobState, URL: string | null, logURL: string | null, startedAt: string | null, finishedAt: string | null, repoStats: { __typename?: 'SearchJobStats', total: number, completed: number, failed: number, inProgress: number }, creator: { __typename?: 'User', id: string, displayName: string | null, username: string, avatarURL: string | null } | null }>, pageInfo: { __typename?: 'BidirectionalPageInfo', startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type UserSuggestion = { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null, siteAdmin: boolean, primaryEmail: { __typename?: 'UserEmail', email: string } | null };

export type GetUsersListVariables = Exact<{
  query: Scalars['String'];
}>;


export type GetUsersListResult = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null, siteAdmin: boolean, primaryEmail: { __typename?: 'UserEmail', email: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type RepositoriesByNamesVariables = Exact<{
  names: Array<Scalars['String']>;
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
}>;


export type RepositoriesByNamesResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', nodes: Array<{ __typename?: 'Repository', id: string, name: string }>, pageInfo: { __typename?: 'ConnectionPageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type setDefaultSearchContextVariables = Exact<{
  searchContextID: Scalars['ID'];
  userID: Scalars['ID'];
}>;


export type setDefaultSearchContextResult = { __typename?: 'Mutation', setDefaultSearchContext: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type createSearchContextStarVariables = Exact<{
  searchContextID: Scalars['ID'];
  userID: Scalars['ID'];
}>;


export type createSearchContextStarResult = { __typename?: 'Mutation', createSearchContextStar: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type deleteSearchContextStarVariables = Exact<{
  searchContextID: Scalars['ID'];
  userID: Scalars['ID'];
}>;


export type deleteSearchContextStarResult = { __typename?: 'Mutation', deleteSearchContextStar: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AuthProviderFields = { __typename?: 'AuthProvider', serviceType: string, serviceID: string, clientID: string, displayName: string, isBuiltin: boolean, authenticationURL: string | null };

export type AuthProvidersVariables = Exact<{ [key: string]: never; }>;


export type AuthProvidersResult = { __typename?: 'Query', site: { __typename?: 'Site', authProviders: { __typename?: 'AuthProviderConnection', totalCount: number, nodes: Array<{ __typename?: 'AuthProvider', serviceType: string, serviceID: string, clientID: string, displayName: string, isBuiltin: boolean, authenticationURL: string | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } };

export type ExternalAccountsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  user: InputMaybe<Scalars['ID']>;
  serviceType: InputMaybe<Scalars['String']>;
  serviceID: InputMaybe<Scalars['String']>;
  clientID: InputMaybe<Scalars['String']>;
}>;


export type ExternalAccountsResult = { __typename?: 'Query', site: { __typename?: 'Site', externalAccounts: { __typename?: 'ExternalAccountConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalAccount', id: string, serviceType: string, serviceID: string, clientID: string, accountID: string, createdAt: string, updatedAt: string, refreshURL: string | null, accountData: unknown | null, user: { __typename?: 'User', id: string, username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } };

export type GetAllRolesAndUserRolesVariables = Exact<{
  user: Scalars['ID'];
}>;


export type GetAllRolesAndUserRolesResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User', roles: { __typename?: 'RoleConnection', nodes: Array<{ __typename: 'Role', id: string, name: string, system: boolean, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } }> } } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null, roles: { __typename?: 'RoleConnection', nodes: Array<{ __typename: 'Role', id: string, name: string, system: boolean, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename: 'Permission', id: string, namespace: PermissionNamespace, action: string, displayName: string }> } }> } };

export type SetRolesForUserVariables = Exact<{
  user: Scalars['ID'];
  roles: Array<Scalars['ID']>;
}>;


export type SetRolesForUserResult = { __typename?: 'Mutation', setRoles: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SiteAdminPreciseIndexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SiteAdminPreciseIndexResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex', projectRoot: { __typename?: 'CodeIntelGitTree', commit: { __typename?: 'CodeIntelCommit', repository: { __typename?: 'CodeIntelRepository', name: string, url: string } } } | null } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type ProductLicenseInfoVariables = Exact<{ [key: string]: never; }>;


export type ProductLicenseInfoResult = { __typename?: 'Query', site: { __typename?: 'Site', productSubscription: { __typename?: 'ProductSubscriptionStatus', productNameWithBrand: string, actualUserCount: number, actualUserCountDate: string, noLicenseWarningUserCount: number | null, license: { __typename?: 'ProductLicenseInfo', isFreePlan: boolean, tags: Array<string>, userCount: number, expiresAt: string, isValid: boolean, licenseInvalidityReason: string | null } } }, users: { __typename?: 'UserConnection', totalCount: number } };

export type ProductLicenseInfoLicenseFields = { __typename?: 'ProductLicenseInfo', isFreePlan: boolean, tags: Array<string>, userCount: number, expiresAt: string, isValid: boolean, licenseInvalidityReason: string | null };

export type ExternalAccountFields = { __typename?: 'ExternalAccount', id: string, serviceType: string, serviceID: string, clientID: string, accountID: string, createdAt: string, updatedAt: string, refreshURL: string | null, accountData: unknown | null, user: { __typename?: 'User', id: string, username: string } };

export type ExternalAccountsConnectionFields = { __typename?: 'ExternalAccountConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalAccount', id: string, serviceType: string, serviceID: string, clientID: string, accountID: string, createdAt: string, updatedAt: string, refreshURL: string | null, accountData: unknown | null, user: { __typename?: 'User', id: string, username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type DeleteExternalAccountVariables = Exact<{
  externalAccount: Scalars['ID'];
}>;


export type DeleteExternalAccountResult = { __typename?: 'Mutation', deleteExternalAccount: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UserEventLogsVariables = Exact<{
  user: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
}>;


export type UserEventLogsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', eventLogs: { __typename?: 'EventLogsConnection', totalCount: number, nodes: Array<{ __typename?: 'EventLog', name: string, source: string, url: string, timestamp: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type UserEventLogsConnectionFields = { __typename?: 'EventLogsConnection', totalCount: number, nodes: Array<{ __typename?: 'EventLog', name: string, source: string, url: string, timestamp: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type UserEventLogFields = { __typename?: 'EventLog', name: string, source: string, url: string, timestamp: string };

export type ScheduleUserPermissionsSyncVariables = Exact<{
  user: Scalars['ID'];
}>;


export type ScheduleUserPermissionsSyncResult = { __typename?: 'Mutation', scheduleUserPermissionsSync: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UserPermissionsInfoVariables = Exact<{
  userID: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type UserPermissionsInfoResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', permissionsInfo: { __typename?: 'PermissionsInfo', updatedAt: string | null, source: PermissionSource | null, repositories: { __typename?: 'PermissionsInfoRepositoriesConnection', totalCount: number, nodes: Array<{ __typename?: 'PermissionsInfoRepositoryNode', id: string, reason: string, updatedAt: string | null, repository: { __typename?: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', serviceType: string } } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null } | null } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type UserPermissionsInfoUserNode = { __typename?: 'User', permissionsInfo: { __typename?: 'PermissionsInfo', updatedAt: string | null, source: PermissionSource | null, repositories: { __typename?: 'PermissionsInfoRepositoriesConnection', totalCount: number, nodes: Array<{ __typename?: 'PermissionsInfoRepositoryNode', id: string, reason: string, updatedAt: string | null, repository: { __typename?: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', serviceType: string } } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } | null } | null };

export type PermissionsInfoRepositoryFields = { __typename?: 'PermissionsInfoRepositoryNode', id: string, reason: string, updatedAt: string | null, repository: { __typename?: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', serviceType: string } } | null };

export type OrgFeatureFlagOverridesVariables = Exact<{ [key: string]: never; }>;


export type OrgFeatureFlagOverridesResult = { __typename?: 'Query', organizationFeatureFlagOverrides: Array<{ __typename?: 'FeatureFlagOverride', value: boolean, namespace: { __typename?: 'Org', id: string } | { __typename?: 'User', id: string }, targetFlag: { __typename?: 'FeatureFlagBoolean', name: string } | { __typename?: 'FeatureFlagRollout', name: string } }> };

export type EvaluateFeatureFlagVariables = Exact<{
  flagName: Scalars['String'];
}>;


export type EvaluateFeatureFlagResult = { __typename?: 'Query', evaluateFeatureFlag: boolean | null };

export type GlobalAlertsSiteFlagsVariables = Exact<{ [key: string]: never; }>;


export type GlobalAlertsSiteFlagsResult = { __typename?: 'Query', site: { __typename?: 'Site', id: string, needsRepositoryConfiguration: boolean, freeUsersExceeded: boolean, alerts: Array<{ __typename?: 'Alert', type: AlertType, message: string, isDismissibleWithKey: string | null }>, productSubscription: { __typename?: 'ProductSubscriptionStatus', noLicenseWarningUserCount: number | null, license: { __typename?: 'ProductLicenseInfo', expiresAt: string } } } };

export type SubmitHappinessFeedbackVariables = Exact<{
  input: HappinessFeedbackSubmissionInput;
}>;


export type SubmitHappinessFeedbackResult = { __typename?: 'Mutation', submitHappinessFeedback: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type LibraryConfigurationVariables = Exact<{ [key: string]: never; }>;


export type LibraryConfigurationResult = { __typename?: 'Query', viewerCanChangeLibraryItemVisibilityToPublic: boolean };

export type FetchSurveyResponsesVariables = Exact<{ [key: string]: never; }>;


export type FetchSurveyResponsesResult = { __typename?: 'Query', surveyResponses: { __typename?: 'SurveyResponseConnection', totalCount: number, nodes: Array<{ __typename?: 'SurveyResponse', email: string | null, score: number, reason: string | null, better: string | null, otherUseCase: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string, emails: Array<{ __typename?: 'UserEmail', email: string }> } | null }> } };

export type SurveyResponseFields = { __typename?: 'SurveyResponse', email: string | null, score: number, reason: string | null, better: string | null, otherUseCase: string | null, createdAt: string, user: { __typename?: 'User', id: string, username: string, emails: Array<{ __typename?: 'UserEmail', email: string }> } | null };

export type FetchAllUsersWithSurveyResponsesVariables = Exact<{
  activePeriod: InputMaybe<UserActivePeriod>;
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type FetchAllUsersWithSurveyResponsesResult = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', id: string, username: string, emails: Array<{ __typename?: 'UserEmail', email: string }>, surveyResponses: Array<{ __typename?: 'SurveyResponse', score: number, reason: string | null, better: string | null, otherUseCase: string | null, createdAt: string }>, usageStatistics: { __typename?: 'UserUsageStatistics', lastActiveTime: string | null } }> } };

export type UserWithSurveyResponseFields = { __typename?: 'User', id: string, username: string, emails: Array<{ __typename?: 'UserEmail', email: string }>, surveyResponses: Array<{ __typename?: 'SurveyResponse', score: number, reason: string | null, better: string | null, otherUseCase: string | null, createdAt: string }>, usageStatistics: { __typename?: 'UserUsageStatistics', lastActiveTime: string | null } };

export type FetchSurveyResponseAggregatesVariables = Exact<{ [key: string]: never; }>;


export type FetchSurveyResponseAggregatesResult = { __typename?: 'Query', surveyResponses: { __typename?: 'SurveyResponseConnection', totalCount: number, last30DaysCount: number, averageScore: number, netPromoterScore: number } };

export type SurveyResponseAggregateFields = { __typename?: 'SurveyResponseConnection', totalCount: number, last30DaysCount: number, averageScore: number, netPromoterScore: number };

export type SubmitSurveyVariables = Exact<{
  input: SurveySubmissionInput;
}>;


export type SubmitSurveyResult = { __typename?: 'Mutation', submitSurvey: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type GetTemporarySettingsVariables = Exact<{ [key: string]: never; }>;


export type GetTemporarySettingsResult = { __typename?: 'Query', temporarySettings: { __typename?: 'TemporarySettings', contents: string } };

export type ViewerAffiliatedNamespacesVariables = Exact<{ [key: string]: never; }>;


export type ViewerAffiliatedNamespacesResult = { __typename?: 'Query', viewer: { __typename?: 'User', affiliatedNamespaces: { __typename?: 'NamespaceConnection', nodes: Array<{ __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }> } } | { __typename?: 'Visitor', affiliatedNamespaces: { __typename?: 'NamespaceConnection', nodes: Array<{ __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }> } } };

export type StatusAndRepoCountVariables = Exact<{ [key: string]: never; }>;


export type StatusAndRepoCountResult = { __typename?: 'Query', repositoryStats: { __typename: 'RepositoryStats', total: number }, statusMessages: Array<{ __typename: 'CloningProgress', message: string } | { __typename: 'ExternalServiceSyncError', externalService: { __typename?: 'ExternalService', id: string, displayName: string } } | { __typename: 'GitserverDiskThresholdReached', message: string } | { __typename: 'GitUpdatesDisabled', message: string } | { __typename: 'IndexingProgress', notIndexed: number, indexed: number } | { __typename: 'NoRepositoriesDetected', message: string } | { __typename: 'SyncError', message: string }> };

export type NotebookFields = { __typename: 'Notebook', id: string, title: string, createdAt: string, updatedAt: string, public: boolean, viewerCanManage: boolean, viewerHasStarred: boolean, patternType: SearchPatternType, creator: { __typename?: 'User', username: string } | null, updater: { __typename?: 'User', username: string } | null, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, stars: { __typename?: 'NotebookStarConnection', totalCount: number }, blocks: Array<{ __typename: 'FileBlock', id: string, fileInput: { __typename: 'FileBlockInput', repositoryName: string, filePath: string, revision: string | null, lineRange: { __typename: 'FileBlockLineRange', startLine: number, endLine: number } | null } } | { __typename: 'MarkdownBlock', id: string, markdownInput: string } | { __typename: 'QueryBlock', id: string, queryInput: string } | { __typename: 'SymbolBlock', id: string, symbolInput: { __typename: 'SymbolBlockInput', repositoryName: string, filePath: string, revision: string | null, lineContext: number, symbolName: string, symbolContainerName: string, symbolKind: SymbolKind } }> };

export type ListNotebooksVariables = Exact<{
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
  orderBy: InputMaybe<NotebooksOrderBy>;
  descending: InputMaybe<Scalars['Boolean']>;
  creatorUserID: InputMaybe<Scalars['ID']>;
  starredByUserID: InputMaybe<Scalars['ID']>;
  namespace: InputMaybe<Scalars['ID']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type ListNotebooksResult = { __typename?: 'Query', notebooks: { __typename?: 'NotebookConnection', totalCount: number, nodes: Array<{ __typename: 'Notebook', id: string, title: string, createdAt: string, updatedAt: string, public: boolean, viewerCanManage: boolean, viewerHasStarred: boolean, patternType: SearchPatternType, creator: { __typename?: 'User', username: string } | null, updater: { __typename?: 'User', username: string } | null, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, stars: { __typename?: 'NotebookStarConnection', totalCount: number }, blocks: Array<{ __typename: 'FileBlock', id: string, fileInput: { __typename: 'FileBlockInput', repositoryName: string, filePath: string, revision: string | null, lineRange: { __typename: 'FileBlockLineRange', startLine: number, endLine: number } | null } } | { __typename: 'MarkdownBlock', id: string, markdownInput: string } | { __typename: 'QueryBlock', id: string, queryInput: string } | { __typename: 'SymbolBlock', id: string, symbolInput: { __typename: 'SymbolBlockInput', repositoryName: string, filePath: string, revision: string | null, lineContext: number, symbolName: string, symbolContainerName: string, symbolKind: SymbolKind } }> }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type FetchNotebookVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FetchNotebookResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename: 'Notebook', id: string, title: string, createdAt: string, updatedAt: string, public: boolean, viewerCanManage: boolean, viewerHasStarred: boolean, patternType: SearchPatternType, creator: { __typename?: 'User', username: string } | null, updater: { __typename?: 'User', username: string } | null, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, stars: { __typename?: 'NotebookStarConnection', totalCount: number }, blocks: Array<{ __typename: 'FileBlock', id: string, fileInput: { __typename: 'FileBlockInput', repositoryName: string, filePath: string, revision: string | null, lineRange: { __typename: 'FileBlockLineRange', startLine: number, endLine: number } | null } } | { __typename: 'MarkdownBlock', id: string, markdownInput: string } | { __typename: 'QueryBlock', id: string, queryInput: string } | { __typename: 'SymbolBlock', id: string, symbolInput: { __typename: 'SymbolBlockInput', repositoryName: string, filePath: string, revision: string | null, lineContext: number, symbolName: string, symbolContainerName: string, symbolKind: SymbolKind } }> } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type CreateNotebookVariables = Exact<{
  notebook: NotebookInput;
}>;


export type CreateNotebookResult = { __typename?: 'Mutation', createNotebook: { __typename: 'Notebook', id: string, title: string, createdAt: string, updatedAt: string, public: boolean, viewerCanManage: boolean, viewerHasStarred: boolean, patternType: SearchPatternType, creator: { __typename?: 'User', username: string } | null, updater: { __typename?: 'User', username: string } | null, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, stars: { __typename?: 'NotebookStarConnection', totalCount: number }, blocks: Array<{ __typename: 'FileBlock', id: string, fileInput: { __typename: 'FileBlockInput', repositoryName: string, filePath: string, revision: string | null, lineRange: { __typename: 'FileBlockLineRange', startLine: number, endLine: number } | null } } | { __typename: 'MarkdownBlock', id: string, markdownInput: string } | { __typename: 'QueryBlock', id: string, queryInput: string } | { __typename: 'SymbolBlock', id: string, symbolInput: { __typename: 'SymbolBlockInput', repositoryName: string, filePath: string, revision: string | null, lineContext: number, symbolName: string, symbolContainerName: string, symbolKind: SymbolKind } }> } };

export type UpdateNotebookVariables = Exact<{
  id: Scalars['ID'];
  notebook: NotebookInput;
}>;


export type UpdateNotebookResult = { __typename?: 'Mutation', updateNotebook: { __typename: 'Notebook', id: string, title: string, createdAt: string, updatedAt: string, public: boolean, viewerCanManage: boolean, viewerHasStarred: boolean, patternType: SearchPatternType, creator: { __typename?: 'User', username: string } | null, updater: { __typename?: 'User', username: string } | null, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, stars: { __typename?: 'NotebookStarConnection', totalCount: number }, blocks: Array<{ __typename: 'FileBlock', id: string, fileInput: { __typename: 'FileBlockInput', repositoryName: string, filePath: string, revision: string | null, lineRange: { __typename: 'FileBlockLineRange', startLine: number, endLine: number } | null } } | { __typename: 'MarkdownBlock', id: string, markdownInput: string } | { __typename: 'QueryBlock', id: string, queryInput: string } | { __typename: 'SymbolBlock', id: string, symbolInput: { __typename: 'SymbolBlockInput', repositoryName: string, filePath: string, revision: string | null, lineContext: number, symbolName: string, symbolContainerName: string, symbolKind: SymbolKind } }> } };

export type DeleteNotebookVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteNotebookResult = { __typename?: 'Mutation', deleteNotebook: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CreateNotebookStarVariables = Exact<{
  notebookID: Scalars['ID'];
}>;


export type CreateNotebookStarResult = { __typename?: 'Mutation', createNotebookStar: { __typename?: 'NotebookStar', createdAt: string } };

export type DeleteNotebookStarVariables = Exact<{
  notebookID: Scalars['ID'];
}>;


export type DeleteNotebookStarResult = { __typename?: 'Mutation', deleteNotebookStar: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SiteConfigVariables = Exact<{ [key: string]: never; }>;


export type SiteConfigResult = { __typename?: 'Query', site: { __typename?: 'Site', configuration: { __typename?: 'SiteConfiguration', id: number, effectiveContents: string, licenseInfo: { __typename?: 'LicenseInfo', tags: Array<string>, userCount: number, expiresAt: string } } }, externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, displayName: string }> } };

export type UpdateSiteConfigurationVariables = Exact<{
  lastID: Scalars['Int'];
  input: Scalars['String'];
}>;


export type UpdateSiteConfigurationResult = { __typename?: 'Mutation', updateSiteConfiguration: boolean };

export type OrganizationVariables = Exact<{
  name: Scalars['String'];
}>;


export type OrganizationResult = { __typename?: 'Query', organization: { __typename: 'Org', id: string, name: string, displayName: string | null, url: string, settingsURL: string | null, viewerIsMember: boolean, viewerCanAdminister: boolean, createdAt: string, viewerPendingInvitation: { __typename?: 'OrganizationInvitation', id: string, respondURL: string | null, sender: { __typename?: 'User', username: string, displayName: string | null, avatarURL: string | null, createdAt: string } } | null } | null };

export type OrgAreaOrganizationFields = { __typename: 'Org', id: string, name: string, displayName: string | null, url: string, settingsURL: string | null, viewerIsMember: boolean, viewerCanAdminister: boolean, createdAt: string, viewerPendingInvitation: { __typename?: 'OrganizationInvitation', id: string, respondURL: string | null, sender: { __typename?: 'User', username: string, displayName: string | null, avatarURL: string | null, createdAt: string } } | null };

export type RespondToOrganizationInvitationVariables = Exact<{
  organizationInvitation: Scalars['ID'];
  responseType: OrganizationInvitationResponseType;
}>;


export type RespondToOrganizationInvitationResult = { __typename?: 'Mutation', respondToOrganizationInvitation: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type OrganizationSettingsMembersVariables = Exact<{
  id: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  before: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type OrganizationSettingsMembersResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename: 'Org', viewerCanAdminister: boolean, members: { __typename?: 'NewUsersConnection', totalCount: number, nodes: Array<{ __typename: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type OrganizationMemberNode = { __typename: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null };

export type CreateOrganizationVariables = Exact<{
  name: Scalars['String'];
  displayName: InputMaybe<Scalars['String']>;
}>;


export type CreateOrganizationResult = { __typename?: 'Mutation', createOrganization: { __typename?: 'Org', id: string, name: string, settingsURL: string | null } };

export type RemoveUserFromOrganizationVariables = Exact<{
  user: Scalars['ID'];
  organization: Scalars['ID'];
}>;


export type RemoveUserFromOrganizationResult = { __typename?: 'Mutation', removeUserFromOrganization: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type UpdateOrganizationVariables = Exact<{
  id: Scalars['ID'];
  displayName: InputMaybe<Scalars['String']>;
}>;


export type UpdateOrganizationResult = { __typename?: 'Mutation', updateOrganization: { __typename?: 'Org', id: string } };

export type RespondToOrgInvitationVariables = Exact<{
  id: Scalars['ID'];
  response: OrganizationInvitationResponseType;
}>;


export type RespondToOrgInvitationResult = { __typename?: 'Mutation', respondToOrganizationInvitation: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type InvitationByTokenVariables = Exact<{
  token: Scalars['String'];
}>;


export type InvitationByTokenResult = { __typename?: 'Query', invitationByToken: { __typename?: 'OrganizationInvitation', createdAt: string, id: string, isVerifiedEmail: boolean | null, recipientEmail: string | null, organization: { __typename?: 'Org', id: string, displayName: string | null, name: string }, sender: { __typename?: 'User', avatarURL: string | null, displayName: string | null, username: string } } };

export type OrganizationInvitationFields = { __typename?: 'OrganizationInvitation', createdAt: string, id: string, isVerifiedEmail: boolean | null, recipientEmail: string | null, organization: { __typename?: 'Org', id: string, displayName: string | null, name: string }, sender: { __typename?: 'User', avatarURL: string | null, displayName: string | null, username: string } };

export type DeleteOrganizationVariables = Exact<{
  organization: Scalars['ID'];
}>;


export type DeleteOrganizationResult = { __typename?: 'Mutation', deleteOrganization: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type InviteUserToOrganizationVariables = Exact<{
  organization: Scalars['ID'];
  username: Scalars['String'];
}>;


export type InviteUserToOrganizationResult = { __typename?: 'Mutation', inviteUserToOrganization: { __typename?: 'InviteUserToOrganizationResult', sentInvitationEmail: boolean, invitationURL: string } };

export type InviteUserToOrganizationFields = { __typename?: 'InviteUserToOrganizationResult', sentInvitationEmail: boolean, invitationURL: string };

export type AddUserToOrganizationVariables = Exact<{
  organization: Scalars['ID'];
  username: Scalars['String'];
}>;


export type AddUserToOrganizationResult = { __typename?: 'Mutation', addUserToOrganization: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type PersonLinkFields = { __typename?: 'Person', email: string, displayName: string, user: { __typename?: 'User', username: string, displayName: string | null, url: string } | null };

export type PromptFields = { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null };

export type PromptsVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['ID']>;
  viewerIsAffiliated: InputMaybe<Scalars['Boolean']>;
  includeDrafts?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  orderBy: PromptsOrderBy;
}>;


export type PromptsResult = { __typename?: 'Query', prompts: { __typename?: 'PromptsConnection', totalCount: number, nodes: Array<{ __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null } } };

export type PromptVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PromptResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type CreatePromptVariables = Exact<{
  input: PromptInput;
}>;


export type CreatePromptResult = { __typename?: 'Mutation', createPrompt: { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type UpdatePromptVariables = Exact<{
  id: Scalars['ID'];
  input: PromptUpdateInput;
}>;


export type UpdatePromptResult = { __typename?: 'Mutation', updatePrompt: { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type TransferPromptOwnershipVariables = Exact<{
  id: Scalars['ID'];
  newOwner: Scalars['ID'];
}>;


export type TransferPromptOwnershipResult = { __typename?: 'Mutation', transferPromptOwnership: { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type ChangePromptVisibilityVariables = Exact<{
  id: Scalars['ID'];
  newVisibility: PromptVisibility;
}>;


export type ChangePromptVisibilityResult = { __typename?: 'Mutation', changePromptVisibility: { __typename: 'Prompt', id: string, name: string, description: string, draft: boolean, visibility: PromptVisibility, nameWithOwner: string, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, definition: { __typename?: 'PromptDefinition', text: string }, owner: { __typename: 'Org', displayName: string | null, id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type DeletePromptVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePromptResult = { __typename?: 'Mutation', deletePrompt: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type CurrentUsernameVariables = Exact<{ [key: string]: never; }>;


export type CurrentUsernameResult = { __typename?: 'Query', currentUser: { __typename?: 'User', username: string } | null };

export type ResolveRevVariables = Exact<{
  repoName: Scalars['String'];
}>;


export type ResolveRevResult = { __typename?: 'Query', repository: { __typename?: 'Repository', mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean }, textSearchIndex: { __typename?: 'RepositoryTextSearchIndex', status: { __typename?: 'RepositoryTextSearchIndexStatus', updatedAt: string } | null } | null } | null };

export type ExternalServicesRegressionVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
}>;


export type ExternalServicesRegressionResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, createdAt: string, updatedAt: string, warning: string | null }> } };

export type ExternalServiceNodeFields = { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, createdAt: string, updatedAt: string, warning: string | null };

export type UpdateExternalServiceRegressionVariables = Exact<{
  input: UpdateExternalServiceInput;
}>;


export type UpdateExternalServiceRegressionResult = { __typename?: 'Mutation', updateExternalService: { __typename?: 'ExternalService', warning: string | null } };

export type DeleteUserVariables = Exact<{
  user: Scalars['ID'];
  hard: InputMaybe<Scalars['Boolean']>;
}>;


export type DeleteUserResult = { __typename?: 'Mutation', deleteUser: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type SetUserIsSiteAdminVariables = Exact<{
  userID: Scalars['ID'];
  siteAdmin: Scalars['Boolean'];
}>;


export type SetUserIsSiteAdminResult = { __typename?: 'Mutation', setUserIsSiteAdmin: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type SetTosAcceptedVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type SetTosAcceptedResult = { __typename?: 'Mutation', setTosAccepted: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SiteProductVersionVariables = Exact<{ [key: string]: never; }>;


export type SiteProductVersionResult = { __typename?: 'Query', site: { __typename?: 'Site', productVersion: string } };

export type OrganizationsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
}>;


export type OrganizationsResult = { __typename?: 'Query', organizations: { __typename?: 'OrgConnection', totalCount: number, nodes: Array<{ __typename?: 'Org', id: string, name: string, displayName: string | null, createdAt: string, latestSettings: { __typename?: 'Settings', createdAt: string, contents: string } | null, members: { __typename?: 'NewUsersConnection', totalCount: number } }> } };

export type OrganizationsConnectionFields = { __typename?: 'OrgConnection', totalCount: number, nodes: Array<{ __typename?: 'Org', id: string, name: string, displayName: string | null, createdAt: string, latestSettings: { __typename?: 'Settings', createdAt: string, contents: string } | null, members: { __typename?: 'NewUsersConnection', totalCount: number } }> };

export type OrganizationFields = { __typename?: 'Org', id: string, name: string, displayName: string | null, createdAt: string, latestSettings: { __typename?: 'Settings', createdAt: string, contents: string } | null, members: { __typename?: 'NewUsersConnection', totalCount: number } };

export type CreateUserVariables = Exact<{
  username: Scalars['String'];
  email: InputMaybe<Scalars['String']>;
}>;


export type CreateUserResult = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResult', resetPasswordURL: string | null } };

export type UserVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserResult = { __typename?: 'Query', user: { __typename: 'User', id: string, username: string, displayName: string | null, url: string, settingsURL: string | null, avatarURL: string | null, viewerCanAdminister: boolean, siteAdmin: boolean, createdAt: string, emails: Array<{ __typename?: 'UserEmail', email: string, verified: boolean }>, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null, name: string }> }, settingsCascade: { __typename?: 'SettingsCascade', subjects: Array<{ __typename?: 'DefaultSettings', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Org', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Site', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'User', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } } | null };

export type addExternalServiceVariables = Exact<{
  input: AddExternalServiceInput;
}>;


export type addExternalServiceResult = { __typename?: 'Mutation', addExternalService: { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, warning: string | null } };

type GenericSearchResultFields_CommitSearchResult_ = { __typename?: 'CommitSearchResult', url: string, label: { __typename?: 'Markdown', html: string }, detail: { __typename?: 'Markdown', html: string }, matches: Array<{ __typename?: 'SearchResultMatch', url: string, body: { __typename?: 'Markdown', text: string, html: string }, highlights: Array<{ __typename?: 'Highlight', line: number, character: number, length: number }> }> };

type GenericSearchResultFields_Repository_ = { __typename?: 'Repository', url: string, label: { __typename?: 'Markdown', html: string }, detail: { __typename?: 'Markdown', html: string }, matches: Array<{ __typename?: 'SearchResultMatch', url: string, body: { __typename?: 'Markdown', text: string, html: string }, highlights: Array<{ __typename?: 'Highlight', line: number, character: number, length: number }> }> };

export type GenericSearchResultFields = GenericSearchResultFields_CommitSearchResult_ | GenericSearchResultFields_Repository_;

export type SearchVariables = Exact<{
  query: Scalars['String'];
  version: SearchVersion;
  patternType: SearchPatternType;
}>;


export type SearchResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename: 'SearchResults', limitHit: boolean, matchCount: number, approximateResultCount: string, indexUnavailable: boolean, elapsedMilliseconds: number, missing: Array<{ __typename?: 'Repository', name: string }>, cloning: Array<{ __typename?: 'Repository', name: string }>, timedout: Array<{ __typename?: 'Repository', name: string }>, dynamicFilters: Array<{ __typename?: 'SearchFilter', value: string, label: string, count: number, limitHit: boolean, kind: string }>, results: Array<{ __typename: 'CommitSearchResult', url: string, label: { __typename?: 'Markdown', html: string }, detail: { __typename?: 'Markdown', html: string }, matches: Array<{ __typename?: 'SearchResultMatch', url: string, body: { __typename?: 'Markdown', text: string, html: string }, highlights: Array<{ __typename?: 'Highlight', line: number, character: number, length: number }> }> } | { __typename: 'FileMatch', limitHit: boolean, file: { __typename?: 'GitBlob', path: string, url: string, commit: { __typename?: 'GitCommit', oid: string } }, repository: { __typename?: 'Repository', name: string, url: string }, symbols: Array<{ __typename?: 'Symbol', name: string, containerName: string | null, url: string, kind: SymbolKind }>, lineMatches: Array<{ __typename?: 'LineMatch', preview: string, lineNumber: number, offsetAndLengths: Array<Array<number>> }> } | { __typename: 'Repository', id: string, name: string, url: string, label: { __typename?: 'Markdown', html: string }, detail: { __typename?: 'Markdown', html: string }, matches: Array<{ __typename?: 'SearchResultMatch', url: string, body: { __typename?: 'Markdown', text: string, html: string }, highlights: Array<{ __typename?: 'Highlight', line: number, character: number, length: number }> }> }>, alert: { __typename?: 'SearchAlert', title: string, description: string | null, proposedQueries: Array<{ __typename?: 'SearchQueryDescription', description: string | null, query: string }> | null } | null } } | null };

export type SiteVariables = Exact<{ [key: string]: never; }>;


export type SiteResult = { __typename?: 'Query', site: { __typename: 'Site', id: string, canReloadSite: boolean, configuration: { __typename?: 'SiteConfiguration', id: number, effectiveContents: string, validationMessages: Array<string> } } };

export type GitRefFields = { __typename?: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } };

export type SignatureFieldsForReferences = { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } };

export type RepositoryGitRefsVariables = Exact<{
  repo: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
  type: GitRefType;
  withBehindAhead: Scalars['Boolean'];
}>;


export type RepositoryGitRefsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', gitRefs: { __typename: 'GitRefConnection', totalCount: number, nodes: Array<{ __typename: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GitRefConnectionFields = { __typename?: 'GitRefConnection', totalCount: number, nodes: Array<{ __typename: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type RepositoriesSuggestionsVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
}>;


export type RepositoriesSuggestionsResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', nodes: Array<{ __typename?: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', id: string, serviceType: string } }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean } } };

export type SearchRepoMetaKeysVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
}>;


export type SearchRepoMetaKeysResult = { __typename?: 'Query', repoMeta: { __typename?: 'RepoMetadata', keys: { __typename?: 'RepoMetadataKeyOrValueConnection', nodes: Array<string> } } | null };

export type SearchRepoMetaValuesVariables = Exact<{
  key: Scalars['String'];
  query: InputMaybe<Scalars['String']>;
}>;


export type SearchRepoMetaValuesResult = { __typename?: 'Query', repoMeta: { __typename?: 'RepoMetadata', key: { __typename?: 'RepoMetadataKeyResult', values: { __typename?: 'RepoMetadataKeyOrValueConnection', nodes: Array<string> } } | null } | null };

export type AddRepoMetadataVariables = Exact<{
  repo: Scalars['ID'];
  key: Scalars['String'];
  value: InputMaybe<Scalars['String']>;
}>;


export type AddRepoMetadataResult = { __typename?: 'Mutation', addRepoMetadata: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type DeleteRepoMetadataVariables = Exact<{
  repo: Scalars['ID'];
  key: Scalars['String'];
}>;


export type DeleteRepoMetadataResult = { __typename?: 'Mutation', deleteRepoMetadata: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type GetRepoMetadataVariables = Exact<{
  repo: Scalars['String'];
}>;


export type GetRepoMetadataResult = { __typename?: 'Query', repository: { __typename?: 'Repository', metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> } | null };

export type FetchCommitsVariables = Exact<{
  repo: Scalars['ID'];
  revision: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
  currentPath: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
  afterCursor: InputMaybe<Scalars['String']>;
}>;


export type FetchCommitsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', commit: { __typename?: 'GitCommit', ancestors: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type CommitAncestorsConnectionFields = { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } };

export type FileTreeEntriesVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  commitID: Scalars['String'];
  filePath: Scalars['String'];
  ancestors: Scalars['Boolean'];
  first: InputMaybe<Scalars['Int']>;
}>;


export type FileTreeEntriesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', tree: { __typename?: 'GitTree', isRoot: boolean, url: string, entries: Array<{ __typename?: 'GitBlob', languages: Array<string>, name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null } | { __typename?: 'GitTree', name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null }> } | null } | null } | null };

export type SymbolsVariables = Exact<{
  repo: Scalars['ID'];
  revision: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
  includePatterns: InputMaybe<Array<Scalars['String']>>;
}>;


export type SymbolsResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', commit: { __typename?: 'GitCommit', symbols: { __typename: 'SymbolConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean }, nodes: Array<{ __typename: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }> } } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type SymbolConnectionFields = { __typename: 'SymbolConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean }, nodes: Array<{ __typename: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }> };

export type SymbolNodeFields = { __typename: 'Symbol', name: string, containerName: string | null, kind: SymbolKind, language: string, url: string, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } };

export type RepositoriesForPopoverVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type RepositoriesForPopoverResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', nodes: Array<{ __typename: 'Repository', id: string, name: string }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type RepositoryPopoverFields = { __typename: 'Repository', id: string, name: string };

export type RepositoryGitCommitVariables = Exact<{
  repo: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  revision: Scalars['String'];
  query: InputMaybe<Scalars['String']>;
}>;


export type RepositoryGitCommitResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', commit: { __typename: 'GitCommit', ancestors: { __typename: 'GitCommitConnection', nodes: Array<{ __typename: 'GitCommit', id: string, oid: string, abbreviatedOID: string, subject: string, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', name: string, avatarURL: string | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GitCommitAncestorsConnectionFields = { __typename?: 'GitCommitConnection', nodes: Array<{ __typename: 'GitCommit', id: string, oid: string, abbreviatedOID: string, subject: string, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', name: string, avatarURL: string | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type GitCommitAncestorFields = { __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, subject: string, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', name: string, avatarURL: string | null } } };

export type ExternalLinkFields = { __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null };

export type RepositoryFields = { __typename?: 'Repository', id: string, name: string, url: string, sourceType: RepositoryType, description: string, viewerCanAdminister: boolean, isFork: boolean, topics: Array<string>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string }, defaultBranch: { __typename?: 'GitRef', displayName: string, abbrevName: string } | null, metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> };

export type ResolveRepoRevVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
}>;


export type ResolveRepoRevResult = { __typename?: 'Query', repositoryRedirect: { __typename: 'Redirect', url: string } | { __typename: 'Repository', id: string, name: string, url: string, sourceType: RepositoryType, description: string, viewerCanAdminister: boolean, isFork: boolean, topics: Array<string>, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloneInProgress: boolean, cloneProgress: string | null, cloned: boolean }, commit: { __typename: 'GitCommit', oid: string, tree: { __typename?: 'GitTree', url: string } | null } | null, changelist: { __typename: 'PerforceChangelist', cid: string, canonicalURL: string, commit: { __typename: 'GitCommit', oid: string, tree: { __typename?: 'GitTree', url: string } | null } } | null, defaultBranch: { __typename?: 'GitRef', abbrevName: string, displayName: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string }, metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> } | null };

export type GitCommitFieldsWithTree = { __typename?: 'GitCommit', oid: string, tree: { __typename?: 'GitTree', url: string } | null };

export type FileExternalLinksVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  filePath: Scalars['String'];
}>;


export type FileExternalLinksResult = { __typename?: 'Query', repository: { __typename?: 'Repository', commit: { __typename?: 'GitCommit', file: { __typename?: 'BatchSpecWorkspaceFile', externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } | { __typename?: 'GitBlob', externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } | { __typename?: 'VirtualFile', externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } | null } | null } | null };

export type CommitMessageVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
}>;


export type CommitMessageResult = { __typename?: 'Query', repository: { __typename?: 'Repository', commit: { __typename?: 'GitCommit', message: string } | null } | null };

export type ExternalRepoURLsVariables = Exact<{
  repo: Scalars['String'];
}>;


export type ExternalRepoURLsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } | null };

export type BlobVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  filePath: Scalars['String'];
  disableTimeout: Scalars['Boolean'];
  format: HighlightResponseFormat;
  startLine: InputMaybe<Scalars['Int']>;
  endLine: InputMaybe<Scalars['Int']>;
  snapshot: Scalars['Boolean'];
  visibleIndexID: Scalars['ID'];
}>;


export type BlobResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename: 'GitCommit', oid: string, file: { __typename: 'BatchSpecWorkspaceFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'GitBlob', content: string, richHTML: string, totalLines: number, languages: Array<string>, lfs: { __typename?: 'LFS', byteSize: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'VirtualFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | null, blob?: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', snapshot: Array<{ __typename?: 'SnapshotData', offset: number, data: string, additional: Array<string> | null }> | null } | null } | null } | null, changelist: { __typename: 'PerforceChangelist', cid: string, commit: { __typename?: 'GitCommit', oid: string, file: { __typename: 'BatchSpecWorkspaceFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'GitBlob', content: string, richHTML: string, totalLines: number, languages: Array<string>, lfs: { __typename?: 'LFS', byteSize: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'VirtualFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | null, blob?: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', snapshot: Array<{ __typename?: 'SnapshotData', offset: number, data: string, additional: Array<string> | null }> | null } | null } | null } } | null } | null };

export type GitCommitFieldsWithFileAndBlob = { __typename?: 'GitCommit', oid: string, file: { __typename: 'BatchSpecWorkspaceFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'GitBlob', content: string, richHTML: string, totalLines: number, languages: Array<string>, lfs: { __typename?: 'LFS', byteSize: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | { __typename: 'VirtualFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } } | null, blob?: { __typename?: 'GitBlob', lsif: { __typename?: 'GitBlobLSIFData', snapshot: Array<{ __typename?: 'SnapshotData', offset: number, data: string, additional: Array<string> | null }> | null } | null } | null };

type BlobFileFields_BatchSpecWorkspaceFile_ = { __typename: 'BatchSpecWorkspaceFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } };

type BlobFileFields_GitBlob_ = { __typename: 'GitBlob', content: string, richHTML: string, totalLines: number, languages: Array<string>, lfs: { __typename?: 'LFS', byteSize: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } };

type BlobFileFields_VirtualFile_ = { __typename: 'VirtualFile', content: string, richHTML: string, totalLines: number, languages: Array<string>, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lsif: string } };

export type BlobFileFields = BlobFileFields_BatchSpecWorkspaceFile_ | BlobFileFields_GitBlob_ | BlobFileFields_VirtualFile_;

export type DefinitionFields = { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null };

type OwnerFields_Person_ = { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null };

type OwnerFields_Team_ = { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null };

export type OwnerFields = OwnerFields_Person_ | OwnerFields_Team_;

export type RecentContributorOwnershipSignalFields = { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string };

export type RecentViewOwnershipSignalFields = { __typename?: 'RecentViewOwnershipSignal', title: string, description: string };

export type AssignedOwnerFields = { __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean };

export type CodeownersFileEntryFields = { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } };

export type BlobOwnershipFields = { __typename?: 'GitCommit', blob: { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalOwners: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean } | { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> } } | null };

export type FetchOwnershipVariables = Exact<{
  repo: Scalars['ID'];
  revision: Scalars['String'];
  currentPath: Scalars['String'];
}>;


export type FetchOwnershipResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', commit: { __typename?: 'GitCommit', blob: { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalOwners: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean } | { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> } } | null } | null, changelist: { __typename?: 'PerforceChangelist', commit: { __typename?: 'GitCommit', blob: { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalOwners: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean } | { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> } } | null } } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null, currentUser: { __typename?: 'User', permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename?: 'Permission', displayName: string }> } } | null };

export type OwnershipConnectionFields = { __typename?: 'OwnershipConnection', totalOwners: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean } | { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> };

export type FetchTreeOwnershipVariables = Exact<{
  repo: Scalars['ID'];
  revision: Scalars['String'];
  currentPath: Scalars['String'];
}>;


export type FetchTreeOwnershipResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', commit: { __typename?: 'GitCommit', tree: { __typename?: 'GitTree', ownership: { __typename?: 'OwnershipConnection', totalOwners: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner', title: string, description: string, isDirectMatch: boolean } | { __typename?: 'CodeownersFileEntry', title: string, description: string, ruleLineMatch: number, codeownersFile: { __typename?: 'BatchSpecWorkspaceFile', url: string } | { __typename?: 'GitBlob', url: string } | { __typename?: 'VirtualFile', url: string } } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> } } | null } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null, currentUser: { __typename?: 'User', permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename?: 'Permission', displayName: string }> } } | null };

export type BlobOwnership = { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalCount: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null } }> }, contributors: { __typename?: 'OwnershipConnection', totalCount: number } };

export type HistoryFragment = { __typename?: 'GitCommit', ancestors: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }> } };

export type FetchOwnersAndHistoryVariables = Exact<{
  repo: Scalars['ID'];
  revision: Scalars['String'];
  currentPath: Scalars['String'];
  includeOwn: Scalars['Boolean'];
}>;


export type FetchOwnersAndHistoryResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename: 'Repository', id: string, sourceType: RepositoryType, commit: { __typename: 'GitCommit', blob?: { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalCount: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null } }> }, contributors: { __typename?: 'OwnershipConnection', totalCount: number } } | null, ancestors: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }> } } | null, changelist: { __typename: 'PerforceChangelist', commit: { __typename?: 'GitCommit', blob?: { __typename?: 'GitBlob', ownership: { __typename?: 'OwnershipConnection', totalCount: number, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null } }> }, contributors: { __typename?: 'OwnershipConnection', totalCount: number } } | null, ancestors: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }> } } } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RemoveAssignedOwnerVariables = Exact<{
  input: AssignOwnerOrTeamInput;
}>;


export type RemoveAssignedOwnerResult = { __typename?: 'Mutation', removeAssignedOwner: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type RemoveAssignedTeamVariables = Exact<{
  input: AssignOwnerOrTeamInput;
}>;


export type RemoveAssignedTeamResult = { __typename?: 'Mutation', removeAssignedTeam: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type RepositoryGitBranchesOverviewVariables = Exact<{
  repo: Scalars['ID'];
  first: Scalars['Int'];
  withBehindAhead: Scalars['Boolean'];
}>;


export type RepositoryGitBranchesOverviewResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', defaultBranch: { __typename?: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } } | null, gitRefs: { __typename?: 'GitRefConnection', nodes: Array<{ __typename?: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryGitBranchesOverviewRepository = { __typename?: 'Repository', defaultBranch: { __typename?: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } } | null, gitRefs: { __typename?: 'GitRefConnection', nodes: Array<{ __typename?: 'GitRef', id: string, displayName: string, name: string, abbrevName: string, url: string, target: { __typename?: 'GitObject', commit: { __typename?: 'GitCommit', author: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } }, committer: { __typename: 'Signature', date: string, person: { __typename?: 'Person', displayName: string, user: { __typename?: 'User', username: string } | null } } | null, behindAhead?: { __typename?: 'BehindAheadCounts', behind: number, ahead: number } } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type RepositoryCommitVariables = Exact<{
  repo: Scalars['ID'];
  revspec: Scalars['String'];
}>;


export type RepositoryCommitResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', sourceType: RepositoryType, commit: { __typename: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type PerforceChangelistFields = { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string, commit: { __typename: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null } };

export type RepositoryChangelistVariables = Exact<{
  repo: Scalars['ID'];
  changelistID: Scalars['String'];
}>;


export type RepositoryChangelistResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', sourceType: RepositoryType, changelist: { __typename: 'PerforceChangelist', cid: string, canonicalURL: string, commit: { __typename: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null } } | null } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type GitCommitFields = { __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null };

export type PerforceChangelistFieldsWithoutCommit = { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string };

export type SignatureFields = { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } };

export type RepositoryGitCommitsVariables = Exact<{
  repo: Scalars['ID'];
  revspec: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
  afterCursor: InputMaybe<Scalars['String']>;
  filePath: InputMaybe<Scalars['String']>;
}>;


export type RepositoryGitCommitsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', sourceType: RepositoryType, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, commit: { __typename?: 'GitCommit', ancestors: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryComparisonCommitsVariables = Exact<{
  repo: Scalars['ID'];
  base: InputMaybe<Scalars['String']>;
  head: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  path: InputMaybe<Scalars['String']>;
}>;


export type RepositoryComparisonCommitsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', comparison: { __typename?: 'RepositoryComparison', commits: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', id: string, oid: string, abbreviatedOID: string, message: string, subject: string, body: string | null, url: string, canonicalURL: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null, author: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } }, committer: { __typename?: 'Signature', date: string, person: { __typename?: 'Person', avatarURL: string | null, name: string, email: string, displayName: string, user: { __typename?: 'User', id: string, username: string, url: string, displayName: string | null } | null } } | null, parents: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, perforceChangelist: { __typename?: 'PerforceChangelist', cid: string, canonicalURL: string } | null }>, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }>, tree: { __typename?: 'GitTree', canonicalURL: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryComparisonDiffVariables = Exact<{
  repo: Scalars['ID'];
  base: InputMaybe<Scalars['String']>;
  head: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  paths: InputMaybe<Array<Scalars['String']>>;
}>;


export type RepositoryComparisonDiffResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository', comparison: { __typename?: 'RepositoryComparison', fileDiffs: { __typename?: 'FileDiffConnection', totalCount: number | null, nodes: Array<{ __typename?: 'FileDiff', oldPath: string | null, newPath: string | null, internalID: string, oldFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, newFile: { __typename: 'BatchSpecWorkspaceFile', binary: boolean, byteSize: number } | { __typename: 'GitBlob', binary: boolean, byteSize: number } | { __typename: 'VirtualFile', binary: boolean, byteSize: number } | null, mostRelevantFile: { __typename: 'BatchSpecWorkspaceFile', url: string, changelistURL: string | null } | { __typename: 'GitBlob', url: string, changelistURL: string | null } | { __typename: 'VirtualFile', url: string, changelistURL: string | null }, hunks: Array<{ __typename?: 'FileDiffHunk', oldNoNewlineAt: boolean, section: string | null, oldRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, newRange: { __typename?: 'FileDiffHunkRange', startLine: number, lines: number }, highlight: { __typename?: 'HighlightedDiffHunkBody', aborted: boolean, lines: Array<{ __typename?: 'HighlightedDiffHunkLine', kind: DiffHunkLineType, html: string }> } }>, stat: { __typename?: 'DiffStat', added: number, deleted: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, diffStat: { __typename: 'DiffStat', added: number, deleted: number } } } } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type RepositoryComparisonVariables = Exact<{
  repo: Scalars['ID'];
  base: InputMaybe<Scalars['String']>;
  head: InputMaybe<Scalars['String']>;
}>;


export type RepositoryComparisonResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', comparison: { __typename?: 'RepositoryComparison', range: { __typename?: 'GitRevisionRange', expr: string, baseRevSpec: { __typename?: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null }, headRevSpec: { __typename?: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null } } } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryComparisonFields = { __typename?: 'Repository', comparison: { __typename?: 'RepositoryComparison', range: { __typename?: 'GitRevisionRange', expr: string, baseRevSpec: { __typename?: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null }, headRevSpec: { __typename?: 'GitRevSpecExpr', object: { __typename?: 'GitObject', oid: string } | null } } } };

export type RepositoryTextSearchIndexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RepositoryTextSearchIndexResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', textSearchIndex: { __typename?: 'RepositoryTextSearchIndex', status: { __typename?: 'RepositoryTextSearchIndexStatus', updatedAt: string, contentByteSize: string, contentFilesCount: number, indexByteSize: number, indexShardsCount: number, newLinesCount: number, defaultBranchNewLinesCount: number, otherBranchesNewLinesCount: number } | null, refs: Array<{ __typename?: 'RepositoryTextSearchIndexedRef', indexed: boolean, current: boolean, ref: { __typename?: 'GitRef', displayName: string, url: string }, skippedIndexed: { __typename?: 'SkippedIndexed', count: string, query: string } | null, indexedCommit: { __typename?: 'GitObject', oid: string, abbreviatedOID: string, commit: { __typename?: 'GitCommit', url: string } | null } | null }>, host: { __typename?: 'repositoryIndexserverHost', name: string } | null } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryTextSearchIndexRepository = { __typename?: 'Repository', textSearchIndex: { __typename?: 'RepositoryTextSearchIndex', status: { __typename?: 'RepositoryTextSearchIndexStatus', updatedAt: string, contentByteSize: string, contentFilesCount: number, indexByteSize: number, indexShardsCount: number, newLinesCount: number, defaultBranchNewLinesCount: number, otherBranchesNewLinesCount: number } | null, refs: Array<{ __typename?: 'RepositoryTextSearchIndexedRef', indexed: boolean, current: boolean, ref: { __typename?: 'GitRef', displayName: string, url: string }, skippedIndexed: { __typename?: 'SkippedIndexed', count: string, query: string } | null, indexedCommit: { __typename?: 'GitObject', oid: string, abbreviatedOID: string, commit: { __typename?: 'GitCommit', url: string } | null } | null }>, host: { __typename?: 'repositoryIndexserverHost', name: string } | null } | null };

export type reindexVariables = Exact<{
  id: Scalars['ID'];
}>;


export type reindexResult = { __typename?: 'Mutation', reindexRepository: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SettingsAreaExternalServiceFields = { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, supportsRepoExclusion: boolean };

export type SettingsAreaRepositoryFields = { __typename?: 'Repository', id: string, name: string, url: string, isPrivate: boolean, viewerCanAdminister: boolean, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', remoteURL: string, cloneInProgress: boolean, cloneProgress: string | null, cloned: boolean, updatedAt: string | null, isCorrupted: boolean, lastError: string | null, lastSyncOutput: string | null, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string, reason: string }>, updateSchedule: { __typename?: 'UpdateSchedule', due: string, index: number, total: number } | null, updateQueue: { __typename?: 'UpdateQueue', updating: boolean, index: number, total: number } | null }, externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, supportsRepoExclusion: boolean }> }, metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> };

export type SettingsAreaRepositoryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SettingsAreaRepositoryResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, name: string, url: string, isPrivate: boolean, viewerCanAdminister: boolean, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', remoteURL: string, cloneInProgress: boolean, cloneProgress: string | null, cloned: boolean, updatedAt: string | null, isCorrupted: boolean, lastError: string | null, lastSyncOutput: string | null, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string, reason: string }>, updateSchedule: { __typename?: 'UpdateSchedule', due: string, index: number, total: number } | null, updateQueue: { __typename?: 'UpdateQueue', updating: boolean, index: number, total: number } | null }, externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, supportsRepoExclusion: boolean }> }, metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> } | null };

export type ExcludeRepoFromExternalServicesVariables = Exact<{
  externalServices: Array<Scalars['ID']>;
  repo: Scalars['ID'];
}>;


export type ExcludeRepoFromExternalServicesResult = { __typename?: 'Mutation', excludeRepoFromExternalServices: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RepositoryContributorsVariables = Exact<{
  repo: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  revisionRange: InputMaybe<Scalars['String']>;
  afterDate: InputMaybe<Scalars['String']>;
  path: InputMaybe<Scalars['String']>;
}>;


export type RepositoryContributorsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', contributors: { __typename?: 'RepositoryContributorConnection', totalCount: number, pageInfo: { __typename?: 'BidirectionalPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null }, nodes: Array<{ __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null }, commits: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, subject: string, author: { __typename?: 'Signature', date: string } }> } }> } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type RepositoryContributorConnectionFields = { __typename?: 'RepositoryContributorConnection', totalCount: number, pageInfo: { __typename?: 'BidirectionalPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null }, nodes: Array<{ __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null }, commits: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, subject: string, author: { __typename?: 'Signature', date: string } }> } }> };

export type RepositoryContributorNodeFields = { __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null }, commits: { __typename?: 'GitCommitConnection', nodes: Array<{ __typename?: 'GitCommit', oid: string, abbreviatedOID: string, url: string, subject: string, author: { __typename?: 'Signature', date: string } }> } };

export type FileCommitsVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  filePath: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
}>;


export type FileCommitsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, tree: { __typename?: 'GitTree', entries: Array<{ __typename?: 'GitBlob', path: string, history: { __typename?: 'TreeEntryConnection', nodes: Array<{ __typename?: 'GitBlob', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } } | { __typename?: 'GitTree', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } }> } } | { __typename?: 'GitTree', path: string, history: { __typename?: 'TreeEntryConnection', nodes: Array<{ __typename?: 'GitBlob', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } } | { __typename?: 'GitTree', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } }> } }> } | null } | null } | null };

export type TreePageRepositoryFields = { __typename?: 'Repository', id: string, name: string, description: string, viewerCanAdminister: boolean, url: string, topics: Array<string>, sourceType: RepositoryType, metadata: Array<{ __typename?: 'KeyValuePair', key: string, value: string | null }> };

export type TreePageRepositoryContributorsVariables = Exact<{
  repo: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  revisionRange: InputMaybe<Scalars['String']>;
  afterDate: InputMaybe<Scalars['String']>;
  path: InputMaybe<Scalars['String']>;
}>;


export type TreePageRepositoryContributorsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', sourceType: RepositoryType, contributors: { __typename?: 'RepositoryContributorConnection', totalCount: number, pageInfo: { __typename?: 'BidirectionalPageInfo', hasNextPage: boolean }, nodes: Array<{ __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null } }> } } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type TreePageRepositoryContributorConnectionFields = { __typename?: 'RepositoryContributorConnection', totalCount: number, pageInfo: { __typename?: 'BidirectionalPageInfo', hasNextPage: boolean }, nodes: Array<{ __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null } }> };

export type TreePageRepositoryContributorNodeFields = { __typename?: 'RepositoryContributor', count: number, person: { __typename?: 'Person', name: string, displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', username: string, url: string, displayName: string | null, avatarURL: string | null } | null } };

export type TreePageOwnershipVariables = Exact<{
  repo: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  revision: Scalars['String'];
  filePath: Scalars['String'];
}>;


export type TreePageOwnershipResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository', commit: { __typename?: 'GitCommit', path: { __typename?: 'GitBlob' } | { __typename?: 'GitTree', ownership: { __typename?: 'OwnershipConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean }, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner' } | { __typename?: 'CodeownersFileEntry' } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> } } | null } | null } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type TreePageOwnershipConnectionFields = { __typename?: 'OwnershipConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean }, nodes: Array<{ __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner' } | { __typename?: 'CodeownersFileEntry' } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> }> };

export type TreePageOwnershipNodeFields = { __typename?: 'Ownership', owner: { __typename: 'Person', displayName: string, email: string, avatarURL: string | null, user: { __typename?: 'User', id: string, username: string, displayName: string | null, url: string, primaryEmail: { __typename?: 'UserEmail', email: string } | null } | null } | { __typename: 'Team', id: string, name: string, avatarURL: string | null, url: string, external: boolean, teamDisplayName: string | null }, reasons: Array<{ __typename?: 'AssignedOwner' } | { __typename?: 'CodeownersFileEntry' } | { __typename?: 'RecentContributorOwnershipSignal', title: string, description: string } | { __typename?: 'RecentViewOwnershipSignal', title: string, description: string }> };

type TreeHistoryFields_GitBlob_ = { __typename?: 'GitBlob', path: string, history: { __typename?: 'TreeEntryConnection', nodes: Array<{ __typename?: 'GitBlob', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } } | { __typename?: 'GitTree', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } }> } };

type TreeHistoryFields_GitTree_ = { __typename?: 'GitTree', path: string, history: { __typename?: 'TreeEntryConnection', nodes: Array<{ __typename?: 'GitBlob', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } } | { __typename?: 'GitTree', commit: { __typename?: 'GitCommit', id: string, canonicalURL: string, subject: string, author: { __typename?: 'Signature', date: string }, committer: { __typename?: 'Signature', date: string } | null, externalURLs: Array<{ __typename?: 'ExternalLink', url: string, serviceKind: ExternalServiceKind | null }> } }> } };

export type TreeHistoryFields = TreeHistoryFields_GitBlob_ | TreeHistoryFields_GitTree_;

export type SavedSearchFields = { __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null };

export type SavedSearchesVariables = Exact<{
  query: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['ID']>;
  viewerIsAffiliated: InputMaybe<Scalars['Boolean']>;
  includeDrafts?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  orderBy: SavedSearchesOrderBy;
}>;


export type SavedSearchesResult = { __typename?: 'Query', savedSearches: { __typename?: 'SavedSearchesConnection', totalCount: number, nodes: Array<{ __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null } } };

export type SavedSearchVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SavedSearchResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type CreateSavedSearchVariables = Exact<{
  input: SavedSearchInput;
}>;


export type CreateSavedSearchResult = { __typename?: 'Mutation', createSavedSearch: { __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type UpdateSavedSearchVariables = Exact<{
  id: Scalars['ID'];
  input: SavedSearchUpdateInput;
}>;


export type UpdateSavedSearchResult = { __typename?: 'Mutation', updateSavedSearch: { __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type TransferSavedSearchOwnershipVariables = Exact<{
  id: Scalars['ID'];
  newOwner: Scalars['ID'];
}>;


export type TransferSavedSearchOwnershipResult = { __typename?: 'Mutation', transferSavedSearchOwnership: { __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type ChangeSavedSearchVisibilityVariables = Exact<{
  id: Scalars['ID'];
  newVisibility: SavedSearchVisibility;
}>;


export type ChangeSavedSearchVisibilityResult = { __typename?: 'Mutation', changeSavedSearchVisibility: { __typename?: 'SavedSearch', id: string, description: string, query: string, draft: boolean, visibility: SavedSearchVisibility, createdAt: string, updatedAt: string, url: string, viewerCanAdminister: boolean, owner: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string }, createdBy: { __typename?: 'User', id: string, username: string, url: string } | null, updatedBy: { __typename?: 'User', id: string, username: string, url: string } | null } };

export type DeleteSavedSearchVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSavedSearchResult = { __typename?: 'Mutation', deleteSavedSearch: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type AutocompleteRepoVariables = Exact<{
  query: Scalars['String'];
}>;


export type AutocompleteRepoResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', repositories: Array<{ __typename?: 'Repository', name: string, stars: number }> } } | null };

export type EventLogsDataVariables = Exact<{
  userId: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  eventName: Scalars['String'];
}>;


export type EventLogsDataResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename: 'User', eventLogs: { __typename?: 'EventLogsConnection', totalCount: number, nodes: Array<{ __typename?: 'EventLog', argument: string | null, timestamp: string, url: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type ExternalServicesTotalCountVariables = Exact<{ [key: string]: never; }>;


export type ExternalServicesTotalCountResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number } };

export type SuggestionsRepoVariables = Exact<{
  query: Scalars['String'];
}>;


export type SuggestionsRepoResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', repositories: Array<{ __typename?: 'Repository', id: string, name: string, stars: number }> } } | null };

export type SuggestionsFileVariables = Exact<{
  query: Scalars['String'];
}>;


export type SuggestionsFileResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', path: string, url: string, canonicalURL: string, repository: { __typename?: 'Repository', name: string, stars: number } } } | { __typename?: 'Repository' }> } } | null };

export type SuggestionsSymbolVariables = Exact<{
  query: Scalars['String'];
}>;


export type SuggestionsSymbolResult = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename?: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', path: string, canonicalURL: string }, symbols: Array<{ __typename?: 'Symbol', kind: SymbolKind, url: string, canonicalURL: string, name: string }> } | { __typename?: 'Repository' }> } } | null };

export type SuggestionsSearchContextVariables = Exact<{
  first: Scalars['Int'];
  query: InputMaybe<Scalars['String']>;
  namespaces: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
}>;


export type SuggestionsSearchContextResult = { __typename?: 'Query', searchContexts: { __typename?: 'SearchContextConnection', nodes: Array<{ __typename?: 'SearchContext', id: string, name: string, spec: string, description: string, viewerHasStarred: boolean, viewerHasAsDefault: boolean }> } };

export type SearchHistoryEventLogsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type SearchHistoryEventLogsQueryResult = { __typename?: 'Query', currentUser: { __typename: 'User', recentSearchLogs: { __typename?: 'EventLogsConnection', nodes: Array<{ __typename?: 'EventLog', argument: string | null, timestamp: string }> } } | null };

export type SearchAggregationModeAvailability = { __typename: 'AggregationModeAvailability', mode: SearchAggregationMode, available: boolean, reasonUnavailable: string | null };

export type SearchAggregationDatum = { __typename: 'AggregationGroup', label: string, count: number, query: string | null };

export type GetSearchAggregationVariables = Exact<{
  query: Scalars['String'];
  patternType: SearchPatternType;
  mode: InputMaybe<SearchAggregationMode>;
  limit: Scalars['Int'];
  extendedTimeout: Scalars['Boolean'];
  skipAggregation: Scalars['Boolean'];
}>;


export type GetSearchAggregationResult = { __typename?: 'Query', searchQueryAggregate: { __typename?: 'SearchQueryAggregate', aggregations?: { __typename: 'ExhaustiveSearchAggregationResult', mode: SearchAggregationMode, otherGroupCount: number | null, groups: Array<{ __typename: 'AggregationGroup', label: string, count: number, query: string | null }> } | { __typename: 'NonExhaustiveSearchAggregationResult', mode: SearchAggregationMode, approximateOtherGroupCount: number | null, groups: Array<{ __typename: 'AggregationGroup', label: string, count: number, query: string | null }> } | { __typename: 'SearchAggregationNotAvailable', reason: string, reasonType: NotAvailableReasonType, mode: SearchAggregationMode }, modeAvailability: Array<{ __typename: 'AggregationModeAvailability', mode: SearchAggregationMode, available: boolean, reasonUnavailable: string | null }> } };

export type SearchSidebarGitRefsVariables = Exact<{
  repo: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  query: InputMaybe<Scalars['String']>;
  type: InputMaybe<GitRefType>;
}>;


export type SearchSidebarGitRefsResult = { __typename?: 'Query', repository: { __typename: 'Repository', id: string, gitRefs: { __typename: 'GitRefConnection', totalCount: number, nodes: Array<{ __typename: 'GitRef', id: string, name: string, displayName: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | null };

export type SearchSidebarGitRefFields = { __typename: 'GitRef', id: string, name: string, displayName: string };

export type SettingsCascadeVariables = Exact<{
  subject: Scalars['ID'];
}>;


export type SettingsCascadeResult = { __typename?: 'Query', settingsSubject: { __typename?: 'DefaultSettings', settingsCascade: { __typename?: 'SettingsCascade', subjects: Array<{ __typename?: 'DefaultSettings', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Org', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Site', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'User', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } } | { __typename?: 'Org', settingsCascade: { __typename?: 'SettingsCascade', subjects: Array<{ __typename?: 'DefaultSettings', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Org', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Site', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'User', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } } | { __typename?: 'Site', settingsCascade: { __typename?: 'SettingsCascade', subjects: Array<{ __typename?: 'DefaultSettings', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Org', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Site', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'User', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } } | { __typename?: 'User', settingsCascade: { __typename?: 'SettingsCascade', subjects: Array<{ __typename?: 'DefaultSettings', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Org', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'Site', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename?: 'User', latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } } | null };

export type AccessTokenFields = { __typename?: 'AccessToken', id: string, scopes: Array<string>, note: string, createdAt: string, lastUsedAt: string | null, expiresAt: string | null, subject: { __typename?: 'User', username: string }, creator: { __typename?: 'User', username: string } };

export type DeleteAccessTokenVariables = Exact<{
  tokenID: Scalars['ID'];
}>;


export type DeleteAccessTokenResult = { __typename?: 'Mutation', deleteAccessToken: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type ValidateAccessTokenVariables = Exact<{
  token: Scalars['String'];
}>;


export type ValidateAccessTokenResult = { __typename?: 'Query', externalServiceRepositories: { __typename?: 'ExternalServiceRepositoryConnection', nodes: Array<{ __typename?: 'ExternalServiceRepository', id: string }> } };

export type GetGitHubOrganizationsVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  token: Scalars['String'];
}>;


export type GetGitHubOrganizationsResult = { __typename?: 'Query', externalServiceNamespaces: { __typename?: 'ExternalServiceNamespaceConnection', nodes: Array<{ __typename?: 'ExternalServiceNamespace', id: string, name: string }> } };

export type GetGitHubRepositoriesVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  first: Scalars['Int'];
  token: Scalars['String'];
  query: Scalars['String'];
  excludeRepositories: Array<Scalars['String']>;
}>;


export type GetGitHubRepositoriesResult = { __typename?: 'Query', externalServiceRepositories: { __typename?: 'ExternalServiceRepositoryConnection', nodes: Array<{ __typename?: 'ExternalServiceRepository', id: string, name: string }> } };

export type GetCodeHostsVariables = Exact<{ [key: string]: never; }>;


export type GetCodeHostsResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename: 'ExternalService', id: string, kind: ExternalServiceKind, repoCount: number, displayName: string, lastSyncAt: string | null, nextSyncAt: string | null, lastSyncError: string | null, config: string }> } };

export type GetExternalServiceByIdVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExternalServiceByIdResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, repoCount: number, config: string } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type DeleteCodeHostVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCodeHostResult = { __typename?: 'Mutation', deleteExternalService: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CodeHost = { __typename: 'ExternalService', id: string, kind: ExternalServiceKind, repoCount: number, displayName: string, lastSyncAt: string | null, nextSyncAt: string | null, lastSyncError: string | null, config: string };

export type AddRemoteCodeHostVariables = Exact<{
  input: AddExternalServiceInput;
}>;


export type AddRemoteCodeHostResult = { __typename?: 'Mutation', addExternalService: { __typename: 'ExternalService', id: string, kind: ExternalServiceKind, repoCount: number, displayName: string, lastSyncAt: string | null, nextSyncAt: string | null, lastSyncError: string | null, config: string } };

export type UpdateRemoteCodeHostVariables = Exact<{
  input: UpdateExternalServiceInput;
}>;


export type UpdateRemoteCodeHostResult = { __typename?: 'Mutation', updateExternalService: { __typename: 'ExternalService', id: string, kind: ExternalServiceKind, repoCount: number, displayName: string, lastSyncAt: string | null, nextSyncAt: string | null, lastSyncError: string | null, config: string } };

export type DeleteRemoteCodeHostVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRemoteCodeHostResult = { __typename?: 'Mutation', deleteExternalService: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AccessRequestNode = { __typename?: 'AccessRequest', id: string, email: string, name: string, createdAt: string, additionalInfo: string | null, status: AccessRequestStatus };

export type GetAccessRequestsVariables = Exact<{
  status: AccessRequestStatus;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
}>;


export type GetAccessRequestsResult = { __typename?: 'Query', accessRequests: { __typename?: 'AccessRequestConnection', totalCount: number, pageInfo: { __typename?: 'BidirectionalPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null }, nodes: Array<{ __typename?: 'AccessRequest', id: string, email: string, name: string, createdAt: string, additionalInfo: string | null, status: AccessRequestStatus }> } };

export type HasLicenseSeatsVariables = Exact<{ [key: string]: never; }>;


export type HasLicenseSeatsResult = { __typename?: 'Query', site: { __typename?: 'Site', productSubscription: { __typename?: 'ProductSubscriptionStatus', license: { __typename?: 'ProductLicenseInfo', tags: Array<string>, userCount: number } }, users: { __typename?: 'SiteUsers', totalCount: number } } };

export type RejectAccessRequestVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RejectAccessRequestResult = { __typename?: 'Mutation', setAccessRequestStatus: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DoesUsernameExistVariables = Exact<{
  username: Scalars['String'];
}>;


export type DoesUsernameExistResult = { __typename?: 'Query', user: { __typename?: 'User', id: string } | null };

export type ApproveAccessRequestVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ApproveAccessRequestResult = { __typename?: 'Mutation', setAccessRequestStatus: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type AccessRequestCreateUserVariables = Exact<{
  username: Scalars['String'];
  email: InputMaybe<Scalars['String']>;
}>;


export type AccessRequestCreateUserResult = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResult', resetPasswordURL: string | null } };

export type AccessRequestsCountVariables = Exact<{ [key: string]: never; }>;


export type AccessRequestsCountResult = { __typename?: 'Query', accessRequests: { __typename?: 'AccessRequestConnection', totalCount: number } };

export type createVariables = Exact<{
  name: Scalars['String'];
  value: InputMaybe<Scalars['Boolean']>;
  rolloutBasisPoints: InputMaybe<Scalars['Int']>;
}>;


export type createResult = { __typename?: 'Mutation', createFeatureFlag: { __typename: 'FeatureFlagBoolean' } | { __typename: 'FeatureFlagRollout' } };

export type updateVariables = Exact<{
  name: Scalars['String'];
  value: InputMaybe<Scalars['Boolean']>;
  rolloutBasisPoints: InputMaybe<Scalars['Int']>;
}>;


export type updateResult = { __typename?: 'Mutation', updateFeatureFlag: { __typename: 'FeatureFlagBoolean' } | { __typename: 'FeatureFlagRollout' } };

export type deleteVariables = Exact<{
  name: Scalars['String'];
}>;


export type deleteResult = { __typename?: 'Mutation', deleteFeatureFlag: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type createFeatureFlagOverrideVariables = Exact<{
  namespace: Scalars['ID'];
  flagName: Scalars['String'];
  value: Scalars['Boolean'];
}>;


export type createFeatureFlagOverrideResult = { __typename?: 'Mutation', createFeatureFlagOverride: { __typename?: 'FeatureFlagOverride', id: string, value: boolean } };

export type updateFeatureFlagOverrideVariables = Exact<{
  id: Scalars['ID'];
  value: Scalars['Boolean'];
}>;


export type updateFeatureFlagOverrideResult = { __typename?: 'Mutation', updateFeatureFlagOverride: { __typename?: 'FeatureFlagOverride', id: string, value: boolean } };

export type deleteFeatureFlagOverrideVariables = Exact<{
  id: Scalars['ID'];
}>;


export type deleteFeatureFlagOverrideResult = { __typename?: 'Mutation', deleteFeatureFlagOverride: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UsersManagementSummaryVariables = Exact<{ [key: string]: never; }>;


export type UsersManagementSummaryResult = { __typename?: 'Query', site: { __typename?: 'Site', productSubscription: { __typename?: 'ProductSubscriptionStatus', license: { __typename?: 'ProductLicenseInfo', userCount: number } }, adminUsers: { __typename?: 'SiteUsers', totalCount: number }, registeredUsers: { __typename?: 'SiteUsers', totalCount: number } }, pendingAccessRequests: { __typename?: 'AccessRequestConnection', totalCount: number } };

export type UsersManagementUsersListVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  lastActiveAt: InputMaybe<SiteUsersDateRangeInput>;
  deletedAt: InputMaybe<SiteUsersDateRangeInput>;
  createdAt: InputMaybe<SiteUsersDateRangeInput>;
  eventsCount: InputMaybe<SiteUsersNumberRangeInput>;
  query: InputMaybe<Scalars['String']>;
  orderBy: InputMaybe<SiteUserOrderBy>;
  descending: InputMaybe<Scalars['Boolean']>;
  siteAdmin: InputMaybe<Scalars['Boolean']>;
}>;


export type UsersManagementUsersListResult = { __typename?: 'Query', site: { __typename?: 'Site', users: { __typename?: 'SiteUsers', totalCount: number, nodes: Array<{ __typename?: 'SiteUser', id: string, username: string, displayName: string | null, email: string | null, siteAdmin: boolean, eventsCount: number, createdAt: string, lastActiveAt: string | null, deletedAt: string | null, locked: boolean, scimControlled: boolean }> } } };

export type InvalidateSessionsByIDsVariables = Exact<{
  userIDs: Array<Scalars['ID']>;
}>;


export type InvalidateSessionsByIDsResult = { __typename?: 'Mutation', invalidateSessionsByIDs: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DeleteUsersVariables = Exact<{
  userIDs: Array<Scalars['ID']>;
}>;


export type DeleteUsersResult = { __typename?: 'Mutation', deleteUsers: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type DeleteUsersForeverVariables = Exact<{
  userIDs: Array<Scalars['ID']>;
}>;


export type DeleteUsersForeverResult = { __typename?: 'Mutation', deleteUsers: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type RecoverUsersVariables = Exact<{
  userIDs: Array<Scalars['ID']>;
}>;


export type RecoverUsersResult = { __typename?: 'Mutation', recoverUsers: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type BatchChangesStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type BatchChangesStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', batchChanges: { __typename?: 'AnalyticsBatchChangesResult', changesetsCreated: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, changesetsMerged: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } } } } };

export type InsightsStatItemFragment = { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } };

export type InsightsStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type InsightsStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', codeInsights: { __typename?: 'AnalyticsCodesInsightsResult', insightHovers: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, insightDataPointClicks: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } } } } }, insightViews: { __typename?: 'InsightViewConnection', nodes: Array<{ __typename?: 'InsightView', id: string } | null> }, insightsDashboards: { __typename?: 'InsightsDashboardConnection', nodes: Array<{ __typename?: 'InsightsDashboard', id: string }> } };

export type CodeIntelStatItemFragment = { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } };

export type CodeIntelStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type CodeIntelStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', repos: { __typename?: 'AnalyticsReposSummartResult', count: number, preciseCodeIntelCount: number }, codeIntel: { __typename?: 'AnalyticsCodeIntelResult', referenceClicks: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, definitionClicks: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, inAppEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, codeHostEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, searchBasedEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, preciseEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, crossRepoEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, codeIntelByLanguage: Array<{ __typename?: 'AnalyticsCodeIntelByLanguageResult', language: string, precision: string, count: number }>, codeIntelTopRepositories: Array<{ __typename?: 'AnalyticsCodeIntelRepositoryResult', name: string, language: string, kind: string, precision: string, events: number, hasPrecise: boolean }> } } };

export type ExtensionsStatItemFragment = { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } };

export type ExtensionsStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type ExtensionsStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', extensions: { __typename?: 'AnalyticsExtensionsResult', jetbrains: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, vscode: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, browser: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } } } }, users: { __typename?: 'SiteUsers', totalCount: number } } };

export type NotebooksStatItemFragment = { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } };

export type NotebooksStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type NotebooksStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', notebooks: { __typename?: 'AnalyticsNotebooksResults', creations: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, views: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, blockRuns: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } } } } } };

export type OverviewStatisticsVariables = Exact<{ [key: string]: never; }>;


export type OverviewStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', productVersion: string, productSubscription: { __typename?: 'ProductSubscriptionStatus', productNameWithBrand: string, actualUserCount: number, license: { __typename?: 'ProductLicenseInfo', userCount: number, expiresAt: string } }, updateCheck: { __typename?: 'UpdateCheck', updateVersionAvailable: string | null }, adminUsers: { __typename?: 'SiteUsers', totalCount: number } }, users: { __typename?: 'UserConnection', totalCount: number }, repositories: { __typename?: 'NewRepositoryConnection', totalCount: number }, repositoryStats: { __typename?: 'RepositoryStats', gitDirBytes: string, indexedLinesCount: string }, surveyResponses: { __typename?: 'SurveyResponseConnection', totalCount: number, averageScore: number, netPromoterScore: number }, pendingAccessRequests: { __typename?: 'AccessRequestConnection', totalCount: number } };

export type OverviewDevTimeSavedVariables = Exact<{
  dateRange: AnalyticsDateRange;
}>;


export type OverviewDevTimeSavedResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', search: { __typename?: 'AnalyticsSearchResult', searches: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, fileViews: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, codeIntel: { __typename?: 'AnalyticsCodeIntelResult', referenceClicks: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, definitionClicks: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, inAppEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, codeHostEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, searchBasedEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, preciseEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, crossRepoEvents: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, batchChanges: { __typename?: 'AnalyticsBatchChangesResult', changesetsMerged: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, notebooks: { __typename?: 'AnalyticsNotebooksResults', views: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, extensions: { __typename?: 'AnalyticsExtensionsResult', jetbrains: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, vscode: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } }, browser: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number } } }, users: { __typename?: 'AnalyticsUsersResult', activity: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalUniqueUsers: number, totalRegisteredUsers: number } } } } } };

export type SearchStatItemFragment = { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } };

export type SearchStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type SearchStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', search: { __typename?: 'AnalyticsSearchResult', searches: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, resultClicks: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, fileViews: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, fileOpens: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number, registeredUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, codeCopied: { __typename?: 'AnalyticsStatItem', summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } } } } } };

export type UsersStatisticsVariables = Exact<{
  dateRange: AnalyticsDateRange;
  grouping: AnalyticsGrouping;
}>;


export type UsersStatisticsResult = { __typename?: 'Query', site: { __typename?: 'Site', analytics: { __typename?: 'Analytics', users: { __typename?: 'AnalyticsUsersResult', monthlyActiveUsers: Array<{ __typename?: 'AnalyticsMonthlyActiveUsers', date: string, count: number }>, activity: { __typename?: 'AnalyticsStatItem', nodes: Array<{ __typename?: 'AnalyticsStatItemNode', date: string, count: number, uniqueUsers: number }>, summary: { __typename?: 'AnalyticsStatItemSummary', totalCount: number, totalUniqueUsers: number, totalRegisteredUsers: number } }, frequencies: Array<{ __typename?: 'AnalyticsUsersFrequencyItem', daysUsed: number, frequency: number, percentage: number }> } }, productSubscription: { __typename?: 'ProductSubscriptionStatus', license: { __typename?: 'ProductLicenseInfo', userCount: number } } }, users: { __typename?: 'UserConnection', totalCount: number }, pendingAccessRequests: { __typename?: 'AccessRequestConnection', totalCount: number } };

export type MirrorRepositoryInfoFields = { __typename?: 'MirrorRepositoryInfo', cloned: boolean, cloneInProgress: boolean, updatedAt: string | null, nextSyncAt: string | null, isCorrupted: boolean, lastError: string | null, byteSize: string, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string }> };

export type ExternalRepositoryFields = { __typename?: 'ExternalRepository', serviceType: string, serviceID: string };

export type SiteAdminRepositoryFields = { __typename: 'Repository', id: string, name: string, createdAt: string, viewerCanAdminister: boolean, url: string, isPrivate: boolean, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean, cloneInProgress: boolean, updatedAt: string | null, nextSyncAt: string | null, isCorrupted: boolean, lastError: string | null, byteSize: string, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string }> }, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } };

export type RepositoriesVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  indexed?: InputMaybe<Scalars['Boolean']>;
  notIndexed?: InputMaybe<Scalars['Boolean']>;
  failedFetch?: InputMaybe<Scalars['Boolean']>;
  corrupted?: InputMaybe<Scalars['Boolean']>;
  cloneStatus?: InputMaybe<CloneStatus>;
  orderBy?: InputMaybe<RepositoryOrderBy>;
  descending?: InputMaybe<Scalars['Boolean']>;
  externalService?: InputMaybe<Scalars['ID']>;
}>;


export type RepositoriesResult = { __typename?: 'Query', repositories: { __typename?: 'NewRepositoryConnection', totalCount: number, nodes: Array<{ __typename: 'Repository', id: string, name: string, createdAt: string, viewerCanAdminister: boolean, url: string, isPrivate: boolean, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean, cloneInProgress: boolean, updatedAt: string | null, nextSyncAt: string | null, isCorrupted: boolean, lastError: string | null, byteSize: string, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string }> }, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type SlowRequestsVariables = Exact<{
  after: InputMaybe<Scalars['String']>;
}>;


export type SlowRequestsResult = { __typename?: 'Query', slowRequests: { __typename?: 'SlowRequestConnection', totalCount: number, nodes: Array<{ __typename?: 'SlowRequest', index: string, start: string, duration: number, name: string, source: string, variables: string, errors: Array<string>, query: string, filepath: string | null, user: { __typename?: 'User', username: string } | null, repository: { __typename?: 'Repository', name: string } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean } } };

export type OutboundRequestsVariables = Exact<{
  after: InputMaybe<Scalars['String']>;
}>;


export type OutboundRequestsResult = { __typename?: 'Query', outboundRequests: { __typename?: 'OutboundRequestConnection', nodes: Array<{ __typename?: 'OutboundRequest', id: string, startedAt: string, method: string, url: string, requestBody: string, statusCode: number, durationMs: number, errorMessage: string, creationStackFrame: string, callStack: string, requestHeaders: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }>, responseHeaders: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }> } };

export type BackgroundJobsVariables = Exact<{
  recentRunCount: InputMaybe<Scalars['Int']>;
}>;


export type BackgroundJobsResult = { __typename?: 'Query', backgroundJobs: { __typename?: 'BackgroundJobConnection', nodes: Array<{ __typename?: 'BackgroundJob', name: string, routines: Array<{ __typename?: 'BackgroundRoutine', name: string, type: BackgroundRoutineType, description: string, intervalMs: number | null, instances: Array<{ __typename?: 'BackgroundRoutineInstance', hostName: string, lastStartedAt: string | null, lastStoppedAt: string | null }>, recentRuns: Array<{ __typename?: 'BackgroundRoutineRecentRun', at: string, hostName: string, durationMs: number, errorMessage: string | null }>, stats: { __typename?: 'BackgroundRoutineStats', since: string | null, runCount: number, errorCount: number, minDurationMs: number, avgDurationMs: number, maxDurationMs: number } }> }> } };

export type UpdateMirrorRepositoryVariables = Exact<{
  repository: Scalars['ID'];
}>;


export type UpdateMirrorRepositoryResult = { __typename?: 'Mutation', updateMirrorRepository: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CheckMirrorRepositoryConnectionVariables = Exact<{
  repository: Scalars['ID'];
}>;


export type CheckMirrorRepositoryConnectionResult = { __typename?: 'Mutation', checkMirrorRepositoryConnection: { __typename?: 'CheckMirrorRepositoryConnectionResult', error: string | null } };

export type ScheduleRepositoryPermissionsSyncVariables = Exact<{
  repository: Scalars['ID'];
}>;


export type ScheduleRepositoryPermissionsSyncResult = { __typename?: 'Mutation', scheduleRepositoryPermissionsSync: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RecloneRepositoryVariables = Exact<{
  repo: Scalars['ID'];
}>;


export type RecloneRepositoryResult = { __typename?: 'Mutation', recloneRepository: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AllConfigVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
}>;


export type AllConfigResult = { __typename?: 'Query', site: { __typename?: 'Site', id: string, configuration: { __typename?: 'SiteConfiguration', id: number, effectiveContents: string }, latestSettings: { __typename?: 'Settings', contents: string } | null, settingsCascade: { __typename?: 'SettingsCascade', final: string } }, externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, config: string, createdAt: string, updatedAt: string, warning: string | null }> }, viewerSettings: { __typename?: 'SettingsCascade', final: string, subjects: Array<{ __typename: 'DefaultSettings', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Org', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Site', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'User', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } };

export type SiteAdminSettingsCascadeFields = { __typename?: 'SettingsCascade', final: string, subjects: Array<{ __typename: 'DefaultSettings', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Org', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Site', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'User', settingsURL: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> };

export type ReloadSiteVariables = Exact<{ [key: string]: never; }>;


export type ReloadSiteResult = { __typename?: 'Mutation', reloadSite: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type RandomizeUserPasswordVariables = Exact<{
  user: Scalars['ID'];
}>;


export type RandomizeUserPasswordResult = { __typename?: 'Mutation', randomizeUserPassword: { __typename?: 'RandomizeUserPasswordResult', resetPasswordURL: string | null, emailSent: boolean } };

export type SiteAdminCreateUserVariables = Exact<{
  username: Scalars['String'];
  email: InputMaybe<Scalars['String']>;
}>;


export type SiteAdminCreateUserResult = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResult', resetPasswordURL: string | null } };

export type SiteUpdateCheckVariables = Exact<{ [key: string]: never; }>;


export type SiteUpdateCheckResult = { __typename?: 'Query', site: { __typename?: 'Site', buildVersion: string, productVersion: string, updateCheck: { __typename?: 'UpdateCheck', pending: boolean, checkedAt: string | null, errorMessage: string | null, updateVersionAvailable: string | null } } };

export type SiteUpgradeReadinessVariables = Exact<{ [key: string]: never; }>;


export type SiteUpgradeReadinessResult = { __typename?: 'Query', site: { __typename?: 'Site', autoUpgradeEnabled: boolean, upgradeReadiness: { __typename?: 'UpgradeReadiness', schemaDrift: Array<{ __typename?: 'SchemaDriftSummary', name: string, problem: string, solution: string, diff: string | null, statements: Array<string> | null, urlHint: string | null }>, requiredOutOfBandMigrations: Array<{ __typename?: 'OutOfBandMigration', id: string, description: string }> } } };

export type AutoUpgradeEnabledVariables = Exact<{ [key: string]: never; }>;


export type AutoUpgradeEnabledResult = { __typename?: 'Query', site: { __typename?: 'Site', autoUpgradeEnabled: boolean } };

export type SetAutoUpgradeVariables = Exact<{
  enable: Scalars['Boolean'];
}>;


export type SetAutoUpgradeResult = { __typename?: 'Mutation', setAutoUpgrade: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type OutOfBandMigrationsVariables = Exact<{
  excludeDeprecatedBeforeFirstVersion?: InputMaybe<Scalars['Boolean']>;
}>;


export type OutOfBandMigrationsResult = { __typename?: 'Query', outOfBandMigrations: Array<{ __typename?: 'OutOfBandMigration', id: string, team: string, component: string, description: string, introduced: string, deprecated: string | null, progress: number, created: string, lastUpdated: string | null, nonDestructive: boolean, applyReverse: boolean, errors: Array<{ __typename?: 'OutOfBandMigrationError', message: string, created: string }> }> };

export type OutOfBandMigrationFields = { __typename?: 'OutOfBandMigration', id: string, team: string, component: string, description: string, introduced: string, deprecated: string | null, progress: number, created: string, lastUpdated: string | null, nonDestructive: boolean, applyReverse: boolean, errors: Array<{ __typename?: 'OutOfBandMigrationError', message: string, created: string }> };

export type FeatureFlagsVariables = Exact<{ [key: string]: never; }>;


export type FeatureFlagsResult = { __typename?: 'Query', featureFlags: Array<{ __typename: 'FeatureFlagBoolean', name: string, value: boolean, createdAt: string, updatedAt: string, overrides: Array<{ __typename?: 'FeatureFlagOverride', id: string, value: boolean }> } | { __typename: 'FeatureFlagRollout', name: string, rolloutBasisPoints: number, createdAt: string, updatedAt: string, overrides: Array<{ __typename?: 'FeatureFlagOverride', id: string, value: boolean }> }> };

type FeatureFlagFields_FeatureFlagBoolean_ = { __typename: 'FeatureFlagBoolean', name: string, value: boolean, createdAt: string, updatedAt: string, overrides: Array<{ __typename?: 'FeatureFlagOverride', id: string, value: boolean }> };

type FeatureFlagFields_FeatureFlagRollout_ = { __typename: 'FeatureFlagRollout', name: string, rolloutBasisPoints: number, createdAt: string, updatedAt: string, overrides: Array<{ __typename?: 'FeatureFlagOverride', id: string, value: boolean }> };

export type FeatureFlagFields = FeatureFlagFields_FeatureFlagBoolean_ | FeatureFlagFields_FeatureFlagRollout_;

export type OverrideFields = { __typename?: 'FeatureFlagOverride', id: string, value: boolean };

export type StatusAndRepoStatsVariables = Exact<{ [key: string]: never; }>;


export type StatusAndRepoStatsResult = { __typename?: 'Query', repositoryStats: { __typename: 'RepositoryStats', total: number, notCloned: number, cloned: number, cloning: number, failedFetch: number, corrupted: number, indexed: number }, statusMessages: Array<{ __typename: 'CloningProgress', message: string } | { __typename: 'ExternalServiceSyncError', externalService: { __typename?: 'ExternalService', id: string, displayName: string } } | { __typename?: 'GitserverDiskThresholdReached' } | { __typename: 'GitUpdatesDisabled', message: string } | { __typename: 'IndexingProgress', notIndexed: number, indexed: number } | { __typename: 'NoRepositoriesDetected', message: string } | { __typename: 'SyncError', message: string }> };

export type SiteAdminAccessTokensVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
}>;


export type SiteAdminAccessTokensResult = { __typename?: 'Query', site: { __typename?: 'Site', accessTokens: { __typename?: 'AccessTokenConnection', totalCount: number, nodes: Array<{ __typename?: 'AccessToken', id: string, scopes: Array<string>, note: string, createdAt: string, lastUsedAt: string | null, expiresAt: string | null, subject: { __typename?: 'User', username: string }, creator: { __typename?: 'User', username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } };

export type SiteAdminAccessTokenConnectionFields = { __typename?: 'AccessTokenConnection', totalCount: number, nodes: Array<{ __typename?: 'AccessToken', id: string, scopes: Array<string>, note: string, createdAt: string, lastUsedAt: string | null, expiresAt: string | null, subject: { __typename?: 'User', username: string }, creator: { __typename?: 'User', username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type SiteExternalServiceConfigVariables = Exact<{ [key: string]: never; }>;


export type SiteExternalServiceConfigResult = { __typename?: 'Query', site: { __typename?: 'Site', externalServicesFromFile: boolean, allowEditExternalServicesWithFile: boolean } };

export type WebhookFields = { __typename?: 'Webhook', id: string, uuid: string, url: string, name: string, codeHostKind: ExternalServiceKind, codeHostURN: string, secret: string | null, updatedAt: string, createdAt: string, createdBy: { __typename?: 'User', username: string, url: string } | null, updatedBy: { __typename?: 'User', username: string, url: string } | null };

export type WebhooksListVariables = Exact<{ [key: string]: never; }>;


export type WebhooksListResult = { __typename?: 'Query', webhooks: { __typename?: 'WebhookConnection', totalCount: number, nodes: Array<{ __typename?: 'Webhook', id: string, uuid: string, url: string, name: string, codeHostKind: ExternalServiceKind, codeHostURN: string, secret: string | null, updatedAt: string, createdAt: string, createdBy: { __typename?: 'User', username: string, url: string } | null, updatedBy: { __typename?: 'User', username: string, url: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type WebhookByIdVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebhookByIdResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User' } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook', id: string, uuid: string, url: string, name: string, codeHostKind: ExternalServiceKind, codeHostURN: string, secret: string | null, updatedAt: string, createdAt: string, createdBy: { __typename?: 'User', username: string, url: string } | null, updatedBy: { __typename?: 'User', username: string, url: string } | null } | { __typename: 'WebhookLog' } | null };

export type WebhookPageHeaderVariables = Exact<{ [key: string]: never; }>;


export type WebhookPageHeaderResult = { __typename?: 'Query', webhooks: { __typename?: 'WebhookConnection', nodes: Array<{ __typename?: 'Webhook', webhookLogs: { __typename?: 'WebhookLogConnection', totalCount: number } }> }, errorsOnly: { __typename?: 'WebhookConnection', nodes: Array<{ __typename?: 'Webhook', webhookLogs: { __typename?: 'WebhookLogConnection', totalCount: number } }> } };

export type CreateWebhookVariables = Exact<{
  name: Scalars['String'];
  codeHostKind: Scalars['String'];
  codeHostURN: Scalars['String'];
  secret: InputMaybe<Scalars['String']>;
}>;


export type CreateWebhookResult = { __typename?: 'Mutation', createWebhook: { __typename?: 'Webhook', id: string } };

export type UpdateWebhookVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  codeHostKind: Scalars['String'];
  codeHostURN: Scalars['String'];
  secret: InputMaybe<Scalars['String']>;
}>;


export type UpdateWebhookResult = { __typename?: 'Mutation', updateWebhook: { __typename?: 'Webhook', id: string } };

export type ExternalServiceKindsVariables = Exact<{ [key: string]: never; }>;


export type ExternalServiceKindsResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', kind: ExternalServiceKind }> } };

export type SiteAdminPackageFields = { __typename?: 'PackageRepoReference', id: string, name: string, kind: PackageRepoReferenceKind, blocked: boolean, repository: { __typename?: 'Repository', id: string, name: string, url: string, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean, cloneInProgress: boolean, updatedAt: string | null, nextSyncAt: string | null, isCorrupted: boolean, lastError: string | null, byteSize: string, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string }> }, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } } | null };

export type PackagesVariables = Exact<{
  kind?: InputMaybe<PackageRepoReferenceKind>;
  query?: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type PackagesResult = { __typename?: 'Query', packageRepoReferences: { __typename?: 'PackageRepoReferenceConnection', totalCount: number, nodes: Array<{ __typename?: 'PackageRepoReference', id: string, name: string, kind: PackageRepoReferenceKind, blocked: boolean, repository: { __typename?: 'Repository', id: string, name: string, url: string, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean, cloneInProgress: boolean, updatedAt: string | null, nextSyncAt: string | null, isCorrupted: boolean, lastError: string | null, byteSize: string, shard: string | null, corruptionLogs: Array<{ __typename?: 'RepoCorruptionLog', timestamp: string }> }, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type SiteConfigurationHistoryVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
}>;


export type SiteConfigurationHistoryResult = { __typename?: 'Query', site: { __typename: 'Site', configuration: { __typename?: 'SiteConfiguration', history: { __typename: 'SiteConfigurationChangeConnection', totalCount: number, nodes: Array<{ __typename: 'SiteConfigurationChange', id: string, diff: string, createdAt: string, author: { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null } | null }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor: string | null, startCursor: string | null } } | null } } };

export type SiteConfigurationChangeNode = { __typename?: 'SiteConfigurationChange', id: string, diff: string, createdAt: string, author: { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null } | null };

export type GitserverFields = { __typename?: 'GitserverInstance', id: string, address: string, freeDiskSpaceBytes: string, totalDiskSpaceBytes: string };

export type GitserversVariables = Exact<{ [key: string]: never; }>;


export type GitserversResult = { __typename?: 'Query', gitservers: { __typename?: 'GitserverInstanceConnection', nodes: Array<{ __typename?: 'GitserverInstance', id: string, address: string, freeDiskSpaceBytes: string, totalDiskSpaceBytes: string }> } };

export type WebhookExternalServicesVariables = Exact<{ [key: string]: never; }>;


export type WebhookExternalServicesResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', nodes: Array<{ __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, url: string }> } };

export type WebhookExternalServiceFields = { __typename?: 'ExternalService', id: string, kind: ExternalServiceKind, displayName: string, url: string };

export type DeleteWebhookVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteWebhookResult = { __typename?: 'Mutation', deleteWebhook: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type OutboundWebhookFields = { __typename?: 'OutboundWebhook', id: string, url: string, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> };

export type OutboundWebhookFieldsWithStats = { __typename?: 'OutboundWebhook', id: string, url: string, stats: { __typename?: 'OutboundWebhookLogStats', total: number, errored: number }, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> };

export type CreateOutboundWebhookVariables = Exact<{
  input: OutboundWebhookCreateInput;
}>;


export type CreateOutboundWebhookResult = { __typename?: 'Mutation', createOutboundWebhook: { __typename?: 'OutboundWebhook', id: string, url: string, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> } };

export type DeleteOutboundWebhookVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOutboundWebhookResult = { __typename?: 'Mutation', deleteOutboundWebhook: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type OutboundWebhookByIDVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OutboundWebhookByIDResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook', id: string, url: string, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type OutboundWebhooksListVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type OutboundWebhooksListResult = { __typename?: 'Query', outboundWebhooks: { __typename?: 'OutboundWebhookConnection', totalCount: number, nodes: Array<{ __typename?: 'OutboundWebhook', id: string, url: string, stats: { __typename?: 'OutboundWebhookLogStats', total: number, errored: number }, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type UpdateOutboundWebhookVariables = Exact<{
  id: Scalars['ID'];
  input: OutboundWebhookUpdateInput;
}>;


export type UpdateOutboundWebhookResult = { __typename?: 'Mutation', updateOutboundWebhook: { __typename?: 'OutboundWebhook', id: string, url: string, eventTypes: Array<{ __typename?: 'OutboundWebhookScopedEventType', eventType: string, scope: string | null } | null> } };

export type OutboundWebhookEventTypeFields = { __typename?: 'OutboundWebhookEventType', key: string, description: string };

export type OutboundWebhookEventTypesVariables = Exact<{ [key: string]: never; }>;


export type OutboundWebhookEventTypesResult = { __typename?: 'Query', outboundWebhookEventTypes: Array<{ __typename?: 'OutboundWebhookEventType', key: string, description: string }> };

export type OutboundWebhookLogFields = { __typename?: 'OutboundWebhookLog', id: string, sentAt: string, statusCode: number, error: string | null, job: { __typename?: 'OutboundWebhookJob', eventType: string, payload: string }, request: { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }, response: { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> } | null };

export type OutboundWebhookLogsVariables = Exact<{
  id: Scalars['ID'];
  onlyErrors: Scalars['Boolean'];
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
}>;


export type OutboundWebhookLogsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook', logs: { __typename?: 'OutboundWebhookLogConnection', totalCount: number, nodes: Array<{ __typename?: 'OutboundWebhookLog', id: string, sentAt: string, statusCode: number, error: string | null, job: { __typename?: 'OutboundWebhookJob', eventType: string, payload: string }, request: { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }, response: { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type PackageRepoMatchFields = { __typename?: 'PackageRepoReference', id: string, name: string, blocked: boolean, repository: { __typename?: 'Repository', id: string, url: string, name: string, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', byteSize: string } } | null, versions: Array<{ __typename?: 'PackageRepoReferenceVersion', id: string, version: string }> };

export type PackageVersionMatchFields = { __typename?: 'PackageRepoReferenceVersion', id: string, version: string };

export type PackageRepoReferencesMatchingFilterVariables = Exact<{
  kind: PackageRepoReferenceKind;
  filter: PackageVersionOrNameFilterInput;
  first: InputMaybe<Scalars['Int']>;
}>;


export type PackageRepoReferencesMatchingFilterResult = { __typename?: 'Query', packageRepoReferencesMatchingFilter: { __typename?: 'PackageRepoReferenceConnection', totalCount: number, nodes: Array<{ __typename?: 'PackageRepoReference', id: string, name: string, blocked: boolean, repository: { __typename?: 'Repository', id: string, url: string, name: string, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', byteSize: string } } | null, versions: Array<{ __typename?: 'PackageRepoReferenceVersion', id: string, version: string }> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } | { __typename?: 'PackageRepoReferenceVersionConnection', totalCount: number, nodes: Array<{ __typename?: 'PackageRepoReferenceVersion', id: string, version: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type PackageRepoFilterFields = { __typename?: 'PackageFilter', id: string, behaviour: PackageMatchBehaviour, kind: PackageRepoReferenceKind, nameFilter: { __typename?: 'PackageNameFilter', packageGlob: string } | null, versionFilter: { __typename?: 'PackageVersionFilter', packageName: string, versionGlob: string } | null };

export type PackageRepoFiltersVariables = Exact<{ [key: string]: never; }>;


export type PackageRepoFiltersResult = { __typename?: 'Query', packageRepoFilters: Array<{ __typename?: 'PackageFilter', id: string, behaviour: PackageMatchBehaviour, kind: PackageRepoReferenceKind, nameFilter: { __typename?: 'PackageNameFilter', packageGlob: string } | null, versionFilter: { __typename?: 'PackageVersionFilter', packageName: string, versionGlob: string } | null }> | null };

export type AddPackageRepoFilterVariables = Exact<{
  kind: PackageRepoReferenceKind;
  filter: PackageVersionOrNameFilterInput;
  behaviour: PackageMatchBehaviour;
}>;


export type AddPackageRepoFilterResult = { __typename?: 'Mutation', addPackageRepoFilter: { __typename?: 'PackageFilter', id: string } };

export type DeletePackageRepoFilterVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePackageRepoFilterResult = { __typename?: 'Mutation', deletePackageRepoFilter: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UpdatePackageRepoFilterVariables = Exact<{
  id: Scalars['ID'];
  kind: PackageRepoReferenceKind;
  filter: PackageVersionOrNameFilterInput;
  behaviour: PackageMatchBehaviour;
}>;


export type UpdatePackageRepoFilterResult = { __typename?: 'Mutation', updatePackageRepoFilter: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CodeHostState = { __typename?: 'CodeHostState', providerID: string, providerType: string, status: CodeHostStatus, message: string };

export type PermissionsSyncJob = { __typename?: 'PermissionsSyncJob', id: string, state: PermissionsSyncJobState, queuedAt: string, startedAt: string | null, finishedAt: string | null, processAfter: string | null, permissionsAdded: number, permissionsRemoved: number, permissionsFound: number, failureMessage: string | null, cancellationReason: string | null, ranForMs: number | null, numResets: number | null, numFailures: number | null, lastHeartbeatAt: string | null, workerHostname: string, cancel: boolean, priority: PermissionsSyncJobPriority, noPerms: boolean, invalidateCaches: boolean, placeInQueue: number | null, partialSuccess: boolean, subject: { __typename: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } } | { __typename: 'User', id: string, username: string, displayName: string | null, email: string, avatarURL: string | null }, triggeredByUser: { __typename?: 'User', username: string } | null, reason: { __typename?: 'PermissionsSyncJobReasonWithGroup', group: PermissionsSyncJobReasonGroup, reason: PermissionsSyncJobReason | null }, codeHostStates: Array<{ __typename?: 'CodeHostState', providerID: string, providerType: string, status: CodeHostStatus, message: string }> };

export type PermissionsSyncJobsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  reasonGroup: InputMaybe<PermissionsSyncJobReasonGroup>;
  state: InputMaybe<PermissionsSyncJobState>;
  searchType: InputMaybe<PermissionsSyncJobsSearchType>;
  query: InputMaybe<Scalars['String']>;
  userID: InputMaybe<Scalars['ID']>;
  repoID: InputMaybe<Scalars['ID']>;
  partial: InputMaybe<Scalars['Boolean']>;
}>;


export type PermissionsSyncJobsResult = { __typename?: 'Query', permissionsSyncJobs: { __typename?: 'PermissionsSyncJobsConnection', totalCount: number, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null }, nodes: Array<{ __typename?: 'PermissionsSyncJob', id: string, state: PermissionsSyncJobState, queuedAt: string, startedAt: string | null, finishedAt: string | null, processAfter: string | null, permissionsAdded: number, permissionsRemoved: number, permissionsFound: number, failureMessage: string | null, cancellationReason: string | null, ranForMs: number | null, numResets: number | null, numFailures: number | null, lastHeartbeatAt: string | null, workerHostname: string, cancel: boolean, priority: PermissionsSyncJobPriority, noPerms: boolean, invalidateCaches: boolean, placeInQueue: number | null, partialSuccess: boolean, subject: { __typename: 'Repository', id: string, name: string, url: string, externalRepository: { __typename?: 'ExternalRepository', serviceType: string, serviceID: string } } | { __typename: 'User', id: string, username: string, displayName: string | null, email: string, avatarURL: string | null }, triggeredByUser: { __typename?: 'User', username: string } | null, reason: { __typename?: 'PermissionsSyncJobReasonWithGroup', group: PermissionsSyncJobReasonGroup, reason: PermissionsSyncJobReason | null }, codeHostStates: Array<{ __typename?: 'CodeHostState', providerID: string, providerType: string, status: CodeHostStatus, message: string }> }> } };

export type ScheduleRepoPermissionsSyncVariables = Exact<{
  repo: Scalars['ID'];
}>;


export type ScheduleRepoPermissionsSyncResult = { __typename?: 'Mutation', scheduleRepositoryPermissionsSync: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type CancelPermissionsSyncJobVariables = Exact<{
  job: Scalars['ID'];
}>;


export type CancelPermissionsSyncJobResult = { __typename?: 'Mutation', cancelPermissionsSyncJob: CancelPermissionsSyncJobResultMessage };

export type PermissionsSyncJobsStatsVariables = Exact<{ [key: string]: never; }>;


export type PermissionsSyncJobsStatsResult = { __typename?: 'Query', permissionsSyncingStats: { __typename?: 'PermissionsSyncingStats', queueSize: number, usersWithLatestJobFailing: number, reposWithLatestJobFailing: number, usersWithNoPermissions: number, reposWithNoPermissions: number, usersWithStalePermissions: number, reposWithStalePermissions: number }, site: { __typename?: 'Site', users: { __typename?: 'SiteUsers', totalCount: number } }, repositoryStats: { __typename?: 'RepositoryStats', total: number } };

export type UserSelectSearchFields = { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null, databaseID: number };

export type UserSelectSearchVariables = Exact<{
  search: Scalars['String'];
}>;


export type UserSelectSearchResult = { __typename?: 'Query', users: { __typename?: 'UserConnection', nodes: Array<{ __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null, databaseID: number }> } };

export type WebhookLogRequestFields = { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> };

export type WebhookLogResponseFields = { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> };

export type WebhookLogFields = { __typename?: 'WebhookLog', id: string, receivedAt: string, statusCode: number, externalService: { __typename?: 'ExternalService', displayName: string } | null, request: { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }, response: { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> } };

export type WebhookLogPageHeaderVariables = Exact<{ [key: string]: never; }>;


export type WebhookLogPageHeaderResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number, nodes: Array<{ __typename?: 'ExternalService', id: string, displayName: string }> }, webhookLogs: { __typename?: 'WebhookLogConnection', totalCount: number } };

export type WebhookLogPageHeaderExternalService = { __typename?: 'ExternalService', id: string, displayName: string };

export type WebhookLogsByWebhookIDVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  onlyErrors: Scalars['Boolean'];
  onlyUnmatched: Scalars['Boolean'];
  webhookID: Scalars['ID'];
}>;


export type WebhookLogsByWebhookIDResult = { __typename?: 'Query', webhookLogs: { __typename?: 'WebhookLogConnection', totalCount: number, nodes: Array<{ __typename?: 'WebhookLog', id: string, receivedAt: string, statusCode: number, externalService: { __typename?: 'ExternalService', displayName: string } | null, request: { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }, response: { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type ListWebhookLogs = { __typename?: 'WebhookLogConnection', totalCount: number, nodes: Array<{ __typename?: 'WebhookLog', id: string, receivedAt: string, statusCode: number, externalService: { __typename?: 'ExternalService', displayName: string } | null, request: { __typename?: 'WebhookLogRequest', body: string, method: string, url: string, version: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> }, response: { __typename?: 'WebhookLogResponse', body: string, headers: Array<{ __typename?: 'HTTPHeader', name: string, values: Array<string> }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } };

export type WebhookByIDLogPageHeaderVariables = Exact<{
  webhookID: Scalars['ID'];
}>;


export type WebhookByIDLogPageHeaderResult = { __typename?: 'Query', webhookLogs: { __typename?: 'WebhookLogConnection', totalCount: number } };

export type SiteFlagFields = { __typename?: 'Site', id: string, needsRepositoryConfiguration: boolean, freeUsersExceeded: boolean, alerts: Array<{ __typename?: 'Alert', type: AlertType, message: string, isDismissibleWithKey: string | null }>, productSubscription: { __typename?: 'ProductSubscriptionStatus', noLicenseWarningUserCount: number | null, license: { __typename?: 'ProductLicenseInfo', expiresAt: string } } };

export type SiteFlagAlertFields = { __typename?: 'Alert', type: AlertType, message: string, isDismissibleWithKey: string | null };

export type LayoutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutPageQueryResult = { __typename?: 'Query', flag1: boolean | null, flag2: boolean | null, flag3: boolean | null, site: { __typename?: 'Site', id: string, needsRepositoryConfiguration: boolean, freeUsersExceeded: boolean, alerts: Array<{ __typename?: 'Alert', type: AlertType, message: string, isDismissibleWithKey: string | null }>, productSubscription: { __typename?: 'ProductSubscriptionStatus', noLicenseWarningUserCount: number | null, license: { __typename?: 'ProductLicenseInfo', expiresAt: string } } } };

export type SearchPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchPageQueryResult = { __typename?: 'Query', codehostWidgetFlag: boolean | null, externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number } };

export type EnableSveltePrototypeVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type EnableSveltePrototypeResult = { __typename?: 'Mutation', overrideWebNext: { __typename: 'FeatureFlagOverride' }, overrideRollout: { __typename: 'FeatureFlagOverride' } };

export type TeamVariables = Exact<{
  name: Scalars['String'];
}>;


export type TeamResult = { __typename?: 'Query', team: { __typename: 'Team', id: string, name: string, displayName: string | null, avatarURL: string | null, url: string, readonly: boolean, viewerCanAdminister: boolean, parentTeam: { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string } | null, childTeams: { __typename?: 'TeamConnection', totalCount: number }, members: { __typename?: 'TeamMemberConnection', totalCount: number }, creator: { __typename?: 'User', username: string, displayName: string | null, avatarURL: string | null, url: string } | null } | null };

export type TeamAreaTeamFields = { __typename: 'Team', id: string, name: string, displayName: string | null, avatarURL: string | null, url: string, readonly: boolean, viewerCanAdminister: boolean, parentTeam: { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string } | null, childTeams: { __typename?: 'TeamConnection', totalCount: number }, members: { __typename?: 'TeamMemberConnection', totalCount: number }, creator: { __typename?: 'User', username: string, displayName: string | null, avatarURL: string | null, url: string } | null };

export type ChangeTeamDisplayNameVariables = Exact<{
  id: Scalars['ID'];
  displayName: InputMaybe<Scalars['String']>;
}>;


export type ChangeTeamDisplayNameResult = { __typename?: 'Mutation', updateTeam: { __typename?: 'Team', id: string } };

export type AssignParentTeamVariables = Exact<{
  id: Scalars['ID'];
  parentTeamName: Scalars['String'];
}>;


export type AssignParentTeamResult = { __typename?: 'Mutation', updateTeam: { __typename?: 'Team', id: string } };

export type RemoveParentTeamVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveParentTeamResult = { __typename?: 'Mutation', updateTeam: { __typename?: 'Team', id: string } };

export type CreateTeamVariables = Exact<{
  name: Scalars['String'];
  displayName: InputMaybe<Scalars['String']>;
  parentTeam: InputMaybe<Scalars['String']>;
}>;


export type CreateTeamResult = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: string, name: string, url: string } };

export type ListTeamFields = { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string, readonly: boolean, avatarURL: string | null, viewerCanAdminister: boolean, members: { __typename?: 'TeamMemberConnection', totalCount: number }, parentTeam: { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string } | null, childTeams: { __typename?: 'TeamConnection', totalCount: number } };

export type ListTeamsVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
}>;


export type ListTeamsResult = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'Team', id: string, name: string, displayName: string | null, url: string, readonly: boolean, avatarURL: string | null, viewerCanAdminister: boolean, members: { __typename?: 'TeamMemberConnection', totalCount: number }, parentTeam: { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string } | null, childTeams: { __typename?: 'TeamConnection', totalCount: number } }> } };

export type ListTeamsOfParentVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  teamName: Scalars['String'];
}>;


export type ListTeamsOfParentResult = { __typename?: 'Query', team: { __typename?: 'Team', childTeams: { __typename?: 'TeamConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'Team', id: string, name: string, displayName: string | null, url: string, readonly: boolean, avatarURL: string | null, viewerCanAdminister: boolean, members: { __typename?: 'TeamMemberConnection', totalCount: number }, parentTeam: { __typename?: 'Team', id: string, name: string, displayName: string | null, url: string } | null, childTeams: { __typename?: 'TeamConnection', totalCount: number } }> } } | null };

export type DeleteTeamVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTeamResult = { __typename?: 'Mutation', deleteTeam: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ListTeamMemberFields = { __typename: 'User', id: string, url: string, username: string, displayName: string | null, avatarURL: string | null };

export type ListTeamMembersVariables = Exact<{
  first: InputMaybe<Scalars['Int']>;
  after: InputMaybe<Scalars['String']>;
  search: InputMaybe<Scalars['String']>;
  teamName: Scalars['String'];
}>;


export type ListTeamMembersResult = { __typename?: 'Query', team: { __typename?: 'Team', id: string, members: { __typename?: 'TeamMemberConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'User', id: string, url: string, username: string, displayName: string | null, avatarURL: string | null }> } } | null };

export type RemoveTeamMembersVariables = Exact<{
  team: Scalars['ID'];
  members: Array<TeamMemberInput>;
}>;


export type RemoveTeamMembersResult = { __typename?: 'Mutation', removeTeamMembers: { __typename?: 'Team', id: string } };

export type AddTeamMembersVariables = Exact<{
  team: Scalars['ID'];
  members: Array<TeamMemberInput>;
}>;


export type AddTeamMembersResult = { __typename?: 'Mutation', addTeamMembers: { __typename?: 'Team', id: string } };

export type TeamMemberUserSelectSearchFields = { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null };

export type TeamMemberUserSelectSearchVariables = Exact<{
  search: Scalars['String'];
}>;


export type TeamMemberUserSelectSearchResult = { __typename?: 'Query', users: { __typename?: 'UserConnection', nodes: Array<{ __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null }> } };

export type ParentTeamSelectSearchFields = { __typename?: 'Team', id: string, name: string, displayName: string | null, avatarURL: string | null };

export type ParentTeamSelectSearchVariables = Exact<{
  search: Scalars['String'];
  exceptAncestor: InputMaybe<Scalars['ID']>;
}>;


export type ParentTeamSelectSearchResult = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', id: string, name: string, displayName: string | null, avatarURL: string | null }> } };

export type ExportTelemetryEventsVariables = Exact<{
  events: Array<TelemetryEventInput>;
}>;


export type ExportTelemetryEventsResult = { __typename?: 'Mutation', telemetry: { __typename?: 'TelemetryMutation', recordEvents: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null } };

export type UserOnboardingRepoValidationVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;


export type UserOnboardingRepoValidationResult = { __typename?: 'Query', repository: { __typename?: 'Repository', name: string } | null };

export type OnboardingTourConfigVariables = Exact<{ [key: string]: never; }>;


export type OnboardingTourConfigResult = { __typename?: 'Query', onboardingTourContent: { __typename?: 'OnboardingTour', current: { __typename?: 'OnboardingTourContent', id: string, value: string } | null } };

export type OnboardingTourConfigMutationVariables = Exact<{
  json: Scalars['String'];
}>;


export type OnboardingTourConfigMutationResult = { __typename?: 'Mutation', updateOnboardingTourContent: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UserAreaUserFields = { __typename: 'User', id: string, username: string, displayName: string | null, url: string, settingsURL: string | null, avatarURL: string | null, viewerCanAdminister: boolean, builtinAuth: boolean, createdAt: string, emails?: Array<{ __typename?: 'UserEmail', email: string, isPrimary: boolean }>, roles?: { __typename?: 'RoleConnection', nodes: Array<{ __typename?: 'Role', name: string, system: boolean }> } };

export type UserAreaUserProfileVariables = Exact<{
  username: Scalars['String'];
  isSourcegraphDotCom: Scalars['Boolean'];
}>;


export type UserAreaUserProfileResult = { __typename?: 'Query', user: { __typename: 'User', id: string, username: string, displayName: string | null, url: string, settingsURL: string | null, avatarURL: string | null, viewerCanAdminister: boolean, builtinAuth: boolean, createdAt: string, emails?: Array<{ __typename?: 'UserEmail', email: string, isPrimary: boolean }>, roles?: { __typename?: 'RoleConnection', nodes: Array<{ __typename?: 'Role', name: string, system: boolean }> } } | null };

export type UserSettingsAreaUserFields = { __typename: 'User', id: string, username: string, displayName: string | null, url: string, settingsURL: string | null, avatarURL: string | null, viewerCanAdminister: boolean, siteAdmin?: boolean, builtinAuth: boolean, createdAt: string, viewerCanChangeUsername: boolean, scimControlled: boolean, emails?: Array<{ __typename?: 'UserEmail', email: string, verified: boolean, isPrimary: boolean }>, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null, name: string }> }, roles?: { __typename?: 'RoleConnection', nodes: Array<{ __typename?: 'Role', name: string, system: boolean }> } };

export type UserSettingsAreaUserProfileVariables = Exact<{
  userID: Scalars['ID'];
  siteAdmin: Scalars['Boolean'];
  isSourcegraphDotCom: Scalars['Boolean'];
}>;


export type UserSettingsAreaUserProfileResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', id: string, username: string, displayName: string | null, url: string, settingsURL: string | null, avatarURL: string | null, viewerCanAdminister: boolean, siteAdmin?: boolean, builtinAuth: boolean, createdAt: string, viewerCanChangeUsername: boolean, scimControlled: boolean, emails?: Array<{ __typename?: 'UserEmail', email: string, verified: boolean, isPrimary: boolean }>, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename?: 'Org', id: string, displayName: string | null, name: string }> }, roles?: { __typename?: 'RoleConnection', nodes: Array<{ __typename?: 'Role', name: string, system: boolean }> } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type AccessTokensVariables = Exact<{
  user: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
}>;


export type AccessTokensResult = { __typename?: 'Query', node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', accessTokens: { __typename?: 'AccessTokenConnection', totalCount: number, nodes: Array<{ __typename?: 'AccessToken', id: string, scopes: Array<string>, note: string, createdAt: string, lastUsedAt: string | null, expiresAt: string | null, subject: { __typename?: 'User', username: string }, creator: { __typename?: 'User', username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type AccessTokensConnectionFields = { __typename?: 'AccessTokenConnection', totalCount: number, nodes: Array<{ __typename?: 'AccessToken', id: string, scopes: Array<string>, note: string, createdAt: string, lastUsedAt: string | null, expiresAt: string | null, subject: { __typename?: 'User', username: string }, creator: { __typename?: 'User', username: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type CreateAccessTokenVariables = Exact<{
  user: Scalars['ID'];
  scopes: Array<Scalars['String']>;
  note: Scalars['String'];
  durationSeconds: InputMaybe<Scalars['Int']>;
}>;


export type CreateAccessTokenResult = { __typename?: 'Mutation', createAccessToken: { __typename?: 'CreateAccessTokenResult', id: string, token: string } };

export type AddExternalAccountVariables = Exact<{
  serviceType: Scalars['String'];
  serviceID: Scalars['String'];
  accountDetails: Scalars['String'];
}>;


export type AddExternalAccountResult = { __typename?: 'Mutation', addExternalAccount: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UpdatePasswordVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordResult = { __typename?: 'Mutation', updatePassword: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type CreatePasswordVariables = Exact<{
  newPassword: Scalars['String'];
}>;


export type CreatePasswordResult = { __typename?: 'Mutation', createPassword: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type UserExternalAccountFields = { __typename?: 'ExternalAccount', id: string, serviceID: string, serviceType: string, clientID: string, publicAccountData: { __typename?: 'PublicExternalAccountData', displayName: string | null, login: string | null, url: string | null } | null };

export type UserExternalAccountsWithAccountDataVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserExternalAccountsWithAccountDataResult = { __typename?: 'Query', user: { __typename?: 'User', id: string, externalAccounts: { __typename?: 'ExternalAccountConnection', nodes: Array<{ __typename?: 'ExternalAccount', id: string, serviceID: string, serviceType: string, clientID: string, publicAccountData: { __typename?: 'PublicExternalAccountData', displayName: string | null, login: string | null, url: string | null } | null }> } } | null };

export type SetUserEmailVerifiedVariables = Exact<{
  user: Scalars['ID'];
  email: Scalars['String'];
  verified: Scalars['Boolean'];
}>;


export type SetUserEmailVerifiedResult = { __typename?: 'Mutation', setUserEmailVerified: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type AddUserEmailVariables = Exact<{
  user: Scalars['ID'];
  email: Scalars['String'];
}>;


export type AddUserEmailResult = { __typename?: 'Mutation', addUserEmail: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type SetUserEmailPrimaryVariables = Exact<{
  user: Scalars['ID'];
  email: Scalars['String'];
}>;


export type SetUserEmailPrimaryResult = { __typename?: 'Mutation', setUserEmailPrimary: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type ResendVerificationEmailVariables = Exact<{
  userID: Scalars['ID'];
  email: Scalars['String'];
}>;


export type ResendVerificationEmailResult = { __typename?: 'Mutation', resendVerificationEmail: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type RemoveUserEmailVariables = Exact<{
  user: Scalars['ID'];
  email: Scalars['String'];
}>;


export type RemoveUserEmailResult = { __typename?: 'Mutation', removeUserEmail: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type UserSettingsEmailsSiteFlagsVariables = Exact<{ [key: string]: never; }>;


export type UserSettingsEmailsSiteFlagsResult = { __typename?: 'Query', site: { __typename?: 'Site', id: string, sendsEmailVerificationEmails: boolean } };

export type UserEmail = { __typename?: 'UserEmail', email: string, isPrimary: boolean, verified: boolean, verificationPending: boolean, viewerCanManuallyVerify: boolean };

export type UserEmailsVariables = Exact<{
  user: Scalars['ID'];
}>;


export type UserEmailsResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename: 'User', emails: Array<{ __typename?: 'UserEmail', email: string, isPrimary: boolean, verified: boolean, verificationPending: boolean, viewerCanManuallyVerify: boolean }> } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type UpdateUserVariables = Exact<{
  user: Scalars['ID'];
  username: Scalars['String'];
  displayName: InputMaybe<Scalars['String']>;
  avatarURL: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserResult = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null } };

export type EditUserProfilePage = { __typename?: 'User', id: string, username: string, displayName: string | null, avatarURL: string | null, viewerCanChangeUsername: boolean, createdAt: string, scimControlled: boolean };

export type UserRequestQuotasVariables = Exact<{
  userID: Scalars['ID'];
}>;


export type UserRequestQuotasResult = { __typename?: 'Query', site: { __typename?: 'Site', perUserCompletionsQuota: number | null, perUserCodeCompletionsQuota: number | null }, node: { __typename: 'AccessRequest' } | { __typename: 'AccessToken' } | { __typename: 'BackgroundJob' } | { __typename: 'BatchChange' } | { __typename: 'BatchChangesCredential' } | { __typename: 'BatchSpec' } | { __typename: 'BatchSpecWorkspaceFile' } | { __typename: 'BulkOperation' } | { __typename: 'ChangesetEvent' } | { __typename: 'CodeGraphData' } | { __typename: 'CodeHost' } | { __typename: 'CodeIntelligenceConfigurationPolicy' } | { __typename: 'CodeownersIngestedFile' } | { __typename: 'Executor' } | { __typename: 'ExecutorSecret' } | { __typename: 'ExecutorSecretAccessLog' } | { __typename: 'ExternalAccount' } | { __typename: 'ExternalChangeset' } | { __typename: 'ExternalService' } | { __typename: 'ExternalServiceSyncJob' } | { __typename: 'GitCommit' } | { __typename: 'GitHubApp' } | { __typename: 'GitRef' } | { __typename: 'GitserverInstance' } | { __typename: 'HiddenBatchSpecWorkspace' } | { __typename: 'HiddenChangesetSpec' } | { __typename: 'HiddenExternalChangeset' } | { __typename: 'IndexedSearchInstance' } | { __typename: 'InsightsDashboard' } | { __typename: 'InsightView' } | { __typename: 'Monitor' } | { __typename: 'MonitorActionEvent' } | { __typename: 'MonitorEmail' } | { __typename: 'MonitorQuery' } | { __typename: 'MonitorSlackWebhook' } | { __typename: 'MonitorTriggerEvent' } | { __typename: 'MonitorWebhook' } | { __typename: 'Notebook' } | { __typename: 'Org' } | { __typename: 'OrganizationInvitation' } | { __typename: 'OutboundRequest' } | { __typename: 'OutboundWebhook' } | { __typename: 'OutOfBandMigration' } | { __typename: 'Permission' } | { __typename: 'PermissionsSyncJob' } | { __typename: 'PreciseIndex' } | { __typename: 'ProductLicense' } | { __typename: 'ProductSubscription' } | { __typename: 'Prompt' } | { __typename: 'RepoEmbeddingJob' } | { __typename: 'Repository' } | { __typename: 'Role' } | { __typename: 'SavedSearch' } | { __typename: 'SearchContext' } | { __typename: 'SearchJob' } | { __typename: 'SiteConfigurationChange' } | { __typename: 'Team' } | { __typename: 'User', completionsQuotaOverride: number | null, codeCompletionsQuotaOverride: number | null } | { __typename: 'VisibleBatchSpecWorkspace' } | { __typename: 'VisibleChangesetSpec' } | { __typename: 'Webhook' } | { __typename: 'WebhookLog' } | null };

export type SetUserCompletionsQuotaVariables = Exact<{
  userID: Scalars['ID'];
  quota: InputMaybe<Scalars['Int']>;
}>;


export type SetUserCompletionsQuotaResult = { __typename?: 'Mutation', setUserCompletionsQuota: { __typename?: 'User', id: string, completionsQuotaOverride: number | null } };

export type SetUserCodeCompletionsQuotaVariables = Exact<{
  userID: Scalars['ID'];
  quota: InputMaybe<Scalars['Int']>;
}>;


export type SetUserCodeCompletionsQuotaResult = { __typename?: 'Mutation', setUserCodeCompletionsQuota: { __typename?: 'User', id: string, codeCompletionsQuotaOverride: number | null } };
