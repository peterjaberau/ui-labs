import { IDockviewHeaderActionsProps } from '~/apps/dockview/view';
import * as React from 'react';
import { nextId } from './defaultLayout';
import { Star, Plus, Maximize, Minimize, ExternalLink, X, Download, Menu } from "lucide-react"

const Icon = (props: {
  icon: React.ReactNode;
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
}) => {
  return (
    <div title={props.title} className="action" onClick={props.onClick}>
      {props.icon}
    </div>
  );
};

const groupControlsComponents: Record<string, React.FC> = {
  panel_1: () => {
    return <Icon icon={<Download />} />;
  },
};

export const RightControls = (props: IDockviewHeaderActionsProps) => {
  const Component = React.useMemo(() => {
    if (!props.isGroupActive || !props.activePanel) {
      return null;
    }

    return groupControlsComponents[props.activePanel.id];
  }, [props.isGroupActive, props.activePanel]);

  const [isMaximized, setIsMaximized] = React.useState<boolean>(
    props.containerApi.hasMaximizedGroup()
  );

  const [isPopout, setIsPopout] = React.useState<boolean>(
    props.api.location.type === 'popout'
  );

  React.useEffect(() => {
    const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
      setIsMaximized(props.containerApi.hasMaximizedGroup());
    });

    const disposable2 = props.api.onDidLocationChange(() => {
      setIsPopout(props.api.location.type === 'popout');
    });

    return () => {
      disposable.dispose();
      disposable2.dispose();
    };
  }, [props.containerApi]);

  const onClick = () => {
    if (props.containerApi.hasMaximizedGroup()) {
      props.containerApi.exitMaximizedGroup();
    } else {
      props.activePanel?.api.maximize();
    }
  };

  const onClick2 = () => {
    if (props.api.location.type !== 'popout') {
      props.containerApi.addPopoutGroup(props.group);
    } else {
      props.api.moveTo({ position: 'right' });
    }
  };

  return (
    <div
      className="group-control"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px',
        height: '100%',
        color: 'var(--dv-activegroup-visiblepanel-tab-color)',
      }}
    >
      {props.isGroupActive && <Icon icon={<Star />} />}
      {Component && <Component />}
      <Icon
        title={isPopout ? 'Close Window' : 'Open In New Window'}
        icon={isPopout ? <X /> : <ExternalLink />}
        onClick={onClick2}
      />
      {!isPopout && (
        <Icon
          title={isMaximized ? 'Minimize View' : 'Maximize View'}
          icon={isMaximized ? <Minimize /> : <Maximize />}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export const LeftControls = (props: IDockviewHeaderActionsProps) => {
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
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px',
        height: '100%',
        color: 'var(--dv-activegroup-visiblepanel-tab-color)',
      }}
    >
      <Icon onClick={onClick} icon={<Plus />} />
    </div>
  );
};

export const PrefixHeaderControls = (props: IDockviewHeaderActionsProps) => {
  return (
    <div
      className="group-control"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px',
        height: '100%',
        color: 'var(--dv-activegroup-visiblepanel-tab-color)',
      }}
    >
      <Icon icon={<Menu />} />
    </div>
  );
};
