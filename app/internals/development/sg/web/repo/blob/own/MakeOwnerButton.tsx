import { mdiLoading, mdiPlus } from '@mdi/js'

import { type ErrorLike, asError } from '~/internals/development/sg/common'
import { useMutation } from '~/internals/development/sg/http-client'
import { Button, Icon, Tooltip } from '~/internals/development/sg/wildcard'

import type { AssignOwnerResult, AssignOwnerVariables } from '../../../graphql-operations.ts'

import { ASSIGN_OWNER } from './grapqlQueries.ts'

export interface MakeOwnerButtonProps {
    onSuccess: () => Promise<any>
    onError: (e: Error) => void
    repoId: string
    path: string
    userId?: string
}

export const MakeOwnerButton: React.FC<MakeOwnerButtonProps> = ({ onSuccess, onError, repoId, path, userId }) => {
    const tooltipContent =
        userId === undefined
            ? 'Only ownership entries that are recognized as Sourcegraph users can be assigned ownership.'
            : null

    const [requestAssignOwner, { loading }] = useMutation<AssignOwnerResult, AssignOwnerVariables>(ASSIGN_OWNER, {})

    const assignOwner: () => Promise<void> = async () => {
        if (userId !== undefined) {
            await requestAssignOwner({
                variables: {
                    input: {
                        absolutePath: path,
                        assignedOwnerID: userId,
                        repoID: repoId,
                    },
                },
                onCompleted: async () => {
                    await onSuccess()
                },
                onError: (errors: ErrorLike) => {
                    onError(asError(errors))
                },
            })
        }
    }

    return (
        <Tooltip content={tooltipContent}>
            <Button onClick={assignOwner} variant="secondary" outline={true} size="sm" disabled={userId === undefined}>
                <Icon aria-hidden={true} svgPath={loading ? mdiLoading : mdiPlus} />
                Make owner
            </Button>
        </Tooltip>
    )
}
