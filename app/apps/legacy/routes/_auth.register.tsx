import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Register", link: "/register", key: "register" }],
};
export const meta = generateMeta("Register");

const filePath = "routes/_auth.register.tsx";

export default function authRegisterPage() {
  return <RouteWrapper filePath={filePath}>authRegister Page</RouteWrapper>;
}
