import "@cloudscape-design/global-styles/index.css"
import React from "react"
import { Outlet, useParams } from "@remix-run/react"
import { cssBundleHref } from "@remix-run/css-bundle"
import LayoutWrapper from "~/internals/development/components/router-wrapper.tsx"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import RouteWrapper from "~/internals/development/components/layout-wrapper.tsx"
import { ClientOnly } from "remix-utils/client-only"
import { BreadcrumbGroup } from "@cloudscape-design/components"

export const links = () => {
  return [...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])].filter(Boolean)
}

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

  console.log(params)


  return <ClientOnly fallback={<div>Loading...</div>}>{() => <div>render Component as client side. /:session/:service/:view</div>}</ClientOnly>
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
