import * as React from 'react'

import { mdiFileDownloadOutline } from '@mdi/js'

import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { encodeRepoRevision, type RepoSpec, type RevisionSpec, type FileSpec } from '~/sg/shared/util/url'
import { Icon, Link } from '~/sg/wildcard'

import { RepoHeaderActionMenuLink } from '../../components/RepoHeaderActions'
import type { RepoHeaderContext } from '../../RepoHeader'

import styles from './actions.module.scss'

interface Props
    extends RepoSpec,
        Partial<RevisionSpec>,
        FileSpec,
        RepoHeaderContext,
        TelemetryProps,
        TelemetryV2Props {}

/**
 * A repository header action that replaces the blob in the URL with the raw URL.
 */
export class GoToRawAction extends React.PureComponent<Props> {
    private onClick(): void {
        this.props.telemetryService.log('RawFileDownload', {
            repoName: this.props.repoName,
            filePath: this.props.filePath,
        })
        this.props.telemetryRecorder.recordEvent('search.header.rawFile', 'download')
    }

    public render(): JSX.Element {
        const to = `/${encodeRepoRevision(this.props)}/-/raw/${this.props.filePath}`
        return (
            <RepoHeaderActionMenuLink
                as={Link}
                to={to}
                target="_blank"
                file={true}
                onSelect={this.onClick.bind(this)}
                download={true}
                className={styles.menuItem}
            >
                <Icon aria-hidden={true} svgPath={mdiFileDownloadOutline} className={styles.repoActionIcon} />
                <span>Raw download</span>
            </RepoHeaderActionMenuLink>
        )
    }
}
