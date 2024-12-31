import { Navigate, useLocation } from '@remix-run/react'

import { userURL } from '../index.ts'
import type { AuthenticatedUser } from '../../auth.ts'
import { withAuthenticatedUser } from '../../auth/withAuthenticatedUser.tsx'

/**
 * Redirects from /user/$PATH to /user/$USERNAME/$PATH, where $USERNAME is the currently
 * authenticated user's username.
 */
export const RedirectToUserPage = withAuthenticatedUser<{ authenticatedUser: AuthenticatedUser }>(
    ({ authenticatedUser }) => {
        const location = useLocation()
        const path = location.pathname.replace(/^\/user\/?/, '') // trim leading '/user/?'

        return (
            <Navigate
                replace={true}
                to={{
                    pathname: `${userURL(authenticatedUser.username)}/${path}`,
                    search: location.search,
                    hash: location.hash,
                }}
            />
        )
    }
)
