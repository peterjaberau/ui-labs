import React from "react"
import { ClientOnly } from "remix-utils/client-only"
import Header from "./components/header"
import AppShell from "./components/app-shell"
import SideMenu from "./components/side-menu"

export default function AppConsole() {
  return (
    <>
      <ClientOnly>
        {() => (
          <AppShell
            header={<Header actions={"ACTIONS"} logo={"LOGO"} nav={"NAV"} />}
            leftPanel={<SideMenu />}
          >
            <div>Content</div>
          </AppShell>
        )}
      </ClientOnly>
    </>
  )
}
