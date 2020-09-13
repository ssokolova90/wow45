<template>
  <div class="news-feed">

    <div class="news-feed__title">
      Новости
    </div>

    <div class="news-feed__posts">

      <theme-panel
        v-for="(chronicle, index) in $veg.filterPages($site.pages, '/chronicle')"
        :item="chronicle"
        :key="index"
        :doubleSize="index < 2">

      </theme-panel>

    </div>
  </div>

</template>


<script>

  import ThemePanel
    from '../theme/components/Theme/ThemePanel';

  export default {
    components: {
      ThemePanel
    },
  };
</script>

<style lang="scss">

  /*@import './NewsFeed.scss';*/
</style>
