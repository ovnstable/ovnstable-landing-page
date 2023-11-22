<template>
  <div>
    <div class="header-row">
      <ul class="ul tabs group">
        <li
          :class="{ active: activeTab === index }"
          v-for="(feature, index) in features"

          :key="`header-${index}`"
          @click="selectTab(index)"
        >
          <span>
            <div @click="selectTab(index)" class="ul__higher-block">
              {{ feature.title }}
            </div>
          </span>
        </li>
      </ul>
    </div>
    <div class="tabs-body">
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
        <img :src="feature.img" class="feature-image"/>
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

<style lang="scss" scoped>
.ul {
  width: 100%;
  display: flex;
  align-items: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.header-row {
  display: flex;
  min-height: 85px;

  border-radius: 20px 20px 0 0;
  background-color: var(--ov-bg);
  position: relative;
}

.header-left-border {
  position: absolute;
  top: 25px;
  left: 3px;
}

.feature-image {
  object-fit: contain;
}

.header-right-border {
  position: relative;
  top: 25px;
  left: -3px;
}

.arrow-right {
  position: absolute;
  right: -26px;
  bottom: -10px;
  z-index: 1;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 10px;
      left: -23px;
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      box-shadow: -2px -2px 0 #000;
      z-index: 2;
      border-top-left-radius: 40px;
      border-width: 7px 0px 0px 5px;
      transform: rotate(-90deg);
    }
}

.header {
  position: relative;
  flex-grow: 1;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  background-color: #ffffff;
  color: #848d9c;
  border: 2px solid #d1d5db;
  border-bottom: none;
  font-weight: 700;
  font-size: 16px;
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
  border-bottom: 3px solid #ffffff;
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

.tabs-body {
  width: calc(100% + 4px);
  border: 2px solid #000000;
  border-top: 0;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: 0;
  height: 225px;
}

.tab-content {
  position: relative;
  align-items: center;
  height: 100%;
  display: none;
  justify-content: space-between;
  padding: 10px 0 0 0;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: "Red Hat Display", sans-serif;

  img {
    max-height: 80%;
  }
}

.tab-content.active {
  display: flex;
}

.list-item {
  font-size: 16px;
  line-height: 30px;
  color: #0f172a;
  width: 700px;
}
.tabs {
  width: 100%;

  * {
    box-sizing: content-box;
  }
}
.tabs li {
  width: 20%;
  /* Makes a horizontal row */
  float: left;

  /* So the psueudo elements can be
     abs. positioned inside */
  position: relative;
}
.tabs span {
  /* Make them block level
     and only as wide as they need */
  float: left;
  padding: 12px 0;
  text-align: center;
  width: 100%;
  text-decoration: none;
  border: 2px solid black;
  transition: padding .3s cubic-bezier(0.65, -0.48, 0.22, 2.13),
    border-radius .2s ease, color .2s ease;

  font-size: 14px;
  /* Default colors */
  color: #848D9C;
  background: #fff;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  /* Only round the top corners */
  -webkit-border-top-right-radius: 15px;
  -moz-border-radius-topleft: 15px;
  -moz-border-radius-topright: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  &:hover {
    color: var(--ov-bg-secondary)
  }
}
.tabs .active {
  /* Highest, active tab is on top */
  z-index: 3;

  span {
    padding: 22px 0;
  }
}
.tabs .active span {
  /* Colors when tab is active */
  background: white;
  font-weight: 700;
  border: 2px solid black;
  color: #0F172A;
  border-bottom: 0;
  color: black;
  -webkit-border-top-right-radius: 30px;
  -moz-border-radius-topleft: 30px;
  -moz-border-radius-topright: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.tabs li:before, .tabs li:after,
.tabs li span:before, .tabs li span:after {
  /* All pseudo elements are
     abs. positioned and on bottom */
  position: absolute;
  bottom: 0;
}
/* Only the first, last, and active
   tabs need pseudo elements at all */
.tabs li:last-child:after,   .tabs li:last-child span:after,
.tabs li:first-child:before, .tabs li:first-child span:before,
.tabs .active:after,   .tabs .active:before,
.tabs .active span:after, .tabs .active span:before {
  content: "";
}
.tabs .active:before, .tabs .active:after {
  background: white;

  /* Squares below circles */
  z-index: 1;
}

/* Squares */
.tabs li:before, .tabs li:after {
  background: #fff;
  width: 15px;
  height: 15px;
}
.tabs li:before {
  left: -10px;
}
.tabs li:after {
  right: -16px;
}
/* Circles */
.tabs li span:after, .tabs li span:before {
  width: 30px;
  height: 30px;
  /* Circles are circular */
  -webkit-border-radius: 10px;
  -moz-border-radius:    10px;
  border-radius:         20px;
  background: var(--ov-bg);

  /* Circles over squares */
  z-index: 2;
}
.tabs .active span:after, .tabs .active span:before {
  background: #fff;
}

.tabs .active span:after {
  border: 1px solid black;
  border-width: 0 0 2px 2px;
  border-radius: 0 50% 0 50%;
}

.tabs .active span:before {
  border: 1px solid black;
  border-width: 2px 2px 0 0;
  border-radius: 0 50% 0 50%;
  transform: rotate(90deg);
}
.tabs li:first-child span:before,
.tabs li:last-child span:after {
  border-radius: 0;
}
.tabs li:last-child {
  &::after {
    display: none;
  }
  & span:after {
    right: -34px;
    border: 0;
  }
}
.tabs li:first-child {
  &::before {
    display: none;
  }
  span:before {
    left: -30px;
    border: 0;
  }
}
/* First and last tabs have different
   outside color needs */
.tabs li:first-child.active span:before,
.tabs li:last-child.active span:after {
  background: var(--ov-bg);
}
.tabs li span:before {
  left: -30px;
}
.tabs li span:after {
  right: -34px;
}

@media only screen and (min-width: 1240px) {
  .tabs span {
    font-size: 16px;
  }
}
</style>
