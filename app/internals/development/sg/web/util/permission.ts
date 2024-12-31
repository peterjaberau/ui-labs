import type { AuthenticatedUser } from '../auth.ts'
import type { RbacPermission } from '../rbac/constants.ts'

export const doesUserHavePermission = (
    user: Pick<AuthenticatedUser, 'permissions'> | null,
    permissionToCheckFor: RbacPermission
): boolean => {
    if (user === null) {
        return false
    }

    return user.permissions.nodes.some(permission => permission.displayName === permissionToCheckFor)
}
