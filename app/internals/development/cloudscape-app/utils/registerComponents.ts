// app/utils/registerComponents.ts
import { componentRegistry } from "./componentRegistry";

componentRegistry.register("ButtonAntd", () => import("~/internals/development/cloudscape-app/widgets/widget-antd-button"));
componentRegistry.register("ButtonCloudscape", () => import("~/internals/development/cloudscape-app/widgets/widget-cloudscape-button"));
