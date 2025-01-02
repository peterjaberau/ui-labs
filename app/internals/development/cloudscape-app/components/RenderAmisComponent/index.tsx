import React from "react"
import { useAmisMachine } from "./amisMachineHook"
import { useParams, useLocation } from "@remix-run/react"
import { useEffect } from "react"
import { Board, BoardItem } from "@cloudscape-design/board-components"
import { Header } from "@cloudscape-design/components"
import { boardI18nStrings } from "../../constants/component-constants.tsx"
import { componentsMapping } from "./amisComponentsMapping.ts"
import { BoardItemEmpty } from "./board-cards/BoardItemEmpty.tsx"
import { BoardItemLoading } from "./board-cards/BoardItemLoading.tsx"
import { ClientOnly } from "remix-utils/client-only"

export const StoryBoard = {
  i18nStrings: {
    empty: "No items",
  },
  boardItems: [
    {
      id: "boardItemComponentsList",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "Components List",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemPreview",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "Preview",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemPlugin",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "Plugin",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemTpls",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "Templates",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemAllPlugins",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "All Plugins",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemAllTemplates",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "All Templates",
        description: "",
        content: "",
      },
    },
    {
      id: "boardItemStateContext",
      definition: {},
      columnSpan: 2,
      rowSpan: 4,
      data: {
        title: "State Context",
        description: "",
        content: "",
      },
    },
  ],
}

const initialRendererProps = {
  boardItemComponentsList: {},
  boardItemPreview: {},
  boardItemPlugin: {},
  boardItemTpls: {},
  boardItemAllPlugins: {},
  boardItemAllTemplates: {},
  boardItemStateContext: {},
}

const RenderAmisComponent = () => {
  const { id } = useParams() as any

  const location = useLocation()

  const { actor, state, allPlugins, isInitializing, isCurrentConnected, isReady } = useAmisMachine()
  const [boardItems, setBoardItems] = React.useState(StoryBoard.boardItems)
  const [rendererProps, setRendererProps] = React.useState<any>(initialRendererProps)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  useEffect(() => {
    console.log("---location----", location)
    console.log("---id----", id)

    if (id && isReady) {
      actor.send({
        type: "CONNECT_TO_COMPONENT",
        rendererName: id,
      })
    }
  }, [id, isReady, actor])

  useEffect(() => {
    if (isReady) {
      setRendererProps({
        boardItemComponentsList: { props: { plugins: state.context.metadata.plugins } },
        boardItemPreview: { props: state.context.current.currentPlugin.scaffold },
        boardItemPlugin: { props: state.context.current.currentPlugin },
        boardItemTpls: { props: {} },
        boardItemAllPlugins: { props: allPlugins },
        boardItemAllTemplates: { props: state.context.tpls },
        boardItemStateContext: { props: state.context },
      })
    }
  }, [isReady])

  return (
    <>
      <ClientOnly fallback={<div>rendering...</div>}>
        {() => (
          <Board
            items={boardItems}
            renderItem={(item: any): any => {
              const Component = componentsMapping[item.id] as any
              const componentProps = rendererProps[item.id].props

              {
                if (isReady && isCurrentConnected) {
                  console.log("componentProps---", item.id, componentProps)
                }
              }

              if (!Component) {
                return <BoardItemEmpty />
              }

              return (
                <BoardItem header={<Header>{item.data.title}</Header>} i18nStrings={StoryBoard.i18nStrings as any}>
                  {isInitializing && <BoardItemLoading />}
                  {isReady && isCurrentConnected && <Component {...componentProps} />}
                  {/*{isCurrentConnected && <Component {...componentProps} />}*/}
                </BoardItem>
              )
            }}
            i18nStrings={boardI18nStrings}
            onItemsChange={(event) => console.log("onItemsChange----", event.detail.items as any)}
            empty="empty"
          />
        )}
      </ClientOnly>
    </>
  )
}

export default RenderAmisComponent
{
  /*<SpinnerErrorComponent isLoading={isLoading} error={error} />*/
}
{
  /*{!isLoading && !error && (*/
}
