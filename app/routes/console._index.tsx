import React from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import ConsoleMainExample from "~/apps/examples/console/pages/main.client.tsx"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "This data came from the client loader" };
}

export default function ConsoleIndex() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <ConsoleMainExample />}
    </ClientOnly>
  );
}
