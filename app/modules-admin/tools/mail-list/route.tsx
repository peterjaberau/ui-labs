import { PageContainer, ProTable } from "@ant-design/pro-components";
import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/common";
import { createColumns } from "./components/createColumns";
import { useParams } from "react-router";
import { useReadMailTemplateListQuery } from "~/apis-client/admin/tools/mail";

export function Route() {
  const { lang } = useParams();
  const [page, setPage] = useState({
    page: 1,
    pageSize: 110,
  });
  const { data, isLoading, refetch } = useReadMailTemplateListQuery(page);

  const columns = useMemo(() => {
    return createColumns({ lang, refetch });
  }, [lang, refetch]);

  return (
    <PageContainer>
      <ProTable
        loading={isLoading}
        size="small"
        search={false}
        headerTitle="登录记录"
        rowKey="id"
        showSorterTooltip
        dataSource={data?.data?.list || []}
        toolBarRender={() => [
          <ButtonLink
            key="create-mail"
            to={`/${lang!}/admin/tools/mail`}
            type={"new"}
            content="去新建"
          />,
        ]}
        columns={columns as any}
        options={{
          reload: refetch,
        }}
        pagination={{
          total: data?.data?.total,
          pageSize: 10,
          onChange(page, pageSize) {
            setPage({
              page,
              pageSize,
            });
          },
        }}
      />
    </PageContainer>
  );
}
