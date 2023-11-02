<template>
    <div>

        <div class="main-container main-container-blue">
            <div class="row">
                <div class="col-1 col-lg-2 col-md-2 col-sm-1"></div>
                <div class="col-10 col-lg-8 col-md-8 col-sm-10">
                    <ContentComponent></ContentComponent>
                </div>
                <div class="col-1 col-lg-2 col-md-2 col-sm-1"></div>
            </div>
        </div>
    </div>
</template>

<script>


import ContentComponent from "@/components/content/HeaderInfoComponent.vue";

export default {
    name: "ContentContainer",
    components: {
        ContentComponent,
    }
}
</script>


<style scoped>

</style>
