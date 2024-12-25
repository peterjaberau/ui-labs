import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Login", link: "/login", key: "login" }],
};
export const meta = generateMeta("Login");

const filePath = "routes/_auth.login.tsx";

export default function authLoginPage() {
  return <RouteWrapper filePath={filePath}>authLogin Page</RouteWrapper>;
}
