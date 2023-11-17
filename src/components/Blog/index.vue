<template>
  <div class="blog-container">
    <div class="header-title-container">
      <div class="title">Follow Our Updates</div>
      <div>
        <Button
          class="button text-styling"
          text="Subscribe"
          @click="openLinkSelf('https://app.overnight.fi/blog')"
        />
      </div>
    </div>
    <swiper
      :slides-per-view="isDesktop ? 3 : isMobile ? 'auto' : 2"
      :space-between="0"
    >
      <swiper-slide
        v-for="item in blogCards"
        :key="item.id"
        :post-data="item"
      >
        <NewsCard
          :post-data="item"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import NewsCard from '@/components/Blog/NewsCard.vue';
import Button from '@/components/UI/Button/index.vue';
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.min.css';

export default {
  name: 'Blog',
  components: {
    NewsCard,
    Button,
    Swiper,
    SwiperSlide,
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

    onMouseEnter() {
      this.isMouseOver = true;
    },

    onMouseLeave() {
      this.isMouseOver = false;
    },
  },
};
</script>

<style lang="scss">
.swiper-container {
  overflow: visible!important;
}
.swiper-slide {
  &:first-child {
    border-radius: 30px 0 0 30px;

    .news-card-container {
      border-radius: 30px 0 0 30px;

      .post-bg-img {
        border-radius: 30px 0 0 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.blog-container {
  padding: 0 20px;
}
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