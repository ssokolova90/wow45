<template>

  <div :class="$blockClassName">

    <img src="/images/assets/main.jpg">
  </div>

</template>

<script>
  export default {
    name: 'MainPicture',
  }
</script>

<style lang="scss">

  @import './MainPictureDesktop.scss';
  @import './MainPictureMobile.scss';
</style>

