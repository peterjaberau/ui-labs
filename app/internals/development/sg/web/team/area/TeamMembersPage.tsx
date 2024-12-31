import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import { Page } from '../../components/Page.tsx'
import type { TeamAreaTeamFields } from '../../graphql-operations.ts'
import { TeamMemberListPage } from '../members/TeamMemberListPage.tsx'

import { TeamHeader } from './TeamHeader.tsx'

export interface TeamMembersPageProps extends TelemetryV2Props {
    /** The team that is the subject of the page. */
    team: TeamAreaTeamFields
}

export const TeamMembersPage: React.FunctionComponent<TeamMembersPageProps> = ({ team, telemetryRecorder }) => (
    <Page>
        <TeamHeader team={team} className="mb-3" />
        <div className="container">
            <TeamMemberListPage
                teamID={team.id}
                teamName={team.name}
                viewerCanAdminister={team.viewerCanAdminister}
                telemetryRecorder={telemetryRecorder}
            />
        </div>
    </Page>
)
