import React from "react"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 100));
  return { message: "This data came from the client loader" };
}
// Main component for the index route
export default function Index() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <div>test</div>}
    </ClientOnly>
  );
}
