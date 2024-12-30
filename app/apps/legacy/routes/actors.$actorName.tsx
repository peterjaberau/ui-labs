import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "Actors", link: "", key: "actor-root" },
    { label: "Profile", link: "", key: "profile" },
  ],
};
export const meta = generateMeta("Actor Profile");
const filePath = "routes/actors.$actorName.tsx";

export default function ActorsCommonActornamePage() {
  return (
    <RouteWrapper filePath={filePath}>ActorsCommonActorname Page</RouteWrapper>
  );
}
