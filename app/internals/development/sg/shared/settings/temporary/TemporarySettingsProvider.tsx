import { type FC, type PropsWithChildren, createContext, useEffect } from 'react'

import { logger } from '~/internals/development/sg/common'

import { migrateLocalStorageToTemporarySettings } from './migrateLocalStorageToTemporarySettings.ts'
import { TemporarySettingsStorage } from './TemporarySettingsStorage.ts'

export const TemporarySettingsContext = createContext<TemporarySettingsStorage>(
    new TemporarySettingsStorage(null, false)
)
TemporarySettingsContext.displayName = 'TemporarySettingsContext'

interface TemporarySettingsProviderProps {
    temporarySettingsStorage: TemporarySettingsStorage
}

/**
 * React context provider for the temporary settings.
 * The web app needs to be wrapped around this.
 */
export const TemporarySettingsProvider: FC<PropsWithChildren<TemporarySettingsProviderProps>> = ({
    children,
    temporarySettingsStorage,
}) => {
    // On first run, migrate the settings from the local storage to the temporary storage.
    useEffect(() => {
        const migrate = async (): Promise<void> => {
            await migrateLocalStorageToTemporarySettings(temporarySettingsStorage)
        }

        migrate().catch(logger.error)
    }, [temporarySettingsStorage])

    // Dispose temporary settings storage on unmount.
    useEffect(() => () => temporarySettingsStorage.dispose(), [temporarySettingsStorage])

    return (
        <TemporarySettingsContext.Provider value={temporarySettingsStorage}>
            {children}
        </TemporarySettingsContext.Provider>
    )
}
