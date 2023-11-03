<template>
    <div>
         <div class="sub-title">
             Content Title
         </div>

        <div>
            <StatisticWidget></StatisticWidget>
        </div>
    </div>
</template>

<script>
import StatisticWidget from "@/components/tools/StatisticWidget.vue";

export default {
    name: "MainBannerComponent",
    components: {
        StatisticWidget
    }
}
</script>

<style scoped>

</style>
