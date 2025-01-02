/*

  viewId: "string",
  meta: {
    title: "string",
    description: "string",
    route: "/session-key/service-key/view-key",
  },
  config: {
    type: "dashboard | page",
    renderEngine: "amis | path | registry",

  }
 */
const dynamicComponentFilePath = "../../../../development/cloudscape-app/widgets/"

export const views: any[] = [
  {
    viewId: "render-dashboard-amis",
    meta: {
      title: "Dashboard with Amis",
      description: "Dashboard with Amis",
      route: "/render/dashboard/render-dashboard-amis",
    },
    config: {
      type: "dashboard",
      renderEngine: "amis",
    },
  },
  {
    viewId: "render-dashboard-dynamic",
    meta: {
      title: "Dashboard with dynamic",
      description: "Dashboard with dynamic",
      route: "/render/dashboard/render-dashboard-dynamic",
    },
    config: {
      type: "dashboard",
      renderEngine: "path",
    },
  },
  {
    viewId: "render-page-amis",
    meta: {
      title: "Page with Amis",
      description: "Page with Amis",
      route: "/render/page/render-page-amis",
    },
    config: {
      type: "page",
      renderEngine: "amis",
    },
    type: "link",
    text: "Page with Amis",
    href: "/render/page/render-page-amis",
  },
  {
    viewId: "render-page-dynamic",
    meta: {
      title: "Page with dynamic",
      description: "Page with dynamic",
      route: "/render/page/render-page-dynamic",
    },
    config: {
      type: "page",
      renderEngine: "path",
    },
    type: "link",
    text: "Page with dynamic",
    href: "/render/page/render-page-dynamic",
  },
  {
    viewId: "page-start",
    type: "link",
    text: "Start",
    href: "/session-key/service-key/start",
  },
  {
    viewId: "page-flexible-renderer",
    type: "link",
    text: "Flexible Renderer",
    href: "/flexible/render/amis",
  },
  {
    viewId: "page-interactive-guide",
    type: "link",
    text: "Interactive Guide",
    href: "/session-key/service-key/interactive-guide",
  },
  {
    viewId: "page-antd-schema",
    type: "link",
    text: "Antd Schema",
    href: "/session-key/service-key/antd-schema",
  },

  {
    viewId: "page-session",
    type: "link",
    text: "/$session",
    href: "/session-key",
  },
  {
    viewId: "page-session-service",
    type: "link",
    text: "/$session/$service",
    href: "/session-key/service-key",
  },
  {
    viewId: "page-session-service-view",
    type: "link",
    text: "/$session/$service/$view",
    href: "/session-key/service-key/view-key",
  },
  {
    viewId: "page-components",
    type: "link",
    text: "eg. /components",
    href: "/components",
  },
  {
    viewId: "page-components-antd",
    type: "link",
    text: "eg. /components/antd",
    href: "/components/antd",
  },
  {
    viewId: "page-components-antd-button",
    type: "link",
    text: "eg. /components/antd/button",
    href: "/components/antd/button",
  },
  {
    viewId: "page-components-antd-demos-button",
    type: "link",
    text: "eg. /components/antd/demos?=button",
    href: "/components/antd/demos?=button",
  },
  { type: "link", text: "eg. /components/ui-canvas", href: "/components/ui-canvas" },
  {
    viewId: "page-design-system-antd-components",
    type: "link",
    text: "Components",
    href: "/design-systems/antd/components",
  },
  {
    viewId: "page-design-system-antd-tokens",
    type: "link",
    text: "Tokens",
    href: "/design-systems/antd/tokens",
  },
  {
    viewId: "page-design-system-ui-canvas-components",
    type: "link",
    text: "Components",
    href: "/design-systems/ui-canvas/components",
  },
  {
    viewId: "page-design-system-ui-canvas-tokens",
    type: "link",
    text: "Tokens",
    href: "/design-systems/ui-canvas/tokens",
  },
  {
    viewId: "expernal-link-google1",
    type: "link",
    text: "Google1",
    href: "https://www.google1.com",
    external: true,
    externalIconAriaLabel: "Opens in a new tab",
  },
  {
    viewId: "expernal-link-google2",
    type: "link",
    text: "Google2",
    href: "https://www.google2.com",
    external: true,
    externalIconAriaLabel: "Opens in a new tab",
  },
  {
    viewId: "page-components-ai-ant",
    type: "link",
    text: "AI Ant",
    href: "/cloudscape/components/ai-ant",
  },
  {
    viewId: "page-components-amis-docs-intro",
    type: "link",
    text: "Amis Docs Intro",
    href: "/cloudscape/components/amis-docs-intro",
  },
  {
    viewId: "page-components-amis-get-renderers",
    type: "link",
    text: "Amis Get Renderers",
    href: "/cloudscape/components/amis-get-renderers",
  },
  {
    viewId: "page-components-core-editor",
    type: "link",
    text: "Core Editor",
    href: "/cloudscape/components/core-editor",
  },
  {
    viewId: "page-components-dynamic-id-1",
    type: "link",
    text: "Dynamic1",
    href: "/cloudscape/components/dynamic-id-1",
  },
  {
    viewId: "page-components-dynamic-id-2",
    type: "link",
    text: "Dynamic2",
    href: "/cloudscape/components/dynamic-id-2",
  },
]

export const viewItems: any[] = [
  {
    viewId: "render-dashboard-dynamic",
    itemId: "render-antd-button",
    config: {
      renderAs: "dynamic-component",
      renderMethod: "lazyload",
      component: "ButtonAntd",
      file: "widget-antd-button.tsx",
      props: {
        type: "primary",
        size: "large",
        children: "Button",
      },
      extraProps: {
        definition: {},
        columnSpan: 1,
        rowSpan: 2,
        header: "Antd Button",
      }
    }
  },
  {
    viewId: "render-dashboard-dynamic",
    itemId: "render-cloudscape-button",
    config: {
      renderAs: "dynamic-component",
      renderMethod: "lazyload",
      component: "ButtonCloudscape",
      file: "widget-cloudscape-button.tsx",
      props: {
        variant: "primary",
        children: "Button",
      },
      extraProps: {
        definition: {},
        columnSpan: 1,
        rowSpan: 2,
        header: "Antd Button",
      }
    }
  }
]

export const viewItemUsages: any[] = [

  {
    usageId: "use-render-antd-button-in-card1",
    viewId: "render-dashboard-dynamic",
    itemId: "render-antd-button",
    usage: {
      type: "board",
      columnSpan: 1,
      rowSpan: 2,
      header: "Antd Button 1",
    }
  },

  {
    usageId: "use-render-antd-button-in-card2",
    viewId: "render-dashboard-dynamic",
    itemId: "render-antd-button",
    usage: {
      type: "board",
      columnSpan: 1,
      rowSpan: 2,
      header: "Antd Button 2",
    }
  },

  {
    usageId: "use-render-cloudscape-button-in-card3",
    viewId: "render-dashboard-dynamic",
    itemId: "render-cloudscape-button",
    usage: {
      type: "board",
      definition: {},
      columnSpan: 1,
      rowSpan: 2,
      header: "Cloudscape Button",
    }
  }
]




export const getViews = (views: any[], viewIds: any[]) => {
  if (viewIds.length === 0) {
    return views;
  }
  return views.filter((view: any) => viewIds.includes(view.viewId) as any);
}

export const generateViewLinks = (views: any[]) => {
  return views.map((view: any) => {
    return {
      type: "link",
      text: view.meta.title,
      href: view.meta.route,
    }
  })
}



// this directly read from the above viewItems and viewItemUsages and views
export const generateDashboardItems = ({ viewId }: any) => {

  console.log("viewId----", viewId)

  const dashboardItems = viewItems
    .filter((viewItem: any) => viewItem.viewId === viewId)
    .map((viewItem: any) => {
      const usage = viewItemUsages.find((usage: any) => usage.viewId === viewItem.viewId && usage.itemId === viewItem.itemId)
      return {
        id: viewItem.itemId,
        definition: {},
        columnSpan: usage.usage.columnSpan,
        rowSpan: usage.usage.rowSpan,
        header: usage.usage.header,
        content: {
          renderer: viewItem.config.renderAs,
          component: viewItem.config.component,
          path: dynamicComponentFilePath + viewItem.config.file,
          props: viewItem.config.props,
        },
      }
    })

  console.log("dashboardItems----", dashboardItems)
  return dashboardItems
}


