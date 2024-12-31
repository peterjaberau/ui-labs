import { cncf } from './cncf.tsx'
import { julia } from './Julia.tsx'
import { kubernetes } from './Kubernetes.tsx'
import { o3de } from './o3de.tsx'
import { stackStorm } from './StackStorm.tsx'
import { stanford } from './Stanford.tsx'
import { temporal } from './Temporal.tsx'
import type { CommunitySearchContextMetadata } from './types.ts'

export const communitySearchContextsList: CommunitySearchContextMetadata[] = [
    cncf,
    temporal,
    o3de,
    stackStorm,
    kubernetes,
    stanford,
    julia,
]
