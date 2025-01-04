import React, { useCallback, useEffect, useState } from "react"
import { TopNavigations } from "../components/top-navigations.tsx"
import { Board, BoardItem } from "@cloudscape-design/board-components"
import { boardI18nStrings, boardItemI18nStrings } from "./constants/component-constants"
import { generateDashboardItems } from "./stores/internal-database.ts"
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
import { useNavigate, Routes, Route, useLocation, Outlet, useParams } from "react-router"
import { ClientOnly } from "remix-utils/client-only"
import { useLoaderData } from "react-router"
import { PageBreadcrumbs } from "./components/page-breadcrumbs.tsx"
import DirectComponentByPath from "~/internals/development/cloudscape-app/components/dynamic-component/DirectComponentByPath.tsx"
import AmisDocsIntro from "~/internals/development/cloudscape-app/widgets/AmisDocsIntro.tsx"
import { useAmisMachine } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/amisMachineHook.ts"
import { BoardItemPreview } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/board-cards/BoardItemPreview.tsx"
import { BoardItemEmpty } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/board-cards/BoardItemEmpty.tsx"
import { BoardItemLoading } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/board-cards/BoardItemLoading.tsx"

// export async function clientLoader() {
//   await new Promise((r) => setTimeout(r, 100))
//   return {
//     message: "This data came from the client loader",
//   }
// }

// managed: cannot be customized by the user
// dynamic: can be customized by the user

const ComponentsMapping = {
  "managed-amis-widget": BoardItemPreview,
  "dynamic-amis-widget": BoardItemPreview,
  "managed-builtin-widget": BoardItemPreview,
  "dynamic-builtin-widget": BoardItemPreview,

  // boardItemComponentsList: BoardItemComponentsList,
  // boardItemPlugin: BoardItemPlugin,
  // boardItemTpls: BoardItemTpls,
  // boardItemAllPlugins: BoardItemAllPlugins,
  // boardItemAllTemplates: BoardItemAllTemplates,
  // boardItemStateContext: BoardItemStateContext,
} as any

const initialRendererProps = {
  "managed-amis-widget": {},
  "dynamic-amis-widget": {},
  "managed-builtin-widget": {},
  "dynamic-builtin-widget": {},
  boardItemComponentsList: {},
  boardItemPreview: {},
  boardItemPlugin: {},
  boardItemTpls: {},
  boardItemAllPlugins: {},
  boardItemAllTemplates: {},
  boardItemStateContext: {},
}

export default function AppConsole({ children }: { children: React.ReactNode }) {
  // const data = useLoaderData<typeof clientLoader>()

  const { session, service, view } = useParams()
  const location = useLocation()
  const [rendererProps, setRendererProps] = React.useState<any>(initialRendererProps)

  // sideNavigation, dashboardItems, parameters, database, components
  const { actor, state, allPlugins, isInitializing, isCurrentConnected, isReady,  } =
    useAmisMachine()

  useEffect(() => {
    if (view && isReady) {
      actor.send({
        type: "CONNECT_TO_COMPONENT",
        rendererName: view,
        urlParams: { session, service, view },
      })
    }
  }, [view, isReady, actor])

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
                  {
                    isReady && isCurrentConnected && (
                      <SideNavigation
                        header={{ ...state.context.internalConfig.sideNavigation.header }}
                        items={state.context.internalConfig.sideNavigation.items as any}
                        activeHref={activeHref}
                        onFollow={followLink}
                      />
                    )
                  }
                </>
              }
              breadcrumbs={<PageBreadcrumbs />}
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
                  <>
                    <Board
                      items={state.context.internalConfig.dashboardItems as any}
                      renderItem={(item: any) => {
                        const Comp = {
                          componentName: item.config.name,
                          componentRenderer: ComponentsMapping[item.config.renderAs],
                          componentFile: item.config.file,
                          componentProps: item.config.props,
                          renderMethod: item.config.renderMethod,
                        }

                        const readyAndConnected: boolean = isReady && isCurrentConnected
                        const isManaged: boolean = item.config.renderAs.includes("managed")
                        const isAmis: boolean = item.config.renderAs.includes("amis")

                        if (!isReady && isCurrentConnected) {
                          return <div>Loading dashboard...</div>
                        }

                        if (!Comp.componentRenderer) {
                          return <BoardItemEmpty />
                        }

                        return (
                          <BoardItem header={<Header>{item.title}</Header>} i18nStrings={boardItemI18nStrings as any}>
                            {isInitializing && <BoardItemLoading />}

                            {isReady && isCurrentConnected && (
                              <>
                                {isManaged && isAmis ? (
                                  <BoardItem header={<Header>{item.header}</Header>} i18nStrings={boardItemI18nStrings as any}>
                                    <BoardItemPreview {...rendererProps["managed-amis-widget"].props} />
                                  </BoardItem>
                                ) : !isManaged && isAmis ? (
                                  <BoardItem header={<Header>{item.header}</Header>} i18nStrings={boardItemI18nStrings}>
                                    <BoardItemPreview {...rendererProps["dynamic-amis-widget"].props} />
                                  </BoardItem>
                                ) : isManaged && !isAmis ? (
                                  <BoardItemPreview {...rendererProps["managed-builtin-widget"].props} />
                                ) : (
                                  <BoardItemPreview {...rendererProps["dynamic-builtin-widget"].props} />
                                )}
                              </>
                            )}
                          </BoardItem>
                        )
                      }}
                      i18nStrings={boardI18nStrings}
                      onItemsChange={(event) => console.log(event.detail.items as any)}
                      empty="empty"
                    />
                  </>
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
