import * as React from 'react'

import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'

import { logger } from '~/internals/development/sg/common'
import { useQuery } from '~/internals/development/sg/http-client'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { ErrorAlert, LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { FetchOwnershipResult, FetchOwnershipVariables } from '../../../graphql-operations.ts'
import { OwnershipAssignPermission } from '../../../rbac/constants.ts'

import { FETCH_OWNERS } from './grapqlQueries.ts'
import { MakeOwnerButton } from './MakeOwnerButton.tsx'
import { OwnerList } from './OwnerList.tsx'
import type { OwnershipPanelProps } from './TreeOwnershipPanel.tsx'

import styles from './FileOwnershipPanel.module.scss'

export const FileOwnershipPanel: React.FunctionComponent<OwnershipPanelProps & TelemetryProps & TelemetryV2Props> = ({
    repoID,
    revision,
    filePath,
    telemetryService,
    telemetryRecorder,
}) => {
    React.useEffect(() => {
        telemetryService.log('OwnershipPanelOpened')
        telemetryRecorder.recordEvent('repo.blob.ownershipPanel', 'open')
    }, [telemetryService, telemetryRecorder])

    const { data, loading, error, refetch } = useQuery<FetchOwnershipResult, FetchOwnershipVariables>(FETCH_OWNERS, {
        variables: {
            repo: repoID,
            revision: revision ?? '',
            currentPath: filePath,
        },
    })
    const [makeOwnerError, setMakeOwnerError] = React.useState<Error | undefined>(undefined)
    const navigate = useNavigate()
    const refreshPage = (): Promise<any> => Promise.resolve(navigate(0))

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
                  onSuccess={refreshPage}
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
        const commit = data.node.commit || data.node.changelist?.commit
        return (
            <OwnerList
                data={commit?.blob?.ownership}
                isDirectory={false}
                makeOwnerButton={makeOwnerButton}
                makeOwnerError={makeOwnerError}
                repoID={repoID}
                filePath={filePath}
                refetch={refetch}
                showAddOwnerButton={true}
                canAssignOwners={canAssignOwners}
            />
        )
    }
    return (
        <OwnerList
            filePath={filePath}
            repoID={repoID}
            refetch={refetch}
            showAddOwnerButton={true}
            canAssignOwners={canAssignOwners}
        />
    )
}
