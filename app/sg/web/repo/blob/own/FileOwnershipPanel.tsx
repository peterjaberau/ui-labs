import * as React from 'react'

import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'

import { logger } from '~/sg/common'
import { useQuery } from '~/sg/http-client'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { ErrorAlert, LoadingSpinner } from '~/sg/wildcard'

import type { FetchOwnershipResult, FetchOwnershipVariables } from '../../../graphql-operations'
import { OwnershipAssignPermission } from '../../../rbac/constants'

import { FETCH_OWNERS } from './grapqlQueries'
import { MakeOwnerButton } from './MakeOwnerButton'
import { OwnerList } from './OwnerList'
import type { OwnershipPanelProps } from './TreeOwnershipPanel'

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