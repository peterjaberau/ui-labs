import React, { useCallback } from 'react'

import { isErrorLike } from '~/internals/development/sg/common'
import { updateSettings } from '~/internals/development/sg/shared/api/client/services/settings.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeOrError, SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import { Button, Tooltip } from '~/internals/development/sg/wildcard'

import styles from './TabbedPanelContent.module.scss'

interface Props extends PlatformContextProps, SettingsCascadeProps {}

export const MixPreciseAndSearchBasedReferencesToggle = (props: Props): React.ReactElement | null => {
    const { settingsCascade, platformContext } = props

    const disableSearchBased = getSettingsValue(settingsCascade, 'codeIntel.disableSearchBased')
    const mixPreciseAndSearchBasedReferences = getSettingsValue(
        settingsCascade,
        'codeIntel.mixPreciseAndSearchBasedReferences'
    )

    const onClick = useCallback(async () => {
        await updateSettings(platformContext, {
            path: ['codeIntel.mixPreciseAndSearchBasedReferences'],
            value: !mixPreciseAndSearchBasedReferences,
        })
    }, [mixPreciseAndSearchBasedReferences, platformContext])

    if (disableSearchBased) {
        return null
    }

    return (
        <li className="px-2 mx-2">
            <Tooltip
                content={
                    mixPreciseAndSearchBasedReferences
                        ? 'Hide search-based results when precise results are available'
                        : null
                }
            >
                <Button variant="link" className={styles.actionItem} onClick={onClick}>
                    {mixPreciseAndSearchBasedReferences
                        ? 'Hide search-based results'
                        : 'Mix precise and search-based results'}
                </Button>
            </Tooltip>
        </li>
    )
}

function getSettingsValue(settings: SettingsCascadeOrError, key: string): boolean {
    return !isErrorLike(settings.final) && settings.final?.[key]
}
