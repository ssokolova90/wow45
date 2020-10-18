<template>

  <div :class="$blockClassName">
  </div>

</template>

<script>
  export default {
    name: 'VideoPanel',
    props: ['item']
  }
</script>

<style lang="scss">

  @import './VideoPanelDesktop.scss';
  @import './VideoPanelMobile.scss';
</style>