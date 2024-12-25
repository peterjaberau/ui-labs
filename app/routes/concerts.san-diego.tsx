import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Concerts", link: "", key: "concerts" },
    { label: "San Diego", link: "", key: "san-diego" },
  ],
};
export const meta = generateMeta("Concerts in San Diego");
const filePath = "routes/concerts.san-diego.tsx";

export default function ConcertsSanDiegoPage() {
  return <RouteWrapper filePath={filePath}>ConcertsSanDiego Page</RouteWrapper>;
}
