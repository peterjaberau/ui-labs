import { renderViewMachine  } from "./renderViewMachine"
import { createActorContext } from "@xstate/react"


export const RenderViewMachineContext = createActorContext(renderViewMachine, {
  // inspect: (inpectionEvent) => {
  //   console.log(inpectionEvent)
  // },
})

export const RenderViewMachineProvider = ({ children }: any) => {
  return <RenderViewMachineContext.Provider>{children}</RenderViewMachineContext.Provider>
}
