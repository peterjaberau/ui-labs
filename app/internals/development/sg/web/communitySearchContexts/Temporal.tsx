import React from 'react'

import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'

import { CommunitySearchContextPage, type CommunitySearchContextPageProps } from './CommunitySearchContextPage.tsx'
import type { CommunitySearchContextMetadata } from './types.ts'

export const temporal: CommunitySearchContextMetadata = {
    title: 'Temporal',
    spec: 'temporalio',
    url: '/temporal',
    description: '',
    examples: [
        {
            title: 'All test functions',
            patternType: SearchPatternType.standard,
            query: 'type:symbol Test',
        },
        {
            title: 'Search for a specifc function or class',
            patternType: SearchPatternType.standard,
            query: 'type:symbol SimpleSslContextBuilder',
        },
    ],
    homepageDescription: 'Search within the Temporal organization.',
    homepageIcon: 'https://avatars.githubusercontent.com/u/56493103?s=200&v=4',
}

export const TemporalCommunitySearchContextPage: React.FunctionComponent<
    React.PropsWithChildren<Omit<CommunitySearchContextPageProps, 'communitySearchContextMetadata'>>
> = props => <CommunitySearchContextPage {...props} communitySearchContextMetadata={temporal} />
