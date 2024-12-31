import { type FC, useEffect } from 'react'

import { mdiWebhook } from '@mdi/js'
import { useParams } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { PageHeader } from '~/internals/development/sg/wildcard'

import { CreatedByAndUpdatedByInfoByline } from '../components/Byline/CreatedByAndUpdatedByInfoByline.tsx'
import { ConnectionLoading } from '../components/FilteredConnection/ui'
import { PageTitle } from '../components/PageTitle.tsx'

import { useWebhookQuery } from './backend.ts'
import { WebhookCreateUpdatePage } from './WebhookCreateUpdatePage.tsx'

export interface SiteAdminWebhookUpdatePageProps extends TelemetryProps, TelemetryV2Props {}

export const SiteAdminWebhookUpdatePage: FC<SiteAdminWebhookUpdatePageProps> = ({
    telemetryService,
    telemetryRecorder,
}) => {
    useEffect(() => {
        telemetryService.logPageView('SiteAdminWebhookUpdatePage')
        telemetryRecorder.recordEvent('admin.webhook.update', 'view')
    }, [telemetryService, telemetryRecorder])

    const { id = '' } = useParams<{ id: string }>()

    const { loading, data } = useWebhookQuery(id)

    const webhook = data?.node && data.node.__typename === 'Webhook' ? data.node : undefined

    return (
        <>
            <PageTitle title="Edit incoming webhook" />
            {loading && !data && <ConnectionLoading />}
            {webhook && (
                <>
                    <PageHeader
                        path={[
                            { icon: mdiWebhook },
                            { to: '/site-admin/webhooks/incoming', text: 'Incoming webhooks' },
                            { text: webhook.name },
                        ]}
                        byline={
                            <CreatedByAndUpdatedByInfoByline
                                createdAt={webhook.createdAt}
                                createdBy={webhook.createdBy}
                                updatedAt={webhook.updatedAt}
                                updatedBy={webhook.updatedBy}
                            />
                        }
                        className="mb-3"
                        headingElement="h2"
                    />
                    <WebhookCreateUpdatePage existingWebhook={webhook} />
                </>
            )}
        </>
    )
}
