import React from 'react'

import { pluralize } from '~/internals/development/sg/common'
import { gql } from '~/internals/development/sg/http-client'
import { Alert, Link, Text } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import type { ViewerBatchChangesCodeHostsFields } from '../../graphql-operations.ts'

import { CodeHost } from './CodeHost.tsx'

export const VIEWER_BATCH_CHANGES_CODE_HOST_FRAGMENT = gql`
    fragment ViewerBatchChangesCodeHostsFields on BatchChangesCodeHostConnection {
        totalCount
        nodes {
            externalServiceURL
            externalServiceKind
        }
    }
`

export interface MissingCredentialsAlertProps {
    authenticatedUser: Pick<AuthenticatedUser, 'url'>
    viewerBatchChangesCodeHosts: ViewerBatchChangesCodeHostsFields
}

export const MissingCredentialsAlert: React.FunctionComponent<
    React.PropsWithChildren<MissingCredentialsAlertProps>
> = ({ viewerBatchChangesCodeHosts, authenticatedUser }) => {
    if (viewerBatchChangesCodeHosts.totalCount === 0) {
        return <></>
    }
    return (
        <Alert variant="warning">
            <Text>
                <strong>
                    You don't have credentials configured for{' '}
                    {pluralize('this code host', viewerBatchChangesCodeHosts.totalCount, 'these code hosts')}
                </strong>
            </Text>
            <ul>
                {viewerBatchChangesCodeHosts.nodes.map(node => (
                    <CodeHost {...node} key={node.externalServiceKind + node.externalServiceURL} />
                ))}
            </ul>
            <Text className="mb-0">
                Credentials are required to publish changesets on code hosts. Configure them in your{' '}
                <Link to={`${authenticatedUser.url}/settings/batch-changes`} target="_blank" rel="noopener">
                    batch changes user settings
                </Link>{' '}
                to publish changesets from this batch change.
            </Text>
        </Alert>
    )
}
