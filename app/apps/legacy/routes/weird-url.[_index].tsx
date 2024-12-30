import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Weird URL", link: "", key: "weird" }],
};
export const meta = generateMeta("Weird");
const filePath = "routes/weird-url.[_index].tsx ";

export default function SpecialCharPage() {
  return <RouteWrapper filePath={filePath}>SpecialChar Page</RouteWrapper>;
}
