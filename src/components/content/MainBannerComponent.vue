<template>
    <div class="hero-container" v-if="isDesktop">
        <div class="hero-text-container">
            <div class="hero-title">
                <div class="left-border-div">
                </div>
                <div class="hero-labels">
                    <span class="main-title">OVERNIGHT FINANCE - <br> Your money shouldn’t sleep <br></span>
                    <span class="main-sub-title">on-chain yield fully backed by <br> proprietary delta-neutral strategies</span>
                </div>
            </div>

            <div class="widget-container">
                <StatisticWidget></StatisticWidget>
            </div>

            <div class="button-container">
                <button
                    @click="openLinkBlank('https://app.overnight.fi/swap')"
                    class="button text-styling"
                >
                    Connect
                </button>
            </div>
        </div>
        <div class="hero-image">
            <img class="hero-blended" :src="require('@/assets/main/hero.svg')" alt="hero image">
        </div>
    </div>
    <div class="hero-container-mobile" v-else>
        <div class="hero-text-container-mobile">
            <div class="hero-title">
                <div class="left-border-div-mobile">
                </div>
                <div class="hero-labels">
                    <span class="main-title-mobile">OVERNIGHT FINANCE - <br> Your money <br> shouldn’t sleep <br></span>
                    <span class="main-sub-title-mobile">on-chain yield fully <br> backed by  proprietary <br> delta-neutral strategies</span>
                </div>
            </div>
            <div class="button-container">
                <button
                    @click="openLinkBlank('https://app.overnight.fi/swap')"
                    class="button-mobile"
                >
                    Connect
                </button>
            </div>

            <div class="widget-container-mobile">
                <StatisticWidget></StatisticWidget>
            </div>

        </div>
        <div class="hero-image">
            <img class="hero-blended hero-blended-mobile" :src="require('@/assets/main/hero.svg')" alt="hero image">
        </div>
    </div>
</template>

<script>
import StatisticWidget from "@/components/tools/StatisticWidget.vue";
import {mapState} from "vuex";

export default {
    name: "MainBannerComponent",
    components: {
        StatisticWidget
    },
    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },

    methods: {
        openLinkBlank(url) {
            window.open(url, '_blank').focus();
        },
    }
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width:   1024px) {
    .hero-text-container-mobile {
        display: flex;
        flex-direction: column;
    }

    .hero-title {
        max-width: 210px;
        display: flex;
    }

    .left-border-div-mobile {
        height: 140px;
        border-left: 2px solid #0F172A;

        margin-right: 20px;
        margin-top: 30px;
    }

    .hero-labels {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 30px;
    }

    .widget-container-mobile {
        margin-top: 10px;
    }

    .hero-blended {
        z-index: 0;
        mix-blend-mode: multiply;
    }

    .hero-blended-mobile {
        height: 204px;
        position: relative;
        top: 30px;
        right: 170px;
    }

    .button-container {
        margin-top: 40px;
    }
}

/* desktop */
@media only screen and (min-width: 1024px) {
    .hero-text-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .hero-title {
        max-width: 944px;
        display: flex;
    }

    .left-border-div {
        height: 160px;
        border-left: 2px solid #0F172A;

        margin-right: 20px;
        margin-top: 50px;
    }

    .hero-labels {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
    }

    .widget-container {
        margin-top: 100px;
    }

    .hero-blended {
        mix-blend-mode: multiply;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {

    .hero-text-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .hero-title {
        max-width: 944px;
        display: flex;
    }

    .left-border-div {
        height: 160px;
        border-left: 2px solid #0F172A;

        margin-right: 20px;
        margin-top: 50px;
    }

    .hero-labels {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
    }

    .widget-container {
        margin-top: 100px;
    }

    .hero-blended {
        mix-blend-mode: multiply;
    }
}
.hero-container {
    width: 100vw;
    height: 710px;

    background-image: url('~@/assets/main/stars.svg'), url('~@/assets/main/circles.svg');
    background-size: cover, cover;
    background-position: left center, left center;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 52px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}

.hero-container-mobile {
    height: 370px;

    display: flex;
    justify-content: start;
    align-items: start;
    overflow-x: hidden;
    margin-top: 60px;
    padding-left: 20px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
</style>
