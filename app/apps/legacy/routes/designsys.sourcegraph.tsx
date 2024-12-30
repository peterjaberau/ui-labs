import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "designsys", link: "", key: "designsys" },
    { label: "designsys sourcegraph", link: "", key: "designsys-sourcegraph" },
  ],
};
export const meta = generateMeta("designsys sourcegraph");
const filePath = "routes/designsys.sourcegraph.tsx";

export default function DesignSysSourcegraphPage() {
  return <RouteWrapper filePath={filePath}>designsys sourcegraph</RouteWrapper>;
}
