import React, { useCallback, useEffect, useState } from 'react'

import { gql, useMutation } from '@apollo/client'
import { mdiClose } from '@mdi/js'
import { useNavigate } from '@remix-run/react'

import { EVENT_LOGGER } from '~/sg/shared/telemetry/web/eventLogger'
import { Button, Input, LoadingSpinner, Modal, Icon, H3, Text } from '~/sg/wildcard'

import type { OrgAreaRouteContext } from '../area/OrgArea'

interface DeleteOrgModalProps extends OrgAreaRouteContext {
    isOpen: boolean
    toggleDeleteModal: () => void
}

const DELETE_ORG_MUTATION = gql`
    mutation DeleteOrganization($organization: ID!) {
        deleteOrganization(organization: $organization) {
            alwaysNil
        }
    }
`

const deleteLabelId = 'deleteOrgId'

export const DeleteOrgModal: React.FunctionComponent<React.PropsWithChildren<DeleteOrgModalProps>> = props => {
    const { org, isOpen, toggleDeleteModal, telemetryRecorder } = props

    const navigate = useNavigate()
    const [orgNameInput, setOrgNameInput] = useState('')
    const [orgNamesMatch, setOrgNamesMatch] = useState<boolean>()

    useEffect(() => {
        setOrgNameInput(orgNameInput)
    }, [setOrgNameInput, orgNameInput])

    const [deleteOrganization, { loading }] = useMutation(DELETE_ORG_MUTATION)

    const onOrgChangeName = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        event => {
            setOrgNameInput(event.currentTarget.value)
            setOrgNamesMatch(event.currentTarget.value === org.name)
            telemetryRecorder.recordEvent('org.name', 'change')
        },
        [org, telemetryRecorder]
    )

    const deleteOrg = useCallback(async () => {
        try {
            await deleteOrganization({ variables: { organization: org.id, hard: true } })
            telemetryRecorder.recordEvent('org', 'delete')
            navigate({
                pathname: '/settings',
            })
        } catch {
            EVENT_LOGGER.log('OrgDeletionFailed')
            telemetryRecorder.recordEvent('org', 'deleteFailed')
        }
    }, [org, deleteOrganization, navigate, telemetryRecorder])

    return (
        <Modal
            position="center"
            isOpen={isOpen}
            onDismiss={toggleDeleteModal}
            aria-labelledby={deleteLabelId}
            data-testid="delete-org-modal"
        >
            <div>
                <H3 className="text-danger" id={deleteLabelId}>
                    Delete organization?
                </H3>
                <Icon
                    className="position-absolute cursor-pointer"
                    style={{ top: '1rem', right: '1rem' }}
                    onClick={toggleDeleteModal}
                    aria-label="Close"
                    svgPath={mdiClose}
                />
                <Text className="pt-3">
                    <strong>You are going to delete {org.name} from Sourcegraph.</strong>
                    This cannot be undone. Deleting an organization will remove all of its synced repositories from
                    Sourcegraph, along with the organization’s code insights, batch changes, code monitors and other
                    resources.
                </Text>
                <Input
                    label="Please type the organization’s name to continue"
                    autoFocus={true}
                    value={orgNameInput}
                    placeholder={org.name}
                    onChange={onOrgChangeName}
                    status={orgNamesMatch ? 'valid' : 'error'}
                />
                <div className="d-flex justify-content-end mt-4">
                    <Button
                        type="button"
                        variant="danger"
                        onClick={deleteOrg}
                        disabled={!orgNamesMatch || loading === true}
                    >
                        {loading === true && <LoadingSpinner />}
                        Delete this organization
                    </Button>
                </div>
            </div>
        </Modal>
    )
}