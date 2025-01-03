import { AmisMachineContext } from './AmisContextProvider.tsx';

export const useAmisMachine: any = () => {

  const actor = AmisMachineContext.useActorRef();
  const state = AmisMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    isInitializing: state.matches('gettingRenderers') || state.matches('gettingPlugins') || state.matches('gettingTemplates'),
    isReady: state.matches('ready'),
    // sideNavigation: state.context.internalConfig.sideNavigation,
    // components: state.context.internalConfig.components,
    // dashboardItems: state.context.internalConfig.dashboardItems,
    // parameters: {
    //   ...state.context.internalState.urlParams,
    // },
    // database: state.context.internalState.database,
    // isCurrentConnected: !!(state.context.current.connected === true && state.matches('ready')),
    // allPlugins: { plugins: state.context.plugins, pluginEvents: state.context.pluginEvents, pluginActions: state.context.pluginActions },
  }
}

