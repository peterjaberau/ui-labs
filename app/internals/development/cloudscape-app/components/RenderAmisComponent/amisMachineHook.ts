import { AmisMachineContext } from './AmisContextProvider.tsx';

export const useAmisMachine: any = () => {

  const actor = AmisMachineContext.useActorRef();
  const state = AmisMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    ctx: state.context,

    isInitializing: state.matches('gettingRenderers') || state.matches('gettingPlugins') || state.matches('gettingTemplates'),
    isReady: state.matches('ready'),
    isCurrentConnected: !!(state.context.current.connected === true && state.matches('ready')),

    allPlugins: { plugins: state.context.plugins, pluginEvents: state.context.pluginEvents, pluginActions: state.context.pluginActions },

    database: state.context.internalState.database,

    sideNavigation: state.context.internalConfig.sideNavigation,
    dashboardItems: state.context.internalConfig.dashboardItems,
    components: state.context.internalConfig.components,

    parameters: {
      ...state.context.internalState.urlParams,
    },


  }
}

