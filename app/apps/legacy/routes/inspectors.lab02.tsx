import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";
import InspectorsPage from "~/routes/inspectors._index.tsx"

export const handle: HandleCustom = {
  links: [
    { label: "Inspectors", link: "", key: "inspectors" },
    { label: "Inspectors Lab02", link: "", key: "lab02" },
  ],
};
export const meta = generateMeta("Inspectors Lab02");
const filePath = "routes/inspectors.lab02.tsx";

export default function InspectorsLabPage02() {
  return <RouteWrapper filePath={filePath}>Inspectors Lab 02</RouteWrapper>;
}
