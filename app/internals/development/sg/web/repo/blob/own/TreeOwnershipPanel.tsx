import * as React from 'react'
import { useEffect } from 'react'

import classNames from 'classnames'

import { logger } from '~/internals/development/sg/common'
import { useQuery } from '~/internals/development/sg/http-client'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { ErrorAlert, LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { FetchTreeOwnershipResult, FetchTreeOwnershipVariables } from '../../../graphql-operations.ts'
import { OwnershipAssignPermission } from '../../../rbac/constants.ts'

import { FETCH_TREE_OWNERS } from './grapqlQueries.ts'
import { MakeOwnerButton } from './MakeOwnerButton.tsx'
import { OwnerList } from './OwnerList.tsx'

import styles from './FileOwnershipPanel.module.scss'

export interface OwnershipPanelProps extends TelemetryV2Props {
    repoID: string
    revision?: string
    filePath: string
    showAddOwnerButton?: boolean
}

export const TreeOwnershipPanel: React.FunctionComponent<OwnershipPanelProps & TelemetryProps> = ({
    repoID,
    revision,
    filePath,
    telemetryService,
    showAddOwnerButton,
    telemetryRecorder,
}) => {
    useEffect(() => {
        telemetryService.log('OwnershipPanelOpened')
        telemetryRecorder.recordEvent('repo.blob.ownershipPanel', 'open')
    }, [telemetryService, telemetryRecorder])

    const { data, loading, error, refetch } = useQuery<FetchTreeOwnershipResult, FetchTreeOwnershipVariables>(
        FETCH_TREE_OWNERS,
        {
            variables: {
                repo: repoID,
                revision: revision ?? '',
                currentPath: filePath,
            },
        }
    )
    const [makeOwnerError, setMakeOwnerError] = React.useState<Error | undefined>(undefined)

    if (loading) {
        return (
            <div className={classNames(styles.loaderWrapper, 'text-muted')}>
                <LoadingSpinner inline={true} className="mr-1" /> Loading...
            </div>
        )
    }
    const canAssignOwners = (data?.currentUser?.permissions?.nodes || []).some(
        permission => permission.displayName === OwnershipAssignPermission
    )
    const makeOwnerButton = canAssignOwners
        ? (userId: string | undefined) => (
              <MakeOwnerButton
                  onSuccess={refetch}
                  onError={setMakeOwnerError}
                  repoId={repoID}
                  path={filePath}
                  userId={userId}
              />
          )
        : undefined

    if (error) {
        logger.log(error)
        return (
            <div className={styles.contents}>
                <ErrorAlert error={error} prefix="Error getting ownership data" className="mt-2" />
            </div>
        )
    }

    if (data?.node?.__typename === 'Repository') {
        return (
            <OwnerList
                data={data?.node?.commit?.tree?.ownership}
                isDirectory={true}
                makeOwnerButton={makeOwnerButton}
                repoID={repoID}
                filePath={filePath}
                makeOwnerError={makeOwnerError}
                refetch={refetch}
                showAddOwnerButton={showAddOwnerButton}
                canAssignOwners={canAssignOwners}
            />
        )
    }
    return (
        <OwnerList
            repoID={repoID}
            filePath={filePath}
            refetch={refetch}
            showAddOwnerButton={showAddOwnerButton}
            canAssignOwners={canAssignOwners}
        />
    )
}
