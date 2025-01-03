import { Descriptions, Tag } from "antd";

import { BlankLink } from "./blank-link";
import { ProCard } from "@ant-design/pro-components";

export const ProjectInfo = () => {
  const { pkg, lastBuildTime }: any = __APP_INFO__;
  return (
    <ProCard>
     <Descriptions title="Project Information" column={2} bordered>
        <Descriptions.Item label="version">
          <Tag color="processing">{pkg.version}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Last compile time">
          <Tag color="processing">{lastBuildTime}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="GitHub">
          <BlankLink url={pkg.repository.url} text="GitHub" />
        </Descriptions.Item>
        <Descriptions.Item label="Preview address">
          <BlankLink url={pkg.homepage} text="Preview address" />
        </Descriptions.Item>
      </Descriptions>
    </ProCard>
  );
};
