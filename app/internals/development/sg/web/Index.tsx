import type { FC } from 'react'

import { Navigate } from '@remix-run/react'

import { PageRoutes } from './routes.constants.ts'

export const IndexPage: FC = () => (
    <Navigate
        replace={true}
        to={window.context?.codeSearchEnabledOnInstance ? PageRoutes.Search : PageRoutes.CodyDashboard}
    />
)
