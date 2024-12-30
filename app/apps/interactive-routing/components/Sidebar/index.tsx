import TreeStructure from "./TreeStructure";
import { data as routes} from "../../routes-data";

function Sidebar() {
  return (
    <div
      className="fixed left-0 top-14 pl-4 pb-8 bottom-0 overflow-x-hidden overflow-y-auto"
    >
      {routes.map(({ title, tree }: any) => (
        <div key={title}>
          {title}
          <TreeStructure node={tree} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
