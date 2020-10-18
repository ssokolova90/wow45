<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Темы парада памяти
    </div>

    <div :class="$e('posts')">

      <theme-panel
        v-for="(theme, index) in $pages(path)"
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

  @import './ThemeDesktop.scss';
  @import './ThemeMobile.scss';

</style>
