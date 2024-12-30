import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [
    { label: "designsys", link: "", key: "designsys" },
    { label: "designsys antd", link: "", key: "designsys-antd" },
  ],
};
export const meta = generateMeta("designsys antd");
const filePath = "routes/designsys.antd.tsx";

export default function DesignSysAntdPage() {
  return <RouteWrapper filePath={filePath}>designsys antd</RouteWrapper>;
}
