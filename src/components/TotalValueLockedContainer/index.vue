<template>
  <div
    v-if="this.$store.state.landing.landingData !== null"
    class="main-chart-container" id="tvl-charts"
  >
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
              :src="require('@/assets/network/optimism.svg')"
              alt="Optimism logo"
            />
            <label v-if="!isMobile" class="chain-text"> Optimism </label>
            <label class="chain-text">
              {{ '$' + utils.formatNumberToMln(this.totalByChain['Optimism']) + 'M' }}
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
              {{ '$' + utils.formatNumberToMln(this.totalByChain['Arbitrum']) + 'M' }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/zksync.svg')"
              alt="Zksync logo"
            />
            <label v-if="!isMobile" class="chain-text"> Zksync </label>
            <label class="chain-text">
              {{ '$' + utils.formatNumberToMln(this.totalByChain['zkSync']) + 'M' }}
            </label>
          </div>
          <div class="chart-block">
            <img
              class="chain-logo"
              :src="require('@/assets/network/base.svg')"
              alt="Base logo"
            />
            <label v-if="!isMobile" class="chain-text"> Base </label>
            <label class="chain-text">
              {{ '$' + utils.formatNumberToMln(this.totalByChain['Base']) + 'M' }}
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
              {{ '$' + utils.formatNumberToMln(this.totalByChain['Linea']) + 'M' }}
            </label>
          </div>
        </div>
        <div id="chart" class="chart"></div>
      </div>
    </div>
  </div>
</template>

<script src='./script.js' />

<style scoped lang="scss" src='./styles.scss'/>

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
