import type { SettingsExperimentalFeatures } from '~/sg/shared/schema/settings.schema'
import { useExperimentalFeatures } from '~/sg/shared/settings/settings'

export function useFuzzyFinderFeatureFlags(): Pick<
    SettingsExperimentalFeatures,
    'fuzzyFinderAll' | 'fuzzyFinderActions' | 'fuzzyFinderRepositories' | 'fuzzyFinderSymbols' | 'fuzzyFinderNavbar'
> {
    return useExperimentalFeatures(features => {
        let { fuzzyFinderAll, fuzzyFinderActions, fuzzyFinderRepositories, fuzzyFinderSymbols, fuzzyFinderNavbar } =
            features

        // enable fuzzy finder unless it's explicitly disabled in settings
        fuzzyFinderAll = fuzzyFinderAll ?? true
        // Intentionally skip fuzzyFinderActions because we don't have enough actions implemented
        // Intentionally skip fuzzyFinderNavbar because the navbar is already too busy and we need to explore alternative solutions for the discoverability problem
        fuzzyFinderRepositories = fuzzyFinderAll || fuzzyFinderRepositories
        fuzzyFinderSymbols = fuzzyFinderAll || fuzzyFinderSymbols
        return {
            fuzzyFinderAll,
            fuzzyFinderActions,
            fuzzyFinderRepositories,
            fuzzyFinderSymbols,
            fuzzyFinderNavbar,
        }
    })
}
