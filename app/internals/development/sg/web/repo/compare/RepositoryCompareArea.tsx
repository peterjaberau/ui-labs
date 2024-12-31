import type { FC } from 'react'

import classNames from 'classnames'
import { useLocation, useNavigate, useParams } from '@remix-run/react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { Alert, LoadingSpinner } from '~/internals/development/sg/wildcard'

import type { BreadcrumbSetters } from '../../components/Breadcrumbs.tsx'
import type { RepositoryFields, Scalars } from '../../graphql-operations.ts'

import { RepositoryCompareHeader } from './RepositoryCompareHeader.tsx'
import { RepositoryCompareOverviewPage } from './RepositoryCompareOverviewPage.tsx'

import styles from './RepositoryCompareArea.module.scss'

interface RepositoryCompareAreaProps extends BreadcrumbSetters, TelemetryV2Props {
    repo?: RepositoryFields
}

/**
 * Properties passed to all page components in the repository compare area.
 */
export interface RepositoryCompareAreaPageProps extends TelemetryV2Props {
    /** The repository being compared. */
    repo: RepositoryFields

    /** The base of the comparison. */
    base: { repoName: string; repoID: Scalars['ID']; revision?: string | null }

    /** The head of the comparison. */
    head: { repoName: string; repoID: Scalars['ID']; revision?: string | null }
}

const BREADCRUMB = { key: 'compare', element: <>Compare</> }

/**
 * Renders pages related to a repository comparison.
 */
export const RepositoryCompareArea: FC<RepositoryCompareAreaProps> = props => {
    const { repo, useBreadcrumb, telemetryRecorder } = props

    const { '*': splat } = useParams<{ '*': string }>()
    const location = useLocation()
    const navigate = useNavigate()

    useBreadcrumb(BREADCRUMB)

    let spec: { base: string | null; head: string | null } | null | undefined
    if (splat) {
        spec = parseComparisonSpec(splat)
    }

    // Parse out the optional filePath search param, which is used to show only a single file in the compare view
    const searchParams = new URLSearchParams(location.search)
    const path = searchParams.get('filePath')

    if (!repo) {
        return <LoadingSpinner />
    }

    const commonProps: RepositoryCompareAreaPageProps = {
        repo,
        base: { repoID: repo.id, repoName: repo.name, revision: spec?.base },
        head: { repoID: repo.id, repoName: repo.name, revision: spec?.head },
        telemetryRecorder,
    }

    return (
        <div className={classNames('container', styles.repositoryCompareArea)}>
            <RepositoryCompareHeader className="my-3" {...commonProps} />
            {spec === null ? (
                <Alert variant="danger">Invalid comparison specifier</Alert>
            ) : (
                <RepositoryCompareOverviewPage {...commonProps} path={path} location={location} navigate={navigate} />
            )}
        </div>
    )
}

function parseComparisonSpec(spec: string): { base: string | null; head: string | null } | null {
    if (!spec.includes('...')) {
        return null
    }

    const [base, head] = spec.split('...', 2)

    return {
        base,
        head,
    }
}
