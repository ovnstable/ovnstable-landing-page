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

      setTimeout(() => {
        if (this.mekkaData) {
          this.initChart(
            this.mekkaData,
            parseInt(landingDataTVL.landingData.tvl, 10),
          );
        }
      }, 20);
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

      const customScale = (value) => Math.log10(value); // Log transformation

      const tvl = await this.fetchData(`${process.env.VUE_APP_ROOT_API}/tvl/product/total`);

      const formattedData = { ...this.totalByChain };
      const scaledData = [];

      const getTokenUSDValue = (token) => {
        const tokenValue = Number(token.value);
        if (tokenValue > 0) return token.name === ETHTokenName ? ETHPrice * tokenValue : tokenValue;
        return 0;
      };

      tvl.forEach((item) => {
        if (item.chainName in this.totalByChain) {
          formattedData[item.chainName] = { ...this.tokenOrderMap };
          const scalVal = [];
          item.values.forEach((token) => {
            const tokenUSDValue = getTokenUSDValue(token);
            this.totalByChain[item.chainName] += tokenUSDValue;
            formattedData[item.chainName][token.name] = token.value;
            if (tokenUSDValue > 0) scalVal.push(customScale(tokenUSDValue));
          });
          scaledData.push([item.chainName, ...scalVal]);
        }
      });

      return {
        originalData: formattedData,
        scaledData,
      };
    },

    getOrderedMekkaData(mekkaData) {
      return mekkaData;
      //   .reduce((orderedMekkaData, chainInfo) => {
      //     const newPosition = this.chainOrderMap[chainInfo.chainName];
      //     if (newPosition) {
      //       // eslint-disable-next-line no-param-reassign
      //       orderedMekkaData[newPosition - 1] = this.getOrderedAndFilledProductValues(chainInfo);
      //     }
      //     return orderedMekkaData;
      //   }, []);
    },

    getOrderedAndFilledProductValues(chainInfo) {
      const orderedProducts = [];
      // eslint-disable-next-line no-param-reassign
      chainInfo = this.getFilledNullableProductValues(chainInfo);
      for (let i = 0; i < chainInfo.values.length; i++) {
        const product = chainInfo.values[i];
        const newPosition = this.chainOrderProductsMap[product.name];
        if (newPosition) {
          orderedProducts[newPosition - 1] = product;
        }

        // console.error('Mekka product data not found order position for chain: ', product);
      }

      // eslint-disable-next-line no-param-reassign
      chainInfo.values = orderedProducts;
      return chainInfo;
    },
    getFilledNullableProductValues(chainInfo) {
      const productsWithoutValues = [];
      const productAvailableList = Object.keys(this.chainOrderProductsMap);
      for (let i = 0; i < productAvailableList.length; i++) {
        const productName = productAvailableList[i];
        if (!this.isProductExistInChainProducts(productName, chainInfo)) {
          productsWithoutValues.push({
            name: productName,
            value: 0,
          });
        }
      }

      // eslint-disable-next-line no-param-reassign
      chainInfo.values = [...chainInfo.values, ...productsWithoutValues];

      return chainInfo;
    },
    isProductExistInChainProducts(productName, chainInfo) {
      return chainInfo.values.some(
        (obj) => obj.name.toLowerCase() === productName.toLowerCase(),
      );
    },
    async getArbitrumValueFundsFromCollateralAndStrategies() {
      const collateral = await this.getCollateral('arbitrum', 'usd+');
      const collateralSum = collateral.reduce(
        (acc, curr) => acc + curr.netAssetValue,
        0,
      );
      const strategies = await this.getStrategies('arbitrum', 'usd+');
      const strategiesSum = strategies.reduce(
        (acc, curr) => acc + curr.netAssetValue,
        0,
      );

      const sum = strategiesSum - collateralSum;
      if (sum <= 0) {
        return 0;
      }
      return sum;
    },

    async getWithFilledClientFoundsValue(mekkaData) {
      return mekkaData.map((mekkaItem) => {
        const newValues = mekkaItem.values.map((value) => {
          if (mekkaItem.chainName === 'Arbitrum' && value.name === 'USD+') {
            // let valueFunds = await this.getArbitrumValueFundsFromCollateralAndStrategies();
            // eslint-disable-next-line no-param-reassign
            value.value *= 1;
          }
          return value;
        });
        return { ...mekkaItem, values: newValues };
      });
    },

    subFoundFromMekkaValue(networkValues, subToken, subValue) {
      for (let i = 0; i < networkValues.length; i++) {
        const value = networkValues[i];
        if (value.name === subToken) {
          value.value -= subValue;
          return;
        }
      }
    },

    // getTotalNetworkValue(mekkaData) {
    //   for (let i = 0; i < mekkaData.length; i++) {
    //     const mekkaItem = mekkaData[i];
    //     let sumOp = 0;
    //     let sumArb = 0;
    //     let sumBsc = 0;
    //     let sumZk = 0;
    //     let sumPoly = 0;
    //     let sumBase = 0;

    //     if (mekkaItem.chainName === "Optimism") {
    //       for (let j = 0; j < mekkaItem.values.length; j++) {
    //         sumOp += mekkaItem.values[j].value;
    //         this.totalOptimismValue = sumOp;
    //       }
    //     }
    //     if (mekkaItem.chainName === "Arbitrum") {
    //       for (let k = 0; k < mekkaItem.values.length; k++) {
    //         sumArb += mekkaItem.values[k].value;
    //         this.totalArbitrumValue = sumArb;
    //       }
    //     }
    //     if (mekkaItem.chainName === "BSC") {
    //       for (let b = 0; b < mekkaItem.values.length; b++) {
    //         sumBsc += mekkaItem.values[b].value;
    //         this.totalBscValue = sumBsc;
    //       }
    //     }
    //     if (mekkaItem.chainName === "zkSync") {
    //       for (let z = 0; z < mekkaItem.values.length; z++) {
    //         sumZk += mekkaItem.values[z].value;
    //         this.totalZksyncValue = sumZk;
    //       }
    //     }
    //     if (mekkaItem.chainName === "Polygon") {
    //       for (let p = 0; p < mekkaItem.values.length; p++) {
    //         sumPoly += mekkaItem.values[p].value;
    //         this.totalPolygonValue = sumPoly;
    //       }
    //     }
    //     if (mekkaItem.chainName === "Base") {
    //       for (let h = 0; h < mekkaItem.values.length; h++) {
    //         sumBase += mekkaItem.values[h].value;
    //         this.totalBaseValue = sumBase;
    //       }
    //     }

    //     if (mekkaItem.chainName === "Linea") {
    //       for (let l = 0; l < mekkaItem.values.length; l++) {
    //         sumPoly += mekkaItem.values[l].value;
    //         this.totalLineaValue = sumPoly;
    //       }
    //     }
    //   }
    // },

    getFoundValueByTokenName(collateralList, tokenName) {
      for (let i = 0; i < collateralList.length; i++) {
        const collateralInfo = collateralList[i];
        if (collateralInfo.id && collateralInfo.id.tokenName === tokenName) {
          return collateralInfo.netAssetValue;
        }
      }

      return 0;
    },

    async getCollateral(networkName, tokenName) {
      // example: https://api.overnight.fi/optimism/dai+/dapp/collateral/total
      return this.fetchData(
        `${process.env.VUE_APP_WIDGET_ROOT_API_URL}/${networkName}/${tokenName}/dapp/collateral/total`,
      );
    },

    async getStrategies(networkName, tokenName) {
      // example: https://api.overnight.fi/arbitrum/usd+/dapp/strategies
      return this.fetchData(
        `${process.env.VUE_APP_WIDGET_ROOT_API_URL}/${networkName}/${tokenName}/dapp/strategies`,
      );
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
