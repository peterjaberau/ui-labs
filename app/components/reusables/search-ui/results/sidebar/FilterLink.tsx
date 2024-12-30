import React from 'react'

import classNames from 'classnames'

import { pluralize } from '~/sg/common'
import { displayRepoName } from '~/sg/shared/components/RepoLink'
import type { Settings } from '~/sg/shared/schema/settings.schema'
import { FilterType } from '~/sg/shared/search/query/filters'
import type { Filter } from '~/sg/shared/search/stream'
import { isSettingsValid, type SettingsCascadeProps } from '~/sg/shared/settings/settings'
import { Button, Tooltip } from '~/sg/wildcard'

import { SyntaxHighlightedSearchQuery, CodeHostIcon } from '../../components'

import { getFiltersOfKind } from './helpers'

import styles from './SearchFilterSection.module.scss'

export interface FilterLinkProps {
    label: string
    ariaLabel?: string
    value: string
    count?: number
    limitHit?: boolean
    kind?: Filter['kind']
    labelConverter?: (label: string) => JSX.Element
    onFilterChosen: (value: string, kind?: Filter['kind']) => void
}

export const FilterLink: React.FunctionComponent<React.PropsWithChildren<FilterLinkProps>> = ({
    label,
    ariaLabel,
    value,
    count,
    limitHit,
    kind,
    labelConverter = label => (label === value ? <SyntaxHighlightedSearchQuery query={label} /> : label),
    onFilterChosen,
}) => {
    const countTooltip = count
        ? `At least ${count} ${pluralize('result matches', count, 'results match')} this filter.`
        : ''

    return (
        <Button
            className={styles.sidebarSectionListItem}
            onClick={() => onFilterChosen(value, kind)}
            data-testid="filter-link"
            value={value}
            variant="link"
            aria-label={`${ariaLabel ?? label}${countTooltip ? `, ${countTooltip}` : ''}`}
        >
            <span className={classNames('flex-grow-1', styles.sidebarSectionListItemLabel)}>
                {labelConverter(label)}
            </span>
            {count && (
                <Tooltip content={countTooltip}>
                    <span className="pl-2 flex-shrink-0">
                        {count}
                        {limitHit ? '+' : ''}
                    </span>
                </Tooltip>
            )}
        </Button>
    )
}

export const getRepoFilterLinks = (
    filters: Filter[] | undefined,
    onFilterChosen: (value: string, kind?: Filter['kind']) => void
): React.ReactElement[] => {
    function repoLabelConverter(label: string): JSX.Element {
        const Icon = CodeHostIcon({
            repoName: label,
            className: styles.sidebarSectionIcon,
        })

        return (
            <span className={styles.sidebarSectionListItemBreakWords}>
                {Icon ? (
                    <>
                        {Icon}
                        {displayRepoName(label)}
                    </>
                ) : (
                    label
                )}
            </span>
        )
    }

    return getFiltersOfKind(filters, FilterType.repo).map(filter => (
        <FilterLink
            {...filter}
            key={`${filter.label}-${filter.value}`}
            labelConverter={repoLabelConverter}
            onFilterChosen={onFilterChosen}
            ariaLabel={`Search in repository ${filter.label}`}
        />
    ))
}

export const getDynamicFilterLinks = (
    filters: Filter[] | undefined,
    kinds: Filter['kind'][],
    onFilterChosen: (value: string, kind?: Filter['kind']) => void,
    ariaLabelTransform: (label: string, value: string) => string = label => `${label}`,
    labelTransform: (label: string, value: string) => string = label => `${label}`
): React.ReactElement[] =>
    (filters || [])
        .filter(filter => kinds.includes(filter.kind))
        .map(filter => (
            <FilterLink
                {...filter}
                label={labelTransform(filter.label, filter.value)}
                ariaLabel={ariaLabelTransform(filter.label, filter.value)}
                key={`${filter.label}-${filter.value}`}
                onFilterChosen={onFilterChosen}
            />
        ))

export const getSearchSnippetLinks = (
    settingsCascade: SettingsCascadeProps['settingsCascade'],
    onFilterChosen: (value: string) => void
): React.ReactElement[] => {
    const snippets = (isSettingsValid<Settings>(settingsCascade) && settingsCascade.final['search.scopes']) || []
    return snippets.map((snippet: any) => (
        <FilterLink
            label={snippet.name}
            value={snippet.value}
            key={`${snippet.name}-${snippet.value}`}
            onFilterChosen={onFilterChosen}
            ariaLabel={`Use search snippet: ${snippet.name}`}
        />
    ))
}
