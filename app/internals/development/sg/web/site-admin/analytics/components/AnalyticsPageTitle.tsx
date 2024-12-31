import React from 'react'

import { mdiChartLineVariant } from '@mdi/js'

import { SiteAdminPageTitle } from '../../components/SiteAdminPageTitle.tsx'

export const AnalyticsPageTitle: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => (
    <SiteAdminPageTitle icon={mdiChartLineVariant}>
        Analytics
        {children}
    </SiteAdminPageTitle>
)
