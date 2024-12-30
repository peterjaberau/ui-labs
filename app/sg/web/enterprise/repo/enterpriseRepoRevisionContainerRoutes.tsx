import { lazyComponent } from '~/sg/shared/util/lazyComponent'

import type { RepoRevisionContainerRoute } from '../../repo/RepoRevisionContainer'
import { createRepoRevisionContainerRoutes } from '../../repo/repoRevisionContainerRoutes'

const EnterpriseRepositoryFileTreePage = lazyComponent(
    () => import('./EnterpriseRepositoryFileTreePage'),
    'EnterpriseRepositoryFileTreePage'
)

export const enterpriseRepoRevisionContainerRoutes: readonly RepoRevisionContainerRoute[] =
    createRepoRevisionContainerRoutes(EnterpriseRepositoryFileTreePage)
