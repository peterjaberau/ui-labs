import type { FC } from 'react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import type { AuthenticatedUser } from '../../../auth.ts'
import type { BreadcrumbSetters } from '../../../components/Breadcrumbs.tsx'
import type { RepositoryFields } from '../../../graphql-operations.ts'

import { BatchChangeRepoPage } from './BatchChangeRepoPage.tsx'

/**
 * Properties passed to all page components in the repository batch changes area.
 */
export interface RepositoryBatchChangesAreaPageProps extends BreadcrumbSetters, TelemetryV2Props {
    /**
     * The active repository.
     */
    repo: RepositoryFields
    authenticatedUser: AuthenticatedUser | null
    isSourcegraphDotCom: boolean
}

const BREADCRUMB = { key: 'batch-changes', element: 'Batch Changes' }

/**
 * Renders pages related to repository batch changes.
 */
export const RepositoryBatchChangesArea: FC<RepositoryBatchChangesAreaPageProps> = props => {
    const { useBreadcrumb, repo, authenticatedUser, isSourcegraphDotCom, telemetryRecorder } = props

    useBreadcrumb(BREADCRUMB)

    return (
        <div className="repository-batch-changes-area container mt-3">
            <BatchChangeRepoPage
                repo={repo}
                authenticatedUser={authenticatedUser}
                isSourcegraphDotCom={isSourcegraphDotCom}
                telemetryRecorder={telemetryRecorder}
            />
        </div>
    )
}
