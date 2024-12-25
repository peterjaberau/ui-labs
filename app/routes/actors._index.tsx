import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Actors", link: "", key: "actors" }],
};
export const meta = generateMeta("Actors");
const filePath = "routes/actors._index.tsx";

export default function ActorsindexPage() {
  return <RouteWrapper filePath={filePath}>Actorsindex Page</RouteWrapper>;
}
