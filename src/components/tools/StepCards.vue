<template>
    <div class="main-sub-title">
        {{ stepLabel }}
    </div>
    <div class="cards-container">
        <div class="step-card-box">
            <img :src="require('@/assets/cards/' + imageLink)" alt="About products image">
        </div>
        <div class="sub-title">
            {{legendTitle}}
        </div>
        <div class="paragraph">
            {{subTitle}}
        </div>
    </div>
</template>

<script>
export default {
    name: "StepCards",

    props: {
        stepLabel: {
            type: String,
            default: '',
        },

        imageLink: {
            type: String,
            default: null,
        },

        legendTitle: {
            type: String,
            default: '',
        },

        subTitle: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 1024px) {

}

/* desktop */
@media only screen and (min-width: 1400px) {
    .cards-container {
        display: flex;
        flex-direction: column;
        max-width: 260px;
        text-align: center;
    }

    .step-card-box {
        width: 253px;
        height: 253px;
        border: 1px solid #0F172A;
        border-bottom: 2px solid #0F172A;
        background-color: white;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-sub-title {
        text-transform: none;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .sub-title {
        margin-top: 10px;
        margin-bottom: 20px;
        text-transform: none;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1024px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1024px),
only screen and (                min-resolution: 192dpi) and (min-width: 1024px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1024px) {
    .cards-container {
        display: flex;
        flex-direction: column;
        max-width: 260px;
        text-align: center;
    }

    .step-card-box {
        width: 253px;
        height: 253px;
        border: 1px solid #0F172A;
        border-bottom: 2px solid #0F172A;
        background-color: white;


        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-sub-title {
        text-transform: none;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .sub-title {
        margin-top: 10px;
        margin-bottom: 20px;
    }
}
</style>