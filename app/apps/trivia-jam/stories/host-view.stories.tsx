import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "@storybook/test";
import { userEvent } from "@storybook/testing-library";
import { withActorKit } from "~/packages/actor-kit/storybook";
import { createActorKitMockClient } from "~/packages/actor-kit/test";
import React from "react";
import { HostView } from "../components/host-view";
import { GameContext } from "../actors/game.context";
import type { GameMachine } from "../actors/game.machine";
import { SessionContext } from "../actors/session.context";
import type { SessionMachine } from "../actors/session.machine";
import { defaultGameSnapshot, defaultSessionSnapshot } from "./utils";

const meta = {
  title: "Views/HostView",
  component: HostView,
  parameters: {
    layout: "fullscreen",
    autoplay: true,
  },
  args: {
    host: "dev.triviajam.tv"  // Default host value
  },
  decorators: [
    withActorKit<SessionMachine>({
      actorType: "session",
      context: SessionContext,
    }),
    withActorKit<GameMachine>({
      actorType: "game",
      context: GameContext,
    }),
  ],
} satisfies Meta<typeof HostView>;

export default meta;
type Story = StoryObj<typeof HostView>;

export const Docs: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            hostId: "host-123",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
          },
        },
      },
    },
  },
};

export const InLobby: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            hostId: "host-123",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
          },
          value: { lobby: "ready" } as const,
        },
      },
    },
  },
  play: async ({ canvas, mount, step }) => {
    const gameClient = createActorKitMockClient<GameMachine>({
      initialSnapshot: {
        ...defaultGameSnapshot,
        public: {
          ...defaultGameSnapshot.public,
          id: "game-123",
          hostId: "host-123",
          players: [
            { id: "player-1", name: "Player 1", score: 0 },
            { id: "player-2", name: "Player 2", score: 0 },
          ],
        },
        value: { lobby: "ready" } as const,
      },
    });

    // Mock clipboard API before mounting
    const mockClipboard = {
      writeText: fn().mockImplementation(() => Promise.resolve()),
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
      configurable: true
    });

    await step('Mount component with initial state', async () => {
      await mount(
        <GameContext.ProviderFromClient client={gameClient}>
          <HostView host="dev.triviajam.tv" />
        </GameContext.ProviderFromClient>
      );
    });

    await step('Verify game link section', async () => {
      const gameLinkButton = await canvas.findByRole("button", {
        name: /https:\/\/dev\.triviajam\.tv\/games\/game-123/i
      });
      expect(gameLinkButton).toBeInTheDocument();

      await userEvent.click(gameLinkButton);

      expect(mockClipboard.writeText).toHaveBeenCalledWith(
        "https://dev.triviajam.tv/games/game-123"
      );

      const successIcon = await canvas.findByTestId("copy-success-icon");
      expect(successIcon).toBeInTheDocument();
    });

    await step('Verify player list and start game', async () => {
      const player1 = await canvas.findByText("Player 1");
      expect(player1).toBeInTheDocument();
      const player2 = await canvas.findByText("Player 2");
      expect(player2).toBeInTheDocument();

      const startButton = await canvas.findByRole("button", { name: /start game/i });
      expect(startButton).toBeEnabled();

      await userEvent.click(startButton);
      const loadingSpinner = await canvas.findByTestId("loading-spinner");
      expect(loadingSpinner).toBeInTheDocument();
    });
  },
};

export const QuestionControls: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {},
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionPrep" },
        },
      },
    },
  },
  play: async ({ canvas, mount }) => {
    const gameClient = createActorKitMockClient<GameMachine>({
      initialSnapshot: {
        ...defaultGameSnapshot,
        public: {
          ...defaultGameSnapshot.public,
          id: "game-123",
          hostId: "host-123",
          gameStatus: "active",
          players: [
            { id: "player-1", name: "Player 1", score: 0 },
            { id: "player-2", name: "Player 2", score: 0 },
          ],
          questions: {},
          questionResults: [],
          settings: {
            maxPlayers: 10,
            questionCount: 10,
            answerTimeWindow: 30,
          },
        },
        value: { active: "questionPrep" },
      },
    });

    await mount(
      <GameContext.ProviderFromClient client={gameClient}>
        <HostView host="dev.triviajam.tv" />
      </GameContext.ProviderFromClient>
    );

    // Enter question text and numerical answer
    const questionInput = canvas.getByLabelText(/enter question/i);
    await userEvent.type(questionInput, "What year was the Declaration of Independence signed?");

    const answerInput = canvas.getByLabelText(/correct answer/i);
    await userEvent.type(answerInput, "1776");

    const submitButton = canvas.getByRole("button", { name: /submit question/i });
    await userEvent.click(submitButton);

    // Simulate question being set with new structure
    const questionId = "q1";
    gameClient.produce((draft) => {
      draft.public.questions[questionId] = {
        id: questionId,
        text: "What year was the Declaration of Independence signed?",
        correctAnswer: 1776,
        requireExactAnswer: false,
      };
      draft.public.currentQuestion = {
        questionId,
        startTime: Date.now(),
        answers: [],
      };
      draft.value = { active: "questionActive" };
    });

    // Verify question is displayed
    const questionDisplay = await canvas.findByText("What year was the Declaration of Independence signed?");
    expect(questionDisplay).toBeInTheDocument();

    // Simulate player submitting answer
    gameClient.produce((draft) => {
      if (draft.public.currentQuestion) {
        draft.public.currentQuestion.answers.push({
          playerId: "player-1",
          playerName: "Player 1",
          value: 1776,
          timestamp: Date.now(),
        });
      }
    });

    // Wait for answer timeout
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate scores being updated
    gameClient.produce((draft) => {
      draft.public.questionResults.push({
        questionId,
        questionNumber: 1,
        answers: [
          {
            playerId: "player-1",
            playerName: "Player 1",
            value: 1776,
            timestamp: Date.now() - 500,
          }
        ],
        scores: [
          {
            playerId: "player-1",
            playerName: "Player 1",
            points: 3,
            position: 1,
            timeTaken: 0.5,
          }
        ],
      });
      draft.public.players[0].score = 3;
      draft.public.currentQuestion = null;
      draft.value = { active: "questionPrep" };
    });

    // Verify score update
    const playerScore = await canvas.findByText("3");
    expect(playerScore).toBeInTheDocument();
  },
};

export const QuestionInputExactAnswer: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {},
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionPrep" },
        },
      },
    },
  },
};

export const QuestionInputClosestAnswer: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {},
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionPrep" },
        },
      },
    },
  },
  args: {
    initialExactAnswer: false, // This would require a prop to be added to HostView
  },
};

export const GameFinished: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "finished",
            winner: "player-1",
            players: [
              { id: "player-1", name: "Player 1", score: 3 },
              { id: "player-2", name: "Player 2", score: 1 },
            ],
            questions: {},
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: "finished",
        },
      },
    },
  },
  play: async ({ canvas, mount }) => {
    const gameClient = createActorKitMockClient<GameMachine>({
      initialSnapshot: {
        ...defaultGameSnapshot,
        public: {
          ...defaultGameSnapshot.public,
          id: "game-123",
          hostId: "host-123",
          gameStatus: "finished",
          winner: "player-1",
          players: [
            { id: "player-1", name: "Player 1", score: 3 },
            { id: "player-2", name: "Player 2", score: 1 },
          ],
          questions: {},
          questionResults: [],
          settings: {
            maxPlayers: 10,
            questionCount: 10,
            answerTimeWindow: 30,
          },
        },
        value: "finished",
      },
    });

    await mount(
      <GameContext.ProviderFromClient client={gameClient}>
        <HostView host="dev.triviajam.tv" />
      </GameContext.ProviderFromClient>
    );

    // Verify final scores display
    const player1Score = await canvas.findByText("Player 1");
    expect(player1Score).toBeInTheDocument();
    const player1Points = await canvas.findByText("3");
    expect(player1Points).toBeInTheDocument();

    const player2Score = await canvas.findByText("Player 2");
    expect(player2Score).toBeInTheDocument();
    const player2Points = await canvas.findByText("1");
    expect(player2Points).toBeInTheDocument();
  },
};

export const QuestionJustSubmitted: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {
              "q1": {
                id: "q1",
                text: "What year was the Declaration of Independence signed?",
                correctAnswer: 1776,
                requireExactAnswer: false,
              },
            },
            currentQuestion: {
              questionId: "q1",
              startTime: Date.now(),
              answers: [],
            },
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionActive" },
        },
      },
    },
  },
};

export const QuestionWithOneAnswer: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {
              "q1": {
                id: "q1",
                text: "What year was the Declaration of Independence signed?",
                correctAnswer: 1776,
                requireExactAnswer: false,
              },
            },
            currentQuestion: {
              questionId: "q1",
              startTime: Date.now() - 5000, // Started 5 seconds ago
              answers: [
                {
                  playerId: "player-1",
                  playerName: "Player 1",
                  value: 1776,
                  timestamp: Date.now() - 2000, // Answered 2 seconds ago
                },
              ],
            },
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionActive" },
        },
      },
    },
  },
};

export const QuestionWithTwoAnswers: Story = {
  parameters: {
    actorKit: {
      session: {
        "session-123": {
          ...defaultSessionSnapshot,
          public: {
            ...defaultSessionSnapshot.public,
            userId: "host-123",
          },
        },
      },
      game: {
        "game-123": {
          ...defaultGameSnapshot,
          public: {
            ...defaultGameSnapshot.public,
            id: "game-123",
            hostId: "host-123",
            gameStatus: "active",
            players: [
              { id: "player-1", name: "Player 1", score: 0 },
              { id: "player-2", name: "Player 2", score: 0 },
            ],
            questions: {
              "q1": {
                id: "q1",
                text: "What year was the Declaration of Independence signed?",
                correctAnswer: 1776,
                requireExactAnswer: false,
              },
            },
            currentQuestion: {
              questionId: "q1",
              startTime: Date.now() - 10000, // Started 10 seconds ago
              answers: [
                {
                  playerId: "player-1",
                  playerName: "Player 1",
                  value: 1776,
                  timestamp: Date.now() - 8000, // Answered 8 seconds ago
                },
                {
                  playerId: "player-2",
                  playerName: "Player 2",
                  value: 1775,
                  timestamp: Date.now() - 3000, // Answered 3 seconds ago
                },
              ],
            },
            questionResults: [],
            settings: {
              maxPlayers: 10,
              questionCount: 10,
              answerTimeWindow: 30,
              requireExactAnswers: false,
            },
          },
          value: { active: "questionActive" },
        },
      },
    },
  },
};
