<template>
    <div class="svg-background-container">

    </div>
</template>

<script>
export default {
    name: "OvernightRoadmapComponent",
}
</script>


<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
    .svg-background-container {
        height: 100%;
        background-image: url('../../assets/roadmap-mobile.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .svg-background-container {
        height: 100%;
        background-image: url('../../assets/roadmap.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}

.svg-background-container {
    width: 100%;
}

</style>
