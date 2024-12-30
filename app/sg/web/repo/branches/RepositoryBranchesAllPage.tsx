import { type FC, useCallback, useEffect } from 'react'

import type { Observable } from 'rxjs'

import { EVENT_LOGGER } from '~/sg/shared/telemetry/web/eventLogger'

import { FilteredConnection, type FilteredConnectionQueryArguments } from '../../components/FilteredConnection'
import { PageTitle } from '../../components/PageTitle'
import { GitRefType, type GitRefConnectionFields, type GitRefFields } from '../../graphql-operations'
import { GitReferenceNode, queryGitReferences } from '../GitReference'

import type { RepositoryBranchesAreaPageProps } from './RepositoryBranchesArea'

interface Props extends RepositoryBranchesAreaPageProps {}

/** A page that shows all of a repository's branches. */
export const RepositoryBranchesAllPage: FC<Props> = props => {
    const { repo, telemetryRecorder } = props

    useEffect(() => {
        EVENT_LOGGER.logViewEvent('RepositoryBranchesAll')
        telemetryRecorder.recordEvent('repo.branches.all', 'view')
    }, [telemetryRecorder])

    const queryBranches = useCallback(
        (args: FilteredConnectionQueryArguments): Observable<GitRefConnectionFields> =>
            queryGitReferences({ ...args, repo: repo.id, type: GitRefType.GIT_BRANCH }),
        [repo.id]
    )

    return (
        <div>
            <PageTitle title="All branches" />
            <FilteredConnection<GitRefFields>
                inputClassName="w-100"
                listClassName="list-group list-group-flush"
                noun="branch"
                pluralNoun="branches"
                queryConnection={queryBranches}
                nodeComponent={GitReferenceNode}
                ariaLabelFunction={(branchDisplayName: string) =>
                    `View this repository using ${branchDisplayName} as the selected revision`
                }
                defaultFirst={20}
                autoFocus={true}
            />
        </div>
    )
}
