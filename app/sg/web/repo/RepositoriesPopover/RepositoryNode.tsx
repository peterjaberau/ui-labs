import React from 'react'

import { displayRepoName } from '~/sg/shared/components/RepoLink'
import type { Scalars } from '~/sg/shared/graphql-operations'

import type { RepositoryPopoverFields } from '../../graphql-operations'
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
