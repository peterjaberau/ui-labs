import dockStyles from "~/apps/examples/dockview/pages/styles/styles.css?url";
import dockviewStyles from "~/apps/examples/dockview/pages/styles/dockview-origin1.css?url";
// import dockviewStyles from "~/apps/examples/dockview-nocobase/dockview.css?url";
import dockAppStyles from "~/apps/examples/dockview/pages/styles/appstyles.css?url";
import { cssBundleHref } from "@remix-run/css-bundle";
import React, { useEffect } from "react"
import { Outlet } from "@remix-run/react";


// Define `links` function
export const links = () => {
  const styles = [
    { rel: "stylesheet", href: dockStyles },
    { rel: "stylesheet", href: dockviewStyles },
    { rel: "stylesheet", href: dockAppStyles },
  ];

  return [
    cssBundleHref && { rel: "stylesheet", href: cssBundleHref },
    ...styles,
  ].filter(Boolean);
};



export default function DockviewLayout() {
  return <Outlet />;
}


