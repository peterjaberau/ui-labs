import React from 'react'

import { H3, Text } from '~/internals/development/sg/wildcard'

import { defaultExternalServices } from '../../../components/externalServices/externalServices.tsx'
import type { ExternalServiceKind } from '../../../graphql-operations.ts'

export interface ModalHeaderProps {
    id: string
    externalServiceKind: ExternalServiceKind
    externalServiceURL: string
}

export const ModalHeader: React.FunctionComponent<React.PropsWithChildren<ModalHeaderProps>> = ({
    id,
    externalServiceKind,
    externalServiceURL,
}) => (
    <>
        <H3 id={id}>Batch Changes credentials: {defaultExternalServices[externalServiceKind].defaultDisplayName}</H3>
        <Text className="mb-4">{externalServiceURL}</Text>
    </>
)
