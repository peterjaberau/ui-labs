import type { ActorServer } from "~/packages/actor-kit";
import type { Remix } from "../server";
import { ScenarioServer } from "./scenario.server";
import type { UserServer } from "./user.server";

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    env: Env;
    userId: string;
    sessionId: string;
    pageSessionId: string;
  }
}

export interface Env {
  REMIX: DurableObjectNamespace<Remix>;
  USER: DurableObjectNamespace<UserServer>;
  SCENARIO: DurableObjectNamespace<ScenarioServer>;
  SESSION_JWT_SECRET: string;
  ACTOR_KIT_SECRET: string;
  ACTOR_KIT_HOST: string;
  NODE_ENV: string;
  [key: string]: DurableObjectNamespace<ActorServer<any>> | unknown;
}
