import type { MainThreadAPI } from '../../contract.ts'

/**
 * The API that is exposed from the client (main thread) to the extension host (worker)
 */
export interface ClientAPI extends MainThreadAPI {
    ping(): 'pong'
}
