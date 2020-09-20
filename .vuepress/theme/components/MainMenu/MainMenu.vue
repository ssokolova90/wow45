<template>

  <div
    :class="$blockClassName">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="$e('item')">

      <router-link
        :class="$e('item-link')"
        :to="item.link">

        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Menu',
    props: ['items'],
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
