<template>
  <div class="feature-mobile">
    <Item
      v-for="(data, key) in features"
      @changeTab="changeTab"
      :key="key"
      :index="key"
      :expandedTab="expandedTab"
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

  data() {
    return {
      expandedTab: 4,
    };
  },

  props: {
    features: {
      type: Array,
      required: true,
    },
  },

  methods: {
    changeTab(tab) {
      if (this.expandedTab === tab) return;
      this.expandedTab = tab;
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
  min-height: 500px;
}
</style>
