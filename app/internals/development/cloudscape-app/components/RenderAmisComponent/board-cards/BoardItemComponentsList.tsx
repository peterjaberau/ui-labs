import React from "react"
import { useAmisMachine } from "../amisMachineHook"
import { useNavigate } from "react-router"
import { Autosuggest } from "@cloudscape-design/components"

export const BoardItemComponentsList = React.memo((props: any) => {
  // const [loading, setLoading] = React.useState(true)
  const { actor, state } = useAmisMachine()

  const [value, setValue] = React.useState("") as any
  const [selected, setSelected] = React.useState(null)
  const navigate = useNavigate();



  const handleSelect = (e: any) => {
    console.log(e)
    setValue(e.detail.value)
    navigate(`/stories/render/${e.detail.value}`)

    actor.send({
      type: "CONNECT_TO_COMPONENT",
      rendererName: e.detail.value,
    })


  }
  return <Autosuggest
    ariaLabel="Autosuggest example with suggestions"
    onChange={handleSelect}
    value={value}
    options={props.plugins}
    placeholder="Enter value"
    enteredTextLabel={(value) => `"${value}"`}
    empty="No matches found"
  />
})
