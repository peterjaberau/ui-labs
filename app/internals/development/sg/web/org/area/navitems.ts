import CogOutlineIcon from 'mdi-react/CogOutlineIcon'

import { namespaceAreaHeaderNavItems } from '../../namespaces/navitems.ts'
import { SavedSearchIcon } from '../../savedSearches/SavedSearchIcon.tsx'

import type { OrgAreaHeaderNavItem } from './OrgHeader.tsx'

export const orgAreaHeaderNavItems: readonly OrgAreaHeaderNavItem[] = [
    {
        to: '/settings',
        label: 'Settings',
        icon: CogOutlineIcon,
        condition: ({ org: { viewerCanAdminister } }) => viewerCanAdminister,
    },
    {
        to: '/searches',
        label: 'Saved Searches',
        icon: SavedSearchIcon,
        condition: ({ org: { viewerCanAdminister } }) =>
            viewerCanAdminister && window.context?.codeSearchEnabledOnInstance,
    },
    ...namespaceAreaHeaderNavItems,
]
