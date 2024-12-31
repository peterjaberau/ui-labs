import * as React from 'react'

import { Routes, Route } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../auth.ts'
import { withAuthenticatedUser } from '../auth/withAuthenticatedUser.tsx'
import { RouteError } from '../components/ErrorBoundary.tsx'
import { NotFoundPage } from '../components/HeroPage.tsx'

import type { TeamAreaProps } from './area/TeamArea.tsx'
import type { TeamListPageProps } from './list/TeamListPage.tsx'
import type { NewTeamPageProps } from './new/NewTeamPage.tsx'

const TeamArea = lazyComponent<TeamAreaProps, 'TeamArea'>(() => import('./area/TeamArea.tsx'), 'TeamArea')
const TeamListPage = lazyComponent<TeamListPageProps, 'TeamListPage'>(
    () => import('./list/TeamListPage.tsx'),
    'TeamListPage'
)
const NewTeamPage = lazyComponent<NewTeamPageProps, 'NewTeamPage'>(() => import('./new/NewTeamPage.tsx'), 'NewTeamPage')

export interface Props extends TelemetryV2Props {
    authenticatedUser: AuthenticatedUser
    isSourcegraphDotCom: boolean
}

/**
 * Renders a layout of a sidebar and a content area to display team-related pages.
 */
const AuthenticatedTeamsArea: React.FunctionComponent<React.PropsWithChildren<Props>> = props => {
    // No teams on sourcegraph.com
    if (props.isSourcegraphDotCom) {
        return <NotFoundPage pageType="team" />
    }
    return (
        <React.Suspense fallback={<LoadingSpinner className="m-2" />}>
            <Routes>
                <Route path="new" element={<NewTeamPage {...props} />} errorElement={<RouteError />} />
                <Route path="" element={<TeamListPage {...props} />} errorElement={<RouteError />} />
                <Route path=":teamName/*" element={<TeamArea {...props} />} errorElement={<RouteError />} />
                <Route path="*" element={<NotFoundPage pageType="team" />} errorElement={<RouteError />} />
            </Routes>
        </React.Suspense>
    )
}

export const TeamsArea = withAuthenticatedUser(AuthenticatedTeamsArea)
