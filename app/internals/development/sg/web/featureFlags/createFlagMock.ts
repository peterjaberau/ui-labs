import type { MockedResponse } from '@apollo/client/testing'

import type { EvaluateFeatureFlagResult, EvaluateFeatureFlagVariables } from '../graphql-operations.ts'

import type { FeatureFlagName } from './featureFlags.ts'
import { EVALUATE_FEATURE_FLAG_QUERY } from './useFeatureFlag.ts'

type FlagMock = MockedResponse<EvaluateFeatureFlagResult, EvaluateFeatureFlagVariables>

export const createFlagMock = (flagName: FeatureFlagName, valueOrError: boolean | Error): FlagMock => ({
    request: {
        query: EVALUATE_FEATURE_FLAG_QUERY,
        variables: {
            flagName,
        },
    },
    ...(typeof valueOrError === 'boolean' && {
        result: {
            data: {
                evaluateFeatureFlag: valueOrError,
            },
        },
    }),
    ...(typeof valueOrError === 'object' && {
        error: valueOrError,
    }),
})
