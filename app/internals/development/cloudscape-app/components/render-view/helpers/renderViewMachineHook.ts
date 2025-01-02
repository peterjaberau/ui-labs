import { RenderViewMachineContext } from './RenderViewContextProvider';

export const useRenderViewMachine: any = () => {

  const actor = RenderViewMachineContext.useActorRef();
  const state = RenderViewMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    isInitializing: state.matches('gettingRenderers') || state.matches('gettingPlugins') || state.matches('gettingTemplates'),
    isReady: state.matches('ready'),
    isCurrentConnected: !!(state.context.current.connected === true && state.matches('ready')),
    allPlugins: { plugins: state.context.plugins, pluginEvents: state.context.pluginEvents, pluginActions: state.context.pluginActions },
  }
}

