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
        background-image: url('../../assets/roadmap-mobile.svg'); /* Use mobile-specific image */
        /* Other background properties can remain the same */
        background-size: 100% 100%; /* Stretch image to cover the container */
        background-repeat: no-repeat;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .svg-background-container {
        height: 100%;
        background-image: url('../../assets/roadmap.svg'); /* Use desktop-specific image */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}

.svg-background-container {
    width: 100%;
    /* The background-image property is now set within the media queries, so it's removed from here */
}

</style>
