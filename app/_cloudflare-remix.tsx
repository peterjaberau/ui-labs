//
//
//
// // entry.server.tsx
// import type { EntryContext } from "@remix-run/cloudflare";
// import { RemixServer } from "@remix-run/react";
// import { renderToString } from "react-dom/server";
// function handleRequest(request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext) {
//
//   const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
//
//   responseHeaders.set("Content-Type", "text/html");
//
//   return new Response("<!DOCTYPE html>" + markup, {
//     status: responseStatusCode,
//     headers: responseHeaders,
//   });
// }
//
//
// // entry.client.tsx
// import { RemixBrowser } from "@remix-run/react";
// import { startTransition, StrictMode } from "react";
// import { hydrateRoot } from "react-dom/client";
// function hydrate() { startTransition(() => { hydrateRoot(document, <StrictMode><RemixBrowser /></StrictMode>)})}
// if (typeof requestIdleCallback === "function") { requestIdleCallback(hydrate)} else {setTimeout(hydrate, 1);}
//
//
// // metaFunction
// const meta: MetaFunction = () => ({charset: "utf-8", title: "New Remix App", viewport: "width=device-width,initial-scale=1",} as any);
//
//
// // Root _index.tsx
// import type { MetaFunction } from "@remix-run/cloudflare";
// import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
// function Root() {
//   return (
//       <html lang="en"><head><Meta /><Links /></head><body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body></html>)
// }
//
//
//
// // session.server.ts
// import { createCookieSessionStorage } from '@remix-run/cloudflare';
// const sessionStorage = createCookieSessionStorage({
//     // SECRET_SESSIONsecure: process.env.NODE_ENV === 'production'
//     cookie: {name: '__session', httpOnly: true, path: '/', sameSite: 'lax', secrets: ['s3cr3t'], }}) as any;
//
//
// // auth.server.ts
// import { Authenticator } from "remix-auth";
// import { JwtStrategy } from 'remix-auth-jwt';
// export let authenticator: any = new Authenticator<{ username: string }>(sessionStorage);
// authenticator.use(new JwtStrategy({secret: 's3cr3t'} as any, async ({ payload, context }: any) => {return payload as any}), "jwt");
//
//
// // authenticate-required.ts
// import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
// export const loader = async ({ request }: LoaderFunctionArgs) => {
//     try {
//         const result = await authenticator.authenticate("jwt", request);
//         return json({ success: true, ...result }, 200);
//     } catch (error) {
//         return json({ success: false }, 401);
//     }
// };
//
// // create-token.ts
// // TODO: Implement create-token.ts
