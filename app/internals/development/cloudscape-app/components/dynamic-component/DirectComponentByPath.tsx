import React, { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils/client-only"
import AmisDocsIntro from "~/internals/development/cloudscape-app/widgets/AmisDocsIntro.tsx"

type DynamicComponentByPathProps = {
  loaderData: { path: string; props: Record<string, any> };
};

export default function DirectComponentByPath({ loaderData }: DynamicComponentByPathProps) {


  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
    //   <AmisDocsIntro />
    // </React.Suspense>

    <ClientOnly fallback={<div>...loading</div>}>
      {
        () => (
          <AmisDocsIntro />
        )
      }
    </ClientOnly>
  )
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
