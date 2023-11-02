<template>
    <div>
        header content
       <div class="main-title">
          Main Title
       </div>

        <div class="main-sub-title">
            Main Sub title
        </div>

        <div class="padding-top-four">
            {{deviceType}} {{deviceOrientation}}
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "HeaderContent",
    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation"]),
    },
}
</script>

<style scoped>

</style>
