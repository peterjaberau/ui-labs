import type { FC } from 'react'

import { Routes, Route } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'

import type { BreadcrumbSetters } from '../../components/Breadcrumbs.tsx'
import { NotFoundPage } from '../../components/HeroPage.tsx'
import type { RepositoryFields } from '../../graphql-operations.ts'

import { RepositoryBranchesAllPage } from './RepositoryBranchesAllPage.tsx'
import { RepositoryBranchesNavbar } from './RepositoryBranchesNavbar.tsx'
import { RepositoryBranchesOverviewPage } from './RepositoryBranchesOverviewPage.tsx'

interface Props extends BreadcrumbSetters, TelemetryV2Props {
    repo: RepositoryFields
}

/**
 * Properties passed to all page components in the repository branches area.
 */
export interface RepositoryBranchesAreaPageProps extends TelemetryV2Props {
    /**
     * The active repository.
     */
    repo: RepositoryFields
}

const BREADCRUMB = { key: 'branches', element: 'Branches' }

/**
 * Renders pages related to repository branches.
 */
export const RepositoryBranchesArea: FC<Props> = props => {
    const { useBreadcrumb, repo, telemetryRecorder } = props

    useBreadcrumb(BREADCRUMB)

    return (
        <div className="repository-branches-area container px-3">
            <RepositoryBranchesNavbar className="my-3" repo={repo.name} />
            <Routes>
                <Route
                    path="all"
                    element={<RepositoryBranchesAllPage repo={repo} telemetryRecorder={telemetryRecorder} />}
                />
                <Route
                    path=""
                    element={<RepositoryBranchesOverviewPage repo={repo} telemetryRecorder={telemetryRecorder} />}
                />
                <Route path="*" element={<NotFoundPage pageType="repository branches" />} />
            </Routes>
        </div>
    )
}
