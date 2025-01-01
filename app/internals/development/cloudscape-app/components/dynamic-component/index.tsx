// app/components/DynamicComponent.tsx
import React, { Suspense, lazy, ComponentType } from "react";
import { componentRegistry } from "../../utils/componentRegistry";

type DynamicComponentProps = {
  componentName: string; // Name of the component to load dynamically
  props?: Record<string, any>; // Props to pass to the component
};

function DynamicComponent({ componentName, props = {} }: any) {
  const Component = lazy(() =>
    componentRegistry
      .resolve(componentName)
      .then((mod: any) => {
        console.log(`Successfully resolved component: ${componentName}`);
        return { default: mod.default };
      })
      .catch((err) => {
        console.error(`Failed to resolve component "${componentName}":`, err);
        throw err;
      })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
export default DynamicComponent;
