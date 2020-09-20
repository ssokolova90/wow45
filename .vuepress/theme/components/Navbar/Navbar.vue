<template>
  <header
    :class="$blockClassName">

    <sidebar-logo>
    </sidebar-logo>

    <main-menu
      :modifier="modifier"
      :items="mainMenuItems">
    </main-menu>

  </header>
</template>

<script>

  import SidebarLogo
    from '../SidebarLogo/SidebarLogo';

  import MainMenu
    from '../MainMenu/MainMenu';

  export default {
    name: 'Navbar',
    components: {
      SidebarLogo,
      MainMenu
    },
    props: ['modifier'],
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

  @import './NavbarDefaultDesktop';
  @import './NavbarDefaultMobile';
  @import './NavbarMainDesktop';
  @import './NavbarMainMobile';

</style>