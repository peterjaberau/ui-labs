import { logger } from '~/internals/development/sg/common'
import { gql, useQuery } from '~/internals/development/sg/http-client'

import { type LibraryConfigurationResult } from '../graphql-operations.ts'

type LibraryConfiguration = Pick<LibraryConfigurationResult, 'viewerCanChangeLibraryItemVisibilityToPublic'>

const DEFAULT_LIBRARY_CONFIGURATION: LibraryConfiguration = {
    viewerCanChangeLibraryItemVisibilityToPublic: false,
}

const libraryConfigurationQuery = gql`
    query LibraryConfiguration {
        viewerCanChangeLibraryItemVisibilityToPublic
    }
`

/**
 * A React hook to get the configuration for the saved searches library and prompt library.
 */
export function useLibraryConfiguration(): LibraryConfiguration {
    const { data } = useQuery<LibraryConfigurationResult>(libraryConfigurationQuery, {
        onError(error) {
            logger.error('Failed to fetch library configuration:', error)
        },
    })
    return data ?? DEFAULT_LIBRARY_CONFIGURATION
}
