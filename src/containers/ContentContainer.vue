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
import MainBannerComponent from '@/components/content/MainBannerComponent.vue';
import AboutOvernightComponent from '@/components/content/AboutOvernightComponent.vue';
import KeyFeaturesComponent from '@/components/content/KeyFeaturesComponent.vue';
import TotalValueLockedContainer from '@/components/content/TotalValueLockedContainer.vue';
import OvernightRoadmapComponent from '@/components/content/OvernightRoadmapComponent.vue';
import AuditsComponent from '@/components/content/AuditsComponent.vue';
import BlogComponent from '@/components/content/BlogComponent.vue';
import TeamComponent from '@/components/content/TeamComponent.vue';
import InvestorsComponent from '@/components/content/InvestorsComponent.vue';

export default {
  name: 'ContentContainer',
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
