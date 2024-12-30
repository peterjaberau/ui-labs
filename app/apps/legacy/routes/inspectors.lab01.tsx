import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";
import InspectorsPage from "~/routes/inspectors._index.tsx"

export const handle: HandleCustom = {
  links: [
    { label: "Inspectors", link: "", key: "inspectors" },
    { label: "Inspectors Lab01", link: "", key: "lab01" },
  ],
};
export const meta = generateMeta("Inspectors Lab01");
const filePath = "routes/inspectors.lab01.tsx";

export default function InspectorsLabPage01() {
  return <RouteWrapper filePath={filePath}>Inspectors Lab 01</RouteWrapper>;
}
