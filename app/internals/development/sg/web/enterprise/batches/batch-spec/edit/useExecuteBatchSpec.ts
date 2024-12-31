import { useCallback, useState } from 'react'

import { useNavigate } from '@remix-run/react'

import { useMutation } from '~/internals/development/sg/http-client'
import type { Scalars } from '~/internals/development/sg/shared/graphql-operations.ts'

import type { ExecuteBatchSpecResult, ExecuteBatchSpecVariables } from '../../../../graphql-operations.ts'
import { EXECUTE_BATCH_SPEC } from '../../create/backend.ts'

interface UseExecuteBatchSpecResult {
    /** Method to invoke the GraphQL mutation to execute the current batch spec. */
    executeBatchSpec: () => void
    /** Whether or not an execution request is currently in flight. */
    isLoading: boolean
    /** Any error from `executeBatchSpec`. */
    error?: Error
}

/**
 * Custom hook for edit page which wraps `useMutation` for `EXECUTE_BATCH_SPEC`.
 *
 * @param batchSpecID The current batch spec ID.
 */
export const useExecuteBatchSpec = (batchSpecID?: Scalars['ID'], noCache?: boolean): UseExecuteBatchSpecResult => {
    const [submitBatchSpec, { loading }] = useMutation<ExecuteBatchSpecResult, ExecuteBatchSpecVariables>(
        EXECUTE_BATCH_SPEC
    )

    const [executionError, setExecutionError] = useState<Error>()

    const navigate = useNavigate()
    const executeBatchSpec = useCallback(() => {
        if (!batchSpecID) {
            return
        }

        submitBatchSpec({
            variables: {
                batchSpec: batchSpecID,
                noCache: noCache === undefined ? null : noCache,
            },
        })
            .then(({ data }) => {
                if (data?.executeBatchSpec) {
                    navigate(
                        `${data.executeBatchSpec.namespace.url}/batch-changes/${data.executeBatchSpec.description.name}/executions/${data.executeBatchSpec.id}`,
                        { replace: true }
                    )
                }
            })
            .catch(setExecutionError)
    }, [submitBatchSpec, noCache, navigate, batchSpecID])

    return {
        executeBatchSpec,
        isLoading: loading,
        error: executionError,
    }
}
