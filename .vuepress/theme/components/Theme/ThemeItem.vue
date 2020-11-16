<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Темы парада памяти
    </div>

    <div :class="$e('posts')">

      <theme-panel
        v-for="(theme, index) in $items($page.frontmatter.theme)"
        :doubleSize="index < 2"
        :key="index"
        :item="theme">

      </theme-panel>
    </div>
  </div>

</template>


<script>

  import ThemePanel
    from './ThemePanel';

  export default {
    name: 'Theme',
    props: ['path'],
    components: {
      ThemePanel
    }
  };
</script>


<style lang="scss">

  @import 'ThemeItemDesktop';
  @import 'ThemeItemMobile';

</style>
