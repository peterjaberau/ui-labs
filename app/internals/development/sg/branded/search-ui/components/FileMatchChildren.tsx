import React, { useCallback, type KeyboardEvent, type MouseEvent } from 'react'

import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'

import { SourcegraphURL } from '~/internals/development/sg/common'
import type { MatchGroup } from '~/internals/development/sg/shared/components/ranking/PerFileResultRanking.ts'
import { type ContentMatch, getFileMatchUrl } from '~/internals/development/sg/shared/search/stream.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { V2CodyCopyPageTypes, codeCopiedEvent } from '~/internals/development/sg/shared/tracking/event-log-creators.ts'

import { CodeExcerpt } from './CodeExcerpt.tsx'
import { navigateToCodeExcerpt, navigateToFileOnMiddleMouseButtonClick } from './codeLinkNavigation.ts'

import styles from './FileMatchChildren.module.scss'
import resultStyles from './ResultContainer.module.scss'

interface FileMatchProps extends SettingsCascadeProps, TelemetryProps, TelemetryV2Props {
    result: ContentMatch
    grouped: MatchGroup[]
    /* Clicking on a match opens the link in a new tab */
    openInNewTab?: boolean
}

export const FileMatchChildren: React.FunctionComponent<React.PropsWithChildren<FileMatchProps>> = props => {
    const { result, grouped, telemetryService, telemetryRecorder } = props

    const createCodeExcerptLink = (group: MatchGroup): string => {
        const match = group.matches[0]
        return SourcegraphURL.from(getFileMatchUrl(result))
            .setLineRange({
                line: match.startLine + 1,
                character: match.startCharacter + 1,
                endLine: match.endLine + 1,
                endCharacter: match.endCharacter + 1,
            })
            .toString()
    }

    const navigate = useNavigate()
    const navigateToFile = useCallback(
        (event: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>): void =>
            navigateToCodeExcerpt(event, props.openInNewTab ?? false, navigate),
        [props.openInNewTab, navigate]
    )

    const logEventOnCopy = useCallback(() => {
        telemetryService.log(...codeCopiedEvent('search-result'))
        telemetryRecorder.recordEvent('search.result.code', 'copy', {
            metadata: { page: V2CodyCopyPageTypes['search-result'] },
        })
    }, [telemetryService, telemetryRecorder])

    return (
        <div data-testid="file-match-children" data-selectable-search-results-group="true">
            {grouped.length > 0 &&
                grouped.map(group => (
                    <div
                        key={`linematch:${getFileMatchUrl(result)}${group.startLine}:${group.endLine}`}
                        data-href={createCodeExcerptLink(group)}
                        className={classNames(
                            'test-file-match-children-item',
                            styles.chunk,
                            resultStyles.clickable,
                            resultStyles.focusableBlock,
                            resultStyles.horizontalDividerBetween
                        )}
                        onClick={navigateToFile}
                        onMouseUp={navigateToFileOnMiddleMouseButtonClick}
                        onKeyDown={navigateToFile}
                        data-testid="file-match-children-item"
                        tabIndex={0}
                        role="link"
                        data-selectable-search-result="true"
                    >
                        <CodeExcerpt
                            repoName={result.repository}
                            commitID={result.commit || ''}
                            filePath={result.path}
                            startLine={group.startLine}
                            endLine={group.endLine}
                            highlightRanges={group.matches}
                            plaintextLines={group.plaintextLines}
                            highlightedLines={group.highlightedHTMLRows}
                            onCopy={logEventOnCopy}
                        />
                    </div>
                ))}
        </div>
    )
}
