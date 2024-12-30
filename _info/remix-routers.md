# Router types in Remix

```json
{
  "title": "Explanation of Route Types",
  "types": [
    {
      "type": "r",
      "description": "Represents a root route or a layout route within the Remix 'routes' folder. This file typically contains the top-level layout and an <Outlet /> for nested routes.",
      "example": {
        "name": "parent.tsx",
        "path": "/parent",
        "children": [
          {
            "name": "child.tsx",
            "type": "c",
            "path": "/parent/child",
            "external": false
          }
        ]
      }
    },
    {
      "type": "c",
      "description": "Represents a child route that can be nested under a parent route. The child may use <Outlet /> to further nest additional routes.",
      "example": {
        "name": "child.tsx",
        "path": "/nested/child",
        "external": false
      }
    },
    {
      "type": "external",
      "description": "Indicates that the route file is located outside the Remix 'routes' folder. The 'path' property starts relative to the 'app' folder and requires manual import or mapping.",
      "example": {
        "name": "nested3_child1.tsx",
        "path": "/external/nested3/level1",
        "external": true,
        "children": [
          {
            "name": "nested3_child2.tsx",
            "path": "/external/nested3/level1/level2",
            "external": true
          }
        ]
      }
    }
  ]
}


```




# Json Payload for Remix Routers





```json
{
  "title": "Dynamic Sidebar Routes",
  "tree": {
    "name": "routes",
    "type": "f",
    "path": "",
    "children": [
      {
        "name": "nested1",
        "type": "r",
        "path": "/nested1",
        "children": [
          {
            "name": "nested1_child.tsx",
            "type": "c",
            "path": "/nested1/child",
            "external": false
          }
        ]
      },
      {
        "name": "nested2",
        "type": "r",
        "path": "/nested2",
        "external": true,
        "children": [
          {
            "name": "nested2_child1.tsx",
            "type": "c",
            "path": "/external/nested2/child1",
            "external": true,
            "children": [
              {
                "name": "nested2_child2.tsx",
                "type": "c",
                "path": "/external/nested2/child1/child2",
                "external": true,
                "children": [
                  {
                    "name": "nested2_child3.tsx",
                    "type": "c",
                    "path": "/external/nested2/child1/child2/child3",
                    "external": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "nested3",
        "type": "r",
        "path": "/nested3",
        "external": true,
        "children": [
          {
            "name": "nested3_child1.tsx",
            "type": "c",
            "path": "/external/nested3/level1",
            "external": true,
            "children": [
              {
                "name": "nested3_child2.tsx",
                "type": "c",
                "path": "/external/nested3/level1/level2",
                "external": true,
                "children": [
                  {
                    "name": "nested3_child3.tsx",
                    "type": "c",
                    "path": "/external/nested3/level1/level2/level3",
                    "external": true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

```


# Folder Structure

### First Node: Nested under `routes` folder

```arduino
app/
├── routes/
│   ├── nested1.tsx             // Parent route for "/nested1"
│   ├── nested1/
│       └── nested1_child.tsx   // Child route for "/nested1/child"

```

### Second Node: Entire hierarchy in a single external folder

```arduino
app/
├── external/
│   └── nested2/
│       ├── child1.tsx          // Parent route for "/nested2/child1"
│       ├── child1/
│           ├── child2.tsx      // Nested child route for "/nested2/child1/child2"
│           ├── child2/
│               └── child3.tsx  // Nested child route for "/nested2/child1/child2/child3"

```



# Third Node: Every level in separate external folders

```arduino
app/
├── external/
│   ├── nested3/
│       ├── level1.tsx          // Parent route for "/nested3/level1"
│       ├── level1/
│           ├── level2.tsx      // Child route for "/nested3/level1/level2"
│           ├── level2/
│               └── level3.tsx  // Child route for "/nested3/level1/level2/level3"


```



# How to Use This Structure in Remix
##  1. For Routes Within routes:
        * Use <Outlet /> to enable nesting.

Example: nested1.tsx
```tsx
import { Outlet } from "@remix-run/react";

export default function Nested1() {
  return (
    <div>
      <h1>Nested 1</h1>
      <Outlet />
    </div>
  );
}
```


##  2. For Routes in External Folders:
        * Use `loader` to import the route component.
        * Use `preload` to load the nested routes.
        * Manually import child routes and use them where needed
```tsx
import Child2 from "./child1/child2";

export default function Child1() {
  return (
    <div>
      <h2>Child 1</h2>
      <Child2 />
    </div>
  );
}

```
