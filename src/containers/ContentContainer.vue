<template>
    <div class="main-container main-container-blue">
        <MainBannerComponent />
    </div>
    <div class="main-container">
        <AboutOvernightComponent />
        <KeyFeaturesComponent />
        <TotalValueLockedContainer />
    </div>
    <div class="main-container main-container-white">
        <OvernightRoadmapComponent />
    </div>
    <div class="main-container">
        <AuditsComponent />
    </div>
</template>

<script>

import MainBannerComponent from "@/components/content/MainBannerComponent";
import AboutOvernightComponent from "@/components/content/AboutOvernightComponent"
import KeyFeaturesComponent from "@/components/content/KeyFeaturesComponent";
import TotalValueLockedContainer from "@/components/content/TotalValueLockedContainer";
import OvernightRoadmapComponent from "@/components/content/OvernightRoadmapComponent";
import AuditsComponent from "@/components/content/AuditsComponent";

export default {
    name: "ContentContainer",
    components: {
        MainBannerComponent,
        AboutOvernightComponent,
        KeyFeaturesComponent,
        TotalValueLockedContainer,
        OvernightRoadmapComponent,
        AuditsComponent,
    }
}
</script>


<style scoped>
@media only screen and (max-width: 480px) {
    .main-container-white {
        height: 300px; /* Adjust the height as necessary for very small screens */
        /* The rest of your styles remain the same, unless you need to tweak them for very small screens */
    }
}
/* mobile */
@media only screen and (max-width: 768px) {
    .main-container-white  {
        height: 200px; /* Adjust the height as necessary for smaller devices */
        /* The rest of your styles remain the same, unless you need to tweak them for smaller screens */
        margin-bottom: 30px;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .main-container-white {
        background-color: #FFFFFF;
        border-top: 1px solid #0F172A;
        border-bottom: 1px solid #0F172A;
        height: 620px;

        max-width: 100%;
        margin-bottom: 100px;
    }
}

</style>
