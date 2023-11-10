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
/* extra small devices*/
@media only screen and (max-width: 480px) {
    .svg-background-container {
        height: 100px; /* Adjust the height as necessary for very small screens */
        /* The rest of your styles remain the same, unless you need to tweak them for very small screens */
    }
}
/* mobile */
@media only screen and (max-width: 768px) {
    .svg-background-container {
        height: 200px; /* Adjust the height as necessary for smaller devices */
        /* The rest of your styles remain the same, unless you need to tweak them for smaller screens */
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .svg-background-container {
        height: 100%; /* Adjust the height as necessary for smaller devices */
        /* The rest of your styles remain the same, unless you need to tweak them for smaller screens */
    }
}

.svg-background-container {
    width: 100%;
    background-image: url('../../assets/roadmap.svg');
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Do not repeat the image */
}

</style>
