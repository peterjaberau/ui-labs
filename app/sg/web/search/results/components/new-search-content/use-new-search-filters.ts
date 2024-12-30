import { useExperimentalFeatures } from '~/sg/shared/settings/settings'

export function useIsNewSearchFiltersEnabled(): boolean {
    const newFiltersEnabled = useExperimentalFeatures(features => features.newSearchResultFiltersPanel)

    return newFiltersEnabled ?? true
}
