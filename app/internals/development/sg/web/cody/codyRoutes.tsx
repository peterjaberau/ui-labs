import { Navigate, type RouteObject } from '@remix-run/react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { LegacyRoute } from '../LegacyRouteContext.tsx'
import { PageRoutes } from '../routes.constants.ts'

import { CodyIgnoreProvider } from './useCodyIgnore.tsx'

const CodyChatPage = lazyComponent(() => import('./chat/CodyChatPage.tsx'), 'CodyChatPage')
const CodySwitchAccountPage = lazyComponent(
    () => import('./switch-account/CodySwitchAccountPage.tsx'),
    'CodySwitchAccountPage'
)
const CodyDashboardPage = lazyComponent(() => import('./dashboard/CodyDashboardPage.tsx'), 'CodyDashboardPage')

export const CODY_MARKETING_PAGE_URL = 'https://sourcegraph.com/cody'

/**
 * Use {@link codyProRoutes} for Cody PLG routes.
 */
export const codyRoutes: RouteObject[] = [
    {
        path: PageRoutes.CodyRedirectToMarketingOrDashboard,
        element: (
            <LegacyRoute
                render={({ isSourcegraphDotCom }) => {
                    if (isSourcegraphDotCom) {
                        window.location.href = CODY_MARKETING_PAGE_URL
                        return null
                    }
                    return <Navigate to={PageRoutes.CodyDashboard} replace={true} />
                }}
                condition={() => window.context?.codyEnabledOnInstance}
            />
        ),
    },
    {
        path: PageRoutes.CodySwitchAccount,
        element: (
            <LegacyRoute
                render={props => (
                    <CodySwitchAccountPage {...props} telemetryRecorder={props.platformContext.telemetryRecorder} />
                )}
                condition={() => window.context?.codyEnabledOnInstance}
            />
        ),
    },
    {
        path: `${PageRoutes.CodyChat}/*`,
        element: (
            <LegacyRoute
                render={props => (
                    <CodyIgnoreProvider isSourcegraphDotCom={props.isSourcegraphDotCom}>
                        <CodyChatPage
                            isSourcegraphDotCom={props.isSourcegraphDotCom}
                            authenticatedUser={props.authenticatedUser}
                        />
                    </CodyIgnoreProvider>
                )}
                condition={() => window.context?.codyEnabledOnInstance}
            />
        ),
    },
    {
        path: PageRoutes.CodyDashboard,
        element: (
            <LegacyRoute
                render={props => <CodyDashboardPage {...props} />}
                condition={() => window.context?.codyEnabledOnInstance}
            />
        ),
    },
]
