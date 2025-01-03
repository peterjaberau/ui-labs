import { Link, useParams } from "react-router";
import { Space, Tag } from "antd";

import { DeleteAction } from "./DeleteAction";
import { UpdateLinkCategoryModal } from "./UpdateLinkCategoryModal";

function LinkTag({ record }: any) {
  const { lang } = useParams();
  return (
    <Link to={`/${lang}/admin/profile/link/category/${record?.id}`}>
      <Tag color="blue">{record?.name}</Tag>
    </Link>
  );
}

export function createColumns({ refetch }: any) {
  return [
    {
      dataIndex: "name",
      title: "Link category name",
      render(_: any, record: any) {
        return <LinkTag record={record} />;
      },
    },
    {
      dataIndex: "description",
      title: "Description",
    },
    {
      dataIndex: "op",
      title: "Operations",
      render(_: any, record: any) {
        return (
          <Space>
            <UpdateLinkCategoryModal
              key="link-category-modal-modify"
              record={record}
              refetch={refetch}
            />
            <DeleteAction record={record} refetch={refetch} title="Delete" />
          </Space>
        );
      },
    },
  ];
}
