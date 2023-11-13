<template>
    <div class="investors-container">
        <div class="title">
            Our valued investors
        </div>
        <div class="companies-container">
            <div
                class="investor-name"
                @click="openLinkBlank('https://twitter.com/sandeepnailwal')"
                @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/sandeepnailwal')"
            >
                Sandeep Naiwal
            </div>
            <div
                class="investor-name"
                @click="openLinkBlank('https://twitter.com/twobitidiot')"
                @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/twobitidiot')"
            >
                Ryan Selkis
            </div>
            <div
                class="investor-company hack"
                @click="openLinkBlank('https://hack.vc/')"
                @mouseup.middle="handleMiddleClick($event, 'https://hack.vc/')"
            >
                <img
                    :src="require('@/assets/investors/hack-vc.svg')"
                    alt="Hack VC logo"
                >
            </div>
            <div
                class="investor-company labs"
                @click="openLinkBlank('https://www.fjlabs.com/')"
                @mouseup.middle="handleMiddleClick($event, 'https://www.fjlabs.com/')"
            >
                <img
                    :src="require('@/assets/investors/fj-labs.svg')"
                    alt="FJ Labs logo"
                >
            </div>
            <div
                class="investor-name"
                @click="openLinkBlank('https://twitter.com/tubergen')"
                @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/tubergen')"
            >
                Brian Tubergen
            </div>
            <div
                class="investor-name"
                @click="openLinkBlank('https://twitter.com/paulrholland')"
                @mouseup.middle="handleMiddleClick($event, 'https://twitter.com/paulrholland')"
            >
                Paul Holland
            </div>
        </div>
    </div>

    <div
        v-if="isDesktop"
        class="scroll-top-container"
        @click="scrollToTop"
    >
        <img
            class="arrow-icon"
            :src="require('@/assets/scroll-top-arrow.png')"
            alt="Scroll back icon"
        >
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "InvestorsComponent",

    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },

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

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    }
}
</script>

<style scoped>
/* Mobile styles */
@media only screen and (max-width: 768px) {
    .title {
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 20px;
        padding-left: 20px;
    }

    .companies-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-left: 7px;
    }

    .investor-name, .investor-company {
        flex: 0 0 calc(33.33% - 10px);
        text-align: center;
        margin-bottom: 10px;
    }

    .investor-name {
        font-size: 14px;
        line-height: 19px;
        font-weight: 400;
        color: #687386;

    }

    .investor-company img {
        max-width: 100%;
        height: 15px;
    }

    .labs {
        height: 11px;
    }

    .hack {
        height: 15px;
    }

    .investors-container {
        margin: 0 auto 40px auto;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .companies-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .investor-name {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;

        color: #687386;
        cursor: pointer;
    }

    .investor-company {
        cursor: pointer;
        height: 38px;
    }

    .labs {
        height: 22px;
    }

    .investors-container {
        margin: 0 auto 100px auto;
    }

    .arrow-icon {
        height: 50px;
        width: 50px;
    }
}

.investors-container {
    max-width: 1180px;
}

.scroll-top-container {
    max-width: 1180px;
    margin: 0 auto 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

</style>