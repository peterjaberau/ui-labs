import { isErrorLike } from '~/sg/common'
import type { Settings, SettingsCascadeOrError } from '~/sg/shared/settings/settings'

export type SettingsGetter = <T>(setting: string, defaultValue: T) => T

export function newSettingsGetter<T>(settingsCascade: SettingsCascadeOrError<Settings>): SettingsGetter {
    return <T>(setting: string, defaultValue: T): T =>
        (settingsCascade.final &&
            !isErrorLike(settingsCascade.final) &&
            (settingsCascade.final[setting] as T | undefined)) ||
        defaultValue
}
