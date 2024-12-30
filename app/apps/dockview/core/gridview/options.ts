import { GridviewPanel } from './gridviewPanel';
import { Orientation } from '../splitview/splitview';
import { CreateComponentOptions } from '../dockview/options';

export interface GridviewOptions {
    disableAutoResizing?: boolean;
    proportionalLayout?: boolean;
    orientation: Orientation;
    className?: string;
    hideBorders?: boolean;
}

export interface GridviewFrameworkOptions {
    createComponent: (options: CreateComponentOptions) => GridviewPanel;
}

export type GridviewComponentOptions = GridviewOptions &
    GridviewFrameworkOptions;

export const PROPERTY_KEYS_GRIDVIEW: (keyof GridviewOptions)[] = (() => {
    /**
     * by readong the keys from an empty value object TypeScript will error
     * when we add or remove new properties to `DockviewOptions`
     */
    const properties: Record<keyof GridviewOptions, undefined> = {
        disableAutoResizing: undefined,
        proportionalLayout: undefined,
        orientation: undefined,
        hideBorders: undefined,
        className: undefined,
    };

    return Object.keys(properties) as (keyof GridviewOptions)[];
})();
