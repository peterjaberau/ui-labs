import type { ApolloError, FetchResult, MutationFunctionOptions, OperationVariables } from '@apollo/client'

import { gql, useMutation } from '~/internals/development/sg/http-client'

import type { UpdateRepositoryIndexConfigurationResult } from '../../../../graphql-operations.ts'

const UPDATE_CONFIGURATION_FOR_REPOSITORY = gql`
    mutation UpdateRepositoryIndexConfiguration($id: ID!, $content: String!) {
        updateRepositoryIndexConfiguration(repository: $id, configuration: $content) {
            alwaysNil
        }
    }
`

type UpdateConfigurationResult = Promise<
    FetchResult<UpdateRepositoryIndexConfigurationResult, Record<string, string>, Record<string, string>>
>
interface UpdateConfigurationForRepositoryResult {
    updateConfigForRepository: (
        options?: MutationFunctionOptions<UpdateRepositoryIndexConfigurationResult, OperationVariables> | undefined
    ) => UpdateConfigurationResult
    isUpdating: boolean
    updatingError: ApolloError | undefined
}

export const useUpdateConfigurationForRepository = (): UpdateConfigurationForRepositoryResult => {
    const [updateConfigForRepository, { loading, error }] = useMutation<UpdateRepositoryIndexConfigurationResult>(
        UPDATE_CONFIGURATION_FOR_REPOSITORY
    )

    return {
        updateConfigForRepository,
        isUpdating: loading,
        updatingError: error,
    }
}
