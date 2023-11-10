<template>
    <div class="main-container main-container-blue">
        <MainBannerComponent />
    </div>
    <div class="main-container">
        <AboutOvernightComponent />
        <KeyFeaturesComponent />
        <TotalValueLockedContainer />
    </div>
</template>

<script>

import MainBannerComponent from "@/components/content/MainBannerComponent";
import AboutOvernightComponent from "@/components/content/AboutOvernightComponent"
import KeyFeaturesComponent from "@/components/content/KeyFeaturesComponent";
import TotalValueLockedContainer from "@/components/content/TotalValueLockedContainer";

export default {
    name: "ContentContainer",
    components: {
        MainBannerComponent,
        AboutOvernightComponent,
        KeyFeaturesComponent,
        TotalValueLockedContainer
    }
}
</script>


<style scoped>

</style>
