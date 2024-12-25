import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
    useLoaderData
} from "@remix-run/react";
import tailwind from "./apps/interactive-routing/tailwind.css";
import styles from "./apps/interactive-routing/styles.css";
import actorStyles from "./styles.css";
import Sidebar from "~/apps/interactive-routing/components/Sidebar";
import Header from "~/apps/interactive-routing/components/Header";
import Breadcrumbs from "~/apps/interactive-routing/components/Breadcrumbs";
import LayoutWrapper from "~/apps/interactive-routing/components/wrappers/LayoutWrapper";
import { useCallback, useMemo, useState } from "react";
import {json, LinksFunction, LoaderFunctionArgs} from "@remix-run/cloudflare";
import { createAccessToken, createActorFetch } from "~/packages/actor-kit/server";
import { UserProvider } from "./user.context";
import { UserMachine } from "./user.machine";



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
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: actorStyles },
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



export default function App() {

    const { NODE_ENV, host, sessionId, accessToken, payload } =
        useLoaderData<typeof loader>();
    const isDevelopment = NODE_ENV === "development";


    const matches = useMatches();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeProps = useMemo(() => {
    if (isDarkMode) {
      return { className: "dark" };
    }
    return {};
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((current) => !current);
  }, []);

  return (
      <html lang="en" {...themeProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-zinc-900 text-black/80 dark:text-zinc-200">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Sidebar />
      <div style={{ paddingLeft: "400px" }}>
        <div className="max-w-3xl mx-auto px-4 pt-20">
          <Breadcrumbs matches={matches} />
          <div className="mt-8 px-4">
            <LayoutWrapper filePath="root.tsx">
                <UserProvider
                    host={host}
                    actorId={sessionId}
                    checksum={payload.checksum}
                    accessToken={accessToken}
                    initialSnapshot={payload.snapshot as any}
                >
                    <Outlet />
                </UserProvider>
                <ScrollRestoration />
                <Scripts />
                {isDevelopment && <LiveReload />}
            </LayoutWrapper>
          </div>
        </div>
      </div>

      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      </body>
      </html>
  );
}
