import React, { useEffect, useState } from "react"
import {
  SideNavigation,
  Drawer,
  AppLayout,
  ContentLayout,
  SpaceBetween,
  SplitPanel,
  Header,
  Button,
  Box,
} from "@cloudscape-design/components"
import TopNavigations from "~/internals/development/cloudscape-app/components/top-navigations"
import { Outlet } from "react-router"
import type { HandleCustom } from "~/internals/development/components/breadcrumb-for-wrappers.tsx"
import { useNavigate, useParams } from "@remix-run/react"
import { useAmisMachine } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/amisMachineHook.ts"

export const handle: HandleCustom = {
  links: [
    { label: "Session", link: "", key: "session-root" },
    { label: "Service", link: "", key: "service" },
  ],
}

export default function SessionServiceLayoutPage() {
  const { session, service, view } = useParams()
  const [activeHref, setActiveHref] = useState("/")
  const navigate = useNavigate()
  const { actor, state, ctx, parameters, isInitializing, isCurrentConnected, isReady } =
    useAmisMachine()

  useEffect(() => {
    if (service && isReady) {
      // actor.send({
      //   type: "CONNECT_TO_COMPONENT",
      //   rendererName: view,
      //   urlParams: { session, service },
      // })
    }
  }, [isReady, actor])

  const handleSplitPanelOpen = () => {
    actor.send({ type: "TOGGLE_CHANGE", scope: "internalState", key: "splitPanelOpen" })
  }

  const handleNavigationChange = () => {
    actor.send({ type: "TOGGLE_CHANGE", scope: "internalState", key: "navigationOpen" })
  }

  const handleSplitPanelPositionChange = (e: any) => {
    actor.send({
      type: "STRING_CHANGE",
      scope: "internalState",
      key: "splitPanelPosition",
      value: e.detail.position,
    })
  }

  const handleDrawerIdChange = (e: any) => {
    actor.send({
      type: "STRING_CHANGE",
      scope: "internalState",
      key: "activeDrawerId",
      value: e.detail.activeDrawerId,
    })
  }

  function followLink(e: CustomEvent) {
    e.preventDefault()
    navigate(e.detail.href)
  }

  return isReady && !isCurrentConnected && service ? (
    <>
      <TopNavigations />

      <AppLayout
        navigation={
          <>
            {isReady && isCurrentConnected && (
              <SideNavigation
                header={{ ...state.context.internalConfig.sideNavigation.header }}
                items={state.context.internalConfig.sideNavigation.items as any}
                activeHref={activeHref}
                onFollow={followLink}
              />
            )}
          </>
        }
        // breadcrumbs={<PageBreadcrumbs />}
        navigationOpen={ctx.internalState.navigationOpen}
        onNavigationChange={handleNavigationChange}
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
                      <Button
                        variant="icon"
                        iconName="refresh"
                        onClick={() => console.log("reload")}
                      >
                        Reload
                      </Button>
                      <Button
                        data-testid="add-widget"
                        iconName="add-plus"
                        onClick={handleSplitPanelOpen}
                      >
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
            <>
              <Outlet />
            </>
          </ContentLayout>
        }
        splitPanel={
          ctx.internalState.splitPanelOpen && <SplitPanel header="Splitter">splitter</SplitPanel>
        }
        splitPanelPreferences={{ position: ctx.internalState.splitPanelPosition }}
        splitPanelOpen={ctx.internalState.splitPanelOpen}
        onSplitPanelToggle={handleSplitPanelOpen}
        onSplitPanelPreferencesChange={handleSplitPanelPositionChange}
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
        onDrawerChange={handleDrawerIdChange}
        activeDrawerId={ctx.internalState.activeDrawerId}
      />
    </>
  ) : (
    <div>loading....</div>
  )
}
