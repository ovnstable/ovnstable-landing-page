<template>
  <HeaderContent class="fixed-position"></HeaderContent>
</template>

<script>

import HeaderContent from '@/components/header/HeaderContent.vue';

export default {
  name: 'HeaderContainer',
  components: {
    HeaderContent,
  },
};
</script>

<style scoped>

.fixed-position {
    width: 100%;
    position: sticky;
    z-index: 10;
}
</style>
