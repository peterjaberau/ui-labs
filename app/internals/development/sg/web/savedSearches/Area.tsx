import type { FunctionComponent } from 'react'

import { mdiPlus } from '@mdi/js'
import { Route, Routes } from '@remix-run/react'

import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { Button, Icon, Link, PageHeader } from '~/internals/development/sg/wildcard'

import { AuthenticatedUserOnly } from '../auth/withAuthenticatedUser.tsx'
import { NotFoundPage } from '../components/HeroPage.tsx'
import { PageRoutes } from '../routes.constants.ts'

import { DetailPage } from './DetailPage.tsx'
import { EditPage } from './EditPage.tsx'
import { ListPage } from './ListPage.tsx'
import { NewForm } from './NewForm.tsx'
import { SavedSearchPage } from './Page.tsx'

/** The saved search area. */
export const Area: FunctionComponent<
    {
        authenticatedUser: Pick<AuthenticatedUser, 'id'> | null
        isSourcegraphDotCom: boolean
    } & TelemetryV2Props
> = ({ authenticatedUser, isSourcegraphDotCom, telemetryRecorder }) => (
    <Routes>
        <Route
            path=""
            element={
                <SavedSearchPage
                    title="Saved searches"
                    actions={
                        authenticatedUser && (
                            <Button to={`${PageRoutes.SavedSearches}/new`} variant="primary" as={Link}>
                                <Icon aria-hidden={true} svgPath={mdiPlus} /> New saved search
                            </Button>
                        )
                    }
                >
                    <ListPage telemetryRecorder={telemetryRecorder} />
                </SavedSearchPage>
            }
        />
        <Route
            path="new"
            element={
                <AuthenticatedUserOnly authenticatedUser={authenticatedUser}>
                    <SavedSearchPage
                        title="New saved search"
                        breadcrumbs={<PageHeader.Breadcrumb>New</PageHeader.Breadcrumb>}
                    >
                        <NewForm isSourcegraphDotCom={isSourcegraphDotCom} telemetryRecorder={telemetryRecorder} />
                    </SavedSearchPage>
                </AuthenticatedUserOnly>
            }
        />
        <Route
            path=":id/edit"
            element={
                <AuthenticatedUserOnly authenticatedUser={authenticatedUser}>
                    <EditPage isSourcegraphDotCom={isSourcegraphDotCom} telemetryRecorder={telemetryRecorder} />
                </AuthenticatedUserOnly>
            }
        />
        <Route path=":id" element={<DetailPage telemetryRecorder={telemetryRecorder} />} />
        <Route path="*" element={<NotFoundPage pageType="saved search" />} />
    </Routes>
)
