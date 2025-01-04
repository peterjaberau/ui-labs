import { Button, Form, Popconfirm, message } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

type DeleteItProps = {
  refetch: any;
  title?: string;
  deleteHandler: (...args: any) => any;
};

export function PTableDeleteAction({
  title,
  refetch,
  deleteHandler,
}: DeleteItProps) {
  return (
    <Form>
      <Popconfirm
        title={title || "Are you sure you want to delete it??"}
        onConfirm={async () => {
          const result = await deleteHandler();
          if (result.data?.code !== 0) {
            message.error(result.data?.message);
            return false;
          }
          message.success(result.data?.message);
          refetch();
          return true;
        }}
      >
        <Button type="link" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </Form>
  );
}
