<template>

  <div :class="$blockClassName">

    <div :class="$e('title')">
      Видеоматериалы
    </div>

    <div :class="$e('posts')">

      <video-panel
        v-for="video in $pages(path)"
        :item="video">
      </video-panel>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Video',
    props: ['path'],
  };
</script>

<style lang="scss">

  @import 'VideoDesktop';
  @import 'VideoMobile';
</style>
