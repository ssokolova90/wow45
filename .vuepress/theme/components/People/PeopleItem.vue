<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Участники
    </div>

    <div :class="$e('posts')">

      <people-panel
        v-for="(people, index) in $items($page.frontmatter.Member)"
        :key="index"
        :item="people">
      </people-panel>
    </div>
  </div>
</template>

<script>

  import PeoplePanel
    from './PeoplePanel';

  export default {
    name: 'PeopleItem',
    props: ['path'],
    components: {
      PeoplePanel
    },
    mounted() {
      console.log(this.$page);
    }
  };
</script>

<style lang="scss">

  @import 'PeopleItemDesktop';
  @import 'PeopleItemMobile';
</style>
