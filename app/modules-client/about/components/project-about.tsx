import { Descriptions } from "antd";
import { ProCard } from "@ant-design/pro-components";

export const ProjectAbout = () => {
  const { pkg }: any = __APP_INFO__;
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

  const getMajorVersion = (depName: DepType) => {
    return allDeps[depName].match(/\d+/)?.[0] || "";
  };

  type DepType = keyof typeof allDeps;

  const description = `
    ${pkg.name}is based on @remix-run/react${getMajorVersion("@remix-run/react")}.x、
    Vite${getMajorVersion("vite")}.x、
    Antd${getMajorVersion("antd")}.x 、
    TailwindCSS${getMajorVersion("tailwindcss")}.x 、
    prisma${getMajorVersion("prisma")}.x 、
    @prisma/client${getMajorVersion("@prisma/client")}.x 、
    TypeScript${getMajorVersion("typescript")}.x develop，
Built-in dynamic routing, permission verification, menu, and database full-stack management tools  `;
  return (
    <ProCard>
      <Descriptions title="in regard to">
        <Descriptions.Item>{description}</Descriptions.Item>
      </Descriptions>
    </ProCard>
  );
};
