import { Tag } from "antd";

enum EMenuType {
  dir = 1,
  menu = 2,
  perm = 3,
}

type MenuTypeProps = {
  type: EMenuType;
};

export function MenuType({ type }: MenuTypeProps) {
  return (
    <>
      {type === 1 ? <Tag color="green">List</Tag> : ""}
      {type === 2 ? <Tag color="blue">Menu</Tag> : ""}
      {type === 3 ? <Tag color="pink">Permissions</Tag> : ""}
    </>
  );
}
