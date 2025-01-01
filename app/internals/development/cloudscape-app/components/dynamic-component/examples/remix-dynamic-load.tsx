// app/routes/$componentName.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DynamicComponent from "..";

export const loader: LoaderFunction = async ({ params }) => {
  const { componentName } = params;

  if (!componentName) {
    throw new Error("Component name is required.");
  }

  // You can add authorization or conditional logic here.
  return json({ componentName });
};

export default function ComponentRoute() {
  const { componentName } : any= useLoaderData<typeof loader>();

  return (
    <div>
      <DynamicComponent componentName={componentName} />
    </div>
  );
}
