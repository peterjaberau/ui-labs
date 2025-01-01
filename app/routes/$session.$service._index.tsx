import MainCloudscapeExample from "~/internals/development/cloudscape-app/main.client.tsx"
import React from "react"
import { Outlet, useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import RouteWrapper from "~/internals/development/components/layout-wrapper.tsx"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500))
  return { message: "This data came from the client loader" }
}

export const handle: HandleCustom = {
  links: [
    { label: "Session", link: "", key: "session-root" },
    { label: "Service", link: "", key: "service" },
    { label: "Default", link: "", key: "default" },
  ],
};
const filePath = "routes/$session.$service._index.tsx"


export default function SessionServiceIndexPage() {
  const data = useLoaderData<typeof clientLoader>()
  return (
    <div>
      default renderer
    </div>
  )
}



// export default function SessionServiceIndexPage() {
//   const data = useLoaderData<typeof clientLoader>()
//   return (
//     <RouteWrapper filePath={filePath}>
//       default renderer
//     </RouteWrapper>
//   )
// }
