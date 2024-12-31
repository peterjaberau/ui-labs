import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import { initialContext, rootConfig, pageSchemaConfig, appVariablesConfig, schemaHistory } from "./coreEditorConfig.ts"
import { Ok } from "ts-results-es"
// import pkg from "ts-results"
// const { Ok } = pkg

export const coreEditorMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setValue:assign(({ context, event }: any) => {
      return {
        root: event.output.val.root,
        schema: event.output.val.schema,
        appVariables: event.output.val.appVariables,
        schemaHistory: event.output.val.schemaHistory,
      }
    }),
  },
  actors: {
    loadFromApi: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok({
        root: rootConfig,
        schema: pageSchemaConfig,
        appVariables: appVariablesConfig,
        schemaHistory: schemaHistory,
      });
    }),
  },
  guards: {},
}).createMachine({
  id: "core-editor-machine",
  initial: 'loading',
  context: {
    ...initialContext,
  } as any,
  states: {
    loading: {
      invoke: {
        src: "loadFromApi",
        id: "loadFromApi",
        onDone: {
          target: "ready",
          actions: "setValue",
        },
      },
    },
    ready: {
      on: {
        INCOMING_EVENT: {
          actions: "setValue",
        },
      },
    },
  },
});
