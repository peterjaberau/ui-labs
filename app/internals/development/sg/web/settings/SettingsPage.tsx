import * as React from 'react'

import { logger } from '~/internals/development/sg/common'
import { overwriteSettings } from '~/internals/development/sg/shared/settings/edit.ts'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Container } from '~/internals/development/sg/wildcard'

import type { SettingsAreaPageProps } from './SettingsArea.tsx'
import { SettingsFile } from './SettingsFile.tsx'

interface Props extends SettingsAreaPageProps, TelemetryProps, TelemetryV2Props {
    /** Optional description to render above the editor. */
    description?: JSX.Element
    isLightTheme: boolean
}

interface State {
    commitError?: Error
}

/**
 * Displays a page where the settings for a subject can be edited.
 */
export class SettingsPage extends React.PureComponent<Props, State> {
    public state: State = {}

    public render(): JSX.Element | null {
        return (
            <Container className="mb-3">
                <SettingsFile
                    settings={this.props.data.subjects.at(-1)!.latestSettings}
                    commitError={this.state.commitError}
                    onDidCommit={this.onDidCommit}
                    onDidDiscard={this.onDidDiscard}
                    isLightTheme={this.props.isLightTheme}
                    telemetryService={this.props.telemetryService}
                    telemetryRecorder={this.props.telemetryRecorder}
                />
            </Container>
        )
    }

    private onDidCommit = async (lastID: number | null, contents: string): Promise<void> => {
        this.setState({ commitError: undefined })

        // When updating settings for a settings subject that is in the viewer's settings cascade (i.e., if the
        // update will affect the viewer's settings), perform the update by calling through the shared
        // {@link PlatformContext#updateSettings} so that the update is seen by all settings observers.
        //
        // If the settings update is for some other subject that is unrelated to the viewer, then this is not
        // necessary.
        const isSubjectInViewerSettingsCascade = this.props.settingsCascade.subjects?.some(
            ({ subject }) => subject.id === this.props.subject.id
        )

        try {
            if (isSubjectInViewerSettingsCascade) {
                await this.props.platformContext.updateSettings(this.props.subject.id, contents)
            } else {
                await overwriteSettings(this.props.platformContext, this.props.subject.id, lastID, contents)
            }

            this.setState({ commitError: undefined })
            this.props.onUpdate()
        } catch (commitError) {
            this.setState({ commitError })
            logger.error(commitError)
        }
    }

    private onDidDiscard = (): void => {
        this.setState({ commitError: undefined })
    }
}
