// @ts-ignore
import tailwindCss from "./tailwind.css?url"

// amis related imports
import "amis/lib/themes/cxd.css?url";
import "amis/lib/helper.css?url";
import "amis/sdk/iconfont.css?url";
import "@fortawesome/fontawesome-free/css/all.css?url";
// import 'amis/lib/themes/antd.css'

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useMatches, useLoaderData, isRouteErrorResponse } from "@remix-run/react"
// import { AmisMachineProvider } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/AmisContextProvider.tsx"
import { cssBundleHref } from "@remix-run/css-bundle"
import { RenderViewMachineProvider } from "~/internals/development/cloudscape-app/components/render-view/helpers/RenderViewContextProvider.tsx"

// @ts-ignore
export const links: LinksFunction = () => {
  const styles = [
    { href: tailwindCss, as: "style" },
  ]

  const links = [
    cssBundleHref && { rel: "preload", href: cssBundleHref, as: "style" },
    ...styles.map(({ href, as }) => ({ rel: "preload", href, as })),
    ...styles.map(({ href }) => ({ rel: "stylesheet", href })),
    cssBundleHref && { rel: "stylesheet", href: cssBundleHref },
  ]

  return links.filter(Boolean) as Array<any>
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

      <RenderViewMachineProvider>
      {/*<AmisMachineProvider>*/}
        {children}
      {/*</AmisMachineProvider>*/}
      </RenderViewMachineProvider>
      <ScrollRestoration />
      <Scripts />

        {/*<RootMachineProvider>*/}
          {/*<AmisMachineProvider>*/}
          {/*  <CoreEditorMachineProvider>*/}
          {/*    <CategoryProvider>*/}
          {/*      <SearchProvider>{children}</SearchProvider>*/}
          {/*    </CategoryProvider>*/}
          {/*  </CoreEditorMachineProvider>*/}
          {/*</AmisMachineProvider>*/}
        {/*</RootMachineProvider>*/}

        {/*<LiveReload port={8002} />*/}
        {/*<LiveReload />*/}
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: any) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto space-y-4 p-4 pt-16">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{message}</h1>
        <p>{details}</p>
      </div>
      {stack && (
        <pre className="w-full overflow-x-auto rounded-lg bg-destructive/5 p-4 text-sm text-destructive">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
