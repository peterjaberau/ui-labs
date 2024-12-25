"use client";

import { createActorKitContext } from "~/packages/actor-kit/react";
import type { UserMachine } from "./user.machine";

export const UserContext = createActorKitContext<UserMachine>("user");
export const UserProvider = UserContext.Provider;
