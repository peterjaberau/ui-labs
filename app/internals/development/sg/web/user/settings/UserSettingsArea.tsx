import React from 'react'

import classNames from 'classnames'
import MapSearchIcon from 'mdi-react/MapSearchIcon'
import { Route, Routes } from '@remix-run/react'

import { gql, useQuery } from '~/internals/development/sg/http-client'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'
import { RouteError } from '../../components/ErrorBoundary.tsx'
import { HeroPage, NotFoundPage } from '../../components/HeroPage.tsx'
import type {
    UserAreaUserFields,
    UserSettingsAreaUserFields,
    UserSettingsAreaUserProfileResult,
    UserSettingsAreaUserProfileVariables,
} from '../../graphql-operations.ts'
import { SiteAdminAlert } from '../../site-admin/SiteAdminAlert.tsx'
import type { RouteV6Descriptor } from '../../util/contributions.ts'
import type { UserAreaRouteContext } from '../area/UserArea.tsx'

import { isAccessTokenCallbackPage } from './accessTokens/UserSettingsCreateAccessTokenCallbackPage.tsx'
import { EditUserProfilePageGQLFragment } from './profile/UserSettingsProfilePage.tsx'
import { UserSettingsSidebar, type UserSettingsSidebarItems } from './UserSettingsSidebar.tsx'

import styles from './UserSettingsArea.module.scss'

export interface UserSettingsAreaRoute extends RouteV6Descriptor<UserSettingsAreaRouteContext> {}

export interface UserSettingsAreaProps extends UserAreaRouteContext, TelemetryProps, TelemetryV2Props {
    authenticatedUser: AuthenticatedUser
    sideBarItems: UserSettingsSidebarItems
    routes: readonly UserSettingsAreaRoute[]
    user: UserAreaUserFields
    isSourcegraphDotCom: boolean
}

export interface UserSettingsAreaRouteContext extends UserSettingsAreaProps {
    user: UserSettingsAreaUserFields
}

const UserSettingsAreaGQLFragment = gql`
    fragment UserSettingsAreaUserFields on User {
        __typename
        id
        username
        displayName
        url
        settingsURL
        avatarURL
        viewerCanAdminister
        siteAdmin @include(if: $siteAdmin)
        builtinAuth
        createdAt
        emails @skip(if: $isSourcegraphDotCom) {
            email
            verified
            isPrimary
        }
        organizations {
            nodes {
                id
                displayName
                name
            }
        }
        roles @skip(if: $isSourcegraphDotCom) {
            nodes {
                name
                system
            }
        }
        ...EditUserProfilePage
    }
    ${EditUserProfilePageGQLFragment}
`

const USER_SETTINGS_AREA_USER_PROFILE = gql`
    query UserSettingsAreaUserProfile($userID: ID!, $siteAdmin: Boolean!, $isSourcegraphDotCom: Boolean!) {
        node(id: $userID) {
            __typename
            ...UserSettingsAreaUserFields
        }
    }
    ${UserSettingsAreaGQLFragment}
`

/**
 * Renders a layout of a sidebar and a content area to display user settings.
 */
const AuthenticatedUserSettingsArea: React.FunctionComponent<
    React.PropsWithChildren<UserSettingsAreaProps>
> = props => {
    const { authenticatedUser, sideBarItems } = props

    const { data, error, loading, previousData } = useQuery<
        UserSettingsAreaUserProfileResult,
        UserSettingsAreaUserProfileVariables
    >(USER_SETTINGS_AREA_USER_PROFILE, {
        variables: {
            userID: props.user.id,
            siteAdmin: authenticatedUser.siteAdmin,
            isSourcegraphDotCom: props.isSourcegraphDotCom,
        },
    })

    // Accept stale data if recently updated, avoids unmounting components due to a brief lack of data
    const user =
        (data?.node?.__typename === 'User' && data?.node) ||
        (previousData?.node?.__typename === 'User' && previousData?.node)

    if (loading && !user) {
        return null
    }

    if (error) {
        throw new Error(error.message)
    }

    if (!user) {
        return <NotFoundPage pageType="user" />
    }

    if (authenticatedUser.id !== user.id && !user.viewerCanAdminister) {
        return (
            <HeroPage
                icon={MapSearchIcon}
                title="403: Forbidden"
                subtitle="You are not authorized to view or edit this user's settings."
            />
        )
    }

    const context: UserSettingsAreaRouteContext = {
        ...props,
        user,
    }

    const siteAdminViewingOtherUser = user.id !== authenticatedUser.id

    // The callback page for creating a personal access token is a full-screen page,
    // so we don't want to render the sidebar on it.
    const isFullScreenPage = isAccessTokenCallbackPage()

    const routeSuspense = (
        <React.Suspense fallback={<LoadingSpinner className="m-2" />}>
            <Routes>
                {props.routes.map(
                    ({ path, render, condition = () => true }) =>
                        condition(context) && (
                            <Route
                                errorElement={<RouteError />}
                                element={render(context)}
                                path={path}
                                key="hardcoded-key" // see https://github.com/ReactTraining/react-router/issues/4578#issuecomment-334489490
                            />
                        )
                )}
                <Route path="*" element={<NotFoundPage pageType="settings" />} />
            </Routes>
        </React.Suspense>
    )

    return isFullScreenPage ? (
        routeSuspense
    ) : (
        <>
            {/* Indicate when the site admin is viewing another user's account */}
            {siteAdminViewingOtherUser && (
                <SiteAdminAlert>
                    Viewing account for <strong>{user.username}</strong>
                </SiteAdminAlert>
            )}
            <div className="d-flex flex-column flex-sm-row">
                <UserSettingsSidebar
                    items={sideBarItems}
                    {...context}
                    className={classNames('flex-0 mr-3 mb-4', styles.userSettingsSidebar)}
                />
                <div className="flex-1">{routeSuspense}</div>
            </div>
        </>
    )
}

export const UserSettingsArea = withAuthenticatedUser(AuthenticatedUserSettingsArea)
