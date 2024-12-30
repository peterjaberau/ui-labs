import DockviewMain from "~/apps/examples/dockview/pages/demo-dockview/main.client.tsx";
import React, { useEffect, useState } from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "This data came from the client loader" };
}


export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <DockviewMain />}
    </ClientOnly>
  );
}
