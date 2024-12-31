import type { PlatformContextProps } from '~/internals/development/sg/shared/platform/context.ts'

import type { AuthenticatedUser } from '../auth.ts'
import type { BatchChangesProps } from '../batches'
import type { NavItemWithIconDescriptor, RouteV6Descriptor } from '../util/contributions.ts'

import type { NamespaceProps } from './index.ts'

/**
 * Properties passed to all page components in the namespace area.
 */
export interface NamespaceAreaContext extends PlatformContextProps, NamespaceProps {
    authenticatedUser: AuthenticatedUser | null
}

export interface NamespaceAreaRoute extends RouteV6Descriptor<NamespaceAreaContext> {}

interface NavItemDescriptorContext extends BatchChangesProps {}

export interface NamespaceAreaNavItem extends NavItemWithIconDescriptor<NavItemDescriptorContext> {}
