<template>
    <div class="audits-wrapper">
        <div class="audits-container">
            <div class="title">
                Audits
                <img
                    class="clear-icon"
                    :src="require('@/assets/icons/done.svg')"
                    alt="Clear icon"
                >
            </div>
            <div class="paragraph-text">
            <span class="paragraph-text">
                We are committed to the highest quality of engineering and will use whatever tools are needed to produce a product exceptional in performance and safety. Every year we audit our products.
            </span>
                <br>
                <br>
                <span class="paragraph-text">
                Our protocols, USD+ and ETS have been audited by the world's leading blockchain security firms Ackee Blockchain in 2023 and Hacken.io in 2022 respectively. Ensuring the security of our protocols is our highest priority.
            </span>
            </div>
            <div
                class="logo-container"
                @click="openLinkBlank('https://docs.overnight.fi/other/audits')"
                @mouseup.middle="handleMiddleClick($event, 'https://docs.overnight.fi/other/audits')"
            >
                <img
                    class="hacken"
                    :src="require('@/assets/audits/hacken.svg')"
                    alt="Hacken logo"
                >
                <img
                    class="ackee"
                    :src="require('@/assets/audits/ackee.svg')"
                    alt="Ackee logo"
                >
            </div>
        </div>
        <div class="audits-image-container">
            <img
                class="audits-image"
                :src="require('@/assets/audits/audits.png')"
                alt="Audits image"
            >
        </div>
    </div>
</template>

<script>

export default {
    name: "AuditsComponent",

    methods: {
        openLinkBlank(url) {
            window.open(url, '_blank').focus();
        },

        handleMiddleClick(e, url) {
            if (e.button === 1) {
                e.preventDefault();
                window.open(url, '_blank').focus();
            }
        },
    },
}
</script>


<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .paragraph-text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 10px;
    }

    .audits-container {
        padding-left: 20px;
        padding-right: 20px;
        max-width: 100%;
        margin: 0 auto 40px auto;
        position: relative;
    }

    .logo-container {
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
        align-items: center;

        position: absolute;
        top: 0;
        right: 20px;
    }

    .hacken {
        width: 30px;
    }

    .ackee {
        width: 100px;
        margin-right: 10px;
    }

    .audits-image-container {
        position: relative;
        margin-bottom: 70px;
    }

    .audits-image {
        position: absolute;
        top: -40px;
        right: -80px;
        width: 220px;
    }

    .audits-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .title {
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .paragraph-text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 30px;
        max-width: 760px;
    }

    .clear-icon {
        margin-left: 5px;
    }

    .audits-image {
        width: 350px;
    }

    .audits-wrapper {
        display: flex;
        justify-content: space-between;
    }
}

.logo-container {
    display: flex;
    gap: 20px;
    cursor: pointer;
}

.audits-wrapper {
    max-width: 1180px;
    margin: 0 auto 80px auto;
}
</style>
