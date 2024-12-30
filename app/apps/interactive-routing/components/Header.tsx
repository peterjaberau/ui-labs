import { Link } from "@remix-run/react"
import GithubIcon from "~/apps/interactive-routing/components/icons/GithubIcon"
import MoonIcon from "~/apps/interactive-routing/components/icons/MoonIcon"
import SunIcon from "~/apps/interactive-routing/components/icons/SunIcon"
import { Autosuggest, TopNavigation, Button } from "@cloudscape-design/components"
import * as React from "react"

type Props = {
  toggleDarkMode: () => void
  isDarkMode: boolean
}

function Header({ toggleDarkMode, isDarkMode }: Props) {
  const [value, setValue] = React.useState("")
  const handleEnteredTextLabel = (value: string) => `Entered value: ${value}`

  return (
    <>
      <div className="fixed inset-x-0 top-0 h-14 bg-gray-200 border-b-gray-400/25 dark:bg-zinc-800 border-b dark:border-b-zinc-600/25 px-4 flex items-center justify-between z-10">
        <div className="inline-flex items-center space-x-3">
          <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-zinc-700 grid place-items-center" onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon className="w-5 h-5 " /> : <MoonIcon className="w-5 h-5 " />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
