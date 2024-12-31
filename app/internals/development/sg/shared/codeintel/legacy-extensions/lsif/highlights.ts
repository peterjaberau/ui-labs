import type * as sourcegraph from '../api.ts'
import { isDefined } from '../util/helpers.ts'

export function filterLocationsForDocumentHighlights(
    textDocument: sourcegraph.TextDocument,
    locations: sourcegraph.Location[]
): sourcegraph.DocumentHighlight[] {
    return locations
        .filter(({ uri }) => uri.toString() === textDocument.uri)
        .map(({ range }) => range)
        .filter(isDefined)
        .map(range => ({ range }))
}
