import React from 'react'

import classNames from 'classnames'

import { Alert, ErrorMessage } from '~/sg/wildcard'

import styles from './ConnectionError.module.scss'

interface ConnectionErrorProps {
    errors: string[]
    compact?: boolean
    className?: string
}

/**
 * Renders FilteredConnection styled errors
 */
export const ConnectionError: React.FunctionComponent<React.PropsWithChildren<ConnectionErrorProps>> = ({
    errors,
    compact,
    className,
}) => (
    <Alert className={classNames(compact && styles.compact, className)} variant="danger">
        {errors.map((error, index) => (
            <React.Fragment key={index}>
                <ErrorMessage error={error} />
            </React.Fragment>
        ))}
    </Alert>
)
