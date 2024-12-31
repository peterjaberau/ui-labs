import { SavedSearchFields } from '../graphql-operations.ts'

export function urlToEditSavedSearch(savedSearch: Pick<SavedSearchFields, 'url'>): string {
    return `${savedSearch.url}/edit`
}
