<template>

  <footer class="footer">

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

  @import './Footer.scss';
</style>

