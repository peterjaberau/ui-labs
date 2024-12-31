import type { RouteObject } from '@remix-run/react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import { LegacyRoute } from '../LegacyRouteContext.tsx'
import { CommunityPageRoutes } from '../routes.constants.ts'

const KubernetesCommunitySearchContextPage = lazyComponent(
    () => import('./Kubernetes.tsx'),
    'KubernetesCommunitySearchContextPage'
)
const StackstormCommunitySearchContextPage = lazyComponent(
    () => import('./StackStorm.tsx'),
    'StackStormCommunitySearchContextPage'
)
const TemporalCommunitySearchContextPage = lazyComponent(
    () => import('./Temporal.tsx'),
    'TemporalCommunitySearchContextPage'
)
const O3deCommunitySearchContextPage = lazyComponent(() => import('./o3de.tsx'), 'O3deCommunitySearchContextPage')
const ChakraUICommunitySearchContextPage = lazyComponent(
    () => import('./chakraui.tsx'),
    'ChakraUICommunitySearchContextPage'
)
const StanfordCommunitySearchContextPage = lazyComponent(
    () => import('./Stanford.tsx'),
    'StanfordCommunitySearchContextPage'
)
const CncfCommunitySearchContextPage = lazyComponent(() => import('./cncf.tsx'), 'CncfCommunitySearchContextPage')
const JuliaCommunitySearchContextPage = lazyComponent(() => import('./Julia.tsx'), 'JuliaCommunitySearchContextPage')
const BackstageCommunitySearchContextPage = lazyComponent(
    () => import('./Backstage.tsx'),
    'BackstageCommunitySearchContextPage'
)

// Hack! Hardcode these routes into cmd/frontend/internal/app/ui/router.go
export const communitySearchContextsRoutes: readonly RouteObject[] = [
    {
        path: CommunityPageRoutes.Kubernetes,
        element: (
            <LegacyRoute
                render={props => <KubernetesCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Stackstorm,
        element: (
            <LegacyRoute
                render={props => <StackstormCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Temporal,
        element: (
            <LegacyRoute
                render={props => <TemporalCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.O3de,
        element: (
            <LegacyRoute
                render={props => <O3deCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.ChakraUI,
        element: (
            <LegacyRoute
                render={props => <ChakraUICommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Stanford,
        element: (
            <LegacyRoute
                render={props => <StanfordCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Cncf,
        element: (
            <LegacyRoute
                render={props => <CncfCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Julia,
        element: (
            <LegacyRoute
                render={props => <JuliaCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
    {
        path: CommunityPageRoutes.Backstage,
        element: (
            <LegacyRoute
                render={props => <BackstageCommunitySearchContextPage {...props} />}
                condition={({ isSourcegraphDotCom }) => isSourcegraphDotCom}
            />
        ),
    },
]
