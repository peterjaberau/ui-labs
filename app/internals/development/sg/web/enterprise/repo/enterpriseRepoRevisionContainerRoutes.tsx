import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { RepoRevisionContainerRoute } from '../../repo/RepoRevisionContainer.tsx'
import { createRepoRevisionContainerRoutes } from '../../repo/repoRevisionContainerRoutes.tsx'

const EnterpriseRepositoryFileTreePage = lazyComponent(
    () => import('./EnterpriseRepositoryFileTreePage.tsx'),
    'EnterpriseRepositoryFileTreePage'
)

export const enterpriseRepoRevisionContainerRoutes: readonly RepoRevisionContainerRoute[] =
    createRepoRevisionContainerRoutes(EnterpriseRepositoryFileTreePage)
