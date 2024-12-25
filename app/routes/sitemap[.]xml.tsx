import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Sitemap", link: "", key: "sitemap" }],
};
export const meta = generateMeta("Sitemap");
const filePath = "routes/sitemap[.]xml.tsx 	";

export default function SpecialCharPage() {
  return <RouteWrapper filePath={filePath}>SpecialChar Page</RouteWrapper>;
}
