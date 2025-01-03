import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"

export default [
  index("routes/index.tsx"),

  layout("routes/cloudscape.tsx", [
    index("routes/cloudscape._index.tsx"),
    route("custom", "routes/cloudscape.custom.tsx"),
  ]),

  // User routes
  layout("routes/layout.tsx", [
    route("home", "routes/home.tsx"),
    route("todos", "routes/todos.tsx"),
  ]),

  // Auth
  ...prefix("auth", [
    layout("routes/auth/layout.tsx", [
      route(":provider/callback", "routes/auth/provider-callback.tsx"),
      route(":provider", "routes/auth/provider.tsx"),
      route("login", "routes/auth/login.tsx"),
      route("verify", "routes/auth/verify.tsx"),
    ]),
    route("logout", "routes/auth/logout.tsx"),
  ]),

  //  route("*?", "routes/catchall.tsx"),
  // // User routes
  // layout("routes/layout.tsx", [
  //   route("home", "routes/home.tsx"),
  //   route("todos", "routes/todos.tsx"),
  // ]),
  //
  // // Auth
  // ...prefix("auth", [
  //   layout("routes/auth/layout.tsx", [
  //     route(":provider/callback", "routes/auth/provider-callback.tsx"),
  //     route(":provider", "routes/auth/provider.tsx"),
  //     route("login", "routes/auth/login.tsx"),
  //     route("verify", "routes/auth/verify.tsx"),
  //   ]),
  //   route("logout", "routes/auth/logout.tsx"),
  // ]),
] satisfies RouteConfig
