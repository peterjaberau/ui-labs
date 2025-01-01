import { Parameters } from "./panel/types.ts";

export interface PanelParameters<T extends {} = Parameters> {
    params: T;
}

