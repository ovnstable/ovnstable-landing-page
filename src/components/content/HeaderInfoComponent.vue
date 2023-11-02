<template>
    <div>
         <div class="sub-title">
             Content Title
         </div>

        <div class="">
            <StatisticWidget></StatisticWidget>
        </div>
    </div>
</template>

<script>
import StatisticWidget from "@/components/tools/StatisticWidget.vue";

export default {
    name: "ContentComponent",
    components: {
        StatisticWidget
    }
}
</script>

<style scoped>

</style>
