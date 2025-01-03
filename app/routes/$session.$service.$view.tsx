import "@cloudscape-design/global-styles/index.css?url"
import React from "react"
import { useParams } from "react-router"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import { ClientOnly } from "remix-utils/client-only"


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
