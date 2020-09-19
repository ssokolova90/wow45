<template>

  <div
    :class="$veg.b(blockClassName)">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="$veg.b(blockClassName, 'item')">

      <router-link
        :class="$veg.b(blockClassName, 'item-link')"
        :to="item.link">

        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['modifier', 'items'],
    computed: {
      blockClassName() {

        const deviceType = this.isMobile
          ? 'mobile'
          : 'desktop';

        const modifier = this.modifier === 'main'
          ? this.modifier + '-' + deviceType
          : this.modifier;

        return this.$veg.b('main-menu', null, modifier);
      }
    }
  }
</script>

<style lang="scss">

  @import './MainMenuDesktop';
  @import './MainMenuMobile';
  @import './MainMenuMainDesktop';
  @import './MainMenuMainMobile';
  @import './MainMenuFooterDesktop';
  @import './MainMenuFooterMobile';
  @import './MainMenuSidebarDesktop';
  @import './MainMenuSidebarMobile';
</style>
