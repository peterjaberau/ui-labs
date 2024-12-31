import React, { type FC, useMemo, useState } from 'react'

import { useNavigate } from '@remix-run/react'

import { useMutation } from '~/internals/development/sg/http-client'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { Button, H3, H4, Link, Text } from '~/internals/development/sg/wildcard'

import {
    type BatchSpecExecutionFields,
    BatchSpecSource,
    type CancelBatchSpecExecutionResult,
    type CancelBatchSpecExecutionVariables,
} from '../../../../graphql-operations.ts'
import { BatchSpec } from '../../BatchSpec.tsx'
import { type BatchSpecContextState, useBatchSpecContext } from '../BatchSpecContext.tsx'
import { LibraryPane } from '../edit/library/LibraryPane.tsx'
import { WorkspacesPreviewPanel } from '../edit/workspaces-preview/WorkspacesPreviewPanel.tsx'

import { CANCEL_BATCH_SPEC_EXECUTION } from './backend.ts'
import { CancelExecutionModal } from './CancelExecutionModal.tsx'
import { ReadOnlyBatchSpecAlert } from './ReadOnlyBatchSpecAlert.tsx'

import editorStyles from '../edit/EditBatchSpecPage.module.scss'

interface ReadOnlyBatchSpecFormProps extends TelemetryV2Props {}

export const ReadOnlyBatchSpecForm: React.FunctionComponent<React.PropsWithChildren<ReadOnlyBatchSpecFormProps>> = ({
    telemetryRecorder,
}) => {
    const { batchChange, batchSpec, setActionsError } = useBatchSpecContext<BatchSpecExecutionFields>()

    return (
        <MemoizedReadOnlyBatchSpecForm
            batchChange={batchChange}
            batchSpec={batchSpec}
            setActionsError={setActionsError}
            telemetryRecorder={telemetryRecorder}
        />
    )
}

type MemoizedReadOnlyBatchSpecFormProps = ReadOnlyBatchSpecFormProps &
    Pick<BatchSpecContextState, 'batchChange' | 'batchSpec' | 'setActionsError'>

const MemoizedReadOnlyBatchSpecForm: FC<MemoizedReadOnlyBatchSpecFormProps> = React.memo(
    function MemoizedReadOnlyBatchSpecForm({ batchChange, batchSpec, setActionsError, telemetryRecorder }) {
        const navigate = useNavigate()

        const [showCancelModal, setShowCancelModal] = useState(false)
        const [cancelBatchSpecExecution, { loading: isCancelLoading }] = useMutation<
            CancelBatchSpecExecutionResult,
            CancelBatchSpecExecutionVariables
        >(CANCEL_BATCH_SPEC_EXECUTION, {
            variables: { id: batchSpec.id },
            onError: setActionsError,
            onCompleted: () => {
                setShowCancelModal(false)
                navigate(`${batchChange.url}/edit`)
            },
        })

        const alert: JSX.Element = useMemo(() => {
            if (batchSpec.source === BatchSpecSource.LOCAL) {
                return (
                    <ReadOnlyBatchSpecAlert
                        variant="info"
                        className="d-flex align-items-center pr-3"
                        header="This spec is read-only"
                        message={
                            <>
                                This spec is read-only because it was created and executed locally with the{' '}
                                <Link to="/help/cli">Sourcegraph CLI (src)</Link>.
                            </>
                        }
                    >
                        <Button variant="primary" onClick={() => navigate(`${batchChange.url}/edit`)}>
                            Edit spec
                        </Button>
                    </ReadOnlyBatchSpecAlert>
                )
            }
            if (batchSpec.isExecuting) {
                return (
                    <ReadOnlyBatchSpecAlert
                        variant="warning"
                        className="d-flex align-items-center pr-3"
                        header="The execution is still running"
                        message="You are unable to edit the spec when an execution is running."
                    >
                        <Button variant="danger" onClick={() => setShowCancelModal(true)}>
                            Cancel execution
                        </Button>
                    </ReadOnlyBatchSpecAlert>
                )
            }
            return (
                <ReadOnlyBatchSpecAlert
                    variant="info"
                    className="d-flex align-items-center pr-3"
                    header="This spec is read-only"
                    message="We've preserved the original batch spec from this execution for you to inspect."
                >
                    {/* NOTE: As a future design consideration, what does the workflow look like if we
                open this in a new tab to allow the user to continue to reference their original
                batch spec at the same time? */}
                    <Button variant="primary" onClick={() => navigate(`${batchChange.url}/edit`)}>
                        Edit spec
                    </Button>
                </ReadOnlyBatchSpecAlert>
            )
        }, [batchSpec.isExecuting, batchChange.url, batchSpec.source, navigate])

        return (
            <div className={editorStyles.form}>
                <LibraryPane name={batchChange.name} isReadOnly={true} telemetryRecorder={telemetryRecorder} />
                <div className={editorStyles.editorContainer}>
                    <H4 as={H3} className={editorStyles.header}>
                        Batch spec
                    </H4>
                    {alert}
                    <BatchSpec
                        name={batchChange.name}
                        className={editorStyles.editor}
                        originalInput={batchSpec.originalInput}
                        telemetryRecorder={telemetryRecorder}
                    />
                </div>
                {/* Hide the workspaces preview panel for locally-executed batch specs. */}
                {batchSpec.source === BatchSpecSource.REMOTE && (
                    <WorkspacesPreviewPanel telemetryRecorder={telemetryRecorder} isReadOnly={true} />
                )}
                <CancelExecutionModal
                    isOpen={showCancelModal}
                    onCancel={() => setShowCancelModal(false)}
                    onConfirm={cancelBatchSpecExecution}
                    modalBody={<Text>Are you sure you want to cancel the current execution?</Text>}
                    isLoading={isCancelLoading}
                />
            </div>
        )
    }
)
