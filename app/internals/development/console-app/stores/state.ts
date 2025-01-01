export const navbarItems = [
  {
    key: 'chat',
    icon: 'MessageSquare',
    label: 'Chat',
    title: 'Chat',
  },
  {
    key: 'role',
    icon: 'User',
    label: 'Role',
    title: 'Role',
  },
  {
    key: 'discover',
    icon: 'Compass',
    label: 'Discover',
    title: 'Discover',
  },
]



export const initialSnapshot = {
  sideNavbar: {
    topActions: [
      {
        key: 'chat',
        icon: 'MessageSquare',
        title: 'Chat',
      },
      {
        key: 'role',
        icon: 'User',
        title: 'Role',
      },
      {
        key: 'discover',
        icon: 'Compass',
        title: 'Discover',
      },
    ],
    bottomActions: [
      {
        key: 'actions',
        children: [
          {
            key: 'doc',
            icon: 'Documentation',
          },
        ],
      },
    ],
  }
}
