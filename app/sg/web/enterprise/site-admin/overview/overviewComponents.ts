import type React from 'react'

import { lazyComponent } from '~/sg/shared/util/lazyComponent'

export const siteAdminOverviewComponents: readonly React.ComponentType<React.PropsWithChildren<any>>[] = [
    lazyComponent(() => import('../productSubscription/ProductSubscriptionStatus'), 'ProductSubscriptionStatus'),
]
