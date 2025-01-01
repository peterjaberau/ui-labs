import { useResponsive } from "antd-style"
import React, { memo } from "react"
import { Flexbox } from "react-layout-kit"
import { Menu } from "antd"

const SideMenu = (props: any) => {

  const onClick = (e: any) => {
    console.log('click ', e);
  };


  const items: any[] = [
    {
      key: "sub1",
      label: "Navigation One",
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            { key: "3", label: "Option 3" },
            { key: "4", label: "Option 4" },
          ],
        },
      ],
    },
  ] as any[];

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </>
  )
}

export default SideMenu
