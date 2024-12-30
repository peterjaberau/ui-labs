import React from 'react'

import { mdiLink } from '@mdi/js'

import type { Settings } from '~/sg/shared/schema/settings.schema'
import { isSettingsValid, type SettingsCascadeProps } from '~/sg/shared/settings/settings'
import { Link, Icon, Tooltip } from '~/sg/wildcard'

import styles from './SearchFilterSection.module.scss'

export const getQuickLinks = (settingsCascade: SettingsCascadeProps['settingsCascade']): React.ReactElement[] => {
    const quickLinks = (isSettingsValid<Settings>(settingsCascade) && settingsCascade.final.quicklinks) || []

    return quickLinks.map((quickLink, index) => (
        <Tooltip
            // Can't guarantee that URL, name, or description are unique, so use index as key.
            // This is safe since this list will only be updated when settings change.
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            content={quickLink.description ?? null}
            placement="right"
        >
            <Link to={quickLink.url} className={styles.sidebarSectionListItem}>
                <Icon aria-hidden={true} className="pr-1 flex-shrink-0" svgPath={mdiLink} />
                {quickLink.name}
            </Link>
        </Tooltip>
    ))
}
