import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { TopNavigations } from "./components/top-navigations.tsx"
import { PreviewComponent } from "./components/preview-component.tsx"
import { initialConfigSnapshot } from "./stores/config.ts"
import { Board, BoardItem } from "@cloudscape-design/board-components"
import { boardI18nStrings, boardItemI18nStrings } from "./constants/component-constants"
import DynamicComponentByPath from "./components/dynamic-component/DynamicComponentByPath.tsx"
import {
  AppLayout,
  ContentLayout,
  SpaceBetween,
  SplitPanel,
  Header,
  Button,
  Box,
  HelpPanel,
  Drawer,
  SideNavigation,
} from "@cloudscape-design/components"
import { useNavigate, Routes, Route, useLocation, Outlet } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { useLoaderData } from "@remix-run/react";




export default function AppConsole({ children }: { children: React.ReactNode }) {

  const [config, setConfig] = useState(initialConfigSnapshot)
  const [sidenavItems, setSidenavItems] = useState(initialConfigSnapshot.sideNavigation.items)
  const [boardItems, setBoardItems]: any = useState(initialConfigSnapshot.boardItems)
  const [splitPanelOpen, setSplitPanelOpen] = useState(false)
  const [splitPanelPosition, setSplitPanelPosition] = useState<"side" | "bottom">("side")
  const [navigationOpen, setNavigationOpen] = React.useState(true)
  const [activeDrawerId, setActiveDrawerId] = React.useState<string | null>("drawer-inspector")
  const [activeHref, setActiveHref] = useState("/")
  const navigate = useNavigate()

  function followLink(e: CustomEvent) {
    e.preventDefault()
    navigate(e.detail.href)
  }

  return (
    <>
      <ClientOnly>
        {() => (
          <>
            <TopNavigations />

            <AppLayout
              navigation={
                <>
                  <SideNavigation
                    header={{ text: "Side Navigation", href: "/" }}
                    activeHref={activeHref}
                    onFollow={followLink}
                    items={sidenavItems as any}
                  />
                </>
              }
              navigationOpen={navigationOpen}
              onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
              disableContentPaddings={false}
              headerSelector="#h"
              contentType="default"
              content={
                <ContentLayout
                  defaultPadding={true}
                  header={
                    <Box margin={{ top: "s" }}>
                      <Header
                        variant="h1"
                        actions={
                          <SpaceBetween size="s" direction="horizontal">
                            <Button variant="icon" iconName="refresh" onClick={() => console.log("reload")}>
                              Reload
                            </Button>
                            <Button data-testid="add-widget" iconName="add-plus" onClick={() => setSplitPanelOpen(true)}>
                              Add Widget
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        Header
                      </Header>
                    </Box>
                  }
                >
                  {/*<PreviewComponent />*/}

                  <Board
                    items={boardItems as any}
                    renderItem={(item: any) => (
                      <BoardItem header={<Header>{item.header}</Header>} i18nStrings={boardItemI18nStrings}>
                        <DynamicComponentByPath loaderData={{path: item.content.path, props: item.content.props}} />
                      </BoardItem>
                    )}
                    i18nStrings={boardI18nStrings}
                    onItemsChange={(event) => setBoardItems(event.detail.items)}
                    empty="empty"
                  />
                </ContentLayout>
              }
              splitPanel={splitPanelOpen && <SplitPanel header="Splitter">splitter</SplitPanel>}
              splitPanelPreferences={{ position: splitPanelPosition }}
              splitPanelOpen={splitPanelOpen}
              onSplitPanelToggle={({ detail }) => setSplitPanelOpen(detail.open)}
              onSplitPanelPreferencesChange={({ detail }) => setSplitPanelPosition(detail.position)}
              drawers={[
                {
                  id: "drawer-1",
                  ariaLabels: {
                    closeButton: "Close",
                    drawerName: "Edit",
                    triggerButton: "Open",
                    resizeHandle: "Resize",
                  },
                  badge: false,
                  resizable: true,
                  defaultSize: 650,
                  content: <Drawer header="Templates (Tpls)">test</Drawer>,
                  trigger: {
                    iconName: "edit",
                  },
                },
                {
                  id: "drawer-2",
                  ariaLabels: {
                    closeButton: "Close",
                    drawerName: "Edit",
                    triggerButton: "Open",
                    resizeHandle: "Resize",
                  },
                  badge: false,
                  resizable: true,
                  defaultSize: 500,
                  content: <Drawer header="Example 2">Example 2 content</Drawer>,
                  trigger: {
                    iconName: "edit",
                  },
                },
                {
                  id: "drawer-inspector",
                  ariaLabels: {
                    closeButton: "Close",
                    drawerName: "Edit",
                    triggerButton: "Open",
                    resizeHandle: "Resize",
                  },
                  badge: false,
                  resizable: true,
                  defaultSize: 500,
                  content: <Drawer header="Inspectors">test</Drawer>,
                  trigger: {
                    iconName: "bug",
                  },
                },
              ]}
              onDrawerChange={(event) => setActiveDrawerId(event.detail.activeDrawerId)}
              activeDrawerId={activeDrawerId}
            />
          </>
        )}
      </ClientOnly>
    </>
  )
}
