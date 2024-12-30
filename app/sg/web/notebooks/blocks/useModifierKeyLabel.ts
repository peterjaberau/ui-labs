import { useMemo } from 'react'

import { isMacPlatform as isMacPlatformFunc } from '~/sg/common'

export const useModifierKeyLabel = (): string => {
    const isMacPlatform = useMemo(() => isMacPlatformFunc(), [])
    return useMemo(() => (isMacPlatform ? '⌘' : 'Ctrl'), [isMacPlatform])
}
