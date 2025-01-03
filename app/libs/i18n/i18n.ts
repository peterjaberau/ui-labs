import type { InitOptions } from "i18next";

export default {
  supportedLngs: ["en-US", "en-AU"],
  fallbackLng: "en-AU",
  defaultNS: "common",
  react: { useSuspense: false },
} satisfies InitOptions;
