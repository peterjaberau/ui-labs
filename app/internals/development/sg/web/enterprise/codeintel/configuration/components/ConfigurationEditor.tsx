import { type FunctionComponent, useCallback, useMemo, useState } from 'react'

import type { editor } from 'monaco-editor'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { useIsLightTheme } from '~/internals/development/sg/shared/theme.ts'
import { LoadingSpinner, screenReaderAnnounce, ErrorAlert, BeforeUnloadPrompt } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../../../auth.ts'
import type { SaveToolbarProps, SaveToolbarPropsGenerator } from '../../../../components/SaveToolbar.tsx'
import { DynamicallyImportedMonacoSettingsEditor } from '../../../../settings/DynamicallyImportedMonacoSettingsEditor.tsx'
import { useInferredConfig } from '../hooks/useInferredConfig.tsx'
import { useRepositoryConfig } from '../hooks/useRepositoryConfig.tsx'
import { useUpdateConfigurationForRepository } from '../hooks/useUpdateConfigurationForRepository.tsx'
import allConfigSchema from '../schema.json'

import { IndexConfigurationSaveToolbar, type IndexConfigurationSaveToolbarProps } from './IndexConfigurationSaveToolbar.tsx'

export interface ConfigurationEditorProps extends TelemetryProps, TelemetryV2Props {
    repoId: string
    authenticatedUser: AuthenticatedUser | null
}

export const ConfigurationEditor: FunctionComponent<ConfigurationEditorProps> = ({
    repoId,
    authenticatedUser,
    telemetryService,
    telemetryRecorder,
}) => {
    const isLightTheme = useIsLightTheme()
    const { inferredConfiguration, loadingInferred, inferredError } = useInferredConfig(repoId)
    const { configuration, loadingRepository, repositoryError } = useRepositoryConfig(repoId)
    const { updateConfigForRepository, isUpdating, updatingError } = useUpdateConfigurationForRepository()

    const save = useCallback(
        async (content: string) =>
            updateConfigForRepository({
                variables: { id: repoId, content },
                update: cache => cache.modify({ fields: { node: () => {} } }),
            }).then(() => {
                screenReaderAnnounce('Saved successfully')
                setDirty(false)
            }),
        [updateConfigForRepository, repoId]
    )

    const [dirty, setDirty] = useState<boolean>(false)
    const [editor, setEditor] = useState<editor.ICodeEditor>()
    const infer = useCallback(() => editor?.setValue(inferredConfiguration.raw), [editor, inferredConfiguration])
    const showInferButton =
        Boolean(inferredConfiguration.raw) && configuration !== null && configuration.raw !== inferredConfiguration.raw

    const customToolbar = useMemo<{
        saveToolbar: FunctionComponent<SaveToolbarProps & IndexConfigurationSaveToolbarProps>
        propsGenerator: SaveToolbarPropsGenerator<IndexConfigurationSaveToolbarProps>
    }>(
        () => ({
            saveToolbar: IndexConfigurationSaveToolbar,
            propsGenerator: props => {
                const mergedProps = {
                    ...props,
                    onInfer: infer,
                    loading: inferredConfiguration === undefined,
                    inferEnabled: showInferButton,
                }
                mergedProps.willShowError = () => !mergedProps.saving
                mergedProps.saveDiscardDisabled = () => mergedProps.saving || !dirty

                return mergedProps
            },
        }),
        [infer, inferredConfiguration, showInferButton, dirty]
    )

    // Show any set configuration if available, otherwise show the inferred configuration
    const preferredConfiguration = useMemo(() => {
        if (configuration !== null) {
            return configuration
        }

        return inferredConfiguration
    }, [configuration, inferredConfiguration])

    if (inferredError || repositoryError) {
        return <ErrorAlert prefix="Error fetching index configuration" error={inferredError || repositoryError} />
    }

    return (
        <>
            {updatingError && <ErrorAlert prefix="Error saving index configuration" error={updatingError} />}

            {loadingInferred || loadingRepository ? (
                <LoadingSpinner />
            ) : (
                <>
                    <BeforeUnloadPrompt when={dirty} message="Discard changes?" />
                    <DynamicallyImportedMonacoSettingsEditor
                        value={preferredConfiguration.raw}
                        jsonSchema={allConfigSchema}
                        canEdit={authenticatedUser?.siteAdmin}
                        readOnly={!authenticatedUser?.siteAdmin}
                        onSave={save}
                        saving={isUpdating}
                        height={600}
                        isLightTheme={isLightTheme}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                        customSaveToolbar={authenticatedUser?.siteAdmin ? customToolbar : undefined}
                        onDirtyChange={setDirty}
                        onEditor={setEditor}
                    />
                </>
            )}
        </>
    )
}
