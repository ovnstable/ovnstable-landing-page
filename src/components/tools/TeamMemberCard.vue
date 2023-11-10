<template>
    <div class="team-member-card">
        <div class="profile">
            <img :src="picture" alt="team member photo" />
            <div class="title">
                {{ name }}
            </div>
            <div class="sub-title">
                {{ role }}
            </div>
            <div class="contact" v-if="contact">
                <a class="sub-title" href="">contact us</a>
            </div>
        </div>
        <div class="social-links">
            <a v-if="linkedin" :href="linkedin" target="_blank"><img class="gray-icon" :src="require('@/assets/socials/linkedIn_gray.svg')" alt="Linked in icon"></a>
            <a v-if="twitter" :href="twitter" target="_blank"><img class="gray-icon" :src="require('@/assets/socials/twitter_gray.svg')" alt="Twitter icon"></a>
            <a v-if="telegram" :href="telegram" target="_blank"><img class="gray-icon" :src="require('@/assets/socials/telegram_gray.svg')" alt="Telegram icon"></a>
            <a v-if="github" :href="github" target="_blank"><img class="gray-icon" :src="require('@/assets/socials/gihub_gray.svg')" alt="Github icon"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamMemberCard",
    props: {
        picture: String,
        name: String,
        role: String,
        contact: String,
        linkedin: String,
        discord: String,
        twitter: String,
        telegram: String,
        github: String,
    }
}
</script>

<style scoped>
/* Mobile styles */
@media only screen and (max-width: 768px) {
    .team-member-card {
        width: 108px;
        height: 108px;
        border: 1px solid black;

        background-color: #FFFFFF;
        border-radius: 5px;

        position: relative;
    }

    .profile {
        position: relative;
        top: 5px;
        left: 5px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .profile img {
        width: 64px;
        height: 64px;
    }

    .title {
        font-size: 14px;
        line-height: 8px;
        margin-top: 8px;
        font-weight: 600;
    }

    .sub-title {
        font-size: 9px;
        line-height: 8px;
        text-transform: none;
        margin-top: 5px;
        font-weight: 400;
    }

    .social-links {
        display: flex;
        flex-direction: column;

        position: absolute;
        top: 5px;
        right: 5px;
    }

    .gray-icon {
        width: 17px;
        height: 17px;
    }

    .contact {
        font-size: 9px;
        line-height: 8px;
        font-weight: 400;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .team-member-card {
        width: 220px;
        height: 231px;
        border: 1px solid black;

        background-color: #FFFFFF;
        border-radius: 5px;

        position: relative;
    }

    .profile {
        position: relative;
        top: 20px;
        left: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .social-links {
        display: flex;
        flex-direction: column;

        position: absolute;
        top: 20px;
        right: 15px;
        gap: 10px;
    }

    .title {
        font-size: 25px;
        font-weight: 600;
        line-height: 33px;
        color: #0F172A;
        margin-top: 15px;
    }

    .sub-title {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: #0F172A;
        text-transform: none;
    }
}


</style>