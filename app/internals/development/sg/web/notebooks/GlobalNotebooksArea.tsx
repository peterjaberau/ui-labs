import React, { type FC } from 'react'

import { Routes, Route, Navigate } from '@remix-run/react'
import type { Observable } from 'rxjs'

import type { FetchFileParameters } from '~/internals/development/sg/shared/backend/file.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { AuthenticatedUser } from '../auth.ts'
import type { OwnConfigProps } from '../own/OwnConfigProps.ts'
import { PageRoutes } from '../routes.constants.ts'
import type { SearchStreamingProps } from '../search'

import type { NotebookProps } from './index.ts'

const NotebookPage = lazyComponent(() => import('./notebookPage/NotebookPage.tsx'), 'NotebookPage')
const CreateNotebookPage = lazyComponent(() => import('./createPage/CreateNotebookPage.tsx'), 'CreateNotebookPage')
const NotebooksListPage = lazyComponent(() => import('./listPage/NotebooksListPage.tsx'), 'NotebooksListPage')

export interface GlobalNotebooksAreaProps
    extends TelemetryProps,
        TelemetryV2Props,
        PlatformContextProps,
        SettingsCascadeProps,
        NotebookProps,
        SearchStreamingProps,
        Pick<SearchContextProps, 'searchContextsEnabled'>,
        OwnConfigProps {
    authenticatedUser: AuthenticatedUser | null
    isSourcegraphDotCom: boolean
    fetchHighlightedFileLineRanges: (parameters: FetchFileParameters, force?: boolean) => Observable<string[][]>
}
/**
 * The global code monitoring area.
 */
export const GlobalNotebooksArea: FC<React.PropsWithChildren<GlobalNotebooksAreaProps>> = ({
    authenticatedUser,
    ...outerProps
}) => (
    <Routes>
        <Route index={true} element={<NotebooksListPage authenticatedUser={authenticatedUser} {...outerProps} />} />
        <Route
            path="new"
            element={
                authenticatedUser ? (
                    <CreateNotebookPage authenticatedUser={authenticatedUser} {...outerProps} />
                ) : (
                    <Navigate to={PageRoutes.Notebooks} replace={true} />
                )
            }
        />
        <Route path=":id" element={<NotebookPage authenticatedUser={authenticatedUser} {...outerProps} />} />
    </Routes>
)
