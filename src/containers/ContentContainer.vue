<template>
    <div class="main-container main-container-blue">
        <ContentComponent></ContentComponent>
    </div>
</template>

<script>

import ContentComponent from "@/components/content/MainBannerComponent";

export default {
    name: "ContentContainer",
    components: {
        ContentComponent,
    }
}
</script>


<style scoped>

</style>
