import { AmisMachineProvider } from "~/internals/development/cloudscape-app/components/RenderAmisComponent/AmisContextProvider.tsx"

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AmisMachineProvider>{children}</AmisMachineProvider>;
}
