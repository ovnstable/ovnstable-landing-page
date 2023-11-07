<template>
   <div>
       <div>
            <PartnersCarousel />
       </div>
       <div>
           <StepCards></StepCards>
       </div>
   </div>
</template>

<script>

import StepCards from "@/components/tools/StepCards";
import PartnersCarousel from "@/components/tools/PartnersCarousel";
export default {
    name: "AboutOvernightComponent",
    components: {
        PartnersCarousel,
        StepCards
    }
}
</script>


<style scoped>

</style>
