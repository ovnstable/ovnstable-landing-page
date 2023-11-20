<template>
  <div
    class="tab"
    :class="{ active: expanded }"
  >
    <div
      @click="changeTab"
      class="tab__header"
      :class="{ rounded: roundedHeader }"
    >
      {{ title }}
    </div>

    <div :style="contentStyle" class="tab__content">
      <ul :style="infoStyle" class="tab__info">
        <li
          class="list-item"
          v-for="(item, itemIndex) in content"
          :key="`item-${itemIndex}`"
        >
          {{ item }}
        </li>
      </ul>
      <img :src="img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyFeaturesDesktop',

  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    expandedTab: {
      type: Number,
      required: true,
    },
  },

  computed: {
    roundedHeader() {
      return this.expandedTab < this.index;
    },
    expanded() {
      return this.expandedTab === this.index;
    },
    // straight() {
    //   return this.index === 4;
    // },

    contentStyle() {
      return {
        'max-height': this.expanded ? '400px' : 0,
        visibility: this.expanded ? 'visible' : 'hidden',
        zIndex: this.expanded ? '1' : '-1',
      };
    },

    infoStyle() {
      return { opacity: this.expanded ? 1 : 0 };
    },
  },

  methods: {
    changeTab() {
      this.$emit('changeTab', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  &.active {
    margin-bottom: -15px;
  }
  &:last-child {
    .tab__header {
      padding-bottom: 15px;
    }
  }
}
.tab__header {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 5px 10px;
  text-align: center;
  border: 2px solid black;
  border-radius: 20px 20px 0 0;
  padding-top: 15px;
  padding-bottom: 35px;
  cursor: pointer;
  margin-bottom: -42px;
  transition: color .2s ease;

  &.rounded {
    border-radius: 0 0 5px 5px;
  }

  // &.rounded.last {
  //   border-radius: 0 0 5px 5px;
  // }

  .tab.active & {
    border-bottom: 0;
  }

  &:hover {
    color: var(--ov-bg-secondary);
  }
}

.tab__content {
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #000000;
  border-top: 0;
  background-color: #ffffff;
  border-radius: 0 0 20px 20px;
  padding-top: 20px;
  position: relative;
  z-index: 0;
  height: 100%;
  padding-right: 20px;
  // transition: all .1s ease;

  img {
    width: 50%;
    min-width: 150px;
    max-height: 200px;
    height: 100%;
    margin: 30px auto;
    object-fit: contain;
  }
}

.list-item {
  font-size: 12px;
  line-height: 16px;
  color: #0f172a;
  font-weight: 400;
}
</style>
