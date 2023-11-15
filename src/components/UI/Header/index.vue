<!-- eslint-disable max-len -->
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
          <svg class="logos" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 1.89355C19.2627 2.21579 18.4724 2.43215 17.6416 2.53035C18.4896 2.03011 19.1411 1.23832 19.4467 0.296154C18.6548 0.758032 17.7741 1.09408 16.8405 1.27515C16.0923 0.489498 15.0261 0 13.8462 0C11.5798 0 9.74203 1.80761 9.74203 4.03875C9.74203 4.35485 9.77944 4.66328 9.84958 4.95943C6.43909 4.79064 3.41672 3.18251 1.39194 0.738084C1.03811 1.33653 0.837035 2.03011 0.837035 2.76973C0.837035 4.17071 1.56028 5.4075 2.6623 6.13331C1.98893 6.11182 1.35609 5.92922 0.802743 5.62693C0.802743 5.64381 0.802743 5.66069 0.802743 5.67757C0.802743 7.63556 2.21807 9.26671 4.09321 9.63959C3.75029 9.73166 3.38711 9.78076 3.01302 9.78076C2.74803 9.78076 2.49084 9.75621 2.23989 9.70711C2.76362 11.3106 4.2787 12.4814 6.07279 12.5137C4.66994 13.597 2.90079 14.2415 0.97732 14.2415C0.645312 14.2415 0.319539 14.2231 0 14.1847C1.81436 15.3325 3.97163 16 6.28945 16C13.8368 16 17.9643 9.84521 17.9643 4.5083C17.9643 4.33337 17.9596 4.1569 17.9534 3.98504C18.7546 3.41575 19.4498 2.70375 20 1.89355Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://discord.com/invite/overnight-fi" target="_blank">
          <svg class="logos discord" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8135 1.77366C17.8229 0.2673 14.674 0.0124677 14.5402 0.00164474C14.33 -0.0150817 14.1304 0.0970838 14.0446 0.278123C14.0384 0.28993 13.9694 0.4385 13.893 0.669719C15.2093 0.878307 16.8266 1.29942 18.2902 2.15444C18.5244 2.2912 18.5965 2.58145 18.4512 2.80283C18.3571 2.94648 18.193 3.0252 18.0257 3.0252C17.9358 3.0252 17.8449 3.00257 17.7623 2.95435C15.2469 1.48636 12.1043 1.41257 11.5 1.41257C10.8957 1.41257 7.75205 1.48636 5.23877 2.95435C5.00355 3.0921 4.69618 3.02323 4.54982 2.80283C4.40345 2.58145 4.47664 2.29218 4.71082 2.15444C6.17445 1.3004 7.79073 0.878307 9.108 0.669719C9.03064 0.437516 8.96164 0.28993 8.95641 0.278123C8.86964 0.0970838 8.671 -0.0170496 8.45982 0.00262857C8.32705 0.0124677 5.17814 0.2673 3.16041 1.79531C2.10659 2.71133 0 8.07166 0 12.7059C0 12.7875 0.023 12.8682 0.0658636 12.9391C1.52009 15.3427 5.48655 15.9725 6.39086 16C6.39609 16 6.40132 16 6.40655 16C6.5665 16 6.71704 15.9282 6.81114 15.8062L7.72591 14.6235C5.25968 14.0233 3.99991 13.005 3.92673 12.945C3.71973 12.7728 3.69986 12.4756 3.88282 12.2808C4.06577 12.086 4.38045 12.0673 4.58745 12.2385C4.61777 12.2641 6.93764 14.1168 11.5 14.1168C16.0707 14.1168 18.3906 12.2562 18.4136 12.2375C18.6206 12.0683 18.9363 12.086 19.1182 12.2818C19.3001 12.4766 19.2803 12.7728 19.0743 12.944C19.0011 13.005 17.7414 14.0223 15.2751 14.6225L16.1899 15.8052C16.284 15.9272 16.4345 15.999 16.5945 15.999C16.5997 15.999 16.605 15.999 16.6102 15.999C17.5145 15.9724 21.481 15.3427 22.9352 12.9381C22.977 12.8672 23 12.7875 23 12.7059C23 8.07166 20.8934 2.71133 19.8135 1.77366ZM8.24968 10.8237C7.28368 10.8237 6.49959 9.98044 6.49959 8.94144C6.49959 7.90243 7.28264 7.05922 8.24968 7.05922C9.21673 7.05922 9.99977 7.90243 9.99977 8.94144C9.99977 9.98044 9.21673 10.8237 8.24968 10.8237ZM14.7503 10.8237C13.7843 10.8237 13.0002 9.98044 13.0002 8.94144C13.0002 7.90243 13.7833 7.05922 14.7503 7.05922C15.7163 7.05922 16.5004 7.90243 16.5004 8.94144C16.5004 9.98044 15.7163 10.8237 14.7503 10.8237Z" fill="currentColor"/>
          </svg>
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

a {
  .logos {
    color: #0F172A;
    cursor: pointer;
    transition: .15s opacity, .15s transform, color .2s ease;
  }

  &:hover {
    .logos {
      color: var(--ov-bg-secondary);
      transform: scale(1.2);
    }
  }
}

a:hover .logos.discord {
  color: #5765f1;
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
