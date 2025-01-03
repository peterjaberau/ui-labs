import React from "react"
import { ClientOnly } from "remix-utils/client-only"
import RouteWrapper from "~/internals/development/components/layout-wrapper";
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"


export const handle: HandleCustom = {
  links: [
    { label: "Cloudscape", link: "", key: "cloudscape" },
    { label: "Custom Page", link: "", key: "custom" },
  ],
};
const filePath = "routes/cloudscape.custom.tsx";

export default function CloudscapeCustomPage() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => (
        <RouteWrapper filePath={filePath}>
          <>Cloudscape Custom Page</>
        </RouteWrapper>
      )}
    </ClientOnly>
  );
}






