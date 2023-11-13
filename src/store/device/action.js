export default {
  updateDeviceOrientation(context, payload) {
    context.commit('setDeviceOrientation', payload);
  },

  updateDeviceType(context, payload) {
    context.commit('setDeviceType', payload);

    if (payload === 'desktop') {
      context.commit('setIsMobile', false);
      context.commit('setIsTablet', false);
      context.commit('setIsDesktop', true);
      return;
    }

    if (payload === 'tablet') {
      context.commit('setIsMobile', false);
      context.commit('setIsTablet', true);
      context.commit('setIsDesktop', false);
      return;
    }

    if (payload === 'mobile') {
      context.commit('setIsMobile', true);
      context.commit('setIsTablet', false);
      context.commit('setIsDesktop', false);
      return;
    }

    console.error(`Unknown device type: ${payload}`);
    context.commit('setIsMobile', false);
    context.commit('setIsTablet', false);
    context.commit('setIsDesktop', true);
  },
};
