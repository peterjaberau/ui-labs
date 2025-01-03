import React, { useEffect, ReactNode, Children } from 'react';
import _ from 'lodash';
import { useActorRef, useSelector } from '@xstate/react';
import Header from '../header';
import { Flexbox } from 'react-layout-kit';
import { HEADER_HEIGHT } from '../_shared/const.ts';
import AppShellPanel from './app-shell-panel.tsx';
import { useActor } from '@xstate/react';
import { createBrowserInspector } from '@statelyai/inspect';
import { appShellMachine } from "./app-shell-machine.tsx";
import { Flex } from 'antd';
import { useTheme } from 'antd-style';
import NavBar from '../navbar';

// const inspector = createBrowserInspector();

const AppShell = (
  {
    children,
    header,
    leftPanel,
    rightPanel,
    bottomPanel,
  }:
  {
    children?: ReactNode;
    header?: ReactNode,
    leftPanel?: ReactNode,
    rightPanel?: ReactNode,
    bottomPanel?: ReactNode,
  },
) => {
  const theme = useTheme();


  const [snapshot, appActorRef] = useActor(appShellMachine, {
    systemId: 'appShellMachine',
    // inspect: inspector.inspect,
  });

  const sidebarLeftActorRef = snapshot.context.draggablePanels.find((panel: any) => panel.id === 'panel-sidebarLeft');
  const sidebarRightActorRef = snapshot.context.draggablePanels.find((panel: any) => panel.id === 'panel-sidebarRight');
  const bottomPanelActorRef = snapshot.context.draggablePanels.find((panel: any) => panel.id === 'panel-bottomPanel');

  console.log('sidebarRightActorRef', sidebarRightActorRef?.getSnapshot().context);

  // console.log('sidebarLeftActorRef', {
  //   isDefined: typeof sidebarLeftActorRef !== undefined,
  //   actorRef: sidebarLeftActorRef?.getSnapshot().context,
  // });

  return (
    <>
      <Flexbox
        direction={'vertical'}
        height={'100vh'}
        // height={'100%'}
        // height={`calc(100% - ${HEADER_HEIGHT}px)`}
        width={'100%'}
        style={{ position: 'relative' }}
      >
        {header}
        {/*{ height: `calc(100vh - ${HEADER_HEIGHT}px)`, position: 'relative', maxWidth: '100wh' }*/}
        <Flexbox
          direction={'horizontal'}
          width={'100%'}
          height={'100%'}
          style={{ maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}
        >
          <NavBar />

          {typeof sidebarLeftActorRef !== undefined && (
            <>
              <AppShellPanel key={sidebarLeftActorRef?.getSnapshot().context.id} actorRef={sidebarLeftActorRef}>
                {leftPanel}
              </AppShellPanel>
            </>
          )}

          <Flexbox
            direction={'vertical'}
            flex={1}
            width={'100%'}
            height={'100%'}
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            {/*{snapshot.matches('Loading initial state') && <>Loading...</>}*/}
            {/*<pre>*/}
            {/*  {JSON.stringify(*/}
            {/*    snapshot.context.draggablePanels.map((panel) => panel.getSnapshot().context),*/}
            {/*    null,*/}
            {/*    2,*/}
            {/*  )}*/}
            {/*</pre>*/}
            <Flexbox
              flex={1}
              direction={'vertical'}
              style={{
                overflow: 'hidden auto',
                position: 'relative',
                backgroundColor: theme.colorPrimaryBg,
                padding: theme.padding,
              }}
            >
              {children}
            </Flexbox>

            {typeof bottomPanelActorRef !== undefined && (
              <AppShellPanel key={bottomPanelActorRef?.getSnapshot().context.id} actorRef={bottomPanelActorRef}>
                {bottomPanel} || <div>Bottom Panel</div>
              </AppShellPanel>
            )}
          </Flexbox>

          {typeof sidebarRightActorRef !== undefined && (
            <AppShellPanel key={sidebarRightActorRef?.getSnapshot().context.id} actorRef={sidebarRightActorRef}>
              {rightPanel} || <div>Right Panel</div>
            </AppShellPanel>
          )}
        </Flexbox>
      </Flexbox>
    </>
  );
};

AppShell.displayName = 'AppShell';
export default AppShell;
