import getters from './getter'
import actions from './action'
import mutations from './mutation'

const state = {
  deviceOrientation: 'landscape',
  deviceType: 'desktop',
  isMobile: false,
  isTablet: false,
  isDesktop: true,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
