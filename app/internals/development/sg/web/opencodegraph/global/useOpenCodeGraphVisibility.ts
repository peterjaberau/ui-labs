import { type UseTemporarySettingsReturnType, useTemporarySetting } from '~/internals/development/sg/shared/settings/temporary'

export function useOpenCodeGraphVisibility(): UseTemporarySettingsReturnType<'openCodeGraph.annotations.visible'> {
    return useTemporarySetting('openCodeGraph.annotations.visible')
}
