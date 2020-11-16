<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Хроника
    </div>


    <div :class="$e('posts')">

      <chronicle-panel
        v-for="post in $pages(path)"
        :item="post">
      </chronicle-panel>

    </div>
  </div>
</template>

<script>
  import ChroniclePanel
    from './ChroniclePanel';

  export default {
    name: 'Chronicle',
    components: {
      ChroniclePanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  @import "ChronicleMobile";
  @import "ChronicleDesktop";

</style>
