import React from 'react'

import { parseISO } from 'date-fns'

import { Timestamp } from '~/internals/development/sg/branded/components/Timestamp'
import { Link } from '~/internals/development/sg/wildcard'

import { DismissibleAlert } from '../../../components/DismissibleAlert'
import type { SupersedingBatchSpecFields } from '../../../graphql-operations.ts'

export interface SupersedingBatchSpecAlertProps {
    spec: SupersedingBatchSpecFields | null
}

export const SupersedingBatchSpecAlert: React.FunctionComponent<
    React.PropsWithChildren<SupersedingBatchSpecAlertProps>
> = ({ spec }) => {
    if (!spec) {
        return <></>
    }

    const { applyURL, createdAt } = spec

    if (applyURL === null) {
        return null
    }

    return (
        <DismissibleAlert variant="info" partialStorageKey={`superseding-spec-${parseISO(spec.createdAt).getTime()}`}>
            <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    A <Link to={applyURL}>modified batch spec</Link> was uploaded{' '}
                    <Timestamp date={createdAt} noAbout={true} />, but has not been applied.
                </div>
            </div>
        </DismissibleAlert>
    )
}
