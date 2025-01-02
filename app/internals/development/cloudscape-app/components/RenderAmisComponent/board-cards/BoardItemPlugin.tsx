import React from "react"
import JsonView from "react18-json-view"

export const BoardItemPlugin = React.memo((props: any) => <JsonView collapsed={1} displaySize={true} ignoreLargeArray={true} src={{ ...props }} />)
