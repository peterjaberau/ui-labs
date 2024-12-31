import type { Category } from './utils/get-grouped-categories.ts'

export interface ActiveSegment<Datum> {
    category: Category<Datum>
    datum: Datum
    node?: Element
}
