import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "designsys", link: "", key: "designsys" },
    { label: "designsys cloudscape", link: "", key: "designsys-cloudscape" },
  ],
};
export const meta = generateMeta("designsys cloudscape");
const filePath = "routes/designsys.cloudscape.tsx";

export default function DesignSysCloudscapePage() {
  return <RouteWrapper filePath={filePath}>designsys cloudscape</RouteWrapper>;
}
