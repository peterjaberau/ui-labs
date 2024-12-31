import { DEFAULT_FALLBACK_COLOR } from '../../../constants.ts'
import type { Series } from '../../../types.ts'

export function getLineColor(series: Series<any>): string {
    return series.color ?? DEFAULT_FALLBACK_COLOR
}
