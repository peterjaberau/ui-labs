import { NamespaceProps } from './index.ts'

export function namespaceTelemetryMetadata(
    namespace: Pick<NamespaceProps['namespace'], '__typename'>
): Record<string, number> {
    return {
        [`namespaceType${namespace.__typename}`]: 1,
    }
}
