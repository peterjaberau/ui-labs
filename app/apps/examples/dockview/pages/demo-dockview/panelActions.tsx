import { DockviewApi, IDockviewPanel } from "~/apps/dockview/view"
import * as React from "react"
import { Button, Card, Flex, Space } from "antd"
import { Eye, EyeOff, Group, ExternalLink, X } from "lucide-react"

const PanelAction = (props: { panels: string[]; api: DockviewApi; activePanel?: string; panelId: string }) => {
  const [focused, setFocused] = React.useState<boolean>(false)

  const onClick = () => {
    props.api.getPanel(props.panelId)?.focus()
    setFocused(true)
  }

  React.useEffect(() => {
    const panel = props.api.getPanel(props.panelId)
    if (panel) {
      const disposable = panel.api.onDidVisibilityChange((event) => {
        setVisible(event.isVisible)
      })
      setVisible(panel.api.isVisible)

      return () => {
        disposable.dispose()
      }
    }
  }, [props.api, props.panelId])

  const [panel, setPanel] = React.useState<IDockviewPanel | undefined>(undefined)

  React.useEffect(() => {
    const list = [
      props.api.onDidLayoutFromJSON(() => {
        setPanel(props.api.getPanel(props.panelId))
      }),
    ]

    if (panel) {
      const disposable = panel.api.onDidVisibilityChange((event) => {
        setVisible(event.isVisible)
      })
      setVisible(panel.api.isVisible)

      list.push(disposable)
    }

    setPanel(props.api.getPanel(props.panelId))

    return () => {
      list.forEach((l) => l.dispose())
    }
  }, [props.api, props.panelId])

  const [visible, setVisible] = React.useState<boolean>(true)

  return (
    <Card
      size={"small"}
      title={props.panelId}
      onClick={onClick}
      style={{ backgroundColor: props.activePanel === props.panelId ? "#e6f7ff" : "white" }}
    >
      <Space>
        <Button
          icon={<Group />}
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addFloatingGroup(panel)
            }
          }}
        />
        <Button
          icon={<ExternalLink />}
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addPopoutGroup(panel)
            }
          }}
        />
        <Button
          icon={<X />}
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            panel?.api.close()
          }}
        />
        <Button title="Panel visibility cannot be edited manually." disabled={true} icon={visible ? <Eye /> : <EyeOff />} />
      </Space>
    </Card>
  )
}

export const PanelActions = (props: { panels: string[]; api: DockviewApi; activePanel?: string }) => {
  return (
    <Space direction="vertical" style={{ width: '250px' }}>
      {props.panels.map((id, index) => {
        return <PanelAction key={`${id}_${index}`} {...props} panelId={id} />
      })}
    </Space>
  )
}
