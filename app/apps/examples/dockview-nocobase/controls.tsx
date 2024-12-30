import { IDockviewHeaderActionsProps } from '~/apps/dockview/view';
import React from 'react';
import { nextId } from './defaultLayout';
import type { MenuProps } from 'antd';


const Icon = (props: {
  icon: string;
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
}) => {
  return (
    <div title={props.title} className="action" onClick={props.onClick}>
            <span
              style={{ fontSize: 'inherit' }}
              className="material-symbols-outlined"
            >
                {props.icon}
            </span>
    </div>
  );
};

// const Icon = (props: {
//     icon: string | React.ReactNode | any;
//     title?: string;
//     onClick?: (event: React.MouseEvent) => void;
// }) => {
//     return (
//       ( typeof props.icon === 'string' ) ?
//         (
//           <div title={props.title} className="action" onClick={props.onClick}>
//               <span
//                   style={{ fontSize: 'inherit' }}
//               >
//                   {props.icon}
//               </span>
//           </div>
//         ): (
//         <ActionIcon
//           title={props.title}
//           icon={props.icon}
//           size={{
//             fontSize: '16px',
//             borderRadius: '4px',
//             blockSize: '26px',
//             strokeWidth: 1.5,
//           }}
//           onClick={props.onClick}
//           />
//         )
//     );
// };

const groupControlsComponents: Record<string, React.FC> = {
    panel_1: () => {
      return <Icon icon="file_download" />;
      // return <Icon icon={LucideIcon.LucideDownload} />
    },
};

export const RightControls = (props: IDockviewHeaderActionsProps) => {
  const Component = React.useMemo(() => {
    if (!props.isGroupActive || !props.activePanel) {
      return null
    }

    return groupControlsComponents[props.activePanel.id]
  }, [props.isGroupActive, props.activePanel])

  const [isMaximized, setIsMaximized] = React.useState<boolean>(props.containerApi.hasMaximizedGroup())

  const [isPopout, setIsPopout] = React.useState<boolean>(props.api.location.type === "popout")

  React.useEffect(() => {
    const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
      setIsMaximized(props.containerApi.hasMaximizedGroup())
    })

    const disposable2 = props.api.onDidLocationChange(() => {
      setIsPopout(props.api.location.type === "popout")
    })

    return () => {
      disposable.dispose()
      disposable2.dispose()
    }
  }, [props.containerApi])

  const onClick = () => {
    if (props.containerApi.hasMaximizedGroup()) {
      props.containerApi.exitMaximizedGroup()
    } else {
      props.activePanel?.api.maximize()
    }
  }

  const onClick2 = () => {
    if (props.api.location.type !== "popout") {
      props.containerApi.addPopoutGroup(props.group)
    } else {
      props.api.moveTo({ position: "right" })
    }
  }

  const onClickClose = () => {
    props.activePanel?.api.close()
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Item 1",
    },
  ]

  return (
    <>
      {/*<div*/}
      {/*  className="group-control"*/}
      {/*  style={{*/}
      {/*    display: "flex",*/}
      {/*    alignItems: "center",*/}
      {/*    padding: "0px 8px",*/}
      {/*    height: "100%",*/}
      {/*    color: "var(--dv-activegroup-visiblepanel-tab-color)",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {JSON.stringify(props.isGroupActive)}*/}
      {/*  {props.isGroupActive && <Icon icon={LucideIcon.LucideStar} />}*/}
      {/*  {Component && <Component />}*/}
      {/*  {props.isGroupActive && <Icon icon={LucideIcon.LucideTrash} onClick={onClickClose} />}*/}
      {/*  <Icon*/}
      {/*    title={isPopout ? "Close Window" : "Open In New Window"}*/}
      {/*    icon={isPopout ? LucideIcon.Minimize : LucideIcon.LucideSquareArrowOutUpRight}*/}
      {/*    onClick={onClick2}*/}
      {/*  />*/}
      {/*  {!isPopout && (*/}
      {/*    <Icon*/}
      {/*      title={isMaximized ? "Minimize View" : "Maximize View"}*/}
      {/*      icon={isMaximized ? LucideIcon.Minimize2 : LucideIcon.Maximize2}*/}
      {/*      onClick={onClick}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*  <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>*/}
      {/*    <>*/}
      {/*      <Icon icon={LucideIcon.LucideMenu} />*/}
      {/*    </>*/}
      {/*  </Dropdown>*/}
      {/*</div>*/}

      <div
        className="group-control"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0px 8px",
          height: "100%",
          color: "var(--dv-activegroup-visiblepanel-tab-color)",
        }}
      >
        {props.isGroupActive && <Icon icon="star" />}
        {Component && <Component />}
        <Icon title={isPopout ? "Close Window" : "Open In New Window"} icon={isPopout ? "close_fullscreen" : "open_in_new"} onClick={onClick2} />
        {!isPopout && (
          <Icon
            title={isMaximized ? "Minimize View" : "Maximize View"}
            icon={isMaximized ? "collapse_content" : "expand_content"}
            onClick={onClick}
          />
        )}
      </div>
    </>
  )
}

export const LeftControls = (props: IDockviewHeaderActionsProps) => {
  // const onClick = () => {
  //     props.containerApi.addPanel({
  //         id: `id_${Date.now().toString()}`,
  //         component: 'default',
  //         title: `Tab ${nextId()}`,
  //         position: {
  //             referenceGroup: props.group,
  //         },
  //     });
  // };

  const onClick = () => {
    props.containerApi.addPanel({
      id: `id_${Date.now().toString()}`,
      component: 'default',
      title: `Tab ${nextId()}`,
      position: {
        referenceGroup: props.group,
      },
    });
  };


  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <Icon onClick={onClick} icon="add" />
      {/*<Icon onClick={onClick} icon={LucideIcon.LucidePlus} />*/}
    </div>
  )
}

export const PrefixHeaderControls = (props: IDockviewHeaderActionsProps) => {
  const onClick = () => {
    props.containerApi.addPanel({
      id: `id_${Date.now().toString()}`,
      component: "default",
      title: `Tab ${nextId()}`,
      params: {
        isGroupActive: props.isGroupActive,
        panelId: `id_${Date.now().toString()}`,
      },
      position: {
        referenceGroup: props.group,
      },
    })
  }
  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <Icon icon="Menu" />
      {/*<Icon onClick={onClick} icon={LucideIcon.LucidePlus} />*/}
    </div>
  )
}
