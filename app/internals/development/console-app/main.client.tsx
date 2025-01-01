import React from "react"
import AppConsole from "./app.tsx"

export function SSRFallback() {
  return <div>Loading...</div>;
}

export default function MainConsoleExample() {

  return (
    <AppConsole />
  )
}
