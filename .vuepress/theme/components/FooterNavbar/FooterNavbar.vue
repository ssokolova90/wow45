<template>

  <footer :class="$blockClassName">

    <div :class="$e('title')">

      <div>
        © Парад Памяти, посвящённый военному параду в г. Куйбышеве 7 ноября 1941 года.
      </div>

      <social-networks style="padding-top: 30px">
      </social-networks>

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

  import SocialNetworks
    from '../SocialNetworks/SocialNetworks.vue';

  export default {
    name: 'FooterNavbar',
    components: {
      SocialNetworks,
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

