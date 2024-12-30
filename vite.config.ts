// import { reactRouter } from "@react-router/dev/vite"
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // reactRouter(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        // v3_routeConfig: true,
        v3_singleFetch: true
      },
    }),
    tsconfigPaths(),
  ],
  // css: {
  //   postcss: true,
  // },
});