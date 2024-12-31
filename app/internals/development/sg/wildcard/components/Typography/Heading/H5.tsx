import React from 'react'

import type { ForwardReferenceComponent } from '../../../types.ts'

import { Heading, type HeadingProps } from './Heading.tsx'

type H5Props = HeadingProps

export const H5 = React.forwardRef(({ children, as = 'h5', ...props }, reference) => (
    <Heading as={as} styleAs="h5" {...props} ref={reference}>
        {children}
    </Heading>
)) as ForwardReferenceComponent<'h5', H5Props>
