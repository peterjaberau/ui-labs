import { type ReactElement, useEffect } from 'react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Text } from '~/internals/development/sg/wildcard'

import { SiteAdminRepositoriesContainer } from '../../site-admin/SiteAdminRepositoriesContainer.tsx'

import { CustomNextButton } from './setup-steps'

interface SyncRepositoriesStepProps extends TelemetryProps, TelemetryV2Props {
    baseURL: string
}

export function SyncRepositoriesStep({
    telemetryService,
    telemetryRecorder,
    baseURL,
    ...attributes
}: SyncRepositoriesStepProps): ReactElement {
    useEffect(() => {
        telemetryService.log('SetupWizardLandedSyncRepositories')
        telemetryRecorder.recordEvent('setupWizard.syncRepos', 'view')
    }, [telemetryService, telemetryRecorder])

    const handleFinishButtonClick = (): void => {
        telemetryService.log('SetupWizardFinishedSuccessfully')
        telemetryRecorder.recordEvent('setupWizard', 'finish')
    }

    return (
        <section {...attributes}>
            <Text className="mb-2">
                It may take a few moments to clone and index each repository. View statuses below.
            </Text>
            <SiteAdminRepositoriesContainer alwaysPoll={true} />

            <CustomNextButton label="Start searching" disabled={false} onClick={handleFinishButtonClick} />
        </section>
    )
}
