// @ts-ignore
import styles from './styles.css?url'
// @ts-ignore
import dockStyles from '~/apps/examples/dockview/pages/demo-dockview/styles/styles.css?url'
// @ts-ignore
import dockviewStyles from '~/apps/examples/dockview/pages/demo-dockview/styles/dockview.css?url'
// @ts-ignore
import dockAppStyles from "~/apps/examples/dockview/pages/demo-dockview/styles/appstyles.css?url";
import React from "react"


import { DockviewMain } from "~/apps/examples/dockview/pages/demo-dockview/main.client"
import { cssBundleHref } from "@remix-run/css-bundle"

// @ts-ignore
export const links: LinksFunction = () => {
  return [
    cssBundleHref ? { rel: 'preload', href: cssBundleHref, as: 'style' } : null,

    // Preload CSS as a resource to avoid render blocking
    { rel: 'preload', href: dockStyles, as: 'style' },
    { rel: 'preload', href: dockviewStyles, as: 'style' },
    { rel: 'preload', href: dockAppStyles, as: 'style' },

    { rel: 'stylesheet', href: dockStyles },
    { rel: 'stylesheet', href: dockviewStyles },
    { rel: 'stylesheet', href: dockAppStyles },
    cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,

  ]
}


const DockviewPage = () => {
  return (
      <div>
        <DockviewMain />
      </div>
  )
}

export default DockviewPage;
