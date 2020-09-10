<template>
  <header class="navbar">

    <router-link
      :to="$localePath"
      class="navbar__home">

      <img
        v-if="$site.themeConfig.logo"
        class="navbar__logo"
        src="$site.themeConfig.logo"
        :alt="$siteTitle">

    </router-link>

    <main-menu
      :modifier="'navbar'"
      :items="mainMenuItems">
    </main-menu>

  </header>
</template>

<script>
  export default {

    props: ['modifier'],
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

  @import 'DefaultNavbar';
  @import 'MainNavbar';

</style>