import { Outlet } from "@remix-run/react";
import LayoutWrapper from "~/apps/interactive-routing/components/wrappers/LayoutWrapper";

const filePath = "routes/actors.tsx";

export default function ActorsLayout() {
  return (
    <LayoutWrapper filePath={filePath}>
      <Outlet />
    </LayoutWrapper>
  );
}
