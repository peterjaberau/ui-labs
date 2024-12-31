import { gql } from '~/internals/development/sg/http-client'

export const REPO_CHANGESETS_STATS = gql`
    query RepoChangesetsStats($name: String!) {
        repository(name: $name) {
            id
            changesetsStats {
                open
                merged
            }
        }
    }
`
