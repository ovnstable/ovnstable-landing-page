<template>
  <div class="cards-mobile-container">
    <div class="main-sub-title">
      {{ stepLabel }}
    </div>
    <div class="step-card-box">
      <img
        class="image"
        :src="require('@/assets/cards/' + imageLink)"
        alt="About products image"
      />
    </div>
    <div class="titles">
      <div class="sub-title">
        {{ legendTitle }}
      </div>
      <div class="paragraph">
        {{ subTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCards',

  props: {
    stepLabel: {
      type: String,
      default: '',
    },

    imageLink: {
      type: String,
      default: null,
    },

    legendTitle: {
      type: String,
      default: '',
    },

    subTitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
  .cards-mobile-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 30px;

    padding-top: 5px;
  }

  .main-sub-title {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-transform: none;
    display: flex;
    align-items: center;
  }

  .step-card-box {
    height: 100%;
    width: 100%;
    max-height: 150px;
    max-width: 150px;
    border: 1px solid #0f172a;
    border-bottom: 2px solid #0f172a;
    border-radius: 5px;
    background-color: white;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 117px;
  }

  .sub-title {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
  }

  .paragraph {
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-align: center;
    max-width: 116px;
  }
}
</style>
