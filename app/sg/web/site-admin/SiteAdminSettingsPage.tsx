import * as React from 'react'

import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { SettingsCascadeProps } from '~/sg/shared/settings/settings'
import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { useIsLightTheme } from '~/sg/shared/theme'
import { Text } from '~/sg/wildcard'

import type { AuthenticatedUser } from '../auth'
import { PageTitle } from '../components/PageTitle'
import type { SiteResult } from '../graphql-operations'
import { SettingsArea } from '../settings/SettingsArea'

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
