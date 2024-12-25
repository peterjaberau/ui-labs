import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Concerts", link: "", key: "concerts" },
    { label: "Trending", link: "", key: "trending" },
  ],
};
export const meta = generateMeta("Trending Concerts");
const filePath = "routes/concerts.trending.tsx";

export default function ConcertsTrendingPage() {
  return <RouteWrapper filePath={filePath}>ConcertsTrending Page</RouteWrapper>;
}
