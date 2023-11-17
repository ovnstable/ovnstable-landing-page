<template>
  <div>
    <div class="main-container main-container-blue main-container-blue--header">
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
