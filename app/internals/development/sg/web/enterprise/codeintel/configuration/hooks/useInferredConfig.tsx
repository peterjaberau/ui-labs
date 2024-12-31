import type { ApolloError } from '@apollo/client'

import { useQuery } from '~/internals/development/sg/http-client'

import type { InferredIndexConfigurationResult, AutoIndexJobDescriptionFields } from '../../../../graphql-operations.ts'
import { INFERRED_CONFIGURATION } from '../backend.ts'

interface UseInferredConfigResult {
    inferredConfiguration: {
        raw: string
        parsed: AutoIndexJobDescriptionFields[]
    }
    loadingInferred: boolean
    inferredError: ApolloError | undefined
}

export const useInferredConfig = (id: string): UseInferredConfigResult => {
    const { data, loading, error } = useQuery<InferredIndexConfigurationResult>(INFERRED_CONFIGURATION, {
        variables: { id },
    })

    const inferredConfiguration =
        data?.node?.__typename === 'Repository' && data.node.indexConfiguration?.inferredConfiguration
            ? {
                  raw: data.node.indexConfiguration.inferredConfiguration.configuration,
                  parsed: data.node.indexConfiguration.inferredConfiguration.parsedConfiguration ?? [],
              }
            : { raw: '', parsed: [] }

    return {
        inferredConfiguration,
        loadingInferred: loading,
        inferredError: error,
    }
}
