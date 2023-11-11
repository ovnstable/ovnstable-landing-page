<template>
    <div class="team-container">
        <div class="title">
            Our plus team
        </div>
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
import {mapState} from "vuex";
import TeamMemberCard from "@/components/tools/TeamMemberCard";

export default {
    name: "TeamComponent",
    components: {
        TeamMemberCard

    },

    data: () => ({
        teamMembers: [
            {
                id: 1,
                picture: require('@/assets/team/max_e.svg'),
                name: 'Max E.',
                role: 'Founder & CEO',
                linkedin: 'https://www.linkedin.com/in/maxim-ermilov/',
                twitter: 'https://twitter.com/maxim_ermilov',
                telegram: 'https://t.me/wmermus',
                github: '',
            },
            {
                id: 2,
                picture: require('@/assets/team/yaro_p.svg'),
                name: 'Yaro P.',
                role: 'Co-Founder & Tech Lead',
                linkedin: 'https://www.linkedin.com/in/yarik-pavlov/',
                twitter: '',
                telegram: '',
                github: '',
            },
            {
                id: 3,
                picture: require('@/assets/team/roman_g.svg'),
                name: 'Roman G.',
                role: 'Frontend Developer',
                linkedin: 'https://www.linkedin.com/in/roman-golovlyov-2753611b3/',
                twitter: 'https://twitter.com/RGolovlyov',
                telegram: '',
                github: 'https://github.com/rrr-source',
            },
            {
                id: 4,
                picture: require('@/assets/team/slava_m.svg'),
                name: 'Slava M.',
                role: 'Marketing Lead',
                linkedin: '',
                twitter: 'https://twitter.com/eric_phoen1x',
                telegram: '',
                github: '',
            },
            {
                id: 4,
                picture: require('@/assets/team/polina_t.svg'),
                name: 'Polina T.',
                role: 'Head of Design',
                linkedin: '',
                twitter: 'https://twitter.com/M4koCh4n',
                telegram: 'https://t.me/m4koch4n',
                github: '',
            },
            {
                id: 5,
                picture: require('@/assets/team/nikita_s.svg'),
                name: 'Nikita S.',
                role: 'Blockchain Engineer',
                linkedin: 'https://www.linkedin.com/in/nikita-slezkin-859123215/',
                twitter: '',
                telegram: '',
                github: '',
            },
            {
                id: 6,
                picture: require('@/assets/team/undefined.svg'),
                name: 'Viktor P.',
                role: 'Blockchain Engineer',
                linkedin: 'https://www.linkedin.com/in/viktor-paramonov-7b64371a7/',
                twitter: '',
                telegram: '',
                github: 'https://github.com/valpaq',
            },
            {
                id: 7,
                picture: require('@/assets/team/vasiliy_p.svg'),
                name: 'Vasiliy P.',
                role: 'QA Specialist',
                linkedin: 'https://www.linkedin.com/in/vasiliy-pokrovskiy-2955a7229/',
                twitter: '',
                telegram: '',
                github: '',
            },
            {
                id: 8,
                picture: require('@/assets/team/undefined.svg'),
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
                picture: require('@/assets/team/undefined.svg'),
                name: 'Join our team',
                role: '',
                contact: 'Contact us',
                linkedin: '',
                twitter: '',
                telegram: '',
                github: '',
            },
        ]
    }),

    computed: {
        ...mapState('device', ['deviceType', "deviceOrientation", 'isMobile', "isTablet", 'isDesktop']),
    },

}
</script>


<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
    .team-card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px; /* Adjust gap as needed */
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
        justify-content: flex-start; /* Centers the cards in the container */
        gap: 10px; /* Space between cards */
        width: 100%; /* Ensures the container takes full width */
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
