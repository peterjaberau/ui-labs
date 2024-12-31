import React, { useMemo } from 'react'

import { noop } from 'lodash'
import type { Observable } from 'rxjs'

import type { StreamingSearchResultsListProps } from '~/internals/development/sg/branded'
import type { AuthenticatedUser } from '~/internals/development/sg/shared/auth.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import type { Block, BlockInit } from '../index.ts'
import type { NotebookFields } from '../../graphql-operations.ts'
import { SearchPatternType } from '../../graphql-operations.ts'
import type { OwnConfigProps } from '../../own/OwnConfigProps.ts'
import type { SearchStreamingProps } from '../../search'
import type { CopyNotebookProps } from '../notebook'
import { NotebookComponent } from '../notebook/NotebookComponent.tsx'

export interface NotebookContentProps
    extends SearchStreamingProps,
        TelemetryProps,
        TelemetryV2Props,
        Omit<StreamingSearchResultsListProps, 'allExpanded' | 'platformContext' | 'executedQuery'>,
        PlatformContextProps<'sourcegraphURL' | 'requestGraphQL' | 'urlToFile' | 'settings'>,
        OwnConfigProps {
    authenticatedUser: AuthenticatedUser | null
    viewerCanManage: boolean
    blocks: NotebookFields['blocks']
    exportedFileName: string
    isEmbedded?: boolean
    outlineContainerElement?: HTMLElement | null
    onUpdateBlocks: (blocks: Block[]) => void
    onCopyNotebook: (props: Omit<CopyNotebookProps, 'title'>) => Observable<NotebookFields>
    patternType: SearchPatternType
}

export const NotebookContent: React.FunctionComponent<React.PropsWithChildren<NotebookContentProps>> = React.memo(
    ({
        viewerCanManage,
        blocks,
        exportedFileName,
        onCopyNotebook,
        onUpdateBlocks,
        streamSearch,
        telemetryService,
        telemetryRecorder,
        searchContextsEnabled,
        ownEnabled,
        isSourcegraphDotCom,
        fetchHighlightedFileLineRanges,
        authenticatedUser,
        settingsCascade,
        platformContext,
        outlineContainerElement,
        isEmbedded,
        patternType,
    }) => {
        const initializerBlocks: BlockInit[] = useMemo(
            () =>
                blocks.map(block => {
                    switch (block.__typename) {
                        case 'MarkdownBlock': {
                            return { id: block.id, type: 'md', input: { text: block.markdownInput } }
                        }
                        case 'QueryBlock': {
                            return { id: block.id, type: 'query', input: { query: block.queryInput } }
                        }
                        case 'FileBlock': {
                            return {
                                id: block.id,
                                type: 'file',
                                input: { ...block.fileInput, revision: block.fileInput.revision ?? '' },
                            }
                        }
                        case 'SymbolBlock': {
                            return {
                                id: block.id,
                                type: 'symbol',
                                input: { ...block.symbolInput, revision: block.symbolInput.revision ?? '' },
                            }
                        }
                    }
                }),
            [blocks]
        )

        return (
            <NotebookComponent
                streamSearch={streamSearch}
                telemetryService={telemetryService}
                telemetryRecorder={telemetryRecorder}
                searchContextsEnabled={searchContextsEnabled}
                ownEnabled={ownEnabled}
                isSourcegraphDotCom={isSourcegraphDotCom}
                fetchHighlightedFileLineRanges={fetchHighlightedFileLineRanges}
                authenticatedUser={authenticatedUser}
                settingsCascade={settingsCascade}
                platformContext={platformContext}
                isReadOnly={!viewerCanManage}
                blocks={initializerBlocks}
                onSerializeBlocks={viewerCanManage ? onUpdateBlocks : noop}
                exportedFileName={exportedFileName}
                onCopyNotebook={onCopyNotebook}
                outlineContainerElement={outlineContainerElement}
                isEmbedded={isEmbedded}
                patternType={patternType}
            />
        )
    }
)

NotebookContent.displayName = 'NotebookContent'
