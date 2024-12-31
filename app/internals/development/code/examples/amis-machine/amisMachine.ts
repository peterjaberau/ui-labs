import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import { initialContext, plugins, pluginActions, pluginEvents, tpls } from "./amisConfig.ts"
import { Ok } from "ts-results-es"
import { getRenderers } from 'amis';
// import pkg from "ts-results"
// const { Ok } = pkg

export const amisMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    connectToComponent:assign(({ context, event }: any) => {
      const currentPlugin = context.plugins.find((plugin: any) => plugin.rendererName === event.rendererName)
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

    setValue:assign(({ context, event }: any) => {
      // console.log("setValue------", event)
      // console.log("setValueContext------", { renderers: event.output.val })
      return {
        renderers: event.output.val,
      }
    }),
    setPluginsValue:assign(({ context, event }: any) => {
      const pluginsObj = event.output.val
      const metadataPlugins = pluginsObj.plugins.map((plugin: any) => ({
        value: plugin.rendererName,
        label: plugin.name,
      }));
      return {
        ...context,
        ...pluginsObj,
        metadata: {
          plugins: metadataPlugins,
        },
      }
    }),

    setTemplatesValue:assign(({ context, event }: any) => {
      return {
        tpls: event.output.val.tpls,
      }
    }),

  },
  actors: {
    getRenderersActor: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok(getRenderers());
    }),
    getPlugins: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok({
        plugins: plugins,
        pluginEvents: pluginEvents,
        pluginActions: pluginActions
      });
    }),
    getTemplates: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok({
        tpls: tpls
      });
    }),
  },
  guards: {},
}).createMachine({
  id: "amis-machine",
  initial: 'gettingRenderers',
  context: {
    metadata: {
      plugins: []
    },
    current: {
      connected: false,
      currentPlugin: undefined,
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
          target: "ready",
          actions: "setTemplatesValue",
        },
      },
    },

    ready: {
      on: {
        CONNECT_TO_COMPONENT: {
          target: "ready",
          actions: "connectToComponent",

        },
        INCOMING_EVENT: {
          actions: "setValue",
        },
      },
    },
  },
});
