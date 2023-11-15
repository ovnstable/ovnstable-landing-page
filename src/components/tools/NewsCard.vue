<template>
  <div
    class="news-card-container"
    @click="openLink(postData.link)"
  >
    <div class="image-container">
      <img
        class="post-bg-img"
        :src="postData.imgLink"
        alt="Blogpost image"
      >
    </div>
    <div class="blog-title">
      <label v-html="postData.title"></label>
    </div>
    <div class="blog-date">
      <label>{{ postData.date }}</label>
    </div>
    <div class="content">
      <label>{{ postData.content }}</label>
    </div>
  </div>
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

  computed: {
  },

  created() {
  },

  methods: {

    openLink(url) {
      window.open(url, '_blank').focus();
    },
  },
};
</script>

<style scoped>
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
        border-radius: 30px 0 0 0;
        width: auto;
        height: 150px;
    }
}

/* desktop */
@media only screen and (min-width: 769px) {
    .blog-title {
        font-size: 28px;
        line-height: 30px;
    }

   .blog-date {
       font-size: 16px;
       line-height: 30px;
   }

    .post-bg-img {
        width: auto;
        height: 200px;
    }

    .post-bg-img:first-child {
      width: auto;
      height: 200px;
      border-radius: 30px 0 0 0;
    }
}

.news-card-container {
    background-color: #FFFFFF;
    text-align: start;
    border: 1px solid #0F172A;
    border-bottom: 2px solid #0F172A;
}

.news-card-container:first-of-type {
    background-color: #FFFFFF;
    text-align: start;
    border-radius: 30px 0 0 30px;
}

.image-container {
    display: flex;
    height: auto;
}

.blog-title {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 600;
    color: #0F172A;
    padding: 30px;
}

.blog-date {
    color: #0F172A;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 600;
}

.news-card-container {
    cursor: pointer !important;
}
</style>
