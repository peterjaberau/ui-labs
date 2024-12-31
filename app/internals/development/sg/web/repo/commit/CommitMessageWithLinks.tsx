import { Link } from '~/internals/development/sg/wildcard'

import type { ExternalServiceKind } from '../../graphql-operations.ts'
import { Linkified } from '../linkifiy/Linkified.tsx'

interface Props {
    message: string
    to: string
    className: string
    onClick?: () => void
    externalURLs: { url: string; serviceKind: ExternalServiceKind | null }[] | undefined
}
export const CommitMessageWithLinks = ({
    message,
    to,
    className,
    onClick,
    externalURLs,
}: Props): React.ReactElement => {
    const commitLinkProps = {
        'data-testid': 'git-commit-node-message-subject',
        className,
        onClick,
        to,
    }

    return <Linkified input={message} externalURLs={externalURLs} as={Link} {...commitLinkProps} />
}
