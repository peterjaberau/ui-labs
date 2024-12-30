import type {
  ActorKitSystemEvent,
  BaseActorKitEvent,
  EnvWithDurableObjects,
  WithActorKitEvent,
  WithActorKitInput,
} from "~/packages/actor-kit";
import { z } from "zod";
import {
  UserClientEventSchema,
  UserInputPropsSchema,
  UserServiceEventSchema,
} from "./user.schemas";

export type UserClientEvent = z.infer<typeof UserClientEventSchema>;
export type UserServiceEvent = z.infer<typeof UserServiceEventSchema>;
export type UserInput = WithActorKitInput<
  z.infer<typeof UserInputPropsSchema>, any
> & {
  id: string;
  caller: { id: string };
  storage: DurableObjectStorage;
};

export type UserPublicContext = {
  id: string;
  createdAt: number;
  scenarioIds: string[];
};

export type UserPrivateContext = {
  userIds: string[];
};

export type UserServerContext = {
  public: UserPublicContext;
  private: Record<string, UserPrivateContext>;
};

export type UserEvent = (
  | WithActorKitEvent<UserClientEvent, "client">
  | WithActorKitEvent<UserServiceEvent, "service">
  | ActorKitSystemEvent
) &
  BaseActorKitEvent<EnvWithDurableObjects>;
