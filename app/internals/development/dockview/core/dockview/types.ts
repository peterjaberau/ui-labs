import { DockviewPanelApi } from '../api/dockviewPanelApi.ts';
import { PanelInitParameters, IPanel } from '../panel/types.ts';
import { DockviewApi } from '../api/component.api.ts';
import { Optional } from '../types.ts';
import { IDockviewGroupPanel } from './dockviewGroupPanel.ts';
import { DockviewPanelRenderer } from '../overlay/overlayRenderContainer.ts';

export interface HeaderPartInitParameters {
    title: string;
}

export interface GroupPanelPartInitParameters
    extends PanelInitParameters,
        HeaderPartInitParameters {
    api: DockviewPanelApi;
    containerApi: DockviewApi;
}

export interface WatermarkRendererInitParameters {
    containerApi: DockviewApi;
    group?: IDockviewGroupPanel;
}

type RendererMethodOptionalList =
    | 'dispose'
    | 'update'
    | 'layout'
    | 'toJSON'
    | 'focus';

export interface IWatermarkRenderer
    extends Optional<Omit<IPanel, 'id' | 'init'>, RendererMethodOptionalList> {
    readonly element: HTMLElement;
    init: (params: WatermarkRendererInitParameters) => void;
}

export interface ITabRenderer
    extends Optional<Omit<IPanel, 'id'>, RendererMethodOptionalList> {
    readonly element: HTMLElement;
    init(parameters: GroupPanelPartInitParameters): void;
}

export interface IContentRenderer
    extends Optional<Omit<IPanel, 'id'>, RendererMethodOptionalList> {
    readonly element: HTMLElement;
    init(parameters: GroupPanelPartInitParameters): void;
}

// watermark component

// constructors

export interface IGroupPanelInitParameters
    extends PanelInitParameters,
        HeaderPartInitParameters {
    //
}

export interface GroupviewPanelState {
    id: string;
    contentComponent?: string;
    tabComponent?: string;
    title?: string;
    renderer?: DockviewPanelRenderer;
    params?: { [key: string]: any };
    minimumWidth?: number;
    minimumHeight?: number;
    maximumWidth?: number;
    maximumHeight?: number;
}
