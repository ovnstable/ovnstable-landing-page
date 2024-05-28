<!-- eslint-disable max-len -->
<template>
  <div class="header-main-container header-wrapper">
    <div v-if="isDesktop" class="header-container main-centered">
      <div class="logo-container">
        <img
          :src="require('/src/assets/overnight_logo.svg')"
          alt="overnight logo"
          @click="openLinkSelf('https://overnight.fi/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/')"
        />
      </div>
      <div class="social-container">
        <a class="logo-link" href="https://twitter.com/overnight_fi" target="_blank">
          <svg class="logos" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 1.89355C19.2627 2.21579 18.4724 2.43215 17.6416 2.53035C18.4896 2.03011 19.1411 1.23832 19.4467 0.296154C18.6548 0.758032 17.7741 1.09408 16.8405 1.27515C16.0923 0.489498 15.0261 0 13.8462 0C11.5798 0 9.74203 1.80761 9.74203 4.03875C9.74203 4.35485 9.77944 4.66328 9.84958 4.95943C6.43909 4.79064 3.41672 3.18251 1.39194 0.738084C1.03811 1.33653 0.837035 2.03011 0.837035 2.76973C0.837035 4.17071 1.56028 5.4075 2.6623 6.13331C1.98893 6.11182 1.35609 5.92922 0.802743 5.62693C0.802743 5.64381 0.802743 5.66069 0.802743 5.67757C0.802743 7.63556 2.21807 9.26671 4.09321 9.63959C3.75029 9.73166 3.38711 9.78076 3.01302 9.78076C2.74803 9.78076 2.49084 9.75621 2.23989 9.70711C2.76362 11.3106 4.2787 12.4814 6.07279 12.5137C4.66994 13.597 2.90079 14.2415 0.97732 14.2415C0.645312 14.2415 0.319539 14.2231 0 14.1847C1.81436 15.3325 3.97163 16 6.28945 16C13.8368 16 17.9643 9.84521 17.9643 4.5083C17.9643 4.33337 17.9596 4.1569 17.9534 3.98504C18.7546 3.41575 19.4498 2.70375 20 1.89355Z" fill="currentColor"/>
          </svg>
        </a>
        <a class="logo-link" href="https://t.me/overnight_fi" target="_blank">
          <svg class="logos telegram" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6223 0.254575C19.2812 -0.0398698 18.7453 -0.0819996 18.1913 0.14439H18.1904C17.6077 0.382354 1.69614 7.32867 1.0484 7.61247C0.930588 7.65413 -0.09834 8.04488 0.00764594 8.91525C0.10226 9.69997 0.929223 10.025 1.03021 10.0625L5.07541 11.4722C5.34379 12.3815 6.33314 15.7361 6.55194 16.4528C6.6884 16.8995 6.91083 17.4866 7.30066 17.6074C7.64273 17.7417 7.98298 17.619 8.20314 17.4431L10.6763 15.1083L14.6687 18.2773L14.7638 18.3352C15.0349 18.4574 15.2946 18.5185 15.5425 18.5185C15.7341 18.5185 15.9178 18.4819 16.0934 18.4088C16.6916 18.1588 16.9308 17.5787 16.9558 17.513L19.938 1.73652C20.12 0.893929 19.8671 0.465224 19.6223 0.254575ZM8.643 12.0361L7.27837 15.7398L5.91375 11.1102L16.3759 3.23977L8.643 12.0361Z" fill="currentColor"/>
          </svg>
        </a>
        <a class="logo-link" href="https://discord.com/invite/overnight-fi" target="_blank">
          <svg class="logos discord" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8135 1.77366C17.8229 0.2673 14.674 0.0124677 14.5402 0.00164474C14.33 -0.0150817 14.1304 0.0970838 14.0446 0.278123C14.0384 0.28993 13.9694 0.4385 13.893 0.669719C15.2093 0.878307 16.8266 1.29942 18.2902 2.15444C18.5244 2.2912 18.5965 2.58145 18.4512 2.80283C18.3571 2.94648 18.193 3.0252 18.0257 3.0252C17.9358 3.0252 17.8449 3.00257 17.7623 2.95435C15.2469 1.48636 12.1043 1.41257 11.5 1.41257C10.8957 1.41257 7.75205 1.48636 5.23877 2.95435C5.00355 3.0921 4.69618 3.02323 4.54982 2.80283C4.40345 2.58145 4.47664 2.29218 4.71082 2.15444C6.17445 1.3004 7.79073 0.878307 9.108 0.669719C9.03064 0.437516 8.96164 0.28993 8.95641 0.278123C8.86964 0.0970838 8.671 -0.0170496 8.45982 0.00262857C8.32705 0.0124677 5.17814 0.2673 3.16041 1.79531C2.10659 2.71133 0 8.07166 0 12.7059C0 12.7875 0.023 12.8682 0.0658636 12.9391C1.52009 15.3427 5.48655 15.9725 6.39086 16C6.39609 16 6.40132 16 6.40655 16C6.5665 16 6.71704 15.9282 6.81114 15.8062L7.72591 14.6235C5.25968 14.0233 3.99991 13.005 3.92673 12.945C3.71973 12.7728 3.69986 12.4756 3.88282 12.2808C4.06577 12.086 4.38045 12.0673 4.58745 12.2385C4.61777 12.2641 6.93764 14.1168 11.5 14.1168C16.0707 14.1168 18.3906 12.2562 18.4136 12.2375C18.6206 12.0683 18.9363 12.086 19.1182 12.2818C19.3001 12.4766 19.2803 12.7728 19.0743 12.944C19.0011 13.005 17.7414 14.0223 15.2751 14.6225L16.1899 15.8052C16.284 15.9272 16.4345 15.999 16.5945 15.999C16.5997 15.999 16.605 15.999 16.6102 15.999C17.5145 15.9724 21.481 15.3427 22.9352 12.9381C22.977 12.8672 23 12.7875 23 12.7059C23 8.07166 20.8934 2.71133 19.8135 1.77366ZM8.24968 10.8237C7.28368 10.8237 6.49959 9.98044 6.49959 8.94144C6.49959 7.90243 7.28264 7.05922 8.24968 7.05922C9.21673 7.05922 9.99977 7.90243 9.99977 8.94144C9.99977 9.98044 9.21673 10.8237 8.24968 10.8237ZM14.7503 10.8237C13.7843 10.8237 13.0002 9.98044 13.0002 8.94144C13.0002 7.90243 13.7833 7.05922 14.7503 7.05922C15.7163 7.05922 16.5004 7.90243 16.5004 8.94144C16.5004 9.98044 15.7163 10.8237 14.7503 10.8237Z" fill="currentColor"/>
          </svg>
        </a>
        <a class="logo-link" href="https://overnightdefi.medium.com/" target="_blank">
          <svg class="logos medium" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.082 3.90035V17.8272C7.082 18.0249 7.03262 18.1931 6.93387 18.3319C6.83512 18.4706 6.69076 18.54 6.50078 18.54C6.36616 18.54 6.23575 18.5083 6.10955 18.4449L0.593658 15.6783C0.427605 15.5989 0.287222 15.4664 0.172531 15.2806C0.0578393 15.0949 0.000488281 14.9109 0.000488281 14.7288V1.19356C0.000488281 1.03532 0.0401264 0.900786 0.119392 0.789978C0.198658 0.679159 0.31335 0.623755 0.463466 0.623755C0.574179 0.623755 0.748211 0.683148 0.985562 0.801946L7.04679 3.84117C7.0707 3.8651 7.082 3.88483 7.082 3.90035ZM7.84122 5.09914L14.1754 15.381L7.84122 12.2229V5.09914ZM21.2563 5.31324V17.8272C21.2563 18.0249 21.201 18.1851 21.0902 18.308C20.9796 18.4307 20.8292 18.4921 20.6393 18.4921C20.4493 18.4921 20.2635 18.4406 20.0819 18.3379L14.851 15.7255L21.2563 5.31324ZM21.2204 3.88838C21.2204 3.91231 20.2064 5.57255 18.1782 8.86914C16.15 12.1656 14.9619 14.0949 14.6138 14.657L9.98811 7.12973L13.8314 0.872424C13.966 0.650786 14.1717 0.539978 14.4484 0.539978C14.5592 0.539978 14.6619 0.563691 14.7567 0.611116L21.1739 3.81657C21.2054 3.83253 21.2204 3.85691 21.2204 3.88838Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
      <div class="header-labels-container">
        <a
          class="header-label link text-styling"
          href="https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics"
          target="_blank"
        >
          Tokenomics
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
          @click="openLinkSelf('https://app.overnight.fi/')"
        />
      </div>
    </div>

    <div v-else class="header-main-container-mobile">
      <div class="logo-container-mobile">
        <img
          class="overnight-logo"
          :src="require('/src/assets/overnight_logo.svg')"
          alt="overnight logo"
          @click="openLinkSelf('https://overnight.fi/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/')"
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
          alt="discord logo"
          @click="openLinkBlank('https://discord.com/invite/overnight-fi')"
          @mouseup.middle="
            handleMiddleClick($event, 'https://discord.com/invite/overnight-fi')
          "
        />
        <img
          class="logos"
          :src="require('/src/assets/socials/telegram.svg')"
          alt="telegram logo"
          @click="openLinkBlank('https://t.me/overnight_fi')"
          @mouseup.middle="
            handleMiddleClick($event, 'https://t.me/overnight_fi')
          "
        />
        <img
          class="logos"
          :src="require('/src/assets/socials/medium.svg')"
          alt="medium logo"
          @click="openLinkBlank('https://overnightdefi.medium.com/')"
          @mouseup.middle="
            handleMiddleClick($event, 'https://overnightdefi.medium.com/')
          "
        />
      </div>
      <div class="button-container">
      </div>
      <div class="menu-container">
        <div
          class="menu-image-container"
          :class="{ open: isMenuOpen }"
          @click="toggleMenu"
        >
          <img :src="isMenuOpen ? require('@/assets/icons/close.svg') : require('@/assets/main/menu.svg')" alt="menu icon" />
        </div>
        <Transition>
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
                Tokenomics
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
        </Transition>
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

.v-enter-active,
.v-leave-active {
  transform: translateX(0);
  transition: opacity 0.5s ease, transform .3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

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
    height: 16px;
    cursor: pointer;

    &:first-child {
      margin-right: 10px;
    }
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
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }

    &.open {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .menu-container {
    margin-right: 20px;
    position: relative;
  }

  .dropdown-menu {
    height: calc(100vh - 60px);
    position: absolute;
    top: 45px;
    right: -20px;
    z-index: 2 !important;
    background-color: #fff;

    border-radius: 0 0 5px 5px;
    text-align: center;
  }

  .menu-list-item {
    width: 100%;
    padding: 20px 50px;
    list-style-type: none;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    color: #0f172a;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
      color: var(--ov-bg-secondary);
    }
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
    margin-right: auto;
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
    margin-right: auto;
    cursor: pointer;
  }
}

a {

  &.logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logos {
    color: #0F172A;
    cursor: pointer;
    transition: transform .2s ease, .15s opacity, color .2s ease;
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

a:hover .logos.telegram {
  color: #0497EC;
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

.item-list {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
