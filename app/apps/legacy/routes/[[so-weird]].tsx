import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "[so-weird]", link: "/", key: "so-weird" }],
};
export const meta = generateMeta("So Weird");
const filePath = "routes/[[so-weird]].tsx";

export default function SpecialCharPage() {
  return <RouteWrapper filePath={filePath}>SpecialChar Page</RouteWrapper>;
}
