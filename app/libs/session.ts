// types
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router"

// rxjs
import { combineLatest, from, map, of, switchMap } from "rxjs"

// remix
import { createCookieSessionStorage, redirect } from "react-router"

import type { Observable } from "rxjs"

type SessionData = {
  userId: string
}

type SessionFlashData = {
  error: string
}

/**
 * session Management tool functions
 */
export const { getSession, commitSession, destroySession } = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET!],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60_000,
  },
})

/**
 * Set higher-order redirect function based on cookie + lang
 * @param SetCookie cookie
 * @param lang spoken language
 * @returns
 */
const redirectToLoginHigherOrder = (SetCookie: string, lang: string) => () => {
  return redirect(`/${lang}/admin/login`, {
    headers: {
      "Set-Cookie": SetCookie,
    },
  })
}

/**
 * Sign out
 * @param request
 * @param lang
 * @returns
 */
export function logout$(request: Request, lang: string) {
  return from(getSession(request.headers.get("Cookie"))).pipe(
    switchMap((session) => from(destroySession(session))),
    map((SetCookie) => redirectToLoginHigherOrder(SetCookie, lang!)),
  )
}

/**
 * 获取用户 userId
 * @param request request object
 * @returns userId
 */
export function getUserId$(request: Request) {
  return from(getSession(request.headers.get("Cookie"))).pipe(
    map((session) => session.get("userId")),
    map((userId) => {
      if (!userId || typeof userId !== "string") {
        return null
      }
      return +userId
    }),
  )
}

/**
 * Check authorization
 * @param param0
 * @returns
 */
export function auth$({
  request,
  params,
}: ActionFunctionArgs | LoaderFunctionArgs): Observable<[number | null, () => any, number]> {
  return getUserId$(request).pipe(
    switchMap((userId) =>
      combineLatest([
        of(userId),
        from(getSession(request.headers.get("Cookie"))).pipe(
          switchMap((session) => from(destroySession(session))),
          map((SetCookie) => redirectToLoginHigherOrder(SetCookie, params.lang!)),
        ),
        of(Number(process.env.PRESENTATION_MODE ?? 0)),
      ]),
    ),
  )
}

export class UserSession {
  async getUserId(request: Request) {
    const c = request.headers.get("Cookie")
    const session = await getSession(c)
    const userId = session?.get("userId")

    if (!userId || typeof userId !== "string") {
      return null
    }
    return +userId
  }
}

export class Auth {
  async logout({ request, params }: any) {
    const { lang } = params
    const cookie = request.headers.get("Cookie")
    const session = await getSession(cookie)
    const SetCookie = await destroySession(session)
    return redirect(`/${lang}/admin/login`, {
      headers: {
        "Set-Cookie": SetCookie,
      },
    })
  }
}
