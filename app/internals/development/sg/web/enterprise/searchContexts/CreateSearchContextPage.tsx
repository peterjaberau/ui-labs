import React, { useCallback, useEffect } from 'react'

import { mdiMagnify } from '@mdi/js'
import { Navigate, useLocation } from '@remix-run/react'
import type { Observable } from 'rxjs'

import type {
    Scalars,
    SearchContextFields,
    SearchContextInput,
    SearchContextRepositoryRevisionsInput,
} from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Link, PageHeader } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'
import { Page } from '../../components/Page.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'
import { parseSearchURLQuery } from '../../search'

import { SearchContextForm } from './SearchContextForm.tsx'

export interface CreateSearchContextPageProps
    extends TelemetryProps,
        Pick<SearchContextProps, 'createSearchContext' | 'deleteSearchContext'>,
        PlatformContextProps<'requestGraphQL' | 'telemetryRecorder'> {
    authenticatedUser: AuthenticatedUser
    isSourcegraphDotCom: boolean
}

export const AuthenticatedCreateSearchContextPage: React.FunctionComponent<CreateSearchContextPageProps> = props => {
    const { authenticatedUser, createSearchContext, platformContext } = props

    const location = useLocation()

    const query = parseSearchURLQuery(location.search)

    useEffect(() => {
        platformContext.telemetryRecorder.recordEvent('searchContexts.create', 'view')
    }, [platformContext.telemetryRecorder])

    const onSubmit = useCallback(
        (
            id: Scalars['ID'] | undefined,
            searchContext: SearchContextInput,
            repositories: SearchContextRepositoryRevisionsInput[]
        ): Observable<SearchContextFields> => {
            platformContext.telemetryRecorder.recordEvent('searchContext', 'create')
            return createSearchContext({ searchContext, repositories }, platformContext)
        },
        [createSearchContext, platformContext]
    )

    if (!authenticatedUser) {
        return <Navigate to="/sign-in" replace={true} />
    }

    return (
        <div className="w-100">
            <Page>
                <div className="container col-sm-8">
                    <PageTitle title="Create context" />
                    <PageHeader
                        description={
                            <span className="text-muted">
                                A search context is a group of repositories at specified branches or revisions that you
                                can refer to in a search query.{' '}
                                <Link
                                    to="/help/code-search/working/search_contexts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn more
                                </Link>
                            </span>
                        }
                        className="mb-3"
                    >
                        <PageHeader.Heading as="h2" styleAs="h1">
                            <PageHeader.Breadcrumb icon={mdiMagnify} to="/search" aria-label="Code Search" />
                            <PageHeader.Breadcrumb to="/contexts">Contexts</PageHeader.Breadcrumb>
                            <PageHeader.Breadcrumb>Create context</PageHeader.Breadcrumb>
                        </PageHeader.Heading>
                    </PageHeader>
                    <SearchContextForm {...props} query={query} onSubmit={onSubmit} />
                </div>
            </Page>
        </div>
    )
}

export const CreateSearchContextPage = withAuthenticatedUser(AuthenticatedCreateSearchContextPage)
