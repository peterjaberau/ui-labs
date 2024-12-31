import { BatchChangesIconNamespaceNav } from '../batches/icons.tsx'

import type { NamespaceAreaNavItem } from './NamespaceArea.tsx'

export const namespaceAreaHeaderNavItems: readonly NamespaceAreaNavItem[] = [
    {
        to: '/batch-changes',
        label: 'Batch Changes',
        icon: BatchChangesIconNamespaceNav,
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
]
