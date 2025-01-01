// app/utils/componentRegistry.ts
import { ComponentType } from "react";

type ComponentMap = Record<string, () => Promise<{ default: ComponentType<any> }>>;

class ComponentRegistry {
  private components: ComponentMap = {};

  register(name: string, loader: () => Promise<{ default: ComponentType<any> }>) {
    this.components[name] = loader;
  }

  resolve(name: string) {
    const loader = this.components[name];
    if (!loader) {
      throw new Error(`Component "${name}" is not registered.`);
    }
    return loader();
  }
}

// Singleton instance
let registry: ComponentRegistry;

if (!(globalThis as any).componentRegistry) {
  (globalThis as any).componentRegistry = new ComponentRegistry() as any;
}

registry = (globalThis as any).componentRegistry;

export const componentRegistry = registry;
