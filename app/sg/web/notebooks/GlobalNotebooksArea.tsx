import React, { type FC } from 'react'

import { Routes, Route, Navigate } from '@remix-run/react'
import type { Observable } from 'rxjs'

import type { FetchFileParameters } from '~/sg/shared/backend/file'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { SearchContextProps } from '~/sg/shared/search'
import type { SettingsCascadeProps } from '~/sg/shared/settings/settings'
import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import type { AuthenticatedUser } from '../auth'
import type { OwnConfigProps } from '../own/OwnConfigProps'
import { PageRoutes } from '../routes.constants'
import type { SearchStreamingProps } from '../search'

import type { NotebookProps } from '.'

const NotebookPage = lazyComponent(() => import('./notebookPage/NotebookPage'), 'NotebookPage')
const CreateNotebookPage = lazyComponent(() => import('./createPage/CreateNotebookPage'), 'CreateNotebookPage')
const NotebooksListPage = lazyComponent(() => import('./listPage/NotebooksListPage'), 'NotebooksListPage')

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
