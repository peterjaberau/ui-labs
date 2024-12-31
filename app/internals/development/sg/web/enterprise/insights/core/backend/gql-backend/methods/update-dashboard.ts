import { type ApolloClient, gql } from '@apollo/client'
import { from, type Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import type { UpdateDashboardResult, UpdateDashboardVariables } from '../../../../../../graphql-operations.ts'
import type { DashboardUpdateInput, DashboardUpdateResult } from '../../code-insights-backend-types.ts'

import { serializeDashboardOwners } from './create-dashboard/create-dashboard.ts'

const UPDATE_DASHBOARD_MUTATION = gql`
    mutation UpdateDashboard($id: ID!, $input: UpdateInsightsDashboardInput!) {
        updateInsightsDashboard(id: $id, input: $input) {
            dashboard {
                id
                title
                grants {
                    users
                    organizations
                    global
                }
            }
        }
    }
`

export const updateDashboard = (
    apolloClient: ApolloClient<unknown>,
    { id, nextDashboardInput }: DashboardUpdateInput
): Observable<DashboardUpdateResult> => {
    const { name, owners } = nextDashboardInput

    return from(
        apolloClient.mutate<UpdateDashboardResult, UpdateDashboardVariables>({
            mutation: UPDATE_DASHBOARD_MUTATION,
            variables: { id, input: { title: name, grants: serializeDashboardOwners(owners) } },
        })
    ).pipe(
        map(result => {
            const { data } = result

            if (!data?.updateInsightsDashboard) {
                throw new Error('The dashboard update was not successful')
            }

            return data.updateInsightsDashboard.dashboard
        })
    )
}
