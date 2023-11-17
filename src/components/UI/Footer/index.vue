<template>
  <div class="footer-container">
    <div class="first-column">
      <div class="quote-container">
        <div class="border-div"></div>
        <div class="titles-container">
          <div class="title">Your money shouldn't sleep</div>
          <div class="sub-title">
            Maximize Your Returns, Minimize Your Risks - Overnight's Delta-Neutral Yield
            Strategies for Stablecoins
          </div>
        </div>
      </div>
      <div class="logo-rights-container">
        <div class="footer-logo-container">
          <img
            class="ovn-logo"
            :src="require('@/assets/footer_logo.svg')"
            alt="Footer Overnight Logo"
          />
        </div>
        <div class="rights-container">Since 2021 © All Rights Reserved</div>
      </div>
    </div>
    <div class="second-column">
      <div class="heading-container">Find us</div>
      <div class="second-column__inner-wrap">
        <div class="second-column__inner">
          <a
            class="logo-container"
            href="https://twitter.com/overnight_fi"
            target="_blank"
          >
            <img
              class="logo-icon"
              :src="require('@/assets/footer/twitter_white.svg')"
              alt="Twitter White Logo"
            />
            <label class="logo-title"> Twitter </label>
          </a>
          <a
            class="logo-container"
            href="https://discord.com/invite/overnight-fi"
            target="_blank"
          >
            <img
              class="logo-icon"
              :src="require('@/assets/footer/discord_white.svg')"
              alt="Discord White Logo"
            />
            <label class="logo-title"> Discord </label>
          </a>
          <a
            class="logo-container"
            href="https://t.me/overnight_fi"
            target="_blank"
          >
            <img
              class="logo-icon"
              :src="require('@/assets/footer/telegram_white.svg')"
              alt="Telegram White Logo"
            />
            <label class="logo-title"> Telegram </label>
          </a>
          <a
            class="logo-container"
            href="https://zealy.io/c/overnight-fi/questboard"
            target="_blank"
          >
            <img
              class="logo-icon"
              :src="require('@/assets/footer/zealy_white.svg')"
              alt="Zealy White Logo"
            />
            <label class="logo-title"> Zealy </label>
          </a>
          <a
            class="logo-container"
            href="https://github.com/ovnstable"
            target="_blank"
          >
            <img
              class="logo-icon"
              :src="require('@/assets/footer/github_white.svg')"
              alt="Github White Logo"
            />
            <label class="logo-title"> Github </label>
          </a>
        </div>
        <div class="second-column__inner">
          <a
            class="listings-container"
            href="https://defillama.com/protocol/overnight-finance"
            target="_blank"
          >
            <label class="logo-title"> DefiLlama </label>
          </a>
          <a
            class="listings-container"
            href="https://coinmarketcap.com/currencies/overnight/"
            target="_blank"
          >
            <label class="logo-title"> Coinmarketcap </label>
          </a>
          <a
            class="listings-container"
            href="https://app.1inch.io/#/1/simple/swap/ETH"
            target="_blank"
          >
            <label class="logo-title"> 1inch </label>
          </a>
          <a
            class="listings-container"
            href="https://www.coingecko.com/en/coins/overnight-finance"
            target="_blank"
          >
            <label class="logo-title"> Coingecko </label>
          </a>
          <a
            class="listings-container"
            href="https://debank.com/"
            target="_blank"
          >
            <label class="logo-title"> Debank </label>
          </a>
        </div>
      </div>
    </div>
    <div class="third-column">
      <div class="heading-container products">Products</div>
      <a
        class="products-container"
        href="https://app.overnight.fi/stats/eth?tabName=arbitrum"
        target="_blank"
      >
        <label class="logo-title"> ETH+ </label>
      </a>
      <a
        class="products-container"
        href="https://app.overnight.fi/stats?tabName=optimism"
        target="_blank"
      >
        <label class="logo-title"> USD+ </label>
      </a>
      <a
        class="products-container"
        href="https://app.overnight.fi/stats/usdt?tabName=bsc"
        target="_blank"
      >
        <label class="logo-title"> USDT+ </label>
      </a>
      <a
        class="products-container"
        href="https://app.overnight.fi/stats/dai?tabName=optimism"
        target="_blank"
      >
        <label class="logo-title"> DAI+ </label>
      </a>
      <a
        class="products-container insurance"
        href="https://app.overnight.fi/insurance"
        target="_blank"
      >
        <label class="logo-title"> Insurance </label>
      </a>
    </div>
    <div class="fourth-column">
      <div class="fourth-column__inner">
        <div class="heading-container">Developers</div>
        <a
          class="developers-container"
          href="https://docs.overnight.fi/"
          target="_blank"
        >
          <label class="logo-title"> Documentation </label>
        </a>
        <a
          class="developers-container"
          href="https://docs.overnight.fi/other/audits"
          target="_blank"
        >
          <label class="logo-title"> Audits </label>
        </a>
      </div>
      <div class="fourth-column__inner">
        <div class="heading-container support">Support center</div>
        <a
          class="developers-container"
          href="https://discord.com/channels/933003627444969552/967813123149033542/967813482684760135"
          target="_blank"
        >
          <label class="logo-title"> Help center in Discord </label>
        </a>
        <a
          class="developers-container"
          href="https://t.me/overnight_fi"
          target="_blank"
        >
          <label class="logo-title"> Telegram Discussion </label>
        </a>
        <a
          class="developers-container"
          href="https://docs.overnight.fi/other/terms-of-service"
          target="_blank"
        >
          <label class="logo-title"> Terms of Service </label>
        </a>
        <a
          class="developers-container"
          href="https://docs.overnight.fi/other/privacy-policy"
          target="_blank"
        >
          <label class="logo-title"> Privacy Policy </label>
        </a>
      </div>
    </div>

    <div class="logo-rights-container mobile">
      <div class="footer-logo-container">
        <img
          class="ovn-logo"
          :src="require('@/assets/footer_logo.svg')"
          alt="Footer Overnight Logo"
        />
      </div>
      <div class="rights-container">Since 2021 © All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FooterComponent',

  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
    ]),
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

<style lang="scss" scoped>
.logo-container {
  img {
    width: 17px;
    height: 17px;
  }
}
.footer-container {
  justify-content: space-between;
  padding: 80px 15px;
}

.second-column {
  display: flex;
  flex-direction: column;
}

.second-column__inner-wrap {
  display: flex;
  gap: 30px;
}

.logo-rights-container.mobile {
  display: none;
}

.heading-container {
  white-space: nowrap;
}

@media only screen and (max-width: 1024px) {
  .first-column {
    display: flex;
    margin-bottom: 20px;
    width: 50%;
  }

  .second-column {
    width: 25%;
  }

  .third-column {
    width: 25%;
  }

  .fourth-column {
    display: flex;
    gap: 100px;
    width: 20%;
    margin-top: 40px;
  }

  .fifth-column {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 33%;
    margin-top: 40px;
  }

  .quote-container {
    display: flex;
    gap: 20px;
  }

  .border-div {
    border-left: 2px solid #0f172a;
    height: 120px;
  }

  .titles-container {
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 200px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 20px;
  }

  .sub-title {
    width: 200px;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    margin-top: 10px;
  }

  .ovn-logo {
    height: 22px;
  }

  .rights-container {
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    margin-top: 10px;
  }

  .heading-container {
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    text-transform: uppercase;

    margin-bottom: 10px;
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
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;

    color: #ffffff;
    cursor: pointer;
  }

  .listings-container {
    margin-bottom: 1px;
  }

  .products-container {
    margin-bottom: 1px;
  }

  .footer-container {
    display: flex;
    justify-content: flex-start;
    max-width: 1180px;
    flex-wrap: wrap;
  }

  .developers {
    margin-bottom: 15px;
  }
}

/* desktop */
@media only screen and (min-width: 1024px) {

  .first-column {
    display: flex;
    flex-direction: column;
  }

  .quote-container {
    display: flex;
    gap: 20px;
  }

  .border-div {
    border-left: 2px solid #0f172a;
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
    margin-bottom: 20px;
  }

  .sub-title {
    width: 300px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  .rights-container {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 10px;
  }

  .heading-container {
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
    margin-bottom: 8px;
  }

  .logo-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #ffffff;
    cursor: pointer;
  }

  .listings-container {
    margin-bottom: 7px;
  }

  .products-container {
    margin-bottom: 8px;
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
    margin-bottom: 8px;
  }

  .support {
    margin-top: 30px;
  }

  .footer-container {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
  }
}

@media only screen and (max-width: 768px) {
  .logo-rights-container {
    display: none;
  }

  .logo-rights-container.mobile {
    display: block;
    margin-top: 40px;
    margin-right: auto;
  }

  .footer-container {
    justify-content: center;
  }

  .first-column {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 40px;
    width: 100%;
  }

  .second-column {
    width: 70%;
  }

  .third-column {
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  .fourth-column {
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 0;
  }

  .fourth-column__inner:first-child {
    width: 30%;
  }

  .fourth-column__inner:last-child {
    width: 70%;
  }
}

@media only screen and (max-width: 568px) {
  .first-column {
    justify-content: space-between;
  }

  .second-column {
    align-items: flex-start;
  }

  .heading-container {
    text-wrap: unset;
  }
  .second-column__inner-wrap {
    gap: 10px;
  }
}

a {
  display: block;
}

.logo-title {
  transition: color .15s ease;
  &:hover {
    color: rgba(255, 255, 255, .8);
  }
}
</style>
