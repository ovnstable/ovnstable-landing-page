<template>
    <div class="main-sub-title">
        {{ stepLabel }}
    </div>
    <div class="cards-container">
        <div class="step-card-box">
            <img
                class="image"
                :src="require('@/assets/cards/' + imageLink)"
                alt="About products image"
            >
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
@media only screen and (max-width: 768px) {

}

/* desktop */
@media only screen and (min-width: 769px) {
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

    .image {
        height: 208px;
    }
}

</style>