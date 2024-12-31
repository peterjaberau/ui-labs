import { useCallback, useMemo, useState, type FC } from 'react'

import { mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js'
import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'

import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import type { CaseSensitivityProps, SearchPatternTypeProps } from '~/internals/development/sg/shared/search'
import { FilterKind, findFilter } from '~/internals/development/sg/shared/search/query/query.ts'
import type { AggregateStreamingSearchResults, StreamSearchOptions } from '~/internals/development/sg/shared/search/stream.ts'
import { useExperimentalFeatures } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Button, Icon } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../../../auth.ts'
import {
    canWriteBatchChanges,
    NO_ACCESS_BATCH_CHANGES_WRITE,
    NO_ACCESS_SOURCEGRAPH_COM,
} from '../../../../batches/utils.ts'
import { SavedSearchModal } from '../../../../savedSearches/SavedSearchModal.tsx'
import { SearchResultsCsvExportModal } from '../../export/SearchResultsCsvExportModal.tsx'
import { AggregationUIMode, useAggregationUIMode } from '../aggregation'
import { SearchActionsMenu } from '../SearchActionsMenu.tsx'

import {
    getBatchChangeCreateAction,
    getCodeMonitoringCreateAction,
    getInsightsCreateAction,
    getSearchContextCreateAction,
    type CreateAction,
} from './createActions.ts'

import styles from './SearchResultsInfoBar.module.scss'

export interface SearchResultsInfoBarProps
    extends TelemetryProps,
        TelemetryV2Props,
        SearchPatternTypeProps,
        Pick<CaseSensitivityProps, 'caseSensitive'> {
    /** The currently authenticated user or null */
    authenticatedUser: Pick<
        AuthenticatedUser,
        'id' | 'displayName' | 'emails' | 'permissions' | 'organizations' | 'username'
    > | null

    enableCodeInsights?: boolean
    enableCodeMonitoring: boolean

    /** The search query and results */
    query?: string
    options: StreamSearchOptions
    results?: AggregateStreamingSearchResults

    batchChangesEnabled?: boolean
    /** Whether running batch changes server-side is enabled */
    batchChangesExecutionEnabled?: boolean

    // Expand all feature
    allExpanded: boolean
    onExpandAllResultsToggle: () => void

    className?: string

    stats: JSX.Element

    onShowMobileFiltersChanged?: (show: boolean) => void

    sidebarCollapsed: boolean
    setSidebarCollapsed: (collapsed: boolean) => void

    isSourcegraphDotCom: boolean
    patternType: SearchPatternType
    sourcegraphURL: string

    onTogglePatternType: (patternType: SearchPatternType) => void
}

/**
 * The info bar shown over the search results list that displays metadata
 * and a few actions like expand all and save query
 */
export const SearchResultsInfoBar: FC<SearchResultsInfoBarProps> = props => {
    const {
        query,
        patternType,
        authenticatedUser,
        results,
        options,
        sourcegraphURL,
        telemetryService,
        telemetryRecorder,
    } = props

    const navigate = useNavigate()
    const newFiltersEnabled = useExperimentalFeatures(features => features.newSearchResultFiltersPanel)

    const [aggregationUIMode, setAggregationUIMode] = useAggregationUIMode()
    const [showSavedSearchModal, setShowSavedSearchModal] = useState(false)
    const [showCsvExportModal, setShowCsvExportModal] = useState(false)

    const globalTypeFilter = useMemo(
        () => (props.query ? findFilter(props.query, 'type', FilterKind.Global)?.value?.value : undefined),
        [props.query]
    )

    const canCreateMonitorFromQuery = useMemo(
        () => globalTypeFilter === 'diff' || globalTypeFilter === 'commit',
        [globalTypeFilter]
    )

    const canCreateBatchChanges: boolean | string = useMemo(() => {
        if (globalTypeFilter === 'diff' || globalTypeFilter === 'commit') {
            return 'Batch changes cannot be created from searches with type:diff or type:commit'
        }
        if (props.isSourcegraphDotCom) {
            return NO_ACCESS_SOURCEGRAPH_COM
        }
        if (!props.batchChangesEnabled || !props.batchChangesExecutionEnabled) {
            return false
        }
        if (!canWriteBatchChanges(props.authenticatedUser)) {
            return NO_ACCESS_BATCH_CHANGES_WRITE
        }
        return true
    }, [
        globalTypeFilter,
        props.isSourcegraphDotCom,
        props.batchChangesEnabled,
        props.batchChangesExecutionEnabled,
        props.authenticatedUser,
    ])

    // When adding a new create action check and update the $collapse-breakpoint in CreateActions.module.scss.
    // The collapse breakpoint indicates at which window size we hide the buttons and show the collapsed menu instead.
    const createActions = useMemo(
        () =>
            [
                getBatchChangeCreateAction(props.query, props.patternType, canCreateBatchChanges),
                getSearchContextCreateAction(props.query, props.authenticatedUser),
                getInsightsCreateAction(props.query, props.patternType, window.context?.codeInsightsEnabled),
            ].filter((button): button is CreateAction => button !== null),
        [props.authenticatedUser, props.patternType, props.query, canCreateBatchChanges]
    )

    // The create code monitor action is separated from the rest of the actions, because we use the
    // <ExperimentalActionButton /> component instead of a regular (button) link, and it has a tour attached.
    const createCodeMonitorAction = useMemo(
        () => getCodeMonitoringCreateAction(props.query, props.patternType, props.enableCodeMonitoring),
        [props.enableCodeMonitoring, props.patternType, props.query]
    )

    // Show/hide mobile filters menu
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const onShowMobileFiltersClicked = (): void => {
        const newShowFilters = !showMobileFilters
        setShowMobileFilters(newShowFilters)
        props.onShowMobileFiltersChanged?.(newShowFilters)
    }

    const onSaveQueryModalClose = useCallback(() => {
        setShowSavedSearchModal(false)
        telemetryService.log('SavedQueriesToggleCreating', { queries: { creating: false } })
        telemetryRecorder.recordEvent('search.resultsInfoBar.savedQueriesModal', 'close')
    }, [telemetryService, telemetryRecorder])

    return (
        <aside
            role="region"
            aria-label="Search results information"
            className={classNames(props.className, styles.searchResultsInfoBar)}
            data-testid="results-info-bar"
        >
            <div className={styles.row}>
                {props.stats}

                <div className={styles.expander} />
                <ul className="nav align-items-center">
                    <SearchActionsMenu
                        authenticatedUser={props.authenticatedUser}
                        createActions={createActions}
                        createCodeMonitorAction={createCodeMonitorAction}
                        canCreateMonitor={canCreateMonitorFromQuery}
                        results={props.results}
                        allExpanded={props.allExpanded}
                        onExpandAllResultsToggle={props.onExpandAllResultsToggle}
                        onSaveQueryClick={() => setShowSavedSearchModal(true)}
                        onExportCsvClick={() => setShowCsvExportModal(true)}
                    />
                </ul>

                {!newFiltersEnabled && (
                    <Button
                        className={classNames(
                            'd-flex align-items-center d-lg-none',
                            styles.filtersButton,
                            showMobileFilters && 'active'
                        )}
                        aria-pressed={showMobileFilters}
                        onClick={onShowMobileFiltersClicked}
                        outline={true}
                        variant="secondary"
                        size="sm"
                        aria-label={`${showMobileFilters ? 'Hide' : 'Show'} filters`}
                    >
                        Filters
                        <Icon
                            aria-hidden={true}
                            className="ml-2"
                            svgPath={showMobileFilters ? mdiChevronDoubleUp : mdiChevronDoubleDown}
                        />
                    </Button>
                )}

                {!newFiltersEnabled && props.sidebarCollapsed && (
                    <Button
                        className={classNames('align-items-center d-none d-lg-flex', styles.filtersButton)}
                        onClick={() => props.setSidebarCollapsed(false)}
                        outline={true}
                        variant="secondary"
                        size="sm"
                        aria-label="Show filters sidebar"
                    >
                        Filters
                        <Icon aria-hidden={true} className="ml-2" svgPath={mdiChevronDoubleDown} />
                    </Button>
                )}
                {newFiltersEnabled && (
                    <Button
                        size="sm"
                        variant="secondary"
                        outline={true}
                        aria-label="Show aggregation results"
                        className="align-items-center d-lg-flex"
                        onClick={() =>
                            setAggregationUIMode(
                                aggregationUIMode === AggregationUIMode.SearchPage
                                    ? AggregationUIMode.Sidebar
                                    : AggregationUIMode.SearchPage
                            )
                        }
                    >
                        {aggregationUIMode === AggregationUIMode.SearchPage ? 'Hide' : 'Show'} aggregation results
                    </Button>
                )}
            </div>

            {showSavedSearchModal && (
                <SavedSearchModal
                    navigate={navigate}
                    patternType={patternType}
                    query={query}
                    authenticatedUser={authenticatedUser}
                    onDidCancel={onSaveQueryModalClose}
                    telemetryRecorder={telemetryRecorder}
                />
            )}
            {showCsvExportModal && (
                <SearchResultsCsvExportModal
                    query={query}
                    options={options}
                    results={results}
                    sourcegraphURL={sourcegraphURL}
                    telemetryService={telemetryService}
                    telemetryRecorder={telemetryRecorder}
                    onClose={() => setShowCsvExportModal(false)}
                />
            )}
        </aside>
    )
}
