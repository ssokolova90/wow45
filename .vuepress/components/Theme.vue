<template>
  <div class="theme">

    <div class="theme__title">
      Темы парада памяти
    </div>

    <div class="theme__posts">

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
    name: 'Theme',
    props: ['path'],
    components: {
      ThemePanel
    }
  };
</script>


<style lang="scss">

  /*@import './Theme.scss';*/

</style>
