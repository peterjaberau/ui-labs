import { z } from "zod";

// Input Schema
export const GameInputPropsSchema = z.object({
  hostName: z.string(),
});

// Event Schemas
export const GameClientEventSchema = z.discriminatedUnion("type", [
  // Host Events
  z.object({
    type: z.literal("START_GAME"),
  }),
  z.object({
    type: z.literal("SUBMIT_QUESTION"),
    text: z.string(),
    correctAnswer: z.number(),
    requireExactAnswer: z.boolean(),
  }),
  z.object({
    type: z.literal("END_GAME"),
  }),
  z.object({
    type: z.literal("SKIP_QUESTION"),
  }),

  // Player Events
  z.object({
    type: z.literal("JOIN_GAME"),
    playerName: z.string(),
  }),
  z.object({
    type: z.literal("SUBMIT_ANSWER"),
    value: z.number(),
  }),

  // Update Settings Event
  z.object({
    type: z.literal("UPDATE_SETTINGS"),
    settings: z.object({
      maxPlayers: z.number().min(2).max(1000000),
      questionCount: z.number().min(1).max(50),
      answerTimeWindow: z.number().min(5).max(120),
    }),
  }),

  // Remove Player Event
  z.object({
    type: z.literal("REMOVE_PLAYER"),
    playerId: z.string(),
  }),
]);

export const GameServiceEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("SYNC_PLAYERS"),
    players: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        score: z.number(),
      })
    ),
  }),
  z.object({
    type: z.literal("ANSWER_TIMEOUT"),
    questionId: z.string(),
    questionNumber: z.number(),
  }),
  z.object({
    type: z.literal("UPDATE_SCORES"),
    result: z.object({
      questionId: z.string(),
      questionNumber: z.number(),
      answers: z.array(z.object({
        playerId: z.string(),
        playerName: z.string(),
        value: z.number(),
        timestamp: z.number(),
      })),
      scores: z.array(z.object({
        playerId: z.string(),
        playerName: z.string(),
        points: z.number(),
        position: z.number(),
        timeTaken: z.number(),
      })),
    }),
  }),
]);
