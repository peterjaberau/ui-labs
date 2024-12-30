import type { FC } from 'react'

import { Routes, Route, Navigate } from '@remix-run/react'

import { useQuery } from '~/sg/http-client'
import type { AuthenticatedUser } from '~/sg/shared/auth'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { SettingsCascadeProps } from '~/sg/shared/settings/settings'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'
import { LoadingSpinner, ErrorAlert } from '~/sg/wildcard'

import { codeHostExternalServices, nonCodeHostExternalServices } from '../components/externalServices/externalServices'
import type { SiteExternalServiceConfigResult, SiteExternalServiceConfigVariables } from '../graphql-operations'

import { SITE_EXTERNAL_SERVICE_CONFIG } from './backend'

const ExternalServicesPage = lazyComponent(
    () => import('../components/externalServices/ExternalServicesPage'),
    'ExternalServicesPage'
)
const ExternalServiceEditPage = lazyComponent(
    () => import('../components/externalServices/ExternalServiceEditPage'),
    'ExternalServiceEditPage'
)
const ExternalServicePage = lazyComponent(
    () => import('../components/externalServices/ExternalServicePage'),
    'ExternalServicePage'
)
const AddExternalServicesPage = lazyComponent(
    () => import('../components/externalServices/AddExternalServicesPage'),
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
