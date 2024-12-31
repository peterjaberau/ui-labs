import { type FC, useEffect } from 'react'

import { mdiWebhook } from '@mdi/js'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { PageHeader } from '~/internals/development/sg/wildcard'

import { PageTitle } from '../components/PageTitle.tsx'

import { WebhookCreateUpdatePage } from './WebhookCreateUpdatePage.tsx'

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
