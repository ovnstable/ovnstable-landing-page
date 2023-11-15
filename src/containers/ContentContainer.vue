<template>
  <div>
    <div class="main-container main-container-blue">
      <MainBannerComponent />
    </div>
    <div class="main-container">
      <AboutOvernightComponent />
      <KeyFeaturesComponent />
      <TotalValueLockedContainer />
    </div>
    <div class="main-container main-container-white">
      <OvernightRoadmapComponent />
    </div>
    <div class="main-container">
      <AuditsComponent />
      <BlogComponent />
      <TeamComponent />
      <InvestorsComponent />
    </div>
  </div>
</template>

<script>
import MainBannerComponent from '@/components/MainBannerComponent/index.vue';
import AboutOvernightComponent from '@/components/AboutOvernightComponent/index.vue';
import KeyFeaturesComponent from '@/components/KeyFeaturesComponent/index.vue';
import TotalValueLockedContainer from '@/components/TotalValueLockedContainer/index.vue';
import OvernightRoadmapComponent from '@/components/OvernightRoadmapComponent/index.vue';
import AuditsComponent from '@/components/AuditsComponent/index.vue';
import BlogComponent from '@/components/BlogComponent/index.vue';
import TeamComponent from '@/components/TeamComponent/index.vue';
import InvestorsComponent from '@/components/InvestorsComponent/index.vue';

export default {
  name: 'Container',
  components: {
    MainBannerComponent,
    AboutOvernightComponent,
    KeyFeaturesComponent,
    TotalValueLockedContainer,
    OvernightRoadmapComponent,
    AuditsComponent,
    BlogComponent,
    TeamComponent,
    InvestorsComponent,
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
