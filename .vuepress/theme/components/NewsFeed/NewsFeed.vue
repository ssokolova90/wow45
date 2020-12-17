<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Новости
    </div>

    <div :class="$e('posts')">

      <news-card
        v-for="(news, index) in $pages('/news')"
        :item="news"
        :key="index"
        :modifier=" index < 2 ? 'double' : null">

      </news-card>

    </div>
  </div>

</template>


<script>

  import ThemePanel
    from '../Theme/ThemePanel';

  import NewsCard
    from './NewsCard';

  export default {
    name: 'NewsFeed',
    components: {
      NewsCard
    },
  };
</script>

<style lang="scss">
  
  @import 'NewsFeedDesktop';
  @import 'NewsFeedMobile';
</style>
