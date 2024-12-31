import React, { useEffect, useState } from 'react'

import { createAggregateError } from '~/internals/development/sg/common'
import { gql } from '~/internals/development/sg/http-client'
import type { Scalars } from '~/internals/development/sg/shared/graphql-operations.ts'
import { type TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { EVENT_LOGGER } from '~/internals/development/sg/shared/telemetry/web/eventLogger.ts'
import { useDebounce } from '~/internals/development/sg/wildcard'

import { useShowMorePagination } from '../../components/FilteredConnection/hooks/useShowMorePagination.ts'
import {
    ConnectionError,
    ConnectionLoading,
    ConnectionSummary,
    ShowMoreButton,
    SummaryContainer,
} from '../../components/FilteredConnection/ui'
import type {
    RepositoriesForPopoverResult,
    RepositoriesForPopoverVariables,
    RepositoryPopoverFields,
} from '../../graphql-operations.ts'
import {
    ConnectionPopover,
    ConnectionPopoverContainer,
    ConnectionPopoverForm,
    ConnectionPopoverList,
} from '../RevisionsPopover/components'

import { RepositoryNode } from './RepositoryNode.tsx'

export const REPOSITORIES_FOR_POPOVER = gql`
    query RepositoriesForPopover($first: Int, $query: String, $after: String) {
        repositories(first: $first, after: $after, query: $query) {
            nodes {
                ...RepositoryPopoverFields
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }

    fragment RepositoryPopoverFields on Repository {
        __typename
        id
        name
    }
`

export interface RepositoriesPopoverProps extends TelemetryProps, TelemetryV2Props {
    /**
     * The current repository (shown as selected in the list), if any.
     */
    currentRepo?: Scalars['ID']
}

export const BATCH_COUNT = 10

/**
 * A popover that displays a searchable list of repositories.
 */
export const RepositoriesPopover: React.FunctionComponent<React.PropsWithChildren<RepositoriesPopoverProps>> = ({
    currentRepo,
    telemetryService,
    telemetryRecorder,
}) => {
    const [searchValue, setSearchValue] = useState('')
    const query = useDebounce(searchValue, 200)

    useEffect(() => {
        EVENT_LOGGER.logViewEvent('RepositoriesPopover')
        telemetryService.log('RepositoriesPopover')
        telemetryRecorder.recordEvent('reposPopover', 'view')
    }, [telemetryService, telemetryRecorder])

    const { connection, loading, error, hasNextPage, fetchMore } = useShowMorePagination<
        RepositoriesForPopoverResult,
        RepositoriesForPopoverVariables,
        RepositoryPopoverFields
    >({
        query: REPOSITORIES_FOR_POPOVER,
        variables: { query },
        getConnection: ({ data, errors }) => {
            if (!data?.repositories) {
                throw createAggregateError(errors)
            }
            return data.repositories
        },
        options: {
            pageSize: BATCH_COUNT,
            fetchPolicy: 'cache-first',
        },
    })

    const summary = connection && (
        <ConnectionSummary
            connection={connection}
            noun="repository"
            pluralNoun="repositories"
            hasNextPage={hasNextPage}
            connectionQuery={query}
            noSummaryIfAllNodesVisible={true}
            compact={true}
        />
    )

    return (
        <ConnectionPopover>
            <ConnectionPopoverContainer>
                <ConnectionPopoverForm
                    inputValue={searchValue}
                    onInputChange={event => setSearchValue(event.target.value)}
                    inputPlaceholder="Search repositories..."
                    autoFocus={true}
                    compact={true}
                />
                <SummaryContainer compact={true}>{query && summary}</SummaryContainer>
                {error && <ConnectionError errors={[error.message]} compact={true} />}
                {connection && (
                    <ConnectionPopoverList>
                        {connection.nodes.map(node => (
                            <RepositoryNode key={node.id} node={node} currentRepo={currentRepo} />
                        ))}
                    </ConnectionPopoverList>
                )}
                {loading && <ConnectionLoading compact={true} />}
                {!loading && connection && (
                    <SummaryContainer compact={true}>
                        {!query && summary}
                        {hasNextPage && <ShowMoreButton compact={true} onClick={fetchMore} />}
                    </SummaryContainer>
                )}
            </ConnectionPopoverContainer>
        </ConnectionPopover>
    )
}
