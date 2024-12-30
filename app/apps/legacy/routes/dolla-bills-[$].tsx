import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Doll Bills", link: "", key: "" }],
};
export const meta = generateMeta("Dolla");
const filePath = "routes/dolla-bills-[$].tsx 	";

export default function SpecialCharPage() {
  return <RouteWrapper filePath={filePath}>SpecialChar Page</RouteWrapper>;
}
