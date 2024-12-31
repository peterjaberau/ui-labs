import type { ConfigurationUseContext } from '../configuration.ts'
import type { ActiveTextEditorSelectionRange } from '../editor'

export interface ChatContextStatus {
    mode?: ConfigurationUseContext
    connection?: boolean
    codebase?: string
    filePath?: string
    selectionRange?: ActiveTextEditorSelectionRange
    supportsKeyword?: boolean
}
