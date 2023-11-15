<template>
  <a class="news-card-container" :href="postData.link" target="_blank">
    <div class="image-container">
      <img class="post-bg-img" :src="postData.imgLink" alt="Blogpost image" />
    </div>
    <div class="new-card__content">
      <h1 class="blog-title" v-html="postData.title" />
      <div class="blog-date">{{ postData.date }}</div>
      <p class="content">{{ postData.content }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NewsCard',

  props: {
    postData: {
      type: Object,
      default: null,
    },
  },

  computed: {},

  created() {},

  methods: {
    openLink(url) {
      window.open(url, '_blank').focus();
    },
  },
};
</script>

<style lang="scss" scoped>
/* mobile */
@media only screen and (max-width: 768px) {
  .blog-title {
    font-size: 14px;
    line-height: 14px;
  }

  .blog-date {
    font-size: 12px;
    line-height: 30px;
  }

  .post-bg-img {
    height: 150px;
  }
}

/* desktop */
@media only screen and (min-width: 769px) {
  .blog-title {
    font-size: 28px;
    line-height: 30px;
  }

  .post-bg-img {
    height: 200px;
  }
}

.post-bg-img {
  width: 100%;
  object-fit: cover;
  transition: transform .2s ease;
}
.content {
  max-height: 3lh;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: #687386;
  font-size: 16px;
}

.blog-title {
  max-height: 2lh;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  min-height: 60px;
  transition: color .15s ease;
}

.new-card__content {
  padding: 30px 40px;
  min-height: 250px;
}

.blog-date {
  font-size: 22px;
  font-weight: 600;
}

.news-card-container {
  display: block;
  background-color: #ffffff;
  text-align: start;
  overflow: hidden;
  border: 1px solid rgb(15, 23, 41);
  border-bottom-width: 2px;

  &:hover {
    .blog-title {
      color: var(--ov-bg-secondary);
    }
    .post-bg-img {
      transform: scale(1.06);
    }
  }
}

.news-card-container:first-of-type {
  background-color: #ffffff;
  text-align: start;
}

.image-container {
  display: flex;
  height: auto;
  overflow: hidden;
}

.blog-title {
  color: #0f172a;
  font-size: 28px;
  font-weight: 600;
}

.blog-date {
  color: #0f172a;
  font-weight: 600;
}

.news-card-container {
  cursor: pointer !important;
}
</style>
