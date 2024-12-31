import { useState } from 'react'

import { useMutation } from '~/internals/development/sg/http-client'
import { ErrorAlert } from '~/internals/development/sg/wildcard'

import type { FilterOption } from '../../../components/FilteredConnection'
import {
    PackageMatchBehaviour,
    type AddPackageRepoFilterResult,
    type AddPackageRepoFilterVariables,
    type PackageRepoReferenceKind,
    type SiteAdminPackageFields,
} from '../../../graphql-operations.ts'
import { addPackageRepoFilterMutation } from '../backend.ts'
import { BehaviourSelect } from '../components/BehaviourSelect.tsx'
import { MultiPackageForm } from '../components/MultiPackageForm.tsx'
import { SinglePackageForm } from '../components/SinglePackageForm.tsx'

import styles from './AddPackageFilterModalContent.module.scss'

export interface AddPackageFilterModalContentProps {
    node?: SiteAdminPackageFields
    filters: FilterOption[]
    onDismiss: () => void
}

export type BlockType = 'single' | 'multiple'

export const AddPackageFilterModalContent: React.FunctionComponent<AddPackageFilterModalContentProps> = ({
    node,
    filters,
    onDismiss,
}) => {
    const [behaviour, setBehaviour] = useState<PackageMatchBehaviour>(PackageMatchBehaviour.BLOCK)
    const [blockType, setBlockType] = useState<BlockType>(node ? 'single' : 'multiple')

    const [addPackageRepoFilter, { error }] = useMutation<AddPackageRepoFilterResult, AddPackageRepoFilterVariables>(
        addPackageRepoFilterMutation,
        { onCompleted: onDismiss }
    )

    return (
        <>
            <div className={styles.content}>
                <BehaviourSelect value={behaviour} onChange={setBehaviour} />
                {blockType === 'single' ? (
                    <SinglePackageForm
                        initialState={{
                            name: node?.name ?? '',
                            versionFilter: '*',
                            ecosystem: node?.kind ?? (filters[0].value as PackageRepoReferenceKind),
                        }}
                        filters={filters}
                        setType={setBlockType}
                        onDismiss={onDismiss}
                        onSave={blockState =>
                            addPackageRepoFilter({
                                variables: {
                                    behaviour,
                                    kind: blockState.ecosystem,
                                    filter: {
                                        versionFilter: {
                                            packageName: blockState.name,
                                            versionGlob: blockState.versionFilter,
                                        },
                                    },
                                },
                            })
                        }
                    />
                ) : (
                    <MultiPackageForm
                        initialState={{
                            nameFilter: '*',
                            ecosystem: node?.kind ?? (filters[0].value as PackageRepoReferenceKind),
                        }}
                        filters={filters}
                        setType={setBlockType}
                        onDismiss={onDismiss}
                        onSave={blockState =>
                            addPackageRepoFilter({
                                variables: {
                                    behaviour,
                                    kind: blockState.ecosystem,
                                    filter: {
                                        nameFilter: {
                                            packageGlob: blockState.nameFilter,
                                        },
                                    },
                                },
                            })
                        }
                    />
                )}
                {error && <ErrorAlert error={error} />}
            </div>
        </>
    )
}
