import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from "react-router"

// @ts-ignore
import tailwindCss from "./tailwind.css?url"
// amis related imports
import "amis/lib/themes/cxd.css?url"
import "amis/lib/helper.css?url"
import "amis/sdk/iconfont.css?url"
import "@fortawesome/fontawesome-free/css/all.css?url"
// import 'amis/lib/themes/antd.css'

import type { Route } from "./+types/root"
import { querySession } from "./auth/auth.server";
import { ProgressBar } from "./components/progress-bar"
import { ThemeSwitcherSafeHTML, ThemeSwitcherScript } from "./components/theme-switcher"

import { RenderViewMachineProvider } from "~/internals/development/cloudscape-app/components/render-view/helpers/RenderViewContextProvider.tsx"
import { AmisMachineProvider } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/AmisContextProvider.tsx"

// @ts-ignore
export const links: Route.LinksFunction = () => [
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
  { rel: "stylesheet", href: tailwindCss },
]

export async function loader({ request }: Route.LoaderArgs) {
  const { validSession } = await querySession(request);
  return data({ user: validSession?.user });
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeSwitcherSafeHTML
      lang="en"
      className="touch-manipulation overflow-x-hidden"
      style={{ height: "100%" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <ThemeSwitcherScript />
      </head>
      <body>
        <ProgressBar />
        <RenderViewMachineProvider>
          <AmisMachineProvider>{children}</AmisMachineProvider>
        </RenderViewMachineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </ThemeSwitcherSafeHTML>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details
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
