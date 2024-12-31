// import {
//   isRouteErrorResponse,
//   Links,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "react-router";

// @ts-ignore
import tailwindCss from "./tailwind.css?url"
// @ts-ignore
import customCss from "~/internals/development/styles/custom.css?url"
// @ts-ignore

// import "./tailwind.css";
// import "./styles/custom.css?url";

import colorsCss from "~/internals/development/styles/colors.css?url"
// import { LiveReload, useMatches, useLoaderData } from "@remix-run/react"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useMatches, useLoaderData, isRouteErrorResponse } from "@remix-run/react"
import { SearchProvider } from "~/internals/development/llm-resources/app/context/SearchContext"
import { CategoryProvider } from "~/internals/development/llm-resources/app/context/CategoryContext"
import { RootMachineProvider } from "~/internals/development/code/examples/root/RootMachineContext.tsx"
import { CoreEditorMachineProvider } from "~/internals/development/code/examples/amis-editor/CoreEditorMachineContext.tsx"
import { AmisMachineProvider } from "~/internals/development/code/examples/amis-machine/AmisMachineContext.tsx"

import { cssBundleHref } from "@remix-run/css-bundle"

// @ts-ignore
export const links: LinksFunction = () => {
  const styles = [
    { href: tailwindCss, as: "style" },
    { href: customCss, as: "style" },
    { href: colorsCss, as: "style" },
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
        {/*<RootMachineProvider>*/}
          {/*<AmisMachineProvider>*/}
          {/*  <CoreEditorMachineProvider>*/}
              <CategoryProvider>
                <SearchProvider>{children}</SearchProvider>
              </CategoryProvider>
          {/*  </CoreEditorMachineProvider>*/}
          {/*</AmisMachineProvider>*/}
        {/*</RootMachineProvider>*/}
        <ScrollRestoration />
        <Scripts />
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
