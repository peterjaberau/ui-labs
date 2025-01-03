import { Descriptions, Tag } from "antd";

import { ProCard } from "@ant-design/pro-components";

export const ProjectAbout = () => {
  const { pkg }: any = __APP_INFO__;
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

  const getMajorVersion = (depName: DepType) => {
    return allDeps[depName].match(/\d+/)?.[0] || "";
  };

  type DepType = keyof typeof allDeps;
  return (
    <ProCard>
      <Descriptions title="关于">
        <Descriptions.Item>
          {pkg.name} is based on @remix-run/react$
          <Tag color="purple">{getMajorVersion("@remix-run/react")}.x</Tag>,
          Vite<Tag color="purple">{getMajorVersion("vite")}.x</Tag>, Antd
          <Tag color="purple">{getMajorVersion("antd")}.x</Tag>、 TailwindCSS
          <Tag color="purple">{getMajorVersion("tailwindcss")}.x</Tag>, prisma
          <Tag color="purple">{getMajorVersion("prisma")}.x</Tag>,
          @prisma/client
          <Tag color="purple">{getMajorVersion("@prisma/client")}.x</Tag>,
          TypeScript<Tag color="purple">{getMajorVersion("typescript")}.x</Tag>{" "}
          Development, with built-in dynamic routing, permission verification, menu, and database full-stack management tools
        </Descriptions.Item>
      </Descriptions>
    </ProCard>
  );
};
