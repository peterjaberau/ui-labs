import type { TelemetryRecorder } from '~/internals/development/sg/shared/telemetry'

import type { SavedSearchFields } from '../graphql-operations.ts'
import { namespaceTelemetryMetadata } from '../namespaces/telemetry.ts'

export function telemetryRecordSavedSearchViewSearchResults(
    telemetryRecorder: TelemetryRecorder,
    savedSearch: Pick<SavedSearchFields, 'query' | 'viewerCanAdminister'> & {
        owner?: Pick<SavedSearchFields['owner'], '__typename'>
    },
    onPage: 'List' | 'Form' | 'Detail'
): void {
    const metadata: { [key: string]: number } = {
        ...(savedSearch.owner ? namespaceTelemetryMetadata(savedSearch.owner) : undefined),
        viewerCanAdminister: savedSearch.viewerCanAdminister ? 1 : 0,
        queryLength: savedSearch.query.length,
        [`on${onPage}`]: 1,
    }
    telemetryRecorder.recordEvent('savedSearches', 'viewSearchResults', {
        metadata,
    })
}
