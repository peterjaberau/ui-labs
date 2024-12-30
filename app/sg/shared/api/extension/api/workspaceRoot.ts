import type * as sourcegraph from 'sourcegraph'

import type { WorkspaceRoot } from '~/sg/extension-api-types'

export class ExtensionWorkspaceRoot implements sourcegraph.WorkspaceRoot {
    public readonly uri: URL
    public readonly inputRevision: string | undefined
    constructor({ uri, inputRevision }: WorkspaceRoot) {
        this.uri = new URL(uri)
        this.inputRevision = inputRevision
    }
}
