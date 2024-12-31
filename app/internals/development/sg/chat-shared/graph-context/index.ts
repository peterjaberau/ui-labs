import type { PreciseContext } from '../codebase-context/messages.ts'

export interface GraphContextFetcher {
    getContext(): Promise<PreciseContext[]>
}
