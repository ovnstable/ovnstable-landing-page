<template>
  <div class="main-container-blue">
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import FooterComponent from '@/components/footer/FooterComponent.vue';

export default {
  name: 'FooterContainer',
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
    .main-container-blue {
        border-top: 2px solid black;
        padding-top: 40px;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .main-container-blue {
        border-top: 2px solid black;
        padding-top: 100px;
    }
}
</style>
