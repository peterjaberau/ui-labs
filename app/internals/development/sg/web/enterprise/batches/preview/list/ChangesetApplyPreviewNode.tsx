import React from 'react'

import type { ChangesetApplyPreviewFields } from '../../../../graphql-operations.ts'
import type { PreviewPageAuthenticatedUser } from '../BatchChangePreviewPage.tsx'

import type { queryChangesetSpecFileDiffs } from './backend.ts'
import { HiddenChangesetApplyPreviewNode } from './HiddenChangesetApplyPreviewNode.tsx'
import { VisibleChangesetApplyPreviewNode } from './VisibleChangesetApplyPreviewNode.tsx'

import styles from './ChangesetApplyPreviewNode.module.scss'

export interface ChangesetApplyPreviewNodeProps {
    node: ChangesetApplyPreviewFields
    authenticatedUser: PreviewPageAuthenticatedUser
    selectable?: {
        onSelect: (id: string) => void
        isSelected: (id: string) => boolean
    }

    /** Used for testing. */
    queryChangesetSpecFileDiffs?: typeof queryChangesetSpecFileDiffs
    /** Expand changeset descriptions, for testing only. */
    expandChangesetDescriptions?: boolean
}

export const ChangesetApplyPreviewNode: React.FunctionComponent<
    React.PropsWithChildren<ChangesetApplyPreviewNodeProps>
> = ({ node, queryChangesetSpecFileDiffs, expandChangesetDescriptions, ...props }) => (
    <li className={styles.changesetApplyPreviewNode}>
        <span className={styles.changesetApplyPreviewNodeSeparator} />
        {node.__typename === 'HiddenChangesetApplyPreview' ? (
            <HiddenChangesetApplyPreviewNode node={node} />
        ) : (
            <VisibleChangesetApplyPreviewNode
                node={node}
                {...props}
                queryChangesetSpecFileDiffs={queryChangesetSpecFileDiffs}
                expandChangesetDescriptions={expandChangesetDescriptions}
            />
        )}
    </li>
)
