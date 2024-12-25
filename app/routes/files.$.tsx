import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Files", link: "", key: "files" }],
};
export const meta = generateMeta("Files");
const filePath = "routes/files.$.tsx";

export default function FilesGenericPage() {
  return <RouteWrapper filePath={filePath}>Files Generic Page</RouteWrapper>;
}
