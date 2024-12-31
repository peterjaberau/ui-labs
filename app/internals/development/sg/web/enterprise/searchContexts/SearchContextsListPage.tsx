import React, { useEffect, useState } from 'react'

import { mdiMagnify, mdiPlus } from '@mdi/js'

import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import { Alert, Button, Icon, Link, PageHeader } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import { Page } from '../../components/Page.tsx'

import { SearchContextsList } from './SearchContextsList.tsx'

import styles from './SearchContextsListPage.module.scss'

export interface SearchContextsListPageProps
    extends Pick<SearchContextProps, 'fetchSearchContexts'>,
        PlatformContextProps<'requestGraphQL' | 'telemetryRecorder'> {
    isSourcegraphDotCom: boolean
    authenticatedUser: AuthenticatedUser | null
}

export const SearchContextsListPage: React.FunctionComponent<SearchContextsListPageProps> = ({
    authenticatedUser,
    fetchSearchContexts,
    platformContext,
}) => {
    const [alert, setAlert] = useState<string | undefined>()

    useEffect(() => {
        platformContext.telemetryRecorder.recordEvent('searchContexts.list', 'view')
    }, [platformContext.telemetryRecorder])

    return (
        <div data-testid="search-contexts-list-page" className="w-100">
            <Page>
                <PageHeader
                    actions={
                        <div className={styles.actions}>
                            <Button to="/contexts/new" variant="primary" as={Link}>
                                <Icon aria-hidden={true} svgPath={mdiPlus} />
                                Create search context
                            </Button>
                        </div>
                    }
                    description={
                        <span className="text-muted">
                            Search code you care about with search contexts.{' '}
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
                        <PageHeader.Breadcrumb>Contexts</PageHeader.Breadcrumb>
                    </PageHeader.Heading>
                </PageHeader>
                {alert && <Alert variant="danger">{alert}</Alert>}
                <div role="tabpanel" id="search-context-list">
                    <SearchContextsList
                        authenticatedUser={authenticatedUser}
                        fetchSearchContexts={fetchSearchContexts}
                        platformContext={platformContext}
                        setAlert={setAlert}
                    />
                </div>
            </Page>
        </div>
    )
}
