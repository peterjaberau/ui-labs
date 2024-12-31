import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from '@remix-run/react'

import { asError, isErrorLike } from '~/internals/development/sg/common'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { Button, Container, PageHeader, LoadingSpinner, Link, Input, ErrorAlert, Form } from '~/internals/development/sg/wildcard'

import { ORG_NAME_MAX_LENGTH, VALID_ORG_NAME_REGEXP } from '../index.ts'
import { Page } from '../../components/Page.tsx'
import { PageTitle } from '../../components/PageTitle.tsx'
import { createOrganization } from '../backend.ts'

import styles from './NewOrganizationPage.module.scss'

interface Props extends TelemetryV2Props {}

export const NewOrganizationPage: React.FunctionComponent<React.PropsWithChildren<Props>> = ({ telemetryRecorder }) => {
    const navigate = useNavigate()
    useEffect(() => {
        EVENT_LOGGER.logViewEvent('NewOrg')
        telemetryRecorder.recordEvent('org.new', 'view')
    }, [telemetryRecorder])
    const [loading, setLoading] = useState<boolean | Error>(false)
    const [name, setName] = useState<string>('')
    const [displayName, setDisplayName] = useState<string>('')

    const onNameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const hyphenatedName = event.currentTarget.value.replaceAll(/\s/g, '-')
        setName(hyphenatedName)
    }

    const onDisplayNameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setDisplayName(event.currentTarget.value)
    }

    const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
        async event => {
            event.preventDefault()
            EVENT_LOGGER.log('CreateNewOrgClicked')
            if (!event.currentTarget.checkValidity()) {
                return
            }
            setLoading(true)
            try {
                const org = await createOrganization({ name, displayName, telemetryRecorder })
                setLoading(false)
                navigate(org.settingsURL!)
            } catch (error) {
                setLoading(asError(error))
            }
        },
        [displayName, navigate, name, telemetryRecorder]
    )

    return (
        <Page className={styles.newOrgPage}>
            <PageTitle title="New organization" />
            <PageHeader
                path={[{ text: 'Create a new organization' }]}
                description={
                    <>
                        An organization is a set of users with associated configuration. See{' '}
                        <Link to="/help/admin/organizations">Sourcegraph documentation</Link> for information about
                        configuring organizations.
                    </>
                }
                className="mb-3"
            />
            <Form className="settings-form" onSubmit={onSubmit}>
                <Container className="mb-3">
                    {isErrorLike(loading) && <ErrorAlert className="mb-3" error={loading} />}
                    <Input
                        id="new-org-page__form-name"
                        data-testid="test-new-org-name-input"
                        placeholder="acme-corp"
                        pattern={VALID_ORG_NAME_REGEXP}
                        maxLength={ORG_NAME_MAX_LENGTH}
                        required={true}
                        autoCorrect="off"
                        autoComplete="off"
                        autoFocus={true}
                        value={name}
                        onChange={onNameChange}
                        disabled={loading === true}
                        aria-describedby="new-org-page__form-name-help"
                        label="Organization name"
                        message="An organization name consists of letters, numbers, hyphens (-), dots (.) and may not begin
                            or end with a dot, nor begin with a hyphen."
                        className="form-group"
                    />

                    <Input
                        id="new-org-page__form-display-name"
                        data-testid="test-new-org-display-name-input"
                        placeholder="ACME Corporation"
                        autoCorrect="off"
                        value={displayName}
                        onChange={onDisplayNameChange}
                        disabled={loading === true}
                        label="Display name"
                        className="mb-0"
                    />
                </Container>

                <Button
                    type="submit"
                    className="test-create-org-submit-button"
                    disabled={loading === true}
                    variant="primary"
                >
                    {loading === true && <LoadingSpinner />}
                    Create organization
                </Button>
            </Form>
        </Page>
    )
}
