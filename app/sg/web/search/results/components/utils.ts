import type { AlertKind, SmartSearchAlertKind } from '~/sg/shared/search/stream'

export function isSmartSearchAlert(kind: AlertKind): kind is SmartSearchAlertKind {
    switch (kind) {
        case 'smart-search-additional-results':
        case 'smart-search-pure-results': {
            return true
        }
    }
    return false
}
