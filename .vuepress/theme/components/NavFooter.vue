<template>
  <div :class="$blockClassName">

    <main-menu
      :modifier="'nav-footer'">
    </main-menu>

  </div>
</template>

<script>
  export default {
    name: 'NavFooter',
    props: ['items']
  }
</script>

<style lang="scss">

  .nav-footer {

  }
</style>