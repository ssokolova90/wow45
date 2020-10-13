<template>
  <div :class="$blockClassName">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ContentBlock',
  }
</script>

<style lang="scss">

  @import './ContentBlockDesktop';
  @import './ContentBlockMobile';
</style>