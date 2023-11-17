<template>
  <div>
    <div class="investors-container">
      <div class="title">Our valued investors</div>
      <div class="companies-container">
        <a
          class="investor-name"
          href="https://twitter.com/sandeepnailwal"
          target="_blank"
        >
          Sandeep Naiwal
        </a>
        <a class="investor-name" href="https://twitter.com/twobitidiot" target="_blank">
          Ryan Selkis
        </a>
        <a class="investor-company hack" href="https://hack.vc/" target="_blank">
          <img :src="require('@/assets/investors/hack-vc.svg')" alt="Hack VC logo" />
        </a>
        <a class="investor-company labs" href="https://www.fjlabs.com/" target="_blank">
          <img :src="require('@/assets/investors/fj-labs.svg')" alt="FJ Labs logo" />
        </a>
        <a class="investor-name" href="https://twitter.com/tubergen" target="_blank">
          Brian Tubergen
        </a>
        <a class="investor-name" href="https://twitter.com/paulrholland" target="_blank">
          Paul Holland
        </a>
      </div>
    </div>

    <div v-if="isDesktop" class="scroll-top-container" @click="scrollToTop">
      <img
        class="arrow-icon"
        :src="require('@/assets/scroll-top-arrow.png')"
        alt="Scroll back icon"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'InvestorsComponent',

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
      window.open(url, '_blank').focus();
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* Mobile styles */
@media only screen and (max-width: 768px) {
  .title {
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 20px;
    padding-left: 20px;
  }

  .companies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 7px;
  }

  .investor-name,
  .investor-company {
    flex: 0 0 calc(33.33% - 10px);
    text-align: center;
    margin-bottom: 10px;
  }

  .investor-name {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: #687386;
  }

  .investor-company img {
    max-width: 100%;
    height: 15px;
  }

  .labs {
    height: 11px;
  }

  .hack {
    height: 15px;
  }

  .investors-container {
    margin: 0 auto 40px auto;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .title {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .companies-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .investor-name {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    color: #687386;
    cursor: pointer;
  }

  .investor-company {
    cursor: pointer;
    height: 38px;
  }

  .labs {
    height: 22px;
  }

  .investors-container {
    margin: 0 auto 100px auto;
    padding: 0 20px;
  }

  .arrow-icon {
    height: 50px;
    width: 50px;
  }
}

.investor-name,
.investor-company {
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.investors-container {
  max-width: 1180px;
}

.scroll-top-container {
  max-width: 1180px;
  margin: 0 auto 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  img {
    border-radius: 50%;
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    img {
      box-shadow: 0 0 0 1px rgba(4, 151, 236, 0.8);
    }
  }
}

@media only screen and (max-width: 1024px) {
  .companies-container {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .investor-name,
  .investor-company {
    width: 25%;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
