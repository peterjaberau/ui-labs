import {
    DockviewApi,
    GridviewApi,
    PaneviewApi,
    SplitviewApi,
} from './component.api.ts';
import { DockviewComponent } from '../dockview/dockviewComponent.ts';
import { DockviewComponentOptions } from '../dockview/options.ts';
import { GridviewComponent } from '../gridview/gridviewComponent.ts';
import { GridviewComponentOptions } from '../gridview/options.ts';
import { PaneviewComponentOptions } from '../paneview/options.ts';
import { PaneviewComponent } from '../paneview/paneviewComponent.ts';
import { SplitviewComponentOptions } from '../splitview/options.ts';
import { SplitviewComponent } from '../splitview/splitviewComponent.ts';

export function createDockview(
    element: HTMLElement,
    options: DockviewComponentOptions
): DockviewApi {
    const component = new DockviewComponent(element, options);
    return component.api;
}

export function createSplitview(
    element: HTMLElement,
    options: SplitviewComponentOptions
): SplitviewApi {
    const component = new SplitviewComponent(element, options);
    return new SplitviewApi(component);
}

export function createGridview(
    element: HTMLElement,
    options: GridviewComponentOptions
): GridviewApi {
    const component = new GridviewComponent(element, options);
    return new GridviewApi(component);
}

export function createPaneview(
    element: HTMLElement,
    options: PaneviewComponentOptions
): PaneviewApi {
    const component = new PaneviewComponent(element, options);
    return new PaneviewApi(component);
}
