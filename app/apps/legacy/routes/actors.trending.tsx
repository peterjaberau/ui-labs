import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Actors", link: "", key: "actors" },
    { label: "Trending", link: "", key: "trending" },
  ],
};
export const meta = generateMeta("Trending Actors");
const filePath = "routes/actors.trending.tsx";

export default function ActorsTrendingPage() {
  return <RouteWrapper filePath={filePath}>ActorsTrending Page</RouteWrapper>;
}
