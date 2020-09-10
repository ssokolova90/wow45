<template>

  <router-link
    :to="$localePath"
    :class="sidebar-logo">

    <img
      src="$withBase($site.themeConfig.logo)"
      v-if="$site.themeConfig.logo"
      :alt="$siteTitle"
      class="sidebar-logo__image">

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

    }
  }
</script>

<style lang="scss">

  .sidebar-logo {
  }
</style>