import { useEffect } from 'react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import { Page } from '../../components/Page.tsx'
import type { TeamAreaTeamFields } from '../../graphql-operations.ts'
import { ChildTeamListPage } from '../list/TeamListPage.tsx'

import { TeamHeader } from './TeamHeader.tsx'

export interface TeamChildTeamsPageProps extends TelemetryV2Props {
    /** The team that is the subject of the page. */
    team: TeamAreaTeamFields
}

export const TeamChildTeamsPage: React.FunctionComponent<TeamChildTeamsPageProps> = ({ team, telemetryRecorder }) => {
    useEffect(() => telemetryRecorder.recordEvent('team.childTeams', 'view'), [telemetryRecorder])
    return (
        <Page>
            <TeamHeader team={team} className="mb-3" />
            <div className="container">
                <ChildTeamListPage parentTeam={team.name} telemetryRecorder={telemetryRecorder} />
            </div>
        </Page>
    )
}
