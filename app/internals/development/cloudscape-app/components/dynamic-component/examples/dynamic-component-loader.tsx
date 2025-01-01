// app/routes/$componentName.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DynamicComponent from "..";

export const loader: LoaderFunction = async ({ params }) => {
  const { componentName } = params;

  if (!componentName) {
    throw new Error("Component name is required.");
  }

  // Example: Fetch props from a database or API if necessary
  const props = componentName === "Profile" ? { userId: 123 } : { title: "Welcome!" };

  return json({ componentName, props });
};

export default function ComponentRoute() {
  const { componentName, props }: any = useLoaderData<typeof loader>();

  return (
    <div>
      <DynamicComponent componentName={componentName} props={props} />
    </div>
  );
}
