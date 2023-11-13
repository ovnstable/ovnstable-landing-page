<template>
   <div>
       <div class="carousel">
            <PartnersCarousel />
       </div>
       <div
           v-if="isDesktop || isTablet"
           class="cards-container"
       >
           <div class="single-card">
               <StepCards
                   step-label="Step 1"
                   image-link="mint-tokens.png"
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
                   image-link="receive-yield.png"
                   legend-title="RECEIVE YIELD"
                   sub-title="Do nothing and receive daily rebase by holding Tokens+"
               />
           </div>
           <div class="arrow-container">
               <img
                   :src="require('@/assets/cards/arrow-right.svg')"
                   alt="Arrow right icon"
               >
           </div>
           <div class="single-card">
               <StepCards
                   step-label="Step 3"
                   image-link="use-in-defi.png"
                   legend-title="USE IN DeFI"
                   sub-title="Use your Tokens+ in DeFI to maximize your yield"
               />
           </div>
       </div>

       <div
           v-if="isMobile"
           class="cards-container-mobile"
       >
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 1"
                   image-link="mint-tokens.png"
                   legend-title="MINT TOKENS+"
                   sub-title="Instantly mint any amount of Tokens+"
               />
               <div class="arrow-container-mobile">
                   <img
                       class="arrow-mobile"
                       :src="require('@/assets/cards/arrow-bottom.svg')"
                       alt="Arrow bottom"
                   >
               </div>
           </div>
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 2"
                   image-link="receive-yield.png"
                   legend-title="RECEIVE YIELD"
                   sub-title="Do nothing and receive daily rebase by holding Tokens+"
               />
               <div class="arrow-container-mobile">
                   <img
                       class="arrow-mobile"
                       :src="require('@/assets/cards/arrow-bottom.svg')"
                       alt="Arrow bottom"
                   >
               </div>
           </div>
           <div class="single-card">
               <StepCardsMobile
                   step-label="Step 3"
                   image-link="use-in-defi.png"
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
@media only screen and (max-width: 768px) {
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

    .cards-container-mobile {
        display: flex;
        flex-direction: column;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .cards-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 50px;
        max-width: 1180px;
        margin: 0 auto 70px auto;
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
