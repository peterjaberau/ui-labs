import MainCloudscapeExample from "~/internals/development/cloudscape-app/main.client.tsx"
import React from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import RouteWrapper from "~/internals/development/components/layout-wrapper.tsx"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500))
  return { message: "This data came from the client loader" }
}

export const handle: HandleCustom = {
  links: [{ label: "Cloudscape", link: "", key: "cloudscape" }],
}
const filePath = "routes/cloudscape._index.tsx"



export default function CloudscapeIndexPage() {
  const data = useLoaderData<typeof clientLoader>()
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
