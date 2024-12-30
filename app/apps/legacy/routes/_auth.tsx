import { Outlet } from "@remix-run/react";
import LayoutWrapper from "~/apps/interactive-routing/components/wrappers/LayoutWrapper";

const filePath = "routes/_auth.tsx";

export default function authLayout() {
  return (
    <LayoutWrapper filePath={filePath}>
      <Outlet />
    </LayoutWrapper>
  );
}
