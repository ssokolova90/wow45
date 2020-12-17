<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Фотогалерея
    </div>

    <div :class="$e('posts')">

        <photo-album-card
          :items="$items($page.frontmatter.Photo)">

        </photo-album-card>
    </div>

    <photo :path='"/photo"'>
    </photo>

  </div>

</template>

<script>

  import PhotoItemPanel
    from './PhotoItemPanel';

  import PhotoAlbumCard
    from "./PhotoAlbumCard";

  import Photo
    from "./Photo";

  export default {
    name: 'PhotoItem',
    components: {
      PhotoItemPanel,
      PhotoAlbumCard,
      Photo
    },
    props: ['path']
  };

</script>

<style lang="scss">

  @import 'PhotoItemDesktop';
  @import 'PhotoItemMobile';
</style>
