import { useExperimentalFeatures } from '~/internals/development/sg/shared/settings/settings.tsx'

export function useIsNewSearchFiltersEnabled(): boolean {
    const newFiltersEnabled = useExperimentalFeatures(features => features.newSearchResultFiltersPanel)

    return newFiltersEnabled ?? true
}
