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
import TeamMemberCard from '@/components/Team/TeamMemberCard.vue';

export default {
  name: 'Team',
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
        picture: require('@/assets/team/nikita_s.png'),
        name: 'Nikita S.',
        role: 'Tech Lead, CTO',
        linkedin: 'https://www.linkedin.com/in/nikita-slezkin-859123215/',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 3,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/alex_a.png'),
        name: 'Alex A.',
        role: 'Project Manager',
        linkedin: 'https://www.linkedin.com/in/aleks-andr/',
        twitter: '',
        telegram: '',
        github: '',
      },
      {
        id: 4,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/viktor.png'),
        name: 'Viktor',
        role: 'Blockchain Engineer',
        linkedin: 'https://www.linkedin.com/in/viktor-paramonov-7b64371a7/',
        twitter: '',
        telegram: '',
        github: 'https://github.com/valpaq',
      },
      {
        id: 5,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/ramil_a.png'),
        name: 'Ramil A.',
        role: 'Blockchain Engineer',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: 'https://github.com/montyp0x',
      },
      {
        id: 6,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/matvey_b.png'),
        name: 'Matvey',
        role: 'Frontend Lead',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: 'https://github.com/matt5346',
      },
      {
        id: 7,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/leonid.png'),
        name: 'Leo',
        role: 'Fullstack engineer',
        linkedin: '',
        twitter: '',
        telegram: '',
        github: 'https://github.com/chpotl',
      },
      {
        id: 8,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/maria_m.png'),
        name: 'Maria M.',
        role: 'Marketing Lead',
        linkedin: 'https://www.linkedin.com/in/maria-moiseyenko-193b69a2',
        twitter: '',
        telegram: 'https://t.me/Chilli_Moses',
        github: '',
      },
      {
        id: 9,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/polina.png'),
        name: 'Polina T.',
        role: 'Head of Design',
        linkedin: '',
        twitter: 'https://twitter.com/M4koCh4n',
        telegram: 'https://t.me/m4koch4n',
        github: '',
      },
      {
        id: 10,
        // eslint-disable-next-line global-require
        picture: require('@/assets/team/konstantin_r.png'),
        name: 'Konstantin R.',
        role: 'Backend developer',
        linkedin: 'https://www.linkedin.com/in/rbkn',
        twitter: '',
        telegram: '',
        github: 'https://github.com/rbkn99',
      },
      {
        id: 11,
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
      // {
      //   id: 10,
      //   // eslint-disable-next-line global-require
      //   picture: require('@/assets/team/undefined.png'),
      //   name: 'Join our team',
      //   role: '',
      //   contact: 'Contact us',
      //   linkedin: '',
      //   twitter: '',
      //   telegram: '',
      //   github: '',
      // },
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
    margin-bottom: 20px;
  }

  .team-card-container {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 10px;
    width: 100%;
  }

  .team-container {
    margin: 0 auto 40px auto;
    padding: 0 20px;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .title {
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .team-card-container {
    gap: 10px;
    width: 100%;
  }

  .team-card-container {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 10px;
    width: 100%;
  }
  .team-container {
    margin: 0 auto 80px auto;
    padding: 0 20px;
  }
}

@media only screen and (min-width: 1024px) {
  .team-card-container {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    gap: 10px;
    width: 100%;
  }
}

@media only screen and (min-width: 1240px) {
  .team-card-container {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
    gap: 10px;
    width: 100%;
  }
}

@media only screen and (max-width: 576px) {
  .team-card-container {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
}

.team-container {
  max-width: 1180px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
