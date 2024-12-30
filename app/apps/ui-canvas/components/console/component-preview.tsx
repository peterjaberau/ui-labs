import * as React from "react"
import { RotateCcw } from "lucide-react"
import { cn } from "~/lib/utils"
import { useConfig } from "../../hooks/use-config"
import { Button } from "../ui/button.tsx"
import ComponentWrapper from "./component-wrapper"
import { Icons } from "./icons"
import { Index } from "~/registry"
import { data as styles } from '~/data/registry/registry-styles'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  align?: "center" | "start" | "end"
  preview?: boolean
}

export function ComponentPreview({ name, children, className, align = "center", preview = false, ...props }: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0)
  const [config] = useConfig()
  const index = styles.findIndex((style) => style.name === config.style)


  const Preview = React.useMemo(() => {
    const Component = Index[config.style][name]?.component

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`)
      return (
        <p className="text-sm text-muted-foreground">
          Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code> not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, config.style])

  return (
    <div className={cn("relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]", className)} {...props}>
      <div className="relative mr-auto w-full">
        <div className="relative rounded-md">
          <ComponentWrapper>
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-1.5 top-1.5 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw aria-label="restart-btn" size={16} />
            </Button>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </div>
      </div>
    </div>
  )
}
