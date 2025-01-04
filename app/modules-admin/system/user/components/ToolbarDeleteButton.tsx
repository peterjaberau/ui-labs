import { ToolbarDeleteButtonUI } from "./ToolbarDeleteButtonUI";
import { message } from "antd";
import { useDeleteUserByIdsMutation } from "@/apis-client/admin/system/user";

type ToolbarDeleteButtonProps = {
  selectedRow: any[];
  reload: (...args: any) => any;
  setSelectedRow: any;
};

export function ToolbarDeleteButton(props: ToolbarDeleteButtonProps) {
  const { selectedRow, reload, setSelectedRow } = props;
  const [deleteUser] = useDeleteUserByIdsMutation();
  return (
    <ToolbarDeleteButtonUI
      selectedRow={selectedRow}
      onConfirm={async () => {
        const ids = selectedRow.map((id: any) => id);
        const result = await deleteUser(ids);
        if (result.data?.code !== 0) {
          message.error(result.data?.message);
          return false;
        }
        message.success(result.data?.message);
        reload?.();
        setSelectedRow([]);
        return true;
      }}
    />
  );
}
