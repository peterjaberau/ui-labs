import { defineRdtConfig } from "react-router-devtools";

const devtoolsConfig = defineRdtConfig({
  /*
      Shift + A to open the devtools
      Esc to close the devtools
   */
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
});

export default devtoolsConfig;
