import { type FunctionComponent, useEffect, useState } from 'react'

import { useLocation } from '@remix-run/react'

import type { TelemetryV2Props } from '~/internals/development/sg/shared/telemetry'
import type { TelemetryProps } from '~/internals/development/sg/shared/telemetry/telemetryService.ts'
import { PageHeader, Link, Tabs, TabList, Tab, TabPanels, TabPanel } from '~/internals/development/sg/wildcard'

import type { AuthenticatedUser } from '../../../../auth.ts'
import { PageTitle } from '../../../../components/PageTitle.tsx'
import { CodeIntelConfigurationPageHeader } from '../components/CodeIntelConfigurationPageHeader.tsx'
import { ConfigurationEditor } from '../components/ConfigurationEditor.tsx'
import { ConfigurationForm } from '../components/ConfigurationForm.tsx'

export interface CodeIntelRepositoryIndexConfigurationPageProps extends TelemetryProps, TelemetryV2Props {
    repo: { id: string }
    authenticatedUser: AuthenticatedUser | null
}

export const CodeIntelRepositoryIndexConfigurationPage: FunctionComponent<
    CodeIntelRepositoryIndexConfigurationPageProps
> = ({ repo, authenticatedUser, telemetryService, telemetryRecorder, ...props }) => {
    useEffect(() => {
        telemetryService.logViewEvent('CodeIntelRepositoryIndexConfiguration')
        telemetryRecorder.recordEvent('repo.codeIntel.indexConfig', 'view')
    }, [telemetryService, telemetryRecorder])
    const location = useLocation()

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

    useEffect(() => {
        const tab = new URLSearchParams(location.search).get('tab')
        if (tab === 'form') {
            setActiveTabIndex(0)
            telemetryRecorder.recordEvent('repo.codeIntel.indexConfig.tab', 'click', { metadata: { tab: 0 } })
        } else if (tab === 'raw') {
            setActiveTabIndex(1)
            telemetryRecorder.recordEvent('repo.codeIntel.indexConfig.tab', 'click', { metadata: { tab: 1 } })
        }
    }, [location.search, telemetryRecorder])

    return (
        <>
            <PageTitle title="Code graph data repository index configuration" />
            <CodeIntelConfigurationPageHeader>
                <PageHeader
                    headingElement="h2"
                    path={[
                        {
                            text: <>Code graph data repository index configuration</>,
                        },
                    ]}
                    description={
                        <>
                            Provide explicit index job configuration to customize how this repository is indexed. See
                            the{' '}
                            <Link to="/help/code_navigation/references/auto_indexing_configuration">
                                reference guide
                            </Link>{' '}
                            for more information.
                        </>
                    }
                    className="mb-3"
                />
            </CodeIntelConfigurationPageHeader>
            <Tabs size="large" index={activeTabIndex} lazy={true}>
                <TabList>
                    <Tab as={Link} to="?tab=form" key="form" className="text-decoration-none">
                        Form
                    </Tab>
                    <Tab as={Link} to="?tab=raw" key="raw" className="text-decoration-none">
                        Raw
                    </Tab>
                </TabList>
                <TabPanels className="mb-3">
                    <TabPanel>
                        <ConfigurationForm
                            repoId={repo.id}
                            authenticatedUser={authenticatedUser}
                            telemetryService={telemetryService}
                        />
                    </TabPanel>
                    <TabPanel>
                        <ConfigurationEditor
                            repoId={repo.id}
                            authenticatedUser={authenticatedUser}
                            telemetryService={telemetryService}
                            telemetryRecorder={telemetryRecorder}
                            {...props}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
