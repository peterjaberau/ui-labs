import { Tag } from "antd";

type CacheTypeProps = {
  isCache: 0 | 1 | null;
};

export function CacheType({ isCache }: CacheTypeProps) {
  return (
    <>
      {isCache === null && <>-</>}
      {isCache === 0 && <Tag>Deny</Tag>}
      {isCache === 1 && <Tag color={"green"}>Allow</Tag>}
    </>
  );
}
