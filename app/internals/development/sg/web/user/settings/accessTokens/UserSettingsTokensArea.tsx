import React, { useCallback, useState } from 'react'

import { Route, Routes } from '@remix-run/react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import { NotFoundPage } from '../../../components/HeroPage.tsx'
import type { CreateAccessTokenResult } from '../../../graphql-operations.ts'
import type { UserSettingsAreaRouteContext } from '../UserSettingsArea.tsx'

import { UserSettingsCreateAccessTokenCallbackPage } from './UserSettingsCreateAccessTokenCallbackPage.tsx'
import { UserSettingsCreateAccessTokenPage } from './UserSettingsCreateAccessTokenPage.tsx'
import { UserSettingsTokensPage } from './UserSettingsTokensPage.tsx'

interface Props
    extends Pick<UserSettingsAreaRouteContext, 'user' | 'authenticatedUser'>,
        TelemetryProps,
        TelemetryV2Props {
    isSourcegraphDotCom: boolean
}

export const UserSettingsTokensArea: React.FunctionComponent<React.PropsWithChildren<Props>> = props => {
    const [newToken, setNewToken] = useState<CreateAccessTokenResult['createAccessToken'] | undefined>()

    const onDidPresentNewToken = useCallback(() => {
        setNewToken(undefined)
    }, [])

    return (
        <Routes>
            <Route
                path="new"
                element={<UserSettingsCreateAccessTokenPage {...props} onDidCreateAccessToken={setNewToken} />}
            />
            <Route
                path="new/callback"
                element={<UserSettingsCreateAccessTokenCallbackPage {...props} onDidCreateAccessToken={setNewToken} />}
            />
            <Route
                path=""
                element={
                    <UserSettingsTokensPage
                        {...props}
                        newToken={newToken}
                        onDidPresentNewToken={onDidPresentNewToken}
                    />
                }
            />
            <Route path="*" element={<NotFoundPage pageType="settings" />} />
        </Routes>
    )
}
