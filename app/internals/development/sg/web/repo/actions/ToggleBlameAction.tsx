import { useCallback } from 'react'

import { mdiGit } from '@mdi/js'

import { SimpleActionItem } from '~/internals/development/sg/shared/actions/SimpleActionItem.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import type { RenderMode } from '~/internals/development/sg/shared/util/url.ts'
import { Button, Icon, Tooltip } from '~/internals/development/sg/wildcard'

import { useBlameVisibility } from '../blame/hooks.ts'
import { RepoHeaderActionAnchor, RepoHeaderActionMenuLink } from '../components/RepoHeaderActions'
import { RepoActionInfo } from '../RepoActionInfo.tsx'

import styles from './actions.module.scss'

interface Props extends TelemetryV2Props {
    source?: 'repoHeader' | 'actionItemsBar'
    actionType?: 'nav' | 'dropdown'
    renderMode?: RenderMode
    isPackage: boolean
}

export const ToggleBlameAction: React.FC<Props> = props => {
    const [isBlameVisible, setIsBlameVisible] = useBlameVisibility(props.isPackage)

    const disabled = props.isPackage || props.renderMode === 'rendered'

    const descriptiveText = props.isPackage
        ? 'Git blame line annotations are not available when browsing packages'
        : disabled
        ? 'Git blame line annotations are not available when viewing a rendered document'
        : `${isBlameVisible ? 'Hide' : 'Show'} Git blame line annotations`

    const toggleBlameState = useCallback(() => {
        if (isBlameVisible) {
            setIsBlameVisible(false)
            EVENT_LOGGER.log('GitBlameDisabled')
            props.telemetryRecorder.recordEvent('repo.gitBlame', 'disable')
        } else {
            setIsBlameVisible(true)
            EVENT_LOGGER.log('GitBlameEnabled')
            props.telemetryRecorder.recordEvent('repo.gitBlame', 'enable')
        }
    }, [isBlameVisible, setIsBlameVisible, props.telemetryRecorder])

    const icon = <Icon aria-hidden={true} svgPath={mdiGit} />

    if (props.source === 'actionItemsBar') {
        return (
            <SimpleActionItem
                tooltip={descriptiveText}
                isActive={isBlameVisible}
                onSelect={toggleBlameState}
                disabled={disabled}
            >
                {icon}
            </SimpleActionItem>
        )
    }

    if (props.actionType === 'dropdown') {
        return (
            <RepoHeaderActionMenuLink file={true} as={Button} onClick={toggleBlameState} disabled={disabled}>
                {icon}
                <span>{descriptiveText}</span>
            </RepoHeaderActionMenuLink>
        )
    }

    return (
        <Tooltip content={descriptiveText}>
            <RepoHeaderActionAnchor
                onSelect={toggleBlameState}
                disabled={disabled}
                className="d-flex justify-content-center align-items-center"
            >
                <RepoActionInfo
                    displayName="Blame"
                    icon={<Icon aria-hidden={true} svgPath={mdiGit} className={styles.repoActionIcon} />}
                />
            </RepoHeaderActionAnchor>
        </Tooltip>
    )
}
