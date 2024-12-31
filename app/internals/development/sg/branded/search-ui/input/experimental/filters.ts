import { selectDiscreteValues, SELECTORS } from '~/internals/development/sg/shared/search/query/selectFilter.ts'

export const defaultLanguages: string[] = ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby']
export const allSelectDiscreteValues = selectDiscreteValues(SELECTORS, 10)
