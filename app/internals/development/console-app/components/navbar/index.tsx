import { ActionIcon, SideNav } from "@lobehub/ui"
import { theme } from "antd"
import { Compass, MessageSquare, User } from "lucide-react"
import { memo, useMemo, useState } from "react"
import { Flexbox } from "react-layout-kit"
import { useNavigate } from "@remix-run/react"
import { initialSnapshot } from "../../stores/state"
import Avatar from './actions/avatar';
import Documentation from './actions/documentation';
// import Github from './actions/github';
import Support from './actions/support';

// const IconTreeMapping: any = {
//   MessageSquare: MessageSquare,
//   User: User,
//   Compass: Compass,
//   Documentation: Documentation,


const NavBar = () => {
  const navigate = useNavigate()
  const [headerKey, setHeaderKey] = useState("chat")

  const { token } = theme.useToken()

  // navigate(`/${item.key}`

  const navigationItems = useMemo(() => {
    return [
      {
        key: 'chat',
        icon: MessageSquare,
        label: 'Chat',
        title: 'Chat',
      },
      {
        key: 'user',
        icon: User,
        label: 'User',
        title: 'User',
      },
      {
        key: 'discover',
        icon: Compass,
        label: 'Discover',
        title: 'Discover',
      },
    ];
  }, []);


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
    [navigationItems, headerKey],
  );


  const bottomActions = useMemo(
    () => [
      <Flexbox key="actions" gap={8}>
        <Documentation key="doc" />
        {/*<Github key="github" />*/}
        <Support key="support" />
      </Flexbox>,
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
  )
}

export default memo(NavBar)
