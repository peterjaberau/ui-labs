import "@cloudscape-design/global-styles/index.css?url"
import React from "react"
import { Outlet } from "react-router";
import LayoutWrapper from "~/internals/development/components/router-wrapper.tsx"


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
