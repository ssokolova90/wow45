<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      {{ this.$page.frontmatter.title }}
    </div>

    <div :class="$e('posts')">

      <chronicle-album-card
          :items="$items($page.frontmatter.Chronicle)">

      </chronicle-album-card>
    </div>

    <chronicle :path="'/chronicle'">
    </chronicle>

  </div>
</template>

<script>

  import ChronicleAlbumCard
    from "./ChronicleAlbumCard";

  import Chronicle
    from "./Chronicle";

  export default {
    name: 'ChronicleItem',
    components: {
      ChronicleAlbumCard,
      Chronicle
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  @import "ChronicleItemMobile";
  @import "ChronicleItemDesktop";

</style>
