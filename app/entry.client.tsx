import { I18nextProvider, i18next } from "~/libs/i18n/client"
import { startTransition, useState } from "react"

import { BrowserRouter } from "react-router"
import { SettingContext } from "~/context"
import StoreProvider from "./store-provider"
import { hydrateRoot } from "react-dom/client"
import { AmisMachineProvider } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/AmisContextProvider.tsx"

const AppClient = () => {
  const [theme, setTheme] = useState({
    colorPrimary: "#00b96b",
    layout: "mix",
  })
  const [lang, setLang] = useState("en-US")
  return (
    <AmisMachineProvider>
      <SettingContext.Provider value={{ theme, setTheme, lang, setLang }}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter />
        </I18nextProvider>
      </SettingContext.Provider>
    </AmisMachineProvider>
  )
}

async function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <AppClient />,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
