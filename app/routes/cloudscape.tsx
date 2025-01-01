import "@cloudscape-design/global-styles/index.css"
import React from "react"
import { Outlet } from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import LayoutWrapper from "~/internals/development/components/router-wrapper.tsx"

export const links = () => {
  return [
    ...(cssBundleHref
      ? [{ rel: "stylesheet", href: cssBundleHref }]
      : []),
  ].filter(Boolean);
};

const filePath = "routes/$session.tsx";

export default function CloudscapeLayout() {
  return (
    <div className="p-20">
    <LayoutWrapper filePath={filePath}>
      <Outlet />
    </LayoutWrapper>
    </div>
  );
}
