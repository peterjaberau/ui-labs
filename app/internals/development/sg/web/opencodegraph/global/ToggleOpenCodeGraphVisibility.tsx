import { useCallback } from 'react'

import { mdiWeb, mdiWebOff } from '@mdi/js'

import { SimpleActionItem } from '~/internals/development/sg/shared/actions/SimpleActionItem.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { RenderMode } from '~/internals/development/sg/shared/util/url.ts'
import { Button, Icon, Tooltip } from '~/internals/development/sg/wildcard'

import { RepoHeaderActionAnchor, RepoHeaderActionMenuLink } from '../../repo/components/RepoHeaderActions'

import { useOpenCodeGraphVisibility } from './useOpenCodeGraphVisibility.ts'

import styles from './ToggleOpenCodeGraphVisibility.module.scss'

interface Props extends TelemetryV2Props {
    source?: 'repoHeader' | 'actionItemsBar'
    actionType?: 'nav' | 'dropdown'
    renderMode?: RenderMode
}

export const ToggleOpenCodeGraphVisibilityAction: React.FC<Props> = props => {
    const [visible, setVisible] = useOpenCodeGraphVisibility()

    const disabled = props.renderMode === 'rendered'
    const descriptiveText = disabled
        ? 'OpenCodeGraph metadata is not available in rendered files'
        : `${visible ? 'Hide' : 'Show'} OpenCodeGraph metadata`

    const onCycle = useCallback(() => {
        props.telemetryRecorder.recordEvent('blob.openCodeGraph.metadata', visible ? 'hide' : 'show')
        setVisible(prevVisible => !prevVisible)
    }, [setVisible, visible, props.telemetryRecorder])

    const icon = disabled || !visible ? mdiWebOff : mdiWeb

    if (props.source === 'actionItemsBar') {
        return (
            <SimpleActionItem tooltip={descriptiveText} isActive={visible} onSelect={onCycle} disabled={disabled}>
                <Icon aria-hidden={true} svgPath={icon} className={styles.repoActionIcon} />
            </SimpleActionItem>
        )
    }

    if (props.actionType === 'dropdown') {
        return (
            <RepoHeaderActionMenuLink file={true} as={Button} onClick={onCycle} disabled={disabled}>
                <Icon aria-hidden={true} svgPath={icon} className={styles.repoActionIcon} />
                <span>{descriptiveText}</span>
            </RepoHeaderActionMenuLink>
        )
    }

    return (
        <Tooltip content={descriptiveText}>
            <RepoHeaderActionAnchor
                onSelect={onCycle}
                disabled={disabled}
                className="d-flex justify-content-center align-items-center"
            >
                <Icon aria-hidden={true} svgPath={icon} className={styles.repoActionIcon} />
            </RepoHeaderActionAnchor>
        </Tooltip>
    )
}
