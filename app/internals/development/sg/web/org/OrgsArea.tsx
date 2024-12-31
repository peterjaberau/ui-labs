import * as React from 'react'

import { Route, Routes } from '@remix-run/react'

import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'

import type { AuthenticatedUser } from '../auth.ts'
import { withAuthenticatedUser } from '../auth/withAuthenticatedUser.tsx'
import type { BatchChangesProps } from '../batches'
import type { BreadcrumbSetters, BreadcrumbsProps } from '../components/Breadcrumbs.tsx'
import { NotFoundPage } from '../components/HeroPage.tsx'

import { OrgArea, type OrgAreaRoute } from './area/OrgArea.tsx'
import type { OrgAreaHeaderNavItem } from './area/OrgHeader.tsx'
import { OrgInvitationPage } from './invitations/OrgInvitationPage.tsx'
import { NewOrganizationPage } from './new/NewOrganizationPage.tsx'
import type { OrgSettingsAreaRoute } from './settings/OrgSettingsArea.tsx'
import type { OrgSettingsSidebarItems } from './settings/OrgSettingsSidebar.tsx'

export interface Props
    extends PlatformContextProps,
        SettingsCascadeProps,
        TelemetryProps,
        BreadcrumbsProps,
        BreadcrumbSetters,
        BatchChangesProps {
    orgAreaRoutes: readonly OrgAreaRoute[]
    orgAreaHeaderNavItems: readonly OrgAreaHeaderNavItem[]
    orgSettingsSideBarItems: OrgSettingsSidebarItems
    orgSettingsAreaRoutes: readonly OrgSettingsAreaRoute[]

    authenticatedUser: AuthenticatedUser
}

/**
 * Renders a layout of a sidebar and a content area to display organization-related pages.
 */
const AuthenticatedOrgsArea: React.FunctionComponent<React.PropsWithChildren<Props>> = props => (
    <Routes>
        <Route
            path="new"
            element={<NewOrganizationPage telemetryRecorder={props.platformContext.telemetryRecorder} />}
        />
        <Route
            path="invitation/:token"
            element={<OrgInvitationPage {...props} telemetryRecorder={props.platformContext.telemetryRecorder} />}
        />
        <Route path=":orgName/*" element={<OrgArea {...props} />} />
        <Route path="*" element={<NotFoundPage pageType="organization" />} />
    </Routes>
)

export const OrgsArea = withAuthenticatedUser(AuthenticatedOrgsArea)
