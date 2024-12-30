import React, { useState, useMemo, useCallback } from 'react'

import type { EditorView } from '@codemirror/view'
import { mdiOpenInNew, mdiInformationOutline, mdiCheck, mdiPencil } from '@mdi/js'
import { debounce } from 'lodash'
import { of } from 'rxjs'
import { startWith } from 'rxjs/operators'

import { CodeExcerpt } from '~/sg/branded'
import { isErrorLike } from '~/sg/common'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import { getRepositoryUrl } from '~/sg/shared/search/stream'
import { useExperimentalFeatures } from '~/sg/shared/settings/settings'
import { SymbolKind } from '~/sg/shared/symbols/SymbolKind'
import { TelemetryV2Props } from '~/sg/shared/telemetry'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { codeCopiedEvent } from '~/sg/shared/tracking/event-log-creators'
import { toPrettyBlobURL } from '~/sg/shared/util/url'
import { Alert, Icon, LoadingSpinner, Tooltip, useObservable } from '~/sg/wildcard'

import type { BlockProps, SymbolBlock, SymbolBlockInput, SymbolBlockOutput } from '../..'
import { focusEditor } from '../../codemirror-utils'
import type { BlockMenuAction } from '../menu/NotebookBlockMenu'
import { useCommonBlockMenuActions } from '../menu/useCommonBlockMenuActions'
import { NotebookBlock } from '../NotebookBlock'
import { RepoFileSymbolLink } from '../RepoFileSymbolLink'
import { useModifierKeyLabel } from '../useModifierKeyLabel'

import { NotebookSymbolBlockInput } from './NotebookSymbolBlockInput'

import styles from './NotebookSymbolBlock.module.scss'

interface NotebookSymbolBlockProps
    extends BlockProps<SymbolBlock>,
        TelemetryProps,
        TelemetryV2Props,
        PlatformContextProps<'requestGraphQL' | 'urlToFile' | 'settings'> {
    isSourcegraphDotCom: boolean
}

const LOADING = 'LOADING' as const

function isSymbolOutputLoaded(
    output: SymbolBlockOutput | Error | typeof LOADING | undefined
): output is SymbolBlockOutput {
    return output !== undefined && !isErrorLike(output) && output !== LOADING
}

export const NotebookSymbolBlock: React.FunctionComponent<React.PropsWithChildren<NotebookSymbolBlockProps>> =
    React.memo(
        ({
            id,
            input,
            output,
            telemetryService,
            telemetryRecorder,
            isSelected,
            showMenu,
            isReadOnly,
            onRunBlock,
            onBlockInputChange,
            ...props
        }) => {
            const [editor, setEditor] = useState<EditorView | null>()
            const [showInputs, setShowInputs] = useState(input.symbolName.length === 0)
            const [symbolQueryInput, setSymbolQueryInput] = useState(input.initialQueryInput ?? '')
            const debouncedSetSymbolQueryInput = useMemo(
                () => debounce(setSymbolQueryInput, 300),
                [setSymbolQueryInput]
            )

            const onSymbolSelected = useCallback(
                (input: SymbolBlockInput) => {
                    onBlockInputChange(id, { type: 'symbol', input })
                    onRunBlock(id)
                },
                [id, onBlockInputChange, onRunBlock]
            )

            const focusInput = useCallback(() => {
                if (editor) {
                    focusEditor(editor)
                }
            }, [editor])

            const hideInputs = useCallback(() => setShowInputs(false), [setShowInputs])

            const symbolOutput = useObservable(
                useMemo(() => output?.pipe(startWith(LOADING)) ?? of(undefined), [output])
            )

            const commonMenuActions = useCommonBlockMenuActions({
                id,
                isReadOnly,
                ...props,
            })

            const symbolURL = useMemo(
                () =>
                    isSymbolOutputLoaded(symbolOutput)
                        ? toPrettyBlobURL({
                              repoName: input.repositoryName,
                              revision: symbolOutput.effectiveRevision,
                              filePath: input.filePath,
                              range: symbolOutput.symbolRange,
                          })
                        : '',
                [input, symbolOutput]
            )

            const linkMenuAction: BlockMenuAction[] = useMemo(
                () => [
                    {
                        type: 'link',
                        label: 'Open in new tab',
                        icon: <Icon aria-hidden={true} svgPath={mdiOpenInNew} />,
                        url: symbolURL,
                        isDisabled: symbolURL.length === 0,
                    },
                ],
                [symbolURL]
            )

            const modifierKeyLabel = useModifierKeyLabel()
            const toggleEditMenuAction: BlockMenuAction[] = useMemo(
                () => [
                    {
                        type: 'button',
                        label: showInputs ? 'Save' : 'Edit',
                        icon: <Icon aria-hidden={true} svgPath={showInputs ? mdiCheck : mdiPencil} />,
                        onClick: () => setShowInputs(!showInputs),
                        keyboardShortcutLabel: showInputs ? `${modifierKeyLabel} + ↵` : '↵',
                    },
                ],
                [modifierKeyLabel, showInputs, setShowInputs]
            )

            const menuActions = useMemo(
                () => (!isReadOnly ? toggleEditMenuAction : []).concat(linkMenuAction).concat(commonMenuActions),
                [isReadOnly, linkMenuAction, toggleEditMenuAction, commonMenuActions]
            )

            const logEventOnCopy = useCallback(() => {
                telemetryService.log(...codeCopiedEvent('notebook-symbols'))
                telemetryRecorder.recordEvent('notebook.code', 'copy', { metadata: { page: 1 } })
            }, [telemetryService, telemetryRecorder])

            return (
                <NotebookBlock
                    className={styles.block}
                    id={id}
                    aria-label="Notebook symbol block"
                    isInputVisible={showInputs}
                    setIsInputVisible={setShowInputs}
                    focusInput={focusInput}
                    isReadOnly={isReadOnly}
                    isSelected={isSelected}
                    showMenu={showMenu}
                    actions={isSelected ? menuActions : linkMenuAction}
                    {...props}
                >
                    <div className={styles.header}>
                        {input.symbolName.length > 0 ? (
                            <NotebookSymbolBlockHeader
                                {...input}
                                symbolFoundAtLatestRevision={
                                    isSymbolOutputLoaded(symbolOutput)
                                        ? symbolOutput.symbolFoundAtLatestRevision
                                        : undefined
                                }
                                effectiveRevision={
                                    isSymbolOutputLoaded(symbolOutput) ? symbolOutput.effectiveRevision.slice(0, 7) : ''
                                }
                                symbolURL={symbolURL}
                            />
                        ) : (
                            <>No symbol selected</>
                        )}
                    </div>
                    {showInputs && (
                        <NotebookSymbolBlockInput
                            id={id}
                            queryInput={symbolQueryInput}
                            onEditorCreated={setEditor}
                            setQueryInput={debouncedSetSymbolQueryInput}
                            onSymbolSelected={onSymbolSelected}
                            onRunBlock={hideInputs}
                            {...props}
                        />
                    )}
                    {symbolOutput === LOADING && (
                        <div className="d-flex justify-content-center py-3">
                            <LoadingSpinner inline={false} />
                        </div>
                    )}
                    {isSymbolOutputLoaded(symbolOutput) && (
                        <div>
                            <CodeExcerpt
                                className={styles.code}
                                repoName={input.repositoryName}
                                commitID={input.revision}
                                filePath={input.filePath}
                                plaintextLines={[]}
                                highlightedLines={symbolOutput.highlightedLines}
                                highlightRanges={[symbolOutput.highlightSymbolRange]}
                                {...symbolOutput.highlightLineRange}
                                onCopy={logEventOnCopy}
                            />
                        </div>
                    )}
                    {symbolOutput && symbolOutput !== LOADING && isErrorLike(symbolOutput) && (
                        <Alert className="m-3" variant="danger">
                            {symbolOutput.message}
                        </Alert>
                    )}
                </NotebookBlock>
            )
        }
    )

interface NotebookSymbolBlockHeaderProps extends SymbolBlockInput {
    symbolFoundAtLatestRevision: boolean | undefined
    effectiveRevision: string
    symbolURL: string
}

const NotebookSymbolBlockHeader: React.FunctionComponent<React.PropsWithChildren<NotebookSymbolBlockHeaderProps>> = ({
    repositoryName,
    filePath,
    symbolFoundAtLatestRevision,
    effectiveRevision,
    symbolName,
    symbolKind,
    symbolURL,
}) => {
    const repoAtRevisionURL = getRepositoryUrl(repositoryName, [effectiveRevision])
    const symbolKindTags = useExperimentalFeatures(features => features.symbolKindTags)
    return (
        <>
            <SymbolKind kind={symbolKind} className={styles.symbolKind} symbolKindTags={symbolKindTags} />
            <div className={styles.separator} />
            <RepoFileSymbolLink
                repoName={repositoryName}
                repoURL={repoAtRevisionURL}
                filePath={filePath}
                fileURL={symbolURL}
                symbolURL={symbolURL}
                symbolName={symbolName}
            />
            {symbolFoundAtLatestRevision === false && (
                <Tooltip
                    content={`Symbol not found at the latest revision, showing symbol at revision ${effectiveRevision}.`}
                >
                    <Icon
                        aria-label={`Symbol not found at the latest revision, showing symbol at revision ${effectiveRevision}.`}
                        className="ml-1"
                        svgPath={mdiInformationOutline}
                    />
                </Tooltip>
            )}
        </>
    )
}