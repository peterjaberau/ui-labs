import { reactRouterDevTools } from "react-router-devtools";
import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";

import { sessionContextPlugin } from "session-context/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

import { getLoadContext } from "./workers/load-context";

export default defineConfig({
  plugins: [
    reactRouterDevTools({
      client: {
        position: "top-right",
        defaultOpen: true,
        expansionLevel: 1,
        height: 500,
        minHeight: 300,
        maxHeight: 1000,
        hideUntilHover: true,
        panelLocation: "bottom",
        requireUrlFlag: true,
        urlFlag: "customFlag",
        routeBoundaryGradient: "gotham",
        breakpoints: [{name: "lg", min: 0, max: 768}, {name: "xl", min: 768, max: 1024}, {name: "2xl", min: 1024, max: Infinity}],
        showBreakpointIndicator: false
      },
      server: {
        silent: false,
        logs: {
          cookies: true,
          defer: true,
          loaders: true,
          cache: true,
          siteClear: true,
          serverTimings: true,
          actions: true,
        }

      }
    }),
    cloudflareDevProxy({ getLoadContext } as any),
    reactRouter(),
    tsconfigPaths(),
    sessionContextPlugin(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  ssr: {
    resolve: {
      conditions: ["workerd", "worker", "browser"],
      externalConditions: ["workerd", "worker"],
    },
  },

  build: {
    minify: true,
  },
  server: {
    port: 3010,
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    mainFields: ["browser", "module", "main"],
    alias: {
      lodash: "lodash-es"
    }
  },
  optimizeDeps: {
    include: [
      "beautify",
      "react-diff-viewer-continued",
      "classnames",
      "@bkrem/react-transition-group",
      "match-sorter",
      "remove-accents"
    ],
    // exclude: ['amis', 'amis-core', 'amis-formula', 'amis-ui'],
    // 'amis-core', 'amis-formula', , 'amis-ui'
  },
});
