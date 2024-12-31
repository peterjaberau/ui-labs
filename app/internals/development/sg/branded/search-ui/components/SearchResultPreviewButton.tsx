import type { FC } from 'react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Button } from '~/internals/development/sg/wildcard'

import { useSearchResultState, type SearchResultPreview } from '../stores/results-store.ts'

interface SearchResultPreviewButtonProps extends TelemetryProps, TelemetryV2Props {
    result: SearchResultPreview
}

export const SearchResultPreviewButton: FC<SearchResultPreviewButtonProps> = props => {
    const { result, telemetryService, telemetryRecorder } = props
    const { previewBlob, setPreviewBlob, clearPreview } = useSearchResultState()

    const isActive =
        previewBlob?.repository === result.repository &&
        previewBlob?.path === result.path &&
        previewBlob.commit === result.commit

    const handleClick = (): void => {
        if (isActive) {
            clearPreview()
            telemetryService.log('SearchFilePreviewOpen', {}, {})
            telemetryRecorder.recordEvent('search.filePreview', 'open')
        } else {
            setPreviewBlob(result)
            telemetryService.log('SearchFilePreviewClose', {}, {})
            telemetryRecorder.recordEvent('search.filePreview', 'close')
        }
    }

    return (
        <Button variant="link" className="p-0 mr-2" onClick={handleClick}>
            {isActive ? 'Hide preview' : 'Preview'}
        </Button>
    )
}
