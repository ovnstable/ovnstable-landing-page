<template>
    <div>
        <div class="main-container main-container-blue">
            <div class="row">
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ContentComponent></ContentComponent>
                </div>
            </div>
        </div>
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
