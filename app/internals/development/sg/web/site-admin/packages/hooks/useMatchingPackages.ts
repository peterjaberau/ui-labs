import type { ApolloError } from '@apollo/client'

import { useQuery } from '~/internals/development/sg/http-client'

import type {
    PackageRepoMatchFields,
    PackageRepoReferencesMatchingFilterResult,
    PackageRepoReferencesMatchingFilterVariables,
} from '../../../graphql-operations.ts'
import { packageRepoFilterQuery } from '../backend.ts'

interface UseMatchingPackagesResult {
    nodes: PackageRepoMatchFields[]
    totalCount: number
    loading: boolean
    error: ApolloError | undefined
}

export const useMatchingPackages = (
    variables: PackageRepoReferencesMatchingFilterVariables
): UseMatchingPackagesResult => {
    const { data, loading, error } = useQuery<
        PackageRepoReferencesMatchingFilterResult,
        PackageRepoReferencesMatchingFilterVariables
    >(packageRepoFilterQuery, {
        variables,
    })

    const { nodes, totalCount } =
        data?.packageRepoReferencesMatchingFilter.__typename === 'PackageRepoReferenceConnection'
            ? {
                  nodes: data.packageRepoReferencesMatchingFilter.nodes,
                  totalCount: data.packageRepoReferencesMatchingFilter.totalCount,
              }
            : {
                  nodes: [],
                  totalCount: 0,
              }

    return {
        nodes,
        totalCount,
        loading,
        error,
    }
}
