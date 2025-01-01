/** @type {import('@remix-run/dev').AppConfig} */
export default {
    ignoredRouteFiles: ["**/.*", "**/*.stories.{js,jsx,ts,tsx}"],
    routes: async (defineRoutes) => {
        return defineRoutes((route) => {
            // route("/dockview", "apps/examples/dockview-nocobase/dockview._index.tsx");
        });
    },
    // appDirectory: "app",
    // assetsBuildDirectory: "public/build",
    // publicPath: "/build/",
    // serverBuildDirectory: "build",
    // devServerPort: 8002

    // server: "./server.ts",
    // serverConditions: ["workerd", "worker", "browser"],
    // serverMainFields: ["workerd", "browser", "module", "main"],
    // serverMinify: false,
    // serverModuleFormat: "esm",
    // serverPlatform: "neutral",
    // future: {
    //     v3_fetcherPersist: true,
    //     v3_relativeSplatPath: true,
    //     v3_throwAbortReason: true,
    // },
    // assetsBuildDirectory: "public/dist",
    // serverBuildPath: "dist/index.js",
    // publicPath: "/dist/",
    // dev: {
    //     port: 8002,
    // },
    // serverDependenciesToBundle: [/^.*\.sql$/],
};
