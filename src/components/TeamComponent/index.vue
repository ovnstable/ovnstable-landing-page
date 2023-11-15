<template>
  <div class="team-container">
    <div class="title">Our plus team</div>
    <div class="team-card-container">
      <TeamMemberCard
        v-for="member in teamMembers"
        :key="member.id"
        :picture="member.picture"
        :name="member.name"
        :role="member.role"
        :contact="member.contact"
        :linkedin="member.linkedin"
        :discord="member.discord"
        :twitter="member.twitter"
        :telegram="member.telegram"
        :github="member.github"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line import/extensions
import TeamMemberCard from '@/components/tools/TeamMemberCard';

export default {
  name: 'TeamComponent',
  components: {
    TeamMemberCard,
  },

  data: () => ({
    teamMembers: [
      {
        id: 1,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/max_e.png'),
        name: 'Max E.',
        role: 'Founder & CEO',
        linkedin: 'https://www.linkedin.com/in/maxim-ermilov/',
        twitter: 'https://twitter.com/maxim_ermilov',
        telegram: 'https://t.me/wmermus',
        github: '',
      },
      {
        id: 2,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/yaro_p.png'),
        name: 'Yaro P.',
        role: 'Co-Founder & Tech Lead',
        linkedin: 'https://www.linkedin.com/in/yarik-pavlov/',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 3,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/matvey_b.png'),
        name: 'Matvey B.',
        role: 'Frontend Lead',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: 'https://github.com/matt5346',
      },
      {
        id: 4,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/slava_m.png'),
        name: 'Slava M.',
        role: 'Marketing Lead',
        linkedin: '',
        twitter: 'https://twitter.com/eric_phoen1x',
        telegram: '',
        github: '',
      },
      {
        id: 4,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/undefined.png'),
        name: 'Polina T.',
        role: 'Head of Design',
        linkedin: '',
        twitter: 'https://twitter.com/M4koCh4n',
        telegram: 'https://t.me/m4koch4n',
        github: '',
      },
      {
        id: 5,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/nikita_s.png'),
        name: 'Nikita S.',
        role: 'Blockchain Engineer',
        linkedin: 'https://www.linkedin.com/in/nikita-slezkin-859123215/',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 6,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/undefined.png'),
        name: 'Viktor P.',
        role: 'Blockchain Engineer',
        linkedin: 'https://www.linkedin.com/in/viktor-paramonov-7b64371a7/',
        twitter: '',
        telegram: '',
        github: 'https://github.com/valpaq',
      },
      {
        id: 7,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/vasiliy_p.png'),
        name: 'Vasiliy P.',
        role: 'QA Specialist',
        linkedin: 'https://www.linkedin.com/in/vasiliy-pokrovskiy-2955a7229/',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 8,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/undefined.png'),
        name: 'Join our team',
        role: '',
        contact: 'Contact us',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 9,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/undefined.png'),
        name: 'Join our team',
        role: '',
        contact: 'Contact us',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: '',
      },
    ],
  }),

  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),
  },
};
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
  .team-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .title {
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .team-container {
    margin: 0 auto 40px auto;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .title {
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .team-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
  }

  .team-container {
    margin: 0 auto 80px auto;
  }
}

.team-container {
  max-width: 1180px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
