// eslint-disable-next-line import/no-named-as-default
import apiService from '@/services/api-service';

export default {
  namespaced: true,
  state: {
    landingData: null,
  },
  mutations: {
    setLandingData(state, data) {
      state.landingData = data;
    },
  },
  actions: {
    async fetchAndSetTVL({ commit }) {
      try {
        const tvl = await apiService.getTvl();
        commit('setLandingData', tvl);
      } catch (error) {
        console.error('Error fetching and setting landing data:', error);
      }
    },
  },
};
