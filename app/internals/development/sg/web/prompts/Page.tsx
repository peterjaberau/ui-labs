import type { FunctionComponent, ReactNode } from 'react'

import { mdiMagnify } from '@mdi/js'
import { useLocation } from '@remix-run/react'

import { PageHeader } from '~/internals/development/sg/wildcard'

import { Page } from '../components/Page.tsx'
import { PageTitle } from '../components/PageTitle.tsx'
import type { PromptFields } from '../graphql-operations.ts'
import { PageRoutes } from '../routes.constants.ts'

import { urlToPromptsList } from './ListPage.tsx'
import { PromptIcon } from './PromptIcon.tsx'

/**
 * The template for a prompt page.
 */
export const PromptPage: FunctionComponent<{
    title?: string
    actions?: ReactNode
    breadcrumbsNamespace?: PromptFields['owner']
    breadcrumbs?: ReactNode
    children: ReactNode
}> = ({ title, actions, breadcrumbsNamespace, breadcrumbs, children }) => {
    const location = useLocation()
    const isRootPage = location.pathname === PageRoutes.Prompts

    return (
        <Page className="w-100">
            {title && <PageTitle title={title} />}
            <PageHeader actions={actions} className="mb-3">
                <PageHeader.Heading as="h2" styleAs="h1" className="mb-1">
                    <PageHeader.Breadcrumb icon={mdiMagnify} to="/search" aria-label="Code Search" />
                    <PageHeader.Breadcrumb icon={PromptIcon} to={isRootPage ? undefined : PageRoutes.Prompts}>
                        Prompt Library
                    </PageHeader.Breadcrumb>
                    {breadcrumbsNamespace && (
                        <PageHeader.Breadcrumb to={urlToPromptsList(breadcrumbsNamespace.id)}>
                            {breadcrumbsNamespace.namespaceName}
                        </PageHeader.Breadcrumb>
                    )}
                    {breadcrumbs}
                </PageHeader.Heading>
            </PageHeader>
            {children}
            <div className="pb-4" />
        </Page>
    )
}
