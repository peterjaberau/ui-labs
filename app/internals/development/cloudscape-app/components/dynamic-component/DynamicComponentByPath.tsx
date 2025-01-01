import React, { useEffect, useState } from "react";

type DynamicComponentByPathProps = {
  loaderData: { path: string; props: Record<string, any> };
};

export default function DynamicComponentByPath({ loaderData }: DynamicComponentByPathProps) {
  const { path, props } = loaderData;
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Use dynamic import for ES modules
    import(/* @vite-ignore */ path)
      .then((mod) => {
        if (isMounted) {
          setComponent(() => mod.default || mod);
        }
      })
      .catch((err) => {
        console.error(`Error loading component at path: ${path}`, err);
        if (isMounted) {
          setComponent(() => null);
        }
      });

    return () => {
      isMounted = false; // Clean up if component unmounts
    };
  }, [path]);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component {...props} />;
}




// import React, { ComponentType } from "react";
//
// type DynamicComponentProps = {
//   loaderData: { path: string; props: Record<string, any> };
// };
//
// export default function DynamicComponentByPath({ loaderData }: DynamicComponentProps) {
//   const { path, props } = loaderData;
//
//   // Dynamically resolve the component
//   const Component = React.useMemo<ComponentType<any> | null>(() => {
//     try {
//       const module = require(path);
//       return module.default || module;
//     } catch (err) {
//       console.error(`Error loading component at path: ${path}`, err);
//       return null;
//     }
//   }, [path]);
//
//   if (!Component) {
//     return <div>Failed to load component</div>;
//   }
//
//   return <Component {...props} />;
// }
