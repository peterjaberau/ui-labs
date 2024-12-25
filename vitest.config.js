import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { devErrorBoundary } from "@metronome-sh/dev-error-boundary";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), remix(), devErrorBoundary()],
  test: {
    environment: "jsdom",
    setupFiles: ["dotenv/config"],
    testTimeout: 60000 * 5,
    maxConcurrency: 1,
  },
});
