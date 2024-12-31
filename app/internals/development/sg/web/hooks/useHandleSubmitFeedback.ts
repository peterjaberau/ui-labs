import { useCallback } from 'react'

import { gql, useMutation } from '~/internals/development/sg/http-client'
import type { FeedbackPromptSubmitEventHandler } from '~/internals/development/sg/wildcard'

import type { SubmitHappinessFeedbackResult, SubmitHappinessFeedbackVariables } from '../graphql-operations.ts'

interface UseHandleSubmitFeedbackState {
    handleSubmitFeedback: FeedbackPromptSubmitEventHandler
}

interface UseHandleSubmitFeedbackParameters {
    routeMatch?: string
    textPrefix?: string
}

export const useHandleSubmitFeedback = ({
    routeMatch,
    textPrefix = '',
}: UseHandleSubmitFeedbackParameters): UseHandleSubmitFeedbackState => {
    const SUBMIT_HAPPINESS_FEEDBACK_QUERY = gql`
        mutation SubmitHappinessFeedback($input: HappinessFeedbackSubmissionInput!) {
            submitHappinessFeedback(input: $input) {
                alwaysNil
            }
        }
    `

    const [submitFeedback] = useMutation<SubmitHappinessFeedbackResult, SubmitHappinessFeedbackVariables>(
        SUBMIT_HAPPINESS_FEEDBACK_QUERY
    )

    const handleSubmitFeedback = useCallback(
        async (text: string) => {
            const { data, errors } = await submitFeedback({
                variables: {
                    input: { feedback: `${textPrefix}${text}`, currentPath: routeMatch },
                },
            })

            return {
                errorMessage: errors?.map(error => error.message).join(', '),
                isHappinessFeedback: !!data?.submitHappinessFeedback,
            }
        },
        [routeMatch, submitFeedback, textPrefix]
    )

    return {
        handleSubmitFeedback,
    }
}
