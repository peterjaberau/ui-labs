import React, { useContext, useMemo, useState } from 'react'

import classNames from 'classnames'
import { useNavigate } from '@remix-run/react'
import { lastValueFrom } from 'rxjs'

import { useQuery } from '~/internals/development/sg/http-client'
import { useSettingsCascade } from '~/internals/development/sg/shared/settings/settings.tsx'
import { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { Card, CardBody, useDebounce, useDeepMemo, type FormChangeEvent } from '~/internals/development/sg/wildcard'

import type {
    GetInsightViewResult,
    GetInsightViewVariables,
    InsightViewFiltersInput,
    SeriesDisplayOptionsInput,
} from '../../../../../../../graphql-operations.ts'
import { useSeriesToggle } from '../../../../../../../insights/utils/use-series-toggle.ts'
import { defaultPatternTypeFromSettings } from '../../../../../../../util/settings.ts'
import { InsightCard, InsightCardHeader, InsightCardLoading } from '../../../../../components'
import {
    DrillDownInsightFilters,
    FilterSectionVisualMode,
    DrillDownInsightCreationForm,
    DrillDownFiltersStep,
    BackendInsightChart,
    BackendInsightErrorAlert,
    InsightIncompleteAlert,
    type DrillDownFiltersFormValues,
    type DrillDownInsightCreationFormValues,
} from '../../../../../components/insights-view-grid/components/backend-insight/components'
import {
    type BackendInsight,
    CodeInsightsBackendContext,
    type InsightFilters,
    useSaveInsightAsNewView,
    isComputeInsight,
} from '../../../../../core'
import { GET_INSIGHT_VIEW_GQL } from '../../../../../core/backend/gql-backend'
import { createBackendInsightData } from '../../../../../core/backend/gql-backend/methods/get-backend-insight-data/deserializators.ts'
import { insightPollingInterval } from '../../../../../core/backend/gql-backend/utils/insight-polling.ts'
import { getTrackingTypeByInsightType, useCodeInsightViewPings } from '../../../../../pings'
import { StandaloneInsightContextMenu } from '../context-menu/StandaloneInsightContextMenu.tsx'

import styles from './StandaloneBackendInsight.module.scss'

interface StandaloneBackendInsight extends TelemetryProps, TelemetryV2Props {
    insight: BackendInsight
    className?: string
}

export const StandaloneBackendInsight: React.FunctionComponent<StandaloneBackendInsight> = props => {
    const { telemetryService, telemetryRecorder, insight, className } = props
    const navigate = useNavigate()
    const { updateInsight } = useContext(CodeInsightsBackendContext)
    const [saveAsNewView] = useSaveInsightAsNewView({ dashboard: null })

    const seriesToggleState = useSeriesToggle()

    // Visual line chart settings
    const [zeroYAxisMin, setZeroYAxisMin] = useState(false)
    const [step, setStep] = useState(DrillDownFiltersStep.Filters)

    // Original insight filters values that are stored in setting subject with insight
    // configuration object, They are updated  whenever the user clicks update/save button
    const [originalInsightFilters, setOriginalInsightFilters] = useState(insight.filters)

    // Live valid filters from filter form. They are updated whenever the user is changing
    // filter value in filters fields.
    const [filters, setFilters] = useState<InsightFilters>(originalInsightFilters)
    const [filterVisualMode, setFilterVisualMode] = useState<FilterSectionVisualMode>(FilterSectionVisualMode.Preview)
    const debouncedFilters = useDebounce(useDeepMemo<InsightFilters>(filters), 500)

    const filterInput: InsightViewFiltersInput = {
        includeRepoRegex: debouncedFilters.includeRepoRegexp,
        excludeRepoRegex: debouncedFilters.excludeRepoRegexp,
        searchContexts: [debouncedFilters.context],
    }

    const seriesDisplayOptions: SeriesDisplayOptionsInput = {
        limit: debouncedFilters.seriesDisplayOptions.limit,
        numSamples: debouncedFilters.seriesDisplayOptions.numSamples,
        sortOptions: debouncedFilters.seriesDisplayOptions.sortOptions,
    }

    const { data, error, loading, stopPolling } = useQuery<GetInsightViewResult, GetInsightViewVariables>(
        GET_INSIGHT_VIEW_GQL,
        {
            variables: { id: insight.id, filters: filterInput, seriesDisplayOptions },
            fetchPolicy: 'cache-and-network',
            pollInterval: insightPollingInterval(insight),
            context: { concurrentRequests: { key: 'GET_INSIGHT_VIEW' } },
            onError: () => {
                stopPolling()
            },
        }
    )

    const defaultPatternType = defaultPatternTypeFromSettings(useSettingsCascade())

    const insightData = useMemo(() => {
        const node = data?.insightViews.nodes[0]

        if (!node) {
            stopPolling()
            return
        }
        const parsedData = createBackendInsightData({ ...insight, filters }, node, defaultPatternType)
        if (!parsedData.isFetchingHistoricalData) {
            stopPolling()
        }
        return parsedData
    }, [data, filters, insight, stopPolling, defaultPatternType])

    const { trackMouseLeave, trackMouseEnter, trackDatumClicks } = useCodeInsightViewPings({
        telemetryService,
        telemetryRecorder,
        insightType: getTrackingTypeByInsightType(insight.type),
    })

    const handleFilterChange = (event: FormChangeEvent<DrillDownFiltersFormValues>): void => {
        if (event.valid) {
            setFilters(event.values)
        }
    }

    const handleFilterSave = async (filters: InsightFilters): Promise<void> => {
        await lastValueFrom(updateInsight({ insightId: insight.id, nextInsightData: { ...insight, filters } }), {
            defaultValue: undefined,
        })
        setOriginalInsightFilters(filters)
        telemetryService.log('CodeInsightsSearchBasedFilterUpdating')
        telemetryRecorder.recordEvent('insights.searchBasedFilter', 'update', { metadata: { location: 1 } })
    }

    const handleInsightFilterCreation = async (values: DrillDownInsightCreationFormValues): Promise<void> => {
        await saveAsNewView({
            insight,
            filters,
            title: values.insightName,
            dashboard: null,
        })

        setOriginalInsightFilters(filters)
        navigate('/insights/all')
        telemetryService.log('CodeInsightsSearchBasedFilterInsightCreation')
        telemetryRecorder.recordEvent('insights.createFromFilter.searchBased', 'submit', { metadata: { location: 1 } })
    }

    return (
        <div className={classNames(className, styles.root)}>
            <Card as={CardBody} className={styles.filters}>
                {step === DrillDownFiltersStep.Filters && (
                    <DrillDownInsightFilters
                        initialValues={filters}
                        originalValues={originalInsightFilters}
                        visualMode={filterVisualMode}
                        // It doesn't make sense to have max series per point for compute insights
                        // because there is always only one point per series
                        isNumSamplesFilterAvailable={!isComputeInsight(insight)}
                        onVisualModeChange={setFilterVisualMode}
                        onFiltersChange={handleFilterChange}
                        onFilterSave={handleFilterSave}
                        onCreateInsightRequest={() => setStep(DrillDownFiltersStep.ViewCreation)}
                    />
                )}

                {step === DrillDownFiltersStep.ViewCreation && (
                    <DrillDownInsightCreationForm
                        onCreateInsight={handleInsightFilterCreation}
                        onCancel={() => setStep(DrillDownFiltersStep.Filters)}
                    />
                )}
            </Card>

            <InsightCard
                data-testid={`insight-standalone-card.${insight.id}`}
                className={styles.chart}
                onMouseEnter={trackMouseEnter}
                onMouseLeave={trackMouseLeave}
            >
                <InsightCardHeader title={insight.title}>
                    {insightData?.incompleteAlert && <InsightIncompleteAlert alert={insightData.incompleteAlert} />}
                    <StandaloneInsightContextMenu
                        insight={insight}
                        zeroYAxisMin={zeroYAxisMin}
                        onToggleZeroYAxisMin={setZeroYAxisMin}
                    />
                </InsightCardHeader>

                {error ? (
                    <BackendInsightErrorAlert error={error} />
                ) : loading || !insightData ? (
                    <InsightCardLoading>Loading code insight</InsightCardLoading>
                ) : (
                    <BackendInsightChart
                        {...insightData}
                        locked={insight.isFrozen}
                        zeroYAxisMin={zeroYAxisMin}
                        onDatumClick={trackDatumClicks}
                        seriesToggleState={seriesToggleState}
                    />
                )}
            </InsightCard>
        </div>
    )
}
