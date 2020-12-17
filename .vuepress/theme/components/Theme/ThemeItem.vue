<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Темы парада памяти
    </div>

    <div :class="$e('posts')">

      <theme-album-card
          :items="$items($page.frontmatter.theme)">

      </theme-album-card>

    </div>

  </div>

</template>

<script>

  import ThemeAlbumCard
    from "./ThemeAlbumCard";

  import Theme
    from  './Theme';

  export default {
    name: 'Theme',
    props: ['path'],
    components: {
      ThemeAlbumCard,
      Theme
    }
  };
</script>


<style lang="scss">

  @import 'ThemeItemDesktop';
  @import 'ThemeItemMobile';

</style>
