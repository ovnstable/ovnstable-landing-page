<template>
  <div v-if="isDesktop" class="hero-container">
    <div class="hero-text-container">
      <div class="hero-title">
        <div class="left-border-div"></div>
        <div class="hero-labels">
          <span class="main-title">
            OVERNIGHT FINANCE - <br />
            Your money shouldn’t sleep <br />
          </span>
          <span class="main-sub-title">
            on-chain yield fully backed by <br />
            proprietary delta-neutral strategies
          </span>
        </div>
      </div>

      <div class="widget-container">
        <StatisticWidget />
      </div>

      <div class="button-container">
        <Button
          class="button text-styling"
          buttonHover="green"
          text="Connect"
          @click="openLinkSelf('https://app.overnight.fi/swap')"
        />
      </div>
    </div>
    <img class="hero-blended" :src="require('@/assets/main/hero.svg')" alt="hero image" />
  </div>
  <div v-else class="hero-container-mobile">
    <div class="hero-text-container-mobile">
      <div class="hero-title">
        <div class="left-border-div-mobile"></div>
        <div class="hero-labels">
          <span class="main-title-mobile">
            OVERNIGHT FINANCE - <br />
            Your money <br />
            shouldn’t sleep <br />
          </span>
          <span class="main-sub-title-mobile">
            on-chain yield fully <br />
            backed by proprietary <br />
            delta-neutral strategies
          </span>
        </div>
      </div>
      <div class="button-container">
        <Button
          class="button text-styling"
          buttonHover="green"
          text="Connect"
          @click="openLinkSelf('https://app.overnight.fi/swap')"
        />
      </div>

      <div class="widget-container-mobile">
        <StatisticWidget />
      </div>
    </div>
    <div class="hero-image">
      <img
        class="hero-blended hero-blended-mobile"
        :src="require('@/assets/main/hero.svg')"
        alt="hero image"
      />
    </div>
  </div>
</template>

<script>
import StatisticWidget from '@/components/MainBanner/StatisticWidget.vue';
import Button from '@/components/UI/Button/index.vue';
import { mapState } from 'vuex';

export default {
  name: 'MainBanner',
  components: {
    StatisticWidget,
    Button,
  },
  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),
  },

  methods: {
    openLinkBlank(url) {
      window.open(url).focus();
    },

    openLinkSelf(url) {
      window.open(url, '_self').focus();
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-text-container-mobile {
  width: 100%;
}

.hero-container-mobile {
  height: 550px;
  display: flex;
  justify-content: start;
  align-items: start;
  overflow-x: hidden;
  padding-left: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

@media only screen and (max-width: 1024px) {
  .hero-image {
    position: absolute;
    right: 0;
  }
  .hero-text-container-mobile {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .hero-title {
    max-width: 210px;
    display: flex;
  }

  .left-border-div-mobile {
    height: 140px;
    border-left: 2px solid #0f172a;

    margin-right: 20px;
    margin-top: 30px;
  }

  .hero-labels {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 30px;
  }

  .widget-container-mobile {
    margin-top: 10px;
    margin-right: 20px;
    max-width: 500px;
  }

  .hero-blended-mobile {
    width: 40vw;
    min-width: 200px;
    position: relative;
    top: 120px;
  }

  .button-container {
    margin-top: auto;
  }
}

/* desktop */
@media only screen and (min-width: 1024px) {
  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 57%;
  }

  .hero-title {
    max-width: 944px;
    display: flex;
  }

  .left-border-div {
    height: 160px;
    border-left: 2px solid #0f172a;

    margin-right: 20px;
    margin-top: 50px;
  }

  .hero-labels {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;
  }

  .widget-container {
    margin-top: 100px;
  }

  .hero-blended {
    position: absolute;
    right: -20px;
    max-height: 580px;
    width: 45vw;
    max-width: 600px;
    height: 100%;
    margin-left: 50px;
    object-fit: contain;
    image-rendering: auto;
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (min--moz-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (-o-min-device-pixel-ratio: 2/1) and (min-width: 1300px),
  only screen and (min-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (min-resolution: 192dpi) and (min-width: 1300px),
  only screen and (min-resolution: 2dppx) and (min-width: 1300px) {
  .hero-text-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .hero-title {
    max-width: 944px;
    display: flex;
  }

  .left-border-div {
    height: 160px;
    border-left: 2px solid #0f172a;

    margin-right: 20px;
    margin-top: 50px;
  }

  .hero-labels {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;
  }

  .widget-container {
    margin-top: 100px;
  }
}
.hero-container {
  position: relative;
  max-width: 1180px;
  height: 710px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

@media only screen and (max-width: 567px) {
  .hero-text-container-mobile {
    z-index: 2;

    .hero-title {
      background-color: rgba(4, 151, 236, 0.3);
      border-radius: 50px;
    }
  }
  .hero-image {
    top: 100px;
    z-index: 1;

    img {
      height: auto;
      width: 60vw;
    }
  }
}

.hero-text-container {
  padding-left: 20px;
}
</style>
