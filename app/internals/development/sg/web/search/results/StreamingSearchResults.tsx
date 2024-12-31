import { type FC, useCallback, useEffect, useMemo, useState } from 'react'

import { useLocation, useNavigate } from '@remix-run/react'
import type { Observable } from 'rxjs'

import { limitHit, useUrlFilters } from '~/internals/development/sg/branded'
import type { FetchFileParameters } from '~/internals/development/sg/shared/backend/file.ts'
import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { QueryUpdate, SearchContextProps } from '~/internals/development/sg/shared/search'
import { updateFilters } from '~/internals/development/sg/shared/search/query/transformer.ts'
import { LATEST_VERSION, type StreamSearchOptions } from '~/internals/development/sg/shared/search/stream.ts'
import { useSettings, type SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import type { SearchAggregationProps, SearchStreamingProps } from '../index.ts'
import type { AuthenticatedUser } from '../../auth.ts'
import type { CodeMonitoringProps } from '../../codeMonitoring'
import { SearchJobsProps } from '../../enterprise/search-jobs'
import { formatUrlOverrideFeatureFlags } from '../../featureFlags/lib/parseUrlOverrideFeatureFlags.ts'
import { useFeatureFlag } from '../../featureFlags/useFeatureFlag.ts'
import { useFeatureFlagOverrides } from '../../featureFlags/useFeatureFlagOverrides.ts'
import type { CodeInsightsProps } from '../../insights/types.ts'
import type { OwnConfigProps } from '../../own/OwnConfigProps.ts'
import { setSearchPatternType, useDeveloperSettings, useNavbarQueryState } from '../../stores'
import { submitSearch } from '../helpers.tsx'
import { useRecentSearches } from '../input/useRecentSearches.ts'

import { useAggregationUIMode } from './components/aggregation'
import { NewSearchContent } from './components/new-search-content/NewSearchContent.tsx'
import { useCachedSearchResults } from './SearchResultsCacheProvider.tsx'
import { useStreamingSearchPings } from './useStreamingSearchPings.ts'

export interface StreamingSearchResultsProps
    extends SearchStreamingProps,
        Pick<SearchContextProps, 'selectedSearchContextSpec' | 'searchContextsEnabled'>,
        SettingsCascadeProps,
        PlatformContextProps,
        TelemetryProps,
        CodeInsightsProps,
        SearchAggregationProps,
        CodeMonitoringProps,
        SearchJobsProps,
        OwnConfigProps {
    authenticatedUser: AuthenticatedUser | null
    isSourcegraphDotCom: boolean
    fetchHighlightedFileLineRanges: (parameters: FetchFileParameters, force?: boolean) => Observable<string[][]>
}

export const StreamingSearchResults: FC<StreamingSearchResultsProps> = props => {
    const {
        streamSearch,
        authenticatedUser,
        telemetryService,
        isSourcegraphDotCom,
        searchAggregationEnabled,
        codeMonitoringEnabled,
        platformContext,
    } = props

    const settings = useSettings()
    const location = useLocation()
    const navigate = useNavigate()
    const { addRecentSearch } = useRecentSearches()

    // Feature flags
    const featureOverrides = useFeatureFlagOverrides()
    const [enableRepositoryMetadata] = useFeatureFlag('repository-metadata', true)

    // Global state
    const caseSensitive = useNavbarQueryState(state => state.searchCaseSensitivity)
    const patternType = useNavbarQueryState(state => state.searchPatternType)
    const searchMode = useNavbarQueryState(state => state.searchMode)
    const liveQuery = useNavbarQueryState(state => state.queryState.query)
    const submittedURLQuery = useNavbarQueryState(state => state.searchQueryFromURL)
    const queryState = useNavbarQueryState(state => state.queryState)
    const [urlFilters] = useUrlFilters()

    const setQueryState = useNavbarQueryState(state => state.setQueryState)
    const submitQuerySearch = useNavbarQueryState(state => state.submitSearch)
    const [aggregationUIMode] = useAggregationUIMode()

    // Derived state
    const trace = useMemo(() => new URLSearchParams(location.search).get('trace') ?? undefined, [location.search])
    const { searchOptions } = useDeveloperSettings(settings => settings.zoekt)

    const options: StreamSearchOptions = useMemo(
        () => ({
            version: LATEST_VERSION,
            patternType: patternType ?? SearchPatternType.standard,
            caseSensitive,
            trace,
            featureOverrides: formatUrlOverrideFeatureFlags(featureOverrides),
            searchMode,
            chunkMatches: true,
            // 5kb is a conservative upperbound on a reasonable line to show
            // to a user. In practice we can likely go much lower.
            maxLineLen: 5 * 1024,
            zoektSearchOptions: searchOptions,
            displayLimit: settings?.['search.displayLimit'],
        }),
        [patternType, caseSensitive, trace, featureOverrides, searchMode, searchOptions, settings]
    )
    const results = useCachedSearchResults({
        query: submittedURLQuery,
        urlFilters,
        options,
        streamSearch,
        telemetryService,
        telemetryRecorder: platformContext.telemetryRecorder,
    })

    const { logSearchResultClicked } = useStreamingSearchPings({
        telemetryService,
        isSourcegraphDotCom,
        results,
        isAuauthenticated: !!authenticatedUser,
        telemetryRecorder: platformContext.telemetryRecorder,
    })

    useEffect(() => {
        if (results?.state === 'complete') {
            // Add the recent search in the next queue execution to avoid updating a React component while rendering another component.
            setTimeout(
                () => addRecentSearch(submittedURLQuery, results.progress.matchCount, limitHit(results.progress)),
                0
            )
        }
    }, [addRecentSearch, results, submittedURLQuery])

    // Expand/contract all results
    const [allExpanded, setAllExpanded] = useState(false)

    const onExpandAllResultsToggle = useCallback(() => {
        setAllExpanded(oldValue => !oldValue)
        platformContext.telemetryRecorder.recordEvent(
            'search.resultsInfoBar.allResults',
            !allExpanded ? 'expand' : 'collapse'
        )
        telemetryService.log(!allExpanded ? 'allResultsExpanded' : 'allResultsCollapsed')
    }, [allExpanded, telemetryService, platformContext.telemetryRecorder])

    useEffect(() => {
        setAllExpanded(false) // Reset expanded state when new search is started
    }, [location.search])

    const handleSidebarSearchSubmit = useCallback(
        /**
         * The `updatedSearchQuery` is required in case we synchronously update the search
         * query in the event handlers and want to submit a new search. Without this argument,
         * the `handleSidebarSearchSubmit` function uses the outdated location reference
         * because the component was not re-rendered yet.
         *
         * Example use-case: search-aggregation result bar click where we first update the URL
         * by settings the `groupBy` search param to `null` and then synchronously call `submitSearch`.
         */
        (updates: QueryUpdate[], updatedSearchQuery?: string) => {
            submitQuerySearch(
                {
                    source: 'filter',
                    historyOrNavigate: navigate,
                    selectedSearchContextSpec: props.selectedSearchContextSpec,
                    location: {
                        ...location,
                        search: updatedSearchQuery || location.search,
                    },
                    telemetryRecorder: platformContext.telemetryRecorder,
                },
                updates
            )
        },
        [submitQuerySearch, props.selectedSearchContextSpec, navigate, location, platformContext.telemetryRecorder]
    )

    const onSearchAgain = useCallback(
        (additionalFilters: string[]) => {
            telemetryService.log('SearchSkippedResultsAgainClicked')
            platformContext.telemetryRecorder.recordEvent('search.resultsInfoBar.skippedResultsSearchAgain', 'click')

            const { selectedSearchContextSpec } = props
            submitSearch({
                historyOrNavigate: navigate,
                location,
                selectedSearchContextSpec,
                caseSensitive,
                patternType,
                query: applyAdditionalFilters(submittedURLQuery, additionalFilters),
                source: 'excludedResults',
                telemetryRecorder: platformContext.telemetryRecorder,
            })
        },
        [
            telemetryService,
            props,
            navigate,
            location,
            caseSensitive,
            patternType,
            submittedURLQuery,
            platformContext.telemetryRecorder,
        ]
    )

    /**
     * The `updatedSearchQuery` is required in case we synchronously update the search
     * query in the event handlers and want to submit a new search. Without this argument,
     * the `handleSidebarSearchSubmit` function uses the outdated location reference
     * because the component was not re-rendered yet.
     *
     * Example use-case: search-aggregation result bar click where we first update the URL
     * by settings the `groupBy` search param to `null` and then synchronously call `submitSearch`.
     */
    const handleSearchAggregationBarClick = (query: string, updatedSearchQuery: string): void => {
        const { selectedSearchContextSpec } = props
        submitSearch({
            historyOrNavigate: navigate,
            location: { ...location, search: updatedSearchQuery },
            selectedSearchContextSpec,
            caseSensitive,
            patternType,
            query,
            source: 'nav',
            telemetryRecorder: platformContext.telemetryRecorder,
        })
    }

    const onDisableSmartSearch = useCallback(() => {
        const { selectedSearchContextSpec } = props
        submitSearch({
            historyOrNavigate: navigate,
            location,
            selectedSearchContextSpec,
            caseSensitive,
            patternType: SearchPatternType.standard,
            query: submittedURLQuery,
            source: 'smartSearchDisabled',
            telemetryRecorder: platformContext.telemetryRecorder,
        })
    }, [caseSensitive, location, navigate, props, submittedURLQuery, platformContext.telemetryRecorder])

    const onTogglePatternType = useCallback(
        (patternType: SearchPatternType) => {
            const newPatternType =
                patternType !== SearchPatternType.keyword ? SearchPatternType.keyword : SearchPatternType.standard
            const { selectedSearchContextSpec } = props

            setSearchPatternType(newPatternType)
            submitSearch({
                historyOrNavigate: navigate,
                location,
                selectedSearchContextSpec,
                caseSensitive,
                patternType: newPatternType,
                query: submittedURLQuery,
                source: 'nav',
                telemetryRecorder: platformContext.telemetryRecorder,
            })
        },
        [caseSensitive, location, navigate, props, submittedURLQuery, platformContext.telemetryRecorder]
    )

    const hasResultsToAggregate = results?.state === 'complete' ? (results?.results.length ?? 0) > 0 : true
    const showAggregationPanel = searchAggregationEnabled && hasResultsToAggregate

    return (
        <NewSearchContent
            submittedURLQuery={submittedURLQuery}
            queryState={queryState}
            liveQuery={liveQuery}
            allExpanded={allExpanded}
            searchMode={searchMode}
            trace={!!trace}
            searchContextsEnabled={props.searchContextsEnabled}
            patternType={patternType}
            setPatternType={setSearchPatternType}
            results={results}
            showAggregationPanel={showAggregationPanel}
            selectedSearchContextSpec={props.selectedSearchContextSpec}
            aggregationUIMode={aggregationUIMode}
            caseSensitive={caseSensitive}
            authenticatedUser={authenticatedUser}
            isSourcegraphDotCom={isSourcegraphDotCom}
            enableRepositoryMetadata={enableRepositoryMetadata}
            options={options}
            codeMonitoringEnabled={codeMonitoringEnabled}
            fetchHighlightedFileLineRanges={props.fetchHighlightedFileLineRanges}
            onNavbarQueryChange={setQueryState}
            onSearchSubmit={handleSidebarSearchSubmit}
            onQuerySubmit={handleSearchAggregationBarClick}
            onExpandAllResultsToggle={onExpandAllResultsToggle}
            onSearchAgain={onSearchAgain}
            onDisableSmartSearch={onDisableSmartSearch}
            onTogglePatternType={onTogglePatternType}
            onLogSearchResultClick={logSearchResultClicked}
            settingsCascade={props.settingsCascade}
            telemetryService={telemetryService}
            platformContext={platformContext}
            searchJobsEnabled={props.searchJobsEnabled}
        />
    )
}

const applyAdditionalFilters = (query: string, additionalFilters: string[]): string => {
    let newQuery = query
    for (const filter of additionalFilters) {
        const fieldValue = filter.split(':', 2)
        newQuery = updateFilters(newQuery, fieldValue[0], fieldValue[1])
    }
    return newQuery
}
