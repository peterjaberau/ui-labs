import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Design Systems", link: "", key: "designsys" }],
};
export const meta = generateMeta("Design Systems");
const filePath = "routes/designsys._index.tsx";

export default function DesignSysPage() {
  return <RouteWrapper filePath={filePath}>DesignSystem Index Page</RouteWrapper>;
}
