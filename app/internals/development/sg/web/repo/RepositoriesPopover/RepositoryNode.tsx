import React from 'react'

import { displayRepoName } from '~/internals/development/sg/shared/components/RepoLink.tsx'
import type { Scalars } from '~/internals/development/sg/shared/graphql-operations.ts'

import type { RepositoryPopoverFields } from '../../graphql-operations.ts'
import { ConnectionPopoverNode, ConnectionPopoverNodeLink } from '../RevisionsPopover/components'

interface RepositoryNodeProps {
    node: RepositoryPopoverFields
    currentRepo?: Scalars['ID']
}

export const RepositoryNode: React.FunctionComponent<React.PropsWithChildren<RepositoryNodeProps>> = ({
    node,
    currentRepo,
}) => (
    <ConnectionPopoverNode key={node.id}>
        <ConnectionPopoverNodeLink to={`/${node.name}`} active={node.id === currentRepo}>
            {displayRepoName(node.name)}
        </ConnectionPopoverNodeLink>
    </ConnectionPopoverNode>
)
