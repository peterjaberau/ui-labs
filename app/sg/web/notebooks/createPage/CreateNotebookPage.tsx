import React, { useMemo } from 'react'

import { Navigate } from '@remix-run/react'
import { catchError, startWith, tap } from 'rxjs/operators'

import { asError, isErrorLike } from '~/sg/common'
import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { LoadingSpinner, useObservable, Alert } from '~/sg/wildcard'

import type { AuthenticatedUser } from '../../auth'
import { Page } from '../../components/Page'
import { PageRoutes } from '../../routes.constants'
import { createNotebook } from '../backend'

const LOADING = 'loading' as const

export const CreateNotebookPage: React.FunctionComponent<
    React.PropsWithChildren<TelemetryProps & TelemetryV2Props & { authenticatedUser: AuthenticatedUser }>
> = ({ telemetryService, authenticatedUser, telemetryRecorder }) => {
    const notebookOrError = useObservable(
        useMemo(
            () =>
                createNotebook({
                    notebook: { title: 'New Notebook', blocks: [], public: false, namespace: authenticatedUser.id },
                }).pipe(
                    startWith(LOADING),
                    catchError(error => [asError(error)]),
                    tap(value => {
                        if (value !== LOADING && !isErrorLike(value)) {
                            telemetryService.log('SearchNotebookCreated')
                            telemetryRecorder.recordEvent('notebook', 'create')
                        }
                    })
                ),
            [authenticatedUser, telemetryService, telemetryRecorder]
        )
    )

    if (notebookOrError && !isErrorLike(notebookOrError) && notebookOrError !== LOADING) {
        return <Navigate to={PageRoutes.Notebook.replace(':id', notebookOrError.id)} replace={true} />
    }

    return (
        <Page>
            {notebookOrError === LOADING && (
                <div className="d-flex justify-content-center">
                    <LoadingSpinner />
                </div>
            )}
            {isErrorLike(notebookOrError) && (
                <Alert variant="danger">
                    Error while creating the notebook: <strong>{notebookOrError.message}</strong>
                </Alert>
            )}
        </Page>
    )
}
