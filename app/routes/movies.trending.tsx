import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Trending", link: "", key: "trending" }],
};
export const meta = generateMeta("Trending Movies");
const filePath = "routes/movies.trending.tsx";

export default function MoviesTrendingPage() {
  return <RouteWrapper filePath={filePath}>MoviesTrending Page</RouteWrapper>;
}
