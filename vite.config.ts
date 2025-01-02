import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes"
import commonjs from '@rollup/plugin-commonjs';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  plugins: [

    // react({
    //   babel: {
    //     "presets": [
    //       "@babel/preset-env",
    //       "@babel/preset-react",
    //       "@babel/preset-typescript"
    //     ],
    //     "plugins": [
    //       ["@babel/plugin-proposal-decorators", { "legacy": true }],
    //       ["@babel/plugin-proposal-class-properties", { "loose": true }]
    //     ]
    //   }
    // }),

    // commonjs(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        // v3_routeConfig: true,
        v3_singleFetch: true
      },
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes)
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3010,
    // watch: {
    //   ignored: [
    //     "**/registerComponents.ts",
    //     "**/componentRegistry.ts",
    //     "**/*.stories.{js,jsx,ts,tsx}",
    //     "**/*.test.{js,jsx,ts,tsx}",
    //   ],
    // },
    hmr: {
      overlay: true,
    },
  },

  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  //   loader: 'tsx',
  //   target: 'esnext'
  // },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },

  optimizeDeps: {
    include: ['amis'], // Force Vite to pre-bundle 'amis' as ESM
  },


  // css: {
  //   postcss: true,
  // },
});
