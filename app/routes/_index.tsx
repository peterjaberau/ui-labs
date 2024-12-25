import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";
import {UserContext} from "~/user.context.tsx";

export const handle: HandleCustom = {
  links: [{ label: "Home", link: "/", key: "home" }],
};
export const meta = generateMeta("Home");

const filePath = "routes/index.tsx";

export default function HomePage() {
  const client = UserContext.useClient();


  return <RouteWrapper filePath={filePath}>Home Page</RouteWrapper>;
}
