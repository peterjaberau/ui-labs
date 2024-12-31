import React from 'react'

import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'

import { CommunitySearchContextPage, type CommunitySearchContextPageProps } from './CommunitySearchContextPage.tsx'
import type { CommunitySearchContextMetadata } from './types.ts'

export const chakraui: CommunitySearchContextMetadata = {
    title: 'CHAKRA UI',
    spec: 'chakraui',
    url: '/chakraui',
    description: '',
    examples: [
        {
            title: 'Search for Chakra UI packages',
            patternType: SearchPatternType.standard,
            query: 'file:package.json',
        },
        {
            title: 'Browse diffs for recent code changes',
            patternType: SearchPatternType.standard,
            query: 'type:diff after:"1 week ago"',
        },
    ],
    homepageDescription: 'Search within the Chakra UI organization.',
    homepageIcon: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg',
}

export const ChakraUICommunitySearchContextPage: React.FunctionComponent<
    React.PropsWithChildren<Omit<CommunitySearchContextPageProps, 'communitySearchContextMetadata'>>
> = props => <CommunitySearchContextPage {...props} communitySearchContextMetadata={chakraui} />
