import { TraceSpanProvider } from '~/internals/development/sg/observability-client'
import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'
import { LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { RepoRevisionContainerRoute } from './RepoRevisionContainer.tsx'

const RepositoryCommitsPage = lazyComponent(() => import('./commits/RepositoryCommitsPage.tsx'), 'RepositoryCommitsPage')
const RepositoryFileTreePage = lazyComponent(() => import('./RepositoryFileTreePage.tsx'), 'RepositoryFileTreePage')

const routeToObjectType = {
    '/-/blob/*': 'blob',
    '/-/tree/*': 'tree',
    ['*']: undefined,
} as const

export function createRepoRevisionContainerRoutes(
    PageComponent: typeof RepositoryFileTreePage
): RepoRevisionContainerRoute[] {
    return [
        ...Object.entries(routeToObjectType).map<RepoRevisionContainerRoute>(([routePath, objectType]) => ({
            path: routePath,
            render: props => (
                <TraceSpanProvider name="RepositoryFileTreePage" attributes={{ objectType }}>
                    <PageComponent {...props} objectType={objectType} globalContext={window.context} />
                </TraceSpanProvider>
            ),
        })),
        {
            path: '/-/commits/*',
            render: ({ revision, repo, ...context }) =>
                repo ? (
                    <RepositoryCommitsPage
                        {...context}
                        repo={repo}
                        revision={revision}
                        telemetryRecorder={context.platformContext.telemetryRecorder}
                    />
                ) : (
                    <LoadingSpinner />
                ),
        },
        {
            path: '/-/changelists/*',
            render: ({ revision, repo, ...context }) =>
                repo ? (
                    <RepositoryCommitsPage
                        {...context}
                        repo={repo}
                        revision={revision}
                        telemetryRecorder={context.platformContext.telemetryRecorder}
                    />
                ) : (
                    <LoadingSpinner />
                ),
        },
    ]
}

export const repoRevisionContainerRoutes: readonly RepoRevisionContainerRoute[] =
    createRepoRevisionContainerRoutes(RepositoryFileTreePage)
