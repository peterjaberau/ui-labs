import React, { useCallback } from 'react'

import { isErrorLike } from '~/sg/common'
import { updateSettings } from '~/sg/shared/api/client/services/settings'
import type { PlatformContextProps } from '~/sg/shared/platform/context'
import type { SettingsCascadeOrError, SettingsCascadeProps } from '~/sg/shared/settings/settings'
import { Button, Tooltip } from '~/sg/wildcard'

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
