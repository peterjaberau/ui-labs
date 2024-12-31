import { useCallback, useEffect, useState } from "react"
import * as React from "react"
import JsonView from "react18-json-view"
import { useRootMachine } from "./root/rootMachineStore.ts"

export const StoriesPage = () => {
  // const { statusMessage: statusMessageStories }: any = useChildMachineState("stories", (state: any) => state.context)
  // const storiesMachine = useChildMachine("stories")
  const { global, components, actor } = useRootMachine()


  const [splitPanelOpen, setSplitPanelOpen] = useState(false)
  const [splitPanelPosition, setSplitPanelPosition] = useState<"side" | "bottom">("side")
  const [navigationOpen, setNavigationOpen] = React.useState(true)
  const [activeDrawerId, setActiveDrawerId] = React.useState<string | null>("drawer-inspector")
  const [items, setItems] = React.useState<any>([])
  const [activeHref, setActiveHref] = useState('/');




  return (
    <>
    <JsonView src={global} collapsed={true} />
    </>
  )
}
