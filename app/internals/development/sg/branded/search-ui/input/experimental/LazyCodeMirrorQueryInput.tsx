import React, { Suspense } from 'react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { CodeMirrorQueryInputWrapperProps } from './CodeMirrorQueryInputWrapper.tsx'

const CodeMirrorQueryInput = lazyComponent(() => import('./CodeMirrorQueryInputWrapper.tsx'), 'CodeMirrorQueryInputWrapper')

export const LazyCodeMirrorQueryInput: React.FunctionComponent<
    React.PropsWithChildren<CodeMirrorQueryInputWrapperProps>
> = props => (
    <Suspense fallback={null}>
        <CodeMirrorQueryInput {...props} />
    </Suspense>
)
