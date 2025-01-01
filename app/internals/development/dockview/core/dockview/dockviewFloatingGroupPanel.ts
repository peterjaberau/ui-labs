import { Overlay } from '../overlay/overlay.ts';
import { CompositeDisposable } from '../lifecycle.ts';
import { AnchoredBox } from '../types.ts';
import { DockviewGroupPanel, IDockviewGroupPanel } from './dockviewGroupPanel.ts';

export interface IDockviewFloatingGroupPanel {
    readonly group: IDockviewGroupPanel;
    position(bounds: Partial<AnchoredBox>): void;
}

export class DockviewFloatingGroupPanel
    extends CompositeDisposable
    implements IDockviewFloatingGroupPanel
{
    constructor(readonly group: DockviewGroupPanel, readonly overlay: Overlay) {
        super();
        this.addDisposables(overlay);
    }

    position(bounds: Partial<AnchoredBox>): void {
        this.overlay.setBounds(bounds);
    }
}
