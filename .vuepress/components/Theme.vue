<template>
  <div class="theme-page">

    <div class="theme-page__title">
      Темы парада памяти
    </div>

    <div class="theme-page__posts">

      <theme-panel
        v-for="(theme, index) in $veg.filterPages($site.pages, path)"
        :doubleSize="index < 2"
        :key="index"
        :item="theme">

      </theme-panel>
    </div>
  </div>

</template>


<script>

  import ThemePanel
    from '../theme/components/Theme/ThemePanel';

  export default {
    props: ['path'],
    components: {
      ThemePanel
    }
  };
</script>


<style lang="scss">

  .theme-page {

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
