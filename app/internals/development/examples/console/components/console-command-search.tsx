import { StudioShortcutsGuide } from "~/visuals/components/ui-canvas/studio-shortcuts-guide.tsx"
import { ClientOnly } from "remix-utils/client-only"
import { useState } from "react"

const customShortcuts = {
  canvas: [
    { keys: ["Space"], description: "Pan canvas" },
    { keys: ["Ctrl", "+"], description: "Zoom in" },
    { keys: ["Ctrl", "-"], description: "Zoom out" },
    { keys: ["Ctrl", "0"], description: "Reset zoom" },
    { keys: ["R"], description: "Rotate canvas" },
    { keys: ["F"], description: "Toggle fullscreen" },
  ],
  layers: [
    { keys: ["Ctrl", "J"], description: "Duplicate layer" },
    { keys: ["Ctrl", "G"], description: "Group layers" },
    { keys: ["["], description: "Lower layer opacity" },
    { keys: ["]"], description: "Increase layer opacity" },
    { keys: ["Ctrl", "Shift", "N"], description: "New layer" },
    { keys: ["Ctrl", "Shift", "E"], description: "Merge layers" },
  ],
};

export function ConsoleCommandSearch() {
  const [shortcuts, setShortcuts] = useState(customShortcuts);

  return (
    <ClientOnly>
      {
        () => (
          <StudioShortcutsGuide
            className="w-full min-w-[500px] 2xl:min-w-[600px]"
            shortcuts={customShortcuts}
          />
        )
      }
    </ClientOnly>

  );
}
