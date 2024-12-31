import { canWriteBatchChanges } from '../../batches/utils.ts'

import type { OrgSettingsSidebarItems } from './OrgSettingsSidebar.tsx'

export const orgSettingsSideBarItems: OrgSettingsSidebarItems = [
    {
        label: 'Settings',
        to: '',
        exact: true,
    },
    {
        label: 'Profile',
        to: '/profile',
        exact: true,
    },
    {
        label: 'Members',
        to: '/members',
        exact: true,
    },
    {
        to: '/executors/secrets',
        label: 'Executor secrets',
        condition: ({ batchChangesEnabled, org: { viewerCanAdminister }, authenticatedUser }) =>
            batchChangesEnabled && viewerCanAdminister && canWriteBatchChanges(authenticatedUser),
    },
]
