<template>
  <div>
    <div class="main-container main-container-blue">
      <MainBanner />
    </div>
    <div class="main-container">
      <AboutOvernight />
      <KeyFeatures />
      <TotalValueLockedContainer />
    </div>
    <div class="main-container main-container-white">
      <OvernightRoadmap />
    </div>
    <div class="main-container">
      <Audits />
      <Blog />
      <Team />
      <Investors />
    </div>
  </div>
</template>

<script>
import MainBanner from '@/components/MainBanner/index.vue';
import AboutOvernight from '@/components/About/index.vue';
import KeyFeatures from '@/components/KeyFeatures/index.vue';
import TotalValueLockedContainer from '@/components/TotalValueLockedContainer/index.vue';
import OvernightRoadmap from '@/components/Roadmap/index.vue';
import Audits from '@/components/Audits/index.vue';
import Blog from '@/components/Blog/index.vue';
import Team from '@/components/Team/index.vue';
import Investors from '@/components/Investors/index.vue';

export default {
  name: 'Container',
  components: {
    MainBanner,
    AboutOvernight,
    KeyFeatures,
    TotalValueLockedContainer,
    OvernightRoadmap,
    Audits,
    Blog,
    Team,
    Investors,
  },
};
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
  .main-container-white {
    height: 311px;
    margin-bottom: 30px;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .main-container-white {
    background-color: #ffffff;
    border-top: 1px solid #0f172a;
    border-bottom: 1px solid #0f172a;
    height: 620px;

    max-width: 100%;
    margin-bottom: 100px;
  }
}
</style>
