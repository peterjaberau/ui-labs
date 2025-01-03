import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"

const demoRoutes = [
  // demo
  // route("demo/account/center", "modules-admin/demo/account/center/index.tsx"),
  // route("demo/account/settings", "modules-admin/demo/account/settings/index.tsx"),
  // route("demo/dashboard/analysis", "modules-admin/demo/dashboard/analysis/index.tsx"),
  // route("demo/editor/flow", "modules-admin/demo/editor/flow/index.tsx"),
  route("demo/editor/json-viewer", "modules-admin/demo/editor/json-viewer/index.tsx"),
  route("demo/exception/403", "modules-admin/demo/exception/403/index.tsx"),
  route("demo/exception/404", "modules-admin/demo/exception/404/index.tsx"),
  route("demo/exception/500", "modules-admin/demo/exception/500/index.tsx"),
  // route("demo/form/advanced-form", "modules-admin/demo/form/advanced-form/index.tsx"),
  // route(
  //   "demo/list/search/applications",
  //   "modules-admin/demo/list/search/applications/index.tsx",
  // ),
]

const adminAuthRoutes = [
  // admin auth
  route(":lang/admin/login", "modules-admin-auth/login/index.tsx"),
  route(":lang/admin/register", "modules-admin-auth/register/index.tsx"),
  route(":lang/admin/welcome", "modules-admin-auth/welcome/index.tsx"),
];


const clientRoutes = [
  route("/", "modules/home/route.ts"),
  route(":lang/admin", "modules/layout/admin/index.tsx", [
    route("", "modules-client/index/index.tsx", { index: true }),
    route("about", "modules-client/about/index.tsx"),
    // route("blog", "modules-client/blog/index.tsx", { index: true }),
    // route("blog/:id", "modules-client/blog-detail/index.tsx"),
  ]),
  // any
  route("*", "modules/any/route.tsx"),
]

const adminRoutes = [
  route(":lang/admin", "modules/layout/admin/index.tsx", [
    // dashboard
    route("dashboard", "modules-admin/dashboard/index.tsx"),

    // // news
    // route("news/edit", "modules-admin/news/edit/index.tsx"),
    //
    // route("news/edit/:id", "modules-admin/news/edit-detail/index.tsx"),
    // route("news/category", "modules-admin/news/category/index.tsx"),
    // route("news/category/:id", "modules-admin/news/list/index.tsx"),
    // route("news/result", "modules-admin/news/result/index.tsx"),
    //
    // // profile
    // route("profile/account", "modules-admin/profile/account/index.tsx"),
    // route("profile/link/category", "modules-admin/profile/link/category/index.tsx"),
    // route("profile/link/category/:id", "modules-admin/profile/link/category-detail/index.tsx"),

    // about
    route("about", "modules-admin/about/index.tsx"),

    ...demoRoutes,
  ]),
]


const routes = [...clientRoutes, ...adminAuthRoutes, ...adminRoutes];


export default [
  index("routes/index.tsx"),

  layout("routes/cloudscape.tsx", [
    index("routes/cloudscape._index.tsx"),
    route("custom", "routes/cloudscape.custom.tsx"),
  ]),

  layout("routes/$session.tsx", [
    route(":session", "routes/$session.tsx"),
    layout("routes/$session.$service.tsx", [
      route(":service", "routes/$session.$service._index.tsx"),
      route(":service", "routes/$session.$service.tsx"),
      layout("routes/$session.$service.$view.tsx", [
        route(":view", "routes/$session.$service.$view.tsx"),
      ]),
    ]),
  ]),

  layout("routes/$session.tsx", [
    route(":session", "routes/$session.$service.tsx", [
      route(":service", "routes/$session.$service._index.tsx", [
        route(":view", "routes/$session.$service.$view._index.tsx"),
      ]),
    ]),
  ]),

  // layout("routes/$session.tsx", [
  //   route(":session", [
  //     layout("routes/$session.$service.tsx", [
  //       index("routes/$session.$service._index.tsx"),
  //       route(":service", "routes/$session.$service.$view.tsx"),
  //     ]),
  //   ]),
  // ]),

  // layout("routes/$session.tsx", [
  //   route(":session", "routes/$session.$service.tsx"),
  //   layout("routes/$session.$service.tsx", [
  //     index("routes/$session.$service._index.tsx"),
  //     route(":view", "routes/$session.$service.$view.tsx"),
  //   ]),
  // ]),

  layout("routes/$session.tsx", [
    route(":session", "routes/$session.$service.tsx", [
      index("routes/$session.$service._index.tsx"),
      route(":service", "routes/$session.$service.$view.tsx"),
    ]),
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
