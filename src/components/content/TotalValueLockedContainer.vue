<template>
    <div
        class="main-chart-container"
        id="tvl-charts"
    >
        <div class="chart-title">
            <span class="title">
                Total value locked
            </span>
            <span class="title value">
                {{totalValue}}
            </span>
        </div>
        <div
            v-if="mekkaData"
            class="overflow-hidden"
        >
            <div class="chart-container">
                <div
                    v-if="currentBlockSet === 0"
                    class="chart-chain-blocks"
                >
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/base.svg')"
                            alt="Base logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Base
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalBaseValue) + 'M' }}
                        </label>
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/optimism.svg')"
                            alt="Optimism logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Optimism
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalOptimismValue) + 'M' }}
                        </label>
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/arbitrum.svg')"
                            alt="Arbitrum logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Arbitrum
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalArbitrumValue) + 'M' }}
                        </label>
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/binance.svg')"
                            alt="Binance logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Binance
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalBscValue) + 'M' }}
                        </label>
                    </div>
                    <div
                        class="icon-container"
                        @click="toggleChartBlocks"
                    >
                        <img
                            class="arrow-icon"
                            :src="require('@/assets/widget/arrow_right.svg')"
                            alt="Arrow right icon"
                        >
                    </div>
                </div>
                <div
                    v-if="currentBlockSet === 1"
                    class="chart-chain-blocks"
                >
                    <div
                        class="icon-container"
                        @click="toggleChartBlocks"
                    >
                        <img
                            class="arrow-icon"
                            :src="require('@/assets/widget/arrow_left.svg')"
                            alt="Arrow right icon"
                        >
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/zksync.svg')"
                            alt="Zksync logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Zksync
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalZksyncValue) + 'M' }}
                        </label>
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/polygon.svg')"
                            alt="Polygon logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Polygon
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalPolygonValue) + 'M' }}
                        </label>
                    </div>
                    <div class="chart-block">
                        <img
                            class="chain-logo"
                            :src="require('@/assets/network/linea.svg')"
                            alt="Linea logo"
                        >
                        <label
                            v-if="!isMobile"
                            class="chain-text"
                        >
                            Linea
                        </label>
                        <label class="chain-text">
                            {{ '$' + utils.formatNumberToMln(this.totalLineaValue) + 'M' }}
                        </label>
                    </div>
                </div>
                <div
                    id="chart"
                    class="chart"
                >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getChartSettings} from "@/components/tools/marimeko/model/getChartSettings";
import utils from "@/utils/utils";
import {mapState} from "vuex";

export default {
    name: "TotalValueLockedContainer",

    components: {
    },

    data: () => ({
        totalValue: null,
        mekkaData: null,
        clientCalculateFoundsSchema: { // network_calculateValue: 'sub/add_value'
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
            'Optimism': 1,
            'Arbitrum': 2,
            'BSC': 3,
            'Polygon': 4,
            'zkSync': 5,
            'Base': 6,
            'Linea': 7,
        },
        chainOrderProductsMap: {
            'USD+': 1,
            'DAI+': 2,
            'USDT+': 3,
            'ETH+': 4,
        },
        utils: utils,
        currentBlockSet: 0,
    }),

    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },

    async mounted() {
        this.mekkaData = await this.loadProductTvlData();
        this.mekkaData = await this.getWithFilledClientFoundsValue(this.mekkaData);
        this.mekkaData = this.getOrderedMekkaData(this.mekkaData);
        console.log("Mekka Data:", this.mekkaData);
        this.getTotalNetworkValue(this.mekkaData);

        let tvlData = await this.getTvl();
        this.totalValue = tvlData.formattedTvl;
        if (this.mekkaData) {
            console.log('Mekka:', this.mekkaData);
            setTimeout(() => {
                this.initChart(this.mekkaData, parseInt(tvlData.tvl));
            }, 20)
        }
    },

    methods: {
        toggleChartBlocks() {
            this.currentBlockSet = (this.currentBlockSet === 0) ? 1 : 0;
        },

        handleMiddleClick(e, url) {
            if (e.button === 1) {
                e.preventDefault();
                window.open(url, '_blank').focus();
            }
        },

        async loadProductTvlData() {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": process.env.VUE_APP_ROOT_API
                }
            };


            return await fetch(process.env.VUE_APP_ROOT_API + '/tvl/product/total', fetchOptions)
                .then(value => value.json())
                .then(value => {
                    if (value && !value.error) {
                        return value;

                    } else {
                        return null;
                    }
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                    return null;
                });
        },
        getOrderedMekkaData(mekkaData) {
            let orderedMekkaData = [];
            for (let i = 0; i < mekkaData.length; i++) {
                let chainInfo = mekkaData[i];
                let newPosition = this.chainOrderMap[chainInfo.chainName];
                if (newPosition) {
                    orderedMekkaData[newPosition - 1] = this.getOrderedAndFilledProductValues(chainInfo);
                    console.log('Ordered and filled orderedMekkaData[newPosition - 1]', orderedMekkaData[newPosition - 1]);
                    continue;
                }

                console.error("Mekka data not found order position for chain: ", chainInfo);
            }

            return orderedMekkaData;
        },
        getOrderedAndFilledProductValues(chainInfo) {
            let orderedProducts = [];
            chainInfo = this.getFilledNullableProductValues(chainInfo);
            for (let i = 0; i < chainInfo.values.length; i++) {
                let product = chainInfo.values[i];
                let newPosition = this.chainOrderProductsMap[product.name];
                if (newPosition) {
                    orderedProducts[newPosition - 1] = product;
                    continue;
                }

                console.error("Mekka product data not found order position for chain: ", product);
            }

            chainInfo.values = orderedProducts;
            return chainInfo;
        },
        getFilledNullableProductValues(chainInfo) {
            let productsWithoutValues = []
            let productAvailableList = Object.keys(this.chainOrderProductsMap);
            for (let i = 0; i < productAvailableList.length; i++) {
                let productName = productAvailableList[i];
                if (this.isProductExistInChainProducts(productName, chainInfo)) {
                    // product exist
                    continue;
                }

                productsWithoutValues.push({
                    name: productName,
                    value: 0
                })
            }

            chainInfo.values = [...chainInfo.values, ...productsWithoutValues];

            return chainInfo;
        },
        isProductExistInChainProducts(productName, chainInfo) {
            return chainInfo.values.some(obj => obj.name.toLowerCase() === productName.toLowerCase());
        },
        async getArbitrumValueFundsFromCollateralAndStrategies() {
            let collateral = await this.getCollateral('arbitrum', 'usd+');
            console.log("collateral : ", collateral)
            let collateralSum = collateral.reduce((acc, curr) => acc + curr.netAssetValue, 0);
            console.log("collateralSum sum: ", collateralSum)

            let strategies = await this.getStrategies('arbitrum', 'usd+');
            console.log("Strategies : ", strategies)
            let strategiesSum = strategies.reduce((acc, curr) => acc + curr.netAssetValue, 0);
            console.log("Strategies sum: ", strategiesSum)

            let sum = strategiesSum - collateralSum;
            if (sum <= 0) {
                return 0;
            }
            return sum;
        },
        async getWithFilledClientFoundsValue(mekkaData) {

            for (let i = 0; i < mekkaData.length; i++) {
                let mekkaItem = mekkaData[i];

                for (let j = 0; j < mekkaItem.values.length; j++) {
                    let value = mekkaItem.values[j];

                    if (mekkaItem.chainName === 'Arbitrum'  && value.name === 'USD+') {
                        // let valueFunds = await this.getArbitrumValueFundsFromCollateralAndStrategies();
                        console.log("+Value old value: ", mekkaData,  value, value.value)
                        value.value = value.value*1;
                        console.log("+Value new value: ", mekkaData, value, value.value)
                    }

                    /*if (mekkaItem.chainName === 'Arbitrum'  && value.name === 'ETS') {
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
                    let tokenCollaterals = await this.getCollateral(mekkaItem.chainName.toLowerCase(), value.name.toLowerCase());
                    let foundValue = this.getFoundValueByTokenName(tokenCollaterals, subAddValue);
                    console.log(key + ': ', foundValue);
                    value.value = value.value + foundValue;
                    this.subFoundFromMekkaValue(mekkaItem.values, subAddValue, foundValue);*/
                }
            }

            return mekkaData;
        },

        subFoundFromMekkaValue(networkValues, subToken, subValue) {
            for (let i = 0; i < networkValues.length; i++) {
                let value = networkValues[i];
                console.log("SUB TOKEN:", networkValues, subToken,  subValue)
                if (value.name ===  subToken) {
                    value.value = value.value - subValue
                    return
                }

            }
        },

        getTotalNetworkValue(mekkaData) {
            for (let i = 0; i < mekkaData.length; i++) {
                let mekkaItem = mekkaData[i];
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
                    console.log('Optimism TVL: ', this.totalOptimismValue);
                }
                if (mekkaItem.chainName === 'Arbitrum') {
                    for (let k = 0; k < mekkaItem.values.length; k++) {
                        sumArb += mekkaItem.values[k].value;
                        this.totalArbitrumValue = sumArb;
                    }
                    console.log('Arbitrum TVL: ', this.totalArbitrumValue);
                }
                if (mekkaItem.chainName === 'BSC') {
                    for (let b = 0; b < mekkaItem.values.length; b++) {
                        sumBsc += mekkaItem.values[b].value;
                        this.totalBscValue = sumBsc;
                    }
                    console.log('Bsc TVL: ', this.totalBscValue);
                }
                if (mekkaItem.chainName === 'zkSync') {
                    for (let z = 0; z < mekkaItem.values.length; z++) {
                        sumZk += mekkaItem.values[z].value;
                        this.totalZksyncValue = sumZk;
                    }
                    console.log('ZkSync TVL: ', this.totalZksyncValue);
                }
                if (mekkaItem.chainName === 'Polygon') {
                    for (let p = 0; p < mekkaItem.values.length; p++) {
                        sumPoly += mekkaItem.values[p].value;
                        this.totalPolygonValue = sumPoly;
                    }
                    console.log('Polygon TVL: ', this.totalPolygonValue);
                }
                if (mekkaItem.chainName === 'Base') {
                    for (let h = 0; h < mekkaItem.values.length; h++) {
                        sumPoly += mekkaItem.values[h].value;
                        this.totalBaseValue = sumPoly;
                    }
                    console.log('Base TVL: ', this.totalBaseValue);
                }

                if (mekkaItem.chainName === 'Linea') {
                    for (let l = 0; l < mekkaItem.values.length; l++) {
                        sumPoly += mekkaItem.values[l].value;
                        this.totalLineaValue = sumPoly;
                    }
                    console.log('Linea TVL: ', this.totalLineaValue);
                }
            }
        },

        getFoundValueByTokenName(collateralList, tokenName) {
            for (let i = 0; i < collateralList.length; i++) {
                let collateralInfo = collateralList[i];
                if (collateralInfo.id && collateralInfo.id.tokenName === tokenName) {
                    return collateralInfo.netAssetValue;
                }
            }

            return 0;
        },

        async getCollateral(networkName, tokenName) {
            // example: https://api.overnight.fi/optimism/dai+/dapp/collateral/total

            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
                }
            };

            return fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + `/${networkName}/${tokenName}/dapp/collateral/total`, fetchOptions)
                .then(value => value.json())
                .then(value => {
                    if (value) {
                        return value;
                    } else {
                        return null;
                    }
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                    return null;
                });
        },
        async getStrategies(networkName, tokenName) {
            // example: https://api.overnight.fi/arbitrum/usd+/dapp/strategies

            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
                }
            };

            return fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + `/${networkName}/${tokenName}/dapp/strategies`, fetchOptions)
                .then(value => value.json())
                .then(value => {
                    console.log("get strategies:", value)
                    if (value) {
                        return value;
                    } else {
                        return null;
                    }
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                    return null;
                });
        },

        async getTvl() {
            let tvl = 0.0;
            let tvlData = await this.getTvLData();
            if (tvlData) {
                tvl = tvlData;
            }

            return {
                formattedTvl: tvl ? ('$ ' + this.utils.formatMoneyComma(tvl, 2)) : '-',
                tvl: tvl
            }
        },

        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },

        async getTvLData() {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": process.env.VUE_APP_ROOT_API
                }
            };

            return fetch(process.env.VUE_APP_ROOT_API + '/tvl/total', fetchOptions)
                .then(value => value.json())
                .then(value => {
                    if (value) {
                        return value;
                    } else {
                        return null;
                    }
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                    return null;
                });
        },

        initChart(mekkaData, maxTvl) {
            const chart = getChartSettings(
                {
                    mekkaData: mekkaData,
                    maxTvl: maxTvl,
                    hasTooltip: this.isMobile,
                    hasBlockLabel: !this.isMobile,
                    legendPosition: this.isMobile ? 'center' : 'bottom',
                    legendAlignment: this.isMobile ? 'center' : 'left',
                    blocksPadding: this.isMobile ? 1 : 2,
                    legendMarginTop: 10,
                })

            chart.container('chart');

            chart.draw();
        },
        visibilityChanged (isVisible) {
            if (isVisible) {
                this.isVisible = true;
            }
        }
    }
}
</script>

<style scoped lang="scss">
/* mobile*/
@media only screen and (max-width: 768px) {
    .chart-container {
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        border: 1px solid black;
        border-bottom: 2px solid black;
    }

    .chart-chain-blocks {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 10px;
        padding: 30px 20px 20px 20px;
    }

    .chart-block {
        width: 65px;
        height: 26px;
        border: 1px solid black;
        border-bottom: 2px solid black;
        border-radius: 12px;

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
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
    }

    .chart {
        display: flex;
        min-width: 300px;
        height: 300px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .chart-container {
        background-color: #FFFFFF;
        aspect-ratio: 2.6/1;
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        border: 1px solid black;
        border-bottom: 2px solid black;
    }

    .chart-chain-blocks {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 20px;
        padding: 30px 20px 20px 20px;
    }

    .chart-block {
        width: 250px;
        height: 32px;
        border: 1px solid black;
        border-bottom: 2px solid black;
        border-radius: 12px;

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
        width: 1150px;
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
.anychart-credits-text, .anychart-credits-logo {
    display: none;
}

.divider {
    margin-left: 10px;
    margin-right: 20px;
    border-top: 1px solid #DEE1E5 !important;
}
</style>

