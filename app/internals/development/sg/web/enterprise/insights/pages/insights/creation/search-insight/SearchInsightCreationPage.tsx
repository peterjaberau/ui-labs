import { type FC, useCallback, useEffect, useMemo } from 'react'

import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Link, PageHeader, useObservable, FORM_ERROR, type FormChangeEvent } from '~/internals/development/sg/wildcard'

import { PageTitle } from '../../../../../../components/PageTitle.tsx'
import { CodeInsightsIcon } from '../../../../../../insights/Icons.tsx'
import { CodeInsightsPage, CodeInsightsCreationActions, CodeInsightCreationMode } from '../../../../components'
import type { MinimalSearchBasedInsightData } from '../../../../core'
import { useUiFeatures } from '../../../../hooks'
import { CodeInsightTrackType } from '../../../../pings'
import { V2InsightType } from '../../../../pings/types.ts'

import {
    SearchInsightCreationContent,
    type SearchInsightCreationContentProps,
} from './components/SearchInsightCreationContent.tsx'
import type { CreateInsightFormFields } from './types.ts'
import { getSanitizedSearchInsight } from './utils/insight-sanitizer.ts'
import { useSearchInsightInitialValues } from './utils/use-initial-values.ts'

export interface InsightCreateEvent {
    insight: MinimalSearchBasedInsightData
}

export interface SearchInsightCreationPageProps extends TelemetryProps, TelemetryV2Props {
    backUrl: string

    /**
     * Whenever the user submit form and clicks on save/submit button
     *
     * @param event - creation event with subject id and updated settings content
     * info.
     */
    onInsightCreateRequest: (event: InsightCreateEvent) => Promise<unknown>

    /**
     * Whenever insight was created and all operations after creation were completed.
     */
    onSuccessfulCreation: () => void

    /**
     * Whenever the user click on cancel button
     */
    onCancel: () => void
}

export const SearchInsightCreationPage: FC<SearchInsightCreationPageProps> = props => {
    const { backUrl, telemetryService, onInsightCreateRequest, onCancel, onSuccessfulCreation, telemetryRecorder } =
        props

    const { licensed, insight } = useUiFeatures()
    const creationPermission = useObservable(useMemo(() => insight.getCreationPermissions(), [insight]))

    const { initialValues, setLocalStorageFormValues } = useSearchInsightInitialValues()

    useEffect(() => {
        telemetryService.logViewEvent('CodeInsightsSearchBasedCreationPage')
        telemetryRecorder.recordEvent('insights.create.searchBased', 'view')
    }, [telemetryService, telemetryRecorder])

    const handleSubmit = useCallback<SearchInsightCreationContentProps['onSubmit']>(
        async values => {
            const insight = getSanitizedSearchInsight(values)

            await onInsightCreateRequest({ insight })

            telemetryService.log('CodeInsightsSearchBasedCreationPageSubmitClick')
            telemetryService.log(
                'InsightAddition',
                { insightType: CodeInsightTrackType.SearchBasedInsight },
                { insightType: CodeInsightTrackType.SearchBasedInsight }
            )
            telemetryRecorder.recordEvent('insights.create.searchBased', 'submit', {
                metadata: { type: V2InsightType[CodeInsightTrackType.SearchBasedInsight] },
            })

            // Clear initial values if user successfully created search insight
            setLocalStorageFormValues(undefined)

            onSuccessfulCreation()
        },
        [onInsightCreateRequest, telemetryService, telemetryRecorder, setLocalStorageFormValues, onSuccessfulCreation]
    )

    const handleChange = (event: FormChangeEvent<CreateInsightFormFields>): void => {
        setLocalStorageFormValues(event.values)
    }

    const handleCancel = useCallback(() => {
        telemetryService.log('CodeInsightsSearchBasedCreationPageCancelClick')
        telemetryRecorder.recordEvent('insights.create.searchBased', 'cancel')
        setLocalStorageFormValues(undefined)
        onCancel()
    }, [telemetryService, telemetryRecorder, setLocalStorageFormValues, onCancel])

    return (
        <CodeInsightsPage>
            <PageTitle title="Create track changes insight - Code Insights" />

            <PageHeader
                className="mb-5"
                path={[
                    { icon: CodeInsightsIcon, to: '/insights', ariaLabel: 'Code insights dashboard page' },
                    { text: 'Create', to: backUrl },
                    { text: 'Track changes insight' },
                ]}
                description={
                    <span className="text-muted">
                        Search-based code insights analyze your code based on any search query.{' '}
                        <Link to="/help/code_insights" target="_blank" rel="noopener">
                            Learn more.
                        </Link>
                    </span>
                }
            />

            <SearchInsightCreationContent
                touched={false}
                initialValue={initialValues}
                dataTestId="search-insight-create-page-content"
                className="pb-5"
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                {form => (
                    <CodeInsightsCreationActions
                        mode={CodeInsightCreationMode.Creation}
                        licensed={licensed}
                        available={creationPermission?.available}
                        submitting={form.submitting}
                        errors={form.submitErrors?.[FORM_ERROR]}
                        clear={form.isFormClearActive}
                        onCancel={handleCancel}
                    />
                )}
            </SearchInsightCreationContent>
        </CodeInsightsPage>
    )
}
