import React from 'react'

import classNames from 'classnames'

import type { ForwardReferenceComponent } from '../../../types.ts'
import { getFontWeightStyle } from '../utils.ts'

import typographyStyles from '../Typography.module.scss'
import styles from './Code.module.scss'

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'base'
    weight?: 'regular' | 'medium' | 'bold'
}

export const Code = React.forwardRef(function Code(
    { children, as: Component = 'code', size, weight, className, ...props },
    reference
) {
    return (
        <Component
            className={classNames(
                styles.code,
                size === 'small' && typographyStyles.small,
                weight && getFontWeightStyle({ weight }),
                className
            )}
            ref={reference}
            {...props}
        >
            {children}
        </Component>
    )
}) as ForwardReferenceComponent<'code', CodeProps>
