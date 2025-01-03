import MainCloudscapeExample from "~/internals/development/cloudscape-app/main.client.tsx"
import React from "react"
import { ClientOnly } from "remix-utils/client-only"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import RouteWrapper from "~/internals/development/components/layout-wrapper.tsx"

export const handle: HandleCustom = {
  links: [{ label: "Cloudscape", link: "", key: "cloudscape" }],
}
const filePath = "routes/cloudscape._index.tsx"



export default function CloudscapeIndexPage() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => (
        <RouteWrapper filePath={filePath}>
          <MainCloudscapeExample>
            routes/cloudscape._index.tsx. Rendered at once without sub routing
          </MainCloudscapeExample>
        </RouteWrapper>
      )}
    </ClientOnly>
  )
}
