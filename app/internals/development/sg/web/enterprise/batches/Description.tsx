import React from 'react'

import classNames from 'classnames'

import { renderMarkdown } from '~/internals/development/sg/common'
import { Markdown } from '~/internals/development/sg/wildcard'

import type { BatchChangeFields } from '../../graphql-operations.ts'

interface DescriptionProps extends Pick<BatchChangeFields, 'description'> {
    className?: string
}

export const Description: React.FunctionComponent<React.PropsWithChildren<DescriptionProps>> = ({
    description,
    className,
}) => (
    <div className={classNames('mb-3', className)}>
        <Markdown dangerousInnerHTML={renderMarkdown(description || '_No description_')} />
    </div>
)
