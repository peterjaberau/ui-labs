import 'focus-visible'

import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from '@remix-run/react'
import { combineLatest, from, fromEvent, Subscription, type Observable } from 'rxjs'

import { logger } from '~/internals/development/sg/common'
import { HTTPStatusError, type GraphQLClient } from '~/internals/development/sg/http-client'
import { SharedSpanName, TraceSpanProvider } from '~/internals/development/sg/observability-client'
import { fetchHighlightedFileLineRanges, type FetchFileParameters } from '~/internals/development/sg/shared/backend/file.ts'
import type { PlatformContext } from '~/internals/development/sg/shared/platform/context.ts'
import { ShortcutProvider } from '~/internals/development/sg/shared/react-shortcuts'
import {
    createSearchContext,
    deleteSearchContext,
    fetchSearchContext,
    fetchSearchContextBySpec,
    fetchSearchContexts,
    getDefaultSearchContextSpec,
    getUserSearchContextNamespaces,
    isSearchContextSpecAvailable,
    SearchQueryStateStoreProvider,
    updateSearchContext,
} from '~/internals/development/sg/shared/search'
import { FilterType } from '~/internals/development/sg/shared/search/query/filters.ts'
import { filterExists } from '~/internals/development/sg/shared/search/query/validate.ts'
import { aggregateStreamingSearch } from '~/internals/development/sg/shared/search/stream.ts'
import {
    EMPTY_SETTINGS_CASCADE,
    SettingsProvider,
    type SettingsCascadeProps,
} from '~/internals/development/sg/shared/settings/settings.tsx'
import { TemporarySettingsProvider } from '~/internals/development/sg/shared/settings/temporary/TemporarySettingsProvider.tsx'
import { TemporarySettingsStorage } from '~/internals/development/sg/shared/settings/temporary/TemporarySettingsStorage.ts'
import { NoOpTelemetryRecorderProvider } from '~/internals/development/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { WildcardThemeContext, type WildcardTheme } from '~/internals/development/sg/wildcard'

import { authenticatedUser as authenticatedUserSubject, authenticatedUserValue, type AuthenticatedUser } from './auth.ts'
import { getWebGraphQLClient } from './backend/graphql.ts'
import { isBatchChangesExecutionEnabled } from './batches'
import { ComponentsComposer } from './components/ComponentsComposer.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { FeatureFlagsLocalOverrideAgent } from './featureFlags/FeatureFlagsProvider.tsx'
import { LegacyLayout, type LegacyLayoutProps } from './LegacyLayout.tsx'
import { LegacyRouteContextProvider } from './LegacyRouteContext.tsx'
import { PageError } from './PageError.tsx'
import { createPlatformContext } from './platform/context.ts'
import { parseSearchURL } from './search'
import { SearchResultsCacheProvider } from './search/results/SearchResultsCacheProvider.tsx'
import { GLOBAL_SEARCH_CONTEXT_SPEC } from './SearchQueryStateObserver.tsx'
import type { StaticAppConfig } from './staticAppConfig.ts'
import { setQueryStateFromSettings, useDeveloperSettings, useNavbarQueryState } from './stores'
import { TelemetryRecorderProvider } from './telemetry'
import { UserSessionStores } from './UserSessionStores.tsx'
import { siteSubjectNoAdmin, viewerSubjectFromSettings } from './util/settings.ts'

interface LegacySourcegraphWebAppState extends SettingsCascadeProps {
    error?: Error

    /**
     * The currently authenticated user:
     * - `AuthenticatedUser` if the viewer is authenticated.
     * - `null` if the viewer is anonymous.
     */
    authenticatedUser: AuthenticatedUser | null

    /** GraphQL client initialized asynchronously to restore persisted cache. */
    graphqlClient?: GraphQLClient

    temporarySettingsStorage?: TemporarySettingsStorage

    viewerSubject: LegacyLayoutProps['viewerSubject']

    selectedSearchContextSpec?: string

    platformContext: PlatformContext
}

const WILDCARD_THEME: WildcardTheme = {
    isBranded: true,
}

/**
 * The root component.
 */
export class LegacySourcegraphWebApp extends React.Component<StaticAppConfig, LegacySourcegraphWebAppState> {
    private readonly subscriptions = new Subscription()

    constructor(props: StaticAppConfig) {
        super(props)

        const basePlatformContext = createPlatformContext({
            telemetryRecorderProvider: new NoOpTelemetryRecorderProvider({
                errorOnRecord: true, // this will be replaced on render()
            }),
        })

        this.state = {
            authenticatedUser: authenticatedUserValue,
            settingsCascade: EMPTY_SETTINGS_CASCADE,
            viewerSubject: siteSubjectNoAdmin(),
            platformContext: basePlatformContext,
        }
    }

    public componentDidMount(): void {
        const parsedSearchURL = parseSearchURL(window.location.search)
        const parsedSearchQuery = parsedSearchURL.query || ''

        document.documentElement.classList.add('theme')

        getWebGraphQLClient()
            .then(graphqlClient => {
                // Create real telemetry recorder provider
                const telemetryRecorderProvider = new TelemetryRecorderProvider(graphqlClient, {
                    enableBuffering: true,
                })
                this.subscriptions.add(telemetryRecorderProvider)

                // Override the no-op telemetryRecorder from initialization
                const { platformContext } = this.state
                platformContext.telemetryRecorder = telemetryRecorderProvider.getRecorder()

                this.setState({
                    graphqlClient,
                    temporarySettingsStorage: new TemporarySettingsStorage(
                        graphqlClient,
                        window.context.isAuthenticatedUser,
                        process.env.NODE_ENV === 'development' || useDeveloperSettings.getState().enabled
                    ),
                    platformContext,
                })
            })
            .catch(error => {
                logger.error('Error initializing GraphQL client', error)
            })

        this.subscriptions.add(
            combineLatest([
                from(this.state.platformContext.settings),
                // Start with `undefined` while we don't know if the viewer is authenticated or not.
                authenticatedUserSubject,
            ]).subscribe(([settingsCascade, authenticatedUser]) => {
                setQueryStateFromSettings(settingsCascade)
                this.setState({
                    settingsCascade,
                    authenticatedUser,
                    viewerSubject: viewerSubjectFromSettings(settingsCascade, authenticatedUser),
                })
            })
        )

        /**
         * Listens for uncaught 401 errors when a user when a user was previously authenticated.
         *
         * Don't subscribe to this event when there wasn't an authenticated user,
         * as it could lead to an infinite loop of 401 -> reload -> 401
         */
        if (window.context.isAuthenticatedUser) {
            this.subscriptions.add(
                fromEvent<ErrorEvent>(window, 'error').subscribe(event => {
                    if (event?.error instanceof HTTPStatusError && event.error.status === 401) {
                        location.reload()
                    }
                })
            )
        }

        if (parsedSearchQuery && !filterExists(parsedSearchQuery, FilterType.context)) {
            // If a context filter does not exist in the query, we have to switch the selected context
            // to global to match the UI with the backend semantics (if no context is specified in the query,
            // the query is run in global context).
            this.setSelectedSearchContextSpecWithNoChecks(GLOBAL_SEARCH_CONTEXT_SPEC)
        }
        if (!parsedSearchQuery) {
            // If no query is present (e.g. search page, settings page),
            // select the user's default search context.
            this.setSelectedSearchContextSpecToDefault()
        }
    }

    public componentWillUnmount(): void {
        this.subscriptions.unsubscribe()
    }

    public render(): React.ReactNode {
        const pageError = window.pageError
        if (pageError && pageError.statusCode !== 404) {
            return <PageError pageError={pageError} />
        }

        const { authenticatedUser, graphqlClient, temporarySettingsStorage } = this.state

        if (graphqlClient === undefined || temporarySettingsStorage === undefined) {
            return null
        }

        const legacyContext = {
            ...this.props,
            selectedSearchContextSpec: this.state.selectedSearchContextSpec,
            setSelectedSearchContextSpec: this.setSelectedSearchContextSpec,
            codeIntelligenceEnabled: !!this.props.codeIntelligenceEnabled,
            notebooksEnabled: this.props.notebooksEnabled,
            codeMonitoringEnabled: this.props.codeMonitoringEnabled,
            searchAggregationEnabled: this.props.searchAggregationEnabled,
            platformContext: this.state.platformContext,
            authenticatedUser,
            viewerSubject: this.state.viewerSubject,
            settingsCascade: this.state.settingsCascade,
        }

        const router = createBrowserRouter(
            createRoutesFromElements(
                <Route
                    path="*"
                    element={
                        <LegacyLayout
                            {...legacyContext}
                            {...this.props}
                            batchChangesExecutionEnabled={isBatchChangesExecutionEnabled(this.state.settingsCascade)}
                            batchChangesWebhookLogsEnabled={window.context.batchChangesWebhookLogsEnabled}
                            fetchHighlightedFileLineRanges={this.fetchHighlightedFileLineRanges}
                            telemetryService={EVENT_LOGGER}
                            telemetryRecorder={window.context.telemetryRecorder}
                            isSourcegraphDotCom={window.context.sourcegraphDotComMode}
                            isSearchContextSpecAvailable={isSearchContextSpecAvailable}
                            searchContextsEnabled={this.props.searchContextsEnabled}
                            getUserSearchContextNamespaces={getUserSearchContextNamespaces}
                            fetchSearchContexts={fetchSearchContexts}
                            fetchSearchContextBySpec={fetchSearchContextBySpec}
                            fetchSearchContext={fetchSearchContext}
                            createSearchContext={createSearchContext}
                            updateSearchContext={updateSearchContext}
                            deleteSearchContext={deleteSearchContext}
                            streamSearch={aggregateStreamingSearch}
                        />
                    }
                />
            )
        )

        return (
            <ComponentsComposer
                components={[
                    // `ComponentsComposer` provides children via `React.cloneElement`.
                    /* eslint-disable react/no-children-prop, react/jsx-key */
                    <ApolloProvider client={graphqlClient} children={undefined} />,
                    <WildcardThemeContext.Provider value={WILDCARD_THEME} />,
                    <SettingsProvider settingsCascade={this.state.settingsCascade} />,
                    <ErrorBoundary location={null} />,
                    <TraceSpanProvider name={SharedSpanName.AppMount} />,
                    <FeatureFlagsLocalOverrideAgent />,
                    <ShortcutProvider />,
                    <TemporarySettingsProvider temporarySettingsStorage={temporarySettingsStorage} />,
                    <SearchResultsCacheProvider />,
                    <SearchQueryStateStoreProvider useSearchQueryState={useNavbarQueryState} />,
                    <LegacyRouteContextProvider context={legacyContext} />,
                    /* eslint-enable react/no-children-prop, react/jsx-key */
                ]}
            >
                <RouterProvider router={router} />
                <UserSessionStores />
            </ComponentsComposer>
        )
    }

    private setSelectedSearchContextSpecWithNoChecks = (spec: string): void => {
        this.setState({ selectedSearchContextSpec: spec })
    }

    private setSelectedSearchContextSpec = (spec: string): void => {
        if (!this.props.searchContextsEnabled) {
            return
        }

        // The global search context is always available.
        if (spec === GLOBAL_SEARCH_CONTEXT_SPEC) {
            this.setSelectedSearchContextSpecWithNoChecks(spec)
        }

        // Check if the wanted search context is available.
        this.subscriptions.add(
            isSearchContextSpecAvailable({
                spec,
                platformContext: this.state.platformContext,
            }).subscribe(isAvailable => {
                if (isAvailable) {
                    this.setSelectedSearchContextSpecWithNoChecks(spec)
                } else if (!this.state.selectedSearchContextSpec) {
                    // If the wanted search context is not available and
                    // there is no currently selected search context,
                    // set the current selection to the default search context.
                    // Otherwise, keep the current selection.
                    this.setSelectedSearchContextSpecToDefault()
                }
            })
        )
    }

    private setSelectedSearchContextSpecToDefault = (): void => {
        if (!this.props.searchContextsEnabled) {
            return
        }

        this.subscriptions.add(
            getDefaultSearchContextSpec({ platformContext: this.state.platformContext }).subscribe(spec => {
                // Fall back to global if no default is returned.
                this.setSelectedSearchContextSpecWithNoChecks(spec || GLOBAL_SEARCH_CONTEXT_SPEC)
            })
        )
    }

    private fetchHighlightedFileLineRanges = (
        parameters: FetchFileParameters,
        force?: boolean | undefined
    ): Observable<string[][]> =>
        fetchHighlightedFileLineRanges({ ...parameters, platformContext: this.state.platformContext }, force)
}
