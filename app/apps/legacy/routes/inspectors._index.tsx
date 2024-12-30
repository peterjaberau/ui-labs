import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Inspectors", link: "", key: "inspectors" }],
};
export const meta = generateMeta("Inspectors");
const filePath = "routes/inspectors._index.tsx";

export default function InspectorsPage() {
  return <RouteWrapper filePath={filePath}>InspectorsIndex Page</RouteWrapper>;
}
