import type { MockedResponse } from '@apollo/client/testing'

import { getDocumentNode } from '~/internals/development/sg/http-client'

import type { ViewerAffiliatedNamespacesResult, ViewerAffiliatedNamespacesVariables } from '../graphql-operations.ts'

import { viewerAffiliatedNamespacesQuery } from './useAffiliatedNamespaces.ts'

export const viewerAffiliatedNamespacesMock: MockedResponse<
    ViewerAffiliatedNamespacesResult,
    ViewerAffiliatedNamespacesVariables
> = {
    request: { query: getDocumentNode(viewerAffiliatedNamespacesQuery) },
    result: {
        data: {
            viewer: {
                affiliatedNamespaces: {
                    nodes: [
                        { __typename: 'User', id: 'user1', namespaceName: 'alice' },
                        {
                            __typename: 'Org',
                            id: 'org1',
                            namespaceName: 'abc',
                        },
                        {
                            __typename: 'Org',
                            id: 'org2',
                            namespaceName: 'xyz',
                        },
                    ],
                },
            },
        },
    },
}
