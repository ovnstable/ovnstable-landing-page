<template>
  <div>
    <HeaderContainer></HeaderContainer>
    <ContentContainer></ContentContainer>
    <FooterContainer></FooterContainer>
  </div>
</template>

<script>
import { deviceHelper } from '@/mixins/device-helper';
import HeaderContainer from '@/containers/HeaderContainer.vue';
import FooterContainer from '@/containers/FooterContainer.vue';
import ContentContainer from '@/containers/ContentContainer.vue';

export default {
  name: 'App',
  mixins: [
    deviceHelper,
  ],
  components: {
    ContentContainer,
    FooterContainer,
    HeaderContainer,
  },
  computed: {

  },
};
</script>

<style>

</style>
