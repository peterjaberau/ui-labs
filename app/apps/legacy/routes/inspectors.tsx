import { Outlet } from "@remix-run/react";
import LayoutWrapper from "~/apps/interactive-routing/components/wrappers/LayoutWrapper";

const filePath = "routes/inspectors.tsx";

export default function InspectorsLayout() {
  return (
    <LayoutWrapper filePath={filePath}>
      <Outlet />
    </LayoutWrapper>
  );
}
