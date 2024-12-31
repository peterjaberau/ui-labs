import type { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import { decorate, type Decoration, toDecoration } from '~/internals/development/sg/shared/search/query/decoratedToken.ts'
import { scanSearchQuery } from '~/internals/development/sg/shared/search/query/scanner.ts'

export function decorateQuery(query: string, searchPatternType?: SearchPatternType): Decoration[] | null {
    const tokens = searchPatternType ? scanSearchQuery(query, false, searchPatternType) : scanSearchQuery(query)
    return tokens.type === 'success'
        ? tokens.term.flatMap(token => decorate(token).map(token => toDecoration(query, token)))
        : null
}
