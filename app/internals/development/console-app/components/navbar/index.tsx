import { ActionIcon, SideNav } from "@lobehub/ui"
import { theme } from "antd"
import { Compass, MessageSquare, User } from "lucide-react"
import { memo, useMemo, useState } from "react"
import { Flexbox } from "react-layout-kit"
import { useNavigate } from "@remix-run/react"
import { initialSnapshot } from "../../stores/state"


const IconTreeMapping: any = {
  MessageSquare: MessageSquare,
  User: User,
  Compass: Compass,
  Documentation: Documentation,
}
import Avatar from "./actions/avatar.tsx"
import Documentation from "./actions/documentation.tsx"
import Github from "./actions/github.tsx"
import Support from "./actions/support.tsx"

const NavBar = () => {
  const navigate = useNavigate()
  const [headerKey, setHeaderKey] = useState("chat")

  const { token } = theme.useToken()

  // navigate(`/${item.key}`

  const topActions: any = useMemo(() => {
    return initialSnapshot.sideNavbar.topActions.map((item) => {
      const Icon = IconTreeMapping[item.icon]
      return {
        key: item.key,
        icon: Icon,
        active: headerKey === item.key,
        size: "large",
        title: item.title,
        onClick: () => console.log(`/${item.key}`),
      }
    })
  }, [headerKey])

  const bottomActions: any = useMemo(() => {
    return initialSnapshot.sideNavbar.bottomActions.map((item) => {
      return {
        key: item.key,
        children: item.children.map((child) => {
          const Icon = IconTreeMapping[child.icon]
          return {
            key: child.key,
            icon: Icon,
            onClick: () => console.log(`/${child.key}`),
          }
        }),
      }
    })
  }, [])

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
