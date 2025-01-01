import React, { ReactNode } from "react"
import { Button } from "antd"


export default function WidgetAntdButton({ children, ...props }: { children?: ReactNode, props: any }) {

  return (
    <Button {...props}>
      {children}
    </Button>

  )
}
