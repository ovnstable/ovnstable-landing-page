<template>
    <div>
        <div class="header-container"></div>
        <HeaderContent class="fixed-position"></HeaderContent>
    </div>
</template>

<script>

import HeaderContent from "@/components/header/HeaderContent.vue";

export default {
    name: "HeaderContainer",
    components: {
        HeaderContent
    }
}
</script>

<style scoped>

.fixed-position {
    width: 100%;
    position: fixed;
    z-index: 10;
}
</style>
