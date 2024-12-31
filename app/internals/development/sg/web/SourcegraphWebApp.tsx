import 'focus-visible'

import { type FC, useCallback, useEffect, useMemo, useState } from 'react'

import { ApolloProvider, SuspenseCache } from '@apollo/client'
import { RouterProvider, createBrowserRouter } from '@remix-run/react'
import { combineLatest, from, Subscription, fromEvent } from 'rxjs'

import { HTTPStatusError } from '~/internals/development/sg/http-client'
import { SharedSpanName, TraceSpanProvider } from '~/internals/development/sg/observability-client'
import type { PlatformContext } from '~/internals/development/sg/shared/platform/context.ts'
import { ShortcutProvider } from '~/internals/development/sg/shared/react-shortcuts'
import {
    isSearchContextSpecAvailable,
    SearchQueryStateStoreProvider,
    getDefaultSearchContextSpec,
} from '~/internals/development/sg/shared/search'
import { FilterType } from '~/internals/development/sg/shared/search/query/filters.ts'
import { filterExists } from '~/internals/development/sg/shared/search/query/validate.ts'
import {
    EMPTY_SETTINGS_CASCADE,
    type Settings,
    type SettingsCascadeOrError,
    SettingsProvider,
    type SettingsSubjectCommonFields,
} from '~/internals/development/sg/shared/settings/settings.tsx'
import { TemporarySettingsProvider } from '~/internals/development/sg/shared/settings/temporary/TemporarySettingsProvider.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { WildcardThemeContext, type WildcardTheme } from '~/internals/development/sg/wildcard'

import { authenticatedUser as authenticatedUserSubject, type AuthenticatedUser, authenticatedUserValue } from './auth.ts'
import { ComponentsComposer } from './components/ComponentsComposer.tsx'
import { ErrorBoundary, RouteError } from './components/ErrorBoundary.tsx'
import { FeatureFlagsLocalOverrideAgent } from './featureFlags/FeatureFlagsProvider.tsx'
import { LegacyRoute, LegacyRouteContextProvider } from './LegacyRouteContext.tsx'
import { PageError } from './PageError.tsx'
import { createPlatformContext } from './platform/context.ts'
import { parseSearchURL } from './search'
import { SearchResultsCacheProvider } from './search/results/SearchResultsCacheProvider.tsx'
import { GLOBAL_SEARCH_CONTEXT_SPEC } from './SearchQueryStateObserver.tsx'
import type { StaticAppConfig } from './staticAppConfig.ts'
import { setQueryStateFromSettings, useNavbarQueryState } from './stores'
import type { AppShellInit } from './storm/app-shell-init.ts'
import { Layout } from './storm/pages/LayoutPage/LayoutPage.tsx'
import { loader } from './storm/pages/LayoutPage/LayoutPage.loader.ts'
import { TelemetryRecorderProvider } from './telemetry'
import { UserSessionStores } from './UserSessionStores.tsx'
import { siteSubjectNoAdmin, viewerSubjectFromSettings } from './util/settings.ts'

export interface StaticSourcegraphWebAppContext {
    setSelectedSearchContextSpec: (spec: string) => void
    platformContext: PlatformContext
}

export interface DynamicSourcegraphWebAppContext {
    /**
     * TODO: Move all the search context logic as close as possible to the components
     * that actually need it. Remove related `useState` from the `SourcegraphWebApp` component.
     */
    selectedSearchContextSpec: string | undefined

    /**
     * TODO:
     * 1. Move `authenticatedUser` to Apollo Client.
     * 2. Remove `resolvedAuthenticatedUser` from the `SourcegraphWebApp` component
     * 3. Initialize `authenticatedUser` in the Apollo Client cache on application load from `window.context.currentUser`.
     * 4. Remove it from prop drilling and use the `useQuery` hook to get from it the Apollo client context.
     */
    authenticatedUser: AuthenticatedUser | null

    /**
     * TODO: Move `settingsCascade` out of rxjs. Probably, we can still keep rxjs wrapper
     * in the `platformContext` to avoid huge refactorings in non-Storm components
     * but the flow in `SourcegraphWebApp` needs to rely on the Apollo Client to untangle
     * subscriptions logic.
     *
     * Note: we already use Apollo Client to fetch settings inside of rxjs.
     */
    settingsCascade: SettingsCascadeOrError<Settings>

    /**
     * Computed from `settingsCascade` and `authenticatedUser`.
     */
    viewerSubject: SettingsSubjectCommonFields
}

const WILDCARD_THEME: WildcardTheme = {
    isBranded: true,
}

const suspenseCache = new SuspenseCache()

/**
 * The synchronous and static value that creates the `platformContext.settings`
 * observable that sends the API request to the server to get `viewerSettings`.
 *
 * Most of the dynamic values in the `SourcegraphWebApp` depend on this observable.
 */

interface SourcegraphWebAppProps extends StaticAppConfig, AppShellInit, TelemetryV2Props {}

export const SourcegraphWebApp: FC<SourcegraphWebAppProps> = props => {
    const { graphqlClient, temporarySettingsStorage } = props

    const [subscriptions] = useState(() => new Subscription())

    const telemetryRecorderProvider = new TelemetryRecorderProvider(graphqlClient, { enableBuffering: true })
    subscriptions.add(telemetryRecorderProvider)
    const platformContext = createPlatformContext({ telemetryRecorderProvider })

    const [resolvedAuthenticatedUser, setResolvedAuthenticatedUser] = useState<AuthenticatedUser | null>(
        authenticatedUserValue
    )

    /**
     * TODO: Remove this state and get this data from the Apollo Client cache.
     * It's already available there because we rely on `client.watchQuery` in `createPlatformContext`.
     */
    const [settingsCascade, setSettingsCascade] = useState<SettingsCascadeOrError<Settings>>(EMPTY_SETTINGS_CASCADE)
    const [viewerSubject, setViewerSubject] = useState<SettingsSubjectCommonFields>(() => siteSubjectNoAdmin())

    const [selectedSearchContextSpec, _setSelectedSearchContextSpec] = useState<string | undefined>()

    // NOTE(2022-09-08) Inform the inlined code from
    const setSelectedSearchContextSpecWithNoChecks = useCallback((spec: string): void => {
        _setSelectedSearchContextSpec(spec)
    }, [])
    const setSelectedSearchContextSpecToDefault = useCallback((): void => {
        if (!props.searchContextsEnabled) {
            return
        }
        subscriptions.add(
            getDefaultSearchContextSpec({ platformContext }).subscribe(spec => {
                // Fall back to global if no default is returned.
                setSelectedSearchContextSpecWithNoChecks(spec || GLOBAL_SEARCH_CONTEXT_SPEC)
            })
        )
    }, [props.searchContextsEnabled, setSelectedSearchContextSpecWithNoChecks, subscriptions, platformContext])

    const setSelectedSearchContextSpec = useCallback(
        (spec: string): void => {
            if (!props.searchContextsEnabled) {
                return
            }

            // The global search context is always available.
            if (spec === GLOBAL_SEARCH_CONTEXT_SPEC) {
                setSelectedSearchContextSpecWithNoChecks(spec)
            }

            // Check if the wanted search context is available.
            subscriptions.add(
                isSearchContextSpecAvailable({
                    spec,
                    platformContext,
                }).subscribe(isAvailable => {
                    if (isAvailable) {
                        setSelectedSearchContextSpecWithNoChecks(spec)
                    } else if (!selectedSearchContextSpec) {
                        // If the wanted search context is not available and
                        // there is no currently selected search context,
                        // set the current selection to the default search context.
                        // Otherwise, keep the current selection.
                        setSelectedSearchContextSpecToDefault()
                    }
                })
            )
        },
        [
            props.searchContextsEnabled,
            selectedSearchContextSpec,
            setSelectedSearchContextSpecToDefault,
            setSelectedSearchContextSpecWithNoChecks,
            subscriptions,
            platformContext,
        ]
    )

    // TODO: Move all of this initialization outside React so we don't need to
    // handle the optional states everywhere
    useEffect(() => {
        const parsedSearchURL = parseSearchURL(window.location.search)
        const parsedSearchQuery = parsedSearchURL.query || ''

        subscriptions.add(
            combineLatest([from(platformContext.settings), authenticatedUserSubject]).subscribe(
                ([settingsCascade, authenticatedUser]) => {
                    setQueryStateFromSettings(settingsCascade)
                    setSettingsCascade(settingsCascade)
                    setResolvedAuthenticatedUser(authenticatedUser ?? null)
                    setViewerSubject(viewerSubjectFromSettings(settingsCascade, authenticatedUser))
                }
            )
        )

        /**
         * TODO: move outiside of React and remove redundant rxjs wrapper.
         *
         * Listens for uncaught 401 errors when a user when a user was previously authenticated.
         *
         * Don't subscribe to this event when there wasn't an authenticated user,
         * as it could lead to an infinite loop of 401 -> reload -> 401
         */
        if (window.context.isAuthenticatedUser) {
            subscriptions.add(
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
            setSelectedSearchContextSpecWithNoChecks(GLOBAL_SEARCH_CONTEXT_SPEC)
        }
        if (!parsedSearchQuery) {
            // If no query is present (e.g. search page, settings page),
            // select the user's default search context.
            setSelectedSearchContextSpecToDefault()
        }

        return () => subscriptions.unsubscribe()

        // We only ever want to run this hook once when the component mounts for
        // parity with the old behavior.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const staticContext = {
        setSelectedSearchContextSpec,
        platformContext,
    } satisfies StaticSourcegraphWebAppContext

    const dynamicContext = {
        selectedSearchContextSpec,
        authenticatedUser: resolvedAuthenticatedUser,
        viewerSubject,
        settingsCascade,
    } satisfies DynamicSourcegraphWebAppContext

    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    // The layout page is needed for every route so we do not need to lazy-load it.
                    loader,
                    element: <LegacyRoute render={props => <Layout {...props} />} />,
                    children: props.routes,
                    errorElement: <RouteError />,
                },
            ]),
        [props.routes]
    )

    const pageError = window.pageError
    if (pageError && pageError.statusCode !== 404) {
        return <PageError pageError={pageError} />
    }

    return (
        <ComponentsComposer
            components={[
                // `ComponentsComposer` provides children via `React.cloneElement`.
                /* eslint-disable react/no-children-prop, react/jsx-key */
                <ApolloProvider client={graphqlClient} children={undefined} suspenseCache={suspenseCache} />,
                <WildcardThemeContext.Provider value={WILDCARD_THEME} />,
                <SettingsProvider settingsCascade={settingsCascade} />,
                <ErrorBoundary location={null} />,
                <TraceSpanProvider name={SharedSpanName.AppMount} />,
                <FeatureFlagsLocalOverrideAgent />,
                <ShortcutProvider />,
                <TemporarySettingsProvider temporarySettingsStorage={temporarySettingsStorage} />,
                <SearchResultsCacheProvider />,
                <SearchQueryStateStoreProvider useSearchQueryState={useNavbarQueryState} />,
                <LegacyRouteContextProvider
                    context={{
                        ...staticContext,
                        ...dynamicContext,
                        ...props,
                    }}
                />,
                /* eslint-enable react/no-children-prop, react/jsx-key */
            ]}
        >
            <RouterProvider router={router} />
            <UserSessionStores />
        </ComponentsComposer>
    )
}
