import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Concerts", link: "", key: "concerts" },
    { label: "Salt Lake City", link: "", key: "salt-lake-city" },
  ],
};
export const meta = generateMeta("Concerts in Salt Lake city"); // TODO: get from params
const filePath = "routes/concerts.salt-lake-city.tsx";

export default function ConcertsSaltLakeCityPage() {
  return (
    <RouteWrapper filePath={filePath}>ConcertsSaltLakeCity Page</RouteWrapper>
  );
}
