import "@cloudscape-design/global-styles/index.css"
import React from "react"
import { Outlet } from "@remix-run/react"
import { cssBundleHref } from "@remix-run/css-bundle"
import LayoutWrapper from "~/internals/development/components/router-wrapper.tsx"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"

export const links = () => {
  return [...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])].filter(Boolean)
}

export const handle: HandleCustom = {
  links: [{ label: "Session", link: "", key: "session-root" }],
}

const filePath = "routes/$session.tsx"

export default function SessionLayoutPage() {
  return <Outlet />
}

// export default function SessionLayoutPage() {
//   return (
//     <div className="p-20">
//       <LayoutWrapper filePath={filePath}>
//         renders Outlet as ssr
//         <Outlet />
//       </LayoutWrapper>
//     </div>
//   );
// }
