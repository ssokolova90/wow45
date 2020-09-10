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

  .news-feed {

    &__title {
      font-size: 30px;
      color: #000;
      padding: 40px 30px;
      text-transform: uppercase;
    }

    &__posts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 15px;
    }
  }

</style>
