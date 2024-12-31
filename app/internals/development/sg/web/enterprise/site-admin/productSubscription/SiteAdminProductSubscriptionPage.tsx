import React, { useEffect } from 'react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import { PageTitle } from '../../../components/PageTitle.tsx'

import { ProductSubscriptionStatus } from './ProductSubscriptionStatus.tsx'

interface SiteAdminProductSubscriptionPageProps extends TelemetryV2Props {}

/**
 * Displays the product subscription information from the license key in site configuration.
 */
export const SiteAdminProductSubscriptionPage: React.FunctionComponent<SiteAdminProductSubscriptionPageProps> = ({
    telemetryRecorder,
}) => {
    useEffect(() => telemetryRecorder.recordEvent('admin.productSubscription', 'view'), [telemetryRecorder])

    return (
        <div className="site-admin-product-subscription-page">
            <PageTitle title="Sourcegraph product subscription" />
            <ProductSubscriptionStatus telemetryRecorder={telemetryRecorder} />
        </div>
    )
}
