<template>

  <footer :class="$blockClassName">

    <main-menu
      modifier="footer"
      :items="mainMenuItems">
    </main-menu>

  </footer>

</template>

<script>

  import MainMenu
    from '../MainMenu/MainMenu.vue';

  export default {
    name: 'Footer',
    components: {
      MainMenu
    },
    computed: {
      mainMenuItems() {
        return this.$themeLocaleConfig.nav
          || this.$site.themeConfig.nav
          || [];
      },
    }
  }
</script>

<style lang="scss">

  @import './FooterDesktop.scss';
  @import './FooterMobile.scss';
</style>

