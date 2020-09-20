<template>
  <ul :class="$blockClassName">

    <main-menu
      :modifier="'sidebar'"
      :items="mainMenuItems">
    </main-menu>
  </ul>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['items'],
    computed: {
      mainMenuItems() {
        return this.$themeLocaleConfig.nav
          || this.$site.themeConfig.nav
          || [];
      }
    }
  }
</script>

<style lang="scss">

  .sidebar {

  }
</style>