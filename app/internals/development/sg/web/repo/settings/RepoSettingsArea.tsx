import React, { useMemo } from 'react'

import classNames from 'classnames'
import AlertCircleIcon from 'mdi-react/AlertCircleIcon'
import MinusCircleIcon from 'mdi-react/MinusCircleIcon'
import { Routes, Route } from '@remix-run/react'
import { of } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { asError, isErrorLike } from '~/internals/development/sg/common'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { useObservable, ErrorMessage } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../auth.ts'
import type { BreadcrumbSetters } from '../../components/Breadcrumbs.tsx'
import { HeroPage, NotFoundPage } from '../../components/HeroPage.tsx'
import type { SettingsAreaRepositoryFields } from '../../graphql-operations.ts'
import type { RouteV6Descriptor } from '../../util/contributions.ts'

import { fetchSettingsAreaRepository } from './backend.ts'
import { RepoSettingsSidebar, type RepoSettingsSideBarGroups } from './RepoSettingsSidebar.tsx'

import styles from './RepoSettingsArea.module.scss'

export interface RepoSettingsAreaRouteContext extends TelemetryProps, TelemetryV2Props {
    repo: SettingsAreaRepositoryFields
}

export interface RepoSettingsAreaRoute extends RouteV6Descriptor<RepoSettingsAreaRouteContext> {}

interface Props extends BreadcrumbSetters, TelemetryProps, TelemetryV2Props {
    repoSettingsAreaRoutes: readonly RepoSettingsAreaRoute[]
    repoSettingsSidebarGroups: RepoSettingsSideBarGroups
    repoName: string
    authenticatedUser: AuthenticatedUser | null
}

/**
 * Renders a layout of a sidebar and a content area to display pages related to
 * a repository's settings.
 */
export const RepoSettingsArea: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    useBreadcrumb,
    ...props
}) => {
    const repoName = props.repoName
    const repoOrError = useObservable(
        useMemo(() => fetchSettingsAreaRepository(repoName).pipe(catchError(error => of(asError(error)))), [repoName])
    )

    useBreadcrumb(useMemo(() => ({ key: 'settings', element: 'Settings' }), []))

    if (repoOrError === undefined) {
        return null
    }

    if (isErrorLike(repoOrError)) {
        return <HeroPage icon={AlertCircleIcon} title="Error" subtitle={<ErrorMessage error={repoOrError.message} />} />
    }

    if (repoOrError === null) {
        return <NotFoundPage pageType="repository" />
    }

    if (!repoOrError.viewerCanAdminister) {
        return (
            <HeroPage
                icon={MinusCircleIcon}
                title="Forbidden"
                subtitle="You are not authorized to view or change this repository's settings."
            />
        )
    }

    if (!props.authenticatedUser) {
        return null
    }

    const context: RepoSettingsAreaRouteContext = {
        repo: repoOrError,
        telemetryService: props.telemetryService,
        telemetryRecorder: props.telemetryRecorder,
    }

    return (
        <div className={classNames('container d-flex mt-3 px-3 flex-column flex-sm-row', styles.repoSettingsArea)}>
            <RepoSettingsSidebar
                className="flex-0 mr-3"
                {...props}
                {...context}
                repoSettingsSidebarGroups={props.repoSettingsSidebarGroups}
            />
            <div className="flex-bounded">
                <Routes>
                    {props.repoSettingsAreaRoutes.map(
                        ({ render, path, condition = () => true }) =>
                            condition(context) && <Route key="hardcoded-key" path={path} element={render(context)} />
                    )}
                    <Route path="*" element={<NotFoundPage pageType="repository" />} />
                </Routes>
            </div>
        </div>
    )
}
