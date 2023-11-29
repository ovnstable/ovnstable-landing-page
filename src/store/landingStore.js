// eslint-disable-next-line import/no-named-as-default
import apiService from '@/services/api-service';

export default {
  namespaced: true,
  state: {
    landingData: null,
    ethPrice: null,
  },
  getters: {
    ethPriceGetter(state) {
      return state.ethPrice;
    },
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
        console.log(tvl, 'fetchAndSetTVL');
        commit('setLandingData', tvl);
      } catch (error) {
        console.error('Error fetching and setting landing data:', error);
      }
    },
    async fetchAndSetEthPrice({ commit }) {
      try {
        const ethPrice = await apiService.getEthPrice();
        console.log(ethPrice, 'PRICE');
        commit('setEthPrice', ethPrice);
      } catch (error) {
        console.error('Error fetching and setting landing data:', error);
      }
    },
  },
};
