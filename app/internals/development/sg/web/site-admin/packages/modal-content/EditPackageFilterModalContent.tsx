import { useState } from 'react'

import { useMutation } from '~/internals/development/sg/http-client'
import { ErrorAlert } from '~/internals/development/sg/wildcard'

import type { FilterOption } from '../../../components/FilteredConnection'
import type {
    PackageMatchBehaviour,
    PackageRepoFilterFields,
    UpdatePackageRepoFilterResult,
    UpdatePackageRepoFilterVariables,
} from '../../../graphql-operations.ts'
import { updatePackageRepoFilterMutation } from '../backend.ts'
import { BehaviourSelect } from '../components/BehaviourSelect.tsx'
import { MultiPackageForm, type MultiPackageState } from '../components/MultiPackageForm.tsx'
import { SinglePackageForm, type SinglePackageState } from '../components/SinglePackageForm.tsx'

import type { BlockType } from './AddPackageFilterModalContent.tsx'

import styles from './AddPackageFilterModalContent.module.scss'

const getInitialState = (packageFilter: PackageRepoFilterFields): SinglePackageState | MultiPackageState => {
    const nameGlob = packageFilter.nameFilter?.packageGlob || ''

    if (nameGlob !== '') {
        return {
            ecosystem: packageFilter.kind,
            nameFilter: nameGlob,
        }
    }

    if (packageFilter.versionFilter) {
        return {
            ecosystem: packageFilter.kind,
            name: packageFilter.versionFilter.packageName,
            versionFilter: packageFilter.versionFilter.versionGlob,
        }
    }

    throw new Error(`Unable to find filter for package filter ${packageFilter.id}`)
}

export interface EditPackageFilterModalContentProps {
    packageFilter: PackageRepoFilterFields
    filters: FilterOption[]
    onDismiss: () => void
}

export const EditPackageFilterModalContent: React.FunctionComponent<EditPackageFilterModalContentProps> = ({
    packageFilter,
    filters,
    onDismiss,
}) => {
    const [behaviour, setBehaviour] = useState<PackageMatchBehaviour>(packageFilter.behaviour)
    const initialState = getInitialState(packageFilter)
    const [blockType, setBlockType] = useState<BlockType>('name' in initialState ? 'single' : 'multiple')

    const [updatePackageRepoFilter, { error }] = useMutation<
        UpdatePackageRepoFilterResult,
        UpdatePackageRepoFilterVariables
    >(updatePackageRepoFilterMutation, { onCompleted: onDismiss })

    return (
        <div className={styles.content}>
            <BehaviourSelect value={behaviour} onChange={setBehaviour} />
            {blockType === 'single' ? (
                <SinglePackageForm
                    initialState={initialState as SinglePackageState}
                    filters={filters}
                    setType={setBlockType}
                    onDismiss={onDismiss}
                    onSave={blockState =>
                        updatePackageRepoFilter({
                            variables: {
                                behaviour,
                                id: packageFilter.id,
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
                    initialState={initialState as MultiPackageState}
                    filters={filters}
                    setType={setBlockType}
                    onDismiss={onDismiss}
                    onSave={blockState =>
                        updatePackageRepoFilter({
                            variables: {
                                behaviour,
                                id: packageFilter.id,
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
    )
}
