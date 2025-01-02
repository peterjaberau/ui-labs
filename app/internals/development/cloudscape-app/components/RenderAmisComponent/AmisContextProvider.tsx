import { amisCreateMachine  } from "./amisMachine.ts"
import { createActorContext } from "@xstate/react"


export const AmisMachineContext = createActorContext(amisCreateMachine, {
  // inspect: (inpectionEvent) => {
  //   console.log(inpectionEvent)
  // },
})

export const AmisMachineProvider = ({ children }: any) => {
  return <AmisMachineContext.Provider>{children}</AmisMachineContext.Provider>
}
