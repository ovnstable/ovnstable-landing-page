<template>
  <div>
    <div class="header-row">
      <div
        v-for="(feature, index) in features"
        :key="`header-${index}`"
        class="header"
        :class="{ active: activeTab === index }"
        @click="selectTab(index)"
      >
        {{ feature.title }}
      </div>
    </div>
    <div class="tabs">
      <div
        v-for="(feature, index) in features"
        :key="`tab-content-${index}`"
        class="tab-content"
        :class="{ active: activeTab === index }"
      >
        <ul>
          <li
            class="list-item"
            v-for="(item, itemIndex) in feature.content"
            :key="`item-${index}-${itemIndex}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyFeaturesDesktop',

  props: {
    features: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeTab: 0,
    };
  },

  methods: {
    selectTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
.header-row {
  display: flex;

  border-radius: 20px 20px 0 0;
  background-color: var(--ov-bg);
}

.header {
  flex-grow: 1;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  background-color: #ffffff;
  color: #848d9c;
  border: 2px solid #d1d5db;
  border-bottom: none;
  transition: all 0.3s ease;

  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 22px;
}

.header {
  border-radius: 5px 5px 0 0;
  width: 236px;
}

.header:first-child {
  border-top-left-radius: 5px;
}
.header:last-child {
  border-top-left-radius: 5px;
}

.header.active {
  color: #0f172a;
  border-color: #000000;
  border-bottom: 2px solid #ffffff;
  border-radius: 20px 20px 0 0;
  z-index: 1;
  margin-top: -10px;
  padding-top: 20px;
}

.header:first-child.active {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.header:not(.active) {
  border-bottom: 2px solid #ffffff;
  margin-top: 0;
  padding-top: 10px;
}

.tabs {
  border: 2px solid #000000;

  background-color: #ffffff;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: 0;
  height: 225px;
}

.tab-content {
  display: none;
  padding: 10px 0 0 0;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  font-family: "Red Hat Display", sans-serif;
}

.tab-content.active {
  display: block;
}

.list-item {
  font-size: 12px;
  line-height: 16px;
  color: #0f172a;
  width: 296px;
  font-weight: 400;
}
</style>
