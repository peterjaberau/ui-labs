import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { RedirectRoute } from '../../components/RedirectRoute.tsx'
import type { RepoContainerRoute } from '../../repo/RepoContainer.tsx'
import { repoContainerRoutes } from '../../repo/repoContainerRoutes.tsx'

const RepositoryCodeIntelArea = lazyComponent(
    () => import('../codeintel/repo/RepositoryCodeIntelArea.tsx'),
    'RepositoryCodeIntelArea'
)

const RepositoryBatchChangesArea = lazyComponent(
    () => import('../batches/repo/RepositoryBatchChangesArea.tsx'),
    'RepositoryBatchChangesArea'
)

const RepositoryOwnEditPage = lazyComponent(() => import('../own/RepositoryOwnEditPage.tsx'), 'RepositoryOwnEditPage')
const RepositoryOwnPage = lazyComponent(() => import('../own/RepositoryOwnPage.tsx'), 'RepositoryOwnPage')

export const enterpriseRepoContainerRoutes: readonly RepoContainerRoute[] = [
    ...repoContainerRoutes,

    {
        path: '/-/code-intelligence/*',
        render: () => (
            <RedirectRoute
                getRedirectURL={({ location }) => location.pathname.replace('/code-intelligence', '/code-graph')}
            />
        ),
    },
    {
        path: '/-/code-graph/*',
        render: context => (
            <RepositoryCodeIntelArea {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/-/batch-changes',
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
        render: context => (
            <RepositoryBatchChangesArea {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/-/own/*',
        condition: ({ isSourcegraphDotCom }) => !isSourcegraphDotCom,
        render: context => (
            <RepositoryOwnPage {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/-/own/edit',
        condition: ({ isSourcegraphDotCom }) => !isSourcegraphDotCom,
        render: context => (
            <RepositoryOwnEditPage {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
]
