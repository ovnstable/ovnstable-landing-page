<template>
  <div class="blog-container">
    <div class="header-title-container">
      <div class="title">Follow Our Updates</div>
      <div v-if="!isMobile">
        <button
          class="button shadow"
          @click="openLinkBlank('https://overnight.fi/blog/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/blog/')"
        >
          subscribe
        </button>
      </div>
      <div v-else>
        <button
          class="button-mobile shadow"
          @click="openLinkBlank('https://overnight.fi/blog/')"
          @mouseup.middle="handleMiddleClick($event, 'https://overnight.fi/blog/')"
        >
          subscribe
        </button>
      </div>
    </div>
    <div
      class="blog-cards-container"
      @mousemove="onMouseMove"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      :style="{ transform: `translateX(${currentX}px)` }"
    >
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
    mouseX: 0,
    currentX: 0,
    isMouseOver: false,
  }),

  computed: {
    ...mapState('device', [
      'deviceType',
      'deviceOrientation',
      'isMobile',
      'isTablet',
      'isDesktop',
    ]),

    componentStyle() {
      return {
        transform: `translateX(${this.currentX}px)`,
      };
    },
  },

  async created() {
    try {
      const response = await fetch(
        'https://overnight.fi/blog/wp-json/wp/v2/posts/?per_page=10',
      );
      const posts = await response.json();
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      const blogPostsPromises = posts.map(async (post) => {
        const dateObj = new Date(post.date);
        const formattedDate = `${dateObj.getFullYear()}/${
          dateObj.getMonth() + 1
        }/${dateObj.getDate()}`;

        const imgLink = await this.getImgLink(post.id);

        // Strip HTML tags
        const plainTextContent = post.content.rendered.replace(/<[^>]*>?/gm, '');

        // Extract the first sentence
        const firstSentence = `${plainTextContent.split('. ')[0]}.`;

        return {
          id: post.id,
          date: formattedDate,
          title: post.title.rendered,
          link: post.link,
          content: firstSentence,
          imgLink,
        };
      });

      this.blogCards = await Promise.all(blogPostsPromises);
    } catch (reason) {
      console.log('Error get data: ', reason);
    }

    window.addEventListener('mousemove', this.onMouseMove);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
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

      await fetch(
        `https://overnight.fi/blog/wp-json/wp/v2/media?media_type=image&parent=${id}`,
        {},
      )
        .then((value) => value.json())
        .then((value) => {
          console.log('Value:', value);
          if (passedId === 783) {
            result = value[3].source_url;
          } else if (passedId === 805) {
            passedId = 806;
            result = this.getImgForPost(passedId);
          } else {
            result = value[0].source_url;
          }
        })
        .catch((reason) => {
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
        })
        .catch((reason) => {
          console.log(`Error get data: ${reason}`);
        });

      return result;
    },

    onMouseMove(e) {
      if (!this.isMouseOver) return;

      const deltaX = e.clientX - this.mouseX;
      this.mouseX = e.clientX;
      this.currentX -= deltaX;
    },

    onMouseEnter() {
      this.isMouseOver = true;
    },

    onMouseLeave() {
      this.isMouseOver = false;
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
  border-radius: 30px 0 0 30px;
}

.shadow:hover {
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 5);
}
</style>
