import React from 'react'

import { Navigate, useLocation } from '@remix-run/react'

import { getReturnTo } from './SignInSignUpCommon.tsx'

export const PostSignUpPage: React.FunctionComponent = () => {
    const location = useLocation()
    const returnTo = getReturnTo(location)

    // Redirects Cody PLG users without asking
    const params = new URLSearchParams()
    params.set('returnTo', returnTo)

    const navigateTo = '/sign-in?' + params.toString()

    return <Navigate to={navigateTo.toString()} replace={true} />
}
