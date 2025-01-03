import { Button, Form, Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

type DeleteItProps = {
  fetcher: any;
  record: any;
  title: string;
};

export function DeleteIt({ fetcher, record, title }: DeleteItProps) {
  return (
    <Form>
      <Popconfirm
        title={title || "Are you sure you want to delete it??"}
        onConfirm={() => {
          fetcher.submit(
            { ids: [record.id] },
            { method: "DELETE", encType: "application/json" },
          );
        }}
      >
        <Button type="link" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </Form>
  );
}
