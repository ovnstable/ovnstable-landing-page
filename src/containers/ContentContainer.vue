<template>
    <div class="main-container main-container-blue">
        <MainBannerComponent></MainBannerComponent>
    </div>
    <div class="main-container">
        <AboutOvernightComponent></AboutOvernightComponent>
    </div>

</template>

<script>

import MainBannerComponent from "@/components/content/MainBannerComponent";
import AboutOvernightComponent from "@/components/content/AboutOvernightComponent"

export default {
    name: "ContentContainer",
    components: {
        MainBannerComponent,
        AboutOvernightComponent
    }
}
</script>


<style scoped>

</style>
