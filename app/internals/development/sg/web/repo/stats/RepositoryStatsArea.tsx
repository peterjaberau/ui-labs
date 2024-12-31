import { type FC, useMemo } from 'react'

import { useSearchParams } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { BreadcrumbSetters } from '../../components/Breadcrumbs.tsx'
import type { RepositoryFields } from '../../graphql-operations.ts'
import { FilePathBreadcrumbs } from '../FilePathBreadcrumbs.tsx'

import { RepositoryStatsContributorsPage } from './RepositoryStatsContributorsPage.tsx'

interface Props extends BreadcrumbSetters, TelemetryProps, TelemetryV2Props {
    repo: RepositoryFields | undefined
}

/**
 * Properties passed to all page components in the repository stats area.
 */
export interface RepositoryStatsAreaPageProps {
    /**
     * The active repository.
     */
    repo: RepositoryFields
}

const BREADCRUMB = { key: 'contributors', element: 'Contributors' }

/**
 * Renders pages related to repository stats.
 */
export const RepositoryStatsArea: FC<Props> = props => {
    const { useBreadcrumb, repo, telemetryService, telemetryRecorder } = props
    const [searchParams] = useSearchParams()
    const filePath = searchParams.get('path') ?? ''

    const setter = useBreadcrumb(
        useMemo(() => {
            if (!filePath || !repo) {
                return
            }
            return {
                key: 'treePath',
                className: 'flex-shrink-past-contents',
                element: (
                    <FilePathBreadcrumbs
                        key="path"
                        repoName={repo.name}
                        revision="main"
                        filePath={filePath}
                        isDir={true}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                    />
                ),
            }
        }, [filePath, repo, telemetryService, telemetryRecorder])
    )
    setter.useBreadcrumb(BREADCRUMB)

    return (
        <div className="repository-stats-area container mt-3">
            {repo ? (
                <RepositoryStatsContributorsPage repo={repo} telemetryRecorder={telemetryRecorder} />
            ) : (
                <LoadingSpinner />
            )}
        </div>
    )
}
