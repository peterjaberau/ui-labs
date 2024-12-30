import React from "react";
import { ClientOnly } from "remix-utils/client-only";
import { DockviewApp } from "./app";

export function SSRFallback() {
  return <div>Loading...</div>;
}

// Use named export for `DockviewMain`
export default function DockviewMain() {
  return <DockviewApp />;
}

/*

<DockviewApp>
  <GridActions>
  <PanelActions>
  <GroupActions>
  <ActionContainer>
  <EventLogs>
  <DockviewReact>
    <LeftControls>
    <RightControls>
    <PrefixHeaderControls>
    <debugPanel>
    <mapboxPanel>
    <panelBuilder>
  </DockviewReact>
</DockviewApp>


 */
