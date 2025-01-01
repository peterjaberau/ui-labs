import {
    GridviewApi,
    GridviewPanel,
    GridviewInitParameters,
    IFrameworkPart,
    GridviewComponent,
} from '../../core';
import { ReactPart, ReactPortalStore } from '../react';
import { IGridviewPanelProps } from './gridview';

export class ReactGridPanelView extends GridviewPanel {
    constructor(
        id: string,
        component: string,
        private readonly reactComponent: React.FunctionComponent<IGridviewPanelProps>,
        private readonly reactPortalStore: ReactPortalStore
    ) {
        super(id, component);
    }

    getComponent(): IFrameworkPart {
        return new ReactPart(
            this.element,
            this.reactPortalStore,
            this.reactComponent,
            {
                params: this._params?.params ?? {},
                api: this.api,
                // TODO: fix casting hack
                containerApi: new GridviewApi(
                    (this._params as GridviewInitParameters)
                        .accessor as GridviewComponent
                ),
            }
        );
    }
}
