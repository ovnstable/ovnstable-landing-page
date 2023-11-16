<template>
  <div>
    <HeaderContainer />
    <ContentContainer />
    <FooterContainer />
  </div>
</template>

<script>
import deviceHelper from '@/mixins/device-helper';
import HeaderContainer from '@/containers/HeaderContainer.vue';
import FooterContainer from '@/containers/FooterContainer.vue';
import ContentContainer from '@/containers/ContentContainer.vue';

export default {
  name: 'App',
  mixins: [deviceHelper],
  components: {
    ContentContainer,
    HeaderContainer,
    FooterContainer,
  },
  computed: {},
};
</script>

<style lang="scss" src="./styles/general.scss"></style>
