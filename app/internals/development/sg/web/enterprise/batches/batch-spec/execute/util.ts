import { BatchSpecWorkspaceState } from '../../../../graphql-operations.ts'

export function isValidBatchSpecWorkspaceState(state: string): state is BatchSpecWorkspaceState {
    return Object.values(BatchSpecWorkspaceState).some(value => value === state)
}
