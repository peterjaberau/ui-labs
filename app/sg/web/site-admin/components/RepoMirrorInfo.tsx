import * as React from 'react'

import { Timestamp } from '~/sg/branded/components/Timestamp'
import { Text, Tooltip } from '~/sg/wildcard'

import type { MirrorRepositoryInfoFields } from '../../graphql-operations'
import { prettyBytesBigint } from '../../util/prettyBytesBigint'

export const RepoMirrorInfo: React.FunctionComponent<
    React.PropsWithChildren<{
        mirrorInfo: MirrorRepositoryInfoFields
    }>
> = ({ mirrorInfo }) => (
    <>
        <Text className="mb-0 text-muted">
            <small>
                {mirrorInfo.updatedAt === null ? (
                    <>Not yet synced from code host.</>
                ) : (
                    <>
                        Last synced <Timestamp date={mirrorInfo.updatedAt} />. Next sync time:{' '}
                        {mirrorInfo.nextSyncAt === null ? (
                            <>No update scheduled</>
                        ) : (
                            <Timestamp date={mirrorInfo.nextSyncAt} />
                        )}
                        . Size: {prettyBytesBigint(BigInt(mirrorInfo.byteSize))}.
                        {mirrorInfo.shard !== null && <> Shard: {mirrorInfo.shard}</>}
                        {mirrorInfo.shard === null && (
                            <>
                                {' '}
                                Shard:{' '}
                                <Tooltip content="The repo has not yet been picked up by a gitserver instance.">
                                    <span>not assigned</span>
                                </Tooltip>
                            </>
                        )}
                    </>
                )}
            </small>
        </Text>
    </>
)