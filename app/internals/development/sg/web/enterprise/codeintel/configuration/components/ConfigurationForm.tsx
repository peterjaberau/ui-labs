import React, { useCallback, useMemo, useState } from 'react'

import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { LoadingSpinner, ErrorAlert, screenReaderAnnounce } from '~/internals/development/sg/wildcard'

import { useInferredConfig } from '../hooks/useInferredConfig.tsx'
import { useRepositoryConfig } from '../hooks/useRepositoryConfig.tsx'
import { useUpdateConfigurationForRepository } from '../hooks/useUpdateConfigurationForRepository.tsx'

import { autoIndexJobsToFormData } from './inference-form/auto-index-to-form-job.ts'
import { InferenceForm } from './inference-form/InferenceForm.tsx'
import type { InferenceFormData, SchemaCompatibleInferenceFormData } from './inference-form/types.ts'

interface ConfigurationFormProps extends TelemetryProps {
    repoId: string
    authenticatedUser: AuthenticatedUser | null
}

export const ConfigurationForm: React.FunctionComponent<ConfigurationFormProps> = ({ repoId, authenticatedUser }) => {
    const [forceInfer, setForceInfer] = useState(false)

    const { updateConfigForRepository, updatingError } = useUpdateConfigurationForRepository()
    const { inferredConfiguration, loadingInferred, inferredError } = useInferredConfig(repoId)
    const { configuration, loadingRepository, repositoryError } = useRepositoryConfig(repoId)

    const showInferButton =
        Boolean(inferredConfiguration.raw) && configuration !== null && configuration.raw !== inferredConfiguration.raw

    const save = useCallback(
        async (data: SchemaCompatibleInferenceFormData) =>
            updateConfigForRepository({
                variables: { id: repoId, content: JSON.stringify(data, null, 4) },
                update: cache => cache.modify({ fields: { node: () => {} } }),
            }).then(() => {
                screenReaderAnnounce('Saved successfully')
            }),
        [updateConfigForRepository, repoId]
    )

    const preferredConfiguration = useMemo(() => {
        if (forceInfer) {
            return inferredConfiguration
        }

        if (configuration !== null) {
            return configuration
        }

        return inferredConfiguration
    }, [configuration, forceInfer, inferredConfiguration])

    // Show any set configuration if available, otherwise show the inferred configuration
    const preferredFormData = useMemo(
        (): InferenceFormData => autoIndexJobsToFormData({ jobs: preferredConfiguration.parsed, dirty: forceInfer }),
        [forceInfer, preferredConfiguration.parsed]
    )

    if (inferredError || repositoryError) {
        return <ErrorAlert prefix="Error fetching index configuration" error={inferredError || repositoryError} />
    }

    if (loadingInferred || loadingRepository) {
        return <LoadingSpinner className="d-block mx-auto mt-3" />
    }

    return (
        <div className="py-2">
            <InferenceForm
                key={preferredConfiguration.raw}
                initialFormData={preferredFormData}
                readOnly={!authenticatedUser?.siteAdmin}
                onSubmit={data => save(data)}
                showInferButton={showInferButton}
                onInfer={() => setForceInfer(true)}
            />
            {updatingError && <ErrorAlert error={updatingError} />}
        </div>
    )
}
