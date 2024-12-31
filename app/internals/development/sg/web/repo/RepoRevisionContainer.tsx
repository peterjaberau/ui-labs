import { type FC, useCallback, useMemo, useState, useEffect } from 'react'

import { Route, Routes } from '@remix-run/react'

import type { StreamingSearchResultsListProps } from '~/internals/development/sg/branded'
import { isErrorLike } from '~/internals/development/sg/common'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import type { RevisionSpec } from '~/internals/development/sg/shared/util/url.ts'
import {
    Button,
    Flipping,
    LoadingSpinner,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Position,
    Tooltip,
} from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../auth.ts'
import type { BatchChangesProps } from '../batches'
import type { CodeIntelligenceProps } from '../codeintel'
import type { BreadcrumbSetters } from '../components/Breadcrumbs.tsx'
import type { RepositoryFields } from '../graphql-operations.ts'
import type { CodeInsightsProps } from '../insights/types.ts'
import type { NotebookProps } from '../notebooks'
import type { OwnConfigProps } from '../own/OwnConfigProps.ts'
import type { SearchStreamingProps } from '../search'
import type { RouteV6Descriptor } from '../util/contributions.ts'

import { CopyPermalinkAction } from './actions/CopyPermalinkAction.tsx'
import type { ResolvedRevision } from './backend.ts'
import { RepoRevisionChevronDownIcon, RepoRevisionWrapper } from './components/RepoRevision'
import { isPackageServiceType } from './packages/isPackageServiceType.ts'
import type { HoverThresholdProps, RepoContainerContext } from './RepoContainer.tsx'
import type { RepoHeaderContributionsLifecycleProps } from './RepoHeader.tsx'
import { RepoHeaderContributionPortal } from './RepoHeaderContributionPortal.tsx'
import { RevisionsPopover } from './RevisionsPopover'
import type { RepoSettingsAreaRoute } from './settings/RepoSettingsArea.tsx'
import type { RepoSettingsSideBarGroup } from './settings/RepoSettingsSidebar.tsx'

import styles from './RepoRevisionContainer.module.scss'

/** Props passed to sub-routes of {@link RepoRevisionContainer}. */
export interface RepoRevisionContainerContext
    extends RepoHeaderContributionsLifecycleProps,
        SettingsCascadeProps,
        PlatformContextProps,
        TelemetryProps,
        HoverThresholdProps,
        Omit<RepoContainerContext, 'onDidUpdateExternalLinks' | 'repo' | 'resolvedRevisionOrError'>,
        Pick<SearchContextProps, 'selectedSearchContextSpec' | 'searchContextsEnabled'>,
        RevisionSpec,
        BreadcrumbSetters,
        SearchStreamingProps,
        Pick<StreamingSearchResultsListProps, 'fetchHighlightedFileLineRanges'>,
        BatchChangesProps,
        Pick<CodeIntelligenceProps, 'codeIntelligenceEnabled' | 'useCodeIntel'>,
        CodeInsightsProps,
        NotebookProps,
        OwnConfigProps {
    repo: RepositoryFields | undefined
    resolvedRevision: ResolvedRevision | undefined

    repoName: string

    isMacPlatform: boolean

    isSourcegraphDotCom: boolean
}

/** A sub-route of {@link RepoRevisionContainer}. */
export interface RepoRevisionContainerRoute extends RouteV6Descriptor<RepoRevisionContainerContext> {}

interface RepoRevisionContainerProps
    extends RepoHeaderContributionsLifecycleProps,
        SettingsCascadeProps,
        PlatformContextProps,
        TelemetryProps,
        HoverThresholdProps,
        Pick<SearchContextProps, 'selectedSearchContextSpec' | 'searchContextsEnabled'>,
        RevisionSpec,
        BreadcrumbSetters,
        SearchStreamingProps,
        Pick<StreamingSearchResultsListProps, 'fetchHighlightedFileLineRanges'>,
        CodeIntelligenceProps,
        BatchChangesProps,
        CodeInsightsProps,
        NotebookProps,
        OwnConfigProps {
    routes: readonly RepoRevisionContainerRoute[]
    repoSettingsAreaRoutes: readonly RepoSettingsAreaRoute[]
    repoSettingsSidebarGroups: readonly RepoSettingsSideBarGroup[]
    repo: RepositoryFields | undefined
    authenticatedUser: AuthenticatedUser | null

    /**
     * The resolved revision or an error if it could not be resolved.
     */
    resolvedRevision: ResolvedRevision | undefined

    /** The repoName from the URL */
    repoName: string

    isMacPlatform: boolean

    isSourcegraphDotCom: boolean
}

interface RepoRevisionBreadcrumbProps
    extends Pick<RepoRevisionContainerProps, 'repo' | 'revision' | 'repoName'>,
        TelemetryV2Props {
    resolvedRevision: ResolvedRevision | undefined
}

export const RepoRevisionContainerBreadcrumb: FC<RepoRevisionBreadcrumbProps> = props => {
    const { revision, resolvedRevision, repoName, repo, telemetryRecorder } = props

    const [revisionLabelElement, setRevisionLabelElement] = useState<HTMLElement | null>(null)
    const [showRevisionTooltip, setShowRevisionTooltip] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)
    const togglePopover = useCallback(() => setPopoverOpen(previous => !previous), [])

    const revisionLabel = useMemo(
        () =>
            revision
                ? revision === resolvedRevision?.commitID
                    ? resolvedRevision?.commitID.slice(0, 7)
                    : revision
                : resolvedRevision?.defaultBranch || <LoadingSpinner />,
        [revision, resolvedRevision]
    )

    // The revision label has a max-width, an ellipsis is shown when the revision is too long.
    // In this case, we show the full revision in a tooltip.
    useEffect(() => {
        if (revisionLabel && revisionLabelElement) {
            setShowRevisionTooltip(revisionLabelElement.scrollWidth > revisionLabelElement.offsetWidth)
        }
    }, [revisionLabelElement, revisionLabel])
    const isPopoverContentReady = repo && resolvedRevision

    return (
        <Popover isOpen={popoverOpen} onOpenChange={event => setPopoverOpen(event.isOpen)}>
            <PopoverTrigger
                as={Button}
                className="d-flex align-items-center text-nowrap"
                key="repo-revision"
                id="repo-revision-popover"
                aria-label="Change revision"
                outline={true}
                variant="secondary"
                size="sm"
                disabled={!isPopoverContentReady}
            >
                <Tooltip content={showRevisionTooltip ? revision : ''}>
                    <span ref={setRevisionLabelElement} className={styles.revisionLabel}>
                        {revisionLabel}
                    </span>
                </Tooltip>
                <RepoRevisionChevronDownIcon aria-hidden={true} />
            </PopoverTrigger>
            <PopoverContent
                position={Position.bottomStart}
                flipping={Flipping.opposite}
                className="pt-0 pb-0"
                aria-labelledby="repo-revision-popover"
            >
                {isPopoverContentReady && (
                    <RevisionsPopover
                        repoId={repo?.id}
                        repoName={repoName}
                        repoServiceType={repo?.externalRepository?.serviceType}
                        defaultBranch={resolvedRevision?.defaultBranch}
                        currentRev={revision}
                        currentCommitID={resolvedRevision?.commitID}
                        togglePopover={togglePopover}
                        onSelect={togglePopover}
                        telemetryRecorder={telemetryRecorder}
                    />
                )}
            </PopoverContent>
        </Popover>
    )
}

/**
 * A container for a repository page that incorporates revisioned Git data. (For example,
 * blob and tree pages are revisioned, but the repository settings page is not.)
 */
export const RepoRevisionContainer: FC<RepoRevisionContainerProps> = props => {
    const { useBreadcrumb, resolvedRevision, revision, repo, repoName, routes } = props

    const breadcrumbSetters = useBreadcrumb(
        useMemo(() => {
            if (isErrorLike(resolvedRevision)) {
                return
            }

            return {
                key: 'revision',
                divider: <span className={styles.divider}>@</span>,
                element: (
                    <RepoRevisionContainerBreadcrumb
                        resolvedRevision={resolvedRevision}
                        revision={revision}
                        repoName={repoName}
                        repo={repo}
                        telemetryRecorder={props.platformContext.telemetryRecorder}
                    />
                ),
            }
        }, [resolvedRevision, revision, repo, repoName, props.platformContext.telemetryRecorder])
    )

    const isPackage = useMemo(
        () => isPackageServiceType(repo?.externalRepository.serviceType),
        [repo?.externalRepository.serviceType]
    )

    const repoRevisionContainerContext: RepoRevisionContainerContext = {
        ...props,
        ...breadcrumbSetters,
        resolvedRevision,
    }

    return (
        <RepoRevisionWrapper className="px-3">
            <Routes>
                {routes.map(
                    ({ path, render, condition = () => true }) =>
                        condition(repoRevisionContainerContext) && (
                            <Route key="hardcoded-key" path={path} element={render(repoRevisionContainerContext)} />
                        )
                )}
            </Routes>
            {!isPackage && (
                <RepoHeaderContributionPortal
                    position="right"
                    priority={2}
                    id="copy-permalink"
                    repoHeaderContributionsLifecycleProps={props.repoHeaderContributionsLifecycleProps}
                >
                    {context => (
                        <CopyPermalinkAction
                            key="copy-permalink"
                            telemetryService={props.telemetryService}
                            telemetryRecorder={props.platformContext.telemetryRecorder}
                            revision={props.revision}
                            commitID={resolvedRevision?.commitID}
                            {...context}
                        />
                    )}
                </RepoHeaderContributionPortal>
            )}
        </RepoRevisionWrapper>
    )
}
