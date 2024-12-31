
import { ActionIcon, SideNav } from '@lobehub/ui';
import { theme } from 'antd';
import { Compass, MessageSquare, User } from 'lucide-react';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useNavigate } from "@remix-run/react"

import { useActiveTabKey } from '~/internals/development/hooks/use-active-tab-key.ts';




import Avatar from './Actions/Avatar.tsx';
import Documentation from './Actions/Documentation.tsx';
import Github from './Actions/Github.tsx';
import Support from './Actions/Support.tsx';

const NavBar = () => {
  const navigate = useNavigate();

  const { token } = theme.useToken();
  const headerKey = useActiveTabKey('0');

  const navigationItems = useMemo(() => {
    return [
      {
        key: 'chat',
        icon: MessageSquare,
        label: 'Chat',
        title: 'Chat',
      },
      {
        key: 'role',
        icon: User,
        label: 'Role',
        title: 'Role',
      },
      {
        key: 'discover',
        icon: Compass,
        label: 'Discover',
        title: 'Discover',
      },
    ];
  }, []);

  // navigate(`/${item.key}`
  const topActions = useMemo(
    () =>
      navigationItems.map((item) => (
        <ActionIcon
          key={item.key}
          icon={item.icon}
          size="large"
          active={headerKey === item.key}
          title={item.title}
          onClick={() => console.log(`/${item.key}`)}
        />
      )),
    [navigationItems, navigate, headerKey],
  );

  const bottomActions = useMemo(
    () => [
      <Flexbox key="actions" gap={8}>
        <Documentation key="doc" />
        {/*<Github key="github" />*/}
        {/*<Support key="support" />*/}
      </Flexbox>
    ],
    [],
  );

  return (
    <SideNav
      avatar={<Avatar />}
      style={{
        backgroundColor: token.colorBgContainer,
      }}
      topActions={topActions}
      bottomActions={bottomActions}
    />
  );
};

export default memo(NavBar);
