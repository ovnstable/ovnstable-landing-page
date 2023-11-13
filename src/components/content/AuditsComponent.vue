<template>
  <div class="audits-container">
    <div class="title">
      Audits
      <img
        class="clear-icon"
        :src="require('@/assets/icons/done.svg')"
        alt="Clear icon"
      >
    </div>
    <div class="paragraph-text">
      <span class="paragraph-text">
        We are committedto the highest quality of engineering and will use whatever
        tools are needed to produce a product exceptional in performance and safety.
        Every year we audit our products.
      </span>
      <br>
      <br>
      <span class="paragraph-text">
        Our protocols, USD+ and ETS have been audited by the world's
        leading blockchain security firms Ackee Blockchain in 2023 and Hacken.io in
        2022 respectively.Ensuring the security of our protocols is our highest priority.
      </span>
    </div>
    <div
      class="logo-container"
      @click="openLinkBlank('https://docs.overnight.fi/other/audits')"
      @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/audits')"
    >
      <img
        class="hacken"
        :src="require('@/assets/audits/hacken.svg')"
        alt="Hacken logo"
      >
      <img
        class="ackee"
        :src="require('@/assets/audits/ackee.svg')"
        alt="Ackee logo"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'AuditsComponent',

  methods: {
    openLinkBlank(url) {
      window.open(url, '_blank').focus();
    },

    handleMiddleClick(e, url) {
      if (e.button === 1) {
        e.preventDefault();
        window.open(url, '_blank').focus();
      }
    },
  },
};
</script>

<style scoped>
/* extra small devices*/
@media only screen and (max-width: 480px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .paragraph-text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 30px;
    }

    .audits-container {
        padding-left: 20px;
        padding-right: 20px;
    }

    .clear-icon {
        width: 14px;
        margin-left: 5px;
    }

    .hacken {
        width: 24px;
    }

    .ackee {
        height: 14px;
    }

    .logo-container {
        display: flex;
        gap: 20px;
        align-items: center;
    }
}
/* mobile */
@media only screen and (max-width: 768px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .paragraph-text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 10px;
    }

    .audits-container {
        padding-left: 20px;
        padding-right: 20px;
    }

    .logo-container {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .audits-container {
        max-width: 1180px;
        margin: 0 auto 40px auto;
    }

}

/* desktop */
@media only screen and (min-width: 769px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .paragraph-text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 30px;
        max-width: 760px;
    }

    .audits-container {
        max-width: 1180px;
        margin: 0 auto 80px auto;
    }

    .clear-icon {
        margin-left: 5px;
    }
}

.logo-container {
    display: flex;
    gap: 20px;
    cursor: pointer;
}
</style>
