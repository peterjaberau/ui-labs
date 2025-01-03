import { Button, Form, Popconfirm, message } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteNewsCategoryByIdsMutation } from "~/apis-client/admin/news/category";

type DeleteActionProps = {
  record: any;
  title: string;
  refetch: any;
};

export function DeleteAction(props: DeleteActionProps) {
  const { record, title, refetch } = props;
  const [deleteIt, { isLoading }] = useDeleteNewsCategoryByIdsMutation();
  return (
    <Form>
      <Popconfirm
        title={title || "Are you sure you want to delete it??"}
        onConfirm={async () => {
          const ids = [record.id];

          const result = await deleteIt({ ids }).unwrap();

          if (result.code !== 0) {
            message.error(result.message ?? "Delete failed");
            return;
          }

          refetch?.();
          message.success("Deleted successfully");
        }}
      >
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          loading={isLoading}
        />
      </Popconfirm>
    </Form>
  );
}
