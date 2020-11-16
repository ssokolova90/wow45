<template>

  <div :class="$blockClassName">

    <div :class="$e('title')">
      {{ $page.frontmatter.title }}
    </div>

    <div :class="$e('posts')">

      <team-person-panel
        v-for="(team, index) in $items($page.frontmatter.Member)"
        :key="index"
        :item="team">
      </team-person-panel>

    </div>
  </div>

</template>

<script>

  import TeamPersonPanel
    from './TeamPersonPanel';

  export default {
    name: 'TeamItem',
    components: {
      TeamPersonPanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  @import 'TeamItemDesktop';
  @import 'TeamItemMobile';
</style>
