import { forwardRef, type PropsWithChildren, useCallback, useMemo } from "react"
import {
  getDynamicFilterLinks,
  getFiltersOfKind,
  getRepoFilterLinks,
  getSearchReferenceFactory,
  getSearchSnippetLinks,
  getSearchTypeLinks,
  PersistSidebarStoreProvider,
  SearchSidebarSection,
  StickySearchSidebar,
  useLastRepoName,
} from "~/sg/branded"
import { useExperimentalFeatures } from "~/sg/shared/settings/settings.tsx"
import { FilterType } from "~/sg/shared/search/query/filters.ts"
import type { Filter } from "~/sg/shared/search/stream.ts"
import { AggregationUIMode, GroupResultsPing } from "~/sg/web/search/results/components/aggregation"
import { SectionID } from "~/sg/shared/settings/temporary/searchSidebar.ts"
import { SearchAggregations } from "~/sg/web/search/results/sidebar/SearchAggregations.tsx"
import { buildSearchURLQueryFromQueryState } from "~/sg/web/stores"
import { getRevisions } from "~/sg/web/search/results/sidebar/Revisions.tsx"
import { SearchFiltersSidebarProps } from "~/sg/web/search/results/sidebar/SearchFiltersSidebar.tsx"


export const SearchFiltersSidebar = forwardRef<HTMLElement, PropsWithChildren<SearchFiltersSidebarProps>>(props => {
  const {
    as: Component = StickySearchSidebar,
    liveQuery,
    submittedURLQuery,
    caseSensitive,
    patternType,
    filters,
    showAggregationPanel,
    selectedSearchContextSpec,
    aggregationUIMode,
    onNavbarQueryChange,
    onSearchSubmit,
    setSidebarCollapsed,
    telemetryService,
    telemetryRecorder,
    settingsCascade,
    children,
    ...attributes
  } = props

  // Settings
  const { enableSearchAggregations, proactiveSearchAggregations } = useExperimentalFeatures(features => ({
    enableSearchAggregations: features.searchResultsAggregations ?? true,
    proactiveSearchAggregations: features.proactiveSearchResultsAggregations ?? true,
  }))

  // Derived state
  const repoFilters = useMemo(() => getFiltersOfKind(filters, FilterType.repo), [filters])
  const repoName = useLastRepoName(liveQuery, repoFilters)

  const onDynamicFilterClicked = useCallback(
    (value: string, kind?: Filter['kind']) => {
      telemetryService.log('DynamicFilterClicked', { search_filter: { kind } })
      telemetryRecorder.recordEvent('search.dynamicFilter', 'click', {
        metadata: { kind: kind ? V2KindTypes[kind] : 0 },
      })
      onSearchSubmit([{ type: 'toggleSubquery', value }])
    },
    [telemetryService, onSearchSubmit, telemetryRecorder]
  )

  const onSnippetClicked = useCallback(
    (value: string) => {
      telemetryService.log('SearchSnippetClicked')
      telemetryRecorder.recordEvent('search.snippet', 'click')
      onSearchSubmit([{ type: 'toggleSubquery', value }])
    },
    [telemetryService, onSearchSubmit, telemetryRecorder]
  )

  const handleAggregationBarLinkClick = useCallback(
    (query: string, updatedSearchQuery: string): void => {
      onSearchSubmit([{ type: 'replaceQuery', value: query }], updatedSearchQuery)
    },
    [onSearchSubmit]
  )

  const handleGroupedByToggle = useCallback(
    (open: boolean): void => {
      telemetryService.log(open ? GroupResultsPing.ExpandSidebarSection : GroupResultsPing.CollapseSidebarSection)
      telemetryRecorder.recordEvent('search.group.results', open ? 'expand' : 'collapse')
    },
    [telemetryService, telemetryRecorder]
  )

  return (
    <Component {...attributes} onClose={() => setSidebarCollapsed(true)}>
      <PersistSidebarStoreProvider>
        {children}

        {showAggregationPanel &&
          enableSearchAggregations &&
          aggregationUIMode === AggregationUIMode.Sidebar && (
            <SearchSidebarSection
              sectionId={SectionID.GROUPED_BY}
              header="Group results by"
              postHeader={
                <CustomAggregationHeading
                  telemetryService={props.telemetryService}
                  telemetryRecorder={telemetryRecorder}
                />
              }
              // SearchAggregations content contains component that makes a few API network requests
              // in order to prevent these calls if this section is collapsed we turn off force render
              // for collapse section component
              forcedRender={false}
              onToggle={handleGroupedByToggle}
            >
              <SearchAggregations
                query={submittedURLQuery}
                patternType={patternType}
                proactive={proactiveSearchAggregations}
                caseSensitive={caseSensitive}
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
                onQuerySubmit={handleAggregationBarLinkClick}
              />
            </SearchSidebarSection>
          )}

        <SearchSidebarSection sectionId={SectionID.SEARCH_TYPES} header="Search Types">
          {getSearchTypeLinks({
            query: liveQuery,
            onNavbarQueryChange,
            selectedSearchContextSpec,
            buildSearchURLQueryFromQueryState,
            forceButton: false,
          })}
        </SearchSidebarSection>

        <SearchSidebarSection sectionId={SectionID.LANGUAGES} header="Languages" minItems={2}>
          {getDynamicFilterLinks(filters, ['lang'], onDynamicFilterClicked, label => `Search ${label} files`)}
        </SearchSidebarSection>

        <SearchSidebarSection
          sectionId={SectionID.REPOSITORIES}
          header="Repositories"
          searchOptions={{ ariaLabel: 'Find repositories', noResultText: getRepoFilterNoResultText }}
          minItems={2}
        >
          {getRepoFilterLinks(repoFilters, onDynamicFilterClicked)}
        </SearchSidebarSection>

        <SearchSidebarSection sectionId={SectionID.FILE_TYPES} header="File types">
          {getDynamicFilterLinks(filters, ['file'], onDynamicFilterClicked)}
        </SearchSidebarSection>
        <SearchSidebarSection sectionId={SectionID.OTHER} header="Other">
          {getDynamicFilterLinks(filters, ['utility'], onDynamicFilterClicked)}
        </SearchSidebarSection>

        {repoName && (
          <SearchSidebarSection
            sectionId={SectionID.REVISIONS}
            header="Revisions"
            searchOptions={{
              ariaLabel: 'Find revisions',
              clearSearchOnChange: repoName,
            }}
          >
            {getRevisions({ repoName, onFilterClick: onSearchSubmit })}
          </SearchSidebarSection>
        )}

        <SearchSidebarSection
          sectionId={SectionID.SEARCH_REFERENCE}
          header="Search reference"
          searchOptions={{
            ariaLabel: 'Find filters',
            // search reference should always preserve the filter
            // (false is just an arbitrary but static value)
            clearSearchOnChange: false,
          }}
        >
          {getSearchReferenceFactory({
            telemetryService,
            telemetryRecorder,
            setQueryState: onNavbarQueryChange,
          })}
        </SearchSidebarSection>

        <SearchSidebarSection sectionId={SectionID.SEARCH_SNIPPETS} header="Search snippets">
          {getSearchSnippetLinks(settingsCascade, onSnippetClicked)}
        </SearchSidebarSection>
      </PersistSidebarStoreProvider>
    </Component>
  )
})
