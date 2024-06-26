<template>
  <div>
    <div>
      <div class="card card-round statistic-widget card-shadow">
        <div class="statistic-widget__loader" v-if="loading || !data">
          <Preloader />
        </div>

        <div v-else class="widget-container">
          <div v-if="!isClicked" class="card-tab">
            <div class="statistic-title" @click="handleClick">
              {{  totalValueTVL }}
            </div>
            <div class="tvl-text-container">
              <div class="lock-icon-container">
                <img
                  class="lock-icon"
                  :src="require('@/assets/widget/lock.svg')"
                  alt="lock icon"
                />
                <div class="tvl-label" @click="scrollToCharts">TOTAL VALUE LOCKED</div>
                <div class="arrow-icon-container" @click="handleClick">
                  <img
                    class="arrow-icon"
                    :src="require('@/assets/widget/arrow_right.svg')"
                    alt="arrow right icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="card-tab" @click="handleClick">
            <div class="arrow-icon-container">
              <img
                class="arrow-icon"
                :src="require('@/assets/widget/arrow_left.svg')"
                alt="arrow left icon"
              />
            </div>
            <div class="total-locked statistic-title">
              {{ formattedTotalProfit }}
            </div>
            <div class="tvl-text-container">
              <div class="tvl-label-investors">TOTAL PAYMENT TO HOLDERS</div>
            </div>
          </div>

          <div class="apy-container">
            <div
              class="value-container"
              @click="openBestChainApy()"
              @mouseup.middle="
                handleMiddleClick(
                  $event,
                  'https://app.overnight.fi/market/usd'
                )
              "
            >
              <div class="statistic-title">
                {{ this.utils.formatNumberToFixed(data.usdPlusProduct.value) + "%" }}
              </div>
              <div class="statistic-subtitle">USD+ APY</div>
            </div>

            <div
              class="value-container"
              @click="
                openLinkBlank('https://app.overnight.fi/market/eth')
              "
              @mouseup.middle="
                handleMiddleClick(
                  $event,
                  'https://app.overnight.fi/market/eth'
                )
              "
            >
              <div class="statistic-title">
                {{ this.utils.formatNumberToFixed(data.ethPlusProduct.value) + "%" }}
              </div>
              <div class="statistic-subtitle">ETH+ APY</div>
            </div>

            <div class="payout-container">
              <div class="clock-container">
                <div class="clock-icon-container">
                  <img
                    class="clock-icon"
                    :src="require('@/assets/widget/sandclock.svg')"
                    alt="sand clock icon"
                  />
                </div>
                <div class="statistic-title">
                  {{ timeFromPayout }}
                </div>
              </div>
              <div class="statistic-subtitle">SINCE LAST PAYOUT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statisticApiService from '@/services/statistic-api-service';
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';
import utils from '@/utils';
import Preloader from '../UI/Preloader/index.vue';

export default {
  name: 'statistic-widget',
  components: {
    Preloader,
  },
  data() {
    return {
      data: null,
      loading: true,
      isClicked: false,
      bestChainApy: null,
      utils,
    };
  },
  async mounted() {
    this.getData();
  },
  computed: {
    totalValueTVL() {
      const landingData = this.$store.state.landing;
      if (landingData && landingData.landingData) {
        return landingData.landingData.formattedTvl;
      }
      return null;
    },
    formattedTotalValueLocked() {
      if (!this.data) {
        return null;
      }

      return this.data.tvl.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },

    formattedTotalProfit() {
      if (!this.data) {
        return null;
      }

      return this.data.totalProfit.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },
    timeFromPayout() {
      if (!this.data) {
        return null;
      }
      const now = dayjs();
      let hours = now.diff(dayjs(this.data.lastPayoutDate), 'hours');
      let minutes = now.diff(dayjs(this.data.lastPayoutDate), 'minutes') - hours * 60;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${minutes}`;
    },
  },
  methods: {
    getData() {
      this.loading = true;
      statisticApiService
        .getMainWidgetData()
        .then((data) => {
          this.data = data;
          this.bestChainApy = data.usdPlusProduct.chain;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },

    openBestChainApy() {
      if (this.bestChainApy) {
        this.openLinkBlank(
          'https://app.overnight.fi/market/usd',
        );
      }
    },

    openLinkBlank(url) {
      window.open(url, '_blank').focus();
    },

    handleClick() {
      this.isClicked = !this.isClicked;
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },

    scrollToCharts() {
      const chartsSection = document.getElementById('tvl-charts');
      if (chartsSection) {
        chartsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.statistic-widget {
  min-height: 100px;
}

.statistic-widget__loader {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 170px;
}
.lock-icon-container, .total-locked {
  &:hover {
    .tvl-label {
      color: var(--ov-bg-secondary);
    }
  }
}

.statistic-title {
  transition: color .2s ease;
}

.card-tab {
  padding: 20px 0;
}

.apy-container {
  margin: 15px 0;
}

.card-tab .statistic-title {
  &:hover {
      color: var(--ov-bg-secondary);
  }
}

.value-container {
  cursor: pointer;

  &:hover {
    .statistic-title {
      color: var(--ov-bg-secondary);
    }
  }
}

.tvl-label {
  margin: 0 8px;
  transition: color .2s ease;
}

/* mobile */
@media only screen and (max-width: 768px) {
  .statistic-widget {
    width: 90vw;
  }

  .statistic-title {
    font-family: "Red Hat Display", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: var(--ov-primary);
  }

  .statistic-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;

    color: #687386;
  }

  .tvl-label {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #687386;
    cursor: pointer;
  }
  .tvl-label-investors {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #687386;
    margin-right: 10px;
  }

  .statistic-subtitle-last {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 8px;
    color: #687386;
  }

  .card-round {
    border-radius: 15px !important;
  }

  .card {
    background: var(--ov-white);
    border: 1px solid var(--ov-primary);
    border-bottom-width: 2px;
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .card-tab {
    background: var(--ov-white);
    border: 0 solid var(--ov-primary);
    border-bottom-width: 1px;

    border-radius: 15px 15px 4px 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 5px;
    margin-top: 5px;
  }

  .apy-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 3px;
  }

  .value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    padding-left: 10px;
  }

  .payout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }

  .clock-icon-container {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
  }

  .clock-icon {
    width: 10px;
    height: 10px;
  }

  .clock-container {
    display: flex;
    gap: 5px;
  }

  .arrow-icon-container {
    display: flex;
    cursor: pointer;
  }

  .arrow-icon {
    width: 8px;
    height: 13px;
  }

  .lock-icon-container {
    display: flex;
  }

  .lock-icon {
    width: 12px;
    height: 12px;
  }
}

/* desktop */
@media only screen and (min-width: 768px) {
  .statistic-widget {
    min-height: 170px;
    max-width: 568px;
    width: 100%;
  }

  .statistic-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 33px;

    color: var(--ov-primary);
  }

  .statistic-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #687386;
  }

  .tvl-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #687386;
    cursor: pointer;
  }

  .tvl-label-investors {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #687386;
    margin-right: 10px;
  }

  .statistic-subtitle-last {
    font-weight: 400;
    font-size: 12px;
    color: #687386;
  }

  .card-round {
    border-radius: 30px !important;
  }

  .card {
    background: var(--ov-white);
    border: 1px solid var(--ov-primary);
    border-bottom-width: 2px;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  .card-tab {
    background: var(--ov-white);
    border: 0 solid var(--ov-primary);
    border-bottom-width: 1px;

    border-radius: 30px 30px 12px 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .apy-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
  }

  .value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding-left: 50px;
  }

  .payout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-right: 20px;
  }

  .clock-icon-container {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
  }

  .clock-container {
    display: flex;
    gap: 5px;
  }

  .arrow-icon-container {
    display: flex;
    margin-left: 10px;
    cursor: pointer;
  }

  .lock-icon-container {
    display: flex;
  }
}

@media only screen and (min-width: 1024px) {

  .statistic-widget {
    min-height: 170px;
    max-width: 568px;
    width: 100%;
  }

  .statistic-title {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;

    color: var(--ov-primary);
  }

  .statistic-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #687386;
  }

  .tvl-label {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #687386;
    cursor: pointer;
  }

  .tvl-label-investors {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #687386;
    margin-right: 10px;
  }

  .statistic-subtitle-last {
    font-weight: 400;
    font-size: 12px;
    color: #687386;
  }

}
@media (min-width: 1300px) {
  .statistic-widget {
    min-height: 170px;
    max-width: 568px;
    width: 100%;
  }

  .statistic-title {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;

    color: var(--ov-primary);
  }

  .statistic-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #687386;
  }

  .tvl-label {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #687386;
    cursor: pointer;
  }

  .tvl-label-investors {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #687386;
    margin-right: 10px;
  }

  .statistic-subtitle-last {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #687386;
  }

  .card-round {
    border-radius: 30px !important;
  }

  .card {
    background: var(--ov-white);
    border: 1px solid var(--ov-primary);
    border-bottom-width: 2px;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  .card-tab {
    background: var(--ov-white);
    border: 0 solid var(--ov-primary);
    border-bottom-width: 1px;

    border-radius: 30px 30px 12px 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .apy-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .payout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .clock-icon-container {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
  }

  .clock-container {
    display: flex;
    gap: 5px;
  }

  .arrow-icon-container {
    display: flex;
    margin-left: 10px;
    cursor: pointer;
  }

  .lock-icon-container {
    display: flex;
  }
}

.tvl-text-container {
  display: flex;
  gap: 10px;
}

.widget-container {
  display: flex;
  flex-direction: column;
}

</style>
