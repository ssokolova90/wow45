<template>
  <ul :class="$veg.b(blockClassName, 'image-wrapper')">

    <li
      v-for="(item, index) in items"
      :key="index"
      :class="$veg.b(blockClassName, '__item')">

      <router-link
        :class="$veg.b(blockClassName, '__item-link')"
        :to="item.path">

        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>

  export default {
    props: ['modifier', 'items'],
    computed: {
      blockClassName() {
        return this.$veg.b('main-menu', this.modifier);
      }
    }
  }
</script>

<style lang="scss">

  @import './NavbarMainMenu';
  @import './NavfooterMainMenu';
  @import './SidebarMainMenu';
</style>
