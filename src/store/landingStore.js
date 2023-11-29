// eslint-disable-next-line import/no-named-as-default
import apiService from '@/services/api-service';

export default {
  namespaced: true,
  state: {
    landingData: null,
    ethPrice: null,
  },
  mutations: {
    setLandingData(state, data) {
      state.landingData = data;
    },
    setEthPrice(state, data) {
      state.ethPrice = data;
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
    async fetchAndSetEthPrice({ commit }) {
      try {
        const ethPrice = await apiService.getEthPrice();
        commit('setEthPrice', ethPrice);
      } catch (error) {
        console.error('Error fetching and setting landing data:', error);
      }
    },
  },
};
