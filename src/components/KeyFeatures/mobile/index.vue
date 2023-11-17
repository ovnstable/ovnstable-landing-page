<template>
  <div class="feature-mobile">
    <Item
      v-for="(data, key) in features"
      :key="key"
      :isExpanded="features.length - 1 === key ? true : false"
      :content="data.content"
      :title="data.title"
      :img="data.img"
    />
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'MobileFeatures',
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  components: {
    Item,
  },
};
</script>

<style>
.feature-mobile {
  margin-top: 60px;
}
</style>
