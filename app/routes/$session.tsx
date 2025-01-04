import "@cloudscape-design/global-styles/index.css?url"
import React from "react"
import { Outlet } from "react-router"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import { filePathLabel } from "~/lib/debug.ts"

export const handle: HandleCustom = {
  links: [{ label: "Session", link: "", key: "session-root" }],
}

export default function SessionLayoutPage() {
  return (
     <Outlet />
  )
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
