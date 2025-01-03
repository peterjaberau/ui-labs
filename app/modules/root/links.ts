import type { LinksFunction } from "react-router"

import npStyle from "nprogress/nprogress.css?url";
import global from "@/styles/global.css?url";
import tailwind from "@/styles/tailwind.css?url";

// @ts-ignore
import amisCxd from "amis/lib/themes/cxd.css?url"
import amisHelper from "amis/lib/helper.css?url"
import amisIconfont from "amis/sdk/iconfont.css?url"
// import 'amis/lib/themes/antd.css?url'

import "@fortawesome/fontawesome-free/css/all.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: npStyle },
  { rel: "stylesheet", href: amisCxd },
  { rel: "stylesheet", href: amisHelper },
  { rel: "stylesheet", href: amisIconfont },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
