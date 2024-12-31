import type { ApolloError } from '@apollo/client'

import { useQuery } from '~/internals/development/sg/http-client'
import { TetherAPI } from '~/internals/development/sg/wildcard'

import type { VisibleIndexesResult, VisibleIndexesVariables } from '../../../../graphql-operations.ts'
import { visibleIndexesQuery } from '../backend.ts'

export interface UseVisibleIndexesResult {
    data?: {
        id: string
        uploadedAt: string | null
        inputCommit: string
        indexer: { name: string; url: string } | null
    }[]
    error?: ApolloError
    loading: boolean
}

export const useVisibleIndexes = (variables: VisibleIndexesVariables): UseVisibleIndexesResult => {
    const { data, error, loading } = useQuery<VisibleIndexesResult, VisibleIndexesVariables>(visibleIndexesQuery, {
        variables,
        fetchPolicy: 'cache-first',
        onCompleted() {
            TetherAPI.update()
        },
        onError() {
            TetherAPI.update()
        },
    })

    const indexes = data?.repository?.commit?.blob?.lsif?.visibleIndexes

    if (!indexes) {
        return { loading, error }
    }

    return {
        data: indexes,
        error,
        loading,
    }
}
