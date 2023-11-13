<template>
  <div class="blog-container">
    <div class="header-title-container">
      <div class="title">
        Follow Our Updates
      </div>
      <div v-if="!isMobile">
        <button
          class="button"
          @click="openLinkBlank('https://overnight.fi/blog/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/blog/')"
        >
          subscribe
        </button>
      </div>
      <div v-else>
        <button
          class="button-mobile"
          @click="openLinkBlank('https://overnight.fi/blog/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/blog/')"
        >
          subscribe
        </button>
      </div>
    </div>
    <div class="blog-cards-container">
      <NewsCard
        v-for="item in blogCards"
        :key="item.id"
        :post-data="item"
        @mouseup="handleMiddleClick($event, item.link)"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/tools/NewsCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'BlogComponent',
  components: {
    NewsCard,
  },

  data: () => ({
    blogCards: [],
  }),

  computed: {
    ...mapState('device', ['deviceType', 'deviceOrientation', 'isMobile', 'isTablet', 'isDesktop']),
  },

  async created() {
    await fetch('https://overnight.fi/blog/wp-json/wp/v2/posts/?per_page=4', {})
      .then((value) => value.json())
      .then(async (value) => {
        value.sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log('Blogposts fetching:', value);
        // eslint-disable-next-line no-restricted-syntax
        for (const post of value) {
          const blogPost = {
            id: post.id,
            date: post.date,
            title: post.title.rendered,
            link: post.link,
          };
          // eslint-disable-next-line no-await-in-loop
          blogPost.imgLink = await this.getImgLink(blogPost.id);
          this.blogCards.push(blogPost);
        }
      }).catch((reason) => {
        console.log('Error get data: ', reason);
      });
  },

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

    async getImgLink(id) {
      let result = null;
      let passedId = id;

      await fetch(`https://overnight.fi/blog/wp-json/wp/v2/media?media_type=image&parent=${id}`, {})
        .then((value) => value.json())
        .then((value) => {
          if (passedId === 783) {
            result = value[3].source_url;
          } else if (passedId === 805) {
            passedId = 806;
            result = this.getImgForPost(id);
          } else {
            result = value[0].source_url;
          }
        }).catch((reason) => {
          console.log(`Error get data: ${reason}`);
        });

      return result;
    },

    async getImgForPost(id) {
      let result = null;

      await fetch(`https://overnight.fi/blog/wp-json/wp/v2/media/${id}`, {})
        .then((value) => value.json())
        .then((value) => {
          result = value.source_url;
        }).catch((reason) => {
          console.log(`Error get data: ${reason}`);
        });

      return result;
    },
  },
};
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 768px) {
    .title {
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
    }

    .header-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .blog-container {
        padding-right: 20px;
        padding-left: 20px;
        margin: 0 auto 40px auto;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .title {
        text-transform: uppercase;
        margin-right: 40px;
    }

    .header-title-container {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }

    .blog-container {
        margin: 0 auto 80px auto;
    }
}

.blog-container {
    max-width: 1180px;
}

.blog-cards-container {
    display: flex;
    border: 1px solid black;
    border-radius: 30px 0 0 30px;
}
</style>
