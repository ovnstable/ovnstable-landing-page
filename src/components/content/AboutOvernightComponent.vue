<template>
   <div>
       <div class="carousel">
            <PartnersCarousel />
       </div>
       <div class="cards-container" v-if="isDesktop">
           <div class="single-card">
               <StepCards
                   step-label="Step 1"
                   image-link="mint-tokens.svg"
                   legend-title="MINT TOKENS+"
                   sub-title="Instantly mint any amount of Tokens+"
               />
           </div>
           <div class="arrow-container">
               <img :src="require('@/assets/cards/arrow-right.svg')" alt="">
           </div>
           <div class="single-card">
               <StepCards
                   step-label="Step 2"
                   image-link="receive-yield.svg"
                   legend-title="RECEIVE YIELD"
                   sub-title="Do nothing and receive daily rebase by holding Tokens+"
               />
           </div>
           <div class="arrow-container">
               <img :src="require('@/assets/cards/arrow-right.svg')" alt="">
           </div>
           <div class="single-card">
               <StepCards
                   step-label="Step 3"
                   image-link="use-in-defi.svg"
                   legend-title="USE IN DeFI"
                   sub-title="Use your Tokens+ in DeFI to maximize your yield"
               />
           </div>
       </div>

       <div class="cards-container-mobile" v-if="isMobile">
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 1"
                   image-link="mint-tokens.svg"
                   legend-title="MINT TOKENS+"
                   sub-title="Instantly mint any amount of Tokens+"
               />
               <div class="arrow-container-mobile">
                   <img class="arrow-mobile" :src="require('@/assets/cards/arrow-bottom.svg')" alt="Arrow bottom">
               </div>
           </div>
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 2"
                   image-link="receive-yield.svg"
                   legend-title="RECEIVE YIELD"
                   sub-title="Do nothing and receive daily rebase by holding Tokens+"
               />
               <div class="arrow-container-mobile">
                   <img class="arrow-mobile" :src="require('@/assets/cards/arrow-bottom.svg')" alt="Arrow bottom">
               </div>
           </div>
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 3"
                   image-link="use-in-defi.svg"
                   legend-title="USE IN DeFI"
                   sub-title="Use your Tokens+ in DeFI to maximize your yield"
               />
           </div>
       </div>
   </div>
</template>

<script>

import StepCards from "@/components/tools/StepCards";
import StepCardsMobile from "@/components/tools/StepCardsMobile";
import PartnersCarousel from "@/components/tools/PartnersCarousel";
import {mapState} from "vuex";

export default {
    name: "AboutOvernightComponent",
    components: {
        PartnersCarousel,
        StepCards,
        StepCardsMobile
    },

    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },
}
</script>


<style scoped>
/* mobile */
@media only screen and (max-width: 1024px) {
    .single-card {
        position: relative;
        max-width: 500px;
    }
    .single-card:first-of-type {
        padding-top: 20px;
    }

    .arrow-container-mobile {
        position: relative;
        top: 0;
        right: -290px;
    }
}

/* desktop */
@media only screen and (min-width: 1400px) {
    .cards-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-left: 300px;
        margin-right: 300px;
        margin-bottom: 100px;
    }

    .carousel {
        margin-top: 10px;
        margin-bottom: 40px;
    }


    .arrow-container {
        margin-bottom: 30px;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1024px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (                min-resolution: 192dpi) and (min-width: 1024px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1024px) {
    .cards-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 100px;
    }

    .carousel {
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .arrow-container {
        margin-bottom: 30px;
    }
}
</style>
