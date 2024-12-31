import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { canWriteRepoMetadata } from '../util/rbac.ts'

import { RepositoryChangelistPage } from './commit/RepositoryCommitPage.tsx'
import { RepoRevisionWrapper } from './components/RepoRevision'
import type { RepoContainerRoute } from './RepoContainer.tsx'

const RepositoryCommitPage = lazyComponent(() => import('./commit/RepositoryCommitPage.tsx'), 'RepositoryCommitPage')
const RepositoryBranchesArea = lazyComponent(
    () => import('./branches/RepositoryBranchesArea.tsx'),
    'RepositoryBranchesArea'
)

const RepositoryReleasesArea = lazyComponent(
    () => import('./releases/RepositoryReleasesArea.tsx'),
    'RepositoryReleasesArea'
)
const RepositoryCompareArea = lazyComponent(() => import('./compare/RepositoryCompareArea.tsx'), 'RepositoryCompareArea')
const RepositoryStatsArea = lazyComponent(() => import('./stats/RepositoryStatsArea.tsx'), 'RepositoryStatsArea')

export const compareSpecPath = '/-/compare/*'

const RepositoryMetadataPage = lazyComponent(() => import('./RepoMetadataPage'), 'RepoMetadataPage')

export const repoContainerRoutes: readonly RepoContainerRoute[] = [
    {
        path: '/-/commit/:revspec',
        render: context => (
            <RepoRevisionWrapper>
                <RepositoryCommitPage {...context} />
            </RepoRevisionWrapper>
        ),
    },
    {
        path: '/-/changelist/:changelistID',
        render: context => (
            <RepoRevisionWrapper>
                <RepositoryChangelistPage {...context} />
            </RepoRevisionWrapper>
        ),
    },
    {
        path: '/-/branches/*',
        render: context => (
            <RepositoryBranchesArea {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/-/tags',
        render: context => <RepositoryReleasesArea {...context} />,
    },
    {
        path: '/-/versions',
        render: context => <RepositoryReleasesArea {...context} />,
    },
    {
        path: compareSpecPath,
        render: context => (
            <RepoRevisionWrapper>
                <RepositoryCompareArea {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
            </RepoRevisionWrapper>
        ),
    },
    {
        path: '/-/stats/contributors',
        render: context => (
            <RepositoryStatsArea {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
    {
        path: '/-/metadata',
        condition: ({ authenticatedUser }) => canWriteRepoMetadata(authenticatedUser),
        render: context => (
            <RepositoryMetadataPage {...context} telemetryRecorder={context.platformContext.telemetryRecorder} />
        ),
    },
]
