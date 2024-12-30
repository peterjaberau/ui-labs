import type { SearchPatternType } from '~/sg/shared/graphql-operations'
import { decorate, type Decoration, toDecoration } from '~/sg/shared/search/query/decoratedToken'
import { scanSearchQuery } from '~/sg/shared/search/query/scanner'


export const formatRepositoryStarCount = (repoStars?: number): string | undefined => {
  if (repoStars !== undefined) {
    if (repoStars > 1000) {
      return `${(repoStars / 1000).toFixed(1)}k`
    }
    return repoStars.toString()
  }
  return undefined
}



export function decorateQuery(query: string, searchPatternType?: SearchPatternType): Decoration[] | null {
  const tokens = searchPatternType ? scanSearchQuery(query, false, searchPatternType) : scanSearchQuery(query)
  return tokens.type === "success" ? tokens.term.flatMap((token) => decorate(token).map((token) => toDecoration(query, token))) : null
}
