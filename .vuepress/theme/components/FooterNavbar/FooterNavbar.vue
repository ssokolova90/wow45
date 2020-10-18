<template>

  <footer :class="$blockClassName">

    <div :class="$e('title')">
      © Парад Памяти, посвящённый военному параду в г. Куйбышеве 7 ноября 1941 года.
    </div>

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
    name: 'FooterNavbar',
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

  @import './FooterNavbarDesktop.scss';
  @import './FooterNavbarMobile.scss';
</style>

