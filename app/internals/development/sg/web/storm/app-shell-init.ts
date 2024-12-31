import type { GraphQLClient } from '~/internals/development/sg/http-client'
import { TemporarySettingsStorage } from '~/internals/development/sg/shared/settings/temporary/TemporarySettingsStorage.ts'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import { getWebGraphQLClient } from '../backend/graphql.ts'
import { useDeveloperSettings } from '../stores'

export interface AppShellInit extends TelemetryV2Props {
    graphqlClient: GraphQLClient
    temporarySettingsStorage: TemporarySettingsStorage
}

export async function initAppShell(): Promise<AppShellInit> {
    const graphqlClient = await getWebGraphQLClient()
    const temporarySettingsStorage = new TemporarySettingsStorage(
        graphqlClient,
        window.context.isAuthenticatedUser,
        process.env.NODE_ENV === 'development' || useDeveloperSettings.getState().enabled
    )

    const platformContext = window.context
    const telemetryRecorder = platformContext.telemetryRecorder

    return {
        graphqlClient,
        temporarySettingsStorage,
        telemetryRecorder,
    }
}
