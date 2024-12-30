import {
  DockviewDefaultTab,
  DockviewReact,
  DockviewReadyEvent,
  IDockviewPanelHeaderProps,
  IDockviewPanelProps,
  DockviewApi,
} from "~/apps/dockview/view"
import * as React from "react"
import { defaultConfig } from "./defaultLayout"
import { GridActions } from "./gridActions"
import { PanelActions } from "./panelActions"
import { GroupActions } from "./groupActions"
import { LeftControls, PrefixHeaderControls, RightControls } from "./controls"
import { Table, usePanelApiMetadata } from "./debugPanel"
import { ProCard } from "@ant-design/pro-components"
import { Button, Flex, Space, Timeline } from "antd"
import { Layout } from "antd"
import { Trash2, Settings, RotateCcw, Terminal, EyeOff, Eye } from 'lucide-react';

const { Sider, Content } = Layout

const DebugContext = React.createContext<boolean>(false)

const Option = (props: { title: string; onClick: () => void; value: string }) => {
  return (
    <div>
      <span>{`${props.title}: `}</span>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

const components = {
  default: (props: IDockviewPanelProps) => {
    const isDebug = React.useContext(DebugContext)
    const metadata = usePanelApiMetadata(props.api)

    return (
      <div
        style={{
          height: "100%",
          overflow: "auto",
          position: "relative",
          padding: 5,
          border: isDebug ? "2px dashed orange" : "",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            fontSize: "42px",
            opacity: 0.5,
          }}
        >
          {props.api.title}
        </span>

        {isDebug && (
          <div style={{ fontSize: "0.8em" }}>
            <Option
              title="Panel Rendering Mode"
              value={metadata.renderer.value}
              onClick={() => props.api.setRenderer(props.api.renderer === "always" ? "onlyWhenVisible" : "always")}
            />

            <Table data={metadata} />
          </div>
        )}
      </div>
    )
  },
  nested: (props: IDockviewPanelProps) => {
    return (
      <DockviewReact
        components={components}
        onReady={(event: DockviewReadyEvent) => {
          event.api.addPanel({ id: "panel_1", component: "default" })
          event.api.addPanel({ id: "panel_2", component: "default" })
          event.api.addPanel({
            id: "panel_3",
            component: "default",
          })

          event.api.onDidRemovePanel((e) => {
            console.log("remove", e)
          })
        }}
        className={"dockview-theme-light"}
      />
    )
  },

  // iframe: (props: IDockviewPanelProps) => {
  //   return (
  //     <iframe
  //       onMouseDown={() => {
  //         if (!props.api.isActive) {
  //           props.api.setActive()
  //         }
  //       }}
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //       }}
  //       src="https://dockview.dev"
  //     />
  //   )
  // },
}

const headerComponents = {
  default: (props: IDockviewPanelHeaderProps) => {
    const onContextMenu = (event: React.MouseEvent) => {
      event.preventDefault()
      alert("context menu")
    }
    return <DockviewDefaultTab onContextMenu={onContextMenu} {...props} />
  },
}

const colors = ["rgba(255,0,0,0.2)", "rgba(0,255,0,0.2)", "rgba(0,0,255,0.2)", "rgba(255,255,0,0.2)", "rgba(0,255,255,0.2)", "rgba(255,0,255,0.2)"]
let count = 0

const WatermarkComponent = () => {
  return <div>custom watermark</div>
}

export const DockviewApp = (props: { theme?: string }) => {
  const [logLines, setLogLines] = React.useState<{ text: string; timestamp?: Date; backgroundColor?: string }[]>([])

  const [panels, setPanels] = React.useState<string[]>([])
  const [groups, setGroups] = React.useState<string[]>([])
  const [api, setApi] = React.useState<DockviewApi>()

  const [activePanel, setActivePanel] = React.useState<string>()
  const [activeGroup, setActiveGroup] = React.useState<string>()

  const [pending, setPending] = React.useState<{ text: string; timestamp?: Date }[]>([])

  const addLogLine = (message: string) => {
    setPending((line) => [{ text: message, timestamp: new Date() }, ...line])
  }

  React.useLayoutEffect(() => {
    if (pending.length === 0) {
      return
    }
    const color = colors[count++ % colors.length]
    setLogLines((lines) => [...pending.map((_) => ({ ..._, backgroundColor: color })), ...lines])
    setPending([])
  }, [pending])

  const onReady = (event: DockviewReadyEvent) => {
    setApi(event.api)

    event.api.onDidAddPanel((event) => {
      setPanels((_) => [..._, event.id])
      addLogLine(`Panel Added ${event.id}`)
    })
    event.api.onDidActivePanelChange((event) => {
      setActivePanel(event?.id)
      addLogLine(`Panel Activated ${event?.id}`)
    })
    event.api.onDidRemovePanel((event) => {
      setPanels((_) => {
        const next = [..._]
        next.splice(
          next.findIndex((x) => x === event.id),
          1,
        )

        return next
      })
      addLogLine(`Panel Removed ${event.id}`)
    })

    event.api.onDidAddGroup((event) => {
      setGroups((_) => [..._, event.id])
      addLogLine(`Group Added ${event.id}`)
    })

    event.api.onDidMovePanel((event) => {
      addLogLine(`Panel Moved ${event.panel.id}`)
    })

    event.api.onDidMaximizedGroupChange((event) => {
      addLogLine(`Group Maximized Changed ${event.group.api.id} [${event.isMaximized}]`)
    })

    event.api.onDidRemoveGroup((event) => {
      setGroups((_) => {
        const next = [..._]
        next.splice(
          next.findIndex((x) => x === event.id),
          1,
        )

        return next
      })
      addLogLine(`Group Removed ${event.id}`)
    })

    event.api.onDidActiveGroupChange((event) => {
      setActiveGroup(event?.id)
      addLogLine(`Group Activated ${event?.id}`)
    })

    const state = localStorage.getItem("dv-demo-state")
    if (state) {
      try {
        event.api.fromJSON(JSON.parse(state))
        return
      } catch {
        localStorage.removeItem("dv-demo-state")
      }
      return
    }

    defaultConfig(event.api)
  }

  const [watermark, setWatermark] = React.useState<boolean>(false)

  const [gapCheck, setGapCheck] = React.useState<boolean>(false)

  const css = React.useMemo(() => {
    if (!gapCheck) {
      return {}
    }

    return {
      "--dv-group-gap-size": "0.5rem",
      "--demo-border": "5px dashed purple",
    } as React.CSSProperties
  }, [gapCheck])

  const [showLogs, setShowLogs] = React.useState<boolean>(false)
  const [debug, setDebug] = React.useState<boolean>(false)

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider width="25%" style={{ overflowY: "scroll" }}>
        <Flex vertical={true} gap={8} style={{ padding: '10px'}}>

          <ProCard title="Grid Actions" size={'default'} boxShadow={true} collapsible={true} defaultCollapsed={true}>
            <GridActions api={api} toggleCustomWatermark={() => setWatermark(!watermark)} hasCustomWatermark={watermark} />
          </ProCard>

          <ProCard title="Panel Actions" collapsible={true} defaultCollapsed={true}>
            {api && <PanelActions api={api} panels={panels} activePanel={activePanel} />}
          </ProCard>

          <ProCard title="Group Actions" collapsible={true} defaultCollapsed={true}>
            {api && <GroupActions api={api} groups={groups} activeGroup={activeGroup} />}
          </ProCard>

          <ProCard
            title="Logs"
            boxShadow={true}
          >
            <Space direction={'horizontal'} wrap={true} >

              <Button onClick={() => setLogLines([])} icon={<Trash2 />}/>
              <Button onClick={() => setDebug(!debug)} icon={<Settings />}/>
              {showLogs && <Button onClick={() => setLogLines([])} icon={<RotateCcw />}/>}
              <Button onClick={() => setShowLogs(!showLogs)} icon={showLogs ? <EyeOff /> : <Eye />}/>


            </Space>

            {showLogs && (
              <Timeline>
                {logLines.map((line, i) => (
                  <Timeline.Item key={i} color={line.backgroundColor}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {logLines.length - i} |{line.timestamp && line.timestamp.toISOString().substring(11, 23)} |{line.text}
                    </div>
                  </Timeline.Item>
                ))}
              </Timeline>
            )}
          </ProCard>
        </Flex>
      </Sider>
      <Layout  style={{ height: "100%" }}>
        <Content style={{ overflow: "hidden", height: "100%" }}>
          <ProCard title="Panels" boxShadow={true} style={{ height: "100%" }}>

          <DebugContext.Provider value={debug}>
              <DockviewReact
                components={components}
                defaultTabComponent={headerComponents.default}
                rightHeaderActionsComponent={RightControls}
                leftHeaderActionsComponent={LeftControls}
                prefixHeaderActionsComponent={PrefixHeaderControls}
                watermarkComponent={watermark ? WatermarkComponent : undefined}
                onReady={onReady}
                className={props.theme || "dockview-theme-light"}
              />
            </DebugContext.Provider>
          </ProCard>
        </Content>
      </Layout>

    </Layout>
  )
}
