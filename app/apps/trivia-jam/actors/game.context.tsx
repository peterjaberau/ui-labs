"use client";

import { createActorKitContext } from "~/packages/actor-kit/react";
import type { gameMachine } from "./game.machine";

export const GameContext = createActorKitContext<typeof gameMachine>("game");
export const GameProvider = GameContext.Provider;
