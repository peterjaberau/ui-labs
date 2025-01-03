import { Tag } from "antd";

type LinkTypeProps = {
  isLink: null | 0 | 1;
};

export function LinkType({ isLink }: LinkTypeProps) {
  return (
    <>
      {isLink === null && <>-</>}
      {isLink === 0 && <Tag>Not allowed</Tag>}
      {isLink === 1 && <Tag color={"green"}>Permitted</Tag>}
    </>
  );
}
