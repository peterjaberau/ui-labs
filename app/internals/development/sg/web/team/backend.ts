import type { MutationTuple } from '@apollo/client'

import { gql, useMutation } from '~/internals/development/sg/http-client'

import type { CreateTeamResult, CreateTeamVariables } from '../graphql-operations.ts'

export function useCreateTeam(): MutationTuple<CreateTeamResult, CreateTeamVariables> {
    return useMutation<CreateTeamResult, CreateTeamVariables>(
        gql`
            mutation CreateTeam($name: String!, $displayName: String, $parentTeam: String) {
                createTeam(name: $name, displayName: $displayName, parentTeamName: $parentTeam) {
                    id
                    name
                    url
                }
            }
        `
    )
}
