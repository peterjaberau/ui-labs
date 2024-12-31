import type { AlertKind, SmartSearchAlertKind } from '~/internals/development/sg/shared/search/stream.ts'

export function isSmartSearchAlert(kind: AlertKind): kind is SmartSearchAlertKind {
    switch (kind) {
        case 'smart-search-additional-results':
        case 'smart-search-pure-results': {
            return true
        }
    }
    return false
}
