import * as React from 'react'

import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { useIsLightTheme } from '~/internals/development/sg/shared/theme.ts'
import { Text } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../auth.ts'
import { PageTitle } from '../components/PageTitle.tsx'
import type { SiteResult } from '../graphql-operations.ts'
import { SettingsArea } from '../settings/SettingsArea.tsx'

interface Props extends PlatformContextProps, SettingsCascadeProps, TelemetryProps, TelemetryV2Props {
    authenticatedUser: AuthenticatedUser
    site: Pick<SiteResult['site'], '__typename' | 'id'>
}

export const SiteAdminSettingsPage: React.FunctionComponent<React.PropsWithChildren<Props>> = props => {
    const isLightTheme = useIsLightTheme()

    return (
        <>
            <PageTitle title="Global settings" />
            <SettingsArea
                {...props}
                isLightTheme={isLightTheme}
                subject={props.site}
                authenticatedUser={props.authenticatedUser}
                extraHeader={
                    <Text>
                        Global settings apply to all organizations and users. Settings for a user or organization
                        override global settings.
                    </Text>
                }
            />
        </>
    )
}
