import type { FC } from 'react'

import { useLegacyContext_onlyInStormRoutes } from '../../../LegacyRouteContext.tsx'

import { usePreloadedQueryData } from './SearchPage.loader.ts'
import { SearchPageContent, getShouldShowAddCodeHostWidget } from './SearchPageContent.tsx'

export const SearchPage: FC = () => {
    const { data } = usePreloadedQueryData()
    const { authenticatedUser, isSourcegraphDotCom } = useLegacyContext_onlyInStormRoutes()

    const shouldShowAddCodeHostWidget = getShouldShowAddCodeHostWidget({
        isAddCodeHostWidgetEnabled: !!data?.codehostWidgetFlag,
        isSiteAdmin: authenticatedUser?.siteAdmin,
        externalServicesCount: data?.externalServices.totalCount,
    })

    return (
        <SearchPageContent
            shouldShowAddCodeHostWidget={shouldShowAddCodeHostWidget || true}
            isSourcegraphDotCom={isSourcegraphDotCom}
        />
    )
}
