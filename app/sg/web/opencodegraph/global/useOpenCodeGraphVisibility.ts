import { type UseTemporarySettingsReturnType, useTemporarySetting } from '~/sg/shared/settings/temporary'

export function useOpenCodeGraphVisibility(): UseTemporarySettingsReturnType<'openCodeGraph.annotations.visible'> {
    return useTemporarySetting('openCodeGraph.annotations.visible')
}
