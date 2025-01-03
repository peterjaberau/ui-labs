# create-machine

```typescript

import { setup, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import { Ok } from "ts-results-es";
import { initialContext, data } from "./config"


export const renderViewMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    setValue:assign(({ context, event }: any) => {
      return {
        name: event.value,
      }
    }),

    setValue1:assign(({ context, event }: any) => {
     context.name = event.value
    }),
    
  },
  actors: {
    initialLoad: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok([]);
    }),
  },
  guards: {},
}).createMachine({
  id: "machine",
  initial: 'idle',
  context: {
    connected: false,
    selected: undefined,
    name: undefined,
    pluginEvents: {},
    ...initialContext,
  } as any,
  
  states: {
    idle: {
      invoke: {
        src: "initialLoad",
        id: "initialLoad",
        onDone: {
          target: "ready",
          actions: "setValue",
        },
      },
    },

    ready: {
      on: {
        CONNECT_EVENT: {
          target: "ready",
          actions: "connectToComponent",

        },
        INCOMING_EVENT: {
          actions: "setValue1",
        },
        ERROR_EVENT: {
          target: "errorState",
          actions: "setValue",
        },
      },
    },
    errorState: {
      on: {
        RETRY: {
          target: "ready",
          actions: "setValue",
        },
        CANCEL: {
          target: "ready",
        }
      },
    },
  },
});


```
