<template>
  <header
    :class="blockClassName">

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

      deviceModifier() {

        const device = this.isMobile
          ? 'mobile'
          : 'desktop';

        if (!this.modifier) {
          return device;
        }

        return this.modifier + '-' + device;
      },

      blockClassName() {
        return this.$veg.b(
          'navbar',
          null,
          this.deviceModifier
        );
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