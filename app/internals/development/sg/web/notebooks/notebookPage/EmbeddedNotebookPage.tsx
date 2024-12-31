import { type FC, useCallback, useEffect, useMemo } from 'react'

import { noop } from 'lodash'
import { useParams } from '@remix-run/react'
import { NEVER } from 'rxjs'
import { catchError, startWith } from 'rxjs/operators'

import { asError, isErrorLike } from '~/internals/development/sg/common'
import {
    type FetchFileParameters,
    fetchHighlightedFileLineRanges as fetchHighlightedFileLineRangesShared,
} from '~/internals/development/sg/shared/backend/file.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import { aggregateStreamingSearch } from '~/internals/development/sg/shared/search/stream.ts'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { Alert, LoadingSpinner, useObservable } from '~/internals/development/sg/wildcard'

import { fetchNotebook } from '../backend.ts'
import { convertNotebookTitleToFileName } from '../serialize'

import { NotebookContent, type NotebookContentProps } from './NotebookContent.tsx'

interface EmbeddedNotebookPageProps
    extends Pick<
            NotebookContentProps,
            'searchContextsEnabled' | 'isSourcegraphDotCom' | 'authenticatedUser' | 'settingsCascade' | 'ownEnabled'
        >,
        PlatformContextProps<'sourcegraphURL' | 'requestGraphQL' | 'urlToFile' | 'settings' | 'telemetryRecorder'> {}

const LOADING = 'loading' as const

export const EmbeddedNotebookPage: FC<EmbeddedNotebookPageProps> = ({ platformContext, ...props }) => {
    const { notebookId } = useParams()

    useEffect(() => EVENT_LOGGER.logPageView('EmbeddedNotebookPage'), [])
    platformContext.telemetryRecorder.recordEvent('embeddedNotebook', 'view')

    const notebookOrError = useObservable(
        useMemo(
            () =>
                fetchNotebook(notebookId!).pipe(
                    startWith(LOADING),
                    catchError(error => [asError(error)])
                ),
            [notebookId]
        )
    )

    const fetchHighlightedFileLineRanges = useCallback(
        (parameters: FetchFileParameters, force?: boolean) =>
            fetchHighlightedFileLineRangesShared(
                {
                    ...parameters,
                    platformContext,
                },
                force
            ),
        [platformContext]
    )

    return (
        <div className="p-3">
            {notebookOrError === LOADING && (
                <div className="d-flex justify-content-center">
                    <LoadingSpinner />
                </div>
            )}
            {isErrorLike(notebookOrError) && (
                <Alert variant="danger">
                    Error while loading the notebook: <strong>{notebookOrError.message}</strong>
                </Alert>
            )}
            {notebookOrError && notebookOrError !== LOADING && !isErrorLike(notebookOrError) && (
                <NotebookContent
                    {...props}
                    blocks={notebookOrError.blocks}
                    onUpdateBlocks={noop}
                    viewerCanManage={false}
                    fetchHighlightedFileLineRanges={fetchHighlightedFileLineRanges}
                    streamSearch={aggregateStreamingSearch}
                    telemetryService={EVENT_LOGGER}
                    telemetryRecorder={platformContext.telemetryRecorder}
                    platformContext={platformContext}
                    exportedFileName={convertNotebookTitleToFileName(notebookOrError.title)}
                    // Copying is not supported in embedded notebooks
                    onCopyNotebook={() => NEVER}
                    isEmbedded={true}
                    patternType={notebookOrError.patternType}
                />
            )}
        </div>
    )
}
