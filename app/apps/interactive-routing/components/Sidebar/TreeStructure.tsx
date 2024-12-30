import NodeIcon from "./NodeIcon";
import { NavLink } from "@remix-run/react";


export type TreeNodeType = "f" | "r" | "l";
export interface TreeNode {
    name: string;
    type: TreeNodeType;
    path: string;
    children: TreeNode[];
}

type Props = { node: TreeNode; isLastChild?: boolean };



function TreeStructure({ node, isLastChild = true }: Props) {
  return (
    <div className="relative ml-6">
      {isLastChild && <div className=" last-child" />}

      {node.type === "r" && <NavLink to={node.path}>
        {node.name}
      </NavLink>}

      {node.children.map((child, index) => (
        <TreeStructure
          key={index}
          node={child}
          isLastChild={index === node.children.length - 1}
        />
      ))}
    </div>
  );
}
export default TreeStructure;
