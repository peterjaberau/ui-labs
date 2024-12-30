import React from 'react'

import { Timestamp } from '~/sg/branded/components/Timestamp'
import { Link } from '~/sg/wildcard'

import type { BatchSpecFields } from '../../../graphql-operations'

interface Props extends Pick<BatchSpecFields, 'createdAt' | 'creator'> {}

/**
 * The uploaded at byline to the batch change apply page header.
 */
export const BatchSpecInfoByline: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    createdAt,
    creator,
}) => (
    <>
        Uploaded <Timestamp date={createdAt} /> by {creator && <Link to={creator.url}>{creator.username}</Link>}
        {!creator && <strong>deleted user</strong>}
    </>
)
