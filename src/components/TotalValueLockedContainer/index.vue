<template>
  <div class="main-chart-container" id="tvl-charts">
    <div class="chart-title">
      <span class="title"> Total value locked </span>
      <span class="title value">
        {{ totalValue }}
      </span>
    </div>
    <div class="chart-container-wrap" v-if="mekkaData">
      <div class="chart-container">
        <div v-if="currentBlockSet === 0" class="chart-chain-blocks">
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/base.svg')"
              alt="Base logo"
            />
            <label v-if="!isMobile" class="chain-text"> Base </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalBaseValue) + "M" }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/optimism.svg')"
              alt="Optimism logo"
            />
            <label v-if="!isMobile" class="chain-text"> Optimism </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalOptimismValue) + "M" }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/arbitrum.svg')"
              alt="Arbitrum logo"
            />
            <label v-if="!isMobile" class="chain-text"> Arbitrum </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalArbitrumValue) + "M" }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/binance.svg')"
              alt="Binance logo"
            />
            <label v-if="!isMobile" class="chain-text"> Binance </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalBscValue) + "M" }}
            </label>
          </div>
          <div class="icon-container" @click="toggleChartBlocks">
            <img
              class="arrow-icon"
              :src="require('@/assets/widget/arrow_right.svg')"
              alt="Arrow right icon"
            />
          </div>
        </div>
        <div v-if="currentBlockSet === 1" class="chart-chain-blocks">
          <div class="icon-container" @click="toggleChartBlocks">
            <img
              class="arrow-icon"
              :src="require('@/assets/widget/arrow_left.svg')"
              alt="Arrow right icon"
            />
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/zksync.svg')"
              alt="Zksync logo"
            />
            <label v-if="!isMobile" class="chain-text"> Zksync </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalZksyncValue) + "M" }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/polygon.svg')"
              alt="Polygon logo"
            />
            <label v-if="!isMobile" class="chain-text"> Polygon </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalPolygonValue) + "M" }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/linea.svg')"
              alt="Linea logo"
            />
            <label v-if="!isMobile" class="chain-text"> Linea </label>
            <label class="chain-text">
              {{ "$" + utils.formatNumberToMln(this.totalLineaValue) + "M" }}
            </label>
          </div>
        </div>
        <div id="chart" class="chart"></div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable no-param-reassign -->
<script>
import utils from '@/utils';
import { mapState } from 'vuex';
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
    totalOptimismValue: null,
    totalArbitrumValue: null,
    totalBscValue: null,
    totalZksyncValue: null,
    totalPolygonValue: null,
    totalBaseValue: null,
    totalLineaValue: null,
    chainOrderMap: {
      Optimism: 1,
      Arbitrum: 2,
      BSC: 3,
      Polygon: 4,
      zkSync: 5,
      Base: 6,
      Linea: 7,
    },
    chainOrderProductsMap: {
      'USD+': 1,
      'DAI+': 2,
      'USDT+': 3,
      'ETH+': 4,
    },
    utils,
    currentBlockSet: 0,
  }),

  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),
  },

  async mounted() {
    this.mekkaData = await this.loadProductTvlData();
    this.mekkaData = await this.getWithFilledClientFoundsValue(this.mekkaData);
    this.mekkaData = this.getOrderedMekkaData(this.mekkaData);
    this.getTotalNetworkValue(this.mekkaData);

    const tvlData = await this.getTvl();
    this.totalValue = tvlData.formattedTvl;
    if (this.mekkaData) {
      setTimeout(() => {
        // eslint-disable-next-line radix
        this.initChart(this.mekkaData, parseInt(tvlData.tvl));
      }, 20);
    }
  },

  methods: {
    toggleChartBlocks() {
      this.currentBlockSet = this.currentBlockSet === 0 ? 1 : 0;
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },

    async loadProductTvlData() {
      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': process.env.VUE_APP_ROOT_API,
        },
      };

      return fetch(`${process.env.VUE_APP_ROOT_API}/tvl/product/total`, fetchOptions)
        .then((value) => value.json())
        .then((value) => {
          if (value && !value.error) {
            return value;
          }
          return null;
        })
        .catch((reason) => {
          console.log(`Error get data: ${reason}`);
          return null;
        });
    },
    getOrderedMekkaData(mekkaData) {
      const orderedMekkaData = [];
      for (let i = 0; i < mekkaData.length; i++) {
        const chainInfo = mekkaData[i];
        const newPosition = this.chainOrderMap[chainInfo.chainName];
        if (newPosition) {
          orderedMekkaData[newPosition - 1] = this.getOrderedAndFilledProductValues(
            chainInfo,
          );
          // eslint-disable-next-line no-continue
          continue;
        }

        // console.error('Mekka data not found order position for chain: ', chainInfo);
      }

      return orderedMekkaData;
    },
    getOrderedAndFilledProductValues(chainInfo) {
      const orderedProducts = [];
      chainInfo = this.getFilledNullableProductValues(chainInfo);
      for (let i = 0; i < chainInfo.values.length; i++) {
        const product = chainInfo.values[i];
        const newPosition = this.chainOrderProductsMap[product.name];
        if (newPosition) {
          orderedProducts[newPosition - 1] = product;
        }

        // console.error('Mekka product data not found order position for chain: ', product);
      }

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
      const collateralSum = collateral.reduce((acc, curr) => acc + curr.netAssetValue, 0);
      const strategies = await this.getStrategies('arbitrum', 'usd+');
      const strategiesSum = strategies.reduce((acc, curr) => acc + curr.netAssetValue, 0);

      const sum = strategiesSum - collateralSum;
      if (sum <= 0) {
        return 0;
      }
      return sum;
    },

    async getWithFilledClientFoundsValue(mekkaData) {
      for (let i = 0; i < mekkaData.length; i++) {
        const mekkaItem = mekkaData[i];

        for (let j = 0; j < mekkaItem.values.length; j++) {
          const value = mekkaItem.values[j];

          if (mekkaItem.chainName === 'Arbitrum' && value.name === 'USD+') {
            // let valueFunds = await this.getArbitrumValueFundsFromCollateralAndStrategies();
            value.value *= 1;
          }

          /* if (mekkaItem.chainName === 'Arbitrum'  && value.name === 'ETS') {
          let valueFunds = await this.getArbitrumValueFundsFromCollateralAndStrategies();
          console.log("+Value valueFunds: ", valueFunds)
          value.value = valueFunds;
          continue
        }

        let key = mekkaItem.chainName.toLowerCase() + '_' + value.name.toLowerCase();
        let subAddValue = this.clientCalculateFoundsSchema[key]
        if (!subAddValue) {
          continue;
        }

        console.log(mekkaItem.chainName.toLowerCase(), value.name.toLowerCase())
        let tokenCollaterals = await
        this.getCollateral(mekkaItem.chainName.toLowerCase(), value.name.toLowerCase());
        let foundValue = this.getFoundValueByTokenName(tokenCollaterals, subAddValue);
        console.log(key + ': ', foundValue);
        value.value = value.value + foundValue;
        this.subFoundFromMekkaValue(mekkaItem.values, subAddValue, foundValue); */
        }
      }

      return mekkaData;
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

    getTotalNetworkValue(mekkaData) {
      for (let i = 0; i < mekkaData.length; i++) {
        const mekkaItem = mekkaData[i];
        let sumOp = 0;
        let sumArb = 0;
        let sumBsc = 0;
        let sumZk = 0;
        let sumPoly = 0;

        if (mekkaItem.chainName === 'Optimism') {
          for (let j = 0; j < mekkaItem.values.length; j++) {
            sumOp += mekkaItem.values[j].value;
            this.totalOptimismValue = sumOp;
          }
        }
        if (mekkaItem.chainName === 'Arbitrum') {
          for (let k = 0; k < mekkaItem.values.length; k++) {
            sumArb += mekkaItem.values[k].value;
            this.totalArbitrumValue = sumArb;
          }
        }
        if (mekkaItem.chainName === 'BSC') {
          for (let b = 0; b < mekkaItem.values.length; b++) {
            sumBsc += mekkaItem.values[b].value;
            this.totalBscValue = sumBsc;
          }
        }
        if (mekkaItem.chainName === 'zkSync') {
          for (let z = 0; z < mekkaItem.values.length; z++) {
            sumZk += mekkaItem.values[z].value;
            this.totalZksyncValue = sumZk;
          }
        }
        if (mekkaItem.chainName === 'Polygon') {
          for (let p = 0; p < mekkaItem.values.length; p++) {
            sumPoly += mekkaItem.values[p].value;
            this.totalPolygonValue = sumPoly;
          }
        }
        if (mekkaItem.chainName === 'Base') {
          for (let h = 0; h < mekkaItem.values.length; h++) {
            sumPoly += mekkaItem.values[h].value;
            this.totalBaseValue = sumPoly;
          }
        }

        if (mekkaItem.chainName === 'Linea') {
          for (let l = 0; l < mekkaItem.values.length; l++) {
            sumPoly += mekkaItem.values[l].value;
            this.totalLineaValue = sumPoly;
          }
        }
      }
    },

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

      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': process.env.VUE_APP_WIDGET_ROOT_API_URL,
        },
      };

      return fetch(
        `${process.env.VUE_APP_WIDGET_ROOT_API_URL}/${networkName}/${tokenName}/dapp/collateral/total`,
        fetchOptions,
      )
        .then((value) => value.json())
        .then((value) => {
          if (value) {
            return value;
          }
          return null;
        })
        .catch((reason) => {
          console.log(`Error get data: ${reason}`);
          return null;
        });
    },
    async getStrategies(networkName, tokenName) {
      // example: https://api.overnight.fi/arbitrum/usd+/dapp/strategies

      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': process.env.VUE_APP_WIDGET_ROOT_API_URL,
        },
      };

      return fetch(
        `${process.env.VUE_APP_WIDGET_ROOT_API_URL}/${networkName}/${tokenName}/dapp/strategies`,
        fetchOptions,
      )
        .then((value) => value.json())
        .then((value) => {
          console.log('get strategies:', value);
          if (value) {
            return value;
          }
          return null;
        })
        .catch((reason) => {
          console.log(`Error get data: ${reason}`);
          return null;
        });
    },

    async getTvl() {
      let tvl = 0.0;
      const tvlData = await this.getTvLData();
      if (tvlData) {
        tvl = tvlData;
      }

      return {
        formattedTvl: tvl ? `$ ${this.utils.formatMoneyComma(tvl, 2)}` : '-',
        tvl,
      };
    },

    openLink(url) {
      if (url) {
        window.open(url, '_blank').focus();
      }
    },

    async getTvLData() {
      const fetchOptions = {
        headers: {
          'Access-Control-Allow-Origin': process.env.VUE_APP_ROOT_API,
        },
      };

      return fetch(`${process.env.VUE_APP_ROOT_API}/tvl/total`, fetchOptions)
        .then((value) => value.json())
        .then((value) => {
          if (value) {
            return value;
          }
          return null;
        })
        .catch((reason) => {
          console.log(`Error get data: ${reason}`);
          return null;
        });
    },

    initChart(mekkaData, maxTvl) {
      const chart = getChartSettings({
        mekkaData,
        maxTvl,
        hasTooltip: this.isMobile,
        hasBlockLabel: !this.isMobile,
        legendPosition: this.isMobile ? 'center' : 'bottom',
        legendAlignment: this.isMobile ? 'center' : 'left',
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
</script>

<style scoped lang="scss">

::-webkit-scrollbar{
    background: transparent;
    height: 3px;
}
::-webkit-scrollbar-thumb{
    background: var(--ov-bg-secondary);
    border-radius: 50px;
}

::-webkit-resizer,
::-webkit-scrollbar-button,
::-webkit-scrollbar-corner { display: none; }

.chart-container {
  overflow: auto;
}

.chart {
  width: 800px;
}

.chart-chain-blocks {
  position: sticky;
  left: 0;
  top: 0;
}

.chart-container-wrap {
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid black;
  border-bottom: 2px solid black;
  padding: 0 20px;
}
.icon-container {
  margin-right: auto;
}

/* mobile*/
@media only screen and (max-width: 768px) {
  .chart-container {
    display: flex;
    flex-direction: column;
  }

  .chart-chain-blocks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
    padding: 30px 0 0 10px;
  }

  .chart-block {
    width: 100%;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .title {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .main-chart-container {
    margin-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .chain-logo {
    width: 12px;
    height: 12px;
  }

  .chain-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .chart {
    display: flex;
    min-width: 500px;
    height: 300px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .chart-container {
    display: flex;
    flex-direction: column;
  }

  .chart-chain-blocks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    padding: 30px 20px 20px 30px;
  }

  .chart-block {
    width: 250px;
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 12px;
    padding: 7px 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .main-chart-container {
    margin-bottom: 100px;
  }

  .chain-logo {
    width: 28px;
    height: 20px;
  }

  .chain-text {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }

  .chart {
    display: flex;
    width: 100%;
    height: 350px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
  }

  .title {
    margin-bottom: 30px;
    text-transform: uppercase;
  }
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.arrow-icon {
  height: 20px;
  width: 11.49px;
}

.chart-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.value {
  font-weight: 600;
}

.main-chart-container {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.btn-row {
  margin-top: 2% !important;
  padding-bottom: 20px;
}
</style>

<style>
/* Скрыть логотип и его текст на графике */
.anychart-credits-text,
.anychart-credits-logo {
  display: none;
}

.divider {
  margin-left: 10px;
  margin-right: 20px;
  border-top: 1px solid #dee1e5 !important;
}
</style>
