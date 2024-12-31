import type { HoverMerged } from '~/internals/development/sg/client-api'
import type { HoverOverlayProps as GenericHoverOverlayProps } from '~/internals/development/sg/codeintellify'

import type { ActionItemAction } from '../actions/ActionItem.tsx'
import type { FileSpec, RepoSpec, ResolvedRevisionSpec, RevisionSpec } from '../util/url.ts'

export type HoverContext = RepoSpec & RevisionSpec & FileSpec & ResolvedRevisionSpec

export interface HoverOverlayBaseProps extends GenericHoverOverlayProps<HoverContext, HoverMerged, ActionItemAction> {}
