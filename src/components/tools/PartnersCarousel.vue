<template>
    <div class="partners-container">
        <div class="partners-label">
            <label>OUR PARTNERS:</label>
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/sushiswap_logo.svg')" alt="Sushiswap logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/uniswap_logo.svg')" alt="Uniswap logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/velodrome_logo.svg')" alt="Velodrome logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/balancer_logo.svg')" alt="Balancer logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/blockchain-acelerator_logo.svg')" alt="Blockchain Xcelerator logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/optimism_logo.svg')" alt="Optimism logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/1inch_logo.svg')" alt="1inch logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/linea_logo.svg')" alt="Linea logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/axelar_logo.svg')" alt="Axelar logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/odos-xyz_logo.svg')" alt="Odos.xyz logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/curve_logo.svg')" alt="Curve logo">
        </div>
        <div class="partner-single-item">
            <img :src="require('@/assets/partners/hub71_logo.svg')" alt="Hub71 logo">
        </div>
    </div>
</template>

<script>
export default {
    name: "PartnersCarousel",
    components: {

    },

    data() {

    },
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width:   1024px) {
    .partners-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        white-space: nowrap;
        animation: moveCarousel 10s linear infinite;
        width: 100%;

        gap: 20px;
    }

    @keyframes moveCarousel {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .partners-label {

    }
}

/* desktop */
@media only screen and (min-width: 1024px) {
    .partners-container {

    }

    .partners-label {

    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
    .partners-container {

    }

    .partners-label {

    }
}
.partners-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
    padding-left: 100px;
    padding-right: 100px;
}

.partners-label {
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: #BAC0CB;
}
</style>