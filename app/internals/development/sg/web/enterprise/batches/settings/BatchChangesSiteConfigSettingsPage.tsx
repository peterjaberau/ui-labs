import React, { useEffect } from 'react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { PageHeader, Alert, Text } from '~/internals/development/sg/wildcard'

import { PageTitle } from '../../../components/PageTitle.tsx'

import { GlobalCodeHostConnections } from './CodeHostConnections.tsx'
import { GlobalCommitSigningIntegrations } from './CommitSigningIntegrations.tsx'
import { RolloutWindowsConfiguration } from './RolloutWindowsConfiguration.tsx'

interface BatchChangesSiteConfigSettingsPageProps extends TelemetryV2Props {}

/** The page area for all batch changes settings. It's shown in the site admin settings sidebar. */
export const BatchChangesSiteConfigSettingsPage: React.FunctionComponent<BatchChangesSiteConfigSettingsPageProps> = ({
    telemetryRecorder,
}) => {
    useEffect(() => telemetryRecorder.recordEvent('admin.batchChangesSettings', 'view'), [telemetryRecorder])
    return (
        <>
            <PageTitle title="Batch changes settings" />
            <PageHeader headingElement="h2" path={[{ text: 'Batch Changes settings' }]} className="mb-3" />
            <RolloutWindowsConfiguration />
            <GlobalCodeHostConnections
                headerLine={
                    <>
                        <Text>Add access tokens to enable Batch Changes changeset creation for all users.</Text>
                        <Alert variant="info">
                            You are configuring <strong>global credentials</strong> for Batch Changes. The credentials
                            on this page can be used by all users of this Sourcegraph instance to create and sync
                            changesets.
                        </Alert>
                    </>
                }
            />
            <GlobalCommitSigningIntegrations />
        </>
    )
}
