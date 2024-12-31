import type { FC } from 'react'

import { Routes, Route, Navigate } from '@remix-run/react'

import { useQuery } from '~/internals/development/sg/http-client'
import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { LoadingSpinner, ErrorAlert } from '~/internals/development/sg/wildcard'

import { codeHostExternalServices, nonCodeHostExternalServices } from '../components/externalServices/externalServices.tsx'
import type { SiteExternalServiceConfigResult, SiteExternalServiceConfigVariables } from '../graphql-operations.ts'

import { SITE_EXTERNAL_SERVICE_CONFIG } from './backend.ts'

const ExternalServicesPage = lazyComponent(
    () => import('../components/externalServices/ExternalServicesPage.tsx'),
    'ExternalServicesPage'
)
const ExternalServiceEditPage = lazyComponent(
    () => import('../components/externalServices/ExternalServiceEditPage.tsx'),
    'ExternalServiceEditPage'
)
const ExternalServicePage = lazyComponent(
    () => import('../components/externalServices/ExternalServicePage.tsx'),
    'ExternalServicePage'
)
const AddExternalServicesPage = lazyComponent(
    () => import('../components/externalServices/AddExternalServicesPage.tsx'),
    'AddExternalServicesPage'
)

interface Props extends TelemetryProps, TelemetryV2Props, PlatformContextProps, SettingsCascadeProps {
    authenticatedUser: AuthenticatedUser
}

export const SiteAdminExternalServicesArea: FC<Props> = props => {
    const { data, error, loading } = useQuery<SiteExternalServiceConfigResult, SiteExternalServiceConfigVariables>(
        SITE_EXTERNAL_SERVICE_CONFIG,
        {}
    )

    if (error && !loading) {
        return <ErrorAlert error={error} />
    }

    if (loading && !error) {
        return <LoadingSpinner />
    }

    if (!data) {
        return null
    }

    return (
        <Routes>
            <Route
                index={true}
                element={
                    <ExternalServicesPage
                        {...props}
                        externalServicesFromFile={data?.site?.externalServicesFromFile}
                        allowEditExternalServicesWithFile={data?.site?.allowEditExternalServicesWithFile}
                    />
                }
            />

            <Route path="/add" element={<Navigate to="new" replace={true} />} />
            <Route
                path="new"
                element={
                    <AddExternalServicesPage
                        {...props}
                        codeHostExternalServices={codeHostExternalServices}
                        nonCodeHostExternalServices={nonCodeHostExternalServices}
                        externalServicesFromFile={data?.site?.externalServicesFromFile}
                        allowEditExternalServicesWithFile={data?.site?.allowEditExternalServicesWithFile}
                    />
                }
            />
            <Route
                path=":externalServiceID"
                element={
                    <ExternalServicePage
                        {...props}
                        afterDeleteRoute="/site-admin/external-services"
                        externalServicesFromFile={data?.site?.externalServicesFromFile}
                        allowEditExternalServicesWithFile={data?.site?.allowEditExternalServicesWithFile}
                    />
                }
            />
            <Route
                path=":externalServiceID/edit"
                element={
                    <ExternalServiceEditPage
                        {...props}
                        externalServicesFromFile={data?.site?.externalServicesFromFile}
                        allowEditExternalServicesWithFile={data?.site?.allowEditExternalServicesWithFile}
                    />
                }
            />
        </Routes>
    )
}
