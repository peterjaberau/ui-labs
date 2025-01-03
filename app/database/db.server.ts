import { drizzle, type DrizzleD1Database } from "drizzle-orm/d1";
import { getSessionContext } from "session-context";
import * as schema from "./schema";

export const getDatabaseFromContext = () => {
  const store = getSessionContext<{
    db?: DrizzleD1Database<typeof schema>;
    env: Env;
  }>();
  if (!store.db) {
    store.db = drizzle(store.env.DB, {
      schema,
      logger:
        store.env.ENVIRONMENT === "development"
          ? {
              logQuery: (query, params) => {
                console.log("\n\x1b[36m🔍 SQL Query\x1b[0m");
                console.log(`\x1b[33m${query}\x1b[0m`);
                if (params && Object.keys(params).length) {
                  console.log(`\x1b[32mParameters: ${params}\x1b[0m`);
                }
              },
            }
          : false,
    });
  }

  return store.db;
};

export const db = new Proxy<DrizzleD1Database<typeof schema>>({} as never, {
  get(_target: unknown, props: keyof DrizzleD1Database<typeof schema>) {
    const instance = getDatabaseFromContext();
    const value = instance[props];

    if (typeof value === "function") {
      return value.bind(instance);
    }

    return value;
  },
});
