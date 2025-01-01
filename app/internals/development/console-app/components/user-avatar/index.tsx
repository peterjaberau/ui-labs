import { Avatar, type AvatarProps } from "@lobehub/ui"
import { createStyles } from "antd-style"
export const DEFAULT_USER_AVATAR_URL = "https://registry.npmmirror.com/@lobehub/assets-logo/1.2.0/files/assets/logo-3d.webp"

export interface UserAvatarProps extends AvatarProps {
  clickable?: boolean
}

const defaultUserAvatar = {
  size: 40,
  nickname: "Hello",
  url: DEFAULT_USER_AVATAR_URL,
  clickable: "false",
}

const UserAvatar = ({ ...props }) => {
  const { clickable, nickname, size, url, ...rest }: any = props

  return <Avatar clickable={clickable} alt={nickname} avatar={url || DEFAULT_USER_AVATAR_URL} size={size} style={{ flex: "none" }} {...rest} />
}

export default UserAvatar
