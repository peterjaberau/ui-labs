import { selectDiscreteValues, SELECTORS } from '~/sg/shared/search/query/selectFilter'

export const defaultLanguages: string[] = ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby']
export const allSelectDiscreteValues = selectDiscreteValues(SELECTORS, 10)
