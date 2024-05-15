<template>
  <div v-if="!isMobile" class="hero-container">
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
          @click="openLinkSelf('https://app.overnight.fi/')"
        />
      </div>
    </div>
    <img
      class="hero-blended"
      :src="require('@/assets/main/hero.png')"
      alt="hero image"
    />
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
          @click="openLinkSelf('https://app.overnight.fi/')"
        />
      </div>

      <div class="widget-container-mobile">
        <StatisticWidget />
      </div>
    </div>
    <div class="hero-image">
      <img
        class="hero-blended hero-blended-mobile"
        :src="require('@/assets/main/hero_mobile.png')"
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
    ]),
  },

  methods: {
    openLinkSelf(url) {
      window.open(url, '_self').focus();
    },
    openLinkBlank(url) {
      window.open(url).focus();
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

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
  .hero-image {
    position: absolute;
    right: 0;
    width: 60%;
    height: 100%;
    min-width: 230px;
    max-height: 48vh;
    z-index: 0;
  }
  .hero-text-container-mobile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 2;
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
  }

  .hero-blended-mobile {
    display: block;
    margin-left: auto;
    height: 100%;
    position: relative;
  }

  .button-container {
    margin-top: auto;
  }
}

/* desktop */
@media only screen and (min-width: 768px) {
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
    min-height: 170px;
  }
  .hero-blended {
    position: absolute;
    right: -40px;
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
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-container-mobile {
  height: 60vh;
  padding-bottom: 15px;

  display: flex;
  justify-content: start;
  align-items: start;
  overflow-x: hidden;
  padding-left: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
