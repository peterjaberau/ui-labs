import type { FC } from 'react'

import { CopyPathAction } from '~/sg/branded'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { type RepoRevision, toPrettyBlobURL } from '~/sg/shared/util/url'
import { Breadcrumbs } from '~/sg/wildcard'

import { toTreeURL } from '../util/url'

import styles from './FilePathBreadcrumbs.module.scss'

interface FilePathBreadcrumbsProps extends RepoRevision, TelemetryProps, TelemetryV2Props {
    isDir: boolean
    filePath: string
}

/**
 * Displays a file path in a repository in breadcrumb style, with ancestor path
 * links.
 */
export const FilePathBreadcrumbs: FC<FilePathBreadcrumbsProps> = props => {
    const { repoName, revision, filePath, isDir, telemetryService, telemetryRecorder } = props

    const partToUrl = (segment: string, index: number, segments: string[]): string => {
        const partPath = segments.slice(0, index + 1).join('/')
        if (isDir || index < segments.length - 1) {
            return toTreeURL({ repoName, revision, filePath: partPath })
        }
        return toPrettyBlobURL({ repoName, revision, filePath: partPath })
    }

    return (
        <Breadcrumbs filename={filePath} getSegmentLink={partToUrl} className={styles.filePathBreadcrumbs}>
            <CopyPathAction
                filePath={filePath}
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
            />
        </Breadcrumbs>
    )
}
