import React from 'react';
import {
    PanelUpdateEvent,
    IPanePart,
    PanePanelComponentInitParameter,
} from '../../core';
import { ReactPart, ReactPortalStore } from '../react.ts';
import { IPaneviewPanelProps } from './paneview.tsx';

export class PanePanelSection implements IPanePart {
    private readonly _element: HTMLElement;
    private part?: ReactPart<IPaneviewPanelProps>;

    get element() {
        return this._element;
    }

    constructor(
        public readonly id: string,
        private readonly component: React.FunctionComponent<IPaneviewPanelProps>,
        private readonly reactPortalStore: ReactPortalStore
    ) {
        this._element = document.createElement('div');
        this._element.style.height = '100%';
        this._element.style.width = '100%';
    }

    public init(parameters: PanePanelComponentInitParameter): void {
        this.part = new ReactPart(
            this.element,
            this.reactPortalStore,
            this.component,
            {
                params: parameters.params,
                api: parameters.api,
                title: parameters.title,
                containerApi: parameters.containerApi,
            }
        );
    }

    public toJSON() {
        return {
            id: this.id,
        };
    }

    public update(params: PanelUpdateEvent) {
        this.part?.update(params.params);
    }

    public dispose() {
        this.part?.dispose();
    }
}
