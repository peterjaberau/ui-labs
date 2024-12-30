import { getTemporarySettingOverride } from '~/sg/shared/settings/temporary/localOverride'
import { TEMPORARY_SETTINGS_KEYS } from '~/sg/shared/settings/temporary/TemporarySettings'

import { getFeatureFlagOverrides } from '../featureFlags/lib/feature-flag-local-overrides'

export function countOverrides(): { featureFlags: number; temporarySettings: number } {
    return {
        featureFlags: getFeatureFlagOverrides().size,
        temporarySettings: TEMPORARY_SETTINGS_KEYS.reduce(
            (sum, name) => sum + (getTemporarySettingOverride(name) === null ? 0 : 1),
            0
        ),
    }
}
