import type {
    EditTemporarySettingsResult,
    GetTemporarySettingsResult,
    SharedGraphQlOperations,
} from '~/internals/development/sg/shared/graphql-operations.ts'
import type { TemporarySettings } from '~/internals/development/sg/shared/settings/temporary/TemporarySettings.ts'

const defaultSettings: TemporarySettings = {
    'user.daysActiveCount': 1,
    'user.lastDayActive': new Date().toDateString(),
    'npsSurvey.hasTemporarilyDismissed': true,
}

export class TemporarySettingsContext {
    private settings: TemporarySettings

    constructor() {
        this.settings = defaultSettings
    }

    public overrideInitialTemporarySettings(overrides: TemporarySettings): void {
        this.settings = { ...this.settings, ...overrides }
    }

    public getGraphQLOverrides(): Pick<SharedGraphQlOperations, 'GetTemporarySettings' | 'EditTemporarySettings'> {
        return {
            GetTemporarySettings: () => this.getTemporarySettings(),
            EditTemporarySettings: params => this.editTemporarySettings(params.contents),
        }
    }

    private getTemporarySettings(): GetTemporarySettingsResult {
        return {
            temporarySettings: {
                __typename: 'TemporarySettings',
                contents: JSON.stringify(this.settings),
            },
        }
    }

    private editTemporarySettings(contents: string): EditTemporarySettingsResult {
        // This parsing is safe in integration tests

        this.settings = { ...this.settings, ...JSON.parse(contents) }

        return {
            editTemporarySettings: {
                alwaysNil: null,
            },
        }
    }
}
