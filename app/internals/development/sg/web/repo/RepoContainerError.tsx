import { useEffect } from 'react'

import AlertCircleIcon from 'mdi-react/AlertCircleIcon'
import SourceRepositoryIcon from 'mdi-react/SourceRepositoryIcon'

import type { ErrorLike } from '~/internals/development/sg/common'
import {
    type CloneInProgressError,
    isCloneInProgressErrorLike,
    isRevisionNotFoundErrorLike,
    isRepoNotFoundErrorLike,
} from '~/internals/development/sg/shared/backend/errors.ts'
import { RepoQuestionIcon } from '~/internals/development/sg/shared/components/icons.tsx'
import { displayRepoName } from '~/internals/development/sg/shared/components/RepoLink.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { Code, ErrorMessage, Link, Text } from '~/internals/development/sg/wildcard'

import { HeroPage } from '../components/HeroPage.tsx'

import { DirectImportRepoAlert } from './DirectImportRepoAlert.tsx'
import { RepositoryNotFoundPage } from './RepositoryNotFoundPage.tsx'

interface RepoContainerErrorProps extends TelemetryV2Props {
    /** The repo fetch error. */
    repoFetchError: ErrorLike

    /** The repository name. */
    repoName: string

    /** Whether the viewer is a site admin. */
    viewerCanAdminister: boolean
}

export const RepoContainerError: React.FunctionComponent<React.PropsWithChildren<RepoContainerErrorProps>> = props => {
    const { repoFetchError, repoName, viewerCanAdminister, telemetryRecorder } = props

    if (isRepoNotFoundErrorLike(repoFetchError)) {
        return (
            <RepositoryNotFoundPage
                repo={repoName}
                viewerCanAdminister={viewerCanAdminister}
                telemetryRecorder={telemetryRecorder}
            />
        )
    }

    if (isCloneInProgressErrorLike(repoFetchError)) {
        return (
            <CloneInProgressPage
                repoName={repoName}
                viewerCanAdminister={viewerCanAdminister}
                repoFetchError={repoFetchError}
                telemetryRecorder={telemetryRecorder}
            />
        )
    }

    if (isRevisionNotFoundErrorLike(repoFetchError)) {
        return (
            <RevisionNotFoundErrorPage
                repoName={repoName}
                viewerCanAdminister={viewerCanAdminister}
                telemetryRecorder={telemetryRecorder}
            />
        )
    }

    return <OtherRepoErrorPage repoFetchError={repoFetchError} telemetryRecorder={telemetryRecorder} />
}

export const CloneInProgressPage: React.FunctionComponent<React.PropsWithChildren<RepoContainerErrorProps>> = props => {
    const { repoName, viewerCanAdminister, repoFetchError, telemetryRecorder } = props

    useEffect(() => telemetryRecorder.recordEvent('repo.error.cloneInProgress', 'view'), [telemetryRecorder])
    return (
        <HeroPage
            icon={SourceRepositoryIcon}
            title={displayRepoName(repoName)}
            className="repository-cloning-in-progress-page"
            subtitle={<Text>Cloning in progress</Text>}
            detail={
                <>
                    <Code>{(repoFetchError as CloneInProgressError).progress}</Code>
                    {viewerCanAdminister && (
                        <Text className="mt-4">
                            <Link to={`${repoName}/-/settings`}>Go to settings</Link> to view details
                        </Text>
                    )}
                </>
            }
            body={<DirectImportRepoAlert className="mt-3" />}
        />
    )
}

export const RevisionNotFoundErrorPage: React.FunctionComponent<
    React.PropsWithChildren<Pick<RepoContainerErrorProps, 'repoName' | 'viewerCanAdminister' | 'telemetryRecorder'>>
> = props => {
    const { repoName, viewerCanAdminister, telemetryRecorder } = props

    useEffect(() => telemetryRecorder.recordEvent('repo.error.revisionNotFound', 'view'), [telemetryRecorder])
    return (
        <HeroPage
            icon={RepoQuestionIcon}
            title="Empty repository"
            detail={
                <>
                    {viewerCanAdminister && (
                        <Text>
                            <Link to={`${repoName}/-/settings`}>Go to settings</Link>
                        </Text>
                    )}
                </>
            }
        />
    )
}

export const OtherRepoErrorPage: React.FunctionComponent<
    React.PropsWithChildren<Pick<RepoContainerErrorProps, 'repoFetchError' | 'telemetryRecorder'>>
> = props => {
    const { repoFetchError, telemetryRecorder } = props

    useEffect(() => telemetryRecorder.recordEvent('repo.error.other', 'view'), [telemetryRecorder])
    return <HeroPage icon={AlertCircleIcon} title="Error" subtitle={<ErrorMessage error={repoFetchError} />} />
}
