import { useCallback, useMemo, type ChangeEventHandler, type FC } from 'react'

import { mdiChevronDown, mdiChevronUp, mdiOpenInNew } from '@mdi/js'
import classNames from 'classnames'

import { Toggle } from '~/sg/branded/components/Toggle'
import { UserAvatar } from '~/sg/shared/components/UserAvatar'
import { useKeyboardShortcut } from '~/sg/shared/keyboardShortcuts/useKeyboardShortcut'
import { Shortcut } from '~/sg/shared/react-shortcuts'
import { useExperimentalFeatures } from '~/sg/shared/settings/settings'
import type { TelemetryProps } from '~/sg/shared/telemetry/telemetryService'
import { ThemeSetting, useTheme } from '~/sg/shared/theme'
import {
    AnchorLink,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuHeader,
    MenuItem,
    MenuLink,
    MenuList,
    Position,
    Select,
} from '~/sg/wildcard'

import type { AuthenticatedUser } from '../auth'
import { CodyProRoutes } from '../cody/codyProRoutes'
import { PageRoutes } from '../routes.constants'
import { enableDevSettings, isSourcegraphDev, useDeveloperSettings } from '../stores'

import { useNewSearchNavigation } from './new-global-navigation'

import styles from './UserNavItem.module.scss'

const MAX_VISIBLE_ORGS = 5

type MinimalAuthenticatedUser = Pick<
    AuthenticatedUser,
    'username' | 'avatarURL' | 'settingsURL' | 'organizations' | 'siteAdmin' | 'session' | 'displayName' | 'emails'
>

export interface UserNavItemProps extends TelemetryProps {
    authenticatedUser: MinimalAuthenticatedUser
    isSourcegraphDotCom: boolean
    menuButtonRef?: React.Ref<HTMLButtonElement>
    showFeedbackModal: () => void
    showKeyboardShortcutsHelp: () => void
    className?: string
}

/**
 * Displays the user's avatar and/or username in the navbar and exposes a dropdown menu with more options for
 * authenticated viewers.
 */
export const UserNavItem: FC<UserNavItemProps> = props => {
    const {
        authenticatedUser,
        isSourcegraphDotCom,
        menuButtonRef,
        showFeedbackModal,
        showKeyboardShortcutsHelp,
        className,
    } = props

    const { themeSetting, setThemeSetting } = useTheme()
    const keyboardShortcutSwitchTheme = useKeyboardShortcut('switchTheme')

    const supportsSystemTheme = useMemo(
        () => Boolean(window.matchMedia?.('not all and (prefers-color-scheme), (prefers-color-scheme)').matches),
        []
    )

    const onThemeChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
        event => {
            setThemeSetting(event.target.value as ThemeSetting)
        },
        [setThemeSetting]
    )

    const onThemeCycle = useCallback((): void => {
        setThemeSetting(themeSetting === ThemeSetting.Dark ? ThemeSetting.Light : ThemeSetting.Dark)
    }, [setThemeSetting, themeSetting])

    const organizations = authenticatedUser.organizations.nodes
    const newSearchNavigationUI = useExperimentalFeatures(features => features.newSearchNavigationUI)
    const [newNavigationEnabled, setNewNavigationEnabled] = useNewSearchNavigation()
    const developerMode = useDeveloperSettings(settings => settings.enabled)

    const onNewSearchNavigationChange = useCallback(
        (enabled: boolean) => {
            setNewNavigationEnabled(enabled)
        },
        [setNewNavigationEnabled]
    )

    return (
        <>
            {keyboardShortcutSwitchTheme?.keybindings.map((keybinding, index) => (
                // `Shortcut` doesn't update its states when `onMatch` changes
                // so we put `themePreference` in `key` binding to make it
                <Shortcut key={`${themeSetting}-${index}`} {...keybinding} onMatch={onThemeCycle} />
            ))}
            <Menu>
                {({ isExpanded }) => (
                    <>
                        <MenuButton
                            ref={menuButtonRef}
                            variant="link"
                            data-testid="user-nav-item-toggle"
                            className={classNames(
                                'd-flex align-items-center text-decoration-none',
                                styles.menuButton,
                                className
                            )}
                            aria-label={`${isExpanded ? 'Close' : 'Open'} user profile menu`}
                        >
                            <div className="position-relative">
                                <div className="align-items-center d-flex">
                                    <UserAvatar user={authenticatedUser} className={styles.avatar} />
                                    <Icon svgPath={isExpanded ? mdiChevronUp : mdiChevronDown} aria-hidden={true} />
                                </div>
                            </div>
                        </MenuButton>

                        <MenuList
                            position={Position.bottomEnd}
                            className={styles.dropdownMenu}
                            aria-label="User. Open menu"
                        >
                            <MenuHeader className={styles.dropdownHeader}>
                                Signed in as <strong>@{authenticatedUser.username}</strong>
                            </MenuHeader>
                            <MenuDivider className={styles.dropdownDivider} />
                            <MenuLink as={Link} to={authenticatedUser.settingsURL!}>
                                Settings
                            </MenuLink>
                            {window.context.codyEnabledForCurrentUser && (
                                <MenuLink
                                    as={Link}
                                    to={isSourcegraphDotCom ? CodyProRoutes.Manage : PageRoutes.CodyDashboard}
                                >
                                    Cody dashboard
                                </MenuLink>
                            )}
                            <MenuLink as={Link} to={PageRoutes.SavedSearches}>
                                Saved searches
                            </MenuLink>
                            {!isSourcegraphDotCom && window.context.ownEnabled && (
                                <MenuLink as={Link} to="/teams">
                                    Teams
                                </MenuLink>
                            )}
                            <MenuDivider />
                            <div className="px-2 py-1">
                                <div className="d-flex align-items-center">
                                    <div className="mr-2">Theme</div>
                                    <Select
                                        aria-label=""
                                        isCustomStyle={true}
                                        selectSize="sm"
                                        data-testid="theme-toggle"
                                        onChange={onThemeChange}
                                        value={themeSetting}
                                        className="mb-0 flex-1"
                                    >
                                        <option value={ThemeSetting.Light}>Light</option>
                                        <option value={ThemeSetting.Dark}>Dark</option>
                                        <option value={ThemeSetting.System}>System</option>
                                    </Select>
                                </div>
                                {themeSetting === ThemeSetting.System && !supportsSystemTheme && (
                                    <div className="text-wrap">
                                        <small>
                                            <AnchorLink
                                                to="https://caniuse.com/#feat=prefers-color-scheme"
                                                className="text-warning"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Your browser does not support the system theme.
                                            </AnchorLink>
                                        </small>
                                    </div>
                                )}
                            </div>

                            {!newSearchNavigationUI && (
                                <div className="px-2 py-1">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-2">Minimize navigation</div>
                                        <Toggle value={newNavigationEnabled} onToggle={onNewSearchNavigationChange} />
                                    </div>
                                </div>
                            )}

                            {process.env.NODE_ENV !== 'development' && isSourcegraphDev(authenticatedUser) && (
                                <div className="px-2 py-1">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-2">Developer mode</div>
                                        <Toggle value={developerMode} onToggle={enableDevSettings} />
                                    </div>
                                </div>
                            )}

                            {organizations.length > 0 && (
                                <>
                                    <MenuDivider className={styles.dropdownDivider} />
                                    <MenuHeader className={styles.dropdownHeader}>Your organizations</MenuHeader>
                                    {organizations.slice(0, MAX_VISIBLE_ORGS).map(org => (
                                        <MenuLink as={Link} key={org.id} to={org.settingsURL || org.url}>
                                            {org.name}
                                        </MenuLink>
                                    ))}
                                    {organizations.length > MAX_VISIBLE_ORGS && (
                                        <MenuLink as={Link} to={authenticatedUser.settingsURL!}>
                                            Show all organizations
                                        </MenuLink>
                                    )}
                                </>
                            )}

                            <MenuDivider className={styles.dropdownDivider} />
                            {authenticatedUser.siteAdmin && (
                                <MenuLink as={Link} to="/site-admin">
                                    Site admin
                                </MenuLink>
                            )}
                            {authenticatedUser.siteAdmin && window.context.applianceMenuTarget !== '' && (
                                <MenuLink as={Link} to={window.context.applianceMenuTarget}>
                                    Appliance
                                </MenuLink>
                            )}
                            <MenuLink as={Link} to="/help" target="_blank" rel="noopener">
                                Help <Icon aria-hidden={true} svgPath={mdiOpenInNew} />
                            </MenuLink>
                            <MenuItem onSelect={showFeedbackModal}>Feedback</MenuItem>
                            <MenuItem onSelect={showKeyboardShortcutsHelp}>Keyboard shortcuts</MenuItem>
                            {authenticatedUser.session?.canSignOut && (
                                <MenuLink as={AnchorLink} to="/-/sign-out">
                                    Sign out
                                </MenuLink>
                            )}

                            {isSourcegraphDotCom && <MenuDivider className={styles.dropdownDivider} />}
                            {isSourcegraphDotCom && (
                                <MenuLink as={AnchorLink} to="https://sourcegraph.com" target="_blank" rel="noopener">
                                    About Sourcegraph <Icon aria-hidden={true} svgPath={mdiOpenInNew} />
                                </MenuLink>
                            )}
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}