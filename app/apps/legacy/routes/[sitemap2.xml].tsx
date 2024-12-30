import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Sitemap 2", link: "/sitemap2.xml", key: "Sitemap-2" }],
};
export const meta = generateMeta("Sitemap 2");
const filePath = "routes/[sitemap2.xml].tsx";

export default function SpecialCharPage() {
  return <RouteWrapper filePath={filePath}>SpecialChar Page</RouteWrapper>;
}
