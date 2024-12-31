import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export interface SharedGraphQlOperations {
    
/** shared/src/auth.ts */
CurrentAuthState: (variables: CurrentAuthStateVariables) => CurrentAuthStateResult

    
/** shared/src/backend/file.ts */
HighlightedFile: (variables: HighlightedFileVariables) => HighlightedFileResult

    
/** shared/src/backend/file.ts */
HighlightedFileVSCE: (variables: HighlightedFileVSCEVariables) => HighlightedFileVSCEResult

    
/** shared/src/backend/repo.ts */
ResolveRawRepoName: (variables: ResolveRawRepoNameVariables) => ResolveRawRepoNameResult

    
/** shared/src/backend/repo.ts */
TreeEntries: (variables: TreeEntriesVariables) => TreeEntriesResult

    
/** shared/src/backend/settings.ts */
ViewerSettings: (variables: ViewerSettingsVariables) => ViewerSettingsResult

    
/** shared/src/codeintel/legacy-extensions/lsif/definition-hover.ts */
LegacyDefinitionAndHover: (variables: LegacyDefinitionAndHoverVariables) => LegacyDefinitionAndHoverResult

    
/** shared/src/codeintel/legacy-extensions/lsif/implementations.ts */
LegacyImplementations: (variables: LegacyImplementationsVariables) => LegacyImplementationsResult

    
/** shared/src/codeintel/legacy-extensions/lsif/ranges.ts */
LegacyRanges: (variables: LegacyRangesVariables) => LegacyRangesResult

    
/** shared/src/codeintel/legacy-extensions/lsif/references.ts */
LegacyReferences: (variables: LegacyReferencesVariables) => LegacyReferencesResult

    
/** shared/src/codeintel/legacy-extensions/lsif/stencil.ts */
LegacyStencil: (variables: LegacyStencilVariables) => LegacyStencilResult

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LegacyResolveRepo: (variables: LegacyResolveRepoVariables) => LegacyResolveRepoResult

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LegacyFileContent: (variables: LegacyFileContentVariables) => LegacyFileContentResult

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LegacyCodeIntelSearch2: (variables: LegacyCodeIntelSearch2Variables) => LegacyCodeIntelSearch2Result

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LegacyCodeIntelSearch3: (variables: LegacyCodeIntelSearch3Variables) => LegacyCodeIntelSearch3Result

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LocalCodeIntel: (variables: LocalCodeIntelVariables) => LocalCodeIntelResult

    
/** shared/src/codeintel/legacy-extensions/util/api.ts */
LegacySymbolInfo2: (variables: LegacySymbolInfo2Variables) => LegacySymbolInfo2Result

    
/** shared/src/search/backend.ts */
ListSearchContexts: (variables: ListSearchContextsVariables) => ListSearchContextsResult

    
/** shared/src/search/backend.ts */
FetchSearchContext: (variables: FetchSearchContextVariables) => FetchSearchContextResult

    
/** shared/src/search/backend.ts */
FetchSearchContextBySpec: (variables: FetchSearchContextBySpecVariables) => FetchSearchContextBySpecResult

    
/** shared/src/search/backend.ts */
CreateSearchContext: (variables: CreateSearchContextVariables) => CreateSearchContextResult

    
/** shared/src/search/backend.ts */
UpdateSearchContext: (variables: UpdateSearchContextVariables) => UpdateSearchContextResult

    
/** shared/src/search/backend.ts */
DeleteSearchContext: (variables: DeleteSearchContextVariables) => DeleteSearchContextResult

    
/** shared/src/search/backend.ts */
IsSearchContextAvailable: (variables: IsSearchContextAvailableVariables) => IsSearchContextAvailableResult

    
/** shared/src/search/backend.ts */
highlightCode: (variables: highlightCodeVariables) => highlightCodeResult

    
/** shared/src/search/backend.ts */
EventLogsData: (variables: EventLogsDataVariables) => EventLogsDataResult

    
/** shared/src/search/backend.ts */
DefaultSearchContextSpec: (variables: DefaultSearchContextSpecVariables) => DefaultSearchContextSpecResult

    
/** shared/src/settings/edit.ts */
EditSettings: (variables: EditSettingsVariables) => EditSettingsResult

    
/** shared/src/settings/edit.ts */
OverwriteSettings: (variables: OverwriteSettingsVariables) => OverwriteSettingsResult

    
/** shared/src/settings/temporary/TemporarySettingsStorage.ts */
GetTemporarySettings: (variables: GetTemporarySettingsVariables) => GetTemporarySettingsResult

    
/** shared/src/settings/temporary/TemporarySettingsStorage.ts */
EditTemporarySettings: (variables: EditTemporarySettingsVariables) => EditTemporarySettingsResult

    
/** shared/src/settings/temporary/testUtils.tsx */
TemporarySettings: (variables: TemporarySettingsVariables) => TemporarySettingsResult

    
/** shared/src/telemetry/web/backend.ts */
LogEvents: (variables: LogEventsVariables) => LogEventsResult

    
/** shared/src/testing/driver.ts */
ExternalServicesForTests: (variables: ExternalServicesForTestsVariables) => ExternalServicesForTestsResult

    
/** shared/src/testing/driver.ts */
RepositoryNameForTests: (variables: RepositoryNameForTestsVariables) => RepositoryNameForTestsResult

    
/** shared/src/testing/driver.ts */
SiteForTests: (variables: SiteForTestsVariables) => SiteForTestsResult

    
/** shared/src/testing/driver.ts */
UpdateSiteConfigurationForTests: (variables: UpdateSiteConfigurationForTestsVariables) => UpdateSiteConfigurationForTestsResult

    
/** shared/src/testing/driver.ts */
UserSettingsForTests: (variables: UserSettingsForTestsVariables) => UserSettingsForTestsResult

    
/** shared/src/testing/driver.ts */
OverwriteSettingsForTests: (variables: OverwriteSettingsForTestsVariables) => OverwriteSettingsForTestsResult

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

/** Access request status enum */
export enum AccessRequestStatus {
  /** Access request was approved */
  APPROVED = 'APPROVED',
  /** Access request was canceled */
  CANCELED = 'CANCELED',
  /** Access request is submitted and waiting for actions */
  PENDING = 'PENDING',
  /** Access request was rejected */
  REJECTED = 'REJECTED'
}

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

/** The possible types of alerts (Alert.type values). */
export enum AlertType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING'
}

/** A pre-defined periods to get site analytics. */
export enum AnalyticsDateRange {
  /** Custom date range. */
  CUSTOM = 'CUSTOM',
  /** Last month date range. */
  LAST_MONTH = 'LAST_MONTH',
  /** Last 3 months date range. */
  LAST_THREE_MONTHS = 'LAST_THREE_MONTHS',
  /** Last week date range. */
  LAST_WEEK = 'LAST_WEEK'
}

/** Group site analytics by period. */
export enum AnalyticsGrouping {
  /** Group data by day. */
  DAILY = 'DAILY',
  /** Group data by week. */
  WEEKLY = 'WEEKLY'
}

/** AssignOwnerOrTeamInput represents the input for assigning or deleting an owner team or person. */
export interface AssignOwnerOrTeamInput {
  /** Path of the file/directory or a root path of the repo, which is assigned for ownership. */
  absolutePath: Scalars['String'];
  /** ID of an assigned owner or team. */
  assignedOwnerID: Scalars['ID'];
  /** ID of a repo, which (or which directory/file) is assigned for ownership. */
  repoID: Scalars['ID'];
}

/** Denotes the type of operation of a given log entry. */
export enum AuditLogOperation {
  /** Denotes this log entry represents an INSERT query. */
  CREATE = 'CREATE',
  /** Denotes this log entry represents an UPDATE query. */
  MODIFY = 'MODIFY'
}

/** BackfillQueueOrderBy enumerates the ways a backfill queue list can be ordered. */
export enum BackfillQueueOrderBy {
  QUEUE_POSITION = 'QUEUE_POSITION',
  STATE = 'STATE'
}

/** Enum of the possible background routine types */
export enum BackgroundRoutineType {
  /** Custom routine */
  CUSTOM = 'CUSTOM',
  /** DB-backed worker */
  DB_BACKED = 'DB_BACKED',
  /** Periodic routine */
  PERIODIC = 'PERIODIC',
  /** Periodic routine with metrics set up */
  PERIODIC_WITH_METRICS = 'PERIODIC_WITH_METRICS'
}

/** The state of the batch change. */
export enum BatchChangeState {
  CLOSED = 'CLOSED',
  DRAFT = 'DRAFT',
  OPEN = 'OPEN'
}

/** The possible sources of a batch spec. */
export enum BatchSpecSource {
  /** The spec was created from the local src-cli workflow. */
  LOCAL = 'LOCAL',
  /**
   * This spec was created for remote server-side execution, e.g. from the web UI editor,
   * or with src batch remote.
   */
  REMOTE = 'REMOTE'
}

/** The possible states of a batch spec. */
export enum BatchSpecState {
  /** The execution has been canceled. */
  CANCELED = 'CANCELED',
  /** The execution is being canceled. */
  CANCELING = 'CANCELING',
  /** This spec was processed successfully. */
  COMPLETED = 'COMPLETED',
  /** This spec failed to be processed. */
  FAILED = 'FAILED',
  /** The spec is not yet enqueued for processing. */
  PENDING = 'PENDING',
  /** This spec is being processed. */
  PROCESSING = 'PROCESSING',
  /** This spec is queued to be processed. */
  QUEUED = 'QUEUED'
}

/** State of the workspace resolution. */
export enum BatchSpecWorkspaceResolutionState {
  /** Resolving workspaces finished successfully. */
  COMPLETED = 'COMPLETED',
  /** An error occured while resolving workspaces. Will be retried eventually. */
  ERRORED = 'ERRORED',
  /** A fatal error occured while resolving workspaces. No retries will be made. */
  FAILED = 'FAILED',
  /** Currently resolving workspaces. */
  PROCESSING = 'PROCESSING',
  /** Not yet started resolving. Will be picked up by a worker eventually. */
  QUEUED = 'QUEUED'
}

/** The states a workspace can be in. */
export enum BatchSpecWorkspaceState {
  /** Execution has been canceled. */
  CANCELED = 'CANCELED',
  /** Execution is being canceled. This is an async process. */
  CANCELING = 'CANCELING',
  /** Execution finished successfully. */
  COMPLETED = 'COMPLETED',
  /** A fatal error occured while executing. No retries will be made. */
  FAILED = 'FAILED',
  /** The workspace is not yet enqueued for execution. */
  PENDING = 'PENDING',
  /** Currently executing on the workspace. */
  PROCESSING = 'PROCESSING',
  /** Not yet started executing. Will be picked up by a worker eventually. */
  QUEUED = 'QUEUED',
  /**
   * The workspace will not be enqueued for execution, because either the
   * workspace is unsupported/ignored or has 0 steps to execute.
   */
  SKIPPED = 'SKIPPED'
}

/** All valid states a bulk operation can be in. */
export enum BulkOperationState {
  /** No operations are still running and all of them finished without error. */
  COMPLETED = 'COMPLETED',
  /** No operations are still running and at least one of them finished with an error. */
  FAILED = 'FAILED',
  /** The bulk operation is still processing on some changesets. */
  PROCESSING = 'PROCESSING'
}

/** The available types of jobs that can be run over a batch change. */
export enum BulkOperationType {
  /** Bulk close changesets. */
  CLOSE = 'CLOSE',
  /** Bulk post comments over all involved changesets. */
  COMMENT = 'COMMENT',
  /** Bulk detach changesets from a batch change. */
  DETACH = 'DETACH',
  /** Export changesets. */
  EXPORT = 'EXPORT',
  /** Bulk merge changesets. */
  MERGE = 'MERGE',
  /** Bulk publish changesets. */
  PUBLISH = 'PUBLISH',
  /** Bulk reenqueue failed changesets. */
  REENQUEUE = 'REENQUEUE'
}

/** A status message of a permissions sync job cancellation. */
export enum CancelPermissionsSyncJobResultMessage {
  ERROR = 'ERROR',
  NOT_FOUND = 'NOT_FOUND',
  SUCCESS = 'SUCCESS'
}

/** The state of checks (e.g., for continuous integration) on a changeset. */
export enum ChangesetCheckState {
  FAILED = 'FAILED',
  PASSED = 'PASSED',
  PENDING = 'PENDING'
}

/** The state of a changeset on the code host on which it's hosted. */
export enum ChangesetExternalState {
  CLOSED = 'CLOSED',
  DELETED = 'DELETED',
  DRAFT = 'DRAFT',
  MERGED = 'MERGED',
  OPEN = 'OPEN',
  READONLY = 'READONLY'
}

/** The publication state of a changeset on Sourcegraph */
export enum ChangesetPublicationState {
  /** The changeset has been created on the code host. */
  PUBLISHED = 'PUBLISHED',
  /** The changeset has not yet been created on the code host. */
  UNPUBLISHED = 'UNPUBLISHED'
}

/** The reconciler state of a changeset on Sourcegraph */
export enum ChangesetReconcilerState {
  /** The changeset is not enqueued for processing. */
  COMPLETED = 'COMPLETED',
  /**
   * The changeset reconciler ran into a problem while processing the
   * changeset and will retry it for a number of retries.
   */
  ERRORED = 'ERRORED',
  /**
   * The changeset reconciler ran into a problem while processing the
   * changeset that can't be fixed by retrying.
   */
  FAILED = 'FAILED',
  /**
   * The changeset reconciler is currently computing the delta between the
   * If a delta exists, the reconciler tries to update the state of the
   * changeset on the code host and on Sourcegraph to the desired state.
   */
  PROCESSING = 'PROCESSING',
  /** The changeset is enqueued for the reconciler to process it. */
  QUEUED = 'QUEUED',
  /** The changeset is scheduled, and will be enqueued when its turn comes in Sourcegraph's rollout window. */
  SCHEDULED = 'SCHEDULED'
}

/** The review state of a changeset. */
export enum ChangesetReviewState {
  APPROVED = 'APPROVED',
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  COMMENTED = 'COMMENTED',
  DISMISSED = 'DISMISSED',
  PENDING = 'PENDING'
}

/** This enum declares all operations supported by the reconciler. */
export enum ChangesetSpecOperation {
  /** The changeset is kept in the batch change, but it's marked as archived. */
  ARCHIVE = 'ARCHIVE',
  /** Close the changeset on the codehost. */
  CLOSE = 'CLOSE',
  /** The changeset is removed from some of the associated batch changes. */
  DETACH = 'DETACH',
  /** Import an existing changeset from the code host with the ExternalID from the spec. */
  IMPORT = 'IMPORT',
  /** Publish a changeset to the codehost. */
  PUBLISH = 'PUBLISH',
  /** Publish a changeset to the codehost as a draft changeset. (Only on supported code hosts). */
  PUBLISH_DRAFT = 'PUBLISH_DRAFT',
  /** Push a new commit to the code host. */
  PUSH = 'PUSH',
  /** The changeset is re-added to the batch change. */
  REATTACH = 'REATTACH',
  /** Reopen the changeset on the codehost. */
  REOPEN = 'REOPEN',
  /** Internal operation to get around slow code host updates. */
  SLEEP = 'SLEEP',
  /** Sync the changeset with the current state on the codehost. */
  SYNC = 'SYNC',
  /** Move the existing changeset out of being a draft. */
  UNDRAFT = 'UNDRAFT',
  /**
   * Update the existing changeset on the codehost. This is purely the changeset resource on the code host,
   * not the git commit. For updates to the commit, see 'PUSH'.
   */
  UPDATE = 'UPDATE'
}

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

/** The type of the changeset spec. */
export enum ChangesetSpecType {
  /** References a branch and a patch to be applied to create the changeset from. */
  BRANCH = 'BRANCH',
  /** References an existing changeset on a code host to be imported. */
  EXISTING = 'EXISTING'
}

/** The visual state a changeset is currently in. */
export enum ChangesetState {
  /** The changeset is published, not being reconciled and closed on the code host. */
  CLOSED = 'CLOSED',
  /** The changeset is published, not being reconciled and has been deleted on the code host. */
  DELETED = 'DELETED',
  /** The changeset is published, not being reconciled and in draft state on the code host. */
  DRAFT = 'DRAFT',
  /**
   * The changeset reconciler ran into a problem while processing the
   * changeset that can't be fixed by retrying.
   */
  FAILED = 'FAILED',
  /** The changeset is published, not being reconciled and merged on the code host. */
  MERGED = 'MERGED',
  /** The changeset is published, not being reconciled and open on the code host. */
  OPEN = 'OPEN',
  /**
   * The changeset reconciler is currently computing the delta between the
   * If a delta exists, the reconciler tries to update the state of the
   * changeset on the code host and on Sourcegraph to the desired state.
   */
  PROCESSING = 'PROCESSING',
  /**
   * The changeset is published, and is now read-only, most likely due to the
   * repository being archived.
   */
  READONLY = 'READONLY',
  /**
   * The changeset reconciler ran into a problem while processing the
   * changeset and will retry it for a number of retries.
   */
  RETRYING = 'RETRYING',
  /** The changeset is scheduled, and will be enqueued when its turn comes in Sourcegraph's rollout window. */
  SCHEDULED = 'SCHEDULED',
  /** The changeset has not been marked as to be published. */
  UNPUBLISHED = 'UNPUBLISHED'
}

/** The clone status of a repository. */
export enum CloneStatus {
  CLONED = 'CLONED',
  CLONING = 'CLONING',
  NOT_CLONED = 'NOT_CLONED'
}

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

/** EXPERIMENTAL: This type may change in a backwards-incompatible way. */
export enum CodeGraphDataProvenance {
  /**
   * Based on a compiler, a type-checker or a similar data source
   * which doesn't have false positives.
   * Generally, the results are specific to a particular build configuration,
   * such as for a specific OS or CPU, which can matter for
   * codebases having a large amount of platform-specific code.
   */
  PRECISE = 'PRECISE',
  /**
   * Based on a data source that only does textual analysis, say
   * using regular expressions.
   */
  SEARCH_BASED = 'SEARCH_BASED',
  /**
   * Based on a data source that uses an abstract or concrete syntax
   * tree, but without access to reliable type information.
   */
  SYNTACTIC = 'SYNTACTIC'
}

/** EXPERIMENTAL: This type may change in a backwards-incompatible way. */
export interface CodeGraphDataProvenanceComparator {
  /** Checks for exact equality. */
  equals?: InputMaybe<CodeGraphDataProvenance>;
}

/** Describes the status of a permissions sync for a given provider (code host). */
export enum CodeHostStatus {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

/** CodeownersFileInput represents the input for ingesting codeowners files */
export interface CodeownersFileInput {
  /** fileContents is the text of the codeowners file */
  fileContents: Scalars['String'];
  /** The repo ID to ingest the file for. Cannot be set with repositoryName. */
  repoID?: InputMaybe<Scalars['ID']>;
  /** The repo name to ingest the file for. Cannot be set with repositoryID. */
  repoName?: InputMaybe<Scalars['String']>;
}

/** The version of the Cody context filters. */
export enum CodyContextFiltersVersion {
  /** Rules defining which repositories Cody may use as context in requests to third-party LLMs. */
  V1 = 'V1'
}

/**
 * The source of the rate limit returned.
 * FOR INTERNAL USE ONLY.
 */
export enum CodyGatewayRateLimitSource {
  /** Indicates that a custom override for the rate limit has been stored. */
  OVERRIDE = 'OVERRIDE',
  /** Indicates that the rate limit is inferred by the subscriptions active plan. */
  PLAN = 'PLAN'
}

/** A plan for cody subscription. */
export enum CodySubscriptionPlan {
  FREE = 'FREE',
  PRO = 'PRO'
}

/** A status for cody subscription. */
export enum CodySubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  OTHER = 'OTHER',
  PAST_DUE = 'PAST_DUE',
  TRIALING = 'TRIALING',
  UNPAID = 'UNPAID'
}

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

/** Represents the severity level of a diagnostic. */
export enum DiagnosticSeverity {
  ERROR = 'ERROR',
  HINT = 'HINT',
  INFORMATION = 'INFORMATION',
  WARNING = 'WARNING'
}

/** The type of content in a hunk line. */
export enum DiffHunkLineType {
  /** Added line. */
  ADDED = 'ADDED',
  /** Deleted line. */
  DELETED = 'DELETED',
  /** Unchanged line. */
  UNCHANGED = 'UNCHANGED'
}

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

/** Billing IDs for events, used for tagging user events for billing aggregation purposes. */
export enum EventBillingID {
  /** A billable Cody chat event, including manual chats, recipes, and more. */
  CodyChat = 'CodyChat',
  /** A billable Cody completion (aka suggestion or autocomplete) event. */
  CodyCompletion = 'CodyCompletion',
  /** A billable Cody embedding/code graph creation or search event. */
  CodyEmbedding = 'CodyEmbedding'
}

/** The product categories for events, used for billing purposes. */
export enum EventBillingProductCategory {
  /**
   * Used for all events primarily related to the Code Search product, including file and repo pageviews,
   * search actions, code navigation, batch changes, code insights, etc.
   */
  CODE_SEARCH = 'CODE_SEARCH',
  /**
   * Used for all events primarily related to the Cody product, including chats, recipes, completions, web
   * chat views, etc.
   */
  CODY = 'CODY',
  /**
   * Used for all events related to non-billable, non-product usage (e.g. marketing, CTAs, signed out
   * events, etc.)
   */
  NOT_BILLABLE = 'NOT_BILLABLE',
  /**
   * Used for all billable but shared user interface events, such as administration, authentication, user
   * profile and settings, shared landing pages, etc.
   */
  SHARED = 'SHARED'
}

/**
 * The product client where events come from.
 *
 * Future additions include:
 * - BITBUCKET_NATIVE_INTEGRATION
 * - GITLAB_NATIVE_INTEGRATION
 * - CHROME_SOURCEGRAPH_EXTENSION
 * - FIREFOX_SOURCEGRAPH_EXTENSION
 * - EDGE_SOURCEGRAPH_EXTENSION
 * - VSCODE_SOURCEGRAPH_EXTENSION (for https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph)
 * - EMACS_CODY_EXTENSION
 */
export enum EventClient {
  APP_BACKEND = 'APP_BACKEND',
  APP_WEB = 'APP_WEB',
  DOTCOM_BACKEND = 'DOTCOM_BACKEND',
  DOTCOM_WEB = 'DOTCOM_WEB',
  JETBRAINS_CODY_EXTENSION = 'JETBRAINS_CODY_EXTENSION',
  MARKETING_WEB = 'MARKETING_WEB',
  NEOVIM_CODY_EXTENSION = 'NEOVIM_CODY_EXTENSION',
  SERVER_BACKEND = 'SERVER_BACKEND',
  SERVER_WEB = 'SERVER_WEB',
  VSCODE_CODY_EXTENSION = 'VSCODE_CODY_EXTENSION'
}

/** The product sources where events can come from. */
export enum EventSource {
  BACKEND = 'BACKEND',
  CODEHOSTINTEGRATION = 'CODEHOSTINTEGRATION',
  /** DEPRECATED */
  CODY = 'CODY',
  IDEEXTENSION = 'IDEEXTENSION',
  STATICWEB = 'STATICWEB',
  WEB = 'WEB'
}

/** Supported status of monitor events. */
export enum EventStatus {
  ERROR = 'ERROR',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

/** The compatibility of the executor with the sourcegraph instance. */
export enum ExecutorCompatibility {
  /** Executor version is more than one version behind the Sourcegraph instance. */
  OUTDATED = 'OUTDATED',
  /** Executor is up-to-date with the Sourcegraph instance. */
  UP_TO_DATE = 'UP_TO_DATE',
  /** Executor version is more than one version ahead of the Sourcegraph instance. */
  VERSION_AHEAD = 'VERSION_AHEAD'
}

/** Enum of the possible scopes for executor secrets. */
export enum ExecutorSecretScope {
  /** The secret is meant to be used with Batch Changes execution. */
  BATCHES = 'BATCHES',
  /** The secret is meant to be used with Auto-indexing. */
  CODEINTEL = 'CODEINTEL'
}

/** A specific kind of external service. */
export enum ExternalServiceKind {
  AWSCODECOMMIT = 'AWSCODECOMMIT',
  AZUREDEVOPS = 'AZUREDEVOPS',
  BITBUCKETCLOUD = 'BITBUCKETCLOUD',
  BITBUCKETSERVER = 'BITBUCKETSERVER',
  GERRIT = 'GERRIT',
  GITHUB = 'GITHUB',
  GITLAB = 'GITLAB',
  GITOLITE = 'GITOLITE',
  GOMODULES = 'GOMODULES',
  JVMPACKAGES = 'JVMPACKAGES',
  NPMPACKAGES = 'NPMPACKAGES',
  OTHER = 'OTHER',
  PAGURE = 'PAGURE',
  PERFORCE = 'PERFORCE',
  PHABRICATOR = 'PHABRICATOR',
  PYTHONPACKAGES = 'PYTHONPACKAGES',
  RUBYPACKAGES = 'RUBYPACKAGES',
  RUSTPACKAGES = 'RUSTPACKAGES'
}

/** The possible states of an external service sync job. */
export enum ExternalServiceSyncJobState {
  /** Sync job has been canceled. */
  CANCELED = 'CANCELED',
  /** Sync job is being canceled. */
  CANCELING = 'CANCELING',
  /** Sync finished successfully. */
  COMPLETED = 'COMPLETED',
  /** An error occurred while syncing. Will be retried eventually. */
  ERRORED = 'ERRORED',
  /** A fatal error occurred while syncing. No retries will be made. */
  FAILED = 'FAILED',
  /** Currently syncing. */
  PROCESSING = 'PROCESSING',
  /** Not yet started. Will be picked up by a worker eventually. */
  QUEUED = 'QUEUED'
}

/** Additional options when performing a permissions sync. */
export interface FetchPermissionsOptions {
  /**
   * Indicate that any caches added for optimization encountered during this permissions
   * sync should be invalidated.
   */
  invalidateCaches?: InputMaybe<Scalars['Boolean']>;
}

/** GitHubAppDomain enumerates the domains in which GitHub Apps can be used. */
export enum GitHubAppDomain {
  /** GitHub Apps that are configured for batch changes commit signing. */
  BATCHES = 'BATCHES',
  /** GitHub Apps that are configured for repository syncing. */
  REPOS = 'REPOS'
}

/** GitHubAppKind enumerates the domains in which GitHub Apps can be used. */
export enum GitHubAppKind {
  /** GitHub Apps that are configured for commit signing. */
  COMMIT_SIGNING = 'COMMIT_SIGNING',
  /** GitHub Apps that are configured for repo syncing. */
  REPO_SYNC = 'REPO_SYNC',
  /** GitHub Apps that are configured for a site's batch changes credential. */
  SITE_CREDENTIAL = 'SITE_CREDENTIAL',
  /** GitHub Apps that are configured for a user's batch changes credential. */
  USER_CREDENTIAL = 'USER_CREDENTIAL'
}

/** All possible types of Git objects. */
export enum GitObjectType {
  /** A Git blob object. */
  GIT_BLOB = 'GIT_BLOB',
  /** A Git commit object. */
  GIT_COMMIT = 'GIT_COMMIT',
  /** A Git tag object. */
  GIT_TAG = 'GIT_TAG',
  /** A Git tree object. */
  GIT_TREE = 'GIT_TREE',
  /** A Git object of unknown type. */
  GIT_UNKNOWN = 'GIT_UNKNOWN'
}

/** All possible types of Git refs. */
export enum GitRefType {
  /** A Git branch (in refs/heads/). */
  GIT_BRANCH = 'GIT_BRANCH',
  /** A Git ref that is neither a branch nor tag. */
  GIT_REF_OTHER = 'GIT_REF_OTHER',
  /** A Git tag (in refs/tags/). */
  GIT_TAG = 'GIT_TAG'
}

/** Fields that can be grouped on for compute powered insights. */
export enum GroupByField {
  AUTHOR = 'AUTHOR',
  DATE = 'DATE',
  LANG = 'LANG',
  PATH = 'PATH',
  REPO = 'REPO'
}

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

/** The format and highlighting to use when requesting highlighting information for a file. */
export enum HighlightResponseFormat {
  /** HTML formatted file content with syntax highlighting. */
  HTML_HIGHLIGHT = 'HTML_HIGHLIGHT',
  /** HTML formatted file content without syntax highlighting. */
  HTML_PLAINTEXT = 'HTML_PLAINTEXT',
  /** SCIP highlighting information as JSON. */
  JSON_SCIP = 'JSON_SCIP'
}

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

/** Possible queue states */
export enum InsightQueueItemState {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  NEW = 'NEW',
  PROCESSING = 'PROCESSING',
  QUEUED = 'QUEUED',
  UNKNOWN = 'UNKNOWN'
}

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

/** The priority of an email action. */
export enum MonitorEmailPriority {
  CRITICAL = 'CRITICAL',
  NORMAL = 'NORMAL'
}

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

/** An enum to describe the reasons why search aggregations are not available */
export enum NotAvailableReasonType {
  INVALID_AGGREGATION_MODE_FOR_QUERY = 'INVALID_AGGREGATION_MODE_FOR_QUERY',
  INVALID_QUERY = 'INVALID_QUERY',
  OTHER_ERROR = 'OTHER_ERROR',
  TIMEOUT_EXTENSION_AVAILABLE = 'TIMEOUT_EXTENSION_AVAILABLE',
  TIMEOUT_NO_EXTENSION_AVAILABLE = 'TIMEOUT_NO_EXTENSION_AVAILABLE'
}

/** Enum of possible block types. */
export enum NotebookBlockType {
  FILE = 'FILE',
  MARKDOWN = 'MARKDOWN',
  QUERY = 'QUERY',
  SYMBOL = 'SYMBOL'
}

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

/** NotebooksOrderBy enumerates the ways notebooks can be ordered. */
export enum NotebooksOrderBy {
  NOTEBOOK_CREATED_AT = 'NOTEBOOK_CREATED_AT',
  NOTEBOOK_STAR_COUNT = 'NOTEBOOK_STAR_COUNT',
  NOTEBOOK_UPDATED_AT = 'NOTEBOOK_UPDATED_AT'
}

/** The recipient's possible responses to an invitation to join an organization as a member. */
export enum OrganizationInvitationResponseType {
  /** The invitation was accepted by the recipient. */
  ACCEPT = 'ACCEPT',
  /** The invitation was rejected by the recipient. */
  REJECT = 'REJECT'
}

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

/** The only way we can recognize ownership at this point is through CODEOWNERS file entry. */
export enum OwnershipReasonType {
  ASSIGNED_OWNER = 'ASSIGNED_OWNER',
  CODEOWNERS_FILE_ENTRY = 'CODEOWNERS_FILE_ENTRY',
  RECENT_CONTRIBUTOR_OWNERSHIP_SIGNAL = 'RECENT_CONTRIBUTOR_OWNERSHIP_SIGNAL',
  RECENT_VIEW_OWNERSHIP_SIGNAL = 'RECENT_VIEW_OWNERSHIP_SIGNAL'
}

/** OwnSignalConfigurationUpdate represents an update to an OwnSignalConfiguration. */
export interface OwnSignalConfigurationUpdate {
  /** Whether or not the signal configuration should be enabled. */
  enabled: Scalars['Boolean'];
  /** A list of repository name patterns to exclude from the signal. */
  excludedRepoPatterns: Array<Scalars['String']>;
  /** The new name for the signal configuration. */
  name: Scalars['String'];
}

/** Whether a package repo reference filter is part of the allowlist or blocklist */
export enum PackageMatchBehaviour {
  /** Allows a package repo reference to be synced. */
  ALLOW = 'ALLOW',
  /** Blocks a package repo reference from syncing. */
  BLOCK = 'BLOCK'
}

/** A package repo reference filter that matches names. */
export interface PackageNameFilterInput {
  /** Glob string to match names. */
  packageGlob: Scalars['String'];
}

/**
 * A kind of package repo reference.
 * ExternalServiceKind, with a more specific set of values.
 */
export enum PackageRepoReferenceKind {
  GOMODULES = 'GOMODULES',
  JVMPACKAGES = 'JVMPACKAGES',
  NPMPACKAGES = 'NPMPACKAGES',
  PYTHONPACKAGES = 'PYTHONPACKAGES',
  RUBYPACKAGES = 'RUBYPACKAGES',
  RUSTPACKAGES = 'RUSTPACKAGES'
}

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

/**
 * A namespace represents a distinct context within which permission policies
 * are defined and enforced.
 */
export enum PermissionNamespace {
  /** This represents the Batch Changes namespace. */
  BATCH_CHANGES = 'BATCH_CHANGES',
  /** This represents the Cody namespace. */
  CODY = 'CODY',
  /**
   * Code ownership namespace used for permitting to assign ownership
   * within Sourcegraph.
   */
  OWNERSHIP = 'OWNERSHIP',
  /** ❗ Product subscriptions are only available in Sourcegraph.com */
  PRODUCT_SUBSCRIPTIONS = 'PRODUCT_SUBSCRIPTIONS',
  /**
   * Repo Metadata namespace used for permitting to edit repository
   * key-value pair metadata.
   */
  REPO_METADATA = 'REPO_METADATA'
}

/**
 * PermissionSource indicates where a permission originated from.
 *
 * REPO_SYNC: The permission was synced from the code host, via repo-centric permission sync.
 * USER_SYNC: The permission was synced from the code host using user-centric permission sync.
 * API: The permission was set explicitly via the GraphQL API.
 */
export enum PermissionSource {
  API = 'API',
  REPO_SYNC = 'REPO_SYNC',
  USER_SYNC = 'USER_SYNC'
}

/** Permission sync job priority. */
export enum PermissionsSyncJobPriority {
  HIGH = 'HIGH',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM'
}

/** State types of permission sync jobs. */
export enum PermissionsSyncJobReason {
  REASON_EXTERNAL_ACCOUNT_ADDED = 'REASON_EXTERNAL_ACCOUNT_ADDED',
  REASON_EXTERNAL_ACCOUNT_DELETED = 'REASON_EXTERNAL_ACCOUNT_DELETED',
  REASON_GITHUB_ORG_MEMBER_ADDED_EVENT = 'REASON_GITHUB_ORG_MEMBER_ADDED_EVENT',
  REASON_GITHUB_ORG_MEMBER_REMOVED_EVENT = 'REASON_GITHUB_ORG_MEMBER_REMOVED_EVENT',
  REASON_GITHUB_REPO_EVENT = 'REASON_GITHUB_REPO_EVENT',
  REASON_GITHUB_REPO_MADE_PRIVATE_EVENT = 'REASON_GITHUB_REPO_MADE_PRIVATE_EVENT',
  REASON_GITHUB_TEAM_ADDED_TO_REPO_EVENT = 'REASON_GITHUB_TEAM_ADDED_TO_REPO_EVENT',
  REASON_GITHUB_TEAM_REMOVED_FROM_REPO_EVENT = 'REASON_GITHUB_TEAM_REMOVED_FROM_REPO_EVENT',
  REASON_GITHUB_USER_ADDED_EVENT = 'REASON_GITHUB_USER_ADDED_EVENT',
  REASON_GITHUB_USER_EVENT = 'REASON_GITHUB_USER_EVENT',
  REASON_GITHUB_USER_MEMBERSHIP_ADDED_EVENT = 'REASON_GITHUB_USER_MEMBERSHIP_ADDED_EVENT',
  REASON_GITHUB_USER_MEMBERSHIP_REMOVED_EVENT = 'REASON_GITHUB_USER_MEMBERSHIP_REMOVED_EVENT',
  REASON_GITHUB_USER_REMOVED_EVENT = 'REASON_GITHUB_USER_REMOVED_EVENT',
  REASON_MANUAL_REPO_SYNC = 'REASON_MANUAL_REPO_SYNC',
  REASON_MANUAL_USER_SYNC = 'REASON_MANUAL_USER_SYNC',
  REASON_REPO_NO_PERMS = 'REASON_REPO_NO_PERMS',
  REASON_REPO_OUTDATED_PERMS = 'REASON_REPO_OUTDATED_PERMS',
  REASON_REPO_UPDATED_FROM_CODE_HOST = 'REASON_REPO_UPDATED_FROM_CODE_HOST',
  REASON_USER_ACCEPTED_ORG_INVITE = 'REASON_USER_ACCEPTED_ORG_INVITE',
  REASON_USER_ADDED = 'REASON_USER_ADDED',
  REASON_USER_ADDED_TO_ORG = 'REASON_USER_ADDED_TO_ORG',
  REASON_USER_EMAIL_REMOVED = 'REASON_USER_EMAIL_REMOVED',
  REASON_USER_EMAIL_VERIFIED = 'REASON_USER_EMAIL_VERIFIED',
  REASON_USER_NO_PERMS = 'REASON_USER_NO_PERMS',
  REASON_USER_OUTDATED_PERMS = 'REASON_USER_OUTDATED_PERMS',
  REASON_USER_REMOVED_FROM_ORG = 'REASON_USER_REMOVED_FROM_ORG'
}

/** Sync reason groups of permission sync jobs. */
export enum PermissionsSyncJobReasonGroup {
  MANUAL = 'MANUAL',
  SCHEDULE = 'SCHEDULE',
  SOURCEGRAPH = 'SOURCEGRAPH',
  UNKNOWN = 'UNKNOWN',
  WEBHOOK = 'WEBHOOK'
}

/** Type of search for permissions sync jobs: user or repository. */
export enum PermissionsSyncJobsSearchType {
  REPOSITORY = 'REPOSITORY',
  USER = 'USER'
}

/** State types of permissions sync jobs. */
export enum PermissionsSyncJobState {
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  ERRORED = 'ERRORED',
  FAILED = 'FAILED',
  PROCESSING = 'PROCESSING',
  QUEUED = 'QUEUED'
}

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

/**
 * Possible states for PreciseIndexes.
 *
 * This type would more accurately be called "CodeGraphIndexJobState"
 * as it covers both precise and syntactic indexing.
 *
 * See https://sourcegraph.com/docs/code-search/code-navigation/auto_indexing#lifecycle-of-an-indexing-job
 * and https://sourcegraph.com/docs/code-search/code-navigation/explanations/uploads#lifecycle-of-an-upload
 * for details about state transitions.
 */
export enum PreciseIndexState {
  COMPLETED = 'COMPLETED',
  DELETED = 'DELETED',
  DELETING = 'DELETING',
  INDEXING = 'INDEXING',
  INDEXING_COMPLETED = 'INDEXING_COMPLETED',
  INDEXING_ERRORED = 'INDEXING_ERRORED',
  PROCESSING = 'PROCESSING',
  PROCESSING_ERRORED = 'PROCESSING_ERRORED',
  QUEUED_FOR_INDEXING = 'QUEUED_FOR_INDEXING',
  QUEUED_FOR_PROCESSING = 'QUEUED_FOR_PROCESSING',
  UPLOADING_INDEX = 'UPLOADING_INDEX'
}

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

/** The ways that a list of prompts can be ordered. */
export enum PromptsOrderBy {
  PROMPT_NAME_WITH_OWNER = 'PROMPT_NAME_WITH_OWNER',
  PROMPT_UPDATED_AT = 'PROMPT_UPDATED_AT'
}

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

/** The visibility states for a prompt. */
export enum PromptVisibility {
  /** The prompt is visible to all users on the instance. */
  PUBLIC = 'PUBLIC',
  /**
   * The prompt is visible only to the owner organization's members (if the owner is an organization)
   * or the owner user (if the owner is a user).
   */
  SECRET = 'SECRET'
}

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

/** State types of repo embedding sync jobs. */
export enum RepoEmbeddingJobState {
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  ERRORED = 'ERRORED',
  FAILED = 'FAILED',
  PROCESSING = 'PROCESSING',
  QUEUED = 'QUEUED'
}

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface RepositoryFilter {
  /** Compare the repository by name. */
  name: StringComparator;
}

/** RepositoryOrderBy enumerates the ways a repositories list can be ordered. */
export enum RepositoryOrderBy {
  REPO_CREATED_AT = 'REPO_CREATED_AT',
  /** deprecated (use the equivalent REPOSITORY_CREATED_AT) */
  REPOSITORY_CREATED_AT = 'REPOSITORY_CREATED_AT',
  REPOSITORY_NAME = 'REPOSITORY_NAME',
  SIZE = 'SIZE'
}

/** Different repository permission levels. */
export enum RepositoryPermission {
  READ = 'READ'
}

/** A custom repository scope for an insight data series. */
export interface RepositoryScopeInput {
  /** The list of repositories included in this scope. */
  repositories: Array<Scalars['String']>;
  /** A search query to select repositories for this scope. */
  repositoryCriteria?: InputMaybe<Scalars['String']>;
}

/**
 * All possible types of currently supported repositories, even though they may be stored
 * as a git repository on disk.
 */
export enum RepositoryType {
  GIT_REPOSITORY = 'GIT_REPOSITORY',
  PERFORCE_DEPOT = 'PERFORCE_DEPOT'
}

/** The ways that a list of saved searches can be ordered. */
export enum SavedSearchesOrderBy {
  SAVED_SEARCH_DESCRIPTION = 'SAVED_SEARCH_DESCRIPTION',
  SAVED_SEARCH_UPDATED_AT = 'SAVED_SEARCH_UPDATED_AT'
}

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

/** The visibility states for a saved search. */
export enum SavedSearchVisibility {
  /** The saved search is visible to all users on the instance. */
  PUBLIC = 'PUBLIC',
  /**
   * The saved search is visible only to the owner organization's members (if the owner is an organization)
   * or the owner user (if the owner is a user).
   */
  SECRET = 'SECRET'
}

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

/** Supported aggregation modes for search aggregations */
export enum SearchAggregationMode {
  AUTHOR = 'AUTHOR',
  CAPTURE_GROUP = 'CAPTURE_GROUP',
  PATH = 'PATH',
  REPO = 'REPO',
  REPO_METADATA = 'REPO_METADATA'
}

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

/** SearchContextsOrderBy enumerates the ways a search contexts list can be ordered. */
export enum SearchContextsOrderBy {
  SEARCH_CONTEXT_SPEC = 'SEARCH_CONTEXT_SPEC',
  SEARCH_CONTEXT_UPDATED_AT = 'SEARCH_CONTEXT_UPDATED_AT'
}

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

/** The order by which search jobs are sorted. */
export enum SearchJobsOrderBy {
  /** Sort search jobs by their creation date. */
  CREATED_AT = 'CREATED_AT',
  /** Sort search jobs by their query. */
  QUERY = 'QUERY',
  /** Sort search jobs by their state. */
  STATE = 'STATE'
}

/** The state of a search job. */
export enum SearchJobState {
  /** The search job was canceled. */
  CANCELED = 'CANCELED',
  /** The search job has completed. */
  COMPLETED = 'COMPLETED',
  /** The search job had an error. */
  ERRORED = 'ERRORED',
  /** The search job has failed. */
  FAILED = 'FAILED',
  /** The search job is being processed. */
  PROCESSING = 'PROCESSING',
  /** The search job has been created and is waiting to be processed. */
  QUEUED = 'QUEUED'
}

/** The search pattern type. */
export enum SearchPatternType {
  codycontext = 'codycontext',
  keyword = 'keyword',
  literal = 'literal',
  lucky = 'lucky',
  regexp = 'regexp',
  standard = 'standard',
  structural = 'structural'
}

/** The output format to emit for a parsed query. */
export enum SearchQueryOutputFormat {
  /** JSON format. */
  JSON = 'JSON',
  /** Mermaid flowchart format. */
  MERMAID = 'MERMAID',
  /** S-expression format. */
  SEXP = 'SEXP'
}

/**
 * Represents phases in query parsing. The parse tree corresponds closely to the
 * input query syntax. A subsequent processing phase on the parse tree generates a
 * job tree. The job tree is an internal representation analogous to a database
 * query plan. The job tree discards information about query syntax and corresponds
 * closely to backend services (text search, git commit search, etc.).
 */
export enum SearchQueryOutputPhase {
  JOB_TREE = 'JOB_TREE',
  PARSE_TREE = 'PARSE_TREE'
}

/** The output format to emit for a parsed query. */
export enum SearchQueryOutputVerbosity {
  /** Basic verbosity outputs nodes and essential fields associated with nodes. */
  BASIC = 'BASIC',
  /** Maximal verbosity outputs nodes and all information associated with nodes. */
  MAXIMAL = 'MAXIMAL',
  /** Minimal verbosity outputs only nodes. */
  MINIMAL = 'MINIMAL'
}

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

/** The version of the search syntax. */
export enum SearchVersion {
  /** Search syntax that defaults to regexp search. */
  V1 = 'V1',
  /** Search syntax that defaults to literal-only search. */
  V2 = 'V2',
  /** Search syntax that defaults to standard search. */
  V3 = 'V3'
}

/** Input type for series display options. */
export interface SeriesDisplayOptionsInput {
  /** Max number of series to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Max number of samples to return. */
  numSamples?: InputMaybe<Scalars['Int']>;
  /** Sort options for the series. */
  sortOptions?: InputMaybe<SeriesSortOptionsInput>;
}

/** Sort direction for series. */
export enum SeriesSortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

/** Sort mode for series. */
export enum SeriesSortMode {
  DATE_ADDED = 'DATE_ADDED',
  LEXICOGRAPHICAL = 'LEXICOGRAPHICAL',
  RESULT_COUNT = 'RESULT_COUNT'
}

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

/** SiteUserOrderBy enumerates the ways a users list can be ordered. */
export enum SiteUserOrderBy {
  /** The datetime when user was added to the system. */
  CREATED_AT = 'CREATED_AT',
  /** The datetime when user was soft deleted. */
  DELETED_AT = 'DELETED_AT',
  /** User's primary email. */
  EMAIL = 'EMAIL',
  /** The total number of user's event_logs. */
  EVENTS_COUNT = 'EVENTS_COUNT',
  /** The last event_log datetime. */
  LAST_ACTIVE_AT = 'LAST_ACTIVE_AT',
  /** Whether the user is site admin or not. */
  SITE_ADMIN = 'SITE_ADMIN',
  USERNAME = 'USERNAME'
}

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

/** Speaker type, human or assistant */
export enum SpeakerType {
  ASSISTANT = 'ASSISTANT',
  HUMAN = 'HUMAN'
}

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

/** Possible answers to "You use Sourcegraph to..." in the NPS Survey. */
export enum SurveyUseCase {
  FIX_SECURITY_VULNERABILITIES = 'FIX_SECURITY_VULNERABILITIES',
  IMPROVE_CODE_QUALITY = 'IMPROVE_CODE_QUALITY',
  RESPOND_TO_INCIDENTS = 'RESPOND_TO_INCIDENTS',
  REUSE_CODE = 'REUSE_CODE',
  UNDERSTAND_NEW_CODE = 'UNDERSTAND_NEW_CODE'
}

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

/**
 * All possible kinds of symbols. This set matches that of the Language Server Protocol
 * (https://microsoft.github.io/language-server-protocol/specification#workspace_symbol).
 */
export enum SymbolKind {
  ARRAY = 'ARRAY',
  BOOLEAN = 'BOOLEAN',
  CLASS = 'CLASS',
  CONSTANT = 'CONSTANT',
  CONSTRUCTOR = 'CONSTRUCTOR',
  ENUM = 'ENUM',
  ENUMMEMBER = 'ENUMMEMBER',
  EVENT = 'EVENT',
  FIELD = 'FIELD',
  FILE = 'FILE',
  FUNCTION = 'FUNCTION',
  INTERFACE = 'INTERFACE',
  KEY = 'KEY',
  METHOD = 'METHOD',
  MODULE = 'MODULE',
  NAMESPACE = 'NAMESPACE',
  NULL = 'NULL',
  NUMBER = 'NUMBER',
  OBJECT = 'OBJECT',
  OPERATOR = 'OPERATOR',
  PACKAGE = 'PACKAGE',
  PROPERTY = 'PROPERTY',
  STRING = 'STRING',
  STRUCT = 'STRUCT',
  TYPEPARAMETER = 'TYPEPARAMETER',
  UNKNOWN = 'UNKNOWN',
  VARIABLE = 'VARIABLE'
}

/** EXPERIMENTAL: This type may make backwards-incompatible changes in the future. */
export interface SymbolNameComparator {
  /** Checks for exact equality. */
  equals?: InputMaybe<Scalars['String']>;
}

/** EXPERIMENTAL: This type may change in a backwards-compatible way. */
export enum SymbolRole {
  DEFINITION = 'DEFINITION',
  /**
   * Applicable for forward declarations in languages with header files (C, C++ etc.)
   * as well as standalone signatures in languages with separate interface files (OCaml etc.).
   */
  FORWARD_DEFINITION = 'FORWARD_DEFINITION',
  REFERENCE = 'REFERENCE'
}

/**
 * Categorizes a usage based on its relationship to the symbol of interest.
 *
 * This enum may be expanded in the future.
 *
 * EXPERIMENTAL: This type may change in a backwards-incompatible way in the future.
 */
export enum SymbolUsageKind {
  /**
   * Denotes a usage as being a definition.
   *
   * interface Animal:
   *     sound()
   *
   * class Dog implements Animal:
   *     sound() override { ... }
   *
   * func makeSounds(animal: Animal, dog: Dog):
   *     animal.sound()
   *     #      ^---^ (1)
   *     dog.sound()
   *     #   ^---^ (2)
   *
   * Here, usagesForSymbol for (1) will return a Definition usage for Animal.sound().
   * Similarly, usagesForSymbol for (2) will return a Definition usage for Dog.sound().
   *
   * In the general case, a symbol may have multiple definitions.
   * Here are some examples:
   *
   * 1. Python allows for multiple inheritance, so the same field can
   *    be declared in multiple parent classes. In such a situation,
   *    even Precise results may have multiple definitions.
   * 2. A function may have different definitions based on the build
   *    configuration, such as for macOS vs Windows. A precise SCIP indexer
   *    may unify all such definitions into a single index as SCIP
   *    currently (as of June 20 2024) doesn't support tracking build
   *    configuration.
   * 3. Syntactic or search-based results may not be able to find the
   *    exact definition, so they may return a superset of the full set
   *    of definitions.
   */
  DEFINITION = 'DEFINITION',
  /**
   * Denotes a usage as being an 'implementation', generally of a method, interface
   * or similar (the exact terminology varies across languages - traits, protocols etc.).
   *
   * For example, consider the following pseudocode:
   *
   * interface Animal:
   * #         ^----^ (1)
   *     sound()
   * #   ^---^ (2)
   *
   * class Dog implements Animal:
   *     sound() override { ... }
   *
   * Here, usagesForSymbol for (1) will return an Implementation usage for Dog.
   * Similarly, usagesForSymbol for (2) will return an Implementation usage for Dog.sound().
   *
   * As of June 20 2024, Implementation usages are only supported by
   * Precise indexers. Syntactic and search-based usagesForSymbol will mark all
   * such usages as Reference.
   */
  IMPLEMENTATION = 'IMPLEMENTATION',
  /**
   * Denotes a usage as being a reference. References are unified across
   * the inheritance hierarchy. For example, consider the following pseudocode:
   *
   * interface Animal:
   *     sound()
   *
   * class Dog implements Animal:
   *     sound() override { ... }
   *
   * func makeSounds(animal: Animal, dog: Dog):
   *     animal.sound()
   * #          ^---^ (1)
   *     dog.sound()
   * #       ^---^ (2)
   *
   * Here, usagesForSymbol for both (1) and (2) will return Reference usages
   * for both Animal.sound() and Dog.sound().
   * - For (1), it makes sense to also return reference usages for Dog.sound()
   *   because 'animal' may actually be a Dog.
   * - For (2), it makes sense to also return reference usages for Animal.sound()
   *   because 'dog' value may be up-cast to Animal at some point and the
   *   and 'sound()' might be called on it after that.
   */
  REFERENCE = 'REFERENCE',
  /**
   * Denotes a usage as being a 'super', generally of a method, type or similar.
   * The exact terminology varies across languages and the syntax under question -
   * for functions, it might be 'superclass method', 'interface method', 'trait method' etc.
   * and for types, it might be 'superclass', 'interface', 'trait' etc.
   *
   * For example, consider the following pseudocode:
   *
   * interface Animal:
   *     sound()
   *
   * class Dog implements Animal:
   *     sound() override { ... }
   *
   * func bark(dog: Dog):
   *                ^-^ (1)
   *     dog.sound()
   *         ^---^ (2)
   *
   * Here, usagesForSymbol for (1) will return a Super usage for Animal.
   * Similarly, usagesForSymbol for (2) will return a Super usage for Animal.sound().
   *
   * As of June 20 2024, Super usages are only supported by
   * Precise indexers. Syntactic and search-based usagesForSymbol will mark all
   * such usages as Reference.
   *
   * UI note: Strictly speaking, depending on the exact symbol and language under
   * consideration, 'Super' usages would be better be grouped under a heading like:
   *
   * - Method specification (for methods satisfying the signature of an interface
   *   method in Go or Java)
   * - Interface (for types implementing an interface in Go or Java)
   * - Trait method (for methods satisfying the signature of a trait method in Rust)
   * - Trait (for types implementing a trait in Rust)
   *
   * and so on. Due to this large variation across languages, we've chosen
   * to group all such usages under 'Super' for now.
   *
   * Historical note: This was previously called 'prototype' in the old API.
   * However, 'prototype' has a specific meaning in C++ different from our usage,
   * so we recommend avoiding the term 'prototype' in the UI.
   */
  SUPER = 'SUPER'
}

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

/** Time interval units. */
export enum TimeIntervalStepUnit {
  DAY = 'DAY',
  HOUR = 'HOUR',
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  YEAR = 'YEAR'
}

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

/** A period of time in which a set of users have been active. */
export enum UserActivePeriod {
  /** All time. */
  ALL_TIME = 'ALL_TIME',
  /** Since the first day of the current month at 00:00 UTC. */
  THIS_MONTH = 'THIS_MONTH',
  /** Since the latest Monday at 00:00 UTC. */
  THIS_WEEK = 'THIS_WEEK',
  /** Since today at 00:00 UTC. */
  TODAY = 'TODAY'
}

/** A user event. */
export enum UserEvent {
  CODEINTEL = 'CODEINTEL',
  CODEINTELINTEGRATION = 'CODEINTELINTEGRATION',
  CODEINTELINTEGRATIONREFS = 'CODEINTELINTEGRATIONREFS',
  CODEINTELREFS = 'CODEINTELREFS',
  PAGEVIEW = 'PAGEVIEW',
  SEARCHQUERY = 'SEARCHQUERY',
  STAGEAUTOMATE = 'STAGEAUTOMATE',
  STAGECODE = 'STAGECODE',
  STAGECONFIGURE = 'STAGECONFIGURE',
  STAGEDEPLOY = 'STAGEDEPLOY',
  /** Product stages */
  STAGEMANAGE = 'STAGEMANAGE',
  STAGEMONITOR = 'STAGEMONITOR',
  STAGEPACKAGE = 'STAGEPACKAGE',
  STAGEPLAN = 'STAGEPLAN',
  STAGEREVIEW = 'STAGEREVIEW',
  STAGESECURE = 'STAGESECURE',
  STAGEVERIFY = 'STAGEVERIFY'
}

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

/** Possible sort orderings for a workspace connection. */
export enum WorkspacesSortOrder {
  /** Sort by repository name in ascending order. */
  REPO_NAME_ASC = 'REPO_NAME_ASC',
  /** Sort by repository name in descending order. */
  REPO_NAME_DESC = 'REPO_NAME_DESC'
}

export type CurrentAuthStateVariables = Exact<{ [key: string]: never; }>;


export type CurrentAuthStateResult = { __typename?: 'Query', currentUser: { __typename: 'User', id: string, databaseID: number, username: string, avatarURL: string | null, displayName: string | null, siteAdmin: boolean, url: string, settingsURL: string | null, viewerCanAdminister: boolean, tosAccepted: boolean, hasVerifiedEmail: boolean, organizations: { __typename?: 'OrgConnection', nodes: Array<{ __typename: 'Org', id: string, name: string, url: string, settingsURL: string | null }> }, session: { __typename?: 'Session', canSignOut: boolean }, emails: Array<{ __typename?: 'UserEmail', email: string, verified: boolean, isPrimary: boolean }>, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null, permissions: { __typename?: 'PermissionConnection', nodes: Array<{ __typename?: 'Permission', id: string, displayName: string }> } } | null };

export type HighlightedFileVariables = Exact<{
  repoName: Scalars['String'];
  commitID: Scalars['String'];
  filePath: Scalars['String'];
  disableTimeout: Scalars['Boolean'];
  ranges: Array<HighlightLineRange>;
  format: HighlightResponseFormat;
}>;


export type HighlightedFileResult = { __typename?: 'Query', repository: { __typename?: 'Repository', commit: { __typename?: 'GitCommit', file: { __typename?: 'BatchSpecWorkspaceFile', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | { __typename?: 'GitBlob', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | { __typename?: 'VirtualFile', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | null } | null } | null };

export type HighlightedFileVSCEVariables = Exact<{
  repoName: Scalars['String'];
  commitID: Scalars['String'];
  filePath: Scalars['String'];
  disableTimeout: Scalars['Boolean'];
  ranges: Array<HighlightLineRange>;
}>;


export type HighlightedFileVSCEResult = { __typename?: 'Query', repository: { __typename?: 'Repository', commit: { __typename?: 'GitCommit', file: { __typename?: 'BatchSpecWorkspaceFile', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | { __typename?: 'GitBlob', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | { __typename?: 'VirtualFile', isDirectory: boolean, richHTML: string, highlight: { __typename?: 'HighlightedFile', aborted: boolean, lineRanges: Array<Array<string>> } } | null } | null } | null };

export type ResolveRawRepoNameVariables = Exact<{
  repoName: Scalars['String'];
}>;


export type ResolveRawRepoNameResult = { __typename?: 'Query', repository: { __typename?: 'Repository', uri: string, mirrorInfo: { __typename?: 'MirrorRepositoryInfo', cloned: boolean } } | null };

export type TreeEntriesVariables = Exact<{
  repoName: Scalars['String'];
  revision: Scalars['String'];
  commitID: Scalars['String'];
  filePath: Scalars['String'];
  first: InputMaybe<Scalars['Int']>;
}>;


export type TreeEntriesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', tree: { __typename?: 'GitTree', isRoot: boolean, url: string, entries: Array<{ __typename: 'GitBlob', languages: Array<string>, name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null } | { __typename: 'GitTree', name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null }> } | null } | null } | null };

export type TreeFields = { __typename?: 'GitTree', isRoot: boolean, url: string, entries: Array<{ __typename: 'GitBlob', languages: Array<string>, name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null } | { __typename: 'GitTree', name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null }> };

type TreeEntryFields_GitBlob_ = { __typename?: 'GitBlob', name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null };

type TreeEntryFields_GitTree_ = { __typename?: 'GitTree', name: string, path: string, isDirectory: boolean, url: string, submodule: { __typename?: 'Submodule', url: string, commit: string } | null };

export type TreeEntryFields = TreeEntryFields_GitBlob_ | TreeEntryFields_GitTree_;

export type SettingsCascadeFields = { __typename?: 'SettingsCascade', final: string, subjects: Array<{ __typename: 'DefaultSettings', id: string, settingsURL: string | null, viewerCanAdminister: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Org', id: string, settingsURL: string | null, viewerCanAdminister: boolean, name: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Site', id: string, settingsURL: string | null, viewerCanAdminister: boolean, siteID: string, allowSiteSettingsEdits: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'User', id: string, settingsURL: string | null, viewerCanAdminister: boolean, username: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> };

export type OrgSettingFields = { __typename: 'Org', id: string, settingsURL: string | null, viewerCanAdminister: boolean, name: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null };

export type UserSettingFields = { __typename: 'User', id: string, settingsURL: string | null, viewerCanAdminister: boolean, username: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null };

export type SiteSettingFields = { __typename: 'Site', id: string, settingsURL: string | null, viewerCanAdminister: boolean, siteID: string, allowSiteSettingsEdits: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null };

export type DefaultSettingFields = { __typename: 'DefaultSettings', id: string, settingsURL: string | null, viewerCanAdminister: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null };

export type ViewerSettingsVariables = Exact<{ [key: string]: never; }>;


export type ViewerSettingsResult = { __typename?: 'Query', viewerSettings: { __typename?: 'SettingsCascade', final: string, subjects: Array<{ __typename: 'DefaultSettings', id: string, settingsURL: string | null, viewerCanAdminister: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Org', id: string, settingsURL: string | null, viewerCanAdminister: boolean, name: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'Site', id: string, settingsURL: string | null, viewerCanAdminister: boolean, siteID: string, allowSiteSettingsEdits: boolean, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | { __typename: 'User', id: string, settingsURL: string | null, viewerCanAdminister: boolean, username: string, displayName: string | null, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null }> } };

export type LegacyDefinitionAndHoverVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
}>;


export type LegacyDefinitionAndHoverResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, lsif: { __typename?: 'GitBlobLSIFData', definitions: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }> }, hover: { __typename?: 'Hover', markdown: { __typename?: 'Markdown', text: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } } | null } | null } | null } | null } | null };

export type LegacyImplementationsVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
}>;


export type LegacyImplementationsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, lsif: { __typename?: 'GitBlobLSIFData', implementations: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type LegacyRangesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  startLine: Scalars['Int'];
  endLine: Scalars['Int'];
}>;


export type LegacyRangesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, lsif: { __typename?: 'GitBlobLSIFData', ranges: { __typename?: 'CodeIntelligenceRangeConnection', nodes: Array<{ __typename?: 'CodeIntelligenceRange', range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } }, definitions: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }> }, references: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }> }, hover: { __typename?: 'Hover', markdown: { __typename?: 'Markdown', text: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } } | null }> } | null } | null } | null } | null } | null };

export type LegacyReferencesVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
}>;


export type LegacyReferencesResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, lsif: { __typename?: 'GitBlobLSIFData', references: { __typename?: 'LocationConnection', nodes: Array<{ __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string, repository: { __typename?: 'CodeIntelRepository', name: string }, commit: { __typename?: 'CodeIntelCommit', oid: string } }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null }>, pageInfo: { __typename?: 'PageInfo', endCursor: string | null } } } | null } | null } | null } | null };

export type LegacyStencilVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
}>;


export type LegacyStencilResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, lsif: { __typename?: 'GitBlobLSIFData', stencil: Array<{ __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } }> } | null } | null } | null } | null };

export type LegacyResolveRepoVariables = Exact<{
  name: Scalars['String'];
}>;


export type LegacyResolveRepoResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, name: string, isFork: boolean, isArchived: boolean } | null };

export type LegacyFileContentVariables = Exact<{
  repo: Scalars['String'];
  rev: Scalars['String'];
  path: Scalars['String'];
}>;


export type LegacyFileContentResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, file: { __typename?: 'BatchSpecWorkspaceFile', canonicalURL: string, content: string } | { __typename?: 'GitBlob', canonicalURL: string, content: string } | { __typename?: 'VirtualFile', canonicalURL: string, content: string } | null } | null } | null };

export type SearchResults = { __typename?: 'Search', results: { __typename: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', canonicalURL: string, path: string, commit: { __typename?: 'GitCommit', oid: string } }, repository: { __typename?: 'Repository', id: string, name: string }, symbols: Array<{ __typename?: 'Symbol', canonicalURL: string, name: string, kind: SymbolKind, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }>, lineMatches: Array<{ __typename?: 'LineMatch', lineNumber: number, offsetAndLengths: Array<Array<number>> }> } | { __typename?: 'Repository' }> } };

export type FileLocal = { __typename?: 'Search', results: { __typename: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename?: 'FileMatch', symbols: Array<{ __typename?: 'Symbol', fileLocal: boolean }> } | { __typename?: 'Repository' }> } };

export type LegacyCodeIntelSearch2Variables = Exact<{
  query: Scalars['String'];
  version: SearchVersion;
}>;


export type LegacyCodeIntelSearch2Result = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', canonicalURL: string, path: string, commit: { __typename?: 'GitCommit', oid: string } }, repository: { __typename?: 'Repository', id: string, name: string }, symbols: Array<{ __typename?: 'Symbol', canonicalURL: string, name: string, kind: SymbolKind, fileLocal: boolean, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }>, lineMatches: Array<{ __typename?: 'LineMatch', lineNumber: number, offsetAndLengths: Array<Array<number>> }> } | { __typename?: 'Repository' }> } } | null };

export type LegacyCodeIntelSearch3Variables = Exact<{
  query: Scalars['String'];
  version: SearchVersion;
}>;


export type LegacyCodeIntelSearch3Result = { __typename?: 'Query', search: { __typename?: 'Search', results: { __typename: 'SearchResults', results: Array<{ __typename?: 'CommitSearchResult' } | { __typename: 'FileMatch', file: { __typename?: 'GitBlob', canonicalURL: string, path: string, commit: { __typename?: 'GitCommit', oid: string } }, repository: { __typename?: 'Repository', id: string, name: string }, symbols: Array<{ __typename?: 'Symbol', canonicalURL: string, name: string, kind: SymbolKind, location: { __typename?: 'Location', resource: { __typename?: 'CodeIntelGitBlob', path: string }, range: { __typename?: 'Range', start: { __typename?: 'Position', line: number, character: number }, end: { __typename?: 'Position', line: number, character: number } } | null } }>, lineMatches: Array<{ __typename?: 'LineMatch', lineNumber: number, offsetAndLengths: Array<Array<number>> }> } | { __typename?: 'Repository' }> } } | null };

export type LocalCodeIntelVariables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
}>;


export type LocalCodeIntelResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, localCodeIntel: unknown | null } | null } | null } | null };

export type LegacySymbolInfo2Variables = Exact<{
  repository: Scalars['String'];
  commit: Scalars['String'];
  path: Scalars['String'];
  line: Scalars['Int'];
  character: Scalars['Int'];
}>;


export type LegacySymbolInfo2Result = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string, commit: { __typename?: 'GitCommit', id: string, blob: { __typename?: 'GitBlob', canonicalURL: string, symbolInfo: { __typename?: 'SymbolInfo', hover: string | null, definition: { __typename?: 'SymbolLocation', repo: string, commit: string, path: string, range: { __typename?: 'LineRange', line: number, character: number, length: number } | null } | null } | null } | null } | null } | null };

export type SearchContextFields = { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, query: string, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories: Array<{ __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> };

export type SearchContextRepositoryRevisionsFields = { __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } };

export type SearchContextMinimalFields = { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, query: string, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, namespace?: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories?: Array<{ __typename: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> };

export type ListSearchContextsVariables = Exact<{
  first: Scalars['Int'];
  after: InputMaybe<Scalars['String']>;
  query: InputMaybe<Scalars['String']>;
  namespaces: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  orderBy: InputMaybe<SearchContextsOrderBy>;
  descending: InputMaybe<Scalars['Boolean']>;
  useMinimalFields: Scalars['Boolean'];
}>;


export type ListSearchContextsResult = { __typename?: 'Query', searchContexts: { __typename?: 'SearchContextConnection', totalCount: number, nodes: Array<{ __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, query: string, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, namespace?: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories?: Array<{ __typename: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor: string | null } } };

export type FetchSearchContextVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FetchSearchContextResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, query: string, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories: Array<{ __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename?: 'User' } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type FetchSearchContextBySpecVariables = Exact<{
  spec: Scalars['String'];
}>;


export type FetchSearchContextBySpecResult = { __typename?: 'Query', searchContextBySpec: { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, query: string, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories: Array<{ __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> } | null };

export type CreateSearchContextVariables = Exact<{
  searchContext: SearchContextInput;
  repositories: Array<SearchContextRepositoryRevisionsInput>;
}>;


export type CreateSearchContextResult = { __typename?: 'Mutation', createSearchContext: { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, query: string, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories: Array<{ __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> } };

export type UpdateSearchContextVariables = Exact<{
  id: Scalars['ID'];
  searchContext: SearchContextEditInput;
  repositories: Array<SearchContextRepositoryRevisionsInput>;
}>;


export type UpdateSearchContextResult = { __typename?: 'Mutation', updateSearchContext: { __typename: 'SearchContext', id: string, name: string, spec: string, description: string, public: boolean, autoDefined: boolean, updatedAt: string, viewerCanManage: boolean, viewerHasStarred: boolean, viewerHasAsDefault: boolean, query: string, namespace: { __typename: 'Org', id: string, namespaceName: string } | { __typename: 'User', id: string, namespaceName: string } | null, repositories: Array<{ __typename?: 'SearchContextRepositoryRevisions', revisions: Array<string>, repository: { __typename?: 'Repository', name: string } }> } };

export type DeleteSearchContextVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSearchContextResult = { __typename?: 'Mutation', deleteSearchContext: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type IsSearchContextAvailableVariables = Exact<{
  spec: Scalars['String'];
}>;


export type IsSearchContextAvailableResult = { __typename?: 'Query', isSearchContextAvailable: boolean };

export type highlightCodeVariables = Exact<{
  code: Scalars['String'];
  fuzzyLanguage: Scalars['String'];
  disableTimeout: Scalars['Boolean'];
}>;


export type highlightCodeResult = { __typename?: 'Query', highlightCode: string };

export type EventLogsDataVariables = Exact<{
  userId: Scalars['ID'];
  first: InputMaybe<Scalars['Int']>;
  eventName: Scalars['String'];
}>;


export type EventLogsDataResult = { __typename?: 'Query', node: { __typename?: 'AccessRequest' } | { __typename?: 'AccessToken' } | { __typename?: 'BackgroundJob' } | { __typename?: 'BatchChange' } | { __typename?: 'BatchChangesCredential' } | { __typename?: 'BatchSpec' } | { __typename?: 'BatchSpecWorkspaceFile' } | { __typename?: 'BulkOperation' } | { __typename?: 'ChangesetEvent' } | { __typename?: 'CodeGraphData' } | { __typename?: 'CodeHost' } | { __typename?: 'CodeIntelligenceConfigurationPolicy' } | { __typename?: 'CodeownersIngestedFile' } | { __typename?: 'Executor' } | { __typename?: 'ExecutorSecret' } | { __typename?: 'ExecutorSecretAccessLog' } | { __typename?: 'ExternalAccount' } | { __typename?: 'ExternalChangeset' } | { __typename?: 'ExternalService' } | { __typename?: 'ExternalServiceSyncJob' } | { __typename?: 'GitCommit' } | { __typename?: 'GitHubApp' } | { __typename?: 'GitRef' } | { __typename?: 'GitserverInstance' } | { __typename?: 'HiddenBatchSpecWorkspace' } | { __typename?: 'HiddenChangesetSpec' } | { __typename?: 'HiddenExternalChangeset' } | { __typename?: 'IndexedSearchInstance' } | { __typename?: 'InsightsDashboard' } | { __typename?: 'InsightView' } | { __typename?: 'Monitor' } | { __typename?: 'MonitorActionEvent' } | { __typename?: 'MonitorEmail' } | { __typename?: 'MonitorQuery' } | { __typename?: 'MonitorSlackWebhook' } | { __typename?: 'MonitorTriggerEvent' } | { __typename?: 'MonitorWebhook' } | { __typename?: 'Notebook' } | { __typename?: 'Org' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OutboundRequest' } | { __typename?: 'OutboundWebhook' } | { __typename?: 'OutOfBandMigration' } | { __typename?: 'Permission' } | { __typename?: 'PermissionsSyncJob' } | { __typename?: 'PreciseIndex' } | { __typename?: 'ProductLicense' } | { __typename?: 'ProductSubscription' } | { __typename?: 'Prompt' } | { __typename?: 'RepoEmbeddingJob' } | { __typename?: 'Repository' } | { __typename?: 'Role' } | { __typename?: 'SavedSearch' } | { __typename?: 'SearchContext' } | { __typename?: 'SearchJob' } | { __typename?: 'SiteConfigurationChange' } | { __typename?: 'Team' } | { __typename: 'User', eventLogs: { __typename?: 'EventLogsConnection', totalCount: number, nodes: Array<{ __typename?: 'EventLog', argument: string | null, timestamp: string, url: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | { __typename?: 'VisibleBatchSpecWorkspace' } | { __typename?: 'VisibleChangesetSpec' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookLog' } | null };

export type DefaultSearchContextSpecVariables = Exact<{ [key: string]: never; }>;


export type DefaultSearchContextSpecResult = { __typename?: 'Query', defaultSearchContext: { __typename?: 'SearchContext', spec: string } | null };

export type EditSettingsVariables = Exact<{
  subject: Scalars['ID'];
  lastID: InputMaybe<Scalars['Int']>;
  edit: ConfigurationEdit;
}>;


export type EditSettingsResult = { __typename?: 'Mutation', configurationMutation: { __typename?: 'SettingsMutation', editConfiguration: { __typename?: 'UpdateSettingsPayload', empty: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null } | null } | null };

export type OverwriteSettingsVariables = Exact<{
  subject: Scalars['ID'];
  lastID: InputMaybe<Scalars['Int']>;
  contents: Scalars['String'];
}>;


export type OverwriteSettingsResult = { __typename?: 'Mutation', settingsMutation: { __typename?: 'SettingsMutation', overwriteSettings: { __typename?: 'UpdateSettingsPayload', empty: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null } | null } | null };

export type GetTemporarySettingsVariables = Exact<{ [key: string]: never; }>;


export type GetTemporarySettingsResult = { __typename?: 'Query', temporarySettings: { __typename?: 'TemporarySettings', contents: string } };

export type EditTemporarySettingsVariables = Exact<{
  contents: Scalars['String'];
}>;


export type EditTemporarySettingsResult = { __typename?: 'Mutation', editTemporarySettings: { __typename?: 'EmptyResponse', alwaysNil: string | null } };

export type TemporarySettingsVariables = Exact<{ [key: string]: never; }>;


export type TemporarySettingsResult = { __typename?: 'Query', temporarySettings: { __typename?: 'TemporarySettings', contents: string } };

export type LogEventsVariables = Exact<{
  events: InputMaybe<Array<Event>>;
}>;


export type LogEventsResult = { __typename?: 'Mutation', logEvents: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null };

export type ExternalServicesForTestsVariables = Exact<{ [key: string]: never; }>;


export type ExternalServicesForTestsResult = { __typename?: 'Query', externalServices: { __typename?: 'ExternalServiceConnection', totalCount: number } };

export type RepositoryNameForTestsVariables = Exact<{
  name: Scalars['String'];
}>;


export type RepositoryNameForTestsResult = { __typename?: 'Query', repository: { __typename?: 'Repository', id: string } | null };

export type SiteForTestsVariables = Exact<{ [key: string]: never; }>;


export type SiteForTestsResult = { __typename?: 'Query', site: { __typename?: 'Site', id: string, configuration: { __typename?: 'SiteConfiguration', id: number, effectiveContents: string, validationMessages: Array<string> } } };

export type UpdateSiteConfigurationForTestsVariables = Exact<{
  lastID: Scalars['Int'];
  input: Scalars['String'];
}>;


export type UpdateSiteConfigurationForTestsResult = { __typename?: 'Mutation', updateSiteConfiguration: boolean };

export type UserSettingsForTestsVariables = Exact<{ [key: string]: never; }>;


export type UserSettingsForTestsResult = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, latestSettings: { __typename?: 'Settings', id: number, contents: string } | null } | null };

export type OverwriteSettingsForTestsVariables = Exact<{
  subject: Scalars['ID'];
  lastID: InputMaybe<Scalars['Int']>;
  contents: Scalars['String'];
}>;


export type OverwriteSettingsForTestsResult = { __typename?: 'Mutation', settingsMutation: { __typename?: 'SettingsMutation', overwriteSettings: { __typename?: 'UpdateSettingsPayload', empty: { __typename?: 'EmptyResponse', alwaysNil: string | null } | null } | null } | null };

export type AccessRequestKeySpecifier = ('additionalInfo' | 'createdAt' | 'email' | 'id' | 'name' | 'status' | AccessRequestKeySpecifier)[];
export type AccessRequestFieldPolicy = {
	additionalInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessRequestConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | AccessRequestConnectionKeySpecifier)[];
export type AccessRequestConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessTokenKeySpecifier = ('createdAt' | 'creator' | 'expiresAt' | 'id' | 'lastUsedAt' | 'note' | 'scopes' | 'subject' | AccessTokenKeySpecifier)[];
export type AccessTokenFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUsedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	scopes?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessTokenConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | AccessTokenConnectionKeySpecifier)[];
export type AccessTokenConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationGroupKeySpecifier = ('count' | 'label' | 'query' | AggregationGroupKeySpecifier)[];
export type AggregationGroupFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationModeAvailabilityKeySpecifier = ('available' | 'mode' | 'reasonUnavailable' | AggregationModeAvailabilityKeySpecifier)[];
export type AggregationModeAvailabilityFieldPolicy = {
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	reasonUnavailable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlertKeySpecifier = ('isDismissibleWithKey' | 'message' | 'type' | AlertKeySpecifier)[];
export type AlertFieldPolicy = {
	isDismissibleWithKey?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsKeySpecifier = ('batchChanges' | 'codeInsights' | 'codeIntel' | 'codeIntelByLanguage' | 'codeIntelTopRepositories' | 'extensions' | 'notebooks' | 'repos' | 'search' | 'users' | AnalyticsKeySpecifier)[];
export type AnalyticsFieldPolicy = {
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	codeInsights?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntel?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelByLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelTopRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	notebooks?: FieldPolicy<any> | FieldReadFunction<any>,
	repos?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsBatchChangesResultKeySpecifier = ('changesetsCreated' | 'changesetsMerged' | AnalyticsBatchChangesResultKeySpecifier)[];
export type AnalyticsBatchChangesResultFieldPolicy = {
	changesetsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetsMerged?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsCodeIntelByLanguageResultKeySpecifier = ('count' | 'language' | 'precision' | AnalyticsCodeIntelByLanguageResultKeySpecifier)[];
export type AnalyticsCodeIntelByLanguageResultFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	precision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsCodeIntelRepositoryResultKeySpecifier = ('events' | 'hasPrecise' | 'kind' | 'language' | 'name' | 'precision' | AnalyticsCodeIntelRepositoryResultKeySpecifier)[];
export type AnalyticsCodeIntelRepositoryResultFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPrecise?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	precision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsCodeIntelResultKeySpecifier = ('codeHostEvents' | 'crossRepoEvents' | 'definitionClicks' | 'inAppEvents' | 'preciseEvents' | 'referenceClicks' | 'searchBasedEvents' | AnalyticsCodeIntelResultKeySpecifier)[];
export type AnalyticsCodeIntelResultFieldPolicy = {
	codeHostEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	crossRepoEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionClicks?: FieldPolicy<any> | FieldReadFunction<any>,
	inAppEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	preciseEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceClicks?: FieldPolicy<any> | FieldReadFunction<any>,
	searchBasedEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsCodesInsightsResultKeySpecifier = ('insightDataPointClicks' | 'insightHovers' | AnalyticsCodesInsightsResultKeySpecifier)[];
export type AnalyticsCodesInsightsResultFieldPolicy = {
	insightDataPointClicks?: FieldPolicy<any> | FieldReadFunction<any>,
	insightHovers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsExtensionsResultKeySpecifier = ('browser' | 'jetbrains' | 'vscode' | AnalyticsExtensionsResultKeySpecifier)[];
export type AnalyticsExtensionsResultFieldPolicy = {
	browser?: FieldPolicy<any> | FieldReadFunction<any>,
	jetbrains?: FieldPolicy<any> | FieldReadFunction<any>,
	vscode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsMonthlyActiveUsersKeySpecifier = ('count' | 'date' | AnalyticsMonthlyActiveUsersKeySpecifier)[];
export type AnalyticsMonthlyActiveUsersFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsNotebooksResultsKeySpecifier = ('blockRuns' | 'creations' | 'views' | AnalyticsNotebooksResultsKeySpecifier)[];
export type AnalyticsNotebooksResultsFieldPolicy = {
	blockRuns?: FieldPolicy<any> | FieldReadFunction<any>,
	creations?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsReposSummartResultKeySpecifier = ('count' | 'preciseCodeIntelCount' | AnalyticsReposSummartResultKeySpecifier)[];
export type AnalyticsReposSummartResultFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	preciseCodeIntelCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsSearchResultKeySpecifier = ('codeCopied' | 'fileOpens' | 'fileViews' | 'resultClicks' | 'searches' | AnalyticsSearchResultKeySpecifier)[];
export type AnalyticsSearchResultFieldPolicy = {
	codeCopied?: FieldPolicy<any> | FieldReadFunction<any>,
	fileOpens?: FieldPolicy<any> | FieldReadFunction<any>,
	fileViews?: FieldPolicy<any> | FieldReadFunction<any>,
	resultClicks?: FieldPolicy<any> | FieldReadFunction<any>,
	searches?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsStatItemKeySpecifier = ('nodes' | 'summary' | AnalyticsStatItemKeySpecifier)[];
export type AnalyticsStatItemFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsStatItemNodeKeySpecifier = ('count' | 'date' | 'registeredUsers' | 'uniqueUsers' | AnalyticsStatItemNodeKeySpecifier)[];
export type AnalyticsStatItemNodeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsStatItemSummaryKeySpecifier = ('totalCount' | 'totalRegisteredUsers' | 'totalUniqueUsers' | AnalyticsStatItemSummaryKeySpecifier)[];
export type AnalyticsStatItemSummaryFieldPolicy = {
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRegisteredUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	totalUniqueUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsUsersFrequencyItemKeySpecifier = ('daysUsed' | 'frequency' | 'percentage' | AnalyticsUsersFrequencyItemKeySpecifier)[];
export type AnalyticsUsersFrequencyItemFieldPolicy = {
	daysUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnalyticsUsersResultKeySpecifier = ('activity' | 'frequencies' | 'monthlyActiveUsers' | AnalyticsUsersResultKeySpecifier)[];
export type AnalyticsUsersResultFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	frequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyActiveUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedOwnerKeySpecifier = ('description' | 'isDirectMatch' | 'title' | AssignedOwnerKeySpecifier)[];
export type AssignedOwnerFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectMatch?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributionSnippetThresholdKeySpecifier = ('linesLowerBound' | 'searchPerformed' | AttributionSnippetThresholdKeySpecifier)[];
export type AttributionSnippetThresholdFieldPolicy = {
	linesLowerBound?: FieldPolicy<any> | FieldReadFunction<any>,
	searchPerformed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuditLogColumnChangeKeySpecifier = ('column' | 'new' | 'old' | AuditLogColumnChangeKeySpecifier)[];
export type AuditLogColumnChangeFieldPolicy = {
	column?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	old?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthProviderKeySpecifier = ('authenticationURL' | 'clientID' | 'displayName' | 'isBuiltin' | 'serviceID' | 'serviceType' | AuthProviderKeySpecifier)[];
export type AuthProviderFieldPolicy = {
	authenticationURL?: FieldPolicy<any> | FieldReadFunction<any>,
	clientID?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	isBuiltin?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceID?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthProviderConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | AuthProviderConnectionKeySpecifier)[];
export type AuthProviderConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoIndexJobDescriptionKeySpecifier = ('comparisonKey' | 'indexer' | 'root' | 'steps' | AutoIndexJobDescriptionKeySpecifier)[];
export type AutoIndexJobDescriptionFieldPolicy = {
	comparisonKey?: FieldPolicy<any> | FieldReadFunction<any>,
	indexer?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>,
	steps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackfillStatusKeySpecifier = ('completedAt' | 'cost' | 'createdAt' | 'errors' | 'percentComplete' | 'queuePosition' | 'runtime' | 'startedAt' | 'state' | BackfillStatusKeySpecifier)[];
export type BackfillStatusFieldPolicy = {
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	percentComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	queuePosition?: FieldPolicy<any> | FieldReadFunction<any>,
	runtime?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundJobKeySpecifier = ('id' | 'name' | 'routines' | BackgroundJobKeySpecifier)[];
export type BackgroundJobFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	routines?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundJobConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BackgroundJobConnectionKeySpecifier)[];
export type BackgroundJobConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundRoutineKeySpecifier = ('description' | 'instances' | 'intervalMs' | 'name' | 'recentRuns' | 'stats' | 'type' | BackgroundRoutineKeySpecifier)[];
export type BackgroundRoutineFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	instances?: FieldPolicy<any> | FieldReadFunction<any>,
	intervalMs?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	recentRuns?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundRoutineInstanceKeySpecifier = ('hostName' | 'lastStartedAt' | 'lastStoppedAt' | BackgroundRoutineInstanceKeySpecifier)[];
export type BackgroundRoutineInstanceFieldPolicy = {
	hostName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastStartedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lastStoppedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundRoutineRecentRunKeySpecifier = ('at' | 'durationMs' | 'errorMessage' | 'hostName' | BackgroundRoutineRecentRunKeySpecifier)[];
export type BackgroundRoutineRecentRunFieldPolicy = {
	at?: FieldPolicy<any> | FieldReadFunction<any>,
	durationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	hostName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BackgroundRoutineStatsKeySpecifier = ('avgDurationMs' | 'errorCount' | 'maxDurationMs' | 'minDurationMs' | 'runCount' | 'since' | BackgroundRoutineStatsKeySpecifier)[];
export type BackgroundRoutineStatsFieldPolicy = {
	avgDurationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	errorCount?: FieldPolicy<any> | FieldReadFunction<any>,
	maxDurationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	minDurationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	runCount?: FieldPolicy<any> | FieldReadFunction<any>,
	since?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangeKeySpecifier = ('batchSpecs' | 'bulkOperations' | 'changesetCountsOverTime' | 'changesets' | 'changesetsStats' | 'closedAt' | 'createdAt' | 'creator' | 'currentSpec' | 'description' | 'diffStat' | 'id' | 'lastAppliedAt' | 'lastApplier' | 'name' | 'namespace' | 'state' | 'updatedAt' | 'url' | 'viewerCanAdminister' | BatchChangeKeySpecifier)[];
export type BatchChangeFieldPolicy = {
	batchSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	bulkOperations?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetCountsOverTime?: FieldPolicy<any> | FieldReadFunction<any>,
	changesets?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetsStats?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAppliedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lastApplier?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangeConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BatchChangeConnectionKeySpecifier)[];
export type BatchChangeConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangeDescriptionKeySpecifier = ('description' | 'name' | BatchChangeDescriptionKeySpecifier)[];
export type BatchChangeDescriptionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangesCodeHostKeySpecifier = ('commitSigningConfiguration' | 'credential' | 'externalServiceKind' | 'externalServiceURL' | 'hasWebhooks' | 'requiresSSH' | 'requiresUsername' | 'supportsCommitSigning' | BatchChangesCodeHostKeySpecifier)[];
export type BatchChangesCodeHostFieldPolicy = {
	commitSigningConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	credential?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceKind?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceURL?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWebhooks?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresSSH?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	supportsCommitSigning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangesCodeHostConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BatchChangesCodeHostConnectionKeySpecifier)[];
export type BatchChangesCodeHostConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchChangesCredentialKeySpecifier = ('createdAt' | 'externalServiceKind' | 'externalServiceURL' | 'gitHubApp' | 'id' | 'isSiteCredential' | 'sshPublicKey' | BatchChangesCredentialKeySpecifier)[];
export type BatchChangesCredentialFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceKind?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceURL?: FieldPolicy<any> | FieldReadFunction<any>,
	gitHubApp?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSiteCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	sshPublicKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecKeySpecifier = ('allowIgnored' | 'allowUnsupported' | 'appliesToBatchChange' | 'applyPreview' | 'applyURL' | 'autoApplyEnabled' | 'changesetSpecs' | 'createdAt' | 'creator' | 'description' | 'diffStat' | 'expiresAt' | 'failureMessage' | 'files' | 'finishedAt' | 'id' | 'importingChangesets' | 'namespace' | 'noCache' | 'originalInput' | 'parsedInput' | 'source' | 'startedAt' | 'state' | 'supersedingBatchSpec' | 'viewerBatchChangesCodeHosts' | 'viewerCanAdminister' | 'viewerCanRetry' | 'workspaceResolution' | BatchSpecKeySpecifier)[];
export type BatchSpecFieldPolicy = {
	allowIgnored?: FieldPolicy<any> | FieldReadFunction<any>,
	allowUnsupported?: FieldPolicy<any> | FieldReadFunction<any>,
	appliesToBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	applyPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	applyURL?: FieldPolicy<any> | FieldReadFunction<any>,
	autoApplyEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	importingChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	noCache?: FieldPolicy<any> | FieldReadFunction<any>,
	originalInput?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedInput?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	supersedingBatchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerBatchChangesCodeHosts?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanRetry?: FieldPolicy<any> | FieldReadFunction<any>,
	workspaceResolution?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BatchSpecConnectionKeySpecifier)[];
export type BatchSpecConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceKeySpecifier = ('batchSpec' | 'cachedResultFound' | 'diffStat' | 'finishedAt' | 'id' | 'ignored' | 'onlyFetchWorkspace' | 'placeInGlobalQueue' | 'placeInQueue' | 'queuedAt' | 'startedAt' | 'state' | 'stepCacheResultCount' | 'unsupported' | BatchSpecWorkspaceKeySpecifier)[];
export type BatchSpecWorkspaceFieldPolicy = {
	batchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	cachedResultFound?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	onlyFetchWorkspace?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInGlobalQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stepCacheResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unsupported?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'stats' | 'totalCount' | BatchSpecWorkspaceConnectionKeySpecifier)[];
export type BatchSpecWorkspaceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceEnvironmentVariableKeySpecifier = ('name' | 'value' | BatchSpecWorkspaceEnvironmentVariableKeySpecifier)[];
export type BatchSpecWorkspaceEnvironmentVariableFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceFileKeySpecifier = ('binary' | 'byteSize' | 'canonicalURL' | 'changelistURL' | 'content' | 'createdAt' | 'externalURLs' | 'highlight' | 'id' | 'isDirectory' | 'languages' | 'modifiedAt' | 'name' | 'path' | 'richHTML' | 'totalLines' | 'updatedAt' | 'url' | BatchSpecWorkspaceFileKeySpecifier)[];
export type BatchSpecWorkspaceFileFieldPolicy = {
	binary?: FieldPolicy<any> | FieldReadFunction<any>,
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	changelistURL?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	richHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLines?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceFileConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BatchSpecWorkspaceFileConnectionKeySpecifier)[];
export type BatchSpecWorkspaceFileConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceOutputVariableKeySpecifier = ('name' | 'value' | BatchSpecWorkspaceOutputVariableKeySpecifier)[];
export type BatchSpecWorkspaceOutputVariableFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceResolutionKeySpecifier = ('failureMessage' | 'finishedAt' | 'recentlyCompleted' | 'recentlyErrored' | 'startedAt' | 'state' | 'workspaces' | BatchSpecWorkspaceResolutionKeySpecifier)[];
export type BatchSpecWorkspaceResolutionFieldPolicy = {
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	recentlyCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	recentlyErrored?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	workspaces?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspacesStatsKeySpecifier = ('completed' | 'errored' | 'ignored' | 'processing' | 'queued' | BatchSpecWorkspacesStatsKeySpecifier)[];
export type BatchSpecWorkspacesStatsFieldPolicy = {
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	errored?: FieldPolicy<any> | FieldReadFunction<any>,
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	processing?: FieldPolicy<any> | FieldReadFunction<any>,
	queued?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceStagesKeySpecifier = ('setup' | 'srcExec' | 'teardown' | BatchSpecWorkspaceStagesKeySpecifier)[];
export type BatchSpecWorkspaceStagesFieldPolicy = {
	setup?: FieldPolicy<any> | FieldReadFunction<any>,
	srcExec?: FieldPolicy<any> | FieldReadFunction<any>,
	teardown?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceStepKeySpecifier = ('cachedResultFound' | 'container' | 'diff' | 'diffStat' | 'environment' | 'exitCode' | 'finishedAt' | 'ifCondition' | 'number' | 'outputLines' | 'outputVariables' | 'run' | 'skipped' | 'startedAt' | BatchSpecWorkspaceStepKeySpecifier)[];
export type BatchSpecWorkspaceStepFieldPolicy = {
	cachedResultFound?: FieldPolicy<any> | FieldReadFunction<any>,
	container?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	exitCode?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ifCondition?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	outputLines?: FieldPolicy<any> | FieldReadFunction<any>,
	outputVariables?: FieldPolicy<any> | FieldReadFunction<any>,
	run?: FieldPolicy<any> | FieldReadFunction<any>,
	skipped?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchSpecWorkspaceStepOutputLineConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BatchSpecWorkspaceStepOutputLineConnectionKeySpecifier)[];
export type BatchSpecWorkspaceStepOutputLineConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BehindAheadCountsKeySpecifier = ('ahead' | 'behind' | BehindAheadCountsKeySpecifier)[];
export type BehindAheadCountsFieldPolicy = {
	ahead?: FieldPolicy<any> | FieldReadFunction<any>,
	behind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BidirectionalPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | BidirectionalPageInfoKeySpecifier)[];
export type BidirectionalPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BitbucketProjectPermissionJobKeySpecifier = ('ExternalServiceID' | 'FailureMessage' | 'FinishedAt' | 'InternalJobID' | 'NumFailures' | 'NumResets' | 'Permissions' | 'ProcessAfter' | 'ProjectKey' | 'QueuedAt' | 'StartedAt' | 'State' | 'Unrestricted' | BitbucketProjectPermissionJobKeySpecifier)[];
export type BitbucketProjectPermissionJobFieldPolicy = {
	ExternalServiceID?: FieldPolicy<any> | FieldReadFunction<any>,
	FailureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	FinishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	InternalJobID?: FieldPolicy<any> | FieldReadFunction<any>,
	NumFailures?: FieldPolicy<any> | FieldReadFunction<any>,
	NumResets?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	ProcessAfter?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectKey?: FieldPolicy<any> | FieldReadFunction<any>,
	QueuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	StartedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	State?: FieldPolicy<any> | FieldReadFunction<any>,
	Unrestricted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BitbucketProjectPermissionJobsKeySpecifier = ('nodes' | 'totalCount' | BitbucketProjectPermissionJobsKeySpecifier)[];
export type BitbucketProjectPermissionJobsFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkOperationKeySpecifier = ('changesetCount' | 'createdAt' | 'errors' | 'finishedAt' | 'id' | 'initiator' | 'progress' | 'state' | 'type' | BulkOperationKeySpecifier)[];
export type BulkOperationFieldPolicy = {
	changesetCount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiator?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkOperationConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | BulkOperationConnectionKeySpecifier)[];
export type BulkOperationConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetKeySpecifier = ('batchChanges' | 'createdAt' | 'id' | 'nextSyncAt' | 'state' | 'updatedAt' | ChangesetKeySpecifier)[];
export type ChangesetFieldPolicy = {
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetApplyPreviewConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'stats' | 'totalCount' | ChangesetApplyPreviewConnectionKeySpecifier)[];
export type ChangesetApplyPreviewConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetApplyPreviewConnectionStatsKeySpecifier = ('added' | 'archive' | 'close' | 'detach' | 'import' | 'modified' | 'publish' | 'publishDraft' | 'push' | 'reattach' | 'removed' | 'reopen' | 'sleep' | 'sync' | 'undraft' | 'update' | ChangesetApplyPreviewConnectionStatsKeySpecifier)[];
export type ChangesetApplyPreviewConnectionStatsFieldPolicy = {
	added?: FieldPolicy<any> | FieldReadFunction<any>,
	archive?: FieldPolicy<any> | FieldReadFunction<any>,
	close?: FieldPolicy<any> | FieldReadFunction<any>,
	detach?: FieldPolicy<any> | FieldReadFunction<any>,
	import?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	publish?: FieldPolicy<any> | FieldReadFunction<any>,
	publishDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	push?: FieldPolicy<any> | FieldReadFunction<any>,
	reattach?: FieldPolicy<any> | FieldReadFunction<any>,
	removed?: FieldPolicy<any> | FieldReadFunction<any>,
	reopen?: FieldPolicy<any> | FieldReadFunction<any>,
	sleep?: FieldPolicy<any> | FieldReadFunction<any>,
	sync?: FieldPolicy<any> | FieldReadFunction<any>,
	undraft?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ChangesetConnectionKeySpecifier)[];
export type ChangesetConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetCountsKeySpecifier = ('closed' | 'date' | 'draft' | 'merged' | 'open' | 'openApproved' | 'openChangesRequested' | 'openPending' | 'total' | ChangesetCountsKeySpecifier)[];
export type ChangesetCountsFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	openApproved?: FieldPolicy<any> | FieldReadFunction<any>,
	openChangesRequested?: FieldPolicy<any> | FieldReadFunction<any>,
	openPending?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetEventKeySpecifier = ('changeset' | 'createdAt' | 'id' | ChangesetEventKeySpecifier)[];
export type ChangesetEventFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetEventConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ChangesetEventConnectionKeySpecifier)[];
export type ChangesetEventConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetJobErrorKeySpecifier = ('changeset' | 'error' | ChangesetJobErrorKeySpecifier)[];
export type ChangesetJobErrorFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetLabelKeySpecifier = ('color' | 'description' | 'text' | ChangesetLabelKeySpecifier)[];
export type ChangesetLabelFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetSpecKeySpecifier = ('expiresAt' | 'id' | 'type' | ChangesetSpecKeySpecifier)[];
export type ChangesetSpecFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetSpecConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ChangesetSpecConnectionKeySpecifier)[];
export type ChangesetSpecConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetSpecDeltaKeySpecifier = ('authorEmailChanged' | 'authorNameChanged' | 'baseRefChanged' | 'bodyChanged' | 'commitMessageChanged' | 'diffChanged' | 'titleChanged' | 'undraft' | ChangesetSpecDeltaKeySpecifier)[];
export type ChangesetSpecDeltaFieldPolicy = {
	authorEmailChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	authorNameChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRefChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	commitMessageChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	diffChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	titleChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	undraft?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangesetsStatsKeySpecifier = ('archived' | 'closed' | 'deleted' | 'draft' | 'failed' | 'isCompleted' | 'merged' | 'open' | 'percentComplete' | 'processing' | 'retrying' | 'scheduled' | 'total' | 'unpublished' | ChangesetsStatsKeySpecifier)[];
export type ChangesetsStatsFieldPolicy = {
	archived?: FieldPolicy<any> | FieldReadFunction<any>,
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	failed?: FieldPolicy<any> | FieldReadFunction<any>,
	isCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	percentComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	processing?: FieldPolicy<any> | FieldReadFunction<any>,
	retrying?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduled?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatContextResultKeySpecifier = ('contextItems' | 'partialErrors' | 'stopReason' | ChatContextResultKeySpecifier)[];
export type ChatContextResultFieldPolicy = {
	contextItems?: FieldPolicy<any> | FieldReadFunction<any>,
	partialErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	stopReason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatIntentResponseKeySpecifier = ('editScore' | 'intent' | 'score' | 'searchScore' | ChatIntentResponseKeySpecifier)[];
export type ChatIntentResponseFieldPolicy = {
	editScore?: FieldPolicy<any> | FieldReadFunction<any>,
	intent?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	searchScore?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckMirrorRepositoryConnectionResultKeySpecifier = ('error' | CheckMirrorRepositoryConnectionResultKeySpecifier)[];
export type CheckMirrorRepositoryConnectionResultFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChunkMatchKeySpecifier = ('content' | 'contentStart' | 'ranges' | ChunkMatchKeySpecifier)[];
export type ChunkMatchFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentStart?: FieldPolicy<any> | FieldReadFunction<any>,
	ranges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientConfigurationDetailsKeySpecifier = ('contentScriptUrls' | 'parentSourcegraph' | ClientConfigurationDetailsKeySpecifier)[];
export type ClientConfigurationDetailsFieldPolicy = {
	contentScriptUrls?: FieldPolicy<any> | FieldReadFunction<any>,
	parentSourcegraph?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloningProgressKeySpecifier = ('message' | CloningProgressKeySpecifier)[];
export type CloningProgressFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeGraphDataKeySpecifier = ('commit' | 'id' | 'occurrences' | 'provenance' | 'toolInfo' | CodeGraphDataKeySpecifier)[];
export type CodeGraphDataFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	occurrences?: FieldPolicy<any> | FieldReadFunction<any>,
	provenance?: FieldPolicy<any> | FieldReadFunction<any>,
	toolInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeGraphToolInfoKeySpecifier = ('name' | 'version' | CodeGraphToolInfoKeySpecifier)[];
export type CodeGraphToolInfoFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeHostKeySpecifier = ('apiRateLimitIntervalSeconds' | 'apiRateLimitQuota' | 'externalServices' | 'gitRateLimitIntervalSeconds' | 'gitRateLimitQuota' | 'id' | 'kind' | 'url' | CodeHostKeySpecifier)[];
export type CodeHostFieldPolicy = {
	apiRateLimitIntervalSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	apiRateLimitQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServices?: FieldPolicy<any> | FieldReadFunction<any>,
	gitRateLimitIntervalSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	gitRateLimitQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeHostConnectionKeySpecifier = ('isMigrationDone' | 'nodes' | 'pageInfo' | 'totalCount' | CodeHostConnectionKeySpecifier)[];
export type CodeHostConnectionFieldPolicy = {
	isMigrationDone?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeHostStateKeySpecifier = ('message' | 'providerID' | 'providerType' | 'status' | CodeHostStateKeySpecifier)[];
export type CodeHostStateFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	providerID?: FieldPolicy<any> | FieldReadFunction<any>,
	providerType?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelCommitKeySpecifier = ('abbreviatedOID' | 'id' | 'oid' | 'repository' | 'url' | CodeIntelCommitKeySpecifier)[];
export type CodeIntelCommitFieldPolicy = {
	abbreviatedOID?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelExternalRepositoryKeySpecifier = ('serviceID' | 'serviceType' | CodeIntelExternalRepositoryKeySpecifier)[];
export type CodeIntelExternalRepositoryFieldPolicy = {
	serviceID?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelGitBlobKeySpecifier = ('commit' | 'content' | 'name' | 'path' | 'repository' | 'url' | CodeIntelGitBlobKeySpecifier)[];
export type CodeIntelGitBlobFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelGitObjectKeySpecifier = ('committedAt' | 'name' | 'rev' | CodeIntelGitObjectKeySpecifier)[];
export type CodeIntelGitObjectFieldPolicy = {
	committedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rev?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelGitTreeKeySpecifier = ('commit' | 'content' | 'name' | 'path' | 'repository' | 'url' | CodeIntelGitTreeKeySpecifier)[];
export type CodeIntelGitTreeFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelIndexerKeySpecifier = ('imageName' | 'key' | 'name' | 'url' | CodeIntelIndexerKeySpecifier)[];
export type CodeIntelIndexerFieldPolicy = {
	imageName?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceCommitGraphKeySpecifier = ('stale' | 'updatedAt' | CodeIntelligenceCommitGraphKeySpecifier)[];
export type CodeIntelligenceCommitGraphFieldPolicy = {
	stale?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceConfigurationPolicyKeySpecifier = ('embeddingsEnabled' | 'id' | 'indexCommitMaxAgeHours' | 'indexingEnabled' | 'indexIntermediateCommits' | 'name' | 'pattern' | 'protected' | 'repository' | 'repositoryPatterns' | 'retainIntermediateCommits' | 'retentionDurationHours' | 'retentionEnabled' | 'syntacticIndexingEnabled' | 'type' | CodeIntelligenceConfigurationPolicyKeySpecifier)[];
export type CodeIntelligenceConfigurationPolicyFieldPolicy = {
	embeddingsEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indexCommitMaxAgeHours?: FieldPolicy<any> | FieldReadFunction<any>,
	indexingEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	indexIntermediateCommits?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	protected?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryPatterns?: FieldPolicy<any> | FieldReadFunction<any>,
	retainIntermediateCommits?: FieldPolicy<any> | FieldReadFunction<any>,
	retentionDurationHours?: FieldPolicy<any> | FieldReadFunction<any>,
	retentionEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	syntacticIndexingEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceConfigurationPolicyConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | CodeIntelligenceConfigurationPolicyConnectionKeySpecifier)[];
export type CodeIntelligenceConfigurationPolicyConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceRangeKeySpecifier = ('definitions' | 'hover' | 'implementations' | 'range' | 'references' | CodeIntelligenceRangeKeySpecifier)[];
export type CodeIntelligenceRangeFieldPolicy = {
	definitions?: FieldPolicy<any> | FieldReadFunction<any>,
	hover?: FieldPolicy<any> | FieldReadFunction<any>,
	implementations?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceRangeConnectionKeySpecifier = ('nodes' | CodeIntelligenceRangeConnectionKeySpecifier)[];
export type CodeIntelligenceRangeConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceRetentionPolicyMatchKeySpecifier = ('configurationPolicy' | 'matches' | 'protectingCommits' | CodeIntelligenceRetentionPolicyMatchKeySpecifier)[];
export type CodeIntelligenceRetentionPolicyMatchFieldPolicy = {
	configurationPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	protectingCommits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelligenceRetentionPolicyMatchesConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | CodeIntelligenceRetentionPolicyMatchesConnectionKeySpecifier)[];
export type CodeIntelligenceRetentionPolicyMatchesConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositoryKeySpecifier = ('externalRepository' | 'id' | 'name' | 'url' | CodeIntelRepositoryKeySpecifier)[];
export type CodeIntelRepositoryFieldPolicy = {
	externalRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositorySummaryKeySpecifier = ('availableIndexers' | 'lastIndexScan' | 'lastUploadRetentionScan' | 'limitError' | 'recentActivity' | CodeIntelRepositorySummaryKeySpecifier)[];
export type CodeIntelRepositorySummaryFieldPolicy = {
	availableIndexers?: FieldPolicy<any> | FieldReadFunction<any>,
	lastIndexScan?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUploadRetentionScan?: FieldPolicy<any> | FieldReadFunction<any>,
	limitError?: FieldPolicy<any> | FieldReadFunction<any>,
	recentActivity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositoryWithConfigurationKeySpecifier = ('indexers' | 'repository' | CodeIntelRepositoryWithConfigurationKeySpecifier)[];
export type CodeIntelRepositoryWithConfigurationFieldPolicy = {
	indexers?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositoryWithConfigurationConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | CodeIntelRepositoryWithConfigurationConnectionKeySpecifier)[];
export type CodeIntelRepositoryWithConfigurationConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositoryWithErrorKeySpecifier = ('count' | 'repository' | CodeIntelRepositoryWithErrorKeySpecifier)[];
export type CodeIntelRepositoryWithErrorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelRepositoryWithErrorConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | CodeIntelRepositoryWithErrorConnectionKeySpecifier)[];
export type CodeIntelRepositoryWithErrorConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeIntelSummaryKeySpecifier = ('numRepositoriesWithCodeIntelligence' | 'repositoriesWithConfiguration' | 'repositoriesWithErrors' | CodeIntelSummaryKeySpecifier)[];
export type CodeIntelSummaryFieldPolicy = {
	numRepositoriesWithCodeIntelligence?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesWithConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesWithErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeownersFileEntryKeySpecifier = ('codeownersFile' | 'description' | 'ruleLineMatch' | 'title' | CodeownersFileEntryKeySpecifier)[];
export type CodeownersFileEntryFieldPolicy = {
	codeownersFile?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ruleLineMatch?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeownersIngestedFileKeySpecifier = ('contents' | 'createdAt' | 'id' | 'repository' | 'updatedAt' | CodeownersIngestedFileKeySpecifier)[];
export type CodeownersIngestedFileFieldPolicy = {
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeownersIngestedFileConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | CodeownersIngestedFileConnectionKeySpecifier)[];
export type CodeownersIngestedFileConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyConfigFeaturesKeySpecifier = ('attribution' | 'autoComplete' | 'chat' | 'commands' | CodyConfigFeaturesKeySpecifier)[];
export type CodyConfigFeaturesFieldPolicy = {
	attribution?: FieldPolicy<any> | FieldReadFunction<any>,
	autoComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	commands?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyContextAlternativesResultKeySpecifier = ('contextLists' | CodyContextAlternativesResultKeySpecifier)[];
export type CodyContextAlternativesResultFieldPolicy = {
	contextLists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyContextFiltersKeySpecifier = ('raw' | CodyContextFiltersKeySpecifier)[];
export type CodyContextFiltersFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyContextListKeySpecifier = ('contextItems' | 'Name' | CodyContextListKeySpecifier)[];
export type CodyContextListFieldPolicy = {
	contextItems?: FieldPolicy<any> | FieldReadFunction<any>,
	Name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyGatewayAccessKeySpecifier = ('chatCompletionsRateLimit' | 'codeCompletionsRateLimit' | 'embeddingsRateLimit' | 'enabled' | CodyGatewayAccessKeySpecifier)[];
export type CodyGatewayAccessFieldPolicy = {
	chatCompletionsRateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	codeCompletionsRateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddingsRateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyGatewayDotcomUserKeySpecifier = ('codyGatewayAccess' | 'id' | 'username' | CodyGatewayDotcomUserKeySpecifier)[];
export type CodyGatewayDotcomUserFieldPolicy = {
	codyGatewayAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyGatewayRateLimitKeySpecifier = ('allowedModels' | 'intervalSeconds' | 'limit' | 'source' | 'usage' | CodyGatewayRateLimitKeySpecifier)[];
export type CodyGatewayRateLimitFieldPolicy = {
	allowedModels?: FieldPolicy<any> | FieldReadFunction<any>,
	intervalSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	usage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyGatewayRateLimitStatusKeySpecifier = ('feature' | 'interval' | 'limit' | 'nextLimitReset' | 'percentUsed' | 'usage' | CodyGatewayRateLimitStatusKeySpecifier)[];
export type CodyGatewayRateLimitStatusFieldPolicy = {
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	nextLimitReset?: FieldPolicy<any> | FieldReadFunction<any>,
	percentUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	usage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyGatewayUsageDatapointKeySpecifier = ('count' | 'date' | 'model' | CodyGatewayUsageDatapointKeySpecifier)[];
export type CodyGatewayUsageDatapointFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodyLLMConfigurationKeySpecifier = ('chatModel' | 'chatModelMaxTokens' | 'completionModel' | 'completionModelMaxTokens' | 'disableClientConfigAPI' | 'fastChatModel' | 'fastChatModelMaxTokens' | 'provider' | 'smartContextWindow' | CodyLLMConfigurationKeySpecifier)[];
export type CodyLLMConfigurationFieldPolicy = {
	chatModel?: FieldPolicy<any> | FieldReadFunction<any>,
	chatModelMaxTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	completionModel?: FieldPolicy<any> | FieldReadFunction<any>,
	completionModelMaxTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	disableClientConfigAPI?: FieldPolicy<any> | FieldReadFunction<any>,
	fastChatModel?: FieldPolicy<any> | FieldReadFunction<any>,
	fastChatModelMaxTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	smartContextWindow?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodySubscriptionKeySpecifier = ('applyProRateLimits' | 'cancelAtPeriodEnd' | 'currentPeriodEndAt' | 'currentPeriodStartAt' | 'plan' | 'status' | CodySubscriptionKeySpecifier)[];
export type CodySubscriptionFieldPolicy = {
	applyProRateLimits?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelAtPeriodEnd?: FieldPolicy<any> | FieldReadFunction<any>,
	currentPeriodEndAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentPeriodStartAt?: FieldPolicy<any> | FieldReadFunction<any>,
	plan?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitSearchResultKeySpecifier = ('commit' | 'detail' | 'diffPreview' | 'label' | 'matches' | 'messagePreview' | 'refs' | 'sourceRefs' | 'url' | CommitSearchResultKeySpecifier)[];
export type CommitSearchResultFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	detail?: FieldPolicy<any> | FieldReadFunction<any>,
	diffPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	messagePreview?: FieldPolicy<any> | FieldReadFunction<any>,
	refs?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComputeEnvironmentEntryKeySpecifier = ('range' | 'value' | 'variable' | ComputeEnvironmentEntryKeySpecifier)[];
export type ComputeEnvironmentEntryFieldPolicy = {
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	variable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComputeMatchKeySpecifier = ('environment' | 'range' | 'value' | ComputeMatchKeySpecifier)[];
export type ComputeMatchFieldPolicy = {
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComputeMatchContextKeySpecifier = ('commit' | 'matches' | 'path' | 'repository' | ComputeMatchContextKeySpecifier)[];
export type ComputeMatchContextFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComputeTextKeySpecifier = ('commit' | 'kind' | 'path' | 'repository' | 'value' | ComputeTextKeySpecifier)[];
export type ComputeTextFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurationKeySpecifier = ('contents' | 'messages' | ConfigurationKeySpecifier)[];
export type ConfigurationFieldPolicy = {
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurationCascadeKeySpecifier = ('merged' | 'subjects' | ConfigurationCascadeKeySpecifier)[];
export type ConfigurationCascadeFieldPolicy = {
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	subjects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionKeySpecifier = ('pageInfo' | 'totalCount' | ConnectionKeySpecifier)[];
export type ConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | ConnectionPageInfoKeySpecifier)[];
export type ConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAccessTokenResultKeySpecifier = ('id' | 'token' | CreateAccessTokenResultKeySpecifier)[];
export type CreateAccessTokenResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUserResultKeySpecifier = ('resetPasswordURL' | 'user' | CreateUserResultKeySpecifier)[];
export type CreateUserResultFieldPolicy = {
	resetPasswordURL?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DefaultSettingsKeySpecifier = ('configurationCascade' | 'id' | 'latestSettings' | 'settingsCascade' | 'settingsURL' | 'viewerCanAdminister' | DefaultSettingsKeySpecifier)[];
export type DefaultSettingsFieldPolicy = {
	configurationCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsURL?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiagnosticKeySpecifier = ('code' | 'location' | 'message' | 'severity' | 'source' | DiagnosticKeySpecifier)[];
export type DiagnosticFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiagnosticConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | DiagnosticConnectionKeySpecifier)[];
export type DiagnosticConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiffKeySpecifier = ('range' | 'repository' | DiffKeySpecifier)[];
export type DiffFieldPolicy = {
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiffStatKeySpecifier = ('added' | 'deleted' | DiffStatKeySpecifier)[];
export type DiffStatFieldPolicy = {
	added?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DotcomMutationKeySpecifier = ('archiveProductSubscription' | 'createProductSubscription' | 'generateProductLicenseForSubscription' | 'revokeLicense' | 'updateProductSubscription' | DotcomMutationKeySpecifier)[];
export type DotcomMutationFieldPolicy = {
	archiveProductSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	generateProductLicenseForSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeLicense?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DotcomQueryKeySpecifier = ('codyGatewayDotcomUserByToken' | 'codyGatewayRateLimitStatusByUserName' | 'productLicenses' | 'productSubscription' | 'productSubscriptionByAccessToken' | 'productSubscriptions' | DotcomQueryKeySpecifier)[];
export type DotcomQueryFieldPolicy = {
	codyGatewayDotcomUserByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	codyGatewayRateLimitStatusByUserName?: FieldPolicy<any> | FieldReadFunction<any>,
	productLicenses?: FieldPolicy<any> | FieldReadFunction<any>,
	productSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	productSubscriptionByAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	productSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmbeddingsSearchResultKeySpecifier = ('content' | 'endLine' | 'fileName' | 'repoName' | 'revision' | 'startLine' | EmbeddingsSearchResultKeySpecifier)[];
export type EmbeddingsSearchResultFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	endLine?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	repoName?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmbeddingsSearchResultsKeySpecifier = ('codeResults' | 'textResults' | EmbeddingsSearchResultsKeySpecifier)[];
export type EmbeddingsSearchResultsFieldPolicy = {
	codeResults?: FieldPolicy<any> | FieldReadFunction<any>,
	textResults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmptyResponseKeySpecifier = ('alwaysNil' | EmptyResponseKeySpecifier)[];
export type EmptyResponseFieldPolicy = {
	alwaysNil?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('extensions' | 'message' | 'path' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorExtensionsKeySpecifier = ('code' | ErrorExtensionsKeySpecifier)[];
export type ErrorExtensionsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvaluatedFeatureFlagKeySpecifier = ('name' | 'value' | EvaluatedFeatureFlagKeySpecifier)[];
export type EvaluatedFeatureFlagFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLogKeySpecifier = ('anonymousUserID' | 'argument' | 'name' | 'source' | 'timestamp' | 'url' | 'user' | 'version' | EventLogKeySpecifier)[];
export type EventLogFieldPolicy = {
	anonymousUserID?: FieldPolicy<any> | FieldReadFunction<any>,
	argument?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLogsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | EventLogsConnectionKeySpecifier)[];
export type EventLogsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutionLogEntryKeySpecifier = ('command' | 'durationMilliseconds' | 'exitCode' | 'key' | 'out' | 'startTime' | ExecutionLogEntryKeySpecifier)[];
export type ExecutionLogEntryFieldPolicy = {
	command?: FieldPolicy<any> | FieldReadFunction<any>,
	durationMilliseconds?: FieldPolicy<any> | FieldReadFunction<any>,
	exitCode?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	out?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorKeySpecifier = ('active' | 'architecture' | 'compatibility' | 'dockerVersion' | 'executorVersion' | 'firstSeenAt' | 'gitVersion' | 'hostname' | 'id' | 'igniteVersion' | 'lastSeenAt' | 'os' | 'queueName' | 'queueNames' | 'srcCliVersion' | ExecutorKeySpecifier)[];
export type ExecutorFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	architecture?: FieldPolicy<any> | FieldReadFunction<any>,
	compatibility?: FieldPolicy<any> | FieldReadFunction<any>,
	dockerVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	executorVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	firstSeenAt?: FieldPolicy<any> | FieldReadFunction<any>,
	gitVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	hostname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	igniteVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSeenAt?: FieldPolicy<any> | FieldReadFunction<any>,
	os?: FieldPolicy<any> | FieldReadFunction<any>,
	queueName?: FieldPolicy<any> | FieldReadFunction<any>,
	queueNames?: FieldPolicy<any> | FieldReadFunction<any>,
	srcCliVersion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExecutorConnectionKeySpecifier)[];
export type ExecutorConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorSecretKeySpecifier = ('accessLogs' | 'createdAt' | 'creator' | 'id' | 'key' | 'namespace' | 'overwritesGlobalSecret' | 'scope' | 'updatedAt' | ExecutorSecretKeySpecifier)[];
export type ExecutorSecretFieldPolicy = {
	accessLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	overwritesGlobalSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorSecretAccessLogKeySpecifier = ('createdAt' | 'executorSecret' | 'id' | 'machineUser' | 'user' | ExecutorSecretAccessLogKeySpecifier)[];
export type ExecutorSecretAccessLogFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	executorSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	machineUser?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorSecretAccessLogConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExecutorSecretAccessLogConnectionKeySpecifier)[];
export type ExecutorSecretAccessLogConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecutorSecretConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExecutorSecretConnectionKeySpecifier)[];
export type ExecutorSecretConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExhaustiveSearchAggregationResultKeySpecifier = ('groups' | 'mode' | 'otherGroupCount' | 'otherResultCount' | 'supportsPersistence' | ExhaustiveSearchAggregationResultKeySpecifier)[];
export type ExhaustiveSearchAggregationResultFieldPolicy = {
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	otherGroupCount?: FieldPolicy<any> | FieldReadFunction<any>,
	otherResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	supportsPersistence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExistingChangesetReferenceKeySpecifier = ('baseRepository' | 'externalID' | ExistingChangesetReferenceKeySpecifier)[];
export type ExistingChangesetReferenceFieldPolicy = {
	baseRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	externalID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportedEventKeySpecifier = ('exportedAt' | 'id' | 'payload' | ExportedEventKeySpecifier)[];
export type ExportedEventFieldPolicy = {
	exportedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportedEventsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExportedEventsConnectionKeySpecifier)[];
export type ExportedEventsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalAccountKeySpecifier = ('accountData' | 'accountID' | 'clientID' | 'codySubscription' | 'createdAt' | 'id' | 'publicAccountData' | 'refreshURL' | 'serviceID' | 'serviceType' | 'updatedAt' | 'user' | ExternalAccountKeySpecifier)[];
export type ExternalAccountFieldPolicy = {
	accountData?: FieldPolicy<any> | FieldReadFunction<any>,
	accountID?: FieldPolicy<any> | FieldReadFunction<any>,
	clientID?: FieldPolicy<any> | FieldReadFunction<any>,
	codySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publicAccountData?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshURL?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceID?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalAccountConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExternalAccountConnectionKeySpecifier)[];
export type ExternalAccountConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalChangesetKeySpecifier = ('author' | 'batchChanges' | 'body' | 'checkState' | 'commitVerification' | 'createdAt' | 'currentSpec' | 'diff' | 'diffStat' | 'error' | 'events' | 'externalID' | 'externalURL' | 'forkName' | 'forkNamespace' | 'id' | 'labels' | 'nextSyncAt' | 'ownedByBatchChange' | 'repository' | 'reviewState' | 'scheduleEstimateAt' | 'state' | 'syncerError' | 'title' | 'updatedAt' | ExternalChangesetKeySpecifier)[];
export type ExternalChangesetFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	checkState?: FieldPolicy<any> | FieldReadFunction<any>,
	commitVerification?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	externalID?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	forkName?: FieldPolicy<any> | FieldReadFunction<any>,
	forkNamespace?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedByBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewState?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleEstimateAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	syncerError?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalLinkKeySpecifier = ('serviceKind' | 'serviceType' | 'url' | ExternalLinkKeySpecifier)[];
export type ExternalLinkFieldPolicy = {
	serviceKind?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalRepositoryKeySpecifier = ('id' | 'serviceID' | 'serviceType' | ExternalRepositoryKeySpecifier)[];
export type ExternalRepositoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceID?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceKeySpecifier = ('checkConnection' | 'config' | 'createdAt' | 'creator' | 'displayName' | 'hasConnectionCheck' | 'id' | 'kind' | 'lastSyncAt' | 'lastSyncError' | 'lastUpdater' | 'nextSyncAt' | 'rateLimiterState' | 'repoCount' | 'supportsRepoExclusion' | 'syncJobs' | 'unrestricted' | 'updatedAt' | 'url' | 'warning' | ExternalServiceKeySpecifier)[];
export type ExternalServiceFieldPolicy = {
	checkConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	hasConnectionCheck?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSyncError?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdater?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	rateLimiterState?: FieldPolicy<any> | FieldReadFunction<any>,
	repoCount?: FieldPolicy<any> | FieldReadFunction<any>,
	supportsRepoExclusion?: FieldPolicy<any> | FieldReadFunction<any>,
	syncJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	unrestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	warning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceAvailabilityUnknownKeySpecifier = ('implementationNote' | ExternalServiceAvailabilityUnknownKeySpecifier)[];
export type ExternalServiceAvailabilityUnknownFieldPolicy = {
	implementationNote?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceAvailableKeySpecifier = ('lastCheckedAt' | ExternalServiceAvailableKeySpecifier)[];
export type ExternalServiceAvailableFieldPolicy = {
	lastCheckedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExternalServiceConnectionKeySpecifier)[];
export type ExternalServiceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceNamespaceKeySpecifier = ('externalID' | 'id' | 'name' | ExternalServiceNamespaceKeySpecifier)[];
export type ExternalServiceNamespaceFieldPolicy = {
	externalID?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceNamespaceConnectionKeySpecifier = ('nodes' | 'totalCount' | ExternalServiceNamespaceConnectionKeySpecifier)[];
export type ExternalServiceNamespaceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceRepositoryKeySpecifier = ('externalID' | 'id' | 'name' | ExternalServiceRepositoryKeySpecifier)[];
export type ExternalServiceRepositoryFieldPolicy = {
	externalID?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceRepositoryConnectionKeySpecifier = ('nodes' | ExternalServiceRepositoryConnectionKeySpecifier)[];
export type ExternalServiceRepositoryConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceSyncErrorKeySpecifier = ('externalService' | 'message' | ExternalServiceSyncErrorKeySpecifier)[];
export type ExternalServiceSyncErrorFieldPolicy = {
	externalService?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceSyncJobKeySpecifier = ('failureMessage' | 'finishedAt' | 'id' | 'queuedAt' | 'reposAdded' | 'reposDeleted' | 'reposModified' | 'reposSynced' | 'reposUnmodified' | 'repoSyncErrors' | 'startedAt' | 'state' | ExternalServiceSyncJobKeySpecifier)[];
export type ExternalServiceSyncJobFieldPolicy = {
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reposAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	reposDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	reposModified?: FieldPolicy<any> | FieldReadFunction<any>,
	reposSynced?: FieldPolicy<any> | FieldReadFunction<any>,
	reposUnmodified?: FieldPolicy<any> | FieldReadFunction<any>,
	repoSyncErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceSyncJobConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ExternalServiceSyncJobConnectionKeySpecifier)[];
export type ExternalServiceSyncJobConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalServiceUnavailableKeySpecifier = ('suspectedReason' | ExternalServiceUnavailableKeySpecifier)[];
export type ExternalServiceUnavailableFieldPolicy = {
	suspectedReason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureFlagBooleanKeySpecifier = ('createdAt' | 'name' | 'overrides' | 'updatedAt' | 'value' | FeatureFlagBooleanKeySpecifier)[];
export type FeatureFlagBooleanFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	overrides?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureFlagOverrideKeySpecifier = ('id' | 'namespace' | 'targetFlag' | 'value' | FeatureFlagOverrideKeySpecifier)[];
export type FeatureFlagOverrideFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	targetFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureFlagRolloutKeySpecifier = ('createdAt' | 'name' | 'overrides' | 'rolloutBasisPoints' | 'updatedAt' | FeatureFlagRolloutKeySpecifier)[];
export type FeatureFlagRolloutFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	overrides?: FieldPolicy<any> | FieldReadFunction<any>,
	rolloutBasisPoints?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('isDirectory' | 'name' | 'path' | 'repository' | 'url' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File2KeySpecifier = ('binary' | 'byteSize' | 'canonicalURL' | 'changelistURL' | 'content' | 'externalURLs' | 'highlight' | 'isDirectory' | 'languages' | 'name' | 'path' | 'richHTML' | 'totalLines' | 'url' | File2KeySpecifier)[];
export type File2FieldPolicy = {
	binary?: FieldPolicy<any> | FieldReadFunction<any>,
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	changelistURL?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	richHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLines?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBlockKeySpecifier = ('fileInput' | 'id' | FileBlockKeySpecifier)[];
export type FileBlockFieldPolicy = {
	fileInput?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBlockInputKeySpecifier = ('filePath' | 'lineRange' | 'repositoryName' | 'revision' | FileBlockInputKeySpecifier)[];
export type FileBlockInputFieldPolicy = {
	filePath?: FieldPolicy<any> | FieldReadFunction<any>,
	lineRange?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBlockLineRangeKeySpecifier = ('endLine' | 'startLine' | FileBlockLineRangeKeySpecifier)[];
export type FileBlockLineRangeFieldPolicy = {
	endLine?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileChunkContextKeySpecifier = ('blob' | 'chunkContent' | 'endLine' | 'startLine' | FileChunkContextKeySpecifier)[];
export type FileChunkContextFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>,
	chunkContent?: FieldPolicy<any> | FieldReadFunction<any>,
	endLine?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileDiffKeySpecifier = ('hunks' | 'internalID' | 'mostRelevantFile' | 'newFile' | 'newPath' | 'oldFile' | 'oldPath' | 'stat' | FileDiffKeySpecifier)[];
export type FileDiffFieldPolicy = {
	hunks?: FieldPolicy<any> | FieldReadFunction<any>,
	internalID?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRelevantFile?: FieldPolicy<any> | FieldReadFunction<any>,
	newFile?: FieldPolicy<any> | FieldReadFunction<any>,
	newPath?: FieldPolicy<any> | FieldReadFunction<any>,
	oldFile?: FieldPolicy<any> | FieldReadFunction<any>,
	oldPath?: FieldPolicy<any> | FieldReadFunction<any>,
	stat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileDiffConnectionKeySpecifier = ('diffStat' | 'nodes' | 'pageInfo' | 'rawDiff' | 'totalCount' | FileDiffConnectionKeySpecifier)[];
export type FileDiffConnectionFieldPolicy = {
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	rawDiff?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileDiffHunkKeySpecifier = ('body' | 'highlight' | 'newRange' | 'oldNoNewlineAt' | 'oldRange' | 'section' | FileDiffHunkKeySpecifier)[];
export type FileDiffHunkFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	newRange?: FieldPolicy<any> | FieldReadFunction<any>,
	oldNoNewlineAt?: FieldPolicy<any> | FieldReadFunction<any>,
	oldRange?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileDiffHunkRangeKeySpecifier = ('lines' | 'startLine' | FileDiffHunkRangeKeySpecifier)[];
export type FileDiffHunkRangeFieldPolicy = {
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileMatchKeySpecifier = ('chunkMatches' | 'file' | 'languages' | 'limitHit' | 'lineMatches' | 'pathMatches' | 'repository' | 'revSpec' | 'symbols' | FileMatchKeySpecifier)[];
export type FileMatchFieldPolicy = {
	chunkMatches?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	limitHit?: FieldPolicy<any> | FieldReadFunction<any>,
	lineMatches?: FieldPolicy<any> | FieldReadFunction<any>,
	pathMatches?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	revSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	symbols?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForkTargetKeySpecifier = ('namespace' | 'pushUser' | ForkTargetKeySpecifier)[];
export type ForkTargetFieldPolicy = {
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	pushUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericIncompleteDatapointAlertKeySpecifier = ('reason' | 'repositories' | 'time' | GenericIncompleteDatapointAlertKeySpecifier)[];
export type GenericIncompleteDatapointAlertFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericSearchResultInterfaceKeySpecifier = ('detail' | 'label' | 'matches' | 'url' | GenericSearchResultInterfaceKeySpecifier)[];
export type GenericSearchResultInterfaceFieldPolicy = {
	detail?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitBlobKeySpecifier = ('binary' | 'blame' | 'byteSize' | 'canonicalURL' | 'changelistURL' | 'codeGraphData' | 'commit' | 'content' | 'externalURLs' | 'highlight' | 'history' | 'isDirectory' | 'isSingleChild' | 'languages' | 'lfs' | 'localCodeIntel' | 'lsif' | 'name' | 'ownership' | 'path' | 'repository' | 'richHTML' | 'submodule' | 'symbol' | 'symbolInfo' | 'symbols' | 'totalLines' | 'url' | GitBlobKeySpecifier)[];
export type GitBlobFieldPolicy = {
	binary?: FieldPolicy<any> | FieldReadFunction<any>,
	blame?: FieldPolicy<any> | FieldReadFunction<any>,
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	changelistURL?: FieldPolicy<any> | FieldReadFunction<any>,
	codeGraphData?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	isSingleChild?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	lfs?: FieldPolicy<any> | FieldReadFunction<any>,
	localCodeIntel?: FieldPolicy<any> | FieldReadFunction<any>,
	lsif?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownership?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	richHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	submodule?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	symbolInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	symbols?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLines?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitBlobLSIFDataKeySpecifier = ('definitions' | 'diagnostics' | 'hover' | 'implementations' | 'prototypes' | 'ranges' | 'references' | 'snapshot' | 'stencil' | 'visibleIndexes' | GitBlobLSIFDataKeySpecifier)[];
export type GitBlobLSIFDataFieldPolicy = {
	definitions?: FieldPolicy<any> | FieldReadFunction<any>,
	diagnostics?: FieldPolicy<any> | FieldReadFunction<any>,
	hover?: FieldPolicy<any> | FieldReadFunction<any>,
	implementations?: FieldPolicy<any> | FieldReadFunction<any>,
	prototypes?: FieldPolicy<any> | FieldReadFunction<any>,
	ranges?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	snapshot?: FieldPolicy<any> | FieldReadFunction<any>,
	stencil?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleIndexes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitBranchChangesetDescriptionKeySpecifier = ('baseRef' | 'baseRepository' | 'baseRev' | 'body' | 'commits' | 'diff' | 'diffStat' | 'headRef' | 'published' | 'title' | GitBranchChangesetDescriptionKeySpecifier)[];
export type GitBranchChangesetDescriptionFieldPolicy = {
	baseRef?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRev?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	commits?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	headRef?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitCommitKeySpecifier = ('abbreviatedOID' | 'ancestors' | 'author' | 'behindAhead' | 'blob' | 'body' | 'canonicalURL' | 'committer' | 'diff' | 'externalURLs' | 'file' | 'fileNames' | 'id' | 'languages' | 'languageStatistics' | 'message' | 'oid' | 'ownership' | 'parents' | 'path' | 'perforceChangelist' | 'repository' | 'subject' | 'symbols' | 'tree' | 'url' | GitCommitKeySpecifier)[];
export type GitCommitFieldPolicy = {
	abbreviatedOID?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	behindAhead?: FieldPolicy<any> | FieldReadFunction<any>,
	blob?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	committer?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	fileNames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	languageStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	ownership?: FieldPolicy<any> | FieldReadFunction<any>,
	parents?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	perforceChangelist?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	symbols?: FieldPolicy<any> | FieldReadFunction<any>,
	tree?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitCommitConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | GitCommitConnectionKeySpecifier)[];
export type GitCommitConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitCommitDescriptionKeySpecifier = ('author' | 'body' | 'diff' | 'message' | 'subject' | GitCommitDescriptionKeySpecifier)[];
export type GitCommitDescriptionFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitHubAccountKeySpecifier = ('avatarURL' | 'login' | 'type' | 'url' | GitHubAccountKeySpecifier)[];
export type GitHubAccountFieldPolicy = {
	avatarURL?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitHubAppKeySpecifier = ('appID' | 'appURL' | 'baseURL' | 'clientID' | 'clientSecret' | 'createdAt' | 'domain' | 'id' | 'installations' | 'logo' | 'name' | 'slug' | 'updatedAt' | 'webhook' | GitHubAppKeySpecifier)[];
export type GitHubAppFieldPolicy = {
	appID?: FieldPolicy<any> | FieldReadFunction<any>,
	appURL?: FieldPolicy<any> | FieldReadFunction<any>,
	baseURL?: FieldPolicy<any> | FieldReadFunction<any>,
	clientID?: FieldPolicy<any> | FieldReadFunction<any>,
	clientSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	installations?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitHubAppConnectionKeySpecifier = ('nodes' | 'totalCount' | GitHubAppConnectionKeySpecifier)[];
export type GitHubAppConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitHubCommitVerificationKeySpecifier = ('payload' | 'reason' | 'signature' | 'verified' | GitHubCommitVerificationKeySpecifier)[];
export type GitHubCommitVerificationFieldPolicy = {
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitObjectKeySpecifier = ('abbreviatedOID' | 'commit' | 'oid' | 'type' | GitObjectKeySpecifier)[];
export type GitObjectFieldPolicy = {
	abbreviatedOID?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitObjectFilterPreviewKeySpecifier = ('nodes' | 'totalCount' | 'totalCountYoungerThanThreshold' | GitObjectFilterPreviewKeySpecifier)[];
export type GitObjectFilterPreviewFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCountYoungerThanThreshold?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitRefKeySpecifier = ('abbrevName' | 'displayName' | 'id' | 'name' | 'prefix' | 'repository' | 'target' | 'type' | 'url' | GitRefKeySpecifier)[];
export type GitRefFieldPolicy = {
	abbrevName?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitRefConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | GitRefConnectionKeySpecifier)[];
export type GitRefConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitRevisionRangeKeySpecifier = ('base' | 'baseRevSpec' | 'expr' | 'head' | 'headRevSpec' | 'mergeBase' | GitRevisionRangeKeySpecifier)[];
export type GitRevisionRangeFieldPolicy = {
	base?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRevSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	expr?: FieldPolicy<any> | FieldReadFunction<any>,
	head?: FieldPolicy<any> | FieldReadFunction<any>,
	headRevSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeBase?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitRevSpecExprKeySpecifier = ('expr' | 'object' | GitRevSpecExprKeySpecifier)[];
export type GitRevSpecExprFieldPolicy = {
	expr?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitserverDiskThresholdReachedKeySpecifier = ('message' | GitserverDiskThresholdReachedKeySpecifier)[];
export type GitserverDiskThresholdReachedFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitserverInstanceKeySpecifier = ('address' | 'freeDiskSpaceBytes' | 'id' | 'totalDiskSpaceBytes' | GitserverInstanceKeySpecifier)[];
export type GitserverInstanceFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	freeDiskSpaceBytes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDiskSpaceBytes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitserverInstanceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | GitserverInstanceConnectionKeySpecifier)[];
export type GitserverInstanceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitTreeKeySpecifier = ('canonicalURL' | 'commit' | 'directories' | 'entries' | 'externalURLs' | 'files' | 'history' | 'isDirectory' | 'isRoot' | 'isSingleChild' | 'lsif' | 'name' | 'ownership' | 'ownershipStats' | 'path' | 'rawZipArchiveURL' | 'repository' | 'submodule' | 'symbols' | 'url' | GitTreeKeySpecifier)[];
export type GitTreeFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	directories?: FieldPolicy<any> | FieldReadFunction<any>,
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	isRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	isSingleChild?: FieldPolicy<any> | FieldReadFunction<any>,
	lsif?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownership?: FieldPolicy<any> | FieldReadFunction<any>,
	ownershipStats?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	rawZipArchiveURL?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	submodule?: FieldPolicy<any> | FieldReadFunction<any>,
	symbols?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitTreeLSIFDataKeySpecifier = ('diagnostics' | GitTreeLSIFDataKeySpecifier)[];
export type GitTreeLSIFDataFieldPolicy = {
	diagnostics?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitUpdatesDisabledKeySpecifier = ('message' | GitUpdatesDisabledKeySpecifier)[];
export type GitUpdatesDisabledFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalChangesetsStatsKeySpecifier = ('closed' | 'draft' | 'merged' | 'open' | 'total' | 'unpublished' | GlobalChangesetsStatsKeySpecifier)[];
export type GlobalChangesetsStatsFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalRankingSummaryKeySpecifier = ('derivativeGraphKey' | 'nextJobStartsAt' | 'numExportedIndexes' | 'numRepositoriesWithoutCurrentRanks' | 'numTargetIndexes' | 'rankingSummary' | GlobalRankingSummaryKeySpecifier)[];
export type GlobalRankingSummaryFieldPolicy = {
	derivativeGraphKey?: FieldPolicy<any> | FieldReadFunction<any>,
	nextJobStartsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	numExportedIndexes?: FieldPolicy<any> | FieldReadFunction<any>,
	numRepositoriesWithoutCurrentRanks?: FieldPolicy<any> | FieldReadFunction<any>,
	numTargetIndexes?: FieldPolicy<any> | FieldReadFunction<any>,
	rankingSummary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenApplyPreviewTargetsAttachKeySpecifier = ('changesetSpec' | HiddenApplyPreviewTargetsAttachKeySpecifier)[];
export type HiddenApplyPreviewTargetsAttachFieldPolicy = {
	changesetSpec?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenApplyPreviewTargetsDetachKeySpecifier = ('changeset' | HiddenApplyPreviewTargetsDetachKeySpecifier)[];
export type HiddenApplyPreviewTargetsDetachFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenApplyPreviewTargetsUpdateKeySpecifier = ('changeset' | 'changesetSpec' | HiddenApplyPreviewTargetsUpdateKeySpecifier)[];
export type HiddenApplyPreviewTargetsUpdateFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetSpec?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenBatchSpecWorkspaceKeySpecifier = ('batchSpec' | 'cachedResultFound' | 'diffStat' | 'finishedAt' | 'id' | 'ignored' | 'onlyFetchWorkspace' | 'placeInGlobalQueue' | 'placeInQueue' | 'queuedAt' | 'startedAt' | 'state' | 'stepCacheResultCount' | 'unsupported' | HiddenBatchSpecWorkspaceKeySpecifier)[];
export type HiddenBatchSpecWorkspaceFieldPolicy = {
	batchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	cachedResultFound?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	onlyFetchWorkspace?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInGlobalQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stepCacheResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unsupported?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenChangesetApplyPreviewKeySpecifier = ('delta' | 'operations' | 'targets' | HiddenChangesetApplyPreviewKeySpecifier)[];
export type HiddenChangesetApplyPreviewFieldPolicy = {
	delta?: FieldPolicy<any> | FieldReadFunction<any>,
	operations?: FieldPolicy<any> | FieldReadFunction<any>,
	targets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenChangesetSpecKeySpecifier = ('expiresAt' | 'id' | 'type' | HiddenChangesetSpecKeySpecifier)[];
export type HiddenChangesetSpecFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HiddenExternalChangesetKeySpecifier = ('batchChanges' | 'createdAt' | 'id' | 'nextSyncAt' | 'state' | 'updatedAt' | HiddenExternalChangesetKeySpecifier)[];
export type HiddenExternalChangesetFieldPolicy = {
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HighlightKeySpecifier = ('character' | 'length' | 'line' | HighlightKeySpecifier)[];
export type HighlightFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HighlightedDiffHunkBodyKeySpecifier = ('aborted' | 'lines' | HighlightedDiffHunkBodyKeySpecifier)[];
export type HighlightedDiffHunkBodyFieldPolicy = {
	aborted?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HighlightedDiffHunkLineKeySpecifier = ('html' | 'kind' | HighlightedDiffHunkLineKeySpecifier)[];
export type HighlightedDiffHunkLineFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HighlightedFileKeySpecifier = ('aborted' | 'html' | 'lineRanges' | 'lsif' | HighlightedFileKeySpecifier)[];
export type HighlightedFileFieldPolicy = {
	aborted?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	lineRanges?: FieldPolicy<any> | FieldReadFunction<any>,
	lsif?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HighlightedStringKeySpecifier = ('highlights' | 'value' | HighlightedStringKeySpecifier)[];
export type HighlightedStringFieldPolicy = {
	highlights?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HoverKeySpecifier = ('markdown' | 'range' | HoverKeySpecifier)[];
export type HoverFieldPolicy = {
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HTTPHeaderKeySpecifier = ('name' | 'values' | HTTPHeaderKeySpecifier)[];
export type HTTPHeaderFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HunkKeySpecifier = ('author' | 'commit' | 'endByte' | 'endLine' | 'filename' | 'message' | 'rev' | 'startByte' | 'startLine' | HunkKeySpecifier)[];
export type HunkFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	endByte?: FieldPolicy<any> | FieldReadFunction<any>,
	endLine?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	rev?: FieldPolicy<any> | FieldReadFunction<any>,
	startByte?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncompleteDatapointAlertKeySpecifier = ('time' | IncompleteDatapointAlertKeySpecifier)[];
export type IncompleteDatapointAlertFieldPolicy = {
	time?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexConfigurationKeySpecifier = ('configuration' | 'inferredConfiguration' | 'parsedConfiguration' | IndexConfigurationKeySpecifier)[];
export type IndexConfigurationFieldPolicy = {
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	inferredConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedConfiguration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexedSearchInstanceKeySpecifier = ('address' | 'id' | IndexedSearchInstanceKeySpecifier)[];
export type IndexedSearchInstanceFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexedSearchInstanceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | IndexedSearchInstanceConnectionKeySpecifier)[];
export type IndexedSearchInstanceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexerWithCountKeySpecifier = ('count' | 'indexer' | IndexerWithCountKeySpecifier)[];
export type IndexerWithCountFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	indexer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexingProgressKeySpecifier = ('indexed' | 'notIndexed' | IndexingProgressKeySpecifier)[];
export type IndexingProgressFieldPolicy = {
	indexed?: FieldPolicy<any> | FieldReadFunction<any>,
	notIndexed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexStepKeySpecifier = ('commands' | 'indexerArgs' | 'logEntry' | 'outfile' | 'requestedEnvVars' | IndexStepKeySpecifier)[];
export type IndexStepFieldPolicy = {
	commands?: FieldPolicy<any> | FieldReadFunction<any>,
	indexerArgs?: FieldPolicy<any> | FieldReadFunction<any>,
	logEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	outfile?: FieldPolicy<any> | FieldReadFunction<any>,
	requestedEnvVars?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndexStepsKeySpecifier = ('index' | 'preIndex' | 'setup' | 'teardown' | 'upload' | IndexStepsKeySpecifier)[];
export type IndexStepsFieldPolicy = {
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	preIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	setup?: FieldPolicy<any> | FieldReadFunction<any>,
	teardown?: FieldPolicy<any> | FieldReadFunction<any>,
	upload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InferAutoIndexJobsResultKeySpecifier = ('inferenceOutput' | 'jobs' | InferAutoIndexJobsResultKeySpecifier)[];
export type InferAutoIndexJobsResultFieldPolicy = {
	inferenceOutput?: FieldPolicy<any> | FieldReadFunction<any>,
	jobs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InferredAvailableIndexersKeySpecifier = ('indexer' | 'roots' | 'rootsWithKeys' | InferredAvailableIndexersKeySpecifier)[];
export type InferredAvailableIndexersFieldPolicy = {
	indexer?: FieldPolicy<any> | FieldReadFunction<any>,
	roots?: FieldPolicy<any> | FieldReadFunction<any>,
	rootsWithKeys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InferredConfigurationKeySpecifier = ('configuration' | 'limitError' | 'parsedConfiguration' | InferredConfigurationKeySpecifier)[];
export type InferredConfigurationFieldPolicy = {
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	limitError?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedConfiguration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightKeySpecifier = ('description' | 'id' | 'series' | 'title' | InsightKeySpecifier)[];
export type InsightFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	series?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightBackfillQueueItemKeySpecifier = ('backfillQueueStatus' | 'creator' | 'id' | 'insightViewTitle' | 'seriesLabel' | 'seriesSearchQuery' | InsightBackfillQueueItemKeySpecifier)[];
export type InsightBackfillQueueItemFieldPolicy = {
	backfillQueueStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	insightViewTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesSearchQuery?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightBackfillQueueItemConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | InsightBackfillQueueItemConnectionKeySpecifier)[];
export type InsightBackfillQueueItemConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightDataPointKeySpecifier = ('dateTime' | 'diffQuery' | 'pointInTimeQuery' | 'value' | InsightDataPointKeySpecifier)[];
export type InsightDataPointFieldPolicy = {
	dateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	diffQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	pointInTimeQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightIntervalTimeScopeKeySpecifier = ('unit' | 'value' | InsightIntervalTimeScopeKeySpecifier)[];
export type InsightIntervalTimeScopeFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightRepositoryScopeKeySpecifier = ('repositories' | InsightRepositoryScopeKeySpecifier)[];
export type InsightRepositoryScopeFieldPolicy = {
	repositories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightsDashboardKeySpecifier = ('grants' | 'id' | 'title' | 'views' | InsightsDashboardKeySpecifier)[];
export type InsightsDashboardFieldPolicy = {
	grants?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightsDashboardConnectionKeySpecifier = ('nodes' | 'pageInfo' | InsightsDashboardConnectionKeySpecifier)[];
export type InsightsDashboardConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightsDashboardPayloadKeySpecifier = ('dashboard' | InsightsDashboardPayloadKeySpecifier)[];
export type InsightsDashboardPayloadFieldPolicy = {
	dashboard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightSeriesMetadataKeySpecifier = ('enabled' | 'query' | 'seriesId' | InsightSeriesMetadataKeySpecifier)[];
export type InsightSeriesMetadataFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightSeriesMetadataPayloadKeySpecifier = ('series' | InsightSeriesMetadataPayloadKeySpecifier)[];
export type InsightSeriesMetadataPayloadFieldPolicy = {
	series?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightSeriesQueryStatusKeySpecifier = ('completed' | 'enabled' | 'errored' | 'failed' | 'processing' | 'query' | 'queued' | 'seriesId' | InsightSeriesQueryStatusKeySpecifier)[];
export type InsightSeriesQueryStatusFieldPolicy = {
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	errored?: FieldPolicy<any> | FieldReadFunction<any>,
	failed?: FieldPolicy<any> | FieldReadFunction<any>,
	processing?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	queued?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightSeriesStatusKeySpecifier = ('backfillQueuedAt' | 'completedJobs' | 'failedJobs' | 'incompleteDatapoints' | 'isLoadingData' | 'pendingJobs' | 'totalPoints' | InsightSeriesStatusKeySpecifier)[];
export type InsightSeriesStatusFieldPolicy = {
	backfillQueuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	completedJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	failedJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	incompleteDatapoints?: FieldPolicy<any> | FieldReadFunction<any>,
	isLoadingData?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPoints?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightsPermissionGrantsKeySpecifier = ('global' | 'organizations' | 'users' | InsightsPermissionGrantsKeySpecifier)[];
export type InsightsPermissionGrantsFieldPolicy = {
	global?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightsSeriesKeySpecifier = ('label' | 'points' | 'seriesId' | 'status' | InsightsSeriesKeySpecifier)[];
export type InsightsSeriesFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	points?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightViewKeySpecifier = ('appliedFilters' | 'appliedSeriesDisplayOptions' | 'dashboardReferenceCount' | 'dashboards' | 'dataSeries' | 'dataSeriesDefinitions' | 'defaultFilters' | 'defaultSeriesDisplayOptions' | 'id' | 'isFrozen' | 'presentation' | 'repositoryDefinition' | 'seriesCount' | 'timeScope' | InsightViewKeySpecifier)[];
export type InsightViewFieldPolicy = {
	appliedFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	appliedSeriesDisplayOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboardReferenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboards?: FieldPolicy<any> | FieldReadFunction<any>,
	dataSeries?: FieldPolicy<any> | FieldReadFunction<any>,
	dataSeriesDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultSeriesDisplayOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isFrozen?: FieldPolicy<any> | FieldReadFunction<any>,
	presentation?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	timeScope?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightViewConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | InsightViewConnectionKeySpecifier)[];
export type InsightViewConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightViewDebugKeySpecifier = ('raw' | InsightViewDebugKeySpecifier)[];
export type InsightViewDebugFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightViewFiltersKeySpecifier = ('excludeRepoRegex' | 'includeRepoRegex' | 'searchContexts' | InsightViewFiltersKeySpecifier)[];
export type InsightViewFiltersFieldPolicy = {
	excludeRepoRegex?: FieldPolicy<any> | FieldReadFunction<any>,
	includeRepoRegex?: FieldPolicy<any> | FieldReadFunction<any>,
	searchContexts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InsightViewPayloadKeySpecifier = ('view' | InsightViewPayloadKeySpecifier)[];
export type InsightViewPayloadFieldPolicy = {
	view?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstallationKeySpecifier = ('account' | 'externalServices' | 'id' | 'url' | InstallationKeySpecifier)[];
export type InstallationFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServices?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InviteUserToOrganizationResultKeySpecifier = ('invitationURL' | 'sentInvitationEmail' | InviteUserToOrganizationResultKeySpecifier)[];
export type InviteUserToOrganizationResultFieldPolicy = {
	invitationURL?: FieldPolicy<any> | FieldReadFunction<any>,
	sentInvitationEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValuePairKeySpecifier = ('key' | 'value' | KeyValuePairKeySpecifier)[];
export type KeyValuePairFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageKeySpecifier = ('name' | LanguageKeySpecifier)[];
export type LanguageFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageStatisticsKeySpecifier = ('name' | 'totalBytes' | 'totalLines' | LanguageStatisticsKeySpecifier)[];
export type LanguageStatisticsFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	totalBytes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLines?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LFSKeySpecifier = ('byteSize' | LFSKeySpecifier)[];
export type LFSFieldPolicy = {
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LicenseInfoKeySpecifier = ('expiresAt' | 'tags' | 'userCount' | LicenseInfoKeySpecifier)[];
export type LicenseInfoFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	userCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineChartDataSeriesPresentationKeySpecifier = ('color' | 'label' | 'seriesId' | LineChartDataSeriesPresentationKeySpecifier)[];
export type LineChartDataSeriesPresentationFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineChartInsightViewPresentationKeySpecifier = ('seriesPresentation' | 'title' | LineChartInsightViewPresentationKeySpecifier)[];
export type LineChartInsightViewPresentationFieldPolicy = {
	seriesPresentation?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineMatchKeySpecifier = ('limitHit' | 'lineNumber' | 'offsetAndLengths' | 'preview' | LineMatchKeySpecifier)[];
export type LineMatchFieldPolicy = {
	limitHit?: FieldPolicy<any> | FieldReadFunction<any>,
	lineNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	offsetAndLengths?: FieldPolicy<any> | FieldReadFunction<any>,
	preview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineRangeKeySpecifier = ('character' | 'length' | 'line' | LineRangeKeySpecifier)[];
export type LineRangeFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('canonicalURL' | 'range' | 'resource' | 'url' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationConnectionKeySpecifier = ('nodes' | 'pageInfo' | LocationConnectionKeySpecifier)[];
export type LocationConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LSIFUploadAuditLogKeySpecifier = ('changedColumns' | 'inputCommit' | 'inputIndexer' | 'inputRoot' | 'logTimestamp' | 'operation' | 'reason' | 'uploadDeletedAt' | 'uploadedAt' | 'uploadId' | LSIFUploadAuditLogKeySpecifier)[];
export type LSIFUploadAuditLogFieldPolicy = {
	changedColumns?: FieldPolicy<any> | FieldReadFunction<any>,
	inputCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	inputIndexer?: FieldPolicy<any> | FieldReadFunction<any>,
	inputRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	logTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	operation?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadDeletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkdownKeySpecifier = ('html' | 'text' | MarkdownKeySpecifier)[];
export type MarkdownFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkdownBlockKeySpecifier = ('id' | 'markdownInput' | MarkdownBlockKeySpecifier)[];
export type MarkdownBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	markdownInput?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MirrorRepositoryInfoKeySpecifier = ('byteSize' | 'cloned' | 'cloneInProgress' | 'cloneProgress' | 'corruptionLogs' | 'isCorrupted' | 'lastError' | 'lastSyncOutput' | 'nextSyncAt' | 'remoteURL' | 'shard' | 'updatedAt' | 'updateQueue' | 'updateSchedule' | MirrorRepositoryInfoKeySpecifier)[];
export type MirrorRepositoryInfoFieldPolicy = {
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	cloned?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneInProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	corruptionLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	isCorrupted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastError?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSyncOutput?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSyncAt?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteURL?: FieldPolicy<any> | FieldReadFunction<any>,
	shard?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updateQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorKeySpecifier = ('actions' | 'createdAt' | 'createdBy' | 'description' | 'enabled' | 'id' | 'owner' | 'trigger' | MonitorKeySpecifier)[];
export type MonitorFieldPolicy = {
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	trigger?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorActionConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | MonitorActionConnectionKeySpecifier)[];
export type MonitorActionConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorActionEmailRecipientsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | MonitorActionEmailRecipientsConnectionKeySpecifier)[];
export type MonitorActionEmailRecipientsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorActionEventKeySpecifier = ('id' | 'message' | 'status' | 'timestamp' | MonitorActionEventKeySpecifier)[];
export type MonitorActionEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorActionEventConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | MonitorActionEventConnectionKeySpecifier)[];
export type MonitorActionEventConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | MonitorConnectionKeySpecifier)[];
export type MonitorConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorEmailKeySpecifier = ('enabled' | 'events' | 'header' | 'id' | 'includeResults' | 'priority' | 'recipients' | MonitorEmailKeySpecifier)[];
export type MonitorEmailFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includeResults?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitoringAlertKeySpecifier = ('average' | 'name' | 'owner' | 'serviceName' | 'timestamp' | MonitoringAlertKeySpecifier)[];
export type MonitoringAlertFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceName?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitoringStatisticsKeySpecifier = ('alerts' | MonitoringStatisticsKeySpecifier)[];
export type MonitoringStatisticsFieldPolicy = {
	alerts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorQueryKeySpecifier = ('events' | 'id' | 'query' | MonitorQueryKeySpecifier)[];
export type MonitorQueryFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorSlackWebhookKeySpecifier = ('enabled' | 'events' | 'id' | 'includeResults' | 'url' | MonitorSlackWebhookKeySpecifier)[];
export type MonitorSlackWebhookFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includeResults?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorTriggerEventKeySpecifier = ('actions' | 'id' | 'message' | 'query' | 'resultCount' | 'status' | 'timestamp' | MonitorTriggerEventKeySpecifier)[];
export type MonitorTriggerEventFieldPolicy = {
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorTriggerEventConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | MonitorTriggerEventConnectionKeySpecifier)[];
export type MonitorTriggerEventConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MonitorWebhookKeySpecifier = ('enabled' | 'events' | 'id' | 'includeResults' | 'url' | MonitorWebhookKeySpecifier)[];
export type MonitorWebhookFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includeResults?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCodeownersFile' | 'addExternalAccount' | 'addExternalService' | 'addInsightViewToDashboard' | 'addPackageRepoFilter' | 'addPhabricatorRepo' | 'addRepoKeyValuePair' | 'addRepoMetadata' | 'addTeamMembers' | 'addUserEmail' | 'addUserToOrganization' | 'applyBatchChange' | 'assignOwner' | 'assignTeam' | 'bumpDerivativeGraphKey' | 'cancelBatchSpecExecution' | 'cancelBatchSpecWorkspaceExecution' | 'cancelExternalServiceSync' | 'cancelPermissionsSyncJob' | 'cancelRepoEmbeddingJob' | 'cancelSearchJob' | 'changeCodyPlan' | 'changePromptVisibility' | 'changeSavedSearchVisibility' | 'checkMirrorRepositoryConnection' | 'closeBatchChange' | 'closeChangesets' | 'configurationMutation' | 'createAccessToken' | 'createBatchChange' | 'createBatchChangesCredential' | 'createBatchSpec' | 'createBatchSpecFromRaw' | 'createChangesetComments' | 'createChangesetSpec' | 'createChangesetSpecs' | 'createCodeIntelligenceConfigurationPolicy' | 'createCodeMonitor' | 'createEmptyBatchChange' | 'createExecutorSecret' | 'createFeatureFlag' | 'createFeatureFlagOverride' | 'createInsightsDashboard' | 'createLineChartSearchInsight' | 'createNotebook' | 'createNotebookStar' | 'createOrganization' | 'createOutboundWebhook' | 'createPassword' | 'createPieChartSearchInsight' | 'createPrompt' | 'createRole' | 'createSavedSearch' | 'createSearchContext' | 'createSearchContextStar' | 'createSearchJob' | 'createTeam' | 'createUser' | 'createWebhook' | 'deleteAccessToken' | 'deleteBatchChange' | 'deleteBatchChangesCredential' | 'deleteBatchSpec' | 'deleteCodeIntelligenceConfigurationPolicy' | 'deleteCodeMonitor' | 'deleteCodeownersFiles' | 'deleteExecutorSecret' | 'deleteExternalAccount' | 'deleteExternalService' | 'deleteFeatureFlag' | 'deleteFeatureFlagOverride' | 'deleteGitHubApp' | 'deleteInsightsDashboard' | 'deleteInsightView' | 'deleteNotebook' | 'deleteNotebookStar' | 'deleteOrganization' | 'deleteOutboundWebhook' | 'deletePackageRepoFilter' | 'deletePreciseIndex' | 'deletePreciseIndexes' | 'deletePrompt' | 'deleteRankingProgress' | 'deleteRepoKeyValuePair' | 'deleteRepoMetadata' | 'deleteRepositoryFromDisk' | 'deleteRole' | 'deleteSavedSearch' | 'deleteSearchContext' | 'deleteSearchContextStar' | 'deleteSearchJob' | 'deleteTeam' | 'deleteUser' | 'deleteUsers' | 'deleteWebhook' | 'detachChangesets' | 'dotcom' | 'editTemporarySettings' | 'enqueueBatchSpecWorkspaceExecution' | 'excludeRepoFromExternalServices' | 'executeBatchSpec' | 'invalidateSessionsByID' | 'invalidateSessionsByIDs' | 'inviteUserToOrganization' | 'logEvent' | 'logEvents' | 'logUserEvent' | 'mergeChangesets' | 'moveBatchChange' | 'moveInsightSeriesBackfillToBackOfQueue' | 'moveInsightSeriesBackfillToFrontOfQueue' | 'overwriteTemporarySettings' | 'publishChangesets' | 'queueAutoIndexJobsForRepo' | 'randomizeUserPassword' | 'recloneRepository' | 'recoverUsers' | 'reenqueueChangeset' | 'reenqueueChangesets' | 'refreshGitHubApp' | 'reindexPreciseIndex' | 'reindexPreciseIndexes' | 'reindexRepository' | 'reloadSite' | 'removeAssignedOwner' | 'removeAssignedTeam' | 'removeInsightViewFromDashboard' | 'removeTeamMembers' | 'removeUserEmail' | 'removeUserFromOrganization' | 'replaceBatchSpecInput' | 'resendVerificationEmail' | 'resetTriggerQueryTimestamps' | 'resolvePhabricatorDiff' | 'respondToOrganizationInvitation' | 'retryBatchSpecExecution' | 'retryBatchSpecWorkspaceExecution' | 'retryInsightSeriesBackfill' | 'saveInsightAsNewView' | 'scheduleRepositoriesForEmbedding' | 'scheduleRepositoryPermissionsSync' | 'scheduleUserPermissionsSync' | 'sendTestEmail' | 'setAccessRequestStatus' | 'setAutoUpgrade' | 'setDefaultSearchContext' | 'setMigrationDirection' | 'setPermissions' | 'setRepositoryPermissionsForBitbucketProject' | 'setRepositoryPermissionsForUsers' | 'setRepositoryPermissionsUnrestricted' | 'setRoles' | 'setSubRepositoryPermissionsForUsers' | 'setTeamMembers' | 'settingsMutation' | 'setTosAccepted' | 'setUserCodeCompletionsQuota' | 'setUserCompletionsQuota' | 'setUserEmailPrimary' | 'setUserEmailVerified' | 'setUserIsSiteAdmin' | 'submitHappinessFeedback' | 'submitSurvey' | 'syncChangeset' | 'syncExternalService' | 'telemetry' | 'toggleBatchSpecAutoApply' | 'toggleCodeMonitor' | 'transferPromptOwnership' | 'transferSavedSearchOwnership' | 'triggerObservabilityTestAlert' | 'triggerTestEmailAction' | 'triggerTestSlackWebhookAction' | 'triggerTestWebhookAction' | 'updateCodeIntelligenceConfigurationPolicy' | 'updateCodeIntelligenceInferenceScript' | 'updateCodeMonitor' | 'updateCodeownersFile' | 'updateExecutorSecret' | 'updateExternalService' | 'updateFeatureFlag' | 'updateFeatureFlagOverride' | 'updateInsightsDashboard' | 'updateInsightSeries' | 'updateLineChartSearchInsight' | 'updateMirrorRepository' | 'updateNotebook' | 'updateOnboardingTourContent' | 'updateOrganization' | 'updateOutboundWebhook' | 'updateOwnSignalConfigurations' | 'updatePackageRepoFilter' | 'updatePassword' | 'updatePieChartSearchInsight' | 'updatePrompt' | 'updateRepoKeyValuePair' | 'updateRepoMetadata' | 'updateRepositoryIndexConfiguration' | 'updateSavedSearch' | 'updateSearchContext' | 'updateSiteConfiguration' | 'updateTeam' | 'updateUser' | 'updateWebhook' | 'upsertBatchSpecInput' | 'upsertEmptyBatchChange' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCodeownersFile?: FieldPolicy<any> | FieldReadFunction<any>,
	addExternalAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	addExternalService?: FieldPolicy<any> | FieldReadFunction<any>,
	addInsightViewToDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	addPackageRepoFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	addPhabricatorRepo?: FieldPolicy<any> | FieldReadFunction<any>,
	addRepoKeyValuePair?: FieldPolicy<any> | FieldReadFunction<any>,
	addRepoMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	addTeamMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	addUserEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	addUserToOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	applyBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	assignOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	assignTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	bumpDerivativeGraphKey?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelBatchSpecExecution?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelBatchSpecWorkspaceExecution?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelExternalServiceSync?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelPermissionsSyncJob?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRepoEmbeddingJob?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelSearchJob?: FieldPolicy<any> | FieldReadFunction<any>,
	changeCodyPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	changePromptVisibility?: FieldPolicy<any> | FieldReadFunction<any>,
	changeSavedSearchVisibility?: FieldPolicy<any> | FieldReadFunction<any>,
	checkMirrorRepositoryConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	closeBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	closeChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationMutation?: FieldPolicy<any> | FieldReadFunction<any>,
	createAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	createBatchChangesCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	createBatchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	createBatchSpecFromRaw?: FieldPolicy<any> | FieldReadFunction<any>,
	createChangesetComments?: FieldPolicy<any> | FieldReadFunction<any>,
	createChangesetSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	createChangesetSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	createCodeIntelligenceConfigurationPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	createCodeMonitor?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmptyBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	createExecutorSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	createFeatureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	createFeatureFlagOverride?: FieldPolicy<any> | FieldReadFunction<any>,
	createInsightsDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	createLineChartSearchInsight?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotebook?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotebookStar?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	createOutboundWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	createPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createPieChartSearchInsight?: FieldPolicy<any> | FieldReadFunction<any>,
	createPrompt?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createSavedSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	createSearchContext?: FieldPolicy<any> | FieldReadFunction<any>,
	createSearchContextStar?: FieldPolicy<any> | FieldReadFunction<any>,
	createSearchJob?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBatchChangesCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBatchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCodeIntelligenceConfigurationPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCodeMonitor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCodeownersFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteExecutorSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteExternalAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteExternalService?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFeatureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFeatureFlagOverride?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGitHubApp?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteInsightsDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteInsightView?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotebook?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotebookStar?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOutboundWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePackageRepoFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePreciseIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePreciseIndexes?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePrompt?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRankingProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRepoKeyValuePair?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRepoMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRepositoryFromDisk?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSavedSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSearchContext?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSearchContextStar?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSearchJob?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	detachChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	dotcom?: FieldPolicy<any> | FieldReadFunction<any>,
	editTemporarySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueueBatchSpecWorkspaceExecution?: FieldPolicy<any> | FieldReadFunction<any>,
	excludeRepoFromExternalServices?: FieldPolicy<any> | FieldReadFunction<any>,
	executeBatchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	invalidateSessionsByID?: FieldPolicy<any> | FieldReadFunction<any>,
	invalidateSessionsByIDs?: FieldPolicy<any> | FieldReadFunction<any>,
	inviteUserToOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	logEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	logEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	logUserEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	moveBatchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	moveInsightSeriesBackfillToBackOfQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	moveInsightSeriesBackfillToFrontOfQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	overwriteTemporarySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	publishChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	queueAutoIndexJobsForRepo?: FieldPolicy<any> | FieldReadFunction<any>,
	randomizeUserPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	recloneRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	recoverUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	reenqueueChangeset?: FieldPolicy<any> | FieldReadFunction<any>,
	reenqueueChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshGitHubApp?: FieldPolicy<any> | FieldReadFunction<any>,
	reindexPreciseIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	reindexPreciseIndexes?: FieldPolicy<any> | FieldReadFunction<any>,
	reindexRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	reloadSite?: FieldPolicy<any> | FieldReadFunction<any>,
	removeAssignedOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	removeAssignedTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	removeInsightViewFromDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	removeTeamMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	removeUserEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	removeUserFromOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	replaceBatchSpecInput?: FieldPolicy<any> | FieldReadFunction<any>,
	resendVerificationEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	resetTriggerQueryTimestamps?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvePhabricatorDiff?: FieldPolicy<any> | FieldReadFunction<any>,
	respondToOrganizationInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	retryBatchSpecExecution?: FieldPolicy<any> | FieldReadFunction<any>,
	retryBatchSpecWorkspaceExecution?: FieldPolicy<any> | FieldReadFunction<any>,
	retryInsightSeriesBackfill?: FieldPolicy<any> | FieldReadFunction<any>,
	saveInsightAsNewView?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleRepositoriesForEmbedding?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleRepositoryPermissionsSync?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUserPermissionsSync?: FieldPolicy<any> | FieldReadFunction<any>,
	sendTestEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	setAccessRequestStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	setAutoUpgrade?: FieldPolicy<any> | FieldReadFunction<any>,
	setDefaultSearchContext?: FieldPolicy<any> | FieldReadFunction<any>,
	setMigrationDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	setPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	setRepositoryPermissionsForBitbucketProject?: FieldPolicy<any> | FieldReadFunction<any>,
	setRepositoryPermissionsForUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	setRepositoryPermissionsUnrestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	setRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	setSubRepositoryPermissionsForUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	setTeamMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsMutation?: FieldPolicy<any> | FieldReadFunction<any>,
	setTosAccepted?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserCodeCompletionsQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserCompletionsQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserEmailPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserEmailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserIsSiteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	submitHappinessFeedback?: FieldPolicy<any> | FieldReadFunction<any>,
	submitSurvey?: FieldPolicy<any> | FieldReadFunction<any>,
	syncChangeset?: FieldPolicy<any> | FieldReadFunction<any>,
	syncExternalService?: FieldPolicy<any> | FieldReadFunction<any>,
	telemetry?: FieldPolicy<any> | FieldReadFunction<any>,
	toggleBatchSpecAutoApply?: FieldPolicy<any> | FieldReadFunction<any>,
	toggleCodeMonitor?: FieldPolicy<any> | FieldReadFunction<any>,
	transferPromptOwnership?: FieldPolicy<any> | FieldReadFunction<any>,
	transferSavedSearchOwnership?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerObservabilityTestAlert?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerTestEmailAction?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerTestSlackWebhookAction?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerTestWebhookAction?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeIntelligenceConfigurationPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeIntelligenceInferenceScript?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeMonitor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeownersFile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateExecutorSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	updateExternalService?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFeatureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFeatureFlagOverride?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInsightsDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInsightSeries?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLineChartSearchInsight?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMirrorRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNotebook?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOnboardingTourContent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOutboundWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOwnSignalConfigurations?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePackageRepoFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePieChartSearchInsight?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePrompt?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRepoKeyValuePair?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRepoMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRepositoryIndexConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSavedSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSearchContext?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSiteConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertBatchSpecInput?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertEmptyBatchChange?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NamespaceKeySpecifier = ('id' | 'namespaceName' | 'url' | NamespaceKeySpecifier)[];
export type NamespaceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	namespaceName?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NamespaceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | NamespaceConnectionKeySpecifier)[];
export type NamespaceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewRepositoryConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | NewRepositoryConnectionKeySpecifier)[];
export type NewRepositoryConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewUsersConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | NewUsersConnectionKeySpecifier)[];
export type NewUsersConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NonExhaustiveSearchAggregationResultKeySpecifier = ('approximateOtherGroupCount' | 'groups' | 'mode' | 'otherResultCount' | 'supportsPersistence' | NonExhaustiveSearchAggregationResultKeySpecifier)[];
export type NonExhaustiveSearchAggregationResultFieldPolicy = {
	approximateOtherGroupCount?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	otherResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	supportsPersistence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoRepositoriesDetectedKeySpecifier = ('message' | NoRepositoriesDetectedKeySpecifier)[];
export type NoRepositoriesDetectedFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotebookKeySpecifier = ('blocks' | 'createdAt' | 'creator' | 'id' | 'namespace' | 'patternType' | 'public' | 'stars' | 'title' | 'updatedAt' | 'updater' | 'viewerCanManage' | 'viewerHasStarred' | NotebookKeySpecifier)[];
export type NotebookFieldPolicy = {
	blocks?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	patternType?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	stars?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updater?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanManage?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotebookConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | NotebookConnectionKeySpecifier)[];
export type NotebookConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotebookStarKeySpecifier = ('createdAt' | 'user' | NotebookStarKeySpecifier)[];
export type NotebookStarFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotebookStarConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | NotebookStarConnectionKeySpecifier)[];
export type NotebookStarConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnboardingTourKeySpecifier = ('current' | OnboardingTourKeySpecifier)[];
export type OnboardingTourFieldPolicy = {
	current?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnboardingTourContentKeySpecifier = ('id' | 'value' | OnboardingTourContentKeySpecifier)[];
export type OnboardingTourContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgKeySpecifier = ('batchChanges' | 'configurationCascade' | 'createdAt' | 'displayName' | 'executorSecrets' | 'id' | 'latestSettings' | 'members' | 'name' | 'namespaceName' | 'settingsCascade' | 'settingsURL' | 'url' | 'viewerCanAdminister' | 'viewerIsMember' | 'viewerPendingInvitation' | OrgKeySpecifier)[];
export type OrgFieldPolicy = {
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	executorSecrets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	namespaceName?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsURL?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsMember?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPendingInvitation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationInvitationKeySpecifier = ('createdAt' | 'expiresAt' | 'id' | 'isVerifiedEmail' | 'notifiedAt' | 'organization' | 'recipient' | 'recipientEmail' | 'respondedAt' | 'respondURL' | 'responseType' | 'revokedAt' | 'sender' | OrganizationInvitationKeySpecifier)[];
export type OrganizationInvitationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerifiedEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	notifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	recipientEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	respondedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	respondURL?: FieldPolicy<any> | FieldReadFunction<any>,
	responseType?: FieldPolicy<any> | FieldReadFunction<any>,
	revokedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMembershipKeySpecifier = ('createdAt' | 'organization' | 'updatedAt' | 'user' | OrganizationMembershipKeySpecifier)[];
export type OrganizationMembershipFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMembershipConnectionKeySpecifier = ('nodes' | 'totalCount' | OrganizationMembershipConnectionKeySpecifier)[];
export type OrganizationMembershipConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgConnectionKeySpecifier = ('nodes' | 'totalCount' | OrgConnectionKeySpecifier)[];
export type OrgConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundRequestKeySpecifier = ('callStack' | 'creationStackFrame' | 'durationMs' | 'errorMessage' | 'id' | 'method' | 'requestBody' | 'requestHeaders' | 'responseHeaders' | 'startedAt' | 'statusCode' | 'url' | OutboundRequestKeySpecifier)[];
export type OutboundRequestFieldPolicy = {
	callStack?: FieldPolicy<any> | FieldReadFunction<any>,
	creationStackFrame?: FieldPolicy<any> | FieldReadFunction<any>,
	durationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	requestBody?: FieldPolicy<any> | FieldReadFunction<any>,
	requestHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	responseHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundRequestConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | OutboundRequestConnectionKeySpecifier)[];
export type OutboundRequestConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookKeySpecifier = ('eventTypes' | 'id' | 'logs' | 'stats' | 'url' | OutboundWebhookKeySpecifier)[];
export type OutboundWebhookFieldPolicy = {
	eventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | OutboundWebhookConnectionKeySpecifier)[];
export type OutboundWebhookConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookEventTypeKeySpecifier = ('description' | 'key' | OutboundWebhookEventTypeKeySpecifier)[];
export type OutboundWebhookEventTypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookJobKeySpecifier = ('eventType' | 'id' | 'payload' | 'scope' | OutboundWebhookJobKeySpecifier)[];
export type OutboundWebhookJobFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookLogKeySpecifier = ('error' | 'id' | 'job' | 'request' | 'response' | 'sentAt' | 'statusCode' | OutboundWebhookLogKeySpecifier)[];
export type OutboundWebhookLogFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	job?: FieldPolicy<any> | FieldReadFunction<any>,
	request?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>,
	sentAt?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookLogConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | OutboundWebhookLogConnectionKeySpecifier)[];
export type OutboundWebhookLogConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookLogStatsKeySpecifier = ('errored' | 'total' | OutboundWebhookLogStatsKeySpecifier)[];
export type OutboundWebhookLogStatsFieldPolicy = {
	errored?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutboundWebhookScopedEventTypeKeySpecifier = ('eventType' | 'scope' | OutboundWebhookScopedEventTypeKeySpecifier)[];
export type OutboundWebhookScopedEventTypeFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutOfBandMigrationKeySpecifier = ('applyReverse' | 'component' | 'created' | 'deprecated' | 'description' | 'errors' | 'id' | 'introduced' | 'lastUpdated' | 'nonDestructive' | 'progress' | 'team' | OutOfBandMigrationKeySpecifier)[];
export type OutOfBandMigrationFieldPolicy = {
	applyReverse?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	introduced?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nonDestructive?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OutOfBandMigrationErrorKeySpecifier = ('created' | 'message' | OutOfBandMigrationErrorKeySpecifier)[];
export type OutOfBandMigrationErrorFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnableKeySpecifier = ('ownership' | OwnableKeySpecifier)[];
export type OwnableFieldPolicy = {
	ownership?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnershipKeySpecifier = ('owner' | 'reasons' | OwnershipKeySpecifier)[];
export type OwnershipFieldPolicy = {
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	reasons?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnershipConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | 'totalOwners' | OwnershipConnectionKeySpecifier)[];
export type OwnershipConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalOwners?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnershipStatsKeySpecifier = ('totalAssignedOwnershipFiles' | 'totalCodeownedFiles' | 'totalFiles' | 'totalOwnedFiles' | 'updatedAt' | OwnershipStatsKeySpecifier)[];
export type OwnershipStatsFieldPolicy = {
	totalAssignedOwnershipFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCodeownedFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalOwnedFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnSignalConfigurationKeySpecifier = ('description' | 'excludedRepoPatterns' | 'isEnabled' | 'name' | OwnSignalConfigurationKeySpecifier)[];
export type OwnSignalConfigurationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	excludedRepoPatterns?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageFilterKeySpecifier = ('behaviour' | 'id' | 'kind' | 'nameFilter' | 'versionFilter' | PackageFilterKeySpecifier)[];
export type PackageFilterFieldPolicy = {
	behaviour?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	nameFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	versionFilter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageNameFilterKeySpecifier = ('packageGlob' | PackageNameFilterKeySpecifier)[];
export type PackageNameFilterFieldPolicy = {
	packageGlob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageRepoReferenceKeySpecifier = ('blocked' | 'id' | 'kind' | 'name' | 'repository' | 'versions' | PackageRepoReferenceKeySpecifier)[];
export type PackageRepoReferenceFieldPolicy = {
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageRepoReferenceConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PackageRepoReferenceConnectionKeySpecifier)[];
export type PackageRepoReferenceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageRepoReferenceVersionKeySpecifier = ('id' | 'packageRepoReferenceID' | 'version' | PackageRepoReferenceVersionKeySpecifier)[];
export type PackageRepoReferenceVersionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	packageRepoReferenceID?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageRepoReferenceVersionConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PackageRepoReferenceVersionConnectionKeySpecifier)[];
export type PackageRepoReferenceVersionConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageVersionFilterKeySpecifier = ('packageName' | 'versionGlob' | PackageVersionFilterKeySpecifier)[];
export type PackageVersionFilterFieldPolicy = {
	packageName?: FieldPolicy<any> | FieldReadFunction<any>,
	versionGlob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParentSourcegraphDetailsKeySpecifier = ('url' | ParentSourcegraphDetailsKeySpecifier)[];
export type ParentSourcegraphDetailsFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PerforceChangelistKeySpecifier = ('canonicalURL' | 'cid' | 'commit' | PerforceChangelistKeySpecifier)[];
export type PerforceChangelistFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionKeySpecifier = ('action' | 'createdAt' | 'displayName' | 'id' | 'namespace' | PermissionKeySpecifier)[];
export type PermissionFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PermissionConnectionKeySpecifier)[];
export type PermissionConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsInfoKeySpecifier = ('permissions' | 'repositories' | 'source' | 'syncedAt' | 'unrestricted' | 'updatedAt' | 'users' | PermissionsInfoKeySpecifier)[];
export type PermissionsInfoFieldPolicy = {
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	syncedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	unrestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsInfoRepositoriesConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PermissionsInfoRepositoriesConnectionKeySpecifier)[];
export type PermissionsInfoRepositoriesConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsInfoRepositoryNodeKeySpecifier = ('id' | 'reason' | 'repository' | 'updatedAt' | PermissionsInfoRepositoryNodeKeySpecifier)[];
export type PermissionsInfoRepositoryNodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsInfoUserNodeKeySpecifier = ('id' | 'reason' | 'updatedAt' | 'user' | PermissionsInfoUserNodeKeySpecifier)[];
export type PermissionsInfoUserNodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsInfoUsersConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PermissionsInfoUsersConnectionKeySpecifier)[];
export type PermissionsInfoUsersConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsSyncingStatsKeySpecifier = ('queueSize' | 'reposWithLatestJobFailing' | 'reposWithNoPermissions' | 'reposWithStalePermissions' | 'usersWithLatestJobFailing' | 'usersWithNoPermissions' | 'usersWithStalePermissions' | PermissionsSyncingStatsKeySpecifier)[];
export type PermissionsSyncingStatsFieldPolicy = {
	queueSize?: FieldPolicy<any> | FieldReadFunction<any>,
	reposWithLatestJobFailing?: FieldPolicy<any> | FieldReadFunction<any>,
	reposWithNoPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	reposWithStalePermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	usersWithLatestJobFailing?: FieldPolicy<any> | FieldReadFunction<any>,
	usersWithNoPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	usersWithStalePermissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsSyncJobKeySpecifier = ('cancel' | 'cancellationReason' | 'codeHostStates' | 'failureMessage' | 'finishedAt' | 'id' | 'invalidateCaches' | 'lastHeartbeatAt' | 'noPerms' | 'numFailures' | 'numResets' | 'partialSuccess' | 'permissionsAdded' | 'permissionsFound' | 'permissionsRemoved' | 'placeInQueue' | 'priority' | 'processAfter' | 'queuedAt' | 'ranForMs' | 'reason' | 'startedAt' | 'state' | 'subject' | 'triggeredByUser' | 'workerHostname' | PermissionsSyncJobKeySpecifier)[];
export type PermissionsSyncJobFieldPolicy = {
	cancel?: FieldPolicy<any> | FieldReadFunction<any>,
	cancellationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	codeHostStates?: FieldPolicy<any> | FieldReadFunction<any>,
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invalidateCaches?: FieldPolicy<any> | FieldReadFunction<any>,
	lastHeartbeatAt?: FieldPolicy<any> | FieldReadFunction<any>,
	noPerms?: FieldPolicy<any> | FieldReadFunction<any>,
	numFailures?: FieldPolicy<any> | FieldReadFunction<any>,
	numResets?: FieldPolicy<any> | FieldReadFunction<any>,
	partialSuccess?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsFound?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsRemoved?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	processAfter?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ranForMs?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	triggeredByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	workerHostname?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsSyncJobReasonWithGroupKeySpecifier = ('group' | 'reason' | PermissionsSyncJobReasonWithGroupKeySpecifier)[];
export type PermissionsSyncJobReasonWithGroupFieldPolicy = {
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsSyncJobsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PermissionsSyncJobsConnectionKeySpecifier)[];
export type PermissionsSyncJobsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonKeySpecifier = ('avatarURL' | 'displayName' | 'email' | 'name' | 'user' | PersonKeySpecifier)[];
export type PersonFieldPolicy = {
	avatarURL?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhabricatorRepoKeySpecifier = ('callsign' | 'name' | 'uri' | 'url' | PhabricatorRepoKeySpecifier)[];
export type PhabricatorRepoFieldPolicy = {
	callsign?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PieChartInsightViewPresentationKeySpecifier = ('otherThreshold' | 'title' | PieChartInsightViewPresentationKeySpecifier)[];
export type PieChartInsightViewPresentationFieldPolicy = {
	otherThreshold?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionKeySpecifier = ('character' | 'line' | PositionKeySpecifier)[];
export type PositionFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreciseIndexKeySpecifier = ('auditLogs' | 'failure' | 'id' | 'indexer' | 'indexingFinishedAt' | 'indexingStartedAt' | 'inputCommit' | 'inputIndexer' | 'inputRoot' | 'isLatestForRepo' | 'placeInQueue' | 'processingFinishedAt' | 'processingStartedAt' | 'projectRoot' | 'queuedAt' | 'retentionPolicyOverview' | 'shouldReindex' | 'state' | 'steps' | 'tags' | 'uploadedAt' | PreciseIndexKeySpecifier)[];
export type PreciseIndexFieldPolicy = {
	auditLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	failure?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indexer?: FieldPolicy<any> | FieldReadFunction<any>,
	indexingFinishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	indexingStartedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	inputCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	inputIndexer?: FieldPolicy<any> | FieldReadFunction<any>,
	inputRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	isLatestForRepo?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	processingFinishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	processingStartedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	projectRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	retentionPolicyOverview?: FieldPolicy<any> | FieldReadFunction<any>,
	shouldReindex?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	steps?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreciseIndexConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PreciseIndexConnectionKeySpecifier)[];
export type PreciseIndexConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreIndexStepKeySpecifier = ('commands' | 'image' | 'logEntry' | 'root' | PreIndexStepKeySpecifier)[];
export type PreIndexStepFieldPolicy = {
	commands?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	logEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreviewRepositoryComparisonKeySpecifier = ('baseRepository' | 'fileDiffs' | PreviewRepositoryComparisonKeySpecifier)[];
export type PreviewRepositoryComparisonFieldPolicy = {
	baseRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	fileDiffs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLicenseKeySpecifier = ('createdAt' | 'id' | 'info' | 'licenseKey' | 'revokedAt' | 'revokeReason' | 'siteID' | 'subscription' | 'version' | ProductLicenseKeySpecifier)[];
export type ProductLicenseFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	licenseKey?: FieldPolicy<any> | FieldReadFunction<any>,
	revokedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeReason?: FieldPolicy<any> | FieldReadFunction<any>,
	siteID?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLicenseConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ProductLicenseConnectionKeySpecifier)[];
export type ProductLicenseConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLicenseInfoKeySpecifier = ('expiresAt' | 'hashedKey' | 'isFreePlan' | 'isValid' | 'licenseInvalidityReason' | 'productNameWithBrand' | 'salesforceOpportunityID' | 'salesforceSubscriptionID' | 'tags' | 'userCount' | ProductLicenseInfoKeySpecifier)[];
export type ProductLicenseInfoFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hashedKey?: FieldPolicy<any> | FieldReadFunction<any>,
	isFreePlan?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	licenseInvalidityReason?: FieldPolicy<any> | FieldReadFunction<any>,
	productNameWithBrand?: FieldPolicy<any> | FieldReadFunction<any>,
	salesforceOpportunityID?: FieldPolicy<any> | FieldReadFunction<any>,
	salesforceSubscriptionID?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	userCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductSubscriptionKeySpecifier = ('account' | 'activeLicense' | 'codyGatewayAccess' | 'createdAt' | 'currentSourcegraphAccessToken' | 'id' | 'isArchived' | 'name' | 'productLicenses' | 'sourcegraphAccessTokens' | 'url' | 'urlForSiteAdmin' | 'uuid' | ProductSubscriptionKeySpecifier)[];
export type ProductSubscriptionFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	activeLicense?: FieldPolicy<any> | FieldReadFunction<any>,
	codyGatewayAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSourcegraphAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	productLicenses?: FieldPolicy<any> | FieldReadFunction<any>,
	sourcegraphAccessTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	urlForSiteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductSubscriptionConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | ProductSubscriptionConnectionKeySpecifier)[];
export type ProductSubscriptionConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductSubscriptionStatusKeySpecifier = ('actualUserCount' | 'actualUserCountDate' | 'license' | 'maximumAllowedUserCount' | 'noLicenseWarningUserCount' | 'productNameWithBrand' | ProductSubscriptionStatusKeySpecifier)[];
export type ProductSubscriptionStatusFieldPolicy = {
	actualUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	actualUserCountDate?: FieldPolicy<any> | FieldReadFunction<any>,
	license?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumAllowedUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	noLicenseWarningUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	productNameWithBrand?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromptKeySpecifier = ('createdAt' | 'createdBy' | 'definition' | 'description' | 'draft' | 'id' | 'name' | 'nameWithOwner' | 'owner' | 'updatedAt' | 'updatedBy' | 'url' | 'viewerCanAdminister' | 'visibility' | PromptKeySpecifier)[];
export type PromptFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	definition?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nameWithOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromptDefinitionKeySpecifier = ('text' | PromptDefinitionKeySpecifier)[];
export type PromptDefinitionFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromptsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | PromptsConnectionKeySpecifier)[];
export type PromptsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicExternalAccountDataKeySpecifier = ('displayName' | 'login' | 'url' | PublicExternalAccountDataKeySpecifier)[];
export type PublicExternalAccountDataFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('accessRequests' | 'areExecutorsConfigured' | 'authorizedUserRepositories' | 'availableBulkOperations' | 'backgroundJobs' | 'batchChange' | 'batchChanges' | 'batchChangesCodeHosts' | 'batchSpecs' | 'bitbucketProjectPermissionJobs' | 'chatContext' | 'chatIntent' | 'checkBatchChangesCredential' | 'clientConfiguration' | 'codeHosts' | 'codeHostSyncDue' | 'codeIntelligenceConfigurationPolicies' | 'codeIntelligenceInferenceScript' | 'codeIntelSummary' | 'codeownersIngestedFiles' | 'completions' | 'compute' | 'currentUser' | 'defaultSearchContext' | 'dotcom' | 'embeddingsMultiSearch' | 'embeddingsSearch' | 'enterpriseLicenseHasFeature' | 'evaluatedFeatureFlags' | 'evaluateFeatureFlag' | 'executors' | 'executorSecrets' | 'externalServiceNamespaces' | 'externalServiceRepositories' | 'externalServices' | 'featureFlag' | 'featureFlags' | 'getChangesetsByIDs' | 'getCodyContext' | 'getCodyContextAlternatives' | 'gitHubApp' | 'gitHubAppByAppID' | 'gitHubApps' | 'gitservers' | 'globalChangesetsStats' | 'highlightCode' | 'indexedSearchInstances' | 'indexerKeys' | 'inferAutoIndexJobsForRepo' | 'insightAdminBackfillQueue' | 'insightsDashboards' | 'insightSeriesQueryStatus' | 'insightViewDebug' | 'insightViews' | 'instanceOwnershipStats' | 'invitationByToken' | 'isContextRequiredForChatQuery' | 'isSearchContextAvailable' | 'maxUnlicensedChangesets' | 'monitors' | 'namespace' | 'namespaceByName' | 'node' | 'notebooks' | 'onboardingTourContent' | 'organization' | 'organizationFeatureFlagOverrides' | 'organizationFeatureFlagValue' | 'organizations' | 'outboundRequests' | 'outboundWebhookEventTypes' | 'outboundWebhooks' | 'outOfBandMigrations' | 'ownSignalConfigurations' | 'packageRepoFilters' | 'packageRepoReferences' | 'packageRepoReferencesMatchingFilter' | 'parseSearchQuery' | 'permissions' | 'permissionsSyncingStats' | 'permissionsSyncJobs' | 'phabricatorRepo' | 'preciseIndexes' | 'previewRepositoriesFromQuery' | 'previewRepositoryFilter' | 'prompts' | 'rankContext' | 'rankingSummary' | 'recordContext' | 'renderMarkdown' | 'repoEmbeddingJobs' | 'repoMeta' | 'repositories' | 'repository' | 'repositoryRedirect' | 'repositoryStats' | 'resolveWorkspacesForBatchSpec' | 'roles' | 'root' | 'savedSearches' | 'search' | 'searchContextBySpec' | 'searchContexts' | 'searchInsightLivePreview' | 'searchInsightPreview' | 'searchJobs' | 'searchQueryAggregate' | 'settingsSubject' | 'site' | 'slowRequests' | 'snippetAttribution' | 'statusMessages' | 'surveyResponses' | 'team' | 'teams' | 'telemetry' | 'temporarySettings' | 'urlMentionContext' | 'usagesForSymbol' | 'user' | 'users' | 'usersWithPendingPermissions' | 'validateScopedInsightQuery' | 'validateSearchJob' | 'viewer' | 'viewerCanChangeLibraryItemVisibilityToPublic' | 'viewerConfiguration' | 'viewerSettings' | 'webhookLogs' | 'webhooks' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	accessRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	areExecutorsConfigured?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizedUserRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	availableBulkOperations?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChange?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChangesCodeHosts?: FieldPolicy<any> | FieldReadFunction<any>,
	batchSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	bitbucketProjectPermissionJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	chatContext?: FieldPolicy<any> | FieldReadFunction<any>,
	chatIntent?: FieldPolicy<any> | FieldReadFunction<any>,
	checkBatchChangesCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	clientConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	codeHosts?: FieldPolicy<any> | FieldReadFunction<any>,
	codeHostSyncDue?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelligenceConfigurationPolicies?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelligenceInferenceScript?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelSummary?: FieldPolicy<any> | FieldReadFunction<any>,
	codeownersIngestedFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	completions?: FieldPolicy<any> | FieldReadFunction<any>,
	compute?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultSearchContext?: FieldPolicy<any> | FieldReadFunction<any>,
	dotcom?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddingsMultiSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddingsSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseLicenseHasFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	evaluatedFeatureFlags?: FieldPolicy<any> | FieldReadFunction<any>,
	evaluateFeatureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	executors?: FieldPolicy<any> | FieldReadFunction<any>,
	executorSecrets?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceNamespaces?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServiceRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServices?: FieldPolicy<any> | FieldReadFunction<any>,
	featureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	featureFlags?: FieldPolicy<any> | FieldReadFunction<any>,
	getChangesetsByIDs?: FieldPolicy<any> | FieldReadFunction<any>,
	getCodyContext?: FieldPolicy<any> | FieldReadFunction<any>,
	getCodyContextAlternatives?: FieldPolicy<any> | FieldReadFunction<any>,
	gitHubApp?: FieldPolicy<any> | FieldReadFunction<any>,
	gitHubAppByAppID?: FieldPolicy<any> | FieldReadFunction<any>,
	gitHubApps?: FieldPolicy<any> | FieldReadFunction<any>,
	gitservers?: FieldPolicy<any> | FieldReadFunction<any>,
	globalChangesetsStats?: FieldPolicy<any> | FieldReadFunction<any>,
	highlightCode?: FieldPolicy<any> | FieldReadFunction<any>,
	indexedSearchInstances?: FieldPolicy<any> | FieldReadFunction<any>,
	indexerKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	inferAutoIndexJobsForRepo?: FieldPolicy<any> | FieldReadFunction<any>,
	insightAdminBackfillQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	insightsDashboards?: FieldPolicy<any> | FieldReadFunction<any>,
	insightSeriesQueryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	insightViewDebug?: FieldPolicy<any> | FieldReadFunction<any>,
	insightViews?: FieldPolicy<any> | FieldReadFunction<any>,
	instanceOwnershipStats?: FieldPolicy<any> | FieldReadFunction<any>,
	invitationByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	isContextRequiredForChatQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	isSearchContextAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	maxUnlicensedChangesets?: FieldPolicy<any> | FieldReadFunction<any>,
	monitors?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	namespaceByName?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	notebooks?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingTourContent?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationFeatureFlagOverrides?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationFeatureFlagValue?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	outboundRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	outboundWebhookEventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	outboundWebhooks?: FieldPolicy<any> | FieldReadFunction<any>,
	outOfBandMigrations?: FieldPolicy<any> | FieldReadFunction<any>,
	ownSignalConfigurations?: FieldPolicy<any> | FieldReadFunction<any>,
	packageRepoFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	packageRepoReferences?: FieldPolicy<any> | FieldReadFunction<any>,
	packageRepoReferencesMatchingFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	parseSearchQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsSyncingStats?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsSyncJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	phabricatorRepo?: FieldPolicy<any> | FieldReadFunction<any>,
	preciseIndexes?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRepositoriesFromQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRepositoryFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	prompts?: FieldPolicy<any> | FieldReadFunction<any>,
	rankContext?: FieldPolicy<any> | FieldReadFunction<any>,
	rankingSummary?: FieldPolicy<any> | FieldReadFunction<any>,
	recordContext?: FieldPolicy<any> | FieldReadFunction<any>,
	renderMarkdown?: FieldPolicy<any> | FieldReadFunction<any>,
	repoEmbeddingJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	repoMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryRedirect?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryStats?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveWorkspacesForBatchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>,
	savedSearches?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	searchContextBySpec?: FieldPolicy<any> | FieldReadFunction<any>,
	searchContexts?: FieldPolicy<any> | FieldReadFunction<any>,
	searchInsightLivePreview?: FieldPolicy<any> | FieldReadFunction<any>,
	searchInsightPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	searchJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	searchQueryAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>,
	slowRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	snippetAttribution?: FieldPolicy<any> | FieldReadFunction<any>,
	statusMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	telemetry?: FieldPolicy<any> | FieldReadFunction<any>,
	temporarySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	urlMentionContext?: FieldPolicy<any> | FieldReadFunction<any>,
	usagesForSymbol?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersWithPendingPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	validateScopedInsightQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	validateSearchJob?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanChangeLibraryItemVisibilityToPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryBlockKeySpecifier = ('id' | 'queryInput' | QueryBlockKeySpecifier)[];
export type QueryBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	queryInput?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RandomizeUserPasswordResultKeySpecifier = ('emailSent' | 'resetPasswordURL' | RandomizeUserPasswordResultKeySpecifier)[];
export type RandomizeUserPasswordResultFieldPolicy = {
	emailSent?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordURL?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RangeKeySpecifier = ('end' | 'start' | RangeKeySpecifier)[];
export type RangeFieldPolicy = {
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RankedItemKeySpecifier = ('index' | 'score' | RankedItemKeySpecifier)[];
export type RankedItemFieldPolicy = {
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RankingResponseKeySpecifier = ('ignored' | 'ranker' | 'used' | RankingResponseKeySpecifier)[];
export type RankingResponseFieldPolicy = {
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	ranker?: FieldPolicy<any> | FieldReadFunction<any>,
	used?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RankingSummaryKeySpecifier = ('graphKey' | 'pathMapperProgress' | 'reducerProgress' | 'referenceMapperProgress' | 'visibleToZoekt' | RankingSummaryKeySpecifier)[];
export type RankingSummaryFieldPolicy = {
	graphKey?: FieldPolicy<any> | FieldReadFunction<any>,
	pathMapperProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	reducerProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceMapperProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleToZoekt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RankingSummaryProgressKeySpecifier = ('completedAt' | 'processed' | 'startedAt' | 'total' | RankingSummaryProgressKeySpecifier)[];
export type RankingSummaryProgressFieldPolicy = {
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	processed?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateLimiterStateKeySpecifier = ('burst' | 'currentCapacity' | 'infinite' | 'interval' | 'lastReplenishment' | 'limit' | RateLimiterStateKeySpecifier)[];
export type RateLimiterStateFieldPolicy = {
	burst?: FieldPolicy<any> | FieldReadFunction<any>,
	currentCapacity?: FieldPolicy<any> | FieldReadFunction<any>,
	infinite?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>,
	lastReplenishment?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentContributorOwnershipSignalKeySpecifier = ('description' | 'title' | RecentContributorOwnershipSignalKeySpecifier)[];
export type RecentContributorOwnershipSignalFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentViewOwnershipSignalKeySpecifier = ('description' | 'title' | RecentViewOwnershipSignalKeySpecifier)[];
export type RecentViewOwnershipSignalFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecordedCommandKeySpecifier = ('command' | 'dir' | 'duration' | 'isSuccess' | 'output' | 'path' | 'start' | RecordedCommandKeySpecifier)[];
export type RecordedCommandFieldPolicy = {
	command?: FieldPolicy<any> | FieldReadFunction<any>,
	dir?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	isSuccess?: FieldPolicy<any> | FieldReadFunction<any>,
	output?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecordedCommandConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RecordedCommandConnectionKeySpecifier)[];
export type RecordedCommandConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RedirectKeySpecifier = ('url' | RedirectKeySpecifier)[];
export type RedirectFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoChangesetsStatsKeySpecifier = ('closed' | 'draft' | 'merged' | 'open' | 'total' | 'unpublished' | RepoChangesetsStatsKeySpecifier)[];
export type RepoChangesetsStatsFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoCorruptionLogKeySpecifier = ('reason' | 'timestamp' | RepoCorruptionLogKeySpecifier)[];
export type RepoCorruptionLogFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoEmbeddingJobKeySpecifier = ('cancel' | 'failureMessage' | 'finishedAt' | 'id' | 'lastHeartbeatAt' | 'numFailures' | 'numResets' | 'processAfter' | 'queuedAt' | 'repo' | 'revision' | 'startedAt' | 'state' | 'stats' | 'workerHostname' | RepoEmbeddingJobKeySpecifier)[];
export type RepoEmbeddingJobFieldPolicy = {
	cancel?: FieldPolicy<any> | FieldReadFunction<any>,
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastHeartbeatAt?: FieldPolicy<any> | FieldReadFunction<any>,
	numFailures?: FieldPolicy<any> | FieldReadFunction<any>,
	numResets?: FieldPolicy<any> | FieldReadFunction<any>,
	processAfter?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	repo?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	workerHostname?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoEmbeddingJobsConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RepoEmbeddingJobsConnectionKeySpecifier)[];
export type RepoEmbeddingJobsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoEmbeddingsStatsKeySpecifier = ('filesEmbedded' | 'filesScheduled' | 'filesSkipped' | RepoEmbeddingsStatsKeySpecifier)[];
export type RepoEmbeddingsStatsFieldPolicy = {
	filesEmbedded?: FieldPolicy<any> | FieldReadFunction<any>,
	filesScheduled?: FieldPolicy<any> | FieldReadFunction<any>,
	filesSkipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoMetadataKeySpecifier = ('key' | 'keys' | RepoMetadataKeySpecifier)[];
export type RepoMetadataFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	keys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoMetadataKeyOrValueConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RepoMetadataKeyOrValueConnectionKeySpecifier)[];
export type RepoMetadataKeyOrValueConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoMetadataKeyResultKeySpecifier = ('values' | RepoMetadataKeyResultKeySpecifier)[];
export type RepoMetadataKeyResultFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryKeySpecifier = ('authorizedUsers' | 'batchChanges' | 'batchChangesDiffStat' | 'branches' | 'changelist' | 'changesetsStats' | 'cloneInProgress' | 'codeIntelligenceCommitGraph' | 'codeIntelSummary' | 'commit' | 'comparison' | 'contributors' | 'createdAt' | 'defaultBranch' | 'description' | 'detail' | 'diskSizeBytes' | 'embeddingExists' | 'embeddingJobs' | 'externalRepository' | 'externalServices' | 'externalURLs' | 'firstEverCommit' | 'gitRefs' | 'id' | 'indexConfiguration' | 'ingestedCodeowners' | 'isArchived' | 'isFork' | 'isPrivate' | 'isRecordingEnabled' | 'keyValuePairs' | 'label' | 'language' | 'matches' | 'metadata' | 'mirrorInfo' | 'name' | 'permissionsInfo' | 'previewGitObjectFilter' | 'recordedCommands' | 'sourceType' | 'stars' | 'tags' | 'textSearchIndex' | 'topics' | 'updatedAt' | 'uri' | 'url' | 'viewerCanAdminister' | RepositoryKeySpecifier)[];
export type RepositoryFieldPolicy = {
	authorizedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChangesDiffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	branches?: FieldPolicy<any> | FieldReadFunction<any>,
	changelist?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetsStats?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneInProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelligenceCommitGraph?: FieldPolicy<any> | FieldReadFunction<any>,
	codeIntelSummary?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	comparison?: FieldPolicy<any> | FieldReadFunction<any>,
	contributors?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBranch?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	detail?: FieldPolicy<any> | FieldReadFunction<any>,
	diskSizeBytes?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddingExists?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddingJobs?: FieldPolicy<any> | FieldReadFunction<any>,
	externalRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServices?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	firstEverCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	gitRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indexConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	ingestedCodeowners?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isFork?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isRecordingEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	keyValuePairs?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	previewGitObjectFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	recordedCommands?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	stars?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	textSearchIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryComparisonKeySpecifier = ('baseRepository' | 'commits' | 'fileDiffs' | 'headRepository' | 'range' | RepositoryComparisonKeySpecifier)[];
export type RepositoryComparisonFieldPolicy = {
	baseRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	commits?: FieldPolicy<any> | FieldReadFunction<any>,
	fileDiffs?: FieldPolicy<any> | FieldReadFunction<any>,
	headRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RepositoryConnectionKeySpecifier)[];
export type RepositoryConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryContributorKeySpecifier = ('commits' | 'count' | 'person' | 'repository' | RepositoryContributorKeySpecifier)[];
export type RepositoryContributorFieldPolicy = {
	commits?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	person?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryContributorConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RepositoryContributorConnectionKeySpecifier)[];
export type RepositoryContributorConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryFilterPreviewKeySpecifier = ('limit' | 'matchesAllRepos' | 'nodes' | 'totalCount' | 'totalMatches' | RepositoryFilterPreviewKeySpecifier)[];
export type RepositoryFilterPreviewFieldPolicy = {
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	matchesAllRepos?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMatches?: FieldPolicy<any> | FieldReadFunction<any>
};
export type repositoryIndexserverHostKeySpecifier = ('name' | repositoryIndexserverHostKeySpecifier)[];
export type repositoryIndexserverHostFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryPreviewPayloadKeySpecifier = ('numberOfRepositories' | 'query' | RepositoryPreviewPayloadKeySpecifier)[];
export type RepositoryPreviewPayloadFieldPolicy = {
	numberOfRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositorySearchScopeKeySpecifier = ('allRepositories' | 'search' | RepositorySearchScopeKeySpecifier)[];
export type RepositorySearchScopeFieldPolicy = {
	allRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryStatsKeySpecifier = ('cloned' | 'cloning' | 'corrupted' | 'embedded' | 'failedFetch' | 'gitDirBytes' | 'indexed' | 'indexedLinesCount' | 'notCloned' | 'total' | RepositoryStatsKeySpecifier)[];
export type RepositoryStatsFieldPolicy = {
	cloned?: FieldPolicy<any> | FieldReadFunction<any>,
	cloning?: FieldPolicy<any> | FieldReadFunction<any>,
	corrupted?: FieldPolicy<any> | FieldReadFunction<any>,
	embedded?: FieldPolicy<any> | FieldReadFunction<any>,
	failedFetch?: FieldPolicy<any> | FieldReadFunction<any>,
	gitDirBytes?: FieldPolicy<any> | FieldReadFunction<any>,
	indexed?: FieldPolicy<any> | FieldReadFunction<any>,
	indexedLinesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	notCloned?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTextSearchIndexKeySpecifier = ('host' | 'refs' | 'repository' | 'status' | RepositoryTextSearchIndexKeySpecifier)[];
export type RepositoryTextSearchIndexFieldPolicy = {
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	refs?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTextSearchIndexedRefKeySpecifier = ('current' | 'indexed' | 'indexedCommit' | 'ref' | 'skippedIndexed' | RepositoryTextSearchIndexedRefKeySpecifier)[];
export type RepositoryTextSearchIndexedRefFieldPolicy = {
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	indexed?: FieldPolicy<any> | FieldReadFunction<any>,
	indexedCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>,
	skippedIndexed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTextSearchIndexStatusKeySpecifier = ('contentByteSize' | 'contentFilesCount' | 'defaultBranchNewLinesCount' | 'indexByteSize' | 'indexShardsCount' | 'newLinesCount' | 'otherBranchesNewLinesCount' | 'updatedAt' | RepositoryTextSearchIndexStatusKeySpecifier)[];
export type RepositoryTextSearchIndexStatusFieldPolicy = {
	contentByteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	contentFilesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBranchNewLinesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	indexByteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	indexShardsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	newLinesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	otherBranchesNewLinesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolvedBatchSpecWorkspaceKeySpecifier = ('branch' | 'ignored' | 'onlyFetchWorkspace' | 'path' | 'repository' | 'searchResultPaths' | 'unsupported' | ResolvedBatchSpecWorkspaceKeySpecifier)[];
export type ResolvedBatchSpecWorkspaceFieldPolicy = {
	branch?: FieldPolicy<any> | FieldReadFunction<any>,
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	onlyFetchWorkspace?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	searchResultPaths?: FieldPolicy<any> | FieldReadFunction<any>,
	unsupported?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RetrieverContextItemKeySpecifier = ('item' | 'retriever' | 'score' | RetrieverContextItemKeySpecifier)[];
export type RetrieverContextItemFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	retriever?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('createdAt' | 'id' | 'name' | 'permissions' | 'system' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	system?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | RoleConnectionKeySpecifier)[];
export type RoleConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootWithKeyKeySpecifier = ('comparisonKey' | 'root' | RootWithKeyKeySpecifier)[];
export type RootWithKeyFieldPolicy = {
	comparisonKey?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavedSearchKeySpecifier = ('createdAt' | 'createdBy' | 'description' | 'draft' | 'id' | 'owner' | 'query' | 'updatedAt' | 'updatedBy' | 'url' | 'viewerCanAdminister' | 'visibility' | SavedSearchKeySpecifier)[];
export type SavedSearchFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	draft?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavedSearchesConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | SavedSearchesConnectionKeySpecifier)[];
export type SavedSearchesConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SchemaDriftSummaryKeySpecifier = ('diff' | 'name' | 'problem' | 'solution' | 'statements' | 'urlHint' | SchemaDriftSummaryKeySpecifier)[];
export type SchemaDriftSummaryFieldPolicy = {
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	problem?: FieldPolicy<any> | FieldReadFunction<any>,
	solution?: FieldPolicy<any> | FieldReadFunction<any>,
	statements?: FieldPolicy<any> | FieldReadFunction<any>,
	urlHint?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SCIPOccurrenceKeySpecifier = ('range' | 'roles' | 'symbol' | SCIPOccurrenceKeySpecifier)[];
export type SCIPOccurrenceFieldPolicy = {
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SCIPOccurrenceConnectionKeySpecifier = ('nodes' | 'pageInfo' | SCIPOccurrenceConnectionKeySpecifier)[];
export type SCIPOccurrenceConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScopedInsightQueryPayloadKeySpecifier = ('invalidReason' | 'isValid' | 'query' | ScopedInsightQueryPayloadKeySpecifier)[];
export type ScopedInsightQueryPayloadFieldPolicy = {
	invalidReason?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchKeySpecifier = ('results' | 'stats' | SearchKeySpecifier)[];
export type SearchFieldPolicy = {
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchAggregationNotAvailableKeySpecifier = ('mode' | 'reason' | 'reasonType' | SearchAggregationNotAvailableKeySpecifier)[];
export type SearchAggregationNotAvailableFieldPolicy = {
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	reasonType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchAlertKeySpecifier = ('description' | 'kind' | 'proposedQueries' | 'title' | SearchAlertKeySpecifier)[];
export type SearchAlertFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	proposedQueries?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchContextKeySpecifier = ('autoDefined' | 'description' | 'id' | 'name' | 'namespace' | 'public' | 'query' | 'repositories' | 'spec' | 'updatedAt' | 'viewerCanManage' | 'viewerHasAsDefault' | 'viewerHasStarred' | SearchContextKeySpecifier)[];
export type SearchContextFieldPolicy = {
	autoDefined?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	spec?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanManage?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasAsDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchContextConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | SearchContextConnectionKeySpecifier)[];
export type SearchContextConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchContextRepositoryRevisionsKeySpecifier = ('repository' | 'revisions' | SearchContextRepositoryRevisionsKeySpecifier)[];
export type SearchContextRepositoryRevisionsFieldPolicy = {
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchFilterKeySpecifier = ('count' | 'kind' | 'label' | 'limitHit' | 'value' | SearchFilterKeySpecifier)[];
export type SearchFilterFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	limitHit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchInsightDataSeriesDefinitionKeySpecifier = ('generatedFromCaptureGroups' | 'groupBy' | 'isCalculated' | 'query' | 'repositoryDefinition' | 'repositoryScope' | 'seriesId' | 'timeScope' | SearchInsightDataSeriesDefinitionKeySpecifier)[];
export type SearchInsightDataSeriesDefinitionFieldPolicy = {
	generatedFromCaptureGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	isCalculated?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryScope?: FieldPolicy<any> | FieldReadFunction<any>,
	seriesId?: FieldPolicy<any> | FieldReadFunction<any>,
	timeScope?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchInsightLivePreviewSeriesKeySpecifier = ('label' | 'points' | SearchInsightLivePreviewSeriesKeySpecifier)[];
export type SearchInsightLivePreviewSeriesFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	points?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchJobKeySpecifier = ('createdAt' | 'creator' | 'finishedAt' | 'id' | 'logURL' | 'query' | 'repoStats' | 'startedAt' | 'state' | 'URL' | SearchJobKeySpecifier)[];
export type SearchJobFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logURL?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	repoStats?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	URL?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchJobConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | SearchJobConnectionKeySpecifier)[];
export type SearchJobConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchJobStatsKeySpecifier = ('completed' | 'failed' | 'inProgress' | 'total' | SearchJobStatsKeySpecifier)[];
export type SearchJobStatsFieldPolicy = {
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	failed?: FieldPolicy<any> | FieldReadFunction<any>,
	inProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchQueryAggregateKeySpecifier = ('aggregations' | 'modeAvailability' | SearchQueryAggregateKeySpecifier)[];
export type SearchQueryAggregateFieldPolicy = {
	aggregations?: FieldPolicy<any> | FieldReadFunction<any>,
	modeAvailability?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchQueryAnnotationKeySpecifier = ('name' | 'value' | SearchQueryAnnotationKeySpecifier)[];
export type SearchQueryAnnotationFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchQueryDescriptionKeySpecifier = ('annotations' | 'description' | 'query' | SearchQueryDescriptionKeySpecifier)[];
export type SearchQueryDescriptionFieldPolicy = {
	annotations?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultMatchKeySpecifier = ('body' | 'highlights' | 'url' | SearchResultMatchKeySpecifier)[];
export type SearchResultMatchFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultsKeySpecifier = ('alert' | 'approximateResultCount' | 'cloning' | 'dynamicFilters' | 'elapsedMilliseconds' | 'indexUnavailable' | 'limitHit' | 'matchCount' | 'missing' | 'repositories' | 'repositoriesCount' | 'resultCount' | 'results' | 'sparkline' | 'timedout' | SearchResultsKeySpecifier)[];
export type SearchResultsFieldPolicy = {
	alert?: FieldPolicy<any> | FieldReadFunction<any>,
	approximateResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	cloning?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	elapsedMilliseconds?: FieldPolicy<any> | FieldReadFunction<any>,
	indexUnavailable?: FieldPolicy<any> | FieldReadFunction<any>,
	limitHit?: FieldPolicy<any> | FieldReadFunction<any>,
	matchCount?: FieldPolicy<any> | FieldReadFunction<any>,
	missing?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	sparkline?: FieldPolicy<any> | FieldReadFunction<any>,
	timedout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultsStatsKeySpecifier = ('approximateResultCount' | 'languages' | 'sparkline' | SearchResultsStatsKeySpecifier)[];
export type SearchResultsStatsFieldPolicy = {
	approximateResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	sparkline?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeriesDisplayOptionsKeySpecifier = ('limit' | 'numSamples' | 'sortOptions' | SeriesDisplayOptionsKeySpecifier)[];
export type SeriesDisplayOptionsFieldPolicy = {
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	numSamples?: FieldPolicy<any> | FieldReadFunction<any>,
	sortOptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeriesSortOptionsKeySpecifier = ('direction' | 'mode' | SeriesSortOptionsKeySpecifier)[];
export type SeriesSortOptionsFieldPolicy = {
	direction?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionKeySpecifier = ('canSignOut' | SessionKeySpecifier)[];
export type SessionFieldPolicy = {
	canSignOut?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsKeySpecifier = ('author' | 'configuration' | 'contents' | 'createdAt' | 'id' | 'subject' | SettingsKeySpecifier)[];
export type SettingsFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsCascadeKeySpecifier = ('final' | 'merged' | 'subjects' | SettingsCascadeKeySpecifier)[];
export type SettingsCascadeFieldPolicy = {
	final?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	subjects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsMutationKeySpecifier = ('editConfiguration' | 'editSettings' | 'overwriteSettings' | SettingsMutationKeySpecifier)[];
export type SettingsMutationFieldPolicy = {
	editConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	editSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	overwriteSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsSubjectKeySpecifier = ('configurationCascade' | 'id' | 'latestSettings' | 'settingsCascade' | 'settingsURL' | 'viewerCanAdminister' | SettingsSubjectKeySpecifier)[];
export type SettingsSubjectFieldPolicy = {
	configurationCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsURL?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignatureKeySpecifier = ('date' | 'person' | SignatureKeySpecifier)[];
export type SignatureFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	person?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteKeySpecifier = ('accessTokens' | 'alerts' | 'allowEditExternalServicesWithFile' | 'allowSiteSettingsEdits' | 'analytics' | 'authProviders' | 'autoUpgradeEnabled' | 'buildVersion' | 'canReloadSite' | 'codyConfigFeatures' | 'codyContextFilters' | 'codyGatewayRateLimitStatus' | 'codyLLMConfiguration' | 'configuration' | 'configurationCascade' | 'externalAccounts' | 'externalServicesFromFile' | 'freeUsersExceeded' | 'hasCodeIntelligence' | 'id' | 'isCodyEnabled' | 'latestSettings' | 'monitoringStatistics' | 'needsRepositoryConfiguration' | 'perUserCodeCompletionsQuota' | 'perUserCompletionsQuota' | 'productSubscription' | 'productVersion' | 'requiresVerifiedEmailForCody' | 'sendsEmailVerificationEmails' | 'settingsCascade' | 'settingsURL' | 'siteID' | 'updateCheck' | 'upgradeReadiness' | 'usageStatistics' | 'users' | 'viewerCanAdminister' | SiteKeySpecifier)[];
export type SiteFieldPolicy = {
	accessTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	alerts?: FieldPolicy<any> | FieldReadFunction<any>,
	allowEditExternalServicesWithFile?: FieldPolicy<any> | FieldReadFunction<any>,
	allowSiteSettingsEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	analytics?: FieldPolicy<any> | FieldReadFunction<any>,
	authProviders?: FieldPolicy<any> | FieldReadFunction<any>,
	autoUpgradeEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	buildVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	canReloadSite?: FieldPolicy<any> | FieldReadFunction<any>,
	codyConfigFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	codyContextFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	codyGatewayRateLimitStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	codyLLMConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	externalAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	externalServicesFromFile?: FieldPolicy<any> | FieldReadFunction<any>,
	freeUsersExceeded?: FieldPolicy<any> | FieldReadFunction<any>,
	hasCodeIntelligence?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCodyEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	monitoringStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	needsRepositoryConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	perUserCodeCompletionsQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	perUserCompletionsQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	productSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	productVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresVerifiedEmailForCody?: FieldPolicy<any> | FieldReadFunction<any>,
	sendsEmailVerificationEmails?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsURL?: FieldPolicy<any> | FieldReadFunction<any>,
	siteID?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCheck?: FieldPolicy<any> | FieldReadFunction<any>,
	upgradeReadiness?: FieldPolicy<any> | FieldReadFunction<any>,
	usageStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteConfigurationKeySpecifier = ('effectiveContents' | 'history' | 'id' | 'licenseInfo' | 'validationMessages' | SiteConfigurationKeySpecifier)[];
export type SiteConfigurationFieldPolicy = {
	effectiveContents?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	licenseInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	validationMessages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteConfigurationChangeKeySpecifier = ('author' | 'createdAt' | 'diff' | 'id' | 'updatedAt' | SiteConfigurationChangeKeySpecifier)[];
export type SiteConfigurationChangeFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteConfigurationChangeConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | SiteConfigurationChangeConnectionKeySpecifier)[];
export type SiteConfigurationChangeConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteUsagePeriodKeySpecifier = ('anonymousUserCount' | 'integrationUserCount' | 'registeredUserCount' | 'startTime' | 'userCount' | SiteUsagePeriodKeySpecifier)[];
export type SiteUsagePeriodFieldPolicy = {
	anonymousUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	integrationUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredUserCount?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	userCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteUsageStatisticsKeySpecifier = ('daus' | 'maus' | 'waus' | SiteUsageStatisticsKeySpecifier)[];
export type SiteUsageStatisticsFieldPolicy = {
	daus?: FieldPolicy<any> | FieldReadFunction<any>,
	maus?: FieldPolicy<any> | FieldReadFunction<any>,
	waus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteUserKeySpecifier = ('createdAt' | 'deletedAt' | 'displayName' | 'email' | 'eventsCount' | 'id' | 'lastActiveAt' | 'locked' | 'scimControlled' | 'siteAdmin' | 'username' | SiteUserKeySpecifier)[];
export type SiteUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	eventsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastActiveAt?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	scimControlled?: FieldPolicy<any> | FieldReadFunction<any>,
	siteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteUsersKeySpecifier = ('nodes' | 'totalCount' | SiteUsersKeySpecifier)[];
export type SiteUsersFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SkippedIndexedKeySpecifier = ('count' | 'query' | SkippedIndexedKeySpecifier)[];
export type SkippedIndexedFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SlowRequestKeySpecifier = ('duration' | 'errors' | 'filepath' | 'index' | 'name' | 'query' | 'repository' | 'source' | 'start' | 'user' | 'variables' | SlowRequestKeySpecifier)[];
export type SlowRequestFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	filepath?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	variables?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SlowRequestConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | SlowRequestConnectionKeySpecifier)[];
export type SlowRequestConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SnapshotDataKeySpecifier = ('additional' | 'data' | 'offset' | SnapshotDataKeySpecifier)[];
export type SnapshotDataFieldPolicy = {
	additional?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SnippetAttributionKeySpecifier = ('repositoryName' | SnippetAttributionKeySpecifier)[];
export type SnippetAttributionFieldPolicy = {
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SnippetAttributionConnectionKeySpecifier = ('limitHit' | 'nodes' | 'pageInfo' | 'snippetThreshold' | 'totalCount' | SnippetAttributionConnectionKeySpecifier)[];
export type SnippetAttributionConnectionFieldPolicy = {
	limitHit?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	snippetThreshold?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmoduleKeySpecifier = ('commit' | 'path' | 'url' | SubmoduleKeySpecifier)[];
export type SubmoduleFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyResponseKeySpecifier = ('better' | 'createdAt' | 'email' | 'id' | 'otherUseCase' | 'reason' | 'score' | 'user' | SurveyResponseKeySpecifier)[];
export type SurveyResponseFieldPolicy = {
	better?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	otherUseCase?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyResponseConnectionKeySpecifier = ('averageScore' | 'last30DaysCount' | 'netPromoterScore' | 'nodes' | 'totalCount' | SurveyResponseConnectionKeySpecifier)[];
export type SurveyResponseConnectionFieldPolicy = {
	averageScore?: FieldPolicy<any> | FieldReadFunction<any>,
	last30DaysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	netPromoterScore?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolKeySpecifier = ('canonicalURL' | 'containerName' | 'fileLocal' | 'kind' | 'language' | 'location' | 'name' | 'url' | SymbolKeySpecifier)[];
export type SymbolFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	containerName?: FieldPolicy<any> | FieldReadFunction<any>,
	fileLocal?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolBlockKeySpecifier = ('id' | 'symbolInput' | SymbolBlockKeySpecifier)[];
export type SymbolBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	symbolInput?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolBlockInputKeySpecifier = ('filePath' | 'lineContext' | 'repositoryName' | 'revision' | 'symbolContainerName' | 'symbolKind' | 'symbolName' | SymbolBlockInputKeySpecifier)[];
export type SymbolBlockInputFieldPolicy = {
	filePath?: FieldPolicy<any> | FieldReadFunction<any>,
	lineContext?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	symbolContainerName?: FieldPolicy<any> | FieldReadFunction<any>,
	symbolKind?: FieldPolicy<any> | FieldReadFunction<any>,
	symbolName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolConnectionKeySpecifier = ('nodes' | 'pageInfo' | SymbolConnectionKeySpecifier)[];
export type SymbolConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolInfoKeySpecifier = ('definition' | 'hover' | SymbolInfoKeySpecifier)[];
export type SymbolInfoFieldPolicy = {
	definition?: FieldPolicy<any> | FieldReadFunction<any>,
	hover?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolInformationKeySpecifier = ('documentation' | 'name' | SymbolInformationKeySpecifier)[];
export type SymbolInformationFieldPolicy = {
	documentation?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SymbolLocationKeySpecifier = ('character' | 'commit' | 'length' | 'line' | 'path' | 'range' | 'repo' | SymbolLocationKeySpecifier)[];
export type SymbolLocationFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	repo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyncErrorKeySpecifier = ('message' | SyncErrorKeySpecifier)[];
export type SyncErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('avatarURL' | 'childTeams' | 'creator' | 'displayName' | 'external' | 'id' | 'members' | 'name' | 'parentTeam' | 'readonly' | 'url' | 'viewerCanAdminister' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	avatarURL?: FieldPolicy<any> | FieldReadFunction<any>,
	childTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	external?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	readonly?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberKeySpecifier = ('teams' | TeamMemberKeySpecifier)[];
export type TeamMemberFieldPolicy = {
	teams?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | TeamMemberConnectionKeySpecifier)[];
export type TeamMemberConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TelemetryMutationKeySpecifier = ('recordEvents' | TelemetryMutationKeySpecifier)[];
export type TelemetryMutationFieldPolicy = {
	recordEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TelemetryQueryKeySpecifier = ('exportedEvents' | TelemetryQueryKeySpecifier)[];
export type TelemetryQueryFieldPolicy = {
	exportedEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemporarySettingsKeySpecifier = ('contents' | TemporarySettingsKeySpecifier)[];
export type TemporarySettingsFieldPolicy = {
	contents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeoutDatapointAlertKeySpecifier = ('repositories' | 'time' | TimeoutDatapointAlertKeySpecifier)[];
export type TimeoutDatapointAlertFieldPolicy = {
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TreeEntryKeySpecifier = ('canonicalURL' | 'commit' | 'externalURLs' | 'history' | 'isDirectory' | 'isSingleChild' | 'lsif' | 'name' | 'path' | 'submodule' | 'symbols' | 'url' | TreeEntryKeySpecifier)[];
export type TreeEntryFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	isSingleChild?: FieldPolicy<any> | FieldReadFunction<any>,
	lsif?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	submodule?: FieldPolicy<any> | FieldReadFunction<any>,
	symbols?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TreeEntryConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | TreeEntryConnectionKeySpecifier)[];
export type TreeEntryConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TreeEntryLSIFDataKeySpecifier = ('diagnostics' | TreeEntryLSIFDataKeySpecifier)[];
export type TreeEntryLSIFDataFieldPolicy = {
	diagnostics?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCheckKeySpecifier = ('checkedAt' | 'errorMessage' | 'pending' | 'updateVersionAvailable' | UpdateCheckKeySpecifier)[];
export type UpdateCheckFieldPolicy = {
	checkedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	pending?: FieldPolicy<any> | FieldReadFunction<any>,
	updateVersionAvailable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateQueueKeySpecifier = ('index' | 'total' | 'updating' | UpdateQueueKeySpecifier)[];
export type UpdateQueueFieldPolicy = {
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	updating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateScheduleKeySpecifier = ('due' | 'index' | 'intervalSeconds' | 'total' | UpdateScheduleKeySpecifier)[];
export type UpdateScheduleFieldPolicy = {
	due?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	intervalSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSettingsPayloadKeySpecifier = ('empty' | UpdateSettingsPayloadKeySpecifier)[];
export type UpdateSettingsPayloadFieldPolicy = {
	empty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpgradeReadinessKeySpecifier = ('requiredOutOfBandMigrations' | 'schemaDrift' | UpgradeReadinessKeySpecifier)[];
export type UpgradeReadinessFieldPolicy = {
	requiredOutOfBandMigrations?: FieldPolicy<any> | FieldReadFunction<any>,
	schemaDrift?: FieldPolicy<any> | FieldReadFunction<any>
};
export type URLMentionContextResultKeySpecifier = ('content' | 'title' | URLMentionContextResultKeySpecifier)[];
export type URLMentionContextResultFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsageKeySpecifier = ('dataSource' | 'provenance' | 'surroundingContent' | 'symbol' | 'usageKind' | 'usageRange' | UsageKeySpecifier)[];
export type UsageFieldPolicy = {
	dataSource?: FieldPolicy<any> | FieldReadFunction<any>,
	provenance?: FieldPolicy<any> | FieldReadFunction<any>,
	surroundingContent?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	usageKind?: FieldPolicy<any> | FieldReadFunction<any>,
	usageRange?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsageConnectionKeySpecifier = ('nodes' | 'pageInfo' | UsageConnectionKeySpecifier)[];
export type UsageConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsageRangeKeySpecifier = ('path' | 'range' | 'repository' | 'revision' | UsageRangeKeySpecifier)[];
export type UsageRangeFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('accessTokens' | 'affiliatedNamespaces' | 'avatarURL' | 'batchChanges' | 'batchChangesCodeHosts' | 'builtinAuth' | 'codeCompletionsQuotaOverride' | 'codyCurrentPeriodChatLimit' | 'codyCurrentPeriodChatUsage' | 'codyCurrentPeriodCodeLimit' | 'codyCurrentPeriodCodeUsage' | 'codyProEnabled' | 'codySubscription' | 'completionsQuotaOverride' | 'configurationCascade' | 'createdAt' | 'databaseID' | 'displayName' | 'email' | 'emails' | 'evaluateFeatureFlag' | 'eventLogs' | 'executorSecrets' | 'externalAccounts' | 'hasVerifiedEmail' | 'id' | 'latestSettings' | 'monitors' | 'namespaceName' | 'organizationMemberships' | 'organizations' | 'permissions' | 'permissionsInfo' | 'primaryEmail' | 'roles' | 'scimControlled' | 'session' | 'settingsCascade' | 'settingsURL' | 'siteAdmin' | 'surveyResponses' | 'teams' | 'tosAccepted' | 'updatedAt' | 'url' | 'usageStatistics' | 'username' | 'viewerCanAdminister' | 'viewerCanChangeUsername' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	accessTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	affiliatedNamespaces?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarURL?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	batchChangesCodeHosts?: FieldPolicy<any> | FieldReadFunction<any>,
	builtinAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	codeCompletionsQuotaOverride?: FieldPolicy<any> | FieldReadFunction<any>,
	codyCurrentPeriodChatLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	codyCurrentPeriodChatUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	codyCurrentPeriodCodeLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	codyCurrentPeriodCodeUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	codyProEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	codySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	completionsQuotaOverride?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseID?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emails?: FieldPolicy<any> | FieldReadFunction<any>,
	evaluateFeatureFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	eventLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	executorSecrets?: FieldPolicy<any> | FieldReadFunction<any>,
	externalAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	hasVerifiedEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	monitors?: FieldPolicy<any> | FieldReadFunction<any>,
	namespaceName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	scimControlled?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsCascade?: FieldPolicy<any> | FieldReadFunction<any>,
	settingsURL?: FieldPolicy<any> | FieldReadFunction<any>,
	siteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	tosAccepted?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	usageStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanChangeUsername?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEmailKeySpecifier = ('email' | 'isPrimary' | 'user' | 'verificationPending' | 'verified' | 'viewerCanManuallyVerify' | UserEmailKeySpecifier)[];
export type UserEmailFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationPending?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanManuallyVerify?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionKeySpecifier = ('bindID' | 'permission' | UserPermissionKeySpecifier)[];
export type UserPermissionFieldPolicy = {
	bindID?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserUsageStatisticsKeySpecifier = ('codeIntelligenceActions' | 'findReferencesActions' | 'lastActiveCodeHostIntegrationTime' | 'lastActiveTime' | 'pageViews' | 'searchQueries' | UserUsageStatisticsKeySpecifier)[];
export type UserUsageStatisticsFieldPolicy = {
	codeIntelligenceActions?: FieldPolicy<any> | FieldReadFunction<any>,
	findReferencesActions?: FieldPolicy<any> | FieldReadFunction<any>,
	lastActiveCodeHostIntegrationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastActiveTime?: FieldPolicy<any> | FieldReadFunction<any>,
	pageViews?: FieldPolicy<any> | FieldReadFunction<any>,
	searchQueries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewerKeySpecifier = ('affiliatedNamespaces' | ViewerKeySpecifier)[];
export type ViewerFieldPolicy = {
	affiliatedNamespaces?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualFileKeySpecifier = ('binary' | 'byteSize' | 'canonicalURL' | 'changelistURL' | 'content' | 'externalURLs' | 'highlight' | 'isDirectory' | 'languages' | 'name' | 'path' | 'richHTML' | 'totalLines' | 'url' | VirtualFileKeySpecifier)[];
export type VirtualFileFieldPolicy = {
	binary?: FieldPolicy<any> | FieldReadFunction<any>,
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	changelistURL?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	externalURLs?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectory?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	richHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLines?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleApplyPreviewTargetsAttachKeySpecifier = ('changesetSpec' | VisibleApplyPreviewTargetsAttachKeySpecifier)[];
export type VisibleApplyPreviewTargetsAttachFieldPolicy = {
	changesetSpec?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleApplyPreviewTargetsDetachKeySpecifier = ('changeset' | VisibleApplyPreviewTargetsDetachKeySpecifier)[];
export type VisibleApplyPreviewTargetsDetachFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleApplyPreviewTargetsUpdateKeySpecifier = ('changeset' | 'changesetSpec' | VisibleApplyPreviewTargetsUpdateKeySpecifier)[];
export type VisibleApplyPreviewTargetsUpdateFieldPolicy = {
	changeset?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetSpec?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleBatchSpecWorkspaceKeySpecifier = ('batchSpec' | 'branch' | 'cachedResultFound' | 'changesetSpecs' | 'diffStat' | 'executor' | 'failureMessage' | 'finishedAt' | 'id' | 'ignored' | 'onlyFetchWorkspace' | 'path' | 'placeInGlobalQueue' | 'placeInQueue' | 'queuedAt' | 'repository' | 'searchResultPaths' | 'stages' | 'startedAt' | 'state' | 'step' | 'stepCacheResultCount' | 'steps' | 'unsupported' | VisibleBatchSpecWorkspaceKeySpecifier)[];
export type VisibleBatchSpecWorkspaceFieldPolicy = {
	batchSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	branch?: FieldPolicy<any> | FieldReadFunction<any>,
	cachedResultFound?: FieldPolicy<any> | FieldReadFunction<any>,
	changesetSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	diffStat?: FieldPolicy<any> | FieldReadFunction<any>,
	executor?: FieldPolicy<any> | FieldReadFunction<any>,
	failureMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ignored?: FieldPolicy<any> | FieldReadFunction<any>,
	onlyFetchWorkspace?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInGlobalQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	placeInQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	searchResultPaths?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	step?: FieldPolicy<any> | FieldReadFunction<any>,
	stepCacheResultCount?: FieldPolicy<any> | FieldReadFunction<any>,
	steps?: FieldPolicy<any> | FieldReadFunction<any>,
	unsupported?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleChangesetApplyPreviewKeySpecifier = ('delta' | 'operations' | 'targets' | VisibleChangesetApplyPreviewKeySpecifier)[];
export type VisibleChangesetApplyPreviewFieldPolicy = {
	delta?: FieldPolicy<any> | FieldReadFunction<any>,
	operations?: FieldPolicy<any> | FieldReadFunction<any>,
	targets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisibleChangesetSpecKeySpecifier = ('description' | 'expiresAt' | 'forkTarget' | 'id' | 'type' | 'workspace' | VisibleChangesetSpecKeySpecifier)[];
export type VisibleChangesetSpecFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	forkTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	workspace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisitorKeySpecifier = ('affiliatedNamespaces' | VisitorKeySpecifier)[];
export type VisitorFieldPolicy = {
	affiliatedNamespaces?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookKeySpecifier = ('codeHostKind' | 'codeHostURN' | 'createdAt' | 'createdBy' | 'id' | 'name' | 'secret' | 'updatedAt' | 'updatedBy' | 'url' | 'uuid' | 'webhookLogs' | WebhookKeySpecifier)[];
export type WebhookFieldPolicy = {
	codeHostKind?: FieldPolicy<any> | FieldReadFunction<any>,
	codeHostURN?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	secret?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookLogs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | WebhookConnectionKeySpecifier)[];
export type WebhookConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogKeySpecifier = ('externalService' | 'id' | 'receivedAt' | 'request' | 'response' | 'statusCode' | WebhookLogKeySpecifier)[];
export type WebhookLogFieldPolicy = {
	externalService?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	receivedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	request?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogConnectionKeySpecifier = ('nodes' | 'pageInfo' | 'totalCount' | WebhookLogConnectionKeySpecifier)[];
export type WebhookLogConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogMessageKeySpecifier = ('body' | 'headers' | WebhookLogMessageKeySpecifier)[];
export type WebhookLogMessageFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogRequestKeySpecifier = ('body' | 'headers' | 'method' | 'url' | 'version' | WebhookLogRequestKeySpecifier)[];
export type WebhookLogRequestFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogResponseKeySpecifier = ('body' | 'headers' | WebhookLogResponseKeySpecifier)[];
export type WebhookLogResponseFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessRequestKeySpecifier | (() => undefined | AccessRequestKeySpecifier),
		fields?: AccessRequestFieldPolicy,
	},
	AccessRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessRequestConnectionKeySpecifier | (() => undefined | AccessRequestConnectionKeySpecifier),
		fields?: AccessRequestConnectionFieldPolicy,
	},
	AccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenKeySpecifier | (() => undefined | AccessTokenKeySpecifier),
		fields?: AccessTokenFieldPolicy,
	},
	AccessTokenConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenConnectionKeySpecifier | (() => undefined | AccessTokenConnectionKeySpecifier),
		fields?: AccessTokenConnectionFieldPolicy,
	},
	AggregationGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationGroupKeySpecifier | (() => undefined | AggregationGroupKeySpecifier),
		fields?: AggregationGroupFieldPolicy,
	},
	AggregationModeAvailability?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationModeAvailabilityKeySpecifier | (() => undefined | AggregationModeAvailabilityKeySpecifier),
		fields?: AggregationModeAvailabilityFieldPolicy,
	},
	Alert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertKeySpecifier | (() => undefined | AlertKeySpecifier),
		fields?: AlertFieldPolicy,
	},
	Analytics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsKeySpecifier | (() => undefined | AnalyticsKeySpecifier),
		fields?: AnalyticsFieldPolicy,
	},
	AnalyticsBatchChangesResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsBatchChangesResultKeySpecifier | (() => undefined | AnalyticsBatchChangesResultKeySpecifier),
		fields?: AnalyticsBatchChangesResultFieldPolicy,
	},
	AnalyticsCodeIntelByLanguageResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsCodeIntelByLanguageResultKeySpecifier | (() => undefined | AnalyticsCodeIntelByLanguageResultKeySpecifier),
		fields?: AnalyticsCodeIntelByLanguageResultFieldPolicy,
	},
	AnalyticsCodeIntelRepositoryResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsCodeIntelRepositoryResultKeySpecifier | (() => undefined | AnalyticsCodeIntelRepositoryResultKeySpecifier),
		fields?: AnalyticsCodeIntelRepositoryResultFieldPolicy,
	},
	AnalyticsCodeIntelResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsCodeIntelResultKeySpecifier | (() => undefined | AnalyticsCodeIntelResultKeySpecifier),
		fields?: AnalyticsCodeIntelResultFieldPolicy,
	},
	AnalyticsCodesInsightsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsCodesInsightsResultKeySpecifier | (() => undefined | AnalyticsCodesInsightsResultKeySpecifier),
		fields?: AnalyticsCodesInsightsResultFieldPolicy,
	},
	AnalyticsExtensionsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsExtensionsResultKeySpecifier | (() => undefined | AnalyticsExtensionsResultKeySpecifier),
		fields?: AnalyticsExtensionsResultFieldPolicy,
	},
	AnalyticsMonthlyActiveUsers?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsMonthlyActiveUsersKeySpecifier | (() => undefined | AnalyticsMonthlyActiveUsersKeySpecifier),
		fields?: AnalyticsMonthlyActiveUsersFieldPolicy,
	},
	AnalyticsNotebooksResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsNotebooksResultsKeySpecifier | (() => undefined | AnalyticsNotebooksResultsKeySpecifier),
		fields?: AnalyticsNotebooksResultsFieldPolicy,
	},
	AnalyticsReposSummartResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsReposSummartResultKeySpecifier | (() => undefined | AnalyticsReposSummartResultKeySpecifier),
		fields?: AnalyticsReposSummartResultFieldPolicy,
	},
	AnalyticsSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsSearchResultKeySpecifier | (() => undefined | AnalyticsSearchResultKeySpecifier),
		fields?: AnalyticsSearchResultFieldPolicy,
	},
	AnalyticsStatItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsStatItemKeySpecifier | (() => undefined | AnalyticsStatItemKeySpecifier),
		fields?: AnalyticsStatItemFieldPolicy,
	},
	AnalyticsStatItemNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsStatItemNodeKeySpecifier | (() => undefined | AnalyticsStatItemNodeKeySpecifier),
		fields?: AnalyticsStatItemNodeFieldPolicy,
	},
	AnalyticsStatItemSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsStatItemSummaryKeySpecifier | (() => undefined | AnalyticsStatItemSummaryKeySpecifier),
		fields?: AnalyticsStatItemSummaryFieldPolicy,
	},
	AnalyticsUsersFrequencyItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsUsersFrequencyItemKeySpecifier | (() => undefined | AnalyticsUsersFrequencyItemKeySpecifier),
		fields?: AnalyticsUsersFrequencyItemFieldPolicy,
	},
	AnalyticsUsersResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnalyticsUsersResultKeySpecifier | (() => undefined | AnalyticsUsersResultKeySpecifier),
		fields?: AnalyticsUsersResultFieldPolicy,
	},
	AssignedOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedOwnerKeySpecifier | (() => undefined | AssignedOwnerKeySpecifier),
		fields?: AssignedOwnerFieldPolicy,
	},
	AttributionSnippetThreshold?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributionSnippetThresholdKeySpecifier | (() => undefined | AttributionSnippetThresholdKeySpecifier),
		fields?: AttributionSnippetThresholdFieldPolicy,
	},
	AuditLogColumnChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuditLogColumnChangeKeySpecifier | (() => undefined | AuditLogColumnChangeKeySpecifier),
		fields?: AuditLogColumnChangeFieldPolicy,
	},
	AuthProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthProviderKeySpecifier | (() => undefined | AuthProviderKeySpecifier),
		fields?: AuthProviderFieldPolicy,
	},
	AuthProviderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthProviderConnectionKeySpecifier | (() => undefined | AuthProviderConnectionKeySpecifier),
		fields?: AuthProviderConnectionFieldPolicy,
	},
	AutoIndexJobDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoIndexJobDescriptionKeySpecifier | (() => undefined | AutoIndexJobDescriptionKeySpecifier),
		fields?: AutoIndexJobDescriptionFieldPolicy,
	},
	BackfillStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackfillStatusKeySpecifier | (() => undefined | BackfillStatusKeySpecifier),
		fields?: BackfillStatusFieldPolicy,
	},
	BackgroundJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundJobKeySpecifier | (() => undefined | BackgroundJobKeySpecifier),
		fields?: BackgroundJobFieldPolicy,
	},
	BackgroundJobConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundJobConnectionKeySpecifier | (() => undefined | BackgroundJobConnectionKeySpecifier),
		fields?: BackgroundJobConnectionFieldPolicy,
	},
	BackgroundRoutine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundRoutineKeySpecifier | (() => undefined | BackgroundRoutineKeySpecifier),
		fields?: BackgroundRoutineFieldPolicy,
	},
	BackgroundRoutineInstance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundRoutineInstanceKeySpecifier | (() => undefined | BackgroundRoutineInstanceKeySpecifier),
		fields?: BackgroundRoutineInstanceFieldPolicy,
	},
	BackgroundRoutineRecentRun?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundRoutineRecentRunKeySpecifier | (() => undefined | BackgroundRoutineRecentRunKeySpecifier),
		fields?: BackgroundRoutineRecentRunFieldPolicy,
	},
	BackgroundRoutineStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BackgroundRoutineStatsKeySpecifier | (() => undefined | BackgroundRoutineStatsKeySpecifier),
		fields?: BackgroundRoutineStatsFieldPolicy,
	},
	BatchChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangeKeySpecifier | (() => undefined | BatchChangeKeySpecifier),
		fields?: BatchChangeFieldPolicy,
	},
	BatchChangeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangeConnectionKeySpecifier | (() => undefined | BatchChangeConnectionKeySpecifier),
		fields?: BatchChangeConnectionFieldPolicy,
	},
	BatchChangeDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangeDescriptionKeySpecifier | (() => undefined | BatchChangeDescriptionKeySpecifier),
		fields?: BatchChangeDescriptionFieldPolicy,
	},
	BatchChangesCodeHost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangesCodeHostKeySpecifier | (() => undefined | BatchChangesCodeHostKeySpecifier),
		fields?: BatchChangesCodeHostFieldPolicy,
	},
	BatchChangesCodeHostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangesCodeHostConnectionKeySpecifier | (() => undefined | BatchChangesCodeHostConnectionKeySpecifier),
		fields?: BatchChangesCodeHostConnectionFieldPolicy,
	},
	BatchChangesCredential?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchChangesCredentialKeySpecifier | (() => undefined | BatchChangesCredentialKeySpecifier),
		fields?: BatchChangesCredentialFieldPolicy,
	},
	BatchSpec?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecKeySpecifier | (() => undefined | BatchSpecKeySpecifier),
		fields?: BatchSpecFieldPolicy,
	},
	BatchSpecConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecConnectionKeySpecifier | (() => undefined | BatchSpecConnectionKeySpecifier),
		fields?: BatchSpecConnectionFieldPolicy,
	},
	BatchSpecWorkspace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceKeySpecifier | (() => undefined | BatchSpecWorkspaceKeySpecifier),
		fields?: BatchSpecWorkspaceFieldPolicy,
	},
	BatchSpecWorkspaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceConnectionKeySpecifier | (() => undefined | BatchSpecWorkspaceConnectionKeySpecifier),
		fields?: BatchSpecWorkspaceConnectionFieldPolicy,
	},
	BatchSpecWorkspaceEnvironmentVariable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceEnvironmentVariableKeySpecifier | (() => undefined | BatchSpecWorkspaceEnvironmentVariableKeySpecifier),
		fields?: BatchSpecWorkspaceEnvironmentVariableFieldPolicy,
	},
	BatchSpecWorkspaceFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceFileKeySpecifier | (() => undefined | BatchSpecWorkspaceFileKeySpecifier),
		fields?: BatchSpecWorkspaceFileFieldPolicy,
	},
	BatchSpecWorkspaceFileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceFileConnectionKeySpecifier | (() => undefined | BatchSpecWorkspaceFileConnectionKeySpecifier),
		fields?: BatchSpecWorkspaceFileConnectionFieldPolicy,
	},
	BatchSpecWorkspaceOutputVariable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceOutputVariableKeySpecifier | (() => undefined | BatchSpecWorkspaceOutputVariableKeySpecifier),
		fields?: BatchSpecWorkspaceOutputVariableFieldPolicy,
	},
	BatchSpecWorkspaceResolution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceResolutionKeySpecifier | (() => undefined | BatchSpecWorkspaceResolutionKeySpecifier),
		fields?: BatchSpecWorkspaceResolutionFieldPolicy,
	},
	BatchSpecWorkspacesStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspacesStatsKeySpecifier | (() => undefined | BatchSpecWorkspacesStatsKeySpecifier),
		fields?: BatchSpecWorkspacesStatsFieldPolicy,
	},
	BatchSpecWorkspaceStages?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceStagesKeySpecifier | (() => undefined | BatchSpecWorkspaceStagesKeySpecifier),
		fields?: BatchSpecWorkspaceStagesFieldPolicy,
	},
	BatchSpecWorkspaceStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceStepKeySpecifier | (() => undefined | BatchSpecWorkspaceStepKeySpecifier),
		fields?: BatchSpecWorkspaceStepFieldPolicy,
	},
	BatchSpecWorkspaceStepOutputLineConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchSpecWorkspaceStepOutputLineConnectionKeySpecifier | (() => undefined | BatchSpecWorkspaceStepOutputLineConnectionKeySpecifier),
		fields?: BatchSpecWorkspaceStepOutputLineConnectionFieldPolicy,
	},
	BehindAheadCounts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BehindAheadCountsKeySpecifier | (() => undefined | BehindAheadCountsKeySpecifier),
		fields?: BehindAheadCountsFieldPolicy,
	},
	BidirectionalPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BidirectionalPageInfoKeySpecifier | (() => undefined | BidirectionalPageInfoKeySpecifier),
		fields?: BidirectionalPageInfoFieldPolicy,
	},
	BitbucketProjectPermissionJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BitbucketProjectPermissionJobKeySpecifier | (() => undefined | BitbucketProjectPermissionJobKeySpecifier),
		fields?: BitbucketProjectPermissionJobFieldPolicy,
	},
	BitbucketProjectPermissionJobs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BitbucketProjectPermissionJobsKeySpecifier | (() => undefined | BitbucketProjectPermissionJobsKeySpecifier),
		fields?: BitbucketProjectPermissionJobsFieldPolicy,
	},
	BulkOperation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkOperationKeySpecifier | (() => undefined | BulkOperationKeySpecifier),
		fields?: BulkOperationFieldPolicy,
	},
	BulkOperationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkOperationConnectionKeySpecifier | (() => undefined | BulkOperationConnectionKeySpecifier),
		fields?: BulkOperationConnectionFieldPolicy,
	},
	Changeset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetKeySpecifier | (() => undefined | ChangesetKeySpecifier),
		fields?: ChangesetFieldPolicy,
	},
	ChangesetApplyPreviewConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetApplyPreviewConnectionKeySpecifier | (() => undefined | ChangesetApplyPreviewConnectionKeySpecifier),
		fields?: ChangesetApplyPreviewConnectionFieldPolicy,
	},
	ChangesetApplyPreviewConnectionStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetApplyPreviewConnectionStatsKeySpecifier | (() => undefined | ChangesetApplyPreviewConnectionStatsKeySpecifier),
		fields?: ChangesetApplyPreviewConnectionStatsFieldPolicy,
	},
	ChangesetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetConnectionKeySpecifier | (() => undefined | ChangesetConnectionKeySpecifier),
		fields?: ChangesetConnectionFieldPolicy,
	},
	ChangesetCounts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetCountsKeySpecifier | (() => undefined | ChangesetCountsKeySpecifier),
		fields?: ChangesetCountsFieldPolicy,
	},
	ChangesetEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetEventKeySpecifier | (() => undefined | ChangesetEventKeySpecifier),
		fields?: ChangesetEventFieldPolicy,
	},
	ChangesetEventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetEventConnectionKeySpecifier | (() => undefined | ChangesetEventConnectionKeySpecifier),
		fields?: ChangesetEventConnectionFieldPolicy,
	},
	ChangesetJobError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetJobErrorKeySpecifier | (() => undefined | ChangesetJobErrorKeySpecifier),
		fields?: ChangesetJobErrorFieldPolicy,
	},
	ChangesetLabel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetLabelKeySpecifier | (() => undefined | ChangesetLabelKeySpecifier),
		fields?: ChangesetLabelFieldPolicy,
	},
	ChangesetSpec?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetSpecKeySpecifier | (() => undefined | ChangesetSpecKeySpecifier),
		fields?: ChangesetSpecFieldPolicy,
	},
	ChangesetSpecConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetSpecConnectionKeySpecifier | (() => undefined | ChangesetSpecConnectionKeySpecifier),
		fields?: ChangesetSpecConnectionFieldPolicy,
	},
	ChangesetSpecDelta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetSpecDeltaKeySpecifier | (() => undefined | ChangesetSpecDeltaKeySpecifier),
		fields?: ChangesetSpecDeltaFieldPolicy,
	},
	ChangesetsStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangesetsStatsKeySpecifier | (() => undefined | ChangesetsStatsKeySpecifier),
		fields?: ChangesetsStatsFieldPolicy,
	},
	ChatContextResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatContextResultKeySpecifier | (() => undefined | ChatContextResultKeySpecifier),
		fields?: ChatContextResultFieldPolicy,
	},
	ChatIntentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatIntentResponseKeySpecifier | (() => undefined | ChatIntentResponseKeySpecifier),
		fields?: ChatIntentResponseFieldPolicy,
	},
	CheckMirrorRepositoryConnectionResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckMirrorRepositoryConnectionResultKeySpecifier | (() => undefined | CheckMirrorRepositoryConnectionResultKeySpecifier),
		fields?: CheckMirrorRepositoryConnectionResultFieldPolicy,
	},
	ChunkMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChunkMatchKeySpecifier | (() => undefined | ChunkMatchKeySpecifier),
		fields?: ChunkMatchFieldPolicy,
	},
	ClientConfigurationDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientConfigurationDetailsKeySpecifier | (() => undefined | ClientConfigurationDetailsKeySpecifier),
		fields?: ClientConfigurationDetailsFieldPolicy,
	},
	CloningProgress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloningProgressKeySpecifier | (() => undefined | CloningProgressKeySpecifier),
		fields?: CloningProgressFieldPolicy,
	},
	CodeGraphData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeGraphDataKeySpecifier | (() => undefined | CodeGraphDataKeySpecifier),
		fields?: CodeGraphDataFieldPolicy,
	},
	CodeGraphToolInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeGraphToolInfoKeySpecifier | (() => undefined | CodeGraphToolInfoKeySpecifier),
		fields?: CodeGraphToolInfoFieldPolicy,
	},
	CodeHost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeHostKeySpecifier | (() => undefined | CodeHostKeySpecifier),
		fields?: CodeHostFieldPolicy,
	},
	CodeHostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeHostConnectionKeySpecifier | (() => undefined | CodeHostConnectionKeySpecifier),
		fields?: CodeHostConnectionFieldPolicy,
	},
	CodeHostState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeHostStateKeySpecifier | (() => undefined | CodeHostStateKeySpecifier),
		fields?: CodeHostStateFieldPolicy,
	},
	CodeIntelCommit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelCommitKeySpecifier | (() => undefined | CodeIntelCommitKeySpecifier),
		fields?: CodeIntelCommitFieldPolicy,
	},
	CodeIntelExternalRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelExternalRepositoryKeySpecifier | (() => undefined | CodeIntelExternalRepositoryKeySpecifier),
		fields?: CodeIntelExternalRepositoryFieldPolicy,
	},
	CodeIntelGitBlob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelGitBlobKeySpecifier | (() => undefined | CodeIntelGitBlobKeySpecifier),
		fields?: CodeIntelGitBlobFieldPolicy,
	},
	CodeIntelGitObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelGitObjectKeySpecifier | (() => undefined | CodeIntelGitObjectKeySpecifier),
		fields?: CodeIntelGitObjectFieldPolicy,
	},
	CodeIntelGitTree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelGitTreeKeySpecifier | (() => undefined | CodeIntelGitTreeKeySpecifier),
		fields?: CodeIntelGitTreeFieldPolicy,
	},
	CodeIntelIndexer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelIndexerKeySpecifier | (() => undefined | CodeIntelIndexerKeySpecifier),
		fields?: CodeIntelIndexerFieldPolicy,
	},
	CodeIntelligenceCommitGraph?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceCommitGraphKeySpecifier | (() => undefined | CodeIntelligenceCommitGraphKeySpecifier),
		fields?: CodeIntelligenceCommitGraphFieldPolicy,
	},
	CodeIntelligenceConfigurationPolicy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceConfigurationPolicyKeySpecifier | (() => undefined | CodeIntelligenceConfigurationPolicyKeySpecifier),
		fields?: CodeIntelligenceConfigurationPolicyFieldPolicy,
	},
	CodeIntelligenceConfigurationPolicyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceConfigurationPolicyConnectionKeySpecifier | (() => undefined | CodeIntelligenceConfigurationPolicyConnectionKeySpecifier),
		fields?: CodeIntelligenceConfigurationPolicyConnectionFieldPolicy,
	},
	CodeIntelligenceRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceRangeKeySpecifier | (() => undefined | CodeIntelligenceRangeKeySpecifier),
		fields?: CodeIntelligenceRangeFieldPolicy,
	},
	CodeIntelligenceRangeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceRangeConnectionKeySpecifier | (() => undefined | CodeIntelligenceRangeConnectionKeySpecifier),
		fields?: CodeIntelligenceRangeConnectionFieldPolicy,
	},
	CodeIntelligenceRetentionPolicyMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceRetentionPolicyMatchKeySpecifier | (() => undefined | CodeIntelligenceRetentionPolicyMatchKeySpecifier),
		fields?: CodeIntelligenceRetentionPolicyMatchFieldPolicy,
	},
	CodeIntelligenceRetentionPolicyMatchesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelligenceRetentionPolicyMatchesConnectionKeySpecifier | (() => undefined | CodeIntelligenceRetentionPolicyMatchesConnectionKeySpecifier),
		fields?: CodeIntelligenceRetentionPolicyMatchesConnectionFieldPolicy,
	},
	CodeIntelRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositoryKeySpecifier | (() => undefined | CodeIntelRepositoryKeySpecifier),
		fields?: CodeIntelRepositoryFieldPolicy,
	},
	CodeIntelRepositorySummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositorySummaryKeySpecifier | (() => undefined | CodeIntelRepositorySummaryKeySpecifier),
		fields?: CodeIntelRepositorySummaryFieldPolicy,
	},
	CodeIntelRepositoryWithConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositoryWithConfigurationKeySpecifier | (() => undefined | CodeIntelRepositoryWithConfigurationKeySpecifier),
		fields?: CodeIntelRepositoryWithConfigurationFieldPolicy,
	},
	CodeIntelRepositoryWithConfigurationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositoryWithConfigurationConnectionKeySpecifier | (() => undefined | CodeIntelRepositoryWithConfigurationConnectionKeySpecifier),
		fields?: CodeIntelRepositoryWithConfigurationConnectionFieldPolicy,
	},
	CodeIntelRepositoryWithError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositoryWithErrorKeySpecifier | (() => undefined | CodeIntelRepositoryWithErrorKeySpecifier),
		fields?: CodeIntelRepositoryWithErrorFieldPolicy,
	},
	CodeIntelRepositoryWithErrorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelRepositoryWithErrorConnectionKeySpecifier | (() => undefined | CodeIntelRepositoryWithErrorConnectionKeySpecifier),
		fields?: CodeIntelRepositoryWithErrorConnectionFieldPolicy,
	},
	CodeIntelSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeIntelSummaryKeySpecifier | (() => undefined | CodeIntelSummaryKeySpecifier),
		fields?: CodeIntelSummaryFieldPolicy,
	},
	CodeownersFileEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeownersFileEntryKeySpecifier | (() => undefined | CodeownersFileEntryKeySpecifier),
		fields?: CodeownersFileEntryFieldPolicy,
	},
	CodeownersIngestedFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeownersIngestedFileKeySpecifier | (() => undefined | CodeownersIngestedFileKeySpecifier),
		fields?: CodeownersIngestedFileFieldPolicy,
	},
	CodeownersIngestedFileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeownersIngestedFileConnectionKeySpecifier | (() => undefined | CodeownersIngestedFileConnectionKeySpecifier),
		fields?: CodeownersIngestedFileConnectionFieldPolicy,
	},
	CodyConfigFeatures?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyConfigFeaturesKeySpecifier | (() => undefined | CodyConfigFeaturesKeySpecifier),
		fields?: CodyConfigFeaturesFieldPolicy,
	},
	CodyContextAlternativesResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyContextAlternativesResultKeySpecifier | (() => undefined | CodyContextAlternativesResultKeySpecifier),
		fields?: CodyContextAlternativesResultFieldPolicy,
	},
	CodyContextFilters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyContextFiltersKeySpecifier | (() => undefined | CodyContextFiltersKeySpecifier),
		fields?: CodyContextFiltersFieldPolicy,
	},
	CodyContextList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyContextListKeySpecifier | (() => undefined | CodyContextListKeySpecifier),
		fields?: CodyContextListFieldPolicy,
	},
	CodyGatewayAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyGatewayAccessKeySpecifier | (() => undefined | CodyGatewayAccessKeySpecifier),
		fields?: CodyGatewayAccessFieldPolicy,
	},
	CodyGatewayDotcomUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyGatewayDotcomUserKeySpecifier | (() => undefined | CodyGatewayDotcomUserKeySpecifier),
		fields?: CodyGatewayDotcomUserFieldPolicy,
	},
	CodyGatewayRateLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyGatewayRateLimitKeySpecifier | (() => undefined | CodyGatewayRateLimitKeySpecifier),
		fields?: CodyGatewayRateLimitFieldPolicy,
	},
	CodyGatewayRateLimitStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyGatewayRateLimitStatusKeySpecifier | (() => undefined | CodyGatewayRateLimitStatusKeySpecifier),
		fields?: CodyGatewayRateLimitStatusFieldPolicy,
	},
	CodyGatewayUsageDatapoint?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyGatewayUsageDatapointKeySpecifier | (() => undefined | CodyGatewayUsageDatapointKeySpecifier),
		fields?: CodyGatewayUsageDatapointFieldPolicy,
	},
	CodyLLMConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodyLLMConfigurationKeySpecifier | (() => undefined | CodyLLMConfigurationKeySpecifier),
		fields?: CodyLLMConfigurationFieldPolicy,
	},
	CodySubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodySubscriptionKeySpecifier | (() => undefined | CodySubscriptionKeySpecifier),
		fields?: CodySubscriptionFieldPolicy,
	},
	CommitSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitSearchResultKeySpecifier | (() => undefined | CommitSearchResultKeySpecifier),
		fields?: CommitSearchResultFieldPolicy,
	},
	ComputeEnvironmentEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComputeEnvironmentEntryKeySpecifier | (() => undefined | ComputeEnvironmentEntryKeySpecifier),
		fields?: ComputeEnvironmentEntryFieldPolicy,
	},
	ComputeMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComputeMatchKeySpecifier | (() => undefined | ComputeMatchKeySpecifier),
		fields?: ComputeMatchFieldPolicy,
	},
	ComputeMatchContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComputeMatchContextKeySpecifier | (() => undefined | ComputeMatchContextKeySpecifier),
		fields?: ComputeMatchContextFieldPolicy,
	},
	ComputeText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComputeTextKeySpecifier | (() => undefined | ComputeTextKeySpecifier),
		fields?: ComputeTextFieldPolicy,
	},
	Configuration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurationKeySpecifier | (() => undefined | ConfigurationKeySpecifier),
		fields?: ConfigurationFieldPolicy,
	},
	ConfigurationCascade?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurationCascadeKeySpecifier | (() => undefined | ConfigurationCascadeKeySpecifier),
		fields?: ConfigurationCascadeFieldPolicy,
	},
	Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionKeySpecifier | (() => undefined | ConnectionKeySpecifier),
		fields?: ConnectionFieldPolicy,
	},
	ConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionPageInfoKeySpecifier | (() => undefined | ConnectionPageInfoKeySpecifier),
		fields?: ConnectionPageInfoFieldPolicy,
	},
	CreateAccessTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAccessTokenResultKeySpecifier | (() => undefined | CreateAccessTokenResultKeySpecifier),
		fields?: CreateAccessTokenResultFieldPolicy,
	},
	CreateUserResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUserResultKeySpecifier | (() => undefined | CreateUserResultKeySpecifier),
		fields?: CreateUserResultFieldPolicy,
	},
	DefaultSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DefaultSettingsKeySpecifier | (() => undefined | DefaultSettingsKeySpecifier),
		fields?: DefaultSettingsFieldPolicy,
	},
	Diagnostic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiagnosticKeySpecifier | (() => undefined | DiagnosticKeySpecifier),
		fields?: DiagnosticFieldPolicy,
	},
	DiagnosticConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiagnosticConnectionKeySpecifier | (() => undefined | DiagnosticConnectionKeySpecifier),
		fields?: DiagnosticConnectionFieldPolicy,
	},
	Diff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiffKeySpecifier | (() => undefined | DiffKeySpecifier),
		fields?: DiffFieldPolicy,
	},
	DiffStat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiffStatKeySpecifier | (() => undefined | DiffStatKeySpecifier),
		fields?: DiffStatFieldPolicy,
	},
	DotcomMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DotcomMutationKeySpecifier | (() => undefined | DotcomMutationKeySpecifier),
		fields?: DotcomMutationFieldPolicy,
	},
	DotcomQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DotcomQueryKeySpecifier | (() => undefined | DotcomQueryKeySpecifier),
		fields?: DotcomQueryFieldPolicy,
	},
	EmbeddingsSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmbeddingsSearchResultKeySpecifier | (() => undefined | EmbeddingsSearchResultKeySpecifier),
		fields?: EmbeddingsSearchResultFieldPolicy,
	},
	EmbeddingsSearchResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmbeddingsSearchResultsKeySpecifier | (() => undefined | EmbeddingsSearchResultsKeySpecifier),
		fields?: EmbeddingsSearchResultsFieldPolicy,
	},
	EmptyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmptyResponseKeySpecifier | (() => undefined | EmptyResponseKeySpecifier),
		fields?: EmptyResponseFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	ErrorExtensions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorExtensionsKeySpecifier | (() => undefined | ErrorExtensionsKeySpecifier),
		fields?: ErrorExtensionsFieldPolicy,
	},
	EvaluatedFeatureFlag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvaluatedFeatureFlagKeySpecifier | (() => undefined | EvaluatedFeatureFlagKeySpecifier),
		fields?: EvaluatedFeatureFlagFieldPolicy,
	},
	EventLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLogKeySpecifier | (() => undefined | EventLogKeySpecifier),
		fields?: EventLogFieldPolicy,
	},
	EventLogsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLogsConnectionKeySpecifier | (() => undefined | EventLogsConnectionKeySpecifier),
		fields?: EventLogsConnectionFieldPolicy,
	},
	ExecutionLogEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutionLogEntryKeySpecifier | (() => undefined | ExecutionLogEntryKeySpecifier),
		fields?: ExecutionLogEntryFieldPolicy,
	},
	Executor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorKeySpecifier | (() => undefined | ExecutorKeySpecifier),
		fields?: ExecutorFieldPolicy,
	},
	ExecutorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorConnectionKeySpecifier | (() => undefined | ExecutorConnectionKeySpecifier),
		fields?: ExecutorConnectionFieldPolicy,
	},
	ExecutorSecret?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorSecretKeySpecifier | (() => undefined | ExecutorSecretKeySpecifier),
		fields?: ExecutorSecretFieldPolicy,
	},
	ExecutorSecretAccessLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorSecretAccessLogKeySpecifier | (() => undefined | ExecutorSecretAccessLogKeySpecifier),
		fields?: ExecutorSecretAccessLogFieldPolicy,
	},
	ExecutorSecretAccessLogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorSecretAccessLogConnectionKeySpecifier | (() => undefined | ExecutorSecretAccessLogConnectionKeySpecifier),
		fields?: ExecutorSecretAccessLogConnectionFieldPolicy,
	},
	ExecutorSecretConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecutorSecretConnectionKeySpecifier | (() => undefined | ExecutorSecretConnectionKeySpecifier),
		fields?: ExecutorSecretConnectionFieldPolicy,
	},
	ExhaustiveSearchAggregationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExhaustiveSearchAggregationResultKeySpecifier | (() => undefined | ExhaustiveSearchAggregationResultKeySpecifier),
		fields?: ExhaustiveSearchAggregationResultFieldPolicy,
	},
	ExistingChangesetReference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExistingChangesetReferenceKeySpecifier | (() => undefined | ExistingChangesetReferenceKeySpecifier),
		fields?: ExistingChangesetReferenceFieldPolicy,
	},
	ExportedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportedEventKeySpecifier | (() => undefined | ExportedEventKeySpecifier),
		fields?: ExportedEventFieldPolicy,
	},
	ExportedEventsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportedEventsConnectionKeySpecifier | (() => undefined | ExportedEventsConnectionKeySpecifier),
		fields?: ExportedEventsConnectionFieldPolicy,
	},
	ExternalAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalAccountKeySpecifier | (() => undefined | ExternalAccountKeySpecifier),
		fields?: ExternalAccountFieldPolicy,
	},
	ExternalAccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalAccountConnectionKeySpecifier | (() => undefined | ExternalAccountConnectionKeySpecifier),
		fields?: ExternalAccountConnectionFieldPolicy,
	},
	ExternalChangeset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalChangesetKeySpecifier | (() => undefined | ExternalChangesetKeySpecifier),
		fields?: ExternalChangesetFieldPolicy,
	},
	ExternalLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalLinkKeySpecifier | (() => undefined | ExternalLinkKeySpecifier),
		fields?: ExternalLinkFieldPolicy,
	},
	ExternalRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalRepositoryKeySpecifier | (() => undefined | ExternalRepositoryKeySpecifier),
		fields?: ExternalRepositoryFieldPolicy,
	},
	ExternalService?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceKeySpecifier | (() => undefined | ExternalServiceKeySpecifier),
		fields?: ExternalServiceFieldPolicy,
	},
	ExternalServiceAvailabilityUnknown?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceAvailabilityUnknownKeySpecifier | (() => undefined | ExternalServiceAvailabilityUnknownKeySpecifier),
		fields?: ExternalServiceAvailabilityUnknownFieldPolicy,
	},
	ExternalServiceAvailable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceAvailableKeySpecifier | (() => undefined | ExternalServiceAvailableKeySpecifier),
		fields?: ExternalServiceAvailableFieldPolicy,
	},
	ExternalServiceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceConnectionKeySpecifier | (() => undefined | ExternalServiceConnectionKeySpecifier),
		fields?: ExternalServiceConnectionFieldPolicy,
	},
	ExternalServiceNamespace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceNamespaceKeySpecifier | (() => undefined | ExternalServiceNamespaceKeySpecifier),
		fields?: ExternalServiceNamespaceFieldPolicy,
	},
	ExternalServiceNamespaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceNamespaceConnectionKeySpecifier | (() => undefined | ExternalServiceNamespaceConnectionKeySpecifier),
		fields?: ExternalServiceNamespaceConnectionFieldPolicy,
	},
	ExternalServiceRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceRepositoryKeySpecifier | (() => undefined | ExternalServiceRepositoryKeySpecifier),
		fields?: ExternalServiceRepositoryFieldPolicy,
	},
	ExternalServiceRepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceRepositoryConnectionKeySpecifier | (() => undefined | ExternalServiceRepositoryConnectionKeySpecifier),
		fields?: ExternalServiceRepositoryConnectionFieldPolicy,
	},
	ExternalServiceSyncError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceSyncErrorKeySpecifier | (() => undefined | ExternalServiceSyncErrorKeySpecifier),
		fields?: ExternalServiceSyncErrorFieldPolicy,
	},
	ExternalServiceSyncJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceSyncJobKeySpecifier | (() => undefined | ExternalServiceSyncJobKeySpecifier),
		fields?: ExternalServiceSyncJobFieldPolicy,
	},
	ExternalServiceSyncJobConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceSyncJobConnectionKeySpecifier | (() => undefined | ExternalServiceSyncJobConnectionKeySpecifier),
		fields?: ExternalServiceSyncJobConnectionFieldPolicy,
	},
	ExternalServiceUnavailable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalServiceUnavailableKeySpecifier | (() => undefined | ExternalServiceUnavailableKeySpecifier),
		fields?: ExternalServiceUnavailableFieldPolicy,
	},
	FeatureFlagBoolean?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeatureFlagBooleanKeySpecifier | (() => undefined | FeatureFlagBooleanKeySpecifier),
		fields?: FeatureFlagBooleanFieldPolicy,
	},
	FeatureFlagOverride?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeatureFlagOverrideKeySpecifier | (() => undefined | FeatureFlagOverrideKeySpecifier),
		fields?: FeatureFlagOverrideFieldPolicy,
	},
	FeatureFlagRollout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeatureFlagRolloutKeySpecifier | (() => undefined | FeatureFlagRolloutKeySpecifier),
		fields?: FeatureFlagRolloutFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	File2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File2KeySpecifier | (() => undefined | File2KeySpecifier),
		fields?: File2FieldPolicy,
	},
	FileBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBlockKeySpecifier | (() => undefined | FileBlockKeySpecifier),
		fields?: FileBlockFieldPolicy,
	},
	FileBlockInput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBlockInputKeySpecifier | (() => undefined | FileBlockInputKeySpecifier),
		fields?: FileBlockInputFieldPolicy,
	},
	FileBlockLineRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBlockLineRangeKeySpecifier | (() => undefined | FileBlockLineRangeKeySpecifier),
		fields?: FileBlockLineRangeFieldPolicy,
	},
	FileChunkContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileChunkContextKeySpecifier | (() => undefined | FileChunkContextKeySpecifier),
		fields?: FileChunkContextFieldPolicy,
	},
	FileDiff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileDiffKeySpecifier | (() => undefined | FileDiffKeySpecifier),
		fields?: FileDiffFieldPolicy,
	},
	FileDiffConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileDiffConnectionKeySpecifier | (() => undefined | FileDiffConnectionKeySpecifier),
		fields?: FileDiffConnectionFieldPolicy,
	},
	FileDiffHunk?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileDiffHunkKeySpecifier | (() => undefined | FileDiffHunkKeySpecifier),
		fields?: FileDiffHunkFieldPolicy,
	},
	FileDiffHunkRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileDiffHunkRangeKeySpecifier | (() => undefined | FileDiffHunkRangeKeySpecifier),
		fields?: FileDiffHunkRangeFieldPolicy,
	},
	FileMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileMatchKeySpecifier | (() => undefined | FileMatchKeySpecifier),
		fields?: FileMatchFieldPolicy,
	},
	ForkTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForkTargetKeySpecifier | (() => undefined | ForkTargetKeySpecifier),
		fields?: ForkTargetFieldPolicy,
	},
	GenericIncompleteDatapointAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericIncompleteDatapointAlertKeySpecifier | (() => undefined | GenericIncompleteDatapointAlertKeySpecifier),
		fields?: GenericIncompleteDatapointAlertFieldPolicy,
	},
	GenericSearchResultInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericSearchResultInterfaceKeySpecifier | (() => undefined | GenericSearchResultInterfaceKeySpecifier),
		fields?: GenericSearchResultInterfaceFieldPolicy,
	},
	GitBlob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitBlobKeySpecifier | (() => undefined | GitBlobKeySpecifier),
		fields?: GitBlobFieldPolicy,
	},
	GitBlobLSIFData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitBlobLSIFDataKeySpecifier | (() => undefined | GitBlobLSIFDataKeySpecifier),
		fields?: GitBlobLSIFDataFieldPolicy,
	},
	GitBranchChangesetDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitBranchChangesetDescriptionKeySpecifier | (() => undefined | GitBranchChangesetDescriptionKeySpecifier),
		fields?: GitBranchChangesetDescriptionFieldPolicy,
	},
	GitCommit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitCommitKeySpecifier | (() => undefined | GitCommitKeySpecifier),
		fields?: GitCommitFieldPolicy,
	},
	GitCommitConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitCommitConnectionKeySpecifier | (() => undefined | GitCommitConnectionKeySpecifier),
		fields?: GitCommitConnectionFieldPolicy,
	},
	GitCommitDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitCommitDescriptionKeySpecifier | (() => undefined | GitCommitDescriptionKeySpecifier),
		fields?: GitCommitDescriptionFieldPolicy,
	},
	GitHubAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitHubAccountKeySpecifier | (() => undefined | GitHubAccountKeySpecifier),
		fields?: GitHubAccountFieldPolicy,
	},
	GitHubApp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitHubAppKeySpecifier | (() => undefined | GitHubAppKeySpecifier),
		fields?: GitHubAppFieldPolicy,
	},
	GitHubAppConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitHubAppConnectionKeySpecifier | (() => undefined | GitHubAppConnectionKeySpecifier),
		fields?: GitHubAppConnectionFieldPolicy,
	},
	GitHubCommitVerification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitHubCommitVerificationKeySpecifier | (() => undefined | GitHubCommitVerificationKeySpecifier),
		fields?: GitHubCommitVerificationFieldPolicy,
	},
	GitObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitObjectKeySpecifier | (() => undefined | GitObjectKeySpecifier),
		fields?: GitObjectFieldPolicy,
	},
	GitObjectFilterPreview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitObjectFilterPreviewKeySpecifier | (() => undefined | GitObjectFilterPreviewKeySpecifier),
		fields?: GitObjectFilterPreviewFieldPolicy,
	},
	GitRef?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitRefKeySpecifier | (() => undefined | GitRefKeySpecifier),
		fields?: GitRefFieldPolicy,
	},
	GitRefConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitRefConnectionKeySpecifier | (() => undefined | GitRefConnectionKeySpecifier),
		fields?: GitRefConnectionFieldPolicy,
	},
	GitRevisionRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitRevisionRangeKeySpecifier | (() => undefined | GitRevisionRangeKeySpecifier),
		fields?: GitRevisionRangeFieldPolicy,
	},
	GitRevSpecExpr?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitRevSpecExprKeySpecifier | (() => undefined | GitRevSpecExprKeySpecifier),
		fields?: GitRevSpecExprFieldPolicy,
	},
	GitserverDiskThresholdReached?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitserverDiskThresholdReachedKeySpecifier | (() => undefined | GitserverDiskThresholdReachedKeySpecifier),
		fields?: GitserverDiskThresholdReachedFieldPolicy,
	},
	GitserverInstance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitserverInstanceKeySpecifier | (() => undefined | GitserverInstanceKeySpecifier),
		fields?: GitserverInstanceFieldPolicy,
	},
	GitserverInstanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitserverInstanceConnectionKeySpecifier | (() => undefined | GitserverInstanceConnectionKeySpecifier),
		fields?: GitserverInstanceConnectionFieldPolicy,
	},
	GitTree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitTreeKeySpecifier | (() => undefined | GitTreeKeySpecifier),
		fields?: GitTreeFieldPolicy,
	},
	GitTreeLSIFData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitTreeLSIFDataKeySpecifier | (() => undefined | GitTreeLSIFDataKeySpecifier),
		fields?: GitTreeLSIFDataFieldPolicy,
	},
	GitUpdatesDisabled?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitUpdatesDisabledKeySpecifier | (() => undefined | GitUpdatesDisabledKeySpecifier),
		fields?: GitUpdatesDisabledFieldPolicy,
	},
	GlobalChangesetsStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalChangesetsStatsKeySpecifier | (() => undefined | GlobalChangesetsStatsKeySpecifier),
		fields?: GlobalChangesetsStatsFieldPolicy,
	},
	GlobalRankingSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalRankingSummaryKeySpecifier | (() => undefined | GlobalRankingSummaryKeySpecifier),
		fields?: GlobalRankingSummaryFieldPolicy,
	},
	HiddenApplyPreviewTargetsAttach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenApplyPreviewTargetsAttachKeySpecifier | (() => undefined | HiddenApplyPreviewTargetsAttachKeySpecifier),
		fields?: HiddenApplyPreviewTargetsAttachFieldPolicy,
	},
	HiddenApplyPreviewTargetsDetach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenApplyPreviewTargetsDetachKeySpecifier | (() => undefined | HiddenApplyPreviewTargetsDetachKeySpecifier),
		fields?: HiddenApplyPreviewTargetsDetachFieldPolicy,
	},
	HiddenApplyPreviewTargetsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenApplyPreviewTargetsUpdateKeySpecifier | (() => undefined | HiddenApplyPreviewTargetsUpdateKeySpecifier),
		fields?: HiddenApplyPreviewTargetsUpdateFieldPolicy,
	},
	HiddenBatchSpecWorkspace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenBatchSpecWorkspaceKeySpecifier | (() => undefined | HiddenBatchSpecWorkspaceKeySpecifier),
		fields?: HiddenBatchSpecWorkspaceFieldPolicy,
	},
	HiddenChangesetApplyPreview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenChangesetApplyPreviewKeySpecifier | (() => undefined | HiddenChangesetApplyPreviewKeySpecifier),
		fields?: HiddenChangesetApplyPreviewFieldPolicy,
	},
	HiddenChangesetSpec?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenChangesetSpecKeySpecifier | (() => undefined | HiddenChangesetSpecKeySpecifier),
		fields?: HiddenChangesetSpecFieldPolicy,
	},
	HiddenExternalChangeset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HiddenExternalChangesetKeySpecifier | (() => undefined | HiddenExternalChangesetKeySpecifier),
		fields?: HiddenExternalChangesetFieldPolicy,
	},
	Highlight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HighlightKeySpecifier | (() => undefined | HighlightKeySpecifier),
		fields?: HighlightFieldPolicy,
	},
	HighlightedDiffHunkBody?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HighlightedDiffHunkBodyKeySpecifier | (() => undefined | HighlightedDiffHunkBodyKeySpecifier),
		fields?: HighlightedDiffHunkBodyFieldPolicy,
	},
	HighlightedDiffHunkLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HighlightedDiffHunkLineKeySpecifier | (() => undefined | HighlightedDiffHunkLineKeySpecifier),
		fields?: HighlightedDiffHunkLineFieldPolicy,
	},
	HighlightedFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HighlightedFileKeySpecifier | (() => undefined | HighlightedFileKeySpecifier),
		fields?: HighlightedFileFieldPolicy,
	},
	HighlightedString?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HighlightedStringKeySpecifier | (() => undefined | HighlightedStringKeySpecifier),
		fields?: HighlightedStringFieldPolicy,
	},
	Hover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HoverKeySpecifier | (() => undefined | HoverKeySpecifier),
		fields?: HoverFieldPolicy,
	},
	HTTPHeader?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HTTPHeaderKeySpecifier | (() => undefined | HTTPHeaderKeySpecifier),
		fields?: HTTPHeaderFieldPolicy,
	},
	Hunk?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HunkKeySpecifier | (() => undefined | HunkKeySpecifier),
		fields?: HunkFieldPolicy,
	},
	IncompleteDatapointAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncompleteDatapointAlertKeySpecifier | (() => undefined | IncompleteDatapointAlertKeySpecifier),
		fields?: IncompleteDatapointAlertFieldPolicy,
	},
	IndexConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexConfigurationKeySpecifier | (() => undefined | IndexConfigurationKeySpecifier),
		fields?: IndexConfigurationFieldPolicy,
	},
	IndexedSearchInstance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexedSearchInstanceKeySpecifier | (() => undefined | IndexedSearchInstanceKeySpecifier),
		fields?: IndexedSearchInstanceFieldPolicy,
	},
	IndexedSearchInstanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexedSearchInstanceConnectionKeySpecifier | (() => undefined | IndexedSearchInstanceConnectionKeySpecifier),
		fields?: IndexedSearchInstanceConnectionFieldPolicy,
	},
	IndexerWithCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexerWithCountKeySpecifier | (() => undefined | IndexerWithCountKeySpecifier),
		fields?: IndexerWithCountFieldPolicy,
	},
	IndexingProgress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexingProgressKeySpecifier | (() => undefined | IndexingProgressKeySpecifier),
		fields?: IndexingProgressFieldPolicy,
	},
	IndexStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexStepKeySpecifier | (() => undefined | IndexStepKeySpecifier),
		fields?: IndexStepFieldPolicy,
	},
	IndexSteps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndexStepsKeySpecifier | (() => undefined | IndexStepsKeySpecifier),
		fields?: IndexStepsFieldPolicy,
	},
	InferAutoIndexJobsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InferAutoIndexJobsResultKeySpecifier | (() => undefined | InferAutoIndexJobsResultKeySpecifier),
		fields?: InferAutoIndexJobsResultFieldPolicy,
	},
	InferredAvailableIndexers?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InferredAvailableIndexersKeySpecifier | (() => undefined | InferredAvailableIndexersKeySpecifier),
		fields?: InferredAvailableIndexersFieldPolicy,
	},
	InferredConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InferredConfigurationKeySpecifier | (() => undefined | InferredConfigurationKeySpecifier),
		fields?: InferredConfigurationFieldPolicy,
	},
	Insight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightKeySpecifier | (() => undefined | InsightKeySpecifier),
		fields?: InsightFieldPolicy,
	},
	InsightBackfillQueueItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightBackfillQueueItemKeySpecifier | (() => undefined | InsightBackfillQueueItemKeySpecifier),
		fields?: InsightBackfillQueueItemFieldPolicy,
	},
	InsightBackfillQueueItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightBackfillQueueItemConnectionKeySpecifier | (() => undefined | InsightBackfillQueueItemConnectionKeySpecifier),
		fields?: InsightBackfillQueueItemConnectionFieldPolicy,
	},
	InsightDataPoint?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightDataPointKeySpecifier | (() => undefined | InsightDataPointKeySpecifier),
		fields?: InsightDataPointFieldPolicy,
	},
	InsightIntervalTimeScope?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightIntervalTimeScopeKeySpecifier | (() => undefined | InsightIntervalTimeScopeKeySpecifier),
		fields?: InsightIntervalTimeScopeFieldPolicy,
	},
	InsightRepositoryScope?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightRepositoryScopeKeySpecifier | (() => undefined | InsightRepositoryScopeKeySpecifier),
		fields?: InsightRepositoryScopeFieldPolicy,
	},
	InsightsDashboard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightsDashboardKeySpecifier | (() => undefined | InsightsDashboardKeySpecifier),
		fields?: InsightsDashboardFieldPolicy,
	},
	InsightsDashboardConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightsDashboardConnectionKeySpecifier | (() => undefined | InsightsDashboardConnectionKeySpecifier),
		fields?: InsightsDashboardConnectionFieldPolicy,
	},
	InsightsDashboardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightsDashboardPayloadKeySpecifier | (() => undefined | InsightsDashboardPayloadKeySpecifier),
		fields?: InsightsDashboardPayloadFieldPolicy,
	},
	InsightSeriesMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightSeriesMetadataKeySpecifier | (() => undefined | InsightSeriesMetadataKeySpecifier),
		fields?: InsightSeriesMetadataFieldPolicy,
	},
	InsightSeriesMetadataPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightSeriesMetadataPayloadKeySpecifier | (() => undefined | InsightSeriesMetadataPayloadKeySpecifier),
		fields?: InsightSeriesMetadataPayloadFieldPolicy,
	},
	InsightSeriesQueryStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightSeriesQueryStatusKeySpecifier | (() => undefined | InsightSeriesQueryStatusKeySpecifier),
		fields?: InsightSeriesQueryStatusFieldPolicy,
	},
	InsightSeriesStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightSeriesStatusKeySpecifier | (() => undefined | InsightSeriesStatusKeySpecifier),
		fields?: InsightSeriesStatusFieldPolicy,
	},
	InsightsPermissionGrants?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightsPermissionGrantsKeySpecifier | (() => undefined | InsightsPermissionGrantsKeySpecifier),
		fields?: InsightsPermissionGrantsFieldPolicy,
	},
	InsightsSeries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightsSeriesKeySpecifier | (() => undefined | InsightsSeriesKeySpecifier),
		fields?: InsightsSeriesFieldPolicy,
	},
	InsightView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightViewKeySpecifier | (() => undefined | InsightViewKeySpecifier),
		fields?: InsightViewFieldPolicy,
	},
	InsightViewConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightViewConnectionKeySpecifier | (() => undefined | InsightViewConnectionKeySpecifier),
		fields?: InsightViewConnectionFieldPolicy,
	},
	InsightViewDebug?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightViewDebugKeySpecifier | (() => undefined | InsightViewDebugKeySpecifier),
		fields?: InsightViewDebugFieldPolicy,
	},
	InsightViewFilters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightViewFiltersKeySpecifier | (() => undefined | InsightViewFiltersKeySpecifier),
		fields?: InsightViewFiltersFieldPolicy,
	},
	InsightViewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InsightViewPayloadKeySpecifier | (() => undefined | InsightViewPayloadKeySpecifier),
		fields?: InsightViewPayloadFieldPolicy,
	},
	Installation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstallationKeySpecifier | (() => undefined | InstallationKeySpecifier),
		fields?: InstallationFieldPolicy,
	},
	InviteUserToOrganizationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InviteUserToOrganizationResultKeySpecifier | (() => undefined | InviteUserToOrganizationResultKeySpecifier),
		fields?: InviteUserToOrganizationResultFieldPolicy,
	},
	KeyValuePair?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValuePairKeySpecifier | (() => undefined | KeyValuePairKeySpecifier),
		fields?: KeyValuePairFieldPolicy,
	},
	Language?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageKeySpecifier | (() => undefined | LanguageKeySpecifier),
		fields?: LanguageFieldPolicy,
	},
	LanguageStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageStatisticsKeySpecifier | (() => undefined | LanguageStatisticsKeySpecifier),
		fields?: LanguageStatisticsFieldPolicy,
	},
	LFS?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LFSKeySpecifier | (() => undefined | LFSKeySpecifier),
		fields?: LFSFieldPolicy,
	},
	LicenseInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LicenseInfoKeySpecifier | (() => undefined | LicenseInfoKeySpecifier),
		fields?: LicenseInfoFieldPolicy,
	},
	LineChartDataSeriesPresentation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineChartDataSeriesPresentationKeySpecifier | (() => undefined | LineChartDataSeriesPresentationKeySpecifier),
		fields?: LineChartDataSeriesPresentationFieldPolicy,
	},
	LineChartInsightViewPresentation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineChartInsightViewPresentationKeySpecifier | (() => undefined | LineChartInsightViewPresentationKeySpecifier),
		fields?: LineChartInsightViewPresentationFieldPolicy,
	},
	LineMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineMatchKeySpecifier | (() => undefined | LineMatchKeySpecifier),
		fields?: LineMatchFieldPolicy,
	},
	LineRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineRangeKeySpecifier | (() => undefined | LineRangeKeySpecifier),
		fields?: LineRangeFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationConnectionKeySpecifier | (() => undefined | LocationConnectionKeySpecifier),
		fields?: LocationConnectionFieldPolicy,
	},
	LSIFUploadAuditLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LSIFUploadAuditLogKeySpecifier | (() => undefined | LSIFUploadAuditLogKeySpecifier),
		fields?: LSIFUploadAuditLogFieldPolicy,
	},
	Markdown?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkdownKeySpecifier | (() => undefined | MarkdownKeySpecifier),
		fields?: MarkdownFieldPolicy,
	},
	MarkdownBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkdownBlockKeySpecifier | (() => undefined | MarkdownBlockKeySpecifier),
		fields?: MarkdownBlockFieldPolicy,
	},
	MirrorRepositoryInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MirrorRepositoryInfoKeySpecifier | (() => undefined | MirrorRepositoryInfoKeySpecifier),
		fields?: MirrorRepositoryInfoFieldPolicy,
	},
	Monitor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorKeySpecifier | (() => undefined | MonitorKeySpecifier),
		fields?: MonitorFieldPolicy,
	},
	MonitorActionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorActionConnectionKeySpecifier | (() => undefined | MonitorActionConnectionKeySpecifier),
		fields?: MonitorActionConnectionFieldPolicy,
	},
	MonitorActionEmailRecipientsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorActionEmailRecipientsConnectionKeySpecifier | (() => undefined | MonitorActionEmailRecipientsConnectionKeySpecifier),
		fields?: MonitorActionEmailRecipientsConnectionFieldPolicy,
	},
	MonitorActionEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorActionEventKeySpecifier | (() => undefined | MonitorActionEventKeySpecifier),
		fields?: MonitorActionEventFieldPolicy,
	},
	MonitorActionEventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorActionEventConnectionKeySpecifier | (() => undefined | MonitorActionEventConnectionKeySpecifier),
		fields?: MonitorActionEventConnectionFieldPolicy,
	},
	MonitorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorConnectionKeySpecifier | (() => undefined | MonitorConnectionKeySpecifier),
		fields?: MonitorConnectionFieldPolicy,
	},
	MonitorEmail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorEmailKeySpecifier | (() => undefined | MonitorEmailKeySpecifier),
		fields?: MonitorEmailFieldPolicy,
	},
	MonitoringAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitoringAlertKeySpecifier | (() => undefined | MonitoringAlertKeySpecifier),
		fields?: MonitoringAlertFieldPolicy,
	},
	MonitoringStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitoringStatisticsKeySpecifier | (() => undefined | MonitoringStatisticsKeySpecifier),
		fields?: MonitoringStatisticsFieldPolicy,
	},
	MonitorQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorQueryKeySpecifier | (() => undefined | MonitorQueryKeySpecifier),
		fields?: MonitorQueryFieldPolicy,
	},
	MonitorSlackWebhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorSlackWebhookKeySpecifier | (() => undefined | MonitorSlackWebhookKeySpecifier),
		fields?: MonitorSlackWebhookFieldPolicy,
	},
	MonitorTriggerEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorTriggerEventKeySpecifier | (() => undefined | MonitorTriggerEventKeySpecifier),
		fields?: MonitorTriggerEventFieldPolicy,
	},
	MonitorTriggerEventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorTriggerEventConnectionKeySpecifier | (() => undefined | MonitorTriggerEventConnectionKeySpecifier),
		fields?: MonitorTriggerEventConnectionFieldPolicy,
	},
	MonitorWebhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MonitorWebhookKeySpecifier | (() => undefined | MonitorWebhookKeySpecifier),
		fields?: MonitorWebhookFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Namespace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NamespaceKeySpecifier | (() => undefined | NamespaceKeySpecifier),
		fields?: NamespaceFieldPolicy,
	},
	NamespaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NamespaceConnectionKeySpecifier | (() => undefined | NamespaceConnectionKeySpecifier),
		fields?: NamespaceConnectionFieldPolicy,
	},
	NewRepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewRepositoryConnectionKeySpecifier | (() => undefined | NewRepositoryConnectionKeySpecifier),
		fields?: NewRepositoryConnectionFieldPolicy,
	},
	NewUsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewUsersConnectionKeySpecifier | (() => undefined | NewUsersConnectionKeySpecifier),
		fields?: NewUsersConnectionFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	NonExhaustiveSearchAggregationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NonExhaustiveSearchAggregationResultKeySpecifier | (() => undefined | NonExhaustiveSearchAggregationResultKeySpecifier),
		fields?: NonExhaustiveSearchAggregationResultFieldPolicy,
	},
	NoRepositoriesDetected?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoRepositoriesDetectedKeySpecifier | (() => undefined | NoRepositoriesDetectedKeySpecifier),
		fields?: NoRepositoriesDetectedFieldPolicy,
	},
	Notebook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotebookKeySpecifier | (() => undefined | NotebookKeySpecifier),
		fields?: NotebookFieldPolicy,
	},
	NotebookConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotebookConnectionKeySpecifier | (() => undefined | NotebookConnectionKeySpecifier),
		fields?: NotebookConnectionFieldPolicy,
	},
	NotebookStar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotebookStarKeySpecifier | (() => undefined | NotebookStarKeySpecifier),
		fields?: NotebookStarFieldPolicy,
	},
	NotebookStarConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotebookStarConnectionKeySpecifier | (() => undefined | NotebookStarConnectionKeySpecifier),
		fields?: NotebookStarConnectionFieldPolicy,
	},
	OnboardingTour?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnboardingTourKeySpecifier | (() => undefined | OnboardingTourKeySpecifier),
		fields?: OnboardingTourFieldPolicy,
	},
	OnboardingTourContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnboardingTourContentKeySpecifier | (() => undefined | OnboardingTourContentKeySpecifier),
		fields?: OnboardingTourContentFieldPolicy,
	},
	Org?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgKeySpecifier | (() => undefined | OrgKeySpecifier),
		fields?: OrgFieldPolicy,
	},
	OrganizationInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationInvitationKeySpecifier | (() => undefined | OrganizationInvitationKeySpecifier),
		fields?: OrganizationInvitationFieldPolicy,
	},
	OrganizationMembership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMembershipKeySpecifier | (() => undefined | OrganizationMembershipKeySpecifier),
		fields?: OrganizationMembershipFieldPolicy,
	},
	OrganizationMembershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMembershipConnectionKeySpecifier | (() => undefined | OrganizationMembershipConnectionKeySpecifier),
		fields?: OrganizationMembershipConnectionFieldPolicy,
	},
	OrgConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgConnectionKeySpecifier | (() => undefined | OrgConnectionKeySpecifier),
		fields?: OrgConnectionFieldPolicy,
	},
	OutboundRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundRequestKeySpecifier | (() => undefined | OutboundRequestKeySpecifier),
		fields?: OutboundRequestFieldPolicy,
	},
	OutboundRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundRequestConnectionKeySpecifier | (() => undefined | OutboundRequestConnectionKeySpecifier),
		fields?: OutboundRequestConnectionFieldPolicy,
	},
	OutboundWebhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookKeySpecifier | (() => undefined | OutboundWebhookKeySpecifier),
		fields?: OutboundWebhookFieldPolicy,
	},
	OutboundWebhookConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookConnectionKeySpecifier | (() => undefined | OutboundWebhookConnectionKeySpecifier),
		fields?: OutboundWebhookConnectionFieldPolicy,
	},
	OutboundWebhookEventType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookEventTypeKeySpecifier | (() => undefined | OutboundWebhookEventTypeKeySpecifier),
		fields?: OutboundWebhookEventTypeFieldPolicy,
	},
	OutboundWebhookJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookJobKeySpecifier | (() => undefined | OutboundWebhookJobKeySpecifier),
		fields?: OutboundWebhookJobFieldPolicy,
	},
	OutboundWebhookLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookLogKeySpecifier | (() => undefined | OutboundWebhookLogKeySpecifier),
		fields?: OutboundWebhookLogFieldPolicy,
	},
	OutboundWebhookLogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookLogConnectionKeySpecifier | (() => undefined | OutboundWebhookLogConnectionKeySpecifier),
		fields?: OutboundWebhookLogConnectionFieldPolicy,
	},
	OutboundWebhookLogStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookLogStatsKeySpecifier | (() => undefined | OutboundWebhookLogStatsKeySpecifier),
		fields?: OutboundWebhookLogStatsFieldPolicy,
	},
	OutboundWebhookScopedEventType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutboundWebhookScopedEventTypeKeySpecifier | (() => undefined | OutboundWebhookScopedEventTypeKeySpecifier),
		fields?: OutboundWebhookScopedEventTypeFieldPolicy,
	},
	OutOfBandMigration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutOfBandMigrationKeySpecifier | (() => undefined | OutOfBandMigrationKeySpecifier),
		fields?: OutOfBandMigrationFieldPolicy,
	},
	OutOfBandMigrationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OutOfBandMigrationErrorKeySpecifier | (() => undefined | OutOfBandMigrationErrorKeySpecifier),
		fields?: OutOfBandMigrationErrorFieldPolicy,
	},
	Ownable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnableKeySpecifier | (() => undefined | OwnableKeySpecifier),
		fields?: OwnableFieldPolicy,
	},
	Ownership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnershipKeySpecifier | (() => undefined | OwnershipKeySpecifier),
		fields?: OwnershipFieldPolicy,
	},
	OwnershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnershipConnectionKeySpecifier | (() => undefined | OwnershipConnectionKeySpecifier),
		fields?: OwnershipConnectionFieldPolicy,
	},
	OwnershipStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnershipStatsKeySpecifier | (() => undefined | OwnershipStatsKeySpecifier),
		fields?: OwnershipStatsFieldPolicy,
	},
	OwnSignalConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnSignalConfigurationKeySpecifier | (() => undefined | OwnSignalConfigurationKeySpecifier),
		fields?: OwnSignalConfigurationFieldPolicy,
	},
	PackageFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageFilterKeySpecifier | (() => undefined | PackageFilterKeySpecifier),
		fields?: PackageFilterFieldPolicy,
	},
	PackageNameFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageNameFilterKeySpecifier | (() => undefined | PackageNameFilterKeySpecifier),
		fields?: PackageNameFilterFieldPolicy,
	},
	PackageRepoReference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageRepoReferenceKeySpecifier | (() => undefined | PackageRepoReferenceKeySpecifier),
		fields?: PackageRepoReferenceFieldPolicy,
	},
	PackageRepoReferenceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageRepoReferenceConnectionKeySpecifier | (() => undefined | PackageRepoReferenceConnectionKeySpecifier),
		fields?: PackageRepoReferenceConnectionFieldPolicy,
	},
	PackageRepoReferenceVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageRepoReferenceVersionKeySpecifier | (() => undefined | PackageRepoReferenceVersionKeySpecifier),
		fields?: PackageRepoReferenceVersionFieldPolicy,
	},
	PackageRepoReferenceVersionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageRepoReferenceVersionConnectionKeySpecifier | (() => undefined | PackageRepoReferenceVersionConnectionKeySpecifier),
		fields?: PackageRepoReferenceVersionConnectionFieldPolicy,
	},
	PackageVersionFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageVersionFilterKeySpecifier | (() => undefined | PackageVersionFilterKeySpecifier),
		fields?: PackageVersionFilterFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	ParentSourcegraphDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParentSourcegraphDetailsKeySpecifier | (() => undefined | ParentSourcegraphDetailsKeySpecifier),
		fields?: ParentSourcegraphDetailsFieldPolicy,
	},
	PerforceChangelist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PerforceChangelistKeySpecifier | (() => undefined | PerforceChangelistKeySpecifier),
		fields?: PerforceChangelistFieldPolicy,
	},
	Permission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionKeySpecifier | (() => undefined | PermissionKeySpecifier),
		fields?: PermissionFieldPolicy,
	},
	PermissionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionConnectionKeySpecifier | (() => undefined | PermissionConnectionKeySpecifier),
		fields?: PermissionConnectionFieldPolicy,
	},
	PermissionsInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsInfoKeySpecifier | (() => undefined | PermissionsInfoKeySpecifier),
		fields?: PermissionsInfoFieldPolicy,
	},
	PermissionsInfoRepositoriesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsInfoRepositoriesConnectionKeySpecifier | (() => undefined | PermissionsInfoRepositoriesConnectionKeySpecifier),
		fields?: PermissionsInfoRepositoriesConnectionFieldPolicy,
	},
	PermissionsInfoRepositoryNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsInfoRepositoryNodeKeySpecifier | (() => undefined | PermissionsInfoRepositoryNodeKeySpecifier),
		fields?: PermissionsInfoRepositoryNodeFieldPolicy,
	},
	PermissionsInfoUserNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsInfoUserNodeKeySpecifier | (() => undefined | PermissionsInfoUserNodeKeySpecifier),
		fields?: PermissionsInfoUserNodeFieldPolicy,
	},
	PermissionsInfoUsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsInfoUsersConnectionKeySpecifier | (() => undefined | PermissionsInfoUsersConnectionKeySpecifier),
		fields?: PermissionsInfoUsersConnectionFieldPolicy,
	},
	PermissionsSyncingStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsSyncingStatsKeySpecifier | (() => undefined | PermissionsSyncingStatsKeySpecifier),
		fields?: PermissionsSyncingStatsFieldPolicy,
	},
	PermissionsSyncJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsSyncJobKeySpecifier | (() => undefined | PermissionsSyncJobKeySpecifier),
		fields?: PermissionsSyncJobFieldPolicy,
	},
	PermissionsSyncJobReasonWithGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsSyncJobReasonWithGroupKeySpecifier | (() => undefined | PermissionsSyncJobReasonWithGroupKeySpecifier),
		fields?: PermissionsSyncJobReasonWithGroupFieldPolicy,
	},
	PermissionsSyncJobsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsSyncJobsConnectionKeySpecifier | (() => undefined | PermissionsSyncJobsConnectionKeySpecifier),
		fields?: PermissionsSyncJobsConnectionFieldPolicy,
	},
	Person?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonKeySpecifier | (() => undefined | PersonKeySpecifier),
		fields?: PersonFieldPolicy,
	},
	PhabricatorRepo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhabricatorRepoKeySpecifier | (() => undefined | PhabricatorRepoKeySpecifier),
		fields?: PhabricatorRepoFieldPolicy,
	},
	PieChartInsightViewPresentation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PieChartInsightViewPresentationKeySpecifier | (() => undefined | PieChartInsightViewPresentationKeySpecifier),
		fields?: PieChartInsightViewPresentationFieldPolicy,
	},
	Position?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		fields?: PositionFieldPolicy,
	},
	PreciseIndex?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreciseIndexKeySpecifier | (() => undefined | PreciseIndexKeySpecifier),
		fields?: PreciseIndexFieldPolicy,
	},
	PreciseIndexConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreciseIndexConnectionKeySpecifier | (() => undefined | PreciseIndexConnectionKeySpecifier),
		fields?: PreciseIndexConnectionFieldPolicy,
	},
	PreIndexStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreIndexStepKeySpecifier | (() => undefined | PreIndexStepKeySpecifier),
		fields?: PreIndexStepFieldPolicy,
	},
	PreviewRepositoryComparison?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreviewRepositoryComparisonKeySpecifier | (() => undefined | PreviewRepositoryComparisonKeySpecifier),
		fields?: PreviewRepositoryComparisonFieldPolicy,
	},
	ProductLicense?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLicenseKeySpecifier | (() => undefined | ProductLicenseKeySpecifier),
		fields?: ProductLicenseFieldPolicy,
	},
	ProductLicenseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLicenseConnectionKeySpecifier | (() => undefined | ProductLicenseConnectionKeySpecifier),
		fields?: ProductLicenseConnectionFieldPolicy,
	},
	ProductLicenseInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLicenseInfoKeySpecifier | (() => undefined | ProductLicenseInfoKeySpecifier),
		fields?: ProductLicenseInfoFieldPolicy,
	},
	ProductSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductSubscriptionKeySpecifier | (() => undefined | ProductSubscriptionKeySpecifier),
		fields?: ProductSubscriptionFieldPolicy,
	},
	ProductSubscriptionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductSubscriptionConnectionKeySpecifier | (() => undefined | ProductSubscriptionConnectionKeySpecifier),
		fields?: ProductSubscriptionConnectionFieldPolicy,
	},
	ProductSubscriptionStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductSubscriptionStatusKeySpecifier | (() => undefined | ProductSubscriptionStatusKeySpecifier),
		fields?: ProductSubscriptionStatusFieldPolicy,
	},
	Prompt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromptKeySpecifier | (() => undefined | PromptKeySpecifier),
		fields?: PromptFieldPolicy,
	},
	PromptDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromptDefinitionKeySpecifier | (() => undefined | PromptDefinitionKeySpecifier),
		fields?: PromptDefinitionFieldPolicy,
	},
	PromptsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromptsConnectionKeySpecifier | (() => undefined | PromptsConnectionKeySpecifier),
		fields?: PromptsConnectionFieldPolicy,
	},
	PublicExternalAccountData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicExternalAccountDataKeySpecifier | (() => undefined | PublicExternalAccountDataKeySpecifier),
		fields?: PublicExternalAccountDataFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	QueryBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryBlockKeySpecifier | (() => undefined | QueryBlockKeySpecifier),
		fields?: QueryBlockFieldPolicy,
	},
	RandomizeUserPasswordResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RandomizeUserPasswordResultKeySpecifier | (() => undefined | RandomizeUserPasswordResultKeySpecifier),
		fields?: RandomizeUserPasswordResultFieldPolicy,
	},
	Range?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RangeKeySpecifier | (() => undefined | RangeKeySpecifier),
		fields?: RangeFieldPolicy,
	},
	RankedItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RankedItemKeySpecifier | (() => undefined | RankedItemKeySpecifier),
		fields?: RankedItemFieldPolicy,
	},
	RankingResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RankingResponseKeySpecifier | (() => undefined | RankingResponseKeySpecifier),
		fields?: RankingResponseFieldPolicy,
	},
	RankingSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RankingSummaryKeySpecifier | (() => undefined | RankingSummaryKeySpecifier),
		fields?: RankingSummaryFieldPolicy,
	},
	RankingSummaryProgress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RankingSummaryProgressKeySpecifier | (() => undefined | RankingSummaryProgressKeySpecifier),
		fields?: RankingSummaryProgressFieldPolicy,
	},
	RateLimiterState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateLimiterStateKeySpecifier | (() => undefined | RateLimiterStateKeySpecifier),
		fields?: RateLimiterStateFieldPolicy,
	},
	RecentContributorOwnershipSignal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentContributorOwnershipSignalKeySpecifier | (() => undefined | RecentContributorOwnershipSignalKeySpecifier),
		fields?: RecentContributorOwnershipSignalFieldPolicy,
	},
	RecentViewOwnershipSignal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentViewOwnershipSignalKeySpecifier | (() => undefined | RecentViewOwnershipSignalKeySpecifier),
		fields?: RecentViewOwnershipSignalFieldPolicy,
	},
	RecordedCommand?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecordedCommandKeySpecifier | (() => undefined | RecordedCommandKeySpecifier),
		fields?: RecordedCommandFieldPolicy,
	},
	RecordedCommandConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecordedCommandConnectionKeySpecifier | (() => undefined | RecordedCommandConnectionKeySpecifier),
		fields?: RecordedCommandConnectionFieldPolicy,
	},
	Redirect?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RedirectKeySpecifier | (() => undefined | RedirectKeySpecifier),
		fields?: RedirectFieldPolicy,
	},
	RepoChangesetsStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoChangesetsStatsKeySpecifier | (() => undefined | RepoChangesetsStatsKeySpecifier),
		fields?: RepoChangesetsStatsFieldPolicy,
	},
	RepoCorruptionLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoCorruptionLogKeySpecifier | (() => undefined | RepoCorruptionLogKeySpecifier),
		fields?: RepoCorruptionLogFieldPolicy,
	},
	RepoEmbeddingJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoEmbeddingJobKeySpecifier | (() => undefined | RepoEmbeddingJobKeySpecifier),
		fields?: RepoEmbeddingJobFieldPolicy,
	},
	RepoEmbeddingJobsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoEmbeddingJobsConnectionKeySpecifier | (() => undefined | RepoEmbeddingJobsConnectionKeySpecifier),
		fields?: RepoEmbeddingJobsConnectionFieldPolicy,
	},
	RepoEmbeddingsStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoEmbeddingsStatsKeySpecifier | (() => undefined | RepoEmbeddingsStatsKeySpecifier),
		fields?: RepoEmbeddingsStatsFieldPolicy,
	},
	RepoMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoMetadataKeySpecifier | (() => undefined | RepoMetadataKeySpecifier),
		fields?: RepoMetadataFieldPolicy,
	},
	RepoMetadataKeyOrValueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoMetadataKeyOrValueConnectionKeySpecifier | (() => undefined | RepoMetadataKeyOrValueConnectionKeySpecifier),
		fields?: RepoMetadataKeyOrValueConnectionFieldPolicy,
	},
	RepoMetadataKeyResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoMetadataKeyResultKeySpecifier | (() => undefined | RepoMetadataKeyResultKeySpecifier),
		fields?: RepoMetadataKeyResultFieldPolicy,
	},
	Repository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryKeySpecifier | (() => undefined | RepositoryKeySpecifier),
		fields?: RepositoryFieldPolicy,
	},
	RepositoryComparison?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryComparisonKeySpecifier | (() => undefined | RepositoryComparisonKeySpecifier),
		fields?: RepositoryComparisonFieldPolicy,
	},
	RepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryConnectionKeySpecifier | (() => undefined | RepositoryConnectionKeySpecifier),
		fields?: RepositoryConnectionFieldPolicy,
	},
	RepositoryContributor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryContributorKeySpecifier | (() => undefined | RepositoryContributorKeySpecifier),
		fields?: RepositoryContributorFieldPolicy,
	},
	RepositoryContributorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryContributorConnectionKeySpecifier | (() => undefined | RepositoryContributorConnectionKeySpecifier),
		fields?: RepositoryContributorConnectionFieldPolicy,
	},
	RepositoryFilterPreview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryFilterPreviewKeySpecifier | (() => undefined | RepositoryFilterPreviewKeySpecifier),
		fields?: RepositoryFilterPreviewFieldPolicy,
	},
	repositoryIndexserverHost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | repositoryIndexserverHostKeySpecifier | (() => undefined | repositoryIndexserverHostKeySpecifier),
		fields?: repositoryIndexserverHostFieldPolicy,
	},
	RepositoryPreviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryPreviewPayloadKeySpecifier | (() => undefined | RepositoryPreviewPayloadKeySpecifier),
		fields?: RepositoryPreviewPayloadFieldPolicy,
	},
	RepositorySearchScope?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositorySearchScopeKeySpecifier | (() => undefined | RepositorySearchScopeKeySpecifier),
		fields?: RepositorySearchScopeFieldPolicy,
	},
	RepositoryStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryStatsKeySpecifier | (() => undefined | RepositoryStatsKeySpecifier),
		fields?: RepositoryStatsFieldPolicy,
	},
	RepositoryTextSearchIndex?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTextSearchIndexKeySpecifier | (() => undefined | RepositoryTextSearchIndexKeySpecifier),
		fields?: RepositoryTextSearchIndexFieldPolicy,
	},
	RepositoryTextSearchIndexedRef?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTextSearchIndexedRefKeySpecifier | (() => undefined | RepositoryTextSearchIndexedRefKeySpecifier),
		fields?: RepositoryTextSearchIndexedRefFieldPolicy,
	},
	RepositoryTextSearchIndexStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTextSearchIndexStatusKeySpecifier | (() => undefined | RepositoryTextSearchIndexStatusKeySpecifier),
		fields?: RepositoryTextSearchIndexStatusFieldPolicy,
	},
	ResolvedBatchSpecWorkspace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolvedBatchSpecWorkspaceKeySpecifier | (() => undefined | ResolvedBatchSpecWorkspaceKeySpecifier),
		fields?: ResolvedBatchSpecWorkspaceFieldPolicy,
	},
	RetrieverContextItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RetrieverContextItemKeySpecifier | (() => undefined | RetrieverContextItemKeySpecifier),
		fields?: RetrieverContextItemFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	RoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleConnectionKeySpecifier | (() => undefined | RoleConnectionKeySpecifier),
		fields?: RoleConnectionFieldPolicy,
	},
	RootWithKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootWithKeyKeySpecifier | (() => undefined | RootWithKeyKeySpecifier),
		fields?: RootWithKeyFieldPolicy,
	},
	SavedSearch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavedSearchKeySpecifier | (() => undefined | SavedSearchKeySpecifier),
		fields?: SavedSearchFieldPolicy,
	},
	SavedSearchesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavedSearchesConnectionKeySpecifier | (() => undefined | SavedSearchesConnectionKeySpecifier),
		fields?: SavedSearchesConnectionFieldPolicy,
	},
	SchemaDriftSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SchemaDriftSummaryKeySpecifier | (() => undefined | SchemaDriftSummaryKeySpecifier),
		fields?: SchemaDriftSummaryFieldPolicy,
	},
	SCIPOccurrence?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SCIPOccurrenceKeySpecifier | (() => undefined | SCIPOccurrenceKeySpecifier),
		fields?: SCIPOccurrenceFieldPolicy,
	},
	SCIPOccurrenceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SCIPOccurrenceConnectionKeySpecifier | (() => undefined | SCIPOccurrenceConnectionKeySpecifier),
		fields?: SCIPOccurrenceConnectionFieldPolicy,
	},
	ScopedInsightQueryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScopedInsightQueryPayloadKeySpecifier | (() => undefined | ScopedInsightQueryPayloadKeySpecifier),
		fields?: ScopedInsightQueryPayloadFieldPolicy,
	},
	Search?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchKeySpecifier | (() => undefined | SearchKeySpecifier),
		fields?: SearchFieldPolicy,
	},
	SearchAggregationNotAvailable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchAggregationNotAvailableKeySpecifier | (() => undefined | SearchAggregationNotAvailableKeySpecifier),
		fields?: SearchAggregationNotAvailableFieldPolicy,
	},
	SearchAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchAlertKeySpecifier | (() => undefined | SearchAlertKeySpecifier),
		fields?: SearchAlertFieldPolicy,
	},
	SearchContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchContextKeySpecifier | (() => undefined | SearchContextKeySpecifier),
		fields?: SearchContextFieldPolicy,
	},
	SearchContextConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchContextConnectionKeySpecifier | (() => undefined | SearchContextConnectionKeySpecifier),
		fields?: SearchContextConnectionFieldPolicy,
	},
	SearchContextRepositoryRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchContextRepositoryRevisionsKeySpecifier | (() => undefined | SearchContextRepositoryRevisionsKeySpecifier),
		fields?: SearchContextRepositoryRevisionsFieldPolicy,
	},
	SearchFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchFilterKeySpecifier | (() => undefined | SearchFilterKeySpecifier),
		fields?: SearchFilterFieldPolicy,
	},
	SearchInsightDataSeriesDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchInsightDataSeriesDefinitionKeySpecifier | (() => undefined | SearchInsightDataSeriesDefinitionKeySpecifier),
		fields?: SearchInsightDataSeriesDefinitionFieldPolicy,
	},
	SearchInsightLivePreviewSeries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchInsightLivePreviewSeriesKeySpecifier | (() => undefined | SearchInsightLivePreviewSeriesKeySpecifier),
		fields?: SearchInsightLivePreviewSeriesFieldPolicy,
	},
	SearchJob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchJobKeySpecifier | (() => undefined | SearchJobKeySpecifier),
		fields?: SearchJobFieldPolicy,
	},
	SearchJobConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchJobConnectionKeySpecifier | (() => undefined | SearchJobConnectionKeySpecifier),
		fields?: SearchJobConnectionFieldPolicy,
	},
	SearchJobStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchJobStatsKeySpecifier | (() => undefined | SearchJobStatsKeySpecifier),
		fields?: SearchJobStatsFieldPolicy,
	},
	SearchQueryAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchQueryAggregateKeySpecifier | (() => undefined | SearchQueryAggregateKeySpecifier),
		fields?: SearchQueryAggregateFieldPolicy,
	},
	SearchQueryAnnotation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchQueryAnnotationKeySpecifier | (() => undefined | SearchQueryAnnotationKeySpecifier),
		fields?: SearchQueryAnnotationFieldPolicy,
	},
	SearchQueryDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchQueryDescriptionKeySpecifier | (() => undefined | SearchQueryDescriptionKeySpecifier),
		fields?: SearchQueryDescriptionFieldPolicy,
	},
	SearchResultMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultMatchKeySpecifier | (() => undefined | SearchResultMatchKeySpecifier),
		fields?: SearchResultMatchFieldPolicy,
	},
	SearchResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultsKeySpecifier | (() => undefined | SearchResultsKeySpecifier),
		fields?: SearchResultsFieldPolicy,
	},
	SearchResultsStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultsStatsKeySpecifier | (() => undefined | SearchResultsStatsKeySpecifier),
		fields?: SearchResultsStatsFieldPolicy,
	},
	SeriesDisplayOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeriesDisplayOptionsKeySpecifier | (() => undefined | SeriesDisplayOptionsKeySpecifier),
		fields?: SeriesDisplayOptionsFieldPolicy,
	},
	SeriesSortOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeriesSortOptionsKeySpecifier | (() => undefined | SeriesSortOptionsKeySpecifier),
		fields?: SeriesSortOptionsFieldPolicy,
	},
	Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionKeySpecifier | (() => undefined | SessionKeySpecifier),
		fields?: SessionFieldPolicy,
	},
	Settings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier),
		fields?: SettingsFieldPolicy,
	},
	SettingsCascade?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsCascadeKeySpecifier | (() => undefined | SettingsCascadeKeySpecifier),
		fields?: SettingsCascadeFieldPolicy,
	},
	SettingsMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsMutationKeySpecifier | (() => undefined | SettingsMutationKeySpecifier),
		fields?: SettingsMutationFieldPolicy,
	},
	SettingsSubject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsSubjectKeySpecifier | (() => undefined | SettingsSubjectKeySpecifier),
		fields?: SettingsSubjectFieldPolicy,
	},
	Signature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignatureKeySpecifier | (() => undefined | SignatureKeySpecifier),
		fields?: SignatureFieldPolicy,
	},
	Site?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteKeySpecifier | (() => undefined | SiteKeySpecifier),
		fields?: SiteFieldPolicy,
	},
	SiteConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteConfigurationKeySpecifier | (() => undefined | SiteConfigurationKeySpecifier),
		fields?: SiteConfigurationFieldPolicy,
	},
	SiteConfigurationChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteConfigurationChangeKeySpecifier | (() => undefined | SiteConfigurationChangeKeySpecifier),
		fields?: SiteConfigurationChangeFieldPolicy,
	},
	SiteConfigurationChangeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteConfigurationChangeConnectionKeySpecifier | (() => undefined | SiteConfigurationChangeConnectionKeySpecifier),
		fields?: SiteConfigurationChangeConnectionFieldPolicy,
	},
	SiteUsagePeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteUsagePeriodKeySpecifier | (() => undefined | SiteUsagePeriodKeySpecifier),
		fields?: SiteUsagePeriodFieldPolicy,
	},
	SiteUsageStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteUsageStatisticsKeySpecifier | (() => undefined | SiteUsageStatisticsKeySpecifier),
		fields?: SiteUsageStatisticsFieldPolicy,
	},
	SiteUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteUserKeySpecifier | (() => undefined | SiteUserKeySpecifier),
		fields?: SiteUserFieldPolicy,
	},
	SiteUsers?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteUsersKeySpecifier | (() => undefined | SiteUsersKeySpecifier),
		fields?: SiteUsersFieldPolicy,
	},
	SkippedIndexed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SkippedIndexedKeySpecifier | (() => undefined | SkippedIndexedKeySpecifier),
		fields?: SkippedIndexedFieldPolicy,
	},
	SlowRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SlowRequestKeySpecifier | (() => undefined | SlowRequestKeySpecifier),
		fields?: SlowRequestFieldPolicy,
	},
	SlowRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SlowRequestConnectionKeySpecifier | (() => undefined | SlowRequestConnectionKeySpecifier),
		fields?: SlowRequestConnectionFieldPolicy,
	},
	SnapshotData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SnapshotDataKeySpecifier | (() => undefined | SnapshotDataKeySpecifier),
		fields?: SnapshotDataFieldPolicy,
	},
	SnippetAttribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SnippetAttributionKeySpecifier | (() => undefined | SnippetAttributionKeySpecifier),
		fields?: SnippetAttributionFieldPolicy,
	},
	SnippetAttributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SnippetAttributionConnectionKeySpecifier | (() => undefined | SnippetAttributionConnectionKeySpecifier),
		fields?: SnippetAttributionConnectionFieldPolicy,
	},
	Submodule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmoduleKeySpecifier | (() => undefined | SubmoduleKeySpecifier),
		fields?: SubmoduleFieldPolicy,
	},
	SurveyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyResponseKeySpecifier | (() => undefined | SurveyResponseKeySpecifier),
		fields?: SurveyResponseFieldPolicy,
	},
	SurveyResponseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyResponseConnectionKeySpecifier | (() => undefined | SurveyResponseConnectionKeySpecifier),
		fields?: SurveyResponseConnectionFieldPolicy,
	},
	Symbol?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolKeySpecifier | (() => undefined | SymbolKeySpecifier),
		fields?: SymbolFieldPolicy,
	},
	SymbolBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolBlockKeySpecifier | (() => undefined | SymbolBlockKeySpecifier),
		fields?: SymbolBlockFieldPolicy,
	},
	SymbolBlockInput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolBlockInputKeySpecifier | (() => undefined | SymbolBlockInputKeySpecifier),
		fields?: SymbolBlockInputFieldPolicy,
	},
	SymbolConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolConnectionKeySpecifier | (() => undefined | SymbolConnectionKeySpecifier),
		fields?: SymbolConnectionFieldPolicy,
	},
	SymbolInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolInfoKeySpecifier | (() => undefined | SymbolInfoKeySpecifier),
		fields?: SymbolInfoFieldPolicy,
	},
	SymbolInformation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolInformationKeySpecifier | (() => undefined | SymbolInformationKeySpecifier),
		fields?: SymbolInformationFieldPolicy,
	},
	SymbolLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SymbolLocationKeySpecifier | (() => undefined | SymbolLocationKeySpecifier),
		fields?: SymbolLocationFieldPolicy,
	},
	SyncError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyncErrorKeySpecifier | (() => undefined | SyncErrorKeySpecifier),
		fields?: SyncErrorFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberKeySpecifier | (() => undefined | TeamMemberKeySpecifier),
		fields?: TeamMemberFieldPolicy,
	},
	TeamMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberConnectionKeySpecifier | (() => undefined | TeamMemberConnectionKeySpecifier),
		fields?: TeamMemberConnectionFieldPolicy,
	},
	TelemetryMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TelemetryMutationKeySpecifier | (() => undefined | TelemetryMutationKeySpecifier),
		fields?: TelemetryMutationFieldPolicy,
	},
	TelemetryQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TelemetryQueryKeySpecifier | (() => undefined | TelemetryQueryKeySpecifier),
		fields?: TelemetryQueryFieldPolicy,
	},
	TemporarySettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemporarySettingsKeySpecifier | (() => undefined | TemporarySettingsKeySpecifier),
		fields?: TemporarySettingsFieldPolicy,
	},
	TimeoutDatapointAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeoutDatapointAlertKeySpecifier | (() => undefined | TimeoutDatapointAlertKeySpecifier),
		fields?: TimeoutDatapointAlertFieldPolicy,
	},
	TreeEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TreeEntryKeySpecifier | (() => undefined | TreeEntryKeySpecifier),
		fields?: TreeEntryFieldPolicy,
	},
	TreeEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TreeEntryConnectionKeySpecifier | (() => undefined | TreeEntryConnectionKeySpecifier),
		fields?: TreeEntryConnectionFieldPolicy,
	},
	TreeEntryLSIFData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TreeEntryLSIFDataKeySpecifier | (() => undefined | TreeEntryLSIFDataKeySpecifier),
		fields?: TreeEntryLSIFDataFieldPolicy,
	},
	UpdateCheck?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCheckKeySpecifier | (() => undefined | UpdateCheckKeySpecifier),
		fields?: UpdateCheckFieldPolicy,
	},
	UpdateQueue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateQueueKeySpecifier | (() => undefined | UpdateQueueKeySpecifier),
		fields?: UpdateQueueFieldPolicy,
	},
	UpdateSchedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateScheduleKeySpecifier | (() => undefined | UpdateScheduleKeySpecifier),
		fields?: UpdateScheduleFieldPolicy,
	},
	UpdateSettingsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSettingsPayloadKeySpecifier | (() => undefined | UpdateSettingsPayloadKeySpecifier),
		fields?: UpdateSettingsPayloadFieldPolicy,
	},
	UpgradeReadiness?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpgradeReadinessKeySpecifier | (() => undefined | UpgradeReadinessKeySpecifier),
		fields?: UpgradeReadinessFieldPolicy,
	},
	URLMentionContextResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | URLMentionContextResultKeySpecifier | (() => undefined | URLMentionContextResultKeySpecifier),
		fields?: URLMentionContextResultFieldPolicy,
	},
	Usage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsageKeySpecifier | (() => undefined | UsageKeySpecifier),
		fields?: UsageFieldPolicy,
	},
	UsageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsageConnectionKeySpecifier | (() => undefined | UsageConnectionKeySpecifier),
		fields?: UsageConnectionFieldPolicy,
	},
	UsageRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsageRangeKeySpecifier | (() => undefined | UsageRangeKeySpecifier),
		fields?: UsageRangeFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEmail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEmailKeySpecifier | (() => undefined | UserEmailKeySpecifier),
		fields?: UserEmailFieldPolicy,
	},
	UserPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionKeySpecifier | (() => undefined | UserPermissionKeySpecifier),
		fields?: UserPermissionFieldPolicy,
	},
	UserUsageStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserUsageStatisticsKeySpecifier | (() => undefined | UserUsageStatisticsKeySpecifier),
		fields?: UserUsageStatisticsFieldPolicy,
	},
	Viewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewerKeySpecifier | (() => undefined | ViewerKeySpecifier),
		fields?: ViewerFieldPolicy,
	},
	VirtualFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualFileKeySpecifier | (() => undefined | VirtualFileKeySpecifier),
		fields?: VirtualFileFieldPolicy,
	},
	VisibleApplyPreviewTargetsAttach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleApplyPreviewTargetsAttachKeySpecifier | (() => undefined | VisibleApplyPreviewTargetsAttachKeySpecifier),
		fields?: VisibleApplyPreviewTargetsAttachFieldPolicy,
	},
	VisibleApplyPreviewTargetsDetach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleApplyPreviewTargetsDetachKeySpecifier | (() => undefined | VisibleApplyPreviewTargetsDetachKeySpecifier),
		fields?: VisibleApplyPreviewTargetsDetachFieldPolicy,
	},
	VisibleApplyPreviewTargetsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleApplyPreviewTargetsUpdateKeySpecifier | (() => undefined | VisibleApplyPreviewTargetsUpdateKeySpecifier),
		fields?: VisibleApplyPreviewTargetsUpdateFieldPolicy,
	},
	VisibleBatchSpecWorkspace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleBatchSpecWorkspaceKeySpecifier | (() => undefined | VisibleBatchSpecWorkspaceKeySpecifier),
		fields?: VisibleBatchSpecWorkspaceFieldPolicy,
	},
	VisibleChangesetApplyPreview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleChangesetApplyPreviewKeySpecifier | (() => undefined | VisibleChangesetApplyPreviewKeySpecifier),
		fields?: VisibleChangesetApplyPreviewFieldPolicy,
	},
	VisibleChangesetSpec?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisibleChangesetSpecKeySpecifier | (() => undefined | VisibleChangesetSpecKeySpecifier),
		fields?: VisibleChangesetSpecFieldPolicy,
	},
	Visitor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisitorKeySpecifier | (() => undefined | VisitorKeySpecifier),
		fields?: VisitorFieldPolicy,
	},
	Webhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookKeySpecifier | (() => undefined | WebhookKeySpecifier),
		fields?: WebhookFieldPolicy,
	},
	WebhookConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookConnectionKeySpecifier | (() => undefined | WebhookConnectionKeySpecifier),
		fields?: WebhookConnectionFieldPolicy,
	},
	WebhookLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogKeySpecifier | (() => undefined | WebhookLogKeySpecifier),
		fields?: WebhookLogFieldPolicy,
	},
	WebhookLogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogConnectionKeySpecifier | (() => undefined | WebhookLogConnectionKeySpecifier),
		fields?: WebhookLogConnectionFieldPolicy,
	},
	WebhookLogMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogMessageKeySpecifier | (() => undefined | WebhookLogMessageKeySpecifier),
		fields?: WebhookLogMessageFieldPolicy,
	},
	WebhookLogRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogRequestKeySpecifier | (() => undefined | WebhookLogRequestKeySpecifier),
		fields?: WebhookLogRequestFieldPolicy,
	},
	WebhookLogResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogResponseKeySpecifier | (() => undefined | WebhookLogResponseKeySpecifier),
		fields?: WebhookLogResponseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;