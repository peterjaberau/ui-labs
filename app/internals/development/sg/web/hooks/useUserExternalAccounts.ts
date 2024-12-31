import { useQuery } from '~/internals/development/sg/http-client'

import type { ExternalAccountFields, UserExternalAccountsWithAccountDataVariables } from '../graphql-operations.ts'
import { USER_EXTERNAL_ACCOUNTS } from '../user/settings/backend.tsx'

type MinExternalAccount = Pick<ExternalAccountFields, 'id' | 'serviceID' | 'serviceType' | 'accountData'>

interface UserExternalAccountsResult {
    user: {
        externalAccounts: {
            nodes: MinExternalAccount[]
        }
    }
}

export function useUserExternalAccounts(username: string): { data: MinExternalAccount[]; loading: boolean } {
    const { data, loading } = useQuery<UserExternalAccountsResult, UserExternalAccountsWithAccountDataVariables>(
        USER_EXTERNAL_ACCOUNTS,
        {
            variables: {
                username,
            },
        }
    )

    if (!data) {
        return { data: [], loading }
    }

    return { data: data?.user?.externalAccounts.nodes, loading }
}
