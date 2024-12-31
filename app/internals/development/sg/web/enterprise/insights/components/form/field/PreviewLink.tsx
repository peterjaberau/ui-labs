import { useMemo, type FC, type PropsWithChildren } from 'react'

import classNames from 'classnames'

import type { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import { buildSearchURLQuery } from '~/internals/development/sg/shared/util/url.ts'
import { Button, Link } from '~/internals/development/sg/wildcard'

import styles from './PreviewLink.module.scss'

interface PreviewLinkProps {
    query: string
    patternType: SearchPatternType
    tabIndex?: number
    className?: string
}

export const PreviewLink: FC<PropsWithChildren<PreviewLinkProps>> = ({
    query,
    patternType,
    tabIndex,
    className,
    children,
}) => {
    const queryURL = useMemo(() => `/search?${buildSearchURLQuery(query, patternType, false)}`, [patternType, query])

    return (
        <Button
            className={classNames(styles.previewLink, className)}
            to={queryURL}
            variant="link"
            as={Link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tabIndex}
        >
            {children}
        </Button>
    )
}
