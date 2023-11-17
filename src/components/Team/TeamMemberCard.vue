<template>
  <div class="team-member-card" v-if="showMember">
    <div class="profile">
      <img class="photo" :src="picture" alt="team member photo" />
      <div class="title">
        {{ name }}
      </div>
      <div class="sub-title">
        {{ role }}
      </div>
      <div v-if="contact" class="contact">
        <a class="sub-title" href=""> contact us </a>
      </div>
    </div>
    <div class="social-links">
      <a v-if="linkedin" :href="linkedin" target="_blank">
        <img
          class="gray-icon"
          :src="require('@/assets/socials/linkedIn_gray.svg')"
          alt="Linked in icon"
        />
      </a>
      <a v-if="twitter" :href="twitter" target="_blank">
        <img
          class="gray-icon"
          :src="require('@/assets/socials/twitter_gray.svg')"
          alt="Twitter icon"
        />
      </a>
      <a v-if="telegram" :href="telegram" target="_blank">
        <img
          class="gray-icon"
          :src="require('@/assets/socials/telegram_gray.svg')"
          alt="Telegram icon"
        />
      </a>
      <a v-if="github" :href="github" target="_blank">
        <img
          class="gray-icon"
          :src="require('@/assets/socials/gihub_gray.svg')"
          alt="Github icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TeamMemberCard',
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
  },

  data: () => ({
    showMember: true,
  }),
  computed: {
    ...mapState('device', [
      'isMobile',
    ]),
  },
  watch: {
    isMobile() {
      if (this.isMobile && !this.role) this.showMember = false;
    },
  },
};
</script>

<style scoped>
.team-member-card {
  padding: 8px;
  box-shadow: 0px 1px 0px 0px #000;
}

.photo {
  width: calc(100% - 30px);
  max-width: 150px;
}

/* Mobile styles */
@media only screen and (max-width: 577px) {
  .team-card-container {
    padding: 0 15px;
  }
  .team-member-card {
    border: 1px solid black;

    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
  }

  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 14px;
    line-height: 8px;
    margin-top: 10px;
    font-weight: 600;
  }

  .sub-title {
    font-size: 12px;
    line-height: 10px;
    text-transform: none;
    margin-top: 10px;
    font-weight: 400;
  }

  .social-links {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 5px;
    right: 8px;
  }

  .gray-icon {
    width: 20px;
    height: 20px;
  }

  .contact {
    font-size: 9px;
    line-height: 8px;
    font-weight: 400;
  }
}

/* desktop */
@media only screen and (min-width: 577px) {
  .team-member-card {
    border: 1px solid black;
    border-bottom: 3px solid black;

    background-color: #ffffff;
    border-radius: 5px;

    position: relative;
  }

  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .social-links {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 8px;
    right: 8px;
    gap: 10px;
  }

  .title {
    font-size: 25px;
    font-weight: 600;
    line-height: 33px;
    color: #0f172a;
    margin-top: 15px;
  }

  .sub-title {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: #0f172a;
    text-transform: none;
  }
}

.social-links a {
  transition: transform .2s ease;
}

.social-links a:hover {
  transform: scale(1.15);
}

</style>
