import React, { useCallback, useState } from 'react'

import { mdiInformation, mdiClose, mdiDelete, mdiPencil } from '@mdi/js'
import { useNavigate } from '@remix-run/react'

import { isErrorLike, asError } from '~/internals/development/sg/common'
import type { Settings } from '~/internals/development/sg/shared/schema/settings.schema'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { Button, Link, Icon, Tooltip } from '~/internals/development/sg/wildcard'

import { isBatchChangesExecutionEnabled } from '../../../batches'
import type { Scalars } from '../../../graphql-operations.ts'

import { deleteBatchChange as _deleteBatchChange } from './backend.ts'

export interface BatchChangeDetailsActionSectionProps extends SettingsCascadeProps<Settings>, TelemetryV2Props {
    batchChangeID: Scalars['ID']
    batchChangeClosed: boolean
    batchChangeNamespaceURL: string
    batchChangeURL: string

    /** For testing only. */
    deleteBatchChange?: typeof _deleteBatchChange
}

export const BatchChangeDetailsActionSection: React.FunctionComponent<
    React.PropsWithChildren<BatchChangeDetailsActionSectionProps>
> = ({
    batchChangeID,
    batchChangeClosed,
    batchChangeNamespaceURL,
    batchChangeURL,
    settingsCascade,
    deleteBatchChange = _deleteBatchChange,
    telemetryRecorder,
}) => {
    const showEditButton = isBatchChangesExecutionEnabled(settingsCascade)
    const navigate = useNavigate()

    const [isDeleting, setIsDeleting] = useState<boolean | Error>(false)
    const onDeleteBatchChange = useCallback(async () => {
        if (!confirm('Do you really want to delete this batch change?')) {
            return
        }
        setIsDeleting(true)
        try {
            await deleteBatchChange(batchChangeID)
            navigate(batchChangeNamespaceURL + '/batch-changes')
        } catch (error) {
            setIsDeleting(asError(error))
        }
    }, [batchChangeID, deleteBatchChange, navigate, batchChangeNamespaceURL])
    if (batchChangeClosed) {
        return (
            <Tooltip content="Deleting this batch change is a final action." placement="left">
                <Button
                    className="test-batches-delete-btn"
                    onClick={onDeleteBatchChange}
                    disabled={isDeleting === true}
                    outline={true}
                    variant="danger"
                >
                    {isErrorLike(isDeleting) && (
                        <Tooltip content={isDeleting.message} placement="left">
                            <Icon aria-label={isDeleting.message} svgPath={mdiInformation} />
                        </Tooltip>
                    )}
                    <Icon aria-hidden={true} svgPath={mdiDelete} /> Delete
                </Button>
            </Tooltip>
        )
    }
    return (
        <div className="d-flex">
            {showEditButton && (
                <Button
                    to={`${batchChangeURL}/edit`}
                    className="mr-2"
                    variant="secondary"
                    as={Link}
                    onClick={() => {
                        EVENT_LOGGER.log('batch_change_details:edit:clicked')
                        telemetryRecorder.recordEvent('batchChange.details', 'edit')
                    }}
                >
                    <Icon aria-hidden={true} svgPath={mdiPencil} /> Edit
                </Button>
            )}
            <Tooltip content="View a preview of all changes that will happen when you close this batch change.">
                <Button
                    to={`${batchChangeURL}/close`}
                    className="test-batches-close-btn"
                    variant="danger"
                    outline={true}
                    as={Link}
                    onClick={() => {
                        EVENT_LOGGER.log('batch_change_details:close:clicked')
                        telemetryRecorder.recordEvent('batchChange.details', 'close')
                    }}
                >
                    <Icon aria-hidden={true} svgPath={mdiClose} /> Close
                </Button>
            </Tooltip>
        </div>
    )
}
