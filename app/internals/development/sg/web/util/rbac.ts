import { findIndex } from 'lodash'

import type { AuthenticatedUser } from '../auth.ts'
import { RepoMetadataWritePermission } from '../rbac/constants.ts'

export const canWriteRepoMetadata = (user: Pick<AuthenticatedUser, 'permissions'> | null): boolean =>
    !!user &&
    findIndex(user.permissions.nodes, permission => permission.displayName === RepoMetadataWritePermission) !== -1
