import "react18-json-view/src/style.css"
// @ts-ignore
import styles from './styles.css?url'
// // @ts-ignore
// import dockStyles from '~/apps/examples/dockview/pages/demo-dockview/styles/styles.css?url'
// // @ts-ignore
// import dockviewStyles from '~/apps/examples/dockview/pages/demo-dockview/styles/dockview.css?url'
// // @ts-ignore
// import dockAppStyles from "~/apps/examples/dockview/pages/demo-dockview/styles/appstyles.css?url";
//


import React from "react"
import JsonView from "react18-json-view"
import CloudscapeThemeProvider from "~/apps/design-systems/cloudscape/components/CloudscapeThemeProvider"

import type { MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useMatches, useLoaderData } from "@remix-run/react"

import Sidebar from "~/apps/interactive-routing/components/Sidebar"
import Header from "~/apps/interactive-routing/components/Header"
import Breadcrumbs from "~/apps/interactive-routing/components/Breadcrumbs"
import LayoutWrapper from "~/apps/interactive-routing/components/wrappers/LayoutWrapper"
import { useCallback, useMemo, useState } from "react"
import { json, LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare"
import { createAccessToken, createActorFetch } from "~/packages/actor-kit/server"
import { UserProvider } from "./user.context"
import { UserMachine } from "./user.machine"
import { cssBundleHref } from '@remix-run/css-bundle'


export const meta: MetaFunction = () => {
  return [
    { title: "Remix Routing V2" },
    {
      property: "og:title",
      content: "Home Page",
    },
    {
      name: "description",
      content: "App to visualize remix routing version 2",
    },
  ]
}

// @ts-ignore
export const links: LinksFunction = () => {
  return [
    cssBundleHref ? { rel: 'preload', href: cssBundleHref, as: 'style' } : null,

    // Preload CSS as a resource to avoid render blocking
    { rel: 'preload', href: styles, as: 'style' },
    // { rel: 'preload', href: dockStyles, as: 'style' },
    // { rel: 'preload', href: dockviewStyles, as: 'style' },
    // { rel: 'preload', href: dockAppStyles, as: 'style' },

    // { rel: "stylesheet", href: styles },

    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },

    { rel: 'stylesheet', href: styles },
    // { rel: 'stylesheet', href: dockStyles },
    // { rel: 'stylesheet', href: dockviewStyles },
    // { rel: 'stylesheet', href: dockAppStyles },
    cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,


  ]
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const fetchSession = createActorFetch<UserMachine>({
    actorType: "user",
    host: context.env.ACTOR_KIT_HOST,
  })

  const accessToken = await createAccessToken({
    signingKey: context.env.ACTOR_KIT_SECRET,
    actorId: context.sessionId,
    actorType: "user",
    callerId: context.userId,
    callerType: "client",
  })
  const payload = await fetchSession({
    actorId: context.sessionId,
    accessToken,
    input: {
      url: request.url,
    },
  })

  // TODO fetch the session here....
  return json({
    sessionId: context.sessionId,
    accessToken,
    payload,
    host: context.env.ACTOR_KIT_HOST,
    NODE_ENV: context.env.NODE_ENV,
  })
}

export default function App() {
  const { NODE_ENV, host, sessionId, accessToken, payload } = useLoaderData<typeof loader>()
  const isDevelopment = NODE_ENV === "development"

  const matches = useMatches()



  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="emotion-styles" />
        <Meta />
        <Links />
      </head>

      <body className="bg-white dark:bg-zinc-900 text-black/80 dark:text-zinc-200" id='root'>
      <CloudscapeThemeProvider>
        <UserProvider host={host} actorId={sessionId} checksum={payload.checksum} accessToken={accessToken} initialSnapshot={payload.snapshot as any}>
          <>
            <Header toggleDarkMode={() => {}} isDarkMode={false} />
            <Sidebar />

              <div className="max-w-3xl mx-auto px-4 pt-20">
                <Breadcrumbs matches={matches} />
                <div className="mt-8 px-4">
                  <LayoutWrapper filePath="root.tsx">
                    <Outlet />
                  </LayoutWrapper>
                </div>
              </div>
          </>
        </UserProvider>
        <ScrollRestoration />
        <Scripts />
        {isDevelopment && <LiveReload />}
      </CloudscapeThemeProvider>
      </body>
    </html>
  )
}
