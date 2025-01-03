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
  route("demo/chat", "modules-admin/demo/chat/index.tsx"),

  route("demo/dashboard/analysis", "modules-admin/demo/dashboard/analysis/index.tsx"),
  route("demo/dashboard/monitor", "modules-admin/demo/dashboard/monitor/index.tsx"),
  route("demo/dashboard/workplace", "modules-admin/demo/dashboard/workplace/index.tsx"),

  route("demo/editor/flow", "modules-admin/demo/editor/flow/index.tsx"),
  route("demo/editor/json-viewer", "modules-admin/demo/editor/json-viewer/index.tsx"),
  route("demo/editor/markdown", "modules-admin/demo/editor/markdown/index.tsx"),
  route("demo/editor/mind", "modules-admin/demo/editor/mind/index.tsx"),
  route("demo/editor/rich", "modules-admin/demo/editor/rich/index.tsx"),

  route("demo/exception/403", "modules-admin/demo/exception/403/index.tsx"),
  route("demo/exception/404", "modules-admin/demo/exception/404/index.tsx"),
  route("demo/exception/500", "modules-admin/demo/exception/500/index.tsx"),
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
  ]),
  // any
  route("*", "modules/any/route.tsx"),
]

const adminRoutes = [
  // admin
  route(":lang/admin", "modules/layout/admin/index.tsx", [
    // dashboard
    route("dashboard", "modules-admin/dashboard/index.tsx"),

    // profile
    route("profile/account", "modules-admin/profile/account/index.tsx"),
    route("profile/link/category", "modules-admin/profile/link/category/index.tsx"),
    route("profile/link/category/:id", "modules-admin/profile/link/category-detail/index.tsx"),

    // about
    route("about", "modules-admin/about/index.tsx"),

    ...demoRoutes,
  ]),
]

const routes = [...clientRoutes, ...adminAuthRoutes, ...adminRoutes]

export default [...routes, ...apis] satisfies RouteConfig
