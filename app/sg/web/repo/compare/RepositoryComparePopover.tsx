import React, { useState } from 'react'

import { escapeRevspecForURL } from '~/sg/common'
import type { TelemetryV2Props } from '~/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/sg/shared/telemetry/web/eventLogger'
import { Button, Popover, PopoverContent, PopoverTrigger, Position } from '~/sg/wildcard'

import { RepoRevisionChevronDownIcon } from '../components/RepoRevision'
import { RevisionsPopover } from '../RevisionsPopover'

import type { RepositoryCompareAreaPageProps } from './RepositoryCompareArea'

interface RepositoryCompareHeaderProps extends RepositoryCompareAreaPageProps {
    className: string
}

interface RevisionComparison {
    base: RepositoryCompareHeaderProps['base']
    head: RepositoryCompareHeaderProps['head']
}

interface RepositoryComparePopoverProps extends TelemetryV2Props {
    /**
     * Uniquely identify this specific popover. Used to link the trigger button with the popover to display
     */
    id: string
    /**
     * Initial revision comparison to load. This can be changed by selecting a new revision through the popover.
     */
    comparison: RevisionComparison
    /**
     * The specific comparison type that the popover is concerned with changing.
     */
    type: keyof RevisionComparison
    repo: RepositoryCompareHeaderProps['repo']
}

export const RepositoryComparePopover: React.FunctionComponent<
    React.PropsWithChildren<RepositoryComparePopoverProps>
> = ({ id, comparison, repo, type, telemetryRecorder }) => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    const togglePopover = (): void => setPopoverOpen(previous => !previous)

    const handleSelect = (): void => {
        EVENT_LOGGER.log('RepositoryComparisonSubmitted')
        telemetryRecorder.recordEvent('repo.compare', 'submit')
        togglePopover()
    }

    /**
     * Override the default node URL behavior to support navigating to a repository sub-page.
     */
    const getPathFromRevision = (_href: string, revision: string): string => {
        const escapedRevision = escapeRevspecForURL(revision)
        const comparePath =
            type === 'base'
                ? `${escapedRevision}...${escapeRevspecForURL(comparison.head.revision || '')}`
                : `${escapeRevspecForURL(comparison.base.revision || '')}...${escapedRevision}`

        const revisionPath = `/${repo.name}/-/compare/${comparePath}`

        return revisionPath
    }

    const defaultBranch = repo.defaultBranch?.abbrevName || 'HEAD'
    const currentRevision = comparison[type]?.revision || undefined

    return (
        <Popover isOpen={popoverOpen} onOpenChange={event => setPopoverOpen(event.isOpen)}>
            <PopoverTrigger
                as={Button}
                variant="secondary"
                outline={true}
                className="d-flex align-items-center text-nowrap"
                id={id}
                aria-label={`Change ${type} Git revspec for comparison`}
            >
                <div className="text-muted mr-1">{type}: </div>
                {comparison[type].revision || defaultBranch}
                <RepoRevisionChevronDownIcon aria-hidden={true} />
            </PopoverTrigger>
            <PopoverContent position={Position.bottomStart}>
                <RevisionsPopover
                    repoId={repo.id}
                    repoName={repo.name}
                    repoServiceType={repo?.externalRepository?.serviceType}
                    defaultBranch={defaultBranch}
                    currentRev={currentRevision}
                    currentCommitID={currentRevision}
                    togglePopover={togglePopover}
                    getPathFromRevision={getPathFromRevision}
                    showSpeculativeResults={true}
                    onSelect={handleSelect}
                    telemetryRecorder={telemetryRecorder}
                />
            </PopoverContent>
        </Popover>
    )
}
