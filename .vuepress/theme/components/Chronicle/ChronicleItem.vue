<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      {{ this.$page.frontmatter.title }}
    </div>


    <div :class="$e('posts')">

      <chronicle-panel
        v-for="post in $items($page.frontmatter.Chronicle)"
        :item="post">
      </chronicle-panel>

    </div>
  </div>
</template>

<script>
  import ChroniclePanel
    from './ChroniclePanel';

  export default {
    name: 'ChronicleItem',
    components: {
      ChroniclePanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  @import "ChronicleItemMobile";
  @import "ChronicleItemDesktop";

</style>
