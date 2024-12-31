import React from 'react'

import { PageHeader, Text } from '~/internals/development/sg/wildcard'

import { PageTitle } from '../../../components/PageTitle.tsx'
import type { UserAreaUserFields } from '../../../graphql-operations.ts'

import { UserCodeHostConnections } from './CodeHostConnections.tsx'
import { UserCommitSigningIntegrations } from './CommitSigningIntegrations.tsx'
import { RolloutWindowsConfiguration } from './RolloutWindowsConfiguration.tsx'

export interface BatchChangesSettingsAreaProps {
    user: UserAreaUserFields
}

/** The page area for all batch changes settings. It's shown in the user settings sidebar. */
export const BatchChangesSettingsArea: React.FunctionComponent<
    React.PropsWithChildren<BatchChangesSettingsAreaProps>
> = props => (
    <div className="test-batches-settings-page">
        <PageTitle title="Batch changes settings" />
        <PageHeader headingElement="h2" path={[{ text: 'Batch Changes settings' }]} className="mb-3" />
        <RolloutWindowsConfiguration />
        <UserCodeHostConnections
            headerLine={<Text>Add access tokens to enable Batch Changes changeset creation on your code hosts.</Text>}
            user={props.user}
        />
        <UserCommitSigningIntegrations userID={props.user.id} />
    </div>
)
