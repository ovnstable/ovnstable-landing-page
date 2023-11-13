export default {
  setDeviceType(state, payload) {
    state.deviceType = payload;
  },

  setIsMobile(state, payload) {
    state.isMobile = payload;
  },

  setIsTablet(state, payload) {
    state.isTablet = payload;
  },

  setIsDesktop(state, payload) {
    state.isDesktop = payload;
  },

  setDeviceOrientation(state, payload) {
    state.deviceOrientation = payload;
  },

};
