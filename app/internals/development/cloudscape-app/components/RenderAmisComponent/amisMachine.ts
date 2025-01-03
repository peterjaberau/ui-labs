import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from "xstate"
import { Ok } from "ts-results-es"
import { getRenderers } from "amis"

import {
  initialContext,
  plugins,
  pluginActions,
  pluginEvents,
  tpls as pluginTpls,
} from "./amisConfig.ts"
import {
  views as dbViews,
  viewItems as dbViewItems,
  viewItemUsages as dbViewItemUsages,
  getViews as getDbViews,
  generateViewLinks as getDbViewLinks,
  generateDashboardItems as getDbDashboardItems,
  generateDashboardItems,
} from "../../stores/internal-database"
import { initialConfigSnapshot as initialInternalConfig } from "../../stores/config.ts"

export const amisCreateMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setUrlParams: assign(({ context, event }: any) => {
      console.log("setUrlParams", event.urlParams)
      return {
        internalState: {
          urlParams: event.urlParams,
        },
      }
    }),

    switchBooleanValue: assign(({ context, event }: any) => {
      /* event: {
          scope: "intenalState",
          key: "splitPanelOpen | navigationOpen",
          type: "TOGGLE_CHANGE",
          value: detail.open,
        }
      */


      if ((event.scope = "internalState")) {
        if (event.key === "splitPanelOpen" || event.key === "navigationOpen") {
          return {
            internalState: {
              [event.key]: !context.internalState.splitPanelOpen,
            },
          }
        }
      }
      return context
    }),

    updateStringValue: assign(({ context, event }: any) => {
      /* event: {
          scope: "intenalState",
          key: "splitPanelPosition | activeDrawerId",
          type: "STRING_CHANGE",
          value: detail.position,
        }
      */


      if ((event.scope = "internalState")) {
        if (event.key === "splitPanelPosition" || event.key === "activeDrawerId") {
          return {
            internalState: {
              [event.key]: event.value,
            },
          }
        }
      }
      return context
    }),


    connectToComponent: assign(({ context, event }: any) => {
      console.log("connectToComponent", {
        context: context,
        event: event,
      })

      const currentPlugin = context.plugins.find(
        (plugin: any) => plugin.rendererName === event.rendererName,
      )
      const currentEvents = context.pluginEvents?.[event.rendererName]
      const currentActions = context.pluginActions?.[event.rendererName]
      context.current = {
        currentPlugin: {
          ...currentPlugin,
          events: currentEvents,
          actions: currentActions,
        },
        connected: true,
      }
    }),

    setValue: assign(({ context, event }: any) => {
      return {
        renderers: event.output.val,
      }
    }),
    setPluginsValue: assign(({ context, event }: any) => {
      const pluginsObj = event.output.value
      if (!pluginsObj.plugins) return context

      const metadataPlugins = pluginsObj.plugins.map((plugin: any) => ({
        value: plugin.rendererName,
        label: plugin.name,
      }))
      return {
        ...context,
        ...pluginsObj,
        metadata: {
          plugins: metadataPlugins,
        },
      }
    }),
    setTemplatesValue: assign(({ context, event }: any) => {
      return {
        pluginTpls: event.output.value.pluginTpls,
      }
    }),
    setInternalValue: assign(({ context, event }: any) => {
      const dbValue = event.output.value
      if (!dbValue) return context

      const internalDb = dbValue
      const initialConfig = initialInternalConfig

      //NB: This is a hack to get the initial config to be set - but db not get reflect into this state
      const updated = {
        internalDatabase: dbValue,
        internalConfig: {
          ...initialConfig,
          dashboardItems: [],
        },
      }

      return {
        internalDatabase: dbValue,
        internalConfig: {
          ...initialConfig,
          dashboardItems: [],
        },
      }
    }),

    setDashboardItems: assign(({ context, event }: any) => {
      console.log("setDashboardItems", context.internalState.urlParams.view)

      const dashboardItems = generateDashboardItems(context.internalState.urlParams.view)
      return {
        internalConfig: {
          ...context.internalConfig,
          dashboardItems: dashboardItems,
        },
      }
    }),
  },
  actors: {
    getRenderersActor: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      // return new Ok(getRenderers());
      return new Ok([])
    }),
    getPlugins: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({
        plugins: plugins,
        pluginEvents: pluginEvents,
        pluginActions: pluginActions,
      })
    }),
    getTemplates: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({
        pluginTpls: pluginTpls,
      })
    }),
    getInternalDb: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({
        views: dbViews,
        viewItems: dbViewItems,
        viewItemUsages: dbViewItemUsages,
      })
    }),
    setInternalState: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00))
      return new Ok({
        pluginTpls: pluginTpls,
      })
    }),
  },
  guards: {},
}).createMachine({
  id: "amis-machine",
  initial: "gettingRenderers",
  context: {
    metadata: {
      plugins: [],
    },
    current: {
      connected: false,
      currentPlugin: undefined,
    },
    internalDatabase: {
      views: [],
      viewItems: [],
      viewItemUsages: [],
    },
    internalConfig: {},
    internalState: {
      splitPanelOpen: false,
      splitPanelPosition: "side", // 'side' | 'bottom'
      navigationOpen: true,
      activeDrawerId: null, // 'drawer-inspector'
      activeHref: "/",
      urlParams: {},
    },
    plugins: [],
    pluginEvents: {},
    pluginActions: {},
    tpls: {},
    ...initialContext,
  } as any,
  states: {
    gettingRenderers: {
      invoke: {
        src: "getRenderersActor",
        id: "getRenderersActor",
        onDone: {
          target: "gettingPlugins",
          actions: "setValue",
        },
      },
    },

    gettingPlugins: {
      invoke: {
        src: "getPlugins",
        id: "getPlugins",
        onDone: {
          target: "gettingTemplates",
          actions: "setPluginsValue",
        },
      },
    },

    gettingTemplates: {
      invoke: {
        src: "getTemplates",
        id: "getTemplates",
        onDone: {
          target: "gettingInternalDb",
          actions: "setTemplatesValue",
        },
      },
    },

    gettingInternalDb: {
      invoke: {
        src: "getInternalDb",
        id: "getInternalDb",
        onDone: {
          target: "ready",
          actions: "setInternalValue",
        },
      },
    },

    ready: {
      on: {
        CONNECT_TO_COMPONENT: {
          target: "settingDashboardItems",
          actions: ["setUrlParams", "connectToComponent"],
        },

        INCOMING_EVENT: {
          actions: "setValue",
        },

        TOGGLE_CHANGE: {
          actions: "switchBooleanValue",
        },
        STRING_CHANGE: {
          actions: "updateStringValue",
        }
      },
    },
    settingDashboardItems: {
      always: {
        target: "ready",
        actions: "setDashboardItems",
      },
    },
  },
})
