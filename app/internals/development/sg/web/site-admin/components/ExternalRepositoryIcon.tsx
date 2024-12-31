import { mdiCloudQuestion } from '@mdi/js'
import classNames from 'classnames'

import { Icon } from '~/internals/development/sg/wildcard'

import { externalRepoIcon } from '../../components/externalServices/externalServices.tsx'
import type { ExternalRepositoryFields } from '../../graphql-operations.ts'

export const ExternalRepositoryIcon: React.FunctionComponent<
    React.PropsWithChildren<{
        externalRepo: Pick<ExternalRepositoryFields, 'serviceType'>
        className?: string
    }>
> = ({ externalRepo, className }) => {
    const IconComponent = externalRepoIcon(externalRepo)
    return IconComponent ? (
        <Icon as={IconComponent} aria-label="Code host logo" className={classNames('mr-1', className)} />
    ) : (
        <Icon svgPath={mdiCloudQuestion} aria-label="Unknown code host" className={classNames('mr-1', className)} />
    )
}
