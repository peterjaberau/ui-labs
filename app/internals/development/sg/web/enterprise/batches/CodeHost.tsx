import React from 'react'

import { Icon } from '~/internals/development/sg/wildcard'

import { defaultExternalServices } from '../../components/externalServices/externalServices.tsx'
import type { ExternalServiceKind } from '../../graphql-operations.ts'

export interface Props {
    externalServiceURL: string
    externalServiceKind: ExternalServiceKind
}

export const CodeHost: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    externalServiceURL,
    externalServiceKind,
}) => {
    const ExternalServiceIcon = defaultExternalServices[externalServiceKind].icon
    return (
        <li>
            <Icon aria-hidden={true} className="mr-2" as={ExternalServiceIcon} />
            {externalServiceURL}
        </li>
    )
}
