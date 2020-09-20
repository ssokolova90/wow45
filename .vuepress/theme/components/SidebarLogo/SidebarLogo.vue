<template>

  <router-link
    :to="$localePath"
    :class="$blockClassName">

    <img
      :src="logoUrl"
      v-if="logoUrl"
      :alt="$siteTitle"
      :class="$e('image')">

  </router-link>

</template>


<script>

  export default {
    name: 'SidebarLogo',
    data() {
      return {
        screenWidth: 0
      }
    },
    computed: {
      logoUrl() {
        return this.isMobile
          ? this.$withBase(this.$site.themeConfig.mobileLogo)
          : this.$withBase(this.$site.themeConfig.logo);
      },
    }
  }
</script>

<style lang="scss">

  @import './SidebarLogoDesktop.scss';
  @import './SidebarLogoMobile.scss';

</style>