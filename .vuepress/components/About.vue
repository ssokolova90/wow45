<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Хроника
    </div>

    <div :class="$e('posts')">

      Тут будет размещена информация о нас
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

  @import "./AboutMobile.scss";
  @import "./AboutDesktop.scss";

</style>
