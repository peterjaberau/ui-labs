import JsonView from "react18-json-view"
import React from "react"
export const BoardItemAllTemplates = React.memo((props: any) => <JsonView collapsed={1} displaySize={true} ignoreLargeArray={true} src={{ ...props }} />)
