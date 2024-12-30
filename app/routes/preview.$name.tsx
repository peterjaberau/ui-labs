import { useParams, useSearchParams } from "@remix-run/react";
import { lazy, Suspense, useMemo, useState } from "react";
import { getComponentInfo } from "~/data/ui-resources.ts";
import * as React from "react";
import ComponentWrapper from "~/apps/ui-canvas/components/console/component-wrapper.tsx";
import { cn } from "~/lib/utils.ts";
import { Button } from "~/apps/ui-canvas/components/ui/button.tsx";
import { RotateCcw } from "lucide-react";
import { Icons } from "~/apps/ui-canvas/components/console/icons.tsx";
import _ from "lodash";

export default function Preview() {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const [key, setKey] = useState(0);

  const config = name && getComponentInfo(name);
  const path = config?.path;
  const initialProps = config?.props || {};

  const Component = path ? lazy(() => import(/* @vite-ignore */ path)) : null;

  const urlParams = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);
  const combinedProps = useMemo(() => ({ ...initialProps, ...urlParams }), [initialProps, urlParams]);

  const Preview = React.useMemo(() => {
    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code> not found in registry.
        </p>
      );
    }
    return <Component {...combinedProps} />;
  }, [Component, combinedProps]);

  return (
    <div
      className={cn("relative my-4 flex flex-col space-y-2 flex-grow max-w-[800px] mx-auto h-[500px]", initialProps['className'])} {..._.omit(initialProps, ['className'])}>
      <div className="relative w-full h-full mx-auto flex-grow">
        <div className="relative w-full h-full rounded-md">
          <ComponentWrapper>
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-1.5 top-1.5 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw aria-label="restart-btn" size={16} />
            </Button>
            <Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </Suspense>
          </ComponentWrapper>
        </div>
      </div>
    </div>
  );
}
