import { type FC, useEffect } from 'react'

import { mdiWebhook } from '@mdi/js'

import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { PageHeader } from '~/sg/wildcard'

import { PageTitle } from '../components/PageTitle'

import { WebhookCreateUpdatePage } from './WebhookCreateUpdatePage'

export interface SiteAdminWebhookCreatePageProps extends TelemetryProps, TelemetryV2Props {}

export const SiteAdminWebhookCreatePage: FC<SiteAdminWebhookCreatePageProps> = ({
    telemetryService,
    telemetryRecorder,
}) => {
    useEffect(() => {
        telemetryService.logPageView('SiteAdminWebhookCreatePage')
        telemetryRecorder.recordEvent('admin.webhook.create', 'view')
    }, [telemetryService, telemetryRecorder])

    return (
        <>
            <PageTitle title="Create incoming webhook" />
            <PageHeader
                path={[
                    { icon: mdiWebhook },
                    { to: '/site-admin/webhooks/incoming', text: 'Incoming webhooks' },
                    { text: 'Create' },
                ]}
                headingElement="h2"
                description="Create a new incoming webhook"
                className="mb-3"
            />
            <WebhookCreateUpdatePage />
        </>
    )
}
