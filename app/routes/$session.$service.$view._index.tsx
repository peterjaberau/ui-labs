import React from "react"
import { useParams } from "@remix-run/react"

import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import RouteWrapper from "~/internals/development/components/layout-wrapper.tsx"
import { ClientOnly } from "remix-utils/client-only"
import { BreadcrumbGroup } from "@cloudscape-design/components"
import MainConsoleExample from "~/internals/development/cloudscape-app/main.client.tsx"



export const handle: HandleCustom = {
  links: [
    { label: "Session", link: "", key: "session-root" },
    { label: "Service", link: "", key: "service" },
    { label: "View", link: "", key: "view" },
  ],
}


const filePath = "routes/$session.$service.$view.tsx"



export default function SessionServiceViewPage() {

  const params = useParams()

  return <ClientOnly fallback={<div>Loading...</div>}>{
    () =>
  }</ClientOnly>
}

// export default function SessionServiceViewPage() {
//   return (
//
//     <ClientOnly fallback={<div>Loading...</div>}>
//       {() => (
//         <div className="p-20">
//           <RouteWrapper filePath={filePath}>
//             <div>
//               render Component as client side. /:session/:service/:view
//             </div>
//           </RouteWrapper>
//         </div>
//       )}
//     </ClientOnly>
//
//   );
// }