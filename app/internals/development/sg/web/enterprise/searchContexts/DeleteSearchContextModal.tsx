import React, { useCallback } from 'react'

import { useNavigate } from '@remix-run/react'
import type { Observable } from 'rxjs'
import { mergeMap, startWith, tap, catchError } from 'rxjs/operators'

import { asError, isErrorLike } from '~/internals/development/sg/common'
import type { SearchContextFields } from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SearchContextProps } from '~/internals/development/sg/shared/search'
import { Button, LoadingSpinner, useEventObservable, Modal, Alert, H3, Text } from '~/internals/development/sg/wildcard'

import { ALLOW_NAVIGATION } from '../../components/AwayPrompt.tsx'

interface DeleteSearchContextModalProps
    extends Pick<SearchContextProps, 'deleteSearchContext'>,
        PlatformContextProps<'requestGraphQL' | 'telemetryRecorder'> {
    isOpen: boolean
    searchContext: SearchContextFields
    toggleDeleteModal: () => void
}

export const DeleteSearchContextModal: React.FunctionComponent<
    React.PropsWithChildren<DeleteSearchContextModalProps>
> = ({ isOpen, deleteSearchContext, toggleDeleteModal, searchContext, platformContext }) => {
    const LOADING = 'loading' as const
    const deleteLabelId = 'deleteSearchContextId'
    const navigate = useNavigate()

    const [onDelete, deleteCompletedOrError] = useEventObservable(
        useCallback(
            (click: Observable<React.MouseEvent<HTMLButtonElement>>) =>
                click.pipe(
                    mergeMap(() =>
                        deleteSearchContext(searchContext.id, platformContext).pipe(
                            tap(() => {
                                platformContext.telemetryRecorder.recordEvent('searchContext', 'delete')
                                navigate('/contexts', { state: ALLOW_NAVIGATION })
                            }),
                            startWith(LOADING),
                            catchError(error => [asError(error)])
                        )
                    )
                ),
            [deleteSearchContext, navigate, searchContext, platformContext]
        )
    )

    return (
        <Modal
            position="center"
            isOpen={isOpen}
            onDismiss={toggleDeleteModal}
            aria-labelledby={deleteLabelId}
            data-testid="delete-search-context-modal"
        >
            <H3 className="text-danger" id={deleteLabelId}>
                Delete search context?
            </H3>

            <Text>
                <strong>This action cannot be undone.</strong>
            </Text>
            {(!deleteCompletedOrError || isErrorLike(deleteCompletedOrError)) && (
                <div className="text-right">
                    <Button className="mr-2" onClick={toggleDeleteModal} outline={true} variant="secondary">
                        Cancel
                    </Button>
                    <Button data-testid="confirm-delete-search-context" onClick={onDelete} variant="danger">
                        Yes, delete search context
                    </Button>
                    {isErrorLike(deleteCompletedOrError) && (
                        <Alert variant="danger">Error deleting search context: {deleteCompletedOrError.message}</Alert>
                    )}
                </div>
            )}
            {deleteCompletedOrError && <div>{deleteCompletedOrError === 'loading' && <LoadingSpinner />}</div>}
        </Modal>
    )
}
