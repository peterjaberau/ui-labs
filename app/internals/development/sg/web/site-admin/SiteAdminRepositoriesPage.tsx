import React, { useEffect } from 'react'

import { useApolloClient } from '@apollo/client'
import { useLocation } from '@remix-run/react'

import { logger } from '~/internals/development/sg/common'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Alert, Link, PageHeader } from '~/internals/development/sg/wildcard'

import { PageTitle } from '../components/PageTitle.tsx'
import { refreshSiteFlags } from '../site/backend.ts'

import { SiteAdminRepositoriesContainer } from './SiteAdminRepositoriesContainer.tsx'

interface Props extends TelemetryProps, TelemetryV2Props {}

/** A page displaying the repositories on this site */
export const SiteAdminRepositoriesPage: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    telemetryService,
    telemetryRecorder,
}) => {
    const location = useLocation()

    useEffect(() => {
        telemetryService.logPageView('SiteAdminRepos')
        telemetryRecorder.recordEvent('admin.repos', 'view')
    }, [telemetryService, telemetryRecorder])

    // Refresh global alert about enabling repositories when the user visits & navigates away from this page.
    const client = useApolloClient()
    useEffect(() => {
        refreshSiteFlags(client).then(null, error => logger.error(error))
        return () => {
            refreshSiteFlags(client).then(null, error => logger.error(error))
        }
    }, [client])

    const showRepositoriesAddedBanner = new URLSearchParams(location.search).has('repositoriesUpdated')

    return (
        <div className="site-admin-repositories-page">
            <PageTitle title="Repositories - Admin" />
            {showRepositoriesAddedBanner && (
                <Alert variant="success" as="p">
                    Syncing repositories. It may take a few moments to clone and index each repository. Repository
                    statuses are displayed below.
                </Alert>
            )}
            <PageHeader
                path={[{ text: 'Repositories' }]}
                headingElement="h2"
                description={
                    <>
                        Repositories are synced from connected{' '}
                        <Link
                            to="/site-admin/external-services"
                            data-testid="test-repositories-code-host-connections-link"
                        >
                            code host connections
                        </Link>
                        .
                    </>
                }
                className="mb-3"
            />

            <SiteAdminRepositoriesContainer />
        </div>
    )
}
