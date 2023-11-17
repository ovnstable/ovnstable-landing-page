<template>
  <div class="roadmap">
    <img
      class="roadmap__img"
      :src="require(isMobile ? '@/assets/roadmap-mobile.svg' : '@/assets/roadmap.svg')"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OvernightRoadmapComponent',
  computed: {
    ...mapState('device', ['isMobile']),
  },
};
</script>

<style scoped>
.roadmap {
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
}

.roadmap__img {
  width: 100%;
  height: 100%;
}
</style>
