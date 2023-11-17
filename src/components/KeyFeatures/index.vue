<template>
  <div class="key-features">
    <div class="title">Key Features</div>
    <KeyFeaturesDesktop v-if="isDesktop" :features="features" />
    <KeyFeaturesMobile v-else :features="features" />
  </div>
</template>

<!-- eslint-disable global-require -->
<script>
import KeyFeaturesDesktop from '@/components/KeyFeatures/KeyFeaturesDesktop.vue';
import KeyFeaturesMobile from '@/components/KeyFeatures/mobile/index.vue';
import { mapState } from 'vuex';

export default {
  name: 'KeyFeatures',

  components: {
    KeyFeaturesDesktop,
    KeyFeaturesMobile,
  },

  data() {
    return {
      activeTab: 0,
      features: [
        {
          title: 'Full collateralization',
          content: [
            '100% collateralized with assets immediately convertible into USDC.',
            '1:1 peg to USDC for USD+ for price stability.',
            'Profit (positive rebase) once collateral value grows above 100%, loss (negative rebase) in case collateral value below 100%.',
          ],
          img: require('@/assets/features/full_collat.svg'),
        },
        {
          title: 'Rebase',
          content: [
            'Generate passive yield effortlessly by simply holding your Token+ in your wallet.',
            'Profit payouts occur through daily rebasing, providing transparent balance tracking and profit/loss visibility.',
          ],
          img: require('@/assets/features/rebase.svg'),
        },
        {
          title: 'Passive yield',
          content: [
            'Using proprietary delta-neutral and other low risk strategies to generate yield. Offer yield options tailored for varying risk appetites, 5-12% APY on Token+ and up to 25%+ APY on the insurance products.',
            'High quality protocols enabling Overnight generates real yield (sustainable yield without rewards) like Aave and Uni V3, prioritized.',
            'Yield is not guaranteed, varies daily depending on collateral performance, can be negative.',
          ],
          img: require('@/assets/features/yield.svg'),
        },
        {
          title: 'Usability',
          content: [
            'The products are highly liquid with easy minting/redemption.',
            "Swap, a feature that streamlines the process of converting various assets into Overnight's tokens with ease and efficiency.",
            'Zap In feature offers users a seamless method to invest in a variety of pools in the DeFi simultaneously saving time and effort.',
          ],
          img: require('@/assets/features/usability.svg'),
        },
        {
          title: 'Insured',
          content: [
            "Insurance serves to protect our rebase tokens (USD+, DAI+, USDT+, not the ETSes) by absorbing the first loss in case of negative rebase with the project's native OVN token.",
            'With insurance, the protocol can invest into riskier yet more profitable strategies, ultimately increasing long-term profit for users.',
          ],
          img: require('@/assets/features/insured.svg'),
        },
      ],
    };
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
    selectTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
/* Mobile styles */
@media only screen and (max-width: 768px) {
  .key-features {
    max-width: 100%;
    margin: 40px auto;
    padding: 0 20px;
  }

  .title {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .key-features {
    max-width: 1180px;
    margin: 0 auto 180px auto;
    padding: 0 15px;
  }

  .title {
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
}
</style>
