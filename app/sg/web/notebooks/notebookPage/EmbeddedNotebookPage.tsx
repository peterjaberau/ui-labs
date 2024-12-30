import { type FC, useCallback, useEffect, useMemo } from 'react'

import { noop } from 'lodash'
import { useParams } from '@remix-run/react'
import { NEVER } from 'rxjs'
import { catchError, startWith } from 'rxjs/operators'

import { asError, isErrorLike } from '~/sg/common'
import {
    type FetchFileParameters,
    fetchHighlightedFileLineRanges as fetchHighlightedFileLineRangesShared,
} from '~/sg/shared/backend/file'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import { aggregateStreamingSearch } from '~/sg/shared/search/stream'
import { EVENT_LOGGER } from '~/sg/shared/telemetry/web/eventLogger'
import { Alert, LoadingSpinner, useObservable } from '~/sg/wildcard'

import { fetchNotebook } from '../backend'
import { convertNotebookTitleToFileName } from '../serialize'

import { NotebookContent, type NotebookContentProps } from './NotebookContent'

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
