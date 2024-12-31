import { gql } from '~/internals/development/sg/http-client'

export const lsifUploadAuditLogsFieldsFragment = gql`
    fragment LsifUploadsAuditLogsFields on LSIFUploadAuditLog {
        logTimestamp
        reason
        changedColumns {
            column
            old
            new
        }
        operation
    }
`
