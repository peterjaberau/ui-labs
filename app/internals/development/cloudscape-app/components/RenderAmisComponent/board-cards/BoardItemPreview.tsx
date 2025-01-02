import React, { useEffect } from "react";
import { Flex } from "antd";
import JsonView from "react18-json-view";
import { ClientOnly } from "remix-utils/client-only"

export const BoardItemPreview = React.memo((props: any) => {
  const [loading, setLoading] = React.useState(true);
  const [renderAmis, setRenderAmis] = React.useState<any>(null);

  useEffect(() => {
    setLoading(false);

    // Dynamically import renderAmis only in the browser
    import("amis-core").then((amis) => {
      setRenderAmis(() => amis.render);
    });
  }, []);

  return (
    <ClientOnly>
      {() => (
        <Flex
          vertical
          style={{ padding: "20px" }}
          justify={"center"}
          align={"center"}
        >
          {/* Show a spinner or placeholder until loading completes */}
          {loading && <div>Loading...</div>}
          {renderAmis &&
            renderAmis({
              type: "page",
              body: {
                type: "spinner",
                show: loading,
                overlay: true,
                body: props,
              },
            })}
          <JsonView collapsed={1} displaySize={true} src={{ ...props }} />
        </Flex>
      )}
    </ClientOnly>
  );
});
