import { forwardRef } from 'react'

import classNames from 'classnames'
import { useLocation } from '@remix-run/react'

import { Markdown } from '~/sg/wildcard'

import { useScrollToLocationHash } from '../../components/useScrollToLocationHash'

import styles from './RenderedFile.module.scss'

interface Props {
    dangerousInnerHTML: string
    className?: string
}

/**
 * Displays a file whose contents are rendered to HTML, such as a Markdown file.
 */
export const RenderedFile = forwardRef<HTMLDivElement, Props>(function RenderedFile(props, reference) {
    const { dangerousInnerHTML, className } = props

    const location = useLocation()
    useScrollToLocationHash(location)

    return (
        // the jupyter class comes from global style sheets
        <div ref={reference} className={classNames(styles.renderedFile, className, 'jupyter')}>
            <div className={styles.container}>
                <Markdown dangerousInnerHTML={dangerousInnerHTML} />
            </div>
        </div>
    )
})
