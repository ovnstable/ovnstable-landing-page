/* eslint-disable max-len */
import utils from '@/utils';
import { mapState, mapGetters } from 'vuex';
import { getChartSettings } from '@/utils/marimeko/model/getChartSettings';

export default {
  name: 'TotalValueLockedContainer',

  components: {},

  data: () => ({
    totalValue: null,
    mekkaData: null,
    clientCalculateFoundsSchema: {
      // network_calculateValue: 'sub/add_value'
      'optimism_dai+': 'USD+',
      'arbitrum_dai+': 'USD+',
      'bsc_usdt+': 'USD+',
      'linea_usdt+': 'USD+',
    },
    totalByChain: {
      Optimism: 0,
      Arbitrum: 0,
      zkSync: 0,
      Base: 0,
      Linea: 0,
    },
    tokenOrderMap: {
      'USD+': 0,
      'DAI+': 0,
      'USDT+': 0,
      'USDC+': 0,
      'ETH+': 0,
    },
    utils,
    currentBlockSet: 0,
  }),

  computed: {
    ...mapState('device', [
      'deviceTyp',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),
    ...mapGetters('landing', ['ethPriceGetter']),
  },

  watch: {
    ethPriceGetter() {
      this.init();
    },
  },

  methods: {
    async init() {
      this.mekkaData = await this.calcTvlStats();
      const landingDataTVL = this.$store.state?.landing;
      this.totalValue = `$ ${landingDataTVL?.landingData?.formattedTvl.slice(1)}`;

      const initChart = () => {
        if (this.mekkaData) this.initChart(this.mekkaData, parseInt(landingDataTVL?.landingData?.tvl, 10));
      };

      setTimeout(() => initChart(), 20);
    },

    toggleChartBlocks() {
      this.currentBlockSet = this.currentBlockSet === 0 ? 1 : 0;
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },

    async fetchData(url) {
      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': process.env.VUE_APP_ROOT_API,
        },
      };

      const data = await fetch(url, fetchOptions)
        .then((value) => value.json())
        .then((value) => {
          if (value && !value.error) return value;
          return null;
        })
        .catch((reason) => {
          console.log(`Error fetching data: ${reason}`);
          return null;
        });

      return data;
    },

    async calcTvlStats() {
      // Convert ETH to USD
      const ETHTokenName = 'ETH+';
      const ETHPrice = this.ethPriceGetter;

      const customScale = (value) => parseInt(Math.log10(1 + value), 10); // Log transformation

      const tvl = await this.fetchData(`${process.env.VUE_APP_ROOT_API}/tvl/product/total`);

      const formattedData = { ...this.totalByChain };
      const scaledValMap = {};

      const getTokenUSDValue = (token) => {
        const tokenValue = parseInt(token.value, 10);
        if (tokenValue > 0) return token.name === ETHTokenName ? ETHPrice * tokenValue : tokenValue;
        return 0;
      };

      tvl.forEach((item) => {
        if (item.chainName in this.totalByChain) {
          formattedData[item.chainName] = { ...this.tokenOrderMap };
          item.values.forEach((token) => {
            if (token.name in this.tokenOrderMap) {
              const tokenUSDValue = getTokenUSDValue(token);
              this.totalByChain[item.chainName] += tokenUSDValue;
              formattedData[item.chainName][token.name] = tokenUSDValue.toFixed(0);
            }
          });
          const scaledValues = Object.values(formattedData[item.chainName])
            .map((value) => customScale(value));
          scaledValMap[item.chainName] = scaledValues;
        }
      });

      const scaledData = Object.keys(this.totalByChain).map((chainName) => [chainName, ...scaledValMap[chainName]]);
      console.log(scaledData);

      return {
        originalData: formattedData,
        scaledData,
      };
    },

    initChart(mekkaData, maxTvl) {
      const chart = getChartSettings({
        mekkaData,
        maxTvl,
        hasTooltip: this.isMobile,
        hasBlockLabel: !this.isMobile,
        legendPosition: this.isMobile ? 'bottom' : 'bottom',
        legendAlignment: this.isMobile ? 'left' : 'center',
        blocksPadding: this.isMobile ? 1 : 2,
        legendMarginTop: 10,
      });

      chart.container('chart');

      chart.draw();
    },
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.isVisible = true;
      }
    },
  },
};
