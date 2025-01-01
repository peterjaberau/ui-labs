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
  ],
};
const filePath = "routes/$session.$service.tsx"


export default function SessionServiceLayoutPage() {
  const data = useLoaderData<typeof clientLoader>()
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => (
          <MainCloudscapeExample>
            <Outlet />
          </MainCloudscapeExample>
      )}
    </ClientOnly>
  )
}


// export default function SessionServiceLayoutPage() {
//   const data = useLoaderData<typeof clientLoader>()
//   return (
//     <ClientOnly fallback={<div>Loading...</div>}>
//       {() => (
//         <RouteWrapper filePath={filePath}>
//           <MainCloudscapeExample>
//             renders Component + Children Outlet as client-side. /:session/:service
//             <Outlet />
//           </MainCloudscapeExample>
//         </RouteWrapper>
//       )}
//     </ClientOnly>
//   )
// }
