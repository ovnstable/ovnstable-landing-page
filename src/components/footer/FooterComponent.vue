<template>
  <div class="footer-container">
    <div class="first-column">
      <div class="quote-container">
        <div class="border-div"></div>
        <div class="titles-container">
          <div class="title">
            Your money shouldn't sleep
          </div>
          <div class="sub-title">
            Maximize Your Returns, Minimize Your Risks - Overnight's Delta-Neutral Yield Strategies for Stablecoins
          </div>
        </div>
      </div>
      <div class="logo-rights-container">
        <div class="footer-logo-container">
          <img
            class="ovn-logo"
            :src="require('@/assets/footer_logo.svg')"
            alt="Footer Overnight Logo"
          >
        </div>
        <div class="rights-container">
          Since 2022 © All Rights Reserved
        </div>
      </div>
    </div>
    <div class="second-column">
      <div class="heading-container">
        Find us
      </div>
      <div
        class="logo-container"
        @click="openLinkBlank('https://twitter.com/overnight_fi')"
        @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/overnight_fi')"
      >
        <img
          class="logo-icon"
          :src="require('@/assets/footer/twitter_white.svg')"
          alt="Twitter White Logo"
        >
        <label class="logo-title">
          Twitter
        </label>
      </div>
      <div
        class="logo-container"
        @click="openLinkBlank('https://discord.com/invite/overnight-fi')"
        @mouseup.middle="handleMiddleClick($event, 'https://discord.com/invite/overnight-fi')"
      >
        <img
          class="logo-icon"
          :src="require('@/assets/footer/discord_white.svg')"
          alt="Discord White Logo"
        >
        <label class="logo-title">
          Discord
        </label>
      </div>
      <div
        class="logo-container"
        @click="openLinkBlank('https://t.me/overnight_fi')"
        @mouseup.middle="handleMiddleClick($event, 'https://t.me/overnight_fi')"
      >
        <img
          class="logo-icon"
          :src="require('@/assets/footer/telegram_white.svg')"
          alt="Telegram White Logo"
        >
        <label class="logo-title">
          Telegram
        </label>
      </div>
      <div
        class="logo-container"
        @click="openLinkBlank('https://zealy.io/c/overnight-fi/questboard')"
        @mouseup.middle="handleMiddleClick($event, 'https://zealy.io/c/overnight-fi/questboard')"
      >
        <img
          class="logo-icon"
          :src="require('@/assets/footer/zealy_white.svg')"
          alt="Zealy White Logo"
        >
        <label class="logo-title">
          Zealy
        </label>
      </div>
      <div
        class="logo-container"
        @click="openLinkBlank('https://github.com/ovnstable')"
        @mouseup.middle="handleMiddleClick($event, 'https://github.com/ovnstable')"
      >
        <img
          class="logo-icon"
          :src="require('@/assets/footer/github_white.svg')"
          alt="Github White Logo"
        >
        <label class="logo-title">
          Github
        </label>
      </div>
    </div>
    <div class="third-column">
      <div
        class="listings-container"
        @click="openLinkBlank('https://defillama.com/protocol/overnight-finance')"
        @mouseup.middle="handleMiddleClick($event, 'https://defillama.com/protocol/overnight-finance')"
      >
        <label class="logo-title">
          DefiLlama
        </label>
      </div>
      <div
        class="listings-container"
        @click="openLinkBlank('https://coinmarketcap.com/currencies/overnight/')"
        @mouseup.middle="handleMiddleClick($event, 'https://coinmarketcap.com/currencies/overnight/')"
      >
        <label class="logo-title">
          Coinmarketcap
        </label>
      </div>
      <div
        class="listings-container"
        @click="openLinkBlank('https://app.1inch.io/#/1/simple/swap/ETH')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.1inch.io/#/1/simple/swap/ETH')"
      >
        <label class="logo-title">
          1inch
        </label>
      </div>
      <div
        class="listings-container"
        @click="openLinkBlank('https://www.coingecko.com/en/coins/overnight-finance')"
        @mouseup.middle="handleMiddleClick($event, 'https://www.coingecko.com/en/coins/overnight-finance')"
      >
        <label class="logo-title">
          Coingecko
        </label>
      </div>
      <div
        class="listings-container"
        @click="openLinkBlank('https://debank.com/')"
        @mouseup.middle="handleMiddleClick($event, 'https://debank.com/')"
      >
        <label class="logo-title">
          Debank
        </label>
      </div>
    </div>
    <div class="fourth-column">
      <div class="heading-container products">
        Products
      </div>
      <div
        class="products-container"
        @click="openLinkBlank('https://app.overnight.fi/stats/eth?tabName=arbitrum')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.overnight.fi/stats/eth?tabName=arbitrum')"
      >
        <label class="logo-title">
          ETH+
        </label>
      </div>
      <div
        class="products-container"
        @click="openLinkBlank('https://app.overnight.fi/stats?tabName=optimism')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.overnight.fi/stats?tabName=optimism')"
      >
        <label class="logo-title">
          USD+
        </label>
      </div>
      <div
        class="products-container"
        @click="openLinkBlank('https://app.overnight.fi/stats/usdt?tabName=bsc')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.overnight.fi/stats/usdt?tabName=bsc')"
      >
        <label class="logo-title">
          USDT+
        </label>
      </div>
      <div
        class="products-container"
        @click="openLinkBlank('https://app.overnight.fi/stats/dai?tabName=optimism')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.overnight.fi/stats/dai?tabName=optimism')"
      >
        <label class="logo-title">
          DAI+
        </label>
      </div>
      <div
        class="products-container insurance"
        @click="openLinkBlank('https://app.overnight.fi/insurance')"
        @mouseup.middle="handleMiddleClick($event, 'https://app.overnight.fi/insurance')"
      >
        <label class="logo-title">
          Insurance
        </label>
      </div>
    </div>
    <div
      v-if="isDesktop"
      class="fifth-column"
    >
      <div class="heading-container">
        Developers
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://docs.overnight.fi/')"
        @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/')"
      >
        <label class="logo-title">
          Documentation
        </label>
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://docs.overnight.fi/other/audits')"
        @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/audits')"
      >
        <label class="logo-title">
          Audits
        </label>
      </div>
      <div class="heading-container support">
        Support center
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://discord.com/channels/933003627444969552/967813123149033542/967813482684760135')"
        @mouseup.middle="handleMiddleClick($event, 'https://discord.com/channels/933003627444969552/967813123149033542/967813482684760135')"
      >
        <label class="logo-title">
          Help center in Discord
        </label>
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://t.me/overnight_fi')"
        @mouseup.middle="handleMiddleClick($event, 'https://t.me/overnight_fi')"
      >
        <label class="logo-title">
          Telegram Discussion
        </label>
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://docs.overnight.fi/other/terms-of-service')"
        @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/terms-of-service')"
      >
        <label class="logo-title">
          Terms of Service
        </label>
      </div>
      <div
        class="developers-container"
        @click="openLinkBlank('https://docs.overnight.fi/other/privacy-policy')"
        @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/privacy-policy')"
      >
        <label class="logo-title">
          Privacy Policy
        </label>
      </div>
    </div>
    <div v-else>
      <div class="fifth-column-mobile">
        <div class="heading-container support">
          Support center
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://discord.com/channels/933003627444969552/967813123149033542/967813482684760135')"
          @mouseup.middle="handleMiddleClick($event, 'https://discord.com/channels/933003627444969552/967813123149033542/967813482684760135')"
        >
          <label class="logo-title">
            Help center in Discord
          </label>
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://t.me/overnight_fi')"
          @mouseup.middle="handleMiddleClick($event, 'https://t.me/overnight_fi')"
        >
          <label class="logo-title">
            Telegram Discussion
          </label>
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://docs.overnight.fi/other/terms-of-service')"
          @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/terms-of-service')"
        >
          <label class="logo-title">
            Terms of Service
          </label>
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://docs.overnight.fi/other/privacy-policy')"
          @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/privacy-policy')"
        >
          <label class="logo-title">
            Privacy Policy
          </label>
        </div>
      </div>
      <div class="sixth-column-mobile">
        <div class="heading-container developers">
          Developers
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://docs.overnight.fi/')"
          @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/')"
        >
          <label class="logo-title">
            Documentation
          </label>
        </div>
        <div
          class="developers-container"
          @click="openLinkBlank('https://docs.overnight.fi/other/audits')"
          @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/audits')"
        >
          <label class="logo-title">
            Audits
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FooterComponent',

  computed: {
    ...mapState('device', ['deviceType', 'deviceOrientation', 'isMobile', 'isTablet', 'isDesktop']),
  },

  methods: {
    openLinkBlank(url) {
      window.open(url, '_blank').focus();
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
    .footer-container {
        max-width: 1180px;
        padding-left: 20px;
        position: relative;
    }

    .first-column {
        display: flex;
        flex-direction: column;
    }

    .quote-container {
        display: flex;
        gap: 20px;
    }

    .border-div {
        border-left: 2px solid #0F172A;
        height: 120px;
    }

    .titles-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 350px;
    }

    .title {
        width: 200px;
        text-transform: uppercase;
        font-family: "Red Hat Display", sans-serif;
        font-size: 16px;
        line-height: 20px;
    }

    .sub-title {
        width: 200px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        margin-top: 10px;
    }

    .ovn-logo {
        height: 22px;
    }

    .rights-container {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;
        margin-top: 10px;
    }

    .heading-container {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
        text-transform: uppercase;

        margin-bottom: 30px;
    }

    .logo-container {
        cursor: pointer;
        display: flex;
        gap: 20px;
        margin-bottom: 10px;
        align-items: center;
        justify-content: flex-start;
    }

    .logo-icon {
        height: 9px;
        width: auto;
    }

    .logo-title {
        font-family: "Red Hat Display",sans-serif;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;

        color: #FFFFFF;
        cursor: pointer;
    }

    .second-column {
        position: absolute;
        top: 145px;
        left: 40px;
    }

    .third-column {
        position: absolute;
        top: 184px;
        left: 155px;
    }

    .listings-container {
        margin-bottom: 1px;
    }

    .products {
        margin-bottom: 23px;
    }

    .products-container {
        margin-bottom: 1px;
    }

    .fourth-column {
        position: absolute;
        top: 145px;
        left: 270px;
    }

    .footer-container {
        max-width: 1180px;
        height: 550px;
    }

    .fifth-column-mobile {
        position: absolute;
        top: 320px;
        left: 40px;
    }

    .sixth-column-mobile {
        position: absolute;
        top: 320px;
        left: 270px;
    }

    .support {
        margin-bottom: 15px;
    }

    .developers {
        margin-bottom: 15px;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .first-column {
        display: flex;
        flex-direction: column;
    }

    .quote-container {
        display: flex;
        gap: 20px;
    }

    .border-div {
        border-left: 2px solid #0F172A;
        height: 159px;
    }

    .titles-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }

    .title {
        width: 268px;
        text-transform: uppercase;
        font-family: "Red Hat Display", sans-serif;
        margin-bottom: 20px;
    }

    .sub-title {
        width: 300px;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    .rights-container {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-top: 10px;
    }

    .heading-container {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 15px;
        text-transform: uppercase;

        margin-bottom: 30px;
    }

    .logo-container {
        cursor: pointer;
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
    }

    .logo-title {
        font-family: "Red Hat Display",sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        color: #FFFFFF;
        cursor: pointer;
    }

    .second-column {
        margin-left: 40px;
    }

    .third-column {
        margin-top: 44px;
        margin-left: 40px;
    }

    .listings-container {
        margin-bottom: 4px;
    }

    .products-container {
        margin-bottom: 5px;
    }

    .fourth-column {
        margin-left: 40px;
    }

    .insurance {
        margin-top: 30px;
    }

    .fifth-column {
        margin-left: 20px;
    }

    .developers-container {
        margin-bottom: 5px;
    }

    .support {
        margin-top: 30px;
    }

    .footer-container {
        max-width: 1180px;
        margin: 0 auto;
        height: 356px;
        display: flex;
        gap: 50px;
    }
}
</style>
