import { BoardItemComponentsList } from "./board-cards/BoardItemComponentsList"
import { BoardItemPreview } from "./board-cards/BoardItemPreview"
import { BoardItemPlugin } from "./board-cards/BoardItemPlugin"
import { BoardItemTpls } from "./board-cards/BoardItemTpls"
import { BoardItemAllPlugins } from "./board-cards/BoardItemAllPlugins"
import { BoardItemAllTemplates } from "./board-cards/BoardItemAllTemplates"
import { BoardItemStateContext } from "./board-cards/BoardItemStateContext"

export const componentsMapping = {
  boardItemComponentsList: BoardItemComponentsList,
  boardItemPreview: BoardItemPreview,
  boardItemPlugin: BoardItemPlugin,
  boardItemTpls: BoardItemTpls,
  boardItemAllPlugins: BoardItemAllPlugins,
  boardItemAllTemplates: BoardItemAllTemplates,
  boardItemStateContext: BoardItemStateContext,
} as any
