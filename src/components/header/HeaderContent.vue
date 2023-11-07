<template>
    <div class="header-main-container header-wrapper" >
        <div class="header-container main-centered"  v-if="isDesktop">
            <div class="logo-container">
                <img
                    @click="openLinkSelf('https://landing.overnight.fi/')"
                    :src="require('/src/assets/overnight_logo.svg')"
                    alt="overnight logo"
                />
            </div>
            <div class="social-container">
                <img
                    @click="openLinkBlank('https://twitter.com/overnight_fi')"
                    :src="require('/src/assets/socials/twitter.svg')"
                    alt="twitter logo"
                    class="logos"
                />
                <img
                    @click="openLinkBlank('https://discord.com/invite/overnight-fi')"
                    :src="require('/src/assets/socials/discord.svg')"
                    alt="twitter logo"
                    class="logos"
                />
            </div>
            <div class="header-labels-container">
                <label
                    @click="openLinkBlank('https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics')"
                    class="header-label text-styling"
                >
                    Token
                </label>
                <label
                    @click="openLinkBlank('https://docs.overnight.fi/core-concept/faq')"
                    class="header-label text-styling"
                >
                    FAQ
                </label>
                <label
                    @click="openLinkBlank('https://docs.overnight.fi/')"
                    class="header-label text-styling"
                >
                    Docs
                </label>
            </div>
            <div class="button-container">
                <button
                    @click="openLinkBlank('https://app.overnight.fi/swap')"
                    class="button text-styling"
                >
                    Launch Dapp
                </button>
            </div>
        </div>

        <div class="header-main-container-mobile" v-else>
            <div class="logo-container-mobile">
                <img
                    @click="openLinkSelf('https://landing.overnight.fi/')"
                    :src="require('/src/assets/overnight_logo.svg')"
                    alt="overnight logo"
                    class="overnight-logo"
                />
            </div>
            <div class="social-container">
                <img
                    @click="openLinkBlank('https://twitter.com/overnight_fi')"
                    :src="require('/src/assets/socials/twitter.svg')"
                    alt="twitter logo"
                    class="logos"
                />
                <img
                    @click="openLinkBlank('https://discord.com/invite/overnight-fi')"
                    :src="require('/src/assets/socials/discord.svg')"
                    alt="twitter logo"
                    class="logos"
                />
            </div>
            <div class="button-container">
                <button
                    @click="openLinkBlank('https://app.overnight.fi/swap')"
                    class="button-mobile"
                >
                    Launch Dapp
                </button>
            </div>
            <div class="menu-container">
                <div class="menu-image-container" @click="toggleMenu">
                    <img :src="require('@/assets/main/menu.svg')" alt="menu icon">
                </div>
                <div v-if="isMenuOpen" class="dropdown-menu">
                    <ul class="item-list">
                        <li class="menu-list-item" @click="openLinkBlank('https://docs.overnight.fi/governance/ovn-token/overnight-tokenomics')">Token</li>
                        <li class="menu-list-item" @click="openLinkBlank('https://docs.overnight.fi/core-concept/faq')">FAQ</li>
                        <li class="menu-list-item" @click="openLinkBlank('https://docs.overnight.fi/')">Docs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "HeaderContent",
    data() {
        return {
            isMenuOpen: false,
        }
    },

    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },

    mounted() {
        document.body.addEventListener("click", this.closeMenuOnClickOutside);
    },

    beforeUnmount() {
        document.body.removeEventListener("click", this.closeMenuOnClickOutside);
    },

    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },

        openLinkBlank(url) {
            window.open(url, '_blank').focus();
        },

        openLinkSelf(url) {
            window.open(url, '_self').focus();
        },

        closeMenuOnClickOutside(event) {
            if (this.isMenuOpen && !this.$el.contains(event.target)) {
                this.isMenuOpen = false;
            }
        },
    }
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width:   1024px) {
    .header-main-container-mobile {
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
        color: #0F172A;
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

    .logo-container{
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

    .logo-container{
        margin-right: 450px;
        cursor: pointer;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {

    .social-container {
        display: flex;
        gap: 30px;
    }

    .logo-container{
        margin-right: 450px;
        cursor: pointer;
    }
}

.logos {
    cursor: pointer;
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
