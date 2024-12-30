import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "About", link: "/about", key: "about" }],
};
export const meta = generateMeta("About");

const filePath = "routes/about.tsx";

export default function AboutPage() {
  return <RouteWrapper filePath={filePath}>About Page</RouteWrapper>;
}
