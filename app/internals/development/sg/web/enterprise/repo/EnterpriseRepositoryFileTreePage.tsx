import type { FC } from 'react'

import { type RepositoryFileTreePageProps, RepositoryFileTreePage } from '../../repo/RepositoryFileTreePage.tsx'
import { useCodeIntel } from '../codeintel/useCodeIntel.ts'

export const EnterpriseRepositoryFileTreePage: FC<RepositoryFileTreePageProps> = props => (
    <RepositoryFileTreePage {...props} useCodeIntel={useCodeIntel} />
)
