import type { FC } from 'react'

import classNames from 'classnames'

import { buildSearchURLQuery } from '~/internals/development/sg/shared/util/url.ts'
import { Link } from '~/internals/development/sg/wildcard'

import { SearchPatternType } from '../../../graphql-operations.ts'

import { useDynamicQuery } from './useDynamicQuery.ts'

interface SearchTaskProps {
    label: string
    template: string
    snippets?: string[] | Record<string, string[]>
    handleLinkClick: (event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void
}

export const SearchTask: FC<SearchTaskProps> = ({ template, snippets, label, handleLinkClick }) => {
    const selectedQuery = useDynamicQuery(template, snippets)

    return selectedQuery ? (
        <Link
            className={classNames('flex-grow-1')}
            to={`/search?${buildSearchURLQuery(selectedQuery, SearchPatternType.standard, false)}`}
            onClick={handleLinkClick}
        >
            {label}
        </Link>
    ) : null
}
