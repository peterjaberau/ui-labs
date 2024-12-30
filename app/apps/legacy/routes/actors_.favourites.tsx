import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Actors", link: "", key: "actors-root" },
    { label: "Favourites", link: "", key: "favourites" },
  ],
};
export const meta = generateMeta("Favourite Actors");
const filePath = "routes/actors_.favourites.tsx";

export default function ActorsFavouritesPage() {
  return <RouteWrapper filePath={filePath}>ActorsFavourites Page</RouteWrapper>;
}
