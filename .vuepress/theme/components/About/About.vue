<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Парад памяти
    </div>

    <div :class="$e('posts')">

    </div>
  </div>
</template>

<script>

  export default {
    name: 'About',
    props: ['path'],
  };
</script>

<style lang="scss">

  @import "AboutMobile";
  @import "AboutDesktop";

</style>
