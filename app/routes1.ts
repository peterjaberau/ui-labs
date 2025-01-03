import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"

class AdminSystemAPI {
  pathPrefix = "api/admin/system"
  filePrefix = "apis-server/admin/system"

  confit() {
    const { pathPrefix, filePrefix } = this
    const sysetmRoutes = [
      {
        path: `${pathPrefix}/config`,
        file: `${filePrefix}/config.api.ts`,
      },
      {
        path: `${pathPrefix}/dept`,
        file: `${filePrefix}/dept.api.ts`,
      },
      {
        path: `${pathPrefix}/dict`,
        file: `${filePrefix}/dict.api.ts`,
      },
      {
        path: `${pathPrefix}/dict-item/:id`,
        file: `${filePrefix}/dict-item.api.ts`,
      },
      {
        path: `${pathPrefix}/menu-list`,
        file: `${filePrefix}/menu-list.api.ts`,
      },
      {
        path: `${pathPrefix}/menu`,
        file: `${filePrefix}/menu.api.ts`,
      },
      {
        path: `${pathPrefix}/menu-role`,
        file: `${filePrefix}/menu-role.api.ts`,
      },
      {
        path: `${pathPrefix}/role`,
        file: `${filePrefix}/role.api.ts`,
      },
      {
        path: `${pathPrefix}/user`,
        file: `${filePrefix}/user.api.ts`,
      },
      {
        path: `${pathPrefix}/monitor/loginlog`,
        file: `${filePrefix}/monitor/loginlog.api.ts`,
      },
      {
        path: `${pathPrefix}/monitor/serve`,
        file: `${filePrefix}/monitor/serve.api.ts`,
      },
    ]
    return sysetmRoutes
  }

  getApis() {
    const sysetmRoutes = this.confit()
    const sys_apis = sysetmRoutes.map((rt) => {
      return route(rt.path, rt.file)
    })
    return sys_apis
  }
}

class AdminDashboardAPI {
  pathPrefix = "api/dashboard"
  filePrefix = "apis-server/admin/dashboard"

  config() {
    const { pathPrefix, filePrefix } = this
    const sysetmRoutes = [
      {
        path: `${pathPrefix}`,
        file: `${filePrefix}/index.ts`,
      },
    ]
    return sysetmRoutes
  }

  getApis() {
    const sysetmRoutes = this.config()
    const sys_apis = sysetmRoutes.map((rt) => {
      return route(rt.path, rt.file)
    })
    return sys_apis
  }
}

const admin_tool_apis = [
  route("api/admin/tools/mail", "apis-server/admin/tools/mail.api.ts"),
  route("api/admin/tools/mail/:id", "apis-server/admin/tools/mail-detail.api.ts"),
  route("api/admin/tools/storage", "apis-server/admin/tools/storage.api.ts"),
]

const admin_demo_apis = [
  route("api/admin/demo/account/center", "apis-server/admin/demo/account/center/index.ts"),
  route("api/admin/demo/account/settings", "apis-server/admin/demo/account/settings/index.ts"),
]

const admin_sys_apis = new AdminSystemAPI().getApis()
const admin_dashboard_apis = new AdminDashboardAPI().getApis()
const admin_auth_apis = [
  route("api/login", "apis-server/admin-auth/login/index.ts"),
  route("api/logout", "apis-server/admin-auth/logout/index.ts"),
  route("api/register", "apis-server/admin-auth/register/index.ts"),
  route("api/refresh_token", "apis-server/admin-auth/refresh/index.ts"),
]
const amdin_blog_apis = [
  route("api/admin/blog/category", "apis-server/admin/blog/blog-category.api.ts"),
  route("api/admin/blog/tag", "apis-server/admin/blog/blog-tag.api.ts"),
  route("api/admin/blog", "apis-server/admin/blog/blog.api.ts"),
  route("api/admin/blog/:id", "apis-server/admin/blog/blog.detail.api.ts"),
]
const admin_news_apis = [
  route("api/admin/news/category", "apis-server/admin/news/news-category.api.ts"),
  route("api/admin/news", "apis-server/admin/news/news.api.ts"),
  route("api/admin/news/:id", "apis-server/admin/news/news.detail.api.ts"),
]

const admin_feedback_changelog_apis = [
  route("api/admin/docs/feedback", "apis-server/admin/docs/feedback.api.ts"),
  route("api/admin/docs/changelog", "apis-server/admin/docs/changelog.api.ts"),
]

const admin_profile_apis = [
  route("api/admin/profile/account", "apis-server/admin/profile/account.api.ts"),
  route("api/admin/profile/link", "apis-server/admin/profile/link.api.ts"),
  route("api/admin/profile/link/category", "apis-server/admin/profile/link-category.api.ts"),
]
const other_apis = [
  route("api/geojson", "apis-server/geojson/index.ts"),
  route("api/healthcheck", "apis-server/healthcheck/index.ts"),
  route("api/signin", "apis-server/signin/index.ts"),
  route("api/upload", "apis-server/upload/api.ts"),
  route("api/userinfo", "apis-server/userinfo/index.ts"),
]

const apis = [
  ...other_apis,
  ...admin_auth_apis,
  ...admin_dashboard_apis,
  ...admin_tool_apis,
  ...admin_demo_apis,
  ...amdin_blog_apis,
  ...admin_news_apis,
  ...admin_feedback_changelog_apis,
  ...admin_profile_apis,
  ...admin_sys_apis,
]

const demoRoutes = [
  // demo
  // route("demo/account/center", "modules-admin/demo/account/center/index.tsx"),
  // route("demo/account/settings", "modules-admin/demo/account/settings/index.tsx"),
  //
  // route("demo/calender/antd", "modules-admin/demo/calender/antd/index.tsx"),
  // route("demo/calender/temporal", "modules-admin/demo/calender/temporal/index.tsx"),

  route("demo/chat", "modules-admin/demo/chat/index.tsx"),

  route("demo/dashboard/analysis", "modules-admin/demo/dashboard/analysis/index.tsx"),
  route("demo/dashboard/monitor", "modules-admin/demo/dashboard/monitor/index.tsx"),
  route("demo/dashboard/workplace", "modules-admin/demo/dashboard/workplace/index.tsx"),

  route("demo/editor/flow", "modules-admin/demo/editor/flow/index.tsx"),
  route("demo/editor/json-viewer", "modules-admin/demo/editor/json-viewer/index.tsx"),
  route("demo/editor/markdown", "modules-admin/demo/editor/markdown/index.tsx"),
  route("demo/editor/mind", "modules-admin/demo/editor/mind/index.tsx"),
  route("demo/editor/rich", "modules-admin/demo/editor/rich/index.tsx"),

  // route("demo/excel/import", "modules-admin/demo/excel/import/index.tsx"),
  // route("demo/excel/export", "modules-admin/demo/excel/export/index.tsx"),

  route("demo/exception/403", "modules-admin/demo/exception/403/index.tsx"),
  route("demo/exception/404", "modules-admin/demo/exception/404/index.tsx"),
  route("demo/exception/500", "modules-admin/demo/exception/500/index.tsx"),

  // route("demo/form/advanced-form", "modules-admin/demo/form/advanced-form/index.tsx"),
  // route("demo/form/basic-form", "modules-admin/demo/form/basic-form/index.tsx"),
  // route("demo/form/step-form", "modules-admin/demo/form/step-form/index.tsx"),
  //
  // route("demo/game/mouse", "modules-admin/demo/game/mouse/index.tsx"),
  // route("demo/game/pocker-guess", "modules-admin/demo/game/pocker-guess/index.tsx"),
  // route("demo/game/pockercontent:hhmz", "modules-admin/demo/game/pocker-content/index.tsx"),
  // route("demo/game/rl", "modules-admin/demo/game/rl/index.tsx"),
  // route("demo/game/trbl", "modules-admin/demo/game/trbl/index.tsx"),
  //
  // route("demo/health/anxiety-depression", "modules-admin/demo/health/anxiety-depression/index.tsx"),
  // route("demo/health/cervical-vertebra.", "modules-admin/demo/health/cervical-vertebra/index.tsx"),
  // route("demo/health/hand", "modules-admin/demo/health/hand/index.tsx"),
  // route("demo/health/obesity", "modules-admin/demo/health/obesity/index.tsx"),
  // route("demo/health/sleep", "modules-admin/demo/health/sleep/index.tsx"),
  // route("demo/health/sport", "modules-admin/demo/health/sport/index.tsx"),
  // route("demo/health/vision", "modules-admin/demo/health/vision/index.tsx"),
  //
  // route("demo/lib/clipboard", "modules-admin/demo/lib/clipboard/index.tsx"),
  // route("demo/lib/icons", "modules-admin/demo/lib/icons/index.tsx"),
  // route("demo/lib/qrcode", "modules-admin/demo/lib/qrcode/index.tsx"),
  // route("demo/lib/split-pane", "modules-admin/demo/lib/split-pane/index.tsx"),
  //
  // route("demo/list/basic-list", "modules-admin/demo/list/basic-list/index.tsx"),
  // route("demo/list/card-list", "modules-admin/demo/list/card-list/index.tsx"),
  // route("demo/list/table-list", "modules-admin/demo/list/table-list/index.tsx"),
  // route("demo/list/search/applications", "modules-admin/demo/list/search/applications/index.tsx"),
  // route("demo/list/search/articles", "modules-admin/demo/list/search/articles/index.tsx"),
  // route("demo/list/search/projects", "modules-admin/demo/list/search/projects/index.tsx"),
  //
  // route("demo/profile/advanced", "modules-admin/demo/profile/advanced/index.tsx"),
  // route("demo/profile/basic", "modules-admin/demo/profile/basic/index.tsx"),
  //
  // route("demo/result/fail", "modules-admin/demo/result/fail/index.tsx"),
  // route("demo/result/success", "modules-admin/demo/result/success/index.tsx"),
  //
  // route("demo/stack/laxjs/cursor", "modules-admin/demo/stack/laxjs/cursor.tsx"),
  // route("demo/stack/rxjs/count-down", "modules-admin/demo/stack/rxjs/count-down.tsx"),
  // route("demo/stack/rxjs/keybr", "modules-admin/demo/stack/rxjs/keybr.tsx"),
  //
  // // docs
  // route("docs/change-log", "modules-admin/docs/change-log/index.tsx"),
  // route("docs/feedback", "modules-admin/docs/feedback/index.tsx"),
]

const adminAuthRoutes = [
  // admin auth
  route(":lang/admin/login", "modules-admin-auth/login/index.tsx"),
  route(":lang/admin/register", "modules-admin-auth/register/index.tsx"),
  route(":lang/admin/welcome", "modules-admin-auth/welcome/index.tsx"),
]

const clientRoutes = [
  route("/", "modules/home/route.ts"),
  route(":lang/", "modules/layout/client/index.tsx", [
    route("", "modules-client/index/index.tsx", { index: true }),
    route("about", "modules-client/about/index.tsx"),
    // route("blog", "modules-client/blog/index.tsx", { index: true }),
    // route("blog/:id", "modules-client/blog-detail/index.tsx"),
    // route("news", "modules-client/news/index.tsx"),
    // route("news/:id", "modules-client/news-detail/index.tsx"),
  ]),
  // any
  route("*", "modules/any/route.tsx"),
]

const adminRoutes = [
  // admin
  route(":lang/admin", "modules/layout/admin/index.tsx", [
    // dashboard
    route("dashboard", "modules-admin/dashboard/index.tsx"),

    // // news
    // route("news/edit", "modules-admin/news/edit/index.tsx"),
    // route("news/edit/:id", "modules-admin/news/edit-detail/index.tsx"),
    // route("news/category", "modules-admin/news/category/index.tsx"),
    // route("news/category/:id", "modules-admin/news/list/index.tsx"),
    // route("news/result", "modules-admin/news/result/index.tsx"),

    // // blog
    // route("blog", "modules-admin/blog/index/index.tsx"),
    // route("blog/category", "modules-admin/blog/category/index.tsx"),
    // route("blog/tag", "modules-admin/blog/tag/index.tsx"),
    // route("blog/edit", "modules-admin/blog/create/index.tsx"),
    // route("blog/edit/:id", "modules-admin/blog/edit/index.tsx"),
    // route("blog/result", "modules-admin/blog/result/index.tsx"),
    //
    // // profile
    route("profile/account", "modules-admin/profile/account/index.tsx"),
    route("profile/link/category", "modules-admin/profile/link/category/index.tsx"),
    route("profile/link/category/:id", "modules-admin/profile/link/category-detail/index.tsx"),

    // // system
    // route("system/config", "modules-admin/system/config/index.tsx"),
    // route("system/dept", "modules-admin/system/dept/index.tsx"),
    // route("system/dict", "modules-admin/system/dict/index.tsx"),
    // route("system/dict-item/:id", "modules-admin/system/dict-item/index.tsx"),
    // route("system/menu", "modules-admin/system/menu/index.tsx"),
    // route("system/monitor/login-log", "modules-admin/system/monitor/login-log/index.tsx"),
    // route("system/monitor/serve", "modules-admin/system/monitor/serve/index.tsx"),
    // route("system/role", "modules-admin/system/role/index.tsx"),
    // route("system/user", "modules-admin/system/user/index.tsx"),

    // // tools
    // route("tools/mail", "modules-admin/tools/mail/index.tsx"),
    // route("tools/mail/list", "modules-admin/tools/mail-list/index.tsx"),
    // route("tools/mail/:id", "modules-admin/tools/mail-detail/index.tsx"),
    // route("tools/storage", "modules-admin/tools/storage/index.tsx"),

    // about
    route("about", "modules-admin/about/index.tsx"),

    ...demoRoutes,
  ]),
]

const routes = [...clientRoutes, ...adminAuthRoutes, ...adminRoutes]

export default [...routes, ...apis] satisfies RouteConfig




















// import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"
//
// class AdminSystemAPI {
//   pathPrefix = "api/admin/system";
//   // filePrefix = "apis-server/admin/system";
//
//   confit() {
//     const { pathPrefix, filePrefix } = this;
//     const sysetmRoutes = [
//       {
//         path: `${pathPrefix}/config`,
//         file: `${filePrefix}/config.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/dept`,
//         file: `${filePrefix}/dept.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/dict`,
//         file: `${filePrefix}/dict.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/dict-item/:id`,
//         file: `${filePrefix}/dict-item.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/menu-list`,
//         file: `${filePrefix}/menu-list.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/menu`,
//         file: `${filePrefix}/menu.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/menu-role`,
//         file: `${filePrefix}/menu-role.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/role`,
//         file: `${filePrefix}/role.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/user`,
//         file: `${filePrefix}/user.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/monitor/loginlog`,
//         file: `${filePrefix}/monitor/loginlog.api.ts`,
//       },
//       {
//         path: `${pathPrefix}/monitor/serve`,
//         file: `${filePrefix}/monitor/serve.api.ts`,
//       },
//     ];
//     return sysetmRoutes;
//   }
//
//   getApis() {
//     const sysetmRoutes = this.confit();
//     const sys_apis = sysetmRoutes.map((rt) => {
//       return route(rt.path, rt.file);
//     });
//     return sys_apis;
//   }
// }
//
// const demoRoutes = [
//   // demo
//   // route("demo/account/center", "modules-admin/demo/account/center/index.tsx"),
//   // route("demo/account/settings", "modules-admin/demo/account/settings/index.tsx"),
//   // route("demo/dashboard/analysis", "modules-admin/demo/dashboard/analysis/index.tsx"),
//   // route("demo/editor/flow", "modules-admin/demo/editor/flow/index.tsx"),
//   route("demo/editor/json-viewer", "modules-admin/demo/editor/json-viewer/index.tsx"),
//   route("demo/exception/403", "modules-admin/demo/exception/403/index.tsx"),
//   route("demo/exception/404", "modules-admin/demo/exception/404/index.tsx"),
//   route("demo/exception/500", "modules-admin/demo/exception/500/index.tsx"),
//   // route("demo/form/advanced-form", "modules-admin/demo/form/advanced-form/index.tsx"),
//   // route(
//   //   "demo/list/search/applications",
//   //   "modules-admin/demo/list/search/applications/index.tsx",
//   // ),
// ]
//
// const adminAuthRoutes = [
//   // admin auth
//   route(":lang/admin/login", "modules-admin-auth/login/index.tsx"),
//   route(":lang/admin/register", "modules-admin-auth/register/index.tsx"),
//   route(":lang/admin/welcome", "modules-admin-auth/welcome/index.tsx"),
// ];
//
//
// const clientRoutes = [
//   route("/", "modules/home/route.ts"),
//   route(":lang/admin", "modules/layout/admin/index.tsx", [
//     route("", "modules-client/index/index.tsx", { index: true }),
//     route("about", "modules-client/about/index.tsx"),
//     // route("blog", "modules-client/blog/index.tsx", { index: true }),
//     // route("blog/:id", "modules-client/blog-detail/index.tsx"),
//   ]),
//   // any
//   route("*", "modules/any/route.tsx"),
// ]
//
// const adminRoutes = [
//   route(":lang/admin", "modules/layout/admin/index.tsx", [
//     // dashboard
//     route("dashboard", "modules-admin/dashboard/index.tsx"),
//
//     // // news
//     // route("news/edit", "modules-admin/news/edit/index.tsx"),
//     //
//     // route("news/edit/:id", "modules-admin/news/edit-detail/index.tsx"),
//     // route("news/category", "modules-admin/news/category/index.tsx"),
//     // route("news/category/:id", "modules-admin/news/list/index.tsx"),
//     // route("news/result", "modules-admin/news/result/index.tsx"),
//     //
//     // // profile
//     // route("profile/account", "modules-admin/profile/account/index.tsx"),
//     // route("profile/link/category", "modules-admin/profile/link/category/index.tsx"),
//     // route("profile/link/category/:id", "modules-admin/profile/link/category-detail/index.tsx"),
//
//     // about
//     route("about", "modules-admin/about/index.tsx"),
//
//     ...demoRoutes,
//   ]),
// ]
//
//
// const routes = [...clientRoutes, ...adminAuthRoutes, ...adminRoutes];
//
// export default [...routes, ...apis] satisfies RouteConfig;
//
// // export default [
// //   index("routes/index.tsx"),
// //
// //   layout("routes/cloudscape.tsx", [
// //     index("routes/cloudscape._index.tsx"),
// //     route("custom", "routes/cloudscape.custom.tsx"),
// //   ]),
// //
// //   layout("routes/$session.tsx", [
// //     route(":session", "routes/$session.tsx"),
// //     layout("routes/$session.$service.tsx", [
// //       route(":service", "routes/$session.$service._index.tsx"),
// //       route(":service", "routes/$session.$service.tsx"),
// //       layout("routes/$session.$service.$view.tsx", [
// //         route(":view", "routes/$session.$service.$view.tsx"),
// //       ]),
// //     ]),
// //   ]),
// //
// //   layout("routes/$session.tsx", [
// //     route(":session", "routes/$session.$service.tsx", [
// //       route(":service", "routes/$session.$service._index.tsx", [
// //         route(":view", "routes/$session.$service.$view._index.tsx"),
// //       ]),
// //     ]),
// //   ]),
//
//   // layout("routes/$session.tsx", [
//   //   route(":session", [
//   //     layout("routes/$session.$service.tsx", [
//   //       index("routes/$session.$service._index.tsx"),
//   //       route(":service", "routes/$session.$service.$view.tsx"),
//   //     ]),
//   //   ]),
//   // ]),
//
//   // layout("routes/$session.tsx", [
//   //   route(":session", "routes/$session.$service.tsx"),
//   //   layout("routes/$session.$service.tsx", [
//   //     index("routes/$session.$service._index.tsx"),
//   //     route(":view", "routes/$session.$service.$view.tsx"),
//   //   ]),
//   // ]),
//
//   // layout("routes/$session.tsx", [
//   //   route(":session", "routes/$session.$service.tsx", [
//   //     index("routes/$session.$service._index.tsx"),
//   //     route(":service", "routes/$session.$service.$view.tsx"),
//   //   ]),
//   // ]),
//   //
//   // // User routes
//   // layout("routes/layout.tsx", [
//   //   route("home", "routes/home.tsx"),
//   //   route("todos", "routes/todos.tsx"),
//   // ]),
//
//   // Auth
//   // ...prefix("auth", [
//   //   layout("routes/auth/layout.tsx", [
//   //     route(":provider/callback", "routes/auth/provider-callback.tsx"),
//   //     route(":provider", "routes/auth/provider.tsx"),
//   //     route("login", "routes/auth/login.tsx"),
//   //     route("verify", "routes/auth/verify.tsx"),
//   //   ]),
//   //   route("logout", "routes/auth/logout.tsx"),
//   // ]),
//
//   //  route("*?", "routes/catchall.tsx"),
//   // // User routes
//   // layout("routes/layout.tsx", [
//   //   route("home", "routes/home.tsx"),
//   //   route("todos", "routes/todos.tsx"),
//   // ]),
//   //
//   // // Auth
//   // ...prefix("auth", [
//   //   layout("routes/auth/layout.tsx", [
//   //     route(":provider/callback", "routes/auth/provider-callback.tsx"),
//   //     route(":provider", "routes/auth/provider.tsx"),
//   //     route("login", "routes/auth/login.tsx"),
//   //     route("verify", "routes/auth/verify.tsx"),
//   //   ]),
//   //   route("logout", "routes/auth/logout.tsx"),
//   // ]),
// // ] satisfies RouteConfig
