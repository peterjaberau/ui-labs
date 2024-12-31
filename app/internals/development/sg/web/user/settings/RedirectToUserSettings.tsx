import { Navigate, useLocation } from '@remix-run/react'

import { userURL } from '../index.ts'
import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'

/**
 * Redirects from /settings to /user/$USERNAME/settings, where $USERNAME is the currently authenticated user's
 * username.
 */
export const RedirectToUserSettings = withAuthenticatedUser<{
    authenticatedUser: AuthenticatedUser
}>(({ authenticatedUser }) => {
    const location = useLocation()

    return (
        <Navigate
            to={{
                pathname: `${userURL(authenticatedUser.username)}/settings`,
                search: location.search,
                hash: location.hash,
            }}
            replace={true}
        />
    )
})
