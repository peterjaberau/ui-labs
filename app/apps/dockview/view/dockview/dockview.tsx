import React from 'react';
import {
    DockviewWillDropEvent,
    DockviewApi,
    DockviewGroupPanel,
    IHeaderActionsRenderer,
    DockviewDidDropEvent,
    IWatermarkPanelProps,
    IDockviewHeaderActionsProps,
    IDockviewPanelHeaderProps,
    IDockviewPanelProps,
    DockviewOptions,
    PROPERTY_KEYS_DOCKVIEW,
    DockviewComponentOptions,
    DockviewFrameworkOptions,
    DockviewReadyEvent,
    createDockview,
} from '../../core';
import { ReactPanelContentPart } from './reactContentPart';
import { ReactPanelHeaderPart } from './reactHeaderPart';
import { ReactPortalStore, usePortalsLifecycle } from '../react';
import { ReactWatermarkPart } from './reactWatermarkPart';
import { ReactHeaderActionsRendererPart } from './headerActionsRenderer';

function createGroupControlElement(
    component: React.FunctionComponent<IDockviewHeaderActionsProps> | undefined,
    store: ReactPortalStore
): ((groupPanel: DockviewGroupPanel) => IHeaderActionsRenderer) | undefined {
    return component
        ? (groupPanel: DockviewGroupPanel) => {
              return new ReactHeaderActionsRendererPart(
                  component,
                  store,
                  groupPanel
              );
          }
        : undefined;
}

const DEFAULT_REACT_TAB = 'props.defaultTabComponent';

export interface IDockviewReactProps extends DockviewOptions {
    tabComponents?: Record<
        string,
        React.FunctionComponent<IDockviewPanelHeaderProps>
    >;
    components: Record<string, React.FunctionComponent<IDockviewPanelProps>>;
    watermarkComponent?: React.FunctionComponent<IWatermarkPanelProps>;
    defaultTabComponent?: React.FunctionComponent<IDockviewPanelHeaderProps>;
    rightHeaderActionsComponent?: React.FunctionComponent<IDockviewHeaderActionsProps>;
    leftHeaderActionsComponent?: React.FunctionComponent<IDockviewHeaderActionsProps>;
    prefixHeaderActionsComponent?: React.FunctionComponent<IDockviewHeaderActionsProps>;
    //
    onReady: (event: DockviewReadyEvent) => void;
    onDidDrop?: (event: DockviewDidDropEvent) => void;
    onWillDrop?: (event: DockviewWillDropEvent) => void;
}

function extractCoreOptions(props: IDockviewReactProps): DockviewOptions {
    const coreOptions = PROPERTY_KEYS_DOCKVIEW.reduce((obj, key) => {
        if (key in props) {
            obj[key] = props[key] as any;
        }
        return obj;
    }, {} as Partial<DockviewComponentOptions>);

    return coreOptions as DockviewOptions;
}

export const DockviewReact = React.forwardRef(
    (props: IDockviewReactProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const domRef = React.useRef<HTMLDivElement>(null);
        const dockviewRef = React.useRef<DockviewApi>();
        const [portals, addPortal] = usePortalsLifecycle();

        React.useImperativeHandle(ref, () => domRef.current!, []);

        const prevProps = React.useRef<Partial<IDockviewReactProps>>({});

        React.useEffect(
            () => {
                const changes: Partial<DockviewOptions> = {};

                PROPERTY_KEYS_DOCKVIEW.forEach((propKey) => {
                    const key = propKey;
                    const propValue = props[key];

                    if (key in props && propValue !== prevProps.current[key]) {
                        changes[key] = propValue as any;
                    }
                });

                if (dockviewRef.current) {
                    dockviewRef.current.updateOptions(changes);
                } else {
                    // not yet fully initialized
                }

                prevProps.current = props;
            },
            PROPERTY_KEYS_DOCKVIEW.map((key) => props[key])
        );

        React.useEffect(() => {
            if (!domRef.current) {
                return;
            }

            const frameworkTabComponents = props.tabComponents ?? {};

            if (props.defaultTabComponent) {
                frameworkTabComponents[DEFAULT_REACT_TAB] =
                    props.defaultTabComponent;
            }

            const frameworkOptions: DockviewFrameworkOptions = {
                createLeftHeaderActionComponent: createGroupControlElement(
                    props.leftHeaderActionsComponent,
                    { addPortal }
                ),
                createRightHeaderActionComponent: createGroupControlElement(
                    props.rightHeaderActionsComponent,
                    { addPortal }
                ),
                createPrefixHeaderActionComponent: createGroupControlElement(
                    props.prefixHeaderActionsComponent,
                    { addPortal }
                ),
                createComponent: (options) => {
                    return new ReactPanelContentPart(
                        options.id,
                        props.components[options.name],
                        {
                            addPortal,
                        }
                    );
                },
                createTabComponent(options) {
                    return new ReactPanelHeaderPart(
                        options.id,
                        frameworkTabComponents[options.name],
                        {
                            addPortal,
                        }
                    );
                },
                createWatermarkComponent: props.watermarkComponent
                    ? () => {
                          return new ReactWatermarkPart(
                              'watermark',
                              props.watermarkComponent!,
                              {
                                  addPortal,
                              }
                          );
                      }
                    : undefined,
                defaultTabComponent: props.defaultTabComponent
                    ? DEFAULT_REACT_TAB
                    : undefined,
            };

            const api = createDockview(domRef.current, {
                ...extractCoreOptions(props),
                ...frameworkOptions,
            });

            const { clientWidth, clientHeight } = domRef.current;
            api.layout(clientWidth, clientHeight);

            if (props.onReady) {
                props.onReady({ api });
            }

            dockviewRef.current = api;

            return () => {
                api.dispose();
            };
        }, []);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return () => {
                    // noop
                };
            }

            const disposable = dockviewRef.current.onDidDrop((event) => {
                if (props.onDidDrop) {
                    props.onDidDrop(event);
                }
            });

            return () => {
                disposable.dispose();
            };
        }, [props.onDidDrop]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return () => {
                    // noop
                };
            }

            const disposable = dockviewRef.current.onWillDrop((event) => {
                if (props.onWillDrop) {
                    props.onWillDrop(event);
                }
            });

            return () => {
                disposable.dispose();
            };
        }, [props.onWillDrop]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }

            dockviewRef.current.updateOptions({
                createComponent: (options) => {
                    return new ReactPanelContentPart(
                        options.id,
                        props.components[options.name],
                        {
                            addPortal,
                        }
                    );
                },
            });
        }, [props.components]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }

            const frameworkTabComponents = props.tabComponents ?? {};

            if (props.defaultTabComponent) {
                frameworkTabComponents[DEFAULT_REACT_TAB] =
                    props.defaultTabComponent;
            }

            dockviewRef.current.updateOptions({
                defaultTabComponent: props.defaultTabComponent
                    ? DEFAULT_REACT_TAB
                    : undefined,
                createTabComponent(options) {
                    return new ReactPanelHeaderPart(
                        options.id,
                        frameworkTabComponents[options.name],
                        {
                            addPortal,
                        }
                    );
                },
            });
        }, [props.tabComponents, props.defaultTabComponent]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }

            dockviewRef.current.updateOptions({
                createWatermarkComponent: props.watermarkComponent
                    ? () => {
                          return new ReactWatermarkPart(
                              'watermark',
                              props.watermarkComponent!,
                              {
                                  addPortal,
                              }
                          );
                      }
                    : undefined,
            });
        }, [props.watermarkComponent]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }
            dockviewRef.current.updateOptions({
                createRightHeaderActionComponent: createGroupControlElement(
                    props.rightHeaderActionsComponent,
                    { addPortal }
                ),
            });
        }, [props.rightHeaderActionsComponent]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }
            dockviewRef.current.updateOptions({
                createLeftHeaderActionComponent: createGroupControlElement(
                    props.leftHeaderActionsComponent,
                    { addPortal }
                ),
            });
        }, [props.leftHeaderActionsComponent]);

        React.useEffect(() => {
            if (!dockviewRef.current) {
                return;
            }
            dockviewRef.current.updateOptions({
                createPrefixHeaderActionComponent: createGroupControlElement(
                    props.prefixHeaderActionsComponent,
                    { addPortal }
                ),
            });
        }, [props.prefixHeaderActionsComponent]);

        return (
            <div
                className={props.className}
                style={{ height: '100%', width: '100%' }}
                ref={domRef}
            >
                {portals}
            </div>
        );
    }
);
DockviewReact.displayName = 'DockviewComponent';
