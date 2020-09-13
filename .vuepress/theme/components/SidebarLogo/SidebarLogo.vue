<template>

  <router-link
    :to="$localePath"
    :class="blockClassName">

    <img
      :src="logoUrl"
      v-if="logoUrl"
      :alt="$siteTitle"
      :class="$veg.b(blockClassName, 'image')">

  </router-link>

</template>


<script>

  export default {

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
      blockClassName() {
        return this.$veg.b(
          'sidebar-logo',
          null,
          this.isMobile ? 'mobile': 'desktop'
        );
      }
    }
  }
</script>

<style lang="scss">

  @import './SidebarLogoDesktop.scss';
  @import './SidebarLogoMobile.scss';

</style>