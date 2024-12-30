import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import type { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { asError, isErrorLike, pluralize } from '~/sg/common'
import type { FetchFileParameters } from '~/sg/shared/backend/file'
import {
    type MatchGroup,
    rankByLine,
    rankPassthrough,
    truncateGroups,
} from '~/sg/shared/components/ranking/PerFileResultRanking'
import { HighlightResponseFormat } from '~/sg/shared/graphql-operations'
import {
    type ContentMatch,
    type ChunkMatch,
    getFileMatchUrl,
    getRepositoryUrl,
    getRevision,
    type LineMatch,
} from '~/sg/shared/search/stream'
import { useSettings, type SettingsCascadeProps } from '~/sg/shared/settings/settings'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { Icon } from '~/sg/wildcard'

import { CopyPathAction } from './CopyPathAction'
import { FileMatchChildren } from './FileMatchChildren'
import { RepoFileLink } from './RepoFileLink'
import { ResultContainer } from './ResultContainer'
import { SearchResultPreviewButton } from './SearchResultPreviewButton'

import styles from './FileContentSearchResult.module.scss'
import resultStyles from './ResultContainer.module.scss'

const DEFAULT_VISIBILITY_OFFSET = { bottom: -500 }

interface Props extends SettingsCascadeProps, TelemetryProps, TelemetryV2Props {
    /**
     * The file match search result.
     */
    result: ContentMatch

    /**
     * Formatted repository name to be displayed in repository link. If not
     * provided, the default format will be displayed.
     */
    repoDisplayName?: string

    /**
     * Called when the file's search result is selected.
     */
    onSelect: () => void

    /**
     * Whether this file should be rendered as expanded by default.
     */
    defaultExpanded: boolean

    /**
     * Whether or not to show all matches for this file, or only a subset.
     */
    showAllMatches: boolean

    allExpanded?: boolean

    fetchHighlightedFileLineRanges: (parameters: FetchFileParameters, force?: boolean) => Observable<string[][]>

    /**
     * CSS class name to be applied to the ResultContainer Component
     */
    containerClassName?: string

    /**
     * Clicking on a match opens the link in a new tab.
     */
    openInNewTab?: boolean

    index: number

    /**
     * Don't display the file preview button in the VSCode extension.
     * Expose this prop to allow the VSCode extension to hide the button.
     * Name it "hide" in an attempt to communicate that hiding is a special case.
     */
    hideFilePreviewButton?: boolean
}

const BY_LINE_RANKING = 'by-line-number'

export const FileContentSearchResult: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    containerClassName,
    result,
    settingsCascade,
    index,
    repoDisplayName,
    defaultExpanded,
    allExpanded,
    showAllMatches,
    openInNewTab,
    telemetryService,
    telemetryRecorder,
    fetchHighlightedFileLineRanges,
    onSelect,
    hideFilePreviewButton = false, // hiding the file preview button is a special case for the VSCode extension; we normally want it shown.
}) => {
    const repoAtRevisionURL = getRepositoryUrl(result.repository, result.branches)
    const revisionDisplayName = getRevision(result.branches, result.commit)

    const settings = useSettings()
    const reranker = useMemo(() => {
        if (settings?.experimentalFeatures?.clientSearchResultRanking === BY_LINE_RANKING) {
            return rankByLine
        }
        return rankPassthrough
    }, [settings])

    const contextLines = useMemo(() => settings?.['search.contextLines'] ?? 1, [settings])

    const unhighlightedGroups: MatchGroup[] = useMemo(() => reranker(matchesToMatchGroups(result)), [result, reranker])

    const [expandedGroups, setExpandedGroups] = useState(unhighlightedGroups)
    const collapsedGroups = truncateGroups(expandedGroups, 5, contextLines)

    const [hasBeenVisible, setHasBeenVisible] = useState(false)
    const onVisible = useCallback(() => {
        if (hasBeenVisible) {
            return
        }
        setHasBeenVisible(true)

        // This file contains some large lines, avoid stressing
        // syntax-highlighter and the browser.
        if (result.chunkMatches?.some(chunk => chunk.contentTruncated)) {
            return
        }

        const subscription = fetchHighlightedFileLineRanges(
            {
                repoName: result.repository,
                commitID: result.commit || '',
                filePath: result.path,
                disableTimeout: false,
                format: HighlightResponseFormat.HTML_HIGHLIGHT,
                // Explicitly narrow the object otherwise we'll send a bunch of extra data in the request.
                ranges: unhighlightedGroups.map(({ startLine, endLine }) => ({ startLine, endLine })),
            },
            false
        )
            .pipe(catchError(error => [asError(error)]))
            .subscribe(res => {
                if (!isErrorLike(res)) {
                    setExpandedGroups(
                        unhighlightedGroups.map((group, i) => ({
                            ...group,
                            highlightedHTMLRows: res[i],
                        }))
                    )
                }
            })
        return () => subscription.unsubscribe()
    }, [result, unhighlightedGroups, hasBeenVisible, fetchHighlightedFileLineRanges])

    const expandedHighlightCount = countHighlightRanges(expandedGroups)
    const collapsedHighlightCount = countHighlightRanges(collapsedGroups)

    const hiddenMatchesCount = expandedHighlightCount - collapsedHighlightCount
    const collapsible = !showAllMatches && expandedHighlightCount > collapsedHighlightCount

    const [expanded, setExpanded] = useState(allExpanded || defaultExpanded)
    useEffect(() => setExpanded(allExpanded || defaultExpanded), [allExpanded, defaultExpanded])

    const rootRef = useRef<HTMLDivElement>(null)
    const toggle = useCallback((): void => {
        if (collapsible) {
            setExpanded(expanded => !expanded)
        }

        // Scroll back to top of result when collapsing
        if (expanded) {
            setTimeout(() => {
                const reducedMotion = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
                rootRef.current?.scrollIntoView({ block: 'nearest', behavior: reducedMotion ? 'auto' : 'smooth' })
            }, 0)
        }
    }, [collapsible, expanded])

    const title = (
        <>
            <span className="d-flex align-items-center">
                <RepoFileLink
                    repoName={result.repository}
                    repoURL={repoAtRevisionURL}
                    filePath={result.path}
                    pathMatchRanges={result.pathMatches ?? []}
                    fileURL={getFileMatchUrl(result)}
                    repoDisplayName={
                        repoDisplayName
                            ? `${repoDisplayName}${revisionDisplayName ? `@${revisionDisplayName}` : ''}`
                            : undefined
                    }
                    className={resultStyles.titleInner}
                />
                <CopyPathAction
                    className={resultStyles.copyButton}
                    filePath={result.path}
                    telemetryService={telemetryService}
                    telemetryRecorder={telemetryRecorder}
                />
            </span>
        </>
    )

    useEffect(() => {
        const ref = rootRef.current
        if (!ref) {
            return
        }

        const expand = (): void => setExpanded(true)
        const collapse = (): void => setExpanded(false)
        const toggle = (): void => setExpanded(expanded => !expanded)

        // Custom events triggered by search results keyboard navigation (from the useSearchResultsKeyboardNavigation hook).
        ref.addEventListener('expandSearchResultsGroup', expand)
        ref.addEventListener('collapseSearchResultsGroup', collapse)
        ref.addEventListener('toggleSearchResultsGroup', toggle)

        return () => {
            ref.removeEventListener('expandSearchResultsGroup', expand)
            ref.removeEventListener('collapseSearchResultsGroup', collapse)
            ref.removeEventListener('toggleSearchResultsGroup', toggle)
        }
    }, [rootRef, setExpanded])

    return (
        <ResultContainer
            ref={rootRef}
            index={index}
            title={title}
            resultType={result.type}
            onResultClicked={onSelect}
            repoName={result.repository}
            repoStars={result.repoStars}
            className={classNames(resultStyles.copyButtonContainer, containerClassName)}
            rankingDebug={result.debug}
            repoLastFetched={result.repoLastFetched}
            actions={
                !hideFilePreviewButton ? (
                    <SearchResultPreviewButton
                        result={result}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                    />
                ) : undefined
            }
        >
            <VisibilitySensor
                onChange={(visible: boolean) => visible && onVisible()}
                partialVisibility={true}
                offset={DEFAULT_VISIBILITY_OFFSET}
            >
                <div data-testid="file-search-result" data-expanded={expanded}>
                    <FileMatchChildren
                        result={result}
                        grouped={expanded ? expandedGroups : collapsedGroups}
                        settingsCascade={settingsCascade}
                        telemetryService={telemetryService}
                        telemetryRecorder={telemetryRecorder}
                        openInNewTab={openInNewTab}
                    />
                    {collapsible && (
                        <button
                            type="button"
                            className={classNames(
                                styles.toggleMatchesButton,
                                resultStyles.focusableBlock,
                                resultStyles.clickable,
                                expanded && styles.toggleMatchesButtonExpanded
                            )}
                            onClick={toggle}
                            data-testid="toggle-matches-container"
                        >
                            <Icon aria-hidden={true} svgPath={expanded ? mdiChevronUp : mdiChevronDown} />
                            <span className={styles.toggleMatchesButtonText}>
                                {expanded
                                    ? 'Show less'
                                    : `Show ${hiddenMatchesCount} more ${pluralize(
                                          'match',
                                          hiddenMatchesCount,
                                          'matches'
                                      )}`}
                            </span>
                        </button>
                    )}
                </div>
            </VisibilitySensor>
        </ResultContainer>
    )
}

function countHighlightRanges(groups: MatchGroup[]): number {
    return groups.reduce((count, group) => count + group.matches.length, 0)
}

function matchesToMatchGroups(result: ContentMatch): MatchGroup[] {
    return [
        ...(result.lineMatches?.map(lineToMatchGroup) ?? []),
        ...(result.chunkMatches?.map(chunkToMatchGroup) ?? []),
    ]
}
function chunkToMatchGroup(chunk: ChunkMatch): MatchGroup {
    const matches = chunk.ranges.map(range => ({
        startLine: range.start.line,
        startCharacter: range.start.column,
        endLine: range.end.line,
        endCharacter: range.end.column,
    }))
    const plaintextLines = chunk.content.replace(/\r?\n$/, '').split(/\r?\n/)
    return {
        plaintextLines,
        highlightedHTMLRows: undefined, // populated lazily
        matches,
        startLine: chunk.contentStart.line,
        endLine: chunk.contentStart.line + plaintextLines.length,
    }
}

function lineToMatchGroup(line: LineMatch): MatchGroup {
    const matches = line.offsetAndLengths.map(offsetAndLength => ({
        startLine: line.lineNumber,
        startCharacter: offsetAndLength[0],
        endLine: line.lineNumber,
        endCharacter: offsetAndLength[0] + offsetAndLength[1],
    }))
    return {
        plaintextLines: [line.line],
        highlightedHTMLRows: undefined, // populated lazily
        matches,
        startLine: line.lineNumber,
        endLine: line.lineNumber + 1, // the matches support `endLine` == `startLine`, but MatchGroup requires `endLine` > `startLine`
    }
}
