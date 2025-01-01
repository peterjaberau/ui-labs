import React from "react"
import AppConsole from "./app.tsx"


export default function MainConsoleExample({ children }: { children: React.ReactNode }) {

  return (
    <AppConsole>
      {children}
    </AppConsole>
  )
}
