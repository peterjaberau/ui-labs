import { type FC, useCallback, useState } from 'react'

import { mdiAlertCircle, mdiChevronDown, mdiCheckCircle, mdiCheckCircleOutline } from '@mdi/js'
import classnames from 'classnames'

import { useTemporarySetting } from '~/internals/development/sg/shared/settings/temporary/useTemporarySetting.ts'
import {
    H4,
    LoadingSpinner,
    Text,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Position,
    Icon,
    Link,
} from '~/internals/development/sg/wildcard'

import { useOnboardingChecklistQuery } from './graphql-hooks.ts'
import { LicenseKeyModal } from './LicenseModal.tsx'
import { content } from './OnboardingChecklist.content.ts'
import type { ChecklistItem } from './types.ts'

import styles from './OnboardingChecklist.module.scss'

export const OnboardingChecklist: FC = (): JSX.Element => {
    const [hasCompletedLicenseCheck, setHasCompletedLicenseCheck] = useTemporarySetting(
        'admin.hasCompletedLicenseCheck',
        false
    )
    const { data, loading, error, refetch } = useOnboardingChecklistQuery()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdownOpen = useCallback(() => setIsDropdownOpen(isOpen => !isOpen), [])

    if (loading || !data) {
        return <LoadingSpinner data-testid="onboard-loading" />
    }
    if (error) {
        return <></>
    }

    const { licenseKey, checklistItem, config, id } = data

    const isComplete = Object.values(checklistItem).every((value: boolean) => value)
    if (isComplete) {
        return <></>
    }

    // We don't want to show the onboarding checklist in integration tests
    if (process.env.INTEGRATION_TESTS) {
        return <></>
    }

    return (
        <>
            <Popover isOpen={isDropdownOpen} onOpenChange={toggleDropdownOpen}>
                <PopoverTrigger data-testid="onboard-setup" type="button" className={styles.button}>
                    <Icon aria-hidden={true} size="md" svgPath={mdiAlertCircle} />
                    <span data-testid="onboard-dropdown">Setup</span>
                    <Icon aria-hidden={true} svgPath={mdiChevronDown} />
                </PopoverTrigger>
                <PopoverContent className={styles.container} position={Position.bottom}>
                    <ul data-testid="onboard-content" className={styles.list}>
                        {content.map(({ id, isComplete, title, description, link }) => (
                            <OnboardingChecklistItem
                                key={id}
                                isComplete={checklistItem[id as keyof ChecklistItem] || isComplete}
                                title={title}
                                description={description}
                                link={link}
                            />
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
            {!hasCompletedLicenseCheck && (
                <LicenseKeyModal
                    licenseKey={licenseKey}
                    config={config}
                    id={id}
                    refetch={refetch}
                    onHandleLicenseCheck={setHasCompletedLicenseCheck}
                />
            )}
        </>
    )
}

export interface OnboardingChecklistItemProps {
    isComplete: boolean
    title: string
    description: string
    link: string
}

const OnboardingChecklistItem: FC<OnboardingChecklistItemProps> = ({
    isComplete,
    title,
    description,
    link,
}): JSX.Element => (
    <li className={styles.item}>
        <div className={styles.wrapper}>
            <Icon
                aria-hidden={true}
                svgPath={isComplete ? mdiCheckCircle : mdiCheckCircleOutline}
                className={classnames({ [styles.checked]: isComplete })}
            />
            <div className={styles.content}>
                <H4>{title}</H4>
                {!isComplete && (
                    <>
                        <Text>{description}</Text>
                        <Link to={link} target="_blank" rel="noopener">
                            Configure now
                        </Link>{' '}
                    </>
                )}
            </div>
        </div>
    </li>
)
