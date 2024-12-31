import React, { useEffect } from 'react'

import { mdiPlusThick } from '@mdi/js'
import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { Icon, PageHeader, Button, Link, Text, H3, useSearchParameters } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'
import { Page } from '../../components/Page.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'
import { CodyProRoutes } from '../codyProRoutes.tsx'
import { CodyAlert } from '../components/CodyAlert.tsx'
import { PageHeaderIcon } from '../components/PageHeaderIcon.tsx'
import { InviteUsers } from '../invites/InviteUsers.tsx'
import { useTeamInvites } from '../management/api/react-query/invites.ts'
import { useCurrentSubscription, useSubscriptionSummary } from '../management/api/react-query/subscriptions.ts'
import { useTeamMembers } from '../management/api/react-query/teams.ts'

import { TeamMemberList } from './TeamMemberList.tsx'

interface CodyManageTeamPageProps extends TelemetryV2Props {
    authenticatedUser: AuthenticatedUser
}

const AuthenticatedCodyManageTeamPage: React.FunctionComponent<CodyManageTeamPageProps> = ({ telemetryRecorder }) => {
    useEffect(() => {
        telemetryRecorder.recordEvent('cody.team.management', 'view')
    }, [telemetryRecorder])

    const navigate = useNavigate()

    // Process query params
    const parameters = useSearchParameters()
    const newSeatsPurchasedParam = parameters.get('newSeatsPurchased')
    const newSeatsPurchased: number | null = newSeatsPurchasedParam ? parseInt(newSeatsPurchasedParam, 10) : null

    // Load data
    const subscriptionQueryResult = useCurrentSubscription()
    const subscriptionSummaryQueryResult = useSubscriptionSummary()
    const isAdmin = subscriptionSummaryQueryResult.data?.userRole === 'admin'
    const teamMembersQueryResult = useTeamMembers()
    const teamMembers = teamMembersQueryResult.data?.members
    const teamInvitesQueryResult = useTeamInvites()
    const teamInvites = teamInvitesQueryResult.data
    const errorMessage =
        subscriptionQueryResult.error?.message ||
        subscriptionSummaryQueryResult.error?.message ||
        teamMembersQueryResult.error?.message ||
        teamInvitesQueryResult.error?.message

    useEffect(() => {
        if (subscriptionQueryResult.data?.subscriptionStatus === 'canceled') {
            navigate(CodyProRoutes.Subscription)
        }
    }, [navigate, subscriptionQueryResult.data])

    return (
        <>
            <Page className={classNames('d-flex flex-column')}>
                <PageTitle title="Manage Cody team" />
                <PageHeader
                    className="mb-4 mt-4"
                    actions={
                        isAdmin && (
                            <div className="d-flex">
                                <Link
                                    to={CodyProRoutes.Manage}
                                    className="d-inline-flex align-items-center mr-3"
                                    onClick={() =>
                                        telemetryRecorder.recordEvent('cody.team.manage.subscription', 'click', {
                                            metadata: {
                                                tier:
                                                    subscriptionQueryResult.data?.subscriptionStatus !== 'canceled'
                                                        ? 1
                                                        : 0,
                                            },
                                        })
                                    }
                                >
                                    Manage subscription
                                </Link>
                                <Button
                                    as={Link}
                                    to={`${CodyProRoutes.NewProSubscription}?addSeats=1`}
                                    variant="success"
                                    className="text-nowrap"
                                >
                                    <Icon aria-hidden={true} svgPath={mdiPlusThick} /> Add seats
                                </Button>
                            </div>
                        )
                    }
                >
                    <PageHeader.Heading as="h2" styleAs="h1">
                        <div className="d-inline-flex align-items-center">
                            <PageHeaderIcon name="mdi-account-multiple-plus-gradient" className="mr-3" />
                            Manage team
                        </div>
                    </PageHeader.Heading>
                </PageHeader>

                {errorMessage ? (
                    <CodyAlert variant="error">
                        <H3>We couldn't load team data this time. Please try a bit later.</H3>
                        <Text size="small" className="text-muted mb-0">
                            {errorMessage}
                        </Text>
                    </CodyAlert>
                ) : null}

                {newSeatsPurchased && (
                    <CodyAlert variant="purpleSuccess">
                        <H3>{newSeatsPurchased} Cody teams seats purchased!</H3>
                        <Text size="small" className="mb-0">
                            Invited users will receive unlimited autocompletions and unlimited chat messages.
                        </Text>
                    </CodyAlert>
                )}

                {isAdmin && !!subscriptionSummaryQueryResult.data && (
                    <InviteUsers
                        telemetryRecorder={telemetryRecorder}
                        subscriptionSummary={subscriptionSummaryQueryResult.data}
                    />
                )}
                {!!subscriptionSummaryQueryResult.data && (
                    <TeamMemberList
                        teamId={subscriptionSummaryQueryResult.data.teamId}
                        teamMembers={teamMembers || []}
                        invites={teamInvites || []}
                        isAdmin={isAdmin}
                        telemetryRecorder={telemetryRecorder}
                    />
                )}
            </Page>
        </>
    )
}

export const CodyManageTeamPage = withAuthenticatedUser(AuthenticatedCodyManageTeamPage)
