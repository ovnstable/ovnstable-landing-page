<template>
  <div class="tab">
    <div @click="expanded = !expanded" class="tab__header">
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
    content: {
      type: Array,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      activeTab: 0,
      expanded: this.isExpanded,
    };
  },

  computed: {
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
    selectTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
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
  padding-bottom: 25px;
  cursor: pointer;
  margin-top: -35px;
  transition: color .2s ease;

  &:hover {
    color: var(--ov-bg-secondary);
  }
}

.tab__content {
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
  transition: all .2s ease;
}

.list-item {
  font-size: 12px;
  line-height: 16px;
  color: #0f172a;
  font-weight: 400;
}
</style>
