import type {
  ActorKitSystemEvent,
  BaseActorKitEvent,
  WithActorKitEvent,
  WithActorKitInput,
} from "~/packages/actor-kit";
import { z } from "zod";
import { Env } from "~/env";
import {
  SessionClientEventSchema,
  SessionInputPropsSchema,
  SessionServiceEventSchema,
} from "./session.schemas";

export type SessionClientEvent = z.infer<typeof SessionClientEventSchema>;
export type SessionServiceEvent = z.infer<typeof SessionServiceEventSchema>;
export type SessionInput = WithActorKitInput<z.infer<typeof SessionInputPropsSchema>, any>;

type SessionPublicContext = {
  userId: string;
  gameIdsByJoinCode: Record<string, string>; // joinCode -> gameId mapping
};

type SessionPrivateContext = {};

export type SessionServerContext = {
  public: SessionPublicContext;
  private: Record<string, SessionPrivateContext>;
};
export type SessionEvent = (
  | WithActorKitEvent<SessionClientEvent, "client">
  | WithActorKitEvent<SessionServiceEvent, "service">
  | ActorKitSystemEvent
) &
  BaseActorKitEvent<Env>;
