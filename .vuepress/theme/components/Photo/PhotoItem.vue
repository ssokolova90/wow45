<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Фотогалерея
    </div>

    <div :class="$e('posts')">

      <photo-item-panel
        v-for="(photo, index) in  $items($page.frontmatter.Photo)"
        :item="photo"
        :key="index"
        :doubleSize="index < 2">

      </photo-item-panel>

    </div>
  </div>

</template>

<script>

  import PhotoItemPanel
    from './PhotoItemPanel';

  export default {
    name: 'PhotoItem',
    components: {
      PhotoItemPanel
    },
    props: ['path']
  };

</script>

<style lang="scss">

  @import 'PhotoItemDesktop';
  @import 'PhotoItemMobile';
</style>
