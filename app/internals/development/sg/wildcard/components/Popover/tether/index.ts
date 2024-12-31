// Tether primitive models and structures
export * from './models/tether-models.ts'
export * from './models/geometry/point.ts'
export * from './models/geometry/rectangle.ts'

// The main entry point of tooltip positioning engine
export { createTether } from './services/tether-registry.ts'

// Shared type interfaces
export type { Tether } from './services/types.ts'
export type { TetherInstanceAPI } from './services/tether-registry.ts'
export { TetherAPI } from './services/tether-registry.ts'
