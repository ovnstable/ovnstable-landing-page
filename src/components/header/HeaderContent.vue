<template>
  <div class="header-main-container header-wrapper">
    <div v-if="isDesktop" class="header-container main-centered">
      <div class="logo-container">
        <img
          :src="require('/src/assets/overnight_logo.svg')"
          alt="overnight logo"
          @click="openLinkSelf('https://landing.overnight.fi/')"
          @mouseup.middle="handleMiddleClick($event, 'https://landing.overnight.fi/')"
        />
      </div>
      <div class="social-container">
        <a href="https://twitter.com/overnight_fi" target="_blank">
          <img
            class="logos"
            :src="require('/src/assets/socials/twitter.svg')"
            alt="twitter logo"
          />
        </a>
        <a href="https://discord.com/invite/overnight-fi" target="_blank">
          <img
            class="logos"
            :src="require('/src/assets/socials/discord.svg')"
            alt="twitter logo"
          />
        </a>
      </div>
      <div class="header-labels-container">
        <a
          class="header-label link text-styling"
          href="https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics"
          target="_blank"
        >
          Token
        </a>
        <a
          class="header-label link text-styling"
          href="https://docs.overnight.fi/core-concept/faq"
          target="_blank"
        >
          FAQ
        </a>
        <a
          class="header-label link text-styling"
          target="_blank"
          href="https://docs.overnight.fi/"
        >
          Docs
        </a>
      </div>

      <div class="button-container">
        <Button
          class="button text-styling"
          text="Launch Dapp"
          @click="openLinkSelf('https://app.overnight.fi/swap')"
        />
      </div>
    </div>

    <div v-else class="header-main-container-mobile">
      <div class="logo-container-mobile">
        <img
          class="overnight-logo"
          :src="require('/src/assets/overnight_logo.svg')"
          alt="overnight logo"
          @click="openLinkSelf('https://landing.overnight.fi/')"
          @mouseup.middle="handleMiddleClick($event, 'https://landing.overnight.fi/')"
        />
      </div>
      <div class="social-container">
        <img
          class="logos"
          :src="require('/src/assets/socials/twitter.svg')"
          alt="twitter logo"
          @click="openLinkBlank('https://twitter.com/overnight_fi')"
          @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/overnight_fi')"
        />
        <img
          class="logos"
          :src="require('/src/assets/socials/discord.svg')"
          alt="twitter logo"
          @click="openLinkBlank('https://discord.com/invite/overnight-fi')"
          @mouseup.middle="
            handleMiddleClick($event, 'https://discord.com/invite/overnight-fi')
          "
        />
      </div>
      <div class="button-container">
      </div>
      <div class="menu-container">
        <div class="menu-image-container" @click="toggleMenu">
          <img :src="require('@/assets/main/menu.svg')" alt="menu icon" />
        </div>
        <div v-if="isMenuOpen" class="dropdown-menu">
          <ul class="item-list">
            <li
              class="menu-list-item"
              @click="
                openLinkBlank(
                  'https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics'
                )
              "
              @mouseup.middle="
                handleMiddleClick(
                  $event,
                  'https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics'
                )
              "
            >
              Token
            </li>
            <li
              class="menu-list-item"
              @click="openLinkBlank('https://docs.overnight.fi/core-concept/faq')"
              @mouseup.middle="
                handleMiddleClick($event, 'https://docs.overnight.fi/core-concept/faq')
              "
            >
              FAQ
            </li>
            <li
              class="menu-list-item"
              @click="openLinkBlank('https://docs.overnight.fi/')"
              @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/')"
            >
              Docs
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '@/components/UI/Button/index.vue';

export default {
  name: 'HeaderContent',

  components: {
    Button,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },

  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),
  },

  mounted() {
    document.body.addEventListener('click', this.closeMenuOnClickOutside);
  },

  beforeUnmount() {
    document.body.removeEventListener('click', this.closeMenuOnClickOutside);
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    addShadow() {
      this.$refs.Link.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 5)';
    },
    removeShadow() {
      this.$refs.Link.style.boxShadow = '';
    },

    openLinkBlank(url) {
      window.open(url).focus();
    },

    openLinkSelf(url) {
      window.open(url, '_self').focus();
    },

    closeMenuOnClickOutside(event) {
      if (this.isMenuOpen && !this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
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

<style lang="scss" scoped>
/* mobile */
@media only screen and (max-width: 1024px) {
  .header-main-container-mobile {
    position: relative;
    width: 100vw;

    display: flex;
    align-items: center;
    gap: 15px;

    margin-left: 20px;
    height: 60px;

    background-color: var(--ov-white);
    border-bottom-color: var(--ov-black);
  }

  .header-wrapper {
    display: flex;
    justify-content: center;
  }

  .logo-container-mobile {
    cursor: pointer;
  }

  .logos {
    height: 12px;
    cursor: pointer;
  }

  .social-container {
    display: flex;
    gap: 15px;
    margin-left: auto;
  }

  .overnight-logo {
    width: 127px;
    height: 21px;
  }

  .menu-image-container {
    display: flex;
    cursor: pointer;
  }

  .menu-container {
    margin-right: 20px;
    position: relative;
  }

  .dropdown-menu {
    width: 100px;
    position: absolute;
    top: 22px;
    right: 3px;
    z-index: 2 !important;

    border-radius: 0 0 5px 5px;
    text-align: center;
  }

  .menu-list-item {
    width: 100%;
    border: 1px solid black;
    padding: 5px 10px;
    list-style-type: none;
    background-color: white;

    font-family: "Red Hat Display", sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    color: #0f172a;
    cursor: pointer;
  }

  ul li:nth-child(2) {
    border-top: 0;
  }

  ul li:last-child {
    border-top: 0;
    border-radius: 0 0 5px 5px;
    border-bottom: 2px solid black;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .logo-container {
    margin-right: 250px;
    cursor: pointer;
  }
}

/* desktop */
@media only screen and (min-width: 1024px) {
  .header-wrapper {
    display: flex;
    justify-content: center;
  }

  .social-container {
    display: flex;
    gap: 30px;
  }

  .button {
    padding-top: 3px !important;
  }

  .logo-container {
    margin-right: 450px;
    cursor: pointer;
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (min--moz-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (-o-min-device-pixel-ratio: 2/1) and (min-width: 1300px),
  only screen and (min-device-pixel-ratio: 2) and (min-width: 1300px),
  only screen and (min-resolution: 192dpi) and (min-width: 1300px),
  only screen and (min-resolution: 2dppx) and (min-width: 1300px) {
  .social-container {
    display: flex;
    gap: 30px;
  }

  .logo-container {
    margin-right: 450px;
    cursor: pointer;
  }
}

.logos {
  cursor: pointer;
  transition: .15s opacity, .15s transform;

  &:hover {
    opacity: .7;
    transform: scale(1.1);
  }
}

.header-labels-container {
  margin-left: 60px;
  margin-right: 50px;
  display: flex;
  gap: 80px;
}

.header-label {
  cursor: pointer;
}

.menu-container {
  position: relative;
}
</style>
