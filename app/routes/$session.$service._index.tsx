import React from "react"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"

export const handle: HandleCustom = {
  links: [
    { label: "Session", link: "", key: "session-root" },
    { label: "Service", link: "", key: "service" },
    { label: "Default", link: "", key: "default" },
  ],
};
const filePath = "routes/$session.$service._index.tsx"

export default function SessionServiceIndexPage() {
  // const data = useLoaderData<typeof clientLoader>()
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
