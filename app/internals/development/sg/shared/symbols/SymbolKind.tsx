import * as React from 'react'

import type { SymbolKind as SymbolKindEnum } from '../graphql-operations.ts'

import { SymbolIcon } from './SymbolIcon.tsx'
import { SymbolTag } from './SymbolTag.tsx'

export const SymbolKind: React.FC<{
    kind: SymbolKindEnum
    className?: string
    symbolKindTags?: boolean
}> = ({ symbolKindTags, className, kind }) => {
    const Component = symbolKindTags ? SymbolTag : SymbolIcon
    return <Component kind={kind} className={className} />
}
