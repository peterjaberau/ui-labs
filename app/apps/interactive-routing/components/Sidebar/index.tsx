import TreeStructure from "./TreeStructure";
import { data as routes} from "../../routes-data";

function Sidebar() {
  return (
    <div
      className="fixed left-0 top-14 pl-4 pb-8 bottom-0 bg-white dark:bg-zinc-800 overflow-x-hidden overflow-y-auto"
      style={{ width: "400px" }}
    >
      {routes.map(({ title, tree }: any) => (
        <div className="" key={title}>
          <div className="mt-4 mb-4 font-semibold"> {title} </div>
          <TreeStructure node={tree} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
