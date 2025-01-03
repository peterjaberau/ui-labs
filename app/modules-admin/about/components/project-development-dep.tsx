import { BlankLink } from "./blank-link";
import { Descriptions } from "antd";
import { ProCard } from "@ant-design/pro-components";

export const ProjectDevelopmentDep = () => {
  const { pkg }: any = __APP_INFO__;
  return (
    <ProCard>
      <Descriptions title="Development dependencies" column={2} bordered>
        {Object.keys(pkg.devDependencies)?.map(
          (value: string, number: number) => {
            return (
              <Descriptions.Item label={value} key={number}>
                <BlankLink url={value} text={pkg.devDependencies[value]} />
              </Descriptions.Item>
            );
          },
        )}
      </Descriptions>
    </ProCard>
  );
};
