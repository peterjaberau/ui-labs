import { isErrorLike } from '~/internals/development/sg/common'
import type { Settings, SettingsCascadeOrError } from '~/internals/development/sg/shared/settings/settings.tsx'

export type SettingsGetter = <T>(setting: string, defaultValue: T) => T

export function newSettingsGetter<T>(settingsCascade: SettingsCascadeOrError<Settings>): SettingsGetter {
    return <T>(setting: string, defaultValue: T): T =>
        (settingsCascade.final &&
            !isErrorLike(settingsCascade.final) &&
            (settingsCascade.final[setting] as T | undefined)) ||
        defaultValue
}
