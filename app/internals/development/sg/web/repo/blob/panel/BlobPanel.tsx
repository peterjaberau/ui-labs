import React, { useEffect, useMemo } from 'react'

import { useLocation } from '@remix-run/react'
import { type Observable, Subscription } from 'rxjs'

import { type Panel, useBuiltinTabbedPanelViews } from '~/internals/development/sg/branded/components/panel/TabbedPanelContent.tsx'
import { PanelContent } from '~/internals/development/sg/branded/components/panel/views/PanelContent.tsx'
import { SourcegraphURL, isDefined, isErrorLike } from '~/internals/development/sg/common'
import type { FetchFileParameters } from '~/internals/development/sg/shared/backend/file.ts'
import type { Scalars } from '~/internals/development/sg/shared/graphql-operations.ts'
import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'
import type { Settings, SettingsCascadeOrError, SettingsCascadeProps } from '~/internals/development/sg/shared/settings/settings.tsx'
import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { type AbsoluteRepoFile, type ModeSpec } from '~/internals/development/sg/shared/util/url.ts'
import { Text } from '~/internals/development/sg/wildcard'

import type { CodeIntelligenceProps } from '../../../codeintel'
import { ReferencesPanel } from '../../../codeintel/ReferencesPanel.tsx'
import { useFeatureFlag } from '../../../featureFlags/useFeatureFlag.ts'
import type { OwnConfigProps } from '../../../own/OwnConfigProps.ts'
import { RepoRevisionSidebarCommits } from '../../RepoRevisionSidebarCommits.tsx'
import { FileOwnershipPanel } from '../own/FileOwnershipPanel.tsx'

interface Props
    extends AbsoluteRepoFile,
        ModeSpec,
        SettingsCascadeProps,
        PlatformContextProps,
        Pick<CodeIntelligenceProps, 'useCodeIntel'>,
        OwnConfigProps,
        TelemetryProps,
        TelemetryV2Props {
    repoID: Scalars['ID']
    isPackage: boolean
    repoName: string
    commitID: string

    fetchHighlightedFileLineRanges: (parameters: FetchFileParameters, force?: boolean) => Observable<string[][]>
}

export type BlobPanelTabID = 'info' | 'def' | 'references' | 'impl' | 'typedef' | 'history' | 'ownership'

/**
 * A React hook that registers panel views for the blob.
 */
function useBlobPanelViews({
    revision,
    filePath,
    repoID,
    isPackage,
    settingsCascade,
    platformContext,
    useCodeIntel,
    telemetryService,
    telemetryRecorder,
    fetchHighlightedFileLineRanges,
    ownEnabled,
}: Props): void {
    const subscriptions = useMemo(() => new Subscription(), [])

    const defaultPageSize = defaultPageSizeFromSettings(settingsCascade)

    const location = useLocation()

    const position = useMemo(() => {
        const lineRange = SourcegraphURL.from(location).lineRange
        return lineRange.line !== undefined ? { line: lineRange.line, character: lineRange.character || 0 } : undefined
    }, [location])

    const [enableOwnershipPanels] = useFeatureFlag('enable-ownership-panels', true)

    useBuiltinTabbedPanelViews(
        useMemo(() => {
            const panelDefinitions: Panel[] = [
                position
                    ? {
                          id: 'references',
                          title: 'References',
                          // The new reference panel contains definitions, references, and implementations. We need it to
                          // match all these IDs so it shows up when one of the IDs is used as `#tab=<ID>` in the URL.
                          matchesTabID: (id: string): boolean =>
                              id === 'def' || id === 'references' || id.startsWith('implementations_'),
                          element: (
                              <ReferencesPanel
                                  settingsCascade={settingsCascade}
                                  platformContext={platformContext}
                                  telemetryService={telemetryService}
                                  telemetryRecorder={telemetryRecorder}
                                  key="references"
                                  fetchHighlightedFileLineRanges={fetchHighlightedFileLineRanges}
                                  useCodeIntel={useCodeIntel}
                              />
                          ),
                      }
                    : null,

                isPackage
                    ? {
                          id: 'history',
                          title: 'History',
                          element: (
                              <PanelContent>
                                  {/* Instead of removing the "History" tab, explain why it's not available */}
                                  <Text>Git history is not available when browsing packages</Text>
                              </PanelContent>
                          ),
                      }
                    : {
                          id: 'history',
                          title: 'History',
                          element: (
                              <PanelContent>
                                  <RepoRevisionSidebarCommits
                                      key="commits"
                                      repoID={repoID}
                                      revision={revision}
                                      filePath={filePath}
                                      defaultPageSize={defaultPageSize}
                                      telemetryRecorder={telemetryRecorder}
                                  />
                              </PanelContent>
                          ),
                      },
                ownEnabled && enableOwnershipPanels
                    ? {
                          id: 'ownership',
                          title: 'Ownership',
                          productStatus: 'beta' as const,
                          element: (
                              <PanelContent>
                                  <FileOwnershipPanel
                                      key="ownership"
                                      repoID={repoID}
                                      revision={revision}
                                      filePath={filePath}
                                      telemetryService={telemetryService}
                                      telemetryRecorder={telemetryRecorder}
                                  />
                              </PanelContent>
                          ),
                      }
                    : null,
            ].filter(isDefined)

            return panelDefinitions
        }, [
            isPackage,
            position,
            settingsCascade,
            platformContext,
            telemetryService,
            telemetryRecorder,
            fetchHighlightedFileLineRanges,
            useCodeIntel,
            repoID,
            revision,
            filePath,
            defaultPageSize,
            ownEnabled,
            enableOwnershipPanels,
        ])
    )

    useEffect(() => () => subscriptions.unsubscribe(), [subscriptions])
}

function defaultPageSizeFromSettings(settingsCascade: SettingsCascadeOrError<Settings>): number | undefined {
    if (settingsCascade.final && !isErrorLike(settingsCascade.final)) {
        return settingsCascade.final['history.defaultPageSize'] as number
    }

    return undefined
}

/**
 * Registers built-in tabbed panel views and renders `null`.
 */
export const BlobPanel: React.FunctionComponent<Props> = props => {
    useBlobPanelViews(props)

    return null
}
