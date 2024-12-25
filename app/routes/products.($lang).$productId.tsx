import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Products", link: "", key: "products" }],
};
export const meta = generateMeta("Products");
const filePath = "routes/products.($lang).$productId.tsx";

export default function ProductPage() {
  return <RouteWrapper filePath={filePath}>ProductPage</RouteWrapper>;
}
