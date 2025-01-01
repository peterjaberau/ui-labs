import React from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import RouteWrapper from "~/internals/development/components/layout-wrapper";
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "This data came from the client loader" };
}

export const handle: HandleCustom = {
  links: [
    { label: "Cloudscape", link: "", key: "cloudscape" },
    { label: "Custom Page", link: "", key: "custom" },
  ],
};
const filePath = "routes/cloudscape.custom.tsx";


export default function CloudscapeCustomPage() {
  const data = useLoaderData<typeof clientLoader>();
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






