import React, { useEffect } from 'react'

import { Navigate, useLocation } from '@remix-run/react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { useIsLightTheme } from '~/internals/development/sg/shared/theme.ts'
import { Container, Link, Text } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../auth.ts'
import { PageTitle } from '../components/PageTitle.tsx'
import type { SourcegraphContext } from '../jscontext.ts'
import { PageRoutes } from '../routes.constants.ts'
import { EventName } from '../util/constants.ts'

import { AuthPageWrapper } from './AuthPageWrapper.tsx'
import { CloudSignUpPage, ShowEmailFormQueryParameter } from './CloudSignUpPage.tsx'
import { getReturnTo } from './SignInSignUpCommon.tsx'
import { type SignUpArguments, SignUpForm } from './SignUpForm.tsx'
import { VsCodeSignUpPage } from './VsCodeSignUpPage.tsx'

import styles from './SignUpPage.module.scss'

export interface SignUpPageProps extends TelemetryProps, TelemetryV2Props {
    authenticatedUser: AuthenticatedUser | null
    context: Pick<
        SourcegraphContext,
        | 'allowSignup'
        | 'externalURL'
        | 'authProviders'
        | 'sourcegraphDotComMode'
        | 'xhrHeaders'
        | 'authPasswordPolicy'
        | 'authMinPasswordLength'
    >
}

export const SignUpPage: React.FunctionComponent<React.PropsWithChildren<SignUpPageProps>> = ({
    authenticatedUser,
    context,
    telemetryService,
    telemetryRecorder,
}) => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const invitedBy = query.get('invitedBy')
    const returnTo = getReturnTo(location)

    const isLightTheme = useIsLightTheme()

    useEffect(() => {
        EVENT_LOGGER.logViewEvent('SignUp', null, false)
        telemetryRecorder.recordEvent('auth.signUp', 'view', {
            metadata: { 'invited-by-user': invitedBy !== null ? 1 : 0 },
        })

        if (invitedBy !== null) {
            const parameters = {
                isAuthenticated: !!authenticatedUser,
                allowSignup: context.allowSignup,
            }
            EVENT_LOGGER.log('SignUpInvitedByUser', parameters, parameters)
        }
    }, [invitedBy, authenticatedUser, context.allowSignup, telemetryRecorder])

    if (authenticatedUser) {
        return <Navigate to={returnTo} replace={true} />
    }

    if (!context.allowSignup) {
        return <Navigate to="/sign-in" replace={true} />
    }

    const handleSignUp = (args: SignUpArguments): Promise<void> =>
        fetch('/-/sign-up', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                ...context.xhrHeaders,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args),
        }).then(response => {
            if (response.status !== 200) {
                return response.text().then(text => Promise.reject(new Error(text)))
            }

            const source = query.get('editor') === 'vscode' ? 'ide_extension' : 'web'
            telemetryService.log(EventName.SIGNUP_COMPLETED, { source }, { source })
            const v2Source = query.get('editor') === 'vscode' ? 0 : 1
            telemetryRecorder.recordEvent('auth.signUp', 'complete', { metadata: { source: v2Source } })

            // Redirects to the /post-sign-up after successful signup on sourcegraphDotCom.
            window.location.replace(context.sourcegraphDotComMode ? PageRoutes.PostSignUp : returnTo)

            return Promise.resolve()
        })

    if (query.get('editor') === 'vscode') {
        return (
            <VsCodeSignUpPage
                source={query.get('src')}
                onSignUp={handleSignUp}
                showEmailForm={query.has(ShowEmailFormQueryParameter)}
                context={context}
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
            />
        )
    }

    if (context.sourcegraphDotComMode) {
        return (
            <CloudSignUpPage
                source={query.get('src')}
                onSignUp={handleSignUp}
                isLightTheme={isLightTheme}
                showEmailForm={query.has(ShowEmailFormQueryParameter)}
                context={context}
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
                isSourcegraphDotCom={context.sourcegraphDotComMode}
            />
        )
    }

    return (
        <>
            <PageTitle title="Sign up" />
            <AuthPageWrapper
                title="Welcome to Sourcegraph"
                description={
                    context.sourcegraphDotComMode ? 'Sign up for Sourcegraph.com' : 'Sign up for Sourcegraph Server'
                }
                sourcegraphDotComMode={context.sourcegraphDotComMode}
                className={styles.wrapper}
            >
                {context.sourcegraphDotComMode && <Text className="pt-1 pb-2">Start searching public code now</Text>}
                <Container>
                    <SignUpForm context={context} onSignUp={handleSignUp} telemetryRecorder={telemetryRecorder} />
                </Container>
                <Text className="text-center mt-3">
                    Already have an account? <Link to={`/sign-in${location.search}`}>Sign in</Link>
                </Text>
            </AuthPageWrapper>
        </>
    )
}
