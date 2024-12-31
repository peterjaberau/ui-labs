import { getTemporarySettingOverride } from '~/internals/development/sg/shared/settings/temporary/localOverride.ts'
import { TEMPORARY_SETTINGS_KEYS } from '~/internals/development/sg/shared/settings/temporary/TemporarySettings.ts'

import { getFeatureFlagOverrides } from '../featureFlags/lib/feature-flag-local-overrides.ts'

export function countOverrides(): { featureFlags: number; temporarySettings: number } {
    return {
        featureFlags: getFeatureFlagOverrides().size,
        temporarySettings: TEMPORARY_SETTINGS_KEYS.reduce(
            (sum, name) => sum + (getTemporarySettingOverride(name) === null ? 0 : 1),
            0
        ),
    }
}
