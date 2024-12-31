import type React from 'react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

export const siteAdminOverviewComponents: readonly React.ComponentType<React.PropsWithChildren<any>>[] = [
    lazyComponent(() => import('../productSubscription/ProductSubscriptionStatus.tsx'), 'ProductSubscriptionStatus'),
]
