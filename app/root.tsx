import {
  json,
    Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createAccessToken, createActorFetch } from "~/packages/actor-kit/server";
import { UserProvider } from "./user.context";
import { UserMachine } from "./user.machine";

import styles from "./styles.css";
import DefaultErrorBoundary from "./components/common/DefaultErrorBoundary";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
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
];

export async function loader({ request, context }: LoaderFunctionArgs) {
  const fetchSession = createActorFetch<UserMachine>({
    actorType: "user",
    host: context.env.ACTOR_KIT_HOST,
  });

  const accessToken = await createAccessToken({
    signingKey: context.env.ACTOR_KIT_SECRET,
    actorId: context.sessionId,
    actorType: "user",
    callerId: context.userId,
    callerType: "client",
  });
  const payload = await fetchSession({
    actorId: context.sessionId,
    accessToken,
    input: {
      url: request.url,
    },
  });

  // TODO fetch the session here....
  return json({
    sessionId: context.sessionId,
    accessToken,
    payload,
    host: context.env.ACTOR_KIT_HOST,
    NODE_ENV: context.env.NODE_ENV,
  });
}

function Document({
                      children,
                      title,
                  }: {
    children?: React.ReactNode
    title?: string
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}

export default function App() {
  const { NODE_ENV, host, sessionId, accessToken, payload }: any =
    useLoaderData<typeof loader>();
  const isDevelopment = NODE_ENV === "development";

  return (
      <Document>
          <>
              <UserProvider
                  host={host}
                  actorId={sessionId}
                  checksum={payload.checksum}
                  accessToken={accessToken}
                  initialSnapshot={payload.snapshot}
              >
                  <Outlet />
              </UserProvider>
              <ScrollRestoration />
              <Scripts />
              {isDevelopment && <LiveReload />}
          </>
      </Document>

  );
}




export function ErrorBoundary() {
    const error = useRouteError()
    let title: string
    if (isRouteErrorResponse(error)) {
        title = `Error ${error.status} - ${error.statusText}`
    } else {
        const {message} = error as Error
        title = `Application Error - ${message}`
    }

    return (
        <Document title={title}>
            <DefaultErrorBoundary/>
        </Document>
    )
}
