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
import { PromptPage } from './Page.tsx'

/** The prompt area. */
export const Area: FunctionComponent<
    {
        authenticatedUser: AuthenticatedUser | null
    } & TelemetryV2Props
> = ({ authenticatedUser, telemetryRecorder }) => (
    <Routes>
        <Route
            path=""
            element={
                <PromptPage
                    title="Prompt Library"
                    actions={
                        authenticatedUser && (
                            <Button to={`${PageRoutes.Prompts}/new`} variant="primary" as={Link}>
                                <Icon aria-hidden={true} svgPath={mdiPlus} /> New prompt
                            </Button>
                        )
                    }
                >
                    <ListPage telemetryRecorder={telemetryRecorder} />
                </PromptPage>
            }
        />
        <Route
            path="new"
            element={
                <AuthenticatedUserOnly authenticatedUser={authenticatedUser}>
                    <PromptPage title="New prompt" breadcrumbs={<PageHeader.Breadcrumb>New</PageHeader.Breadcrumb>}>
                        <NewForm telemetryRecorder={telemetryRecorder} />
                    </PromptPage>
                </AuthenticatedUserOnly>
            }
        />
        <Route
            path=":id/edit"
            element={
                <AuthenticatedUserOnly authenticatedUser={authenticatedUser}>
                    <EditPage telemetryRecorder={telemetryRecorder} />
                </AuthenticatedUserOnly>
            }
        />
        <Route path=":id" element={<DetailPage telemetryRecorder={telemetryRecorder} />} />
        <Route path="*" element={<NotFoundPage pageType="prompt" />} />
    </Routes>
)
