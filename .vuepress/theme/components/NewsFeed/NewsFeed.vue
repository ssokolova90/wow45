<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Новости
    </div>

    <div :class="$e('posts')">

      <news-card
        v-for="(news, index) in limitedNews"
        :item="news"
        :key="index"
        :modifier=" index < 2 ? 'double' : null">

      </news-card>

    </div>

    <div
        v-if="showNextButton"
      :class="$e('next-block')">

      <div
        @click="showNextPosts"
        :class="$e('next-button')">

        Показать еще
      </div>
    </div>

  </div>

</template>


<script>

  import NewsCard
    from './NewsCard';

  export default {
    name: 'NewsFeed',
    components: {
      NewsCard
    },
    data() {
      return {
        newsCount: 6
      }
    },
    computed: {
      news() {
        return this.$pages('/news') || [];
      },
      limitedNews() {
        return this.news.slice(0, this.newsCount);
      },
      showNextButton() {
        return (this.news.length > this.newsCount);
      }
    },
    methods: {
      showNextPosts() {

        this.newsCount = (this.newsCount + 4 < this.news.length)
            ? this.newsCount + 4
            : this.news.length;
      }
    }
  };
</script>

<style lang="scss">
  
  @import 'NewsFeedDesktop';
  @import 'NewsFeedMobile';
</style>
