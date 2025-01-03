import React, { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils/client-only"
import AmisDocsIntro from "~/internals/development/cloudscape-app/widgets/AmisDocsIntro.tsx"

type DynamicComponentByPathProps = {
  loaderData: { path: string; props: Record<string, any> };
};

export default function DirectComponentByPath({ children }: { children: React.ReactNode }) {


  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
    //   <AmisDocsIntro />
    // </React.Suspense>

    <>{children}</>

    // <ClientOnly fallback={<div>...loading</div>}>
    //   {
    //     () => (
    //       <AmisDocsIntro />
    //     )
    //   }
    // </ClientOnly>
  )
}
