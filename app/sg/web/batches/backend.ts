import { gql } from '~/sg/http-client'

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
