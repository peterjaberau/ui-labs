import { views, getViews, generateViewLinks, generateDashboardItems } from "./internal-database"

export const initialConfigSnapshot = {
  sideNavigation: {
    header: {
      href: "#/",
      text: "Navigate",
    },
    items: [
      {
        type: "link",
        text: "Start",
        href: "/session-key/service-key/start",
      },
      {
        type: "link",
        text: "Flexible Renderer",
        href: "/session-key/service-key/flexible-renderer",
      },
      {
        type: "link",
        text: "Interactive Guide",
        href: "/session-key/service-key/interactive-guide",
      },
      {
        type: "divider",
      },
      {
        type: "section-group",
        title: "Research & Development",
        items: [
          {
            type: "section",
            defaultExpanded: false,
            text: "Mocking & References",
            items: [
              {
                type: "link",
                text: "Antd Schema",
                href: "/session-key/service-key/antd-schema",
              },
            ],
          },
          {
            type: "section",
            text: "Renderers",
            defaultExpanded: true,
            items: [
              ...generateViewLinks(getViews(views, ["render-dashboard-amis", "render-dashboard-dynamic", "render-page-amis", "render-page-dynamic"])),
            ],
          },
          {
            type: "section",
            text: "Route Patterns",
            defaultExpanded: false,
            items: [
              { type: "link", text: "/$session", href: "/session-key" },
              { type: "link", text: "/$session/$service", href: "/session-key/service-key" },
              { type: "link", text: "/$session/$service/$view", href: "/session-key/service-key/view-key" },
              { type: "link", text: "eg. /components", href: "/components" },
              { type: "link", text: "eg. /components/antd", href: "/components/antd" },
              { type: "link", text: "eg. /components/antd/button", href: "/components/antd/button" },
              { type: "link", text: "eg. /components/antd/demos?=button", href: "/components/antd/demos?=button" },
              { type: "link", text: "eg. /components/ui-canvas", href: "/components/ui-canvas" },
            ],
          },
        ],
      },

      {
        type: "divider",
      },
      {
        type: "section-group",
        title: "Design Systems",
        items: [
          {
            type: "section",
            defaultExpanded: false,
            text: "Antd",
            items: [
              {
                type: "link",
                text: "Components",
                href: "/design-systems/antd/components",
              },
              {
                type: "link",
                text: "Tokens",
                href: "/design-systems/antd/tokens",
              },
            ],
          },
          {
            type: "section",
            text: "ui-canvas",
            defaultExpanded: false,
            items: [
              {
                type: "link",
                text: "Components",
                href: "/design-systems/ui-canvas/components",
              },
              {
                type: "link",
                text: "Tokens",
                href: "/design-systems/ui-canvas/tokens",
              },
            ],
          },
        ],
      },

      {
        type: "divider",
      },

      {
        type: "section-group",
        title: "Links & Resources",
        items: [
          {
            type: "section",
            text: "Design",
            defaultExpanded: false,
            items: [{ type: "link", text: "Google1", href: "https://www.google1.com", external: true, externalIconAriaLabel: "Opens in a new tab" }],
          },
          {
            type: "section",
            text: "Development",
            defaultExpanded: false,
            items: [{ type: "link", text: "Google2", href: "https://www.google2.com", external: true, externalIconAriaLabel: "Opens in a new tab" }],
          },
        ],
      },

      {
        type: "divider",
      },

      {
        type: "section-group",
        title: "Archived",
        items: [
          {
            type: "section",
            defaultExpanded: false,
            text: "Legacy",
            items: [
              { type: "link", text: "AI Ant", href: "/cloudscape/components/ai-ant" },
              { type: "link", text: "Amis Docs Intro", href: "/cloudscape/components/amis-docs-intro" },
              { type: "link", text: "Amis Get Renderers", href: "/cloudscape/components/amis-get-renderers" },
              { type: "link", text: "Core Editor", href: "/cloudscape/components/core-editor" },
              { type: "link", text: "Dynamic1", href: "/cloudscape/components/dynamic-id-1" },
              { type: "link", text: "Dynamic2", href: "/cloudscape/components/dynamic-id-2" },
            ],
          },
        ],
      },
    ],
  },

  components: {
    aiAnt: {
      internal: {
        activeKey: null,
        headerOpen: false,
        attachedFiles: [],
      },
      welcome: {
        variant: "borderless",
        title: "Hello, I'm Ant Design X",
        description: "Base on Ant Design, AGI product interface solution, create a better intelligent vision~",
        icon: "",
      },
      promptsItems: {
        items: [
          {
            key: "1",
            description: "Hot Topics",
          },
          {
            key: "2",
            description: "Design Guide",
          },
        ],
      },
      promptsGroupped: {
        title: "Do you want?",
        items: [
          {
            key: "1",
            label: "Hot Topics",
            description: "What are you interested in?",
            children: [
              {
                key: "1-1",
                description: `What's new in X?`,
              },
              {
                key: "1-2",
                description: `What's AGI?`,
              },
              {
                key: "1-3",
                description: `Where is the doc?`,
              },
            ],
          },
          {
            key: "2",
            label: "Design Guide",
            description: "How to design a good product?",
            children: [
              {
                key: "2-1",
                description: `Know the well`,
              },
              {
                key: "2-2",
                description: `Set the AI role`,
              },
              {
                key: "2-3",
                description: `Express the feeling`,
              },
            ],
          },
        ],
      },
      conversationList: {
        items: [
          {
            key: "0",
            label: "What is Ant Design X?",
          },
          {
            key: "1",
            label: "Conversation 1",
            disabled: false,
          },
          {
            key: "2",
            label: "Conversation 2",
            disabled: false,
          },
          {
            key: "3",
            label: "Conversation 3",
            disabled: false,
          },
        ],
        menu: {
          items: [
            {
              label: "Operation 1",
              key: "operation1",
            },
            {
              label: "Operation 2",
              key: "operation2",
              disabled: true,
            },
            {
              label: "Operation 3",
              key: "operation3",
              danger: true,
            },
          ],
          onClick: (conversation: any) => (menuInfo: any) => {
            console.log(`Click ${conversation.key} - ${menuInfo.key}`)
          },
        },
      },
      roles: {
        ai: {
          placement: "start",
          typing: { step: 5, interval: 20 },
          styles: {
            content: {
              borderRadius: 16,
            },
          },
        },
        local: {
          placement: "end",
          variant: "shadow",
        },
      },
      throughChain: {
        items: [
          {
            title: "Hello Ant Design X!",
            status: "success",
            description: "status: success",
            content: "Ant Design X help you build AI chat/platform app as ready-to-use 📦.",
          },
          {
            title: "Hello World!",
            status: "success",
            description: "status: success",
          },
          {
            title: "Pending...",
            status: "pending",
            description: "status: pending",
          },
        ],
      },
    },
  },

  boardItems: [
    {
      id: "board-item-1",
      definition: {},
      columnSpan: 1,
      rowSpan: 2,
      header: "Antd Button",
      content: {
        renderer: "dynamic",
        component: "ButtonAntd",
        path: "../../../../development/cloudscape-app/widgets/widget-antd-button.tsx",
        props: {
          type: "primary",
          size: "large",
          children: "Button",
        },
      },
    },

    {
      id: "board-item-2",
      definition: {},
      columnSpan: 1,
      rowSpan: 2,
      header: "Cloudscape Button",
      content: {
        renderer: "dynamic",
        component: "ButtonCloudscape",
        path: "../../../../development/cloudscape-app/widgets/widget-cloudscape-button.tsx",
        props: {
          variant: "primary",
          children: "Button",
        },
      },
    },

    // "../../../../development/cloudscape-app/widgets/widget-cloudscape-button.tsx"
    // "../../../../development/cloudscape-app/widgets/widget-cloudscape-button.tsx"

    // {
    //   id: "board-item-3",
    //   definition: {},
    //   columnSpan: 1,
    //   rowSpan: 2,
    //   header: "Amis Renderer",
    //   content: {
    //     renderer: "amis",
    //     component: "ButtonCloudscape",
    //     path: "../../../../development/cloudscape-app/widgets/widget-cloudscape-button.tsx",
    //     props: {
    //       variant: "primary",
    //       children: "Button",
    //     },
    //   }
    // },
  ],
}
