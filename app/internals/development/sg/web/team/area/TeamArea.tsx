import * as React from 'react'

import AlertCircleIcon from 'mdi-react/AlertCircleIcon'
import MapSearchIcon from 'mdi-react/MapSearchIcon'
import { Route, Routes, useParams } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { LoadingSpinner, ErrorMessage } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { RouteError } from '../../components/ErrorBoundary.tsx'
import { HeroPage } from '../../components/HeroPage.tsx'
import type { TeamAreaTeamFields } from '../../graphql-operations.ts'
import type { RouteV6Descriptor } from '../../util/contributions.ts'

import { useTeam } from './backend.ts'
import type { TeamChildTeamsPageProps } from './TeamChildTeamsPage.tsx'
import type { TeamMembersPageProps } from './TeamMembersPage.tsx'
import type { TeamProfilePageProps } from './TeamProfilePage.tsx'

const TeamProfilePage = lazyComponent<TeamProfilePageProps, 'TeamProfilePage'>(
    () => import('./TeamProfilePage.tsx'),
    'TeamProfilePage'
)
const TeamMembersPage = lazyComponent<TeamMembersPageProps, 'TeamMembersPage'>(
    () => import('./TeamMembersPage.tsx'),
    'TeamMembersPage'
)
const TeamChildTeamsPage = lazyComponent<TeamChildTeamsPageProps, 'TeamChildTeamsPage'>(
    () => import('./TeamChildTeamsPage.tsx'),
    'TeamChildTeamsPage'
)

const NotFoundPage: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
    <HeroPage icon={MapSearchIcon} title="404: Not Found" subtitle="Sorry, the requested team was not found." />
)

export interface TeamAreaRoute extends RouteV6Descriptor<TeamAreaRouteContext> {}

export interface TeamAreaProps extends TelemetryV2Props {
    /**
     * The currently authenticated user.
     */
    authenticatedUser: AuthenticatedUser
}

/**
 * Properties passed to all page components in the team area.
 */
export interface TeamAreaRouteContext extends TelemetryV2Props {
    /** The team that is the subject of the page. */
    team: TeamAreaTeamFields

    /** Called when the team is updated and must be reloaded. */
    onTeamUpdate: () => void

    /** The currently authenticated user. */
    authenticatedUser: AuthenticatedUser
}

export const TeamArea: React.FunctionComponent<TeamAreaProps> = ({ authenticatedUser, telemetryRecorder }) => {
    const { teamName } = useParams<{ teamName: string }>()

    const { data, loading, error, refetch } = useTeam(teamName!)

    if (loading) {
        return null
    }
    if (error) {
        return <HeroPage icon={AlertCircleIcon} title="Error" subtitle={<ErrorMessage error={error} />} />
    }

    if (!data?.team) {
        return (
            <HeroPage
                icon={AlertCircleIcon}
                title="Error"
                subtitle={<ErrorMessage error={new Error(`Team not found: ${JSON.stringify(teamName)}`)} />}
            />
        )
    }

    const context: TeamAreaRouteContext = {
        authenticatedUser,
        team: data.team,
        onTeamUpdate: refetch,
        telemetryRecorder,
    }

    return (
        <React.Suspense fallback={<LoadingSpinner className="m-2" />}>
            <Routes>
                <Route path="" element={<TeamProfilePage {...context} />} errorElement={<RouteError />} />
                <Route path="members" element={<TeamMembersPage {...context} />} errorElement={<RouteError />} />
                <Route path="child-teams" element={<TeamChildTeamsPage {...context} />} errorElement={<RouteError />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </React.Suspense>
    )
}
