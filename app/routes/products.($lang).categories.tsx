import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Categories", link: "", key: "categories" }],
};
export const meta = generateMeta("Categories");
const filePath = "routes/products.($lang).categories.tsx";

export default function ProductCategoriesPage() {
  return (
    <RouteWrapper filePath={filePath}>Product Categories Page</RouteWrapper>
  );
}
