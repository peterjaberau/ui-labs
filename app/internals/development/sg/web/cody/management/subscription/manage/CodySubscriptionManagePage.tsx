import React, { useEffect } from 'react'

import classNames from 'classnames'
import { Navigate } from '@remix-run/react'

import { logger } from '~/internals/development/sg/common'
import { useQuery } from '~/internals/development/sg/http-client'
import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import { Alert, Card, LoadingSpinner, PageHeader, Text } from '~/internals/development/sg/wildcard'

import { withAuthenticatedUser } from '../../../../auth/withAuthenticatedUser.tsx'
import { Page } from '../../../../components/Page.tsx'
import { PageTitle } from '../../../../components/PageTitle.tsx'
import {
    CodySubscriptionPlan,
    type UserCodyPlanResult,
    type UserCodyPlanVariables,
} from '../../../../graphql-operations.ts'
import type { LegacyLayoutRouteContext } from '../../../../LegacyRouteContext.tsx'
import { CodyProRoutes } from '../../../codyProRoutes.tsx'
import { PageHeaderIcon } from '../../../components/PageHeaderIcon.tsx'
import { USER_CODY_PLAN } from '../../../subscription/queries.tsx'
import { useCurrentSubscription } from '../../api/react-query/subscriptions.ts'

import { InvoiceHistory } from './InvoiceHistory.tsx'
import { PaymentDetails } from './PaymentDetails.tsx'
import { SubscriptionDetails } from './SubscriptionDetails.tsx'

import styles from './CodySubscriptionManagePage.module.scss'

interface Props extends Pick<LegacyLayoutRouteContext, 'telemetryRecorder'> {
    authenticatedUser: AuthenticatedUser
}

const AuthenticatedCodySubscriptionManagePage: React.FC<Props> = ({ telemetryRecorder }) => {
    const {
        loading: userCodyPlanLoading,
        error: useCodyPlanError,
        data: userCodyPlanData,
    } = useQuery<UserCodyPlanResult, UserCodyPlanVariables>(USER_CODY_PLAN, {})

    useEffect(
        function recordViewEvent() {
            telemetryRecorder.recordEvent('cody.manage-subscription', 'view')
        },
        [telemetryRecorder]
    )

    if (userCodyPlanLoading) {
        return <LoadingSpinner />
    }

    if (useCodyPlanError) {
        logger.error('Failed to fetch Cody subscription data', useCodyPlanError)
        return null
    }

    const subscriptionData = userCodyPlanData?.currentUser?.codySubscription
    if (!subscriptionData) {
        logger.error('Cody subscription data is not available.')
        return null
    }

    // This page only applies to users who have a Cody Pro subscription to manage.
    // Otherwise, direct them to the ./new page to sign up.
    if (subscriptionData.plan !== CodySubscriptionPlan.PRO) {
        return <Navigate to={CodyProRoutes.NewProSubscription} replace={true} />
    }

    return (
        <Page className="d-flex flex-column">
            <PageTitle title="Manage subscription" />
            <PageHeader className="my-4 d-inline-flex align-items-center">
                <PageHeader.Heading as="h1" className="text-3xl font-medium">
                    <PageHeaderIcon name="cody-logo" className="mr-3" />
                    <Text as="span">Manage subscription</Text>
                </PageHeader.Heading>
            </PageHeader>

            <PageContent />
        </Page>
    )
}

const PageContent: React.FC = () => {
    const subscriptionQueryResult = useCurrentSubscription()

    if (subscriptionQueryResult.isLoading) {
        return <LoadingSpinner className="mx-auto" />
    }

    if (subscriptionQueryResult.isError) {
        return <Alert variant="danger">Failed to fetch subscription data</Alert>
    }

    const subscription = subscriptionQueryResult?.data
    if (!subscription) {
        return <Alert variant="warning">Subscription data is not available</Alert>
    }

    return (
        <>
            <Card className={classNames('p-4', styles.card)}>
                <SubscriptionDetails subscription={subscription} />

                <hr className={styles.divider} />

                <PaymentDetails subscription={subscription} />
            </Card>

            <Card className={classNames('my-4 p-4', styles.card)}>
                <InvoiceHistory />
            </Card>
        </>
    )
}

export const CodySubscriptionManagePage = withAuthenticatedUser(AuthenticatedCodySubscriptionManagePage)
