import { RangeSetBuilder } from '@codemirror/state'
import { Decoration, EditorView } from '@codemirror/view'

import { type DecoratedToken, toCSSClassName } from '~/internals/development/sg/shared/search/query/decoratedToken.ts'

import { decoratedTokens } from './parsedQuery.ts'

// Defines decorators for syntax highlighting
const tokenDecorators: { [key: string]: Decoration } = {}

// Chooses the correct decorator for the decorated token
const decoratedToDecoration = (token: DecoratedToken): Decoration => {
    const className = toCSSClassName(token)
    const decorator = tokenDecorators[className]
    return decorator || (tokenDecorators[className] = Decoration.mark({ class: className }))
}

// This provides syntax highlighting. This is a custom solution so that we an
// use our existing query parser (instead of using CodeMirror's language
// support). That's not to say that we couldn't properly integrate with
// CodeMirror's language system with more effort.
export const querySyntaxHighlighting = [
    EditorView.decorations.compute([decoratedTokens], state => {
        const tokens = state.facet(decoratedTokens)
        const builder = new RangeSetBuilder<Decoration>()
        for (const token of tokens) {
            builder.add(token.range.start, token.range.end, decoratedToDecoration(token))
        }
        return builder.finish()
    }),
]
