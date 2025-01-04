import {
  ContainerContent,
  WorkplaceColOne,
  WorkplaceColTwo,
} from "./components";

import { PageContainer } from "@ant-design/pro-components";
import { Row } from "antd";
import type { loader } from "./loader";
import { useLoaderData } from "react-router";

export function Route() {
  const data = useLoaderData<typeof loader | any>().data;
  return (
    <PageContainer breadcrumb={{}} content={<ContainerContent data={data} />}>
      <Row gutter={[8, 8]}>
        <WorkplaceColOne data={data} />
        <WorkplaceColTwo data={data} />
      </Row>
    </PageContainer>
  );
}
