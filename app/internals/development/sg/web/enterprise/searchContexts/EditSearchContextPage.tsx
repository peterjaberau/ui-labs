import React, { useCallback, useEffect, useMemo } from 'react'

import { mdiMagnify } from '@mdi/js'
import { useParams } from '@remix-run/react'
import { type Observable, of, throwError } from 'rxjs'
import { catchError, startWith, switchMap } from 'rxjs/operators'

import { asError, isErrorLike } from '~/internals/development/sg/common'
import type {
    Scalars,
    SearchContextEditInput,
    SearchContextFields,
    SearchContextRepositoryRevisionsInput,
} from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Alert, LoadingSpinner, PageHeader, useObservable } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'
import { Page } from '../../components/Page.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'

import { SearchContextForm } from './SearchContextForm.tsx'

export interface EditSearchContextPageProps
    extends TelemetryProps,
        Pick<SearchContextProps, 'updateSearchContext' | 'fetchSearchContextBySpec' | 'deleteSearchContext'>,
        PlatformContextProps<'requestGraphQL' | 'telemetryRecorder'> {
    authenticatedUser: AuthenticatedUser
    isSourcegraphDotCom: boolean
}

export const AuthenticatedEditSearchContextPage: React.FunctionComponent<EditSearchContextPageProps> = props => {
    const LOADING = 'loading' as const

    const params = useParams()
    const spec: string = params.spec ? `${params.specOrOrg}/${params.spec}` : params.specOrOrg!

    const { updateSearchContext, fetchSearchContextBySpec, platformContext } = props

    useEffect(() => {
        platformContext.telemetryRecorder.recordEvent('searchContext.edit', 'view')
    }, [platformContext.telemetryRecorder])

    const onSubmit = useCallback(
        (
            id: Scalars['ID'] | undefined,
            searchContext: SearchContextEditInput,
            repositories: SearchContextRepositoryRevisionsInput[]
        ): Observable<SearchContextFields> => {
            if (!id) {
                return throwError(() => new Error('Cannot update search context with undefined ID'))
            }
            platformContext.telemetryRecorder.recordEvent('searchContext', 'update')
            return updateSearchContext({ id, searchContext, repositories }, platformContext)
        },
        [updateSearchContext, platformContext]
    )

    const searchContextOrError = useObservable(
        useMemo(
            () =>
                fetchSearchContextBySpec(spec, platformContext).pipe(
                    switchMap(searchContext => {
                        if (!searchContext.viewerCanManage) {
                            return throwError(
                                () => new Error('You do not have sufficient permissions to edit this context.')
                            )
                        }
                        return of(searchContext)
                    }),
                    startWith(LOADING),
                    catchError(error => [asError(error)])
                ),
            [spec, fetchSearchContextBySpec, platformContext]
        )
    )

    return (
        <div className="w-100">
            <Page>
                <div className="container col-sm-8">
                    <PageTitle title="Edit context" />
                    <PageHeader
                        className="mb-3"
                        path={[
                            {
                                icon: mdiMagnify,
                                to: '/search',
                                ariaLabel: 'Code Search',
                            },
                            {
                                to: '/contexts',
                                text: 'Contexts',
                            },
                            {
                                text: 'Edit context',
                            },
                        ]}
                    />
                    {searchContextOrError === LOADING && (
                        <div className="d-flex justify-content-center">
                            <LoadingSpinner inline={false} />
                        </div>
                    )}
                    {searchContextOrError && searchContextOrError !== LOADING && !isErrorLike(searchContextOrError) && (
                        <SearchContextForm {...props} searchContext={searchContextOrError} onSubmit={onSubmit} />
                    )}
                    {isErrorLike(searchContextOrError) && (
                        <Alert data-testid="search-contexts-alert-danger" variant="danger">
                            Error while loading the search context: <strong>{searchContextOrError.message}</strong>
                        </Alert>
                    )}
                </div>
            </Page>
        </div>
    )
}

export const EditSearchContextPage = withAuthenticatedUser(AuthenticatedEditSearchContextPage)
