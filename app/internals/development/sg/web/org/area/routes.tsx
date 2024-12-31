import { Navigate } from '@remix-run/react'

import { lazyComponent } from '~/internals/development/sg/shared/util/lazyComponent.tsx'

import type { EditBatchSpecPageProps } from '../../enterprise/batches/batch-spec/edit/EditBatchSpecPage.tsx'
import type { CreateBatchChangePageProps } from '../../enterprise/batches/create/CreateBatchChangePage.tsx'
import type { NamespaceBatchChangesAreaProps } from '../../enterprise/batches/global/GlobalBatchChangesArea.tsx'
import { namespaceAreaRoutes } from '../../namespaces/routes.tsx'

import type { OrgAreaRoute } from './OrgArea.tsx'

const NamespaceBatchChangesArea = lazyComponent<NamespaceBatchChangesAreaProps, 'NamespaceBatchChangesArea'>(
    () => import('../../enterprise/batches/global/GlobalBatchChangesArea.tsx'),
    'NamespaceBatchChangesArea'
)

const ExecuteBatchSpecPage = lazyComponent(
    () => import('../../enterprise/batches/batch-spec/execute/ExecuteBatchSpecPage.tsx'),
    'ExecuteBatchSpecPage'
)

const CreateBatchChangePage = lazyComponent<CreateBatchChangePageProps, 'CreateBatchChangePage'>(
    () => import('../../enterprise/batches/create/CreateBatchChangePage.tsx'),
    'CreateBatchChangePage'
)

const EditBatchSpecPage = lazyComponent<EditBatchSpecPageProps, 'EditBatchSpecPage'>(
    () => import('../../enterprise/batches/batch-spec/edit/EditBatchSpecPage.tsx'),
    'EditBatchSpecPage'
)

const OrgSettingsArea = lazyComponent(() => import('../settings/OrgSettingsArea.tsx'), 'OrgSettingsArea')

export const orgAreaRoutes: readonly OrgAreaRoute[] = [
    {
        path: 'getstarted',
        render: props => <Navigate to={`/organizations/${props.org.name}/settings/members`} replace={true} />,
    },
    {
        path: 'settings/*',
        render: props => (
            <OrgSettingsArea
                {...props}
                routes={props.orgSettingsAreaRoutes}
                sideBarItems={props.orgSettingsSideBarItems}
            />
        ),
    },
    ...namespaceAreaRoutes,

    // Redirect from /organizations/:orgname -> /organizations/:orgname/settings/profile.
    {
        path: '',
        render: () => <Navigate to="./settings/profile" replace={true} />,
    },
    // Redirect from previous /organizations/:orgname/account -> /organizations/:orgname/settings/profile.
    {
        path: 'account',
        render: () => <Navigate to="../settings/profile" replace={true} />,
    },

    {
        path: 'batch-changes/create',
        render: props => <CreateBatchChangePage headingElement="h1" {...props} initialNamespaceID={props.org.id} />,
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
        fullPage: true,
    },
    {
        path: 'batch-changes/:batchChangeName/edit',
        render: props => <EditBatchSpecPage {...props} telemetryRecorder={props.platformContext.telemetryRecorder} />,
        condition: ({ batchChangesEnabled, batchChangesExecutionEnabled }) =>
            batchChangesEnabled && batchChangesExecutionEnabled,
        fullPage: true,
    },
    {
        path: 'batch-changes/:batchChangeName/executions/:batchSpecID/*',
        render: props => (
            <ExecuteBatchSpecPage {...props} telemetryRecorder={props.platformContext.telemetryRecorder} />
        ),
        condition: ({ batchChangesEnabled, batchChangesExecutionEnabled }) =>
            batchChangesEnabled && batchChangesExecutionEnabled,
        fullPage: true,
    },
    {
        path: 'batch-changes/*',
        render: props => (
            <NamespaceBatchChangesArea
                {...props}
                namespaceID={props.org.id}
                telemetryRecorder={props.platformContext.telemetryRecorder}
            />
        ),
        condition: ({ batchChangesEnabled }) => batchChangesEnabled,
    },
]
