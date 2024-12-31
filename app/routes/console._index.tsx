import MainConsoleExample from "~/internals/development/examples/console/main.client.tsx"
import React from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "This data came from the client loader" };
}

export default function ConsoleIndex() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <MainConsoleExample/>}
    </ClientOnly>
  );
}
