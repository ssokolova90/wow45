<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Участники
    </div>

    <div :class="$e('posts')">

      <people-panel
        v-for="(people, index) in $pages(path)"
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
    name: 'People',
    props: ['path'],
    components: {
      PeoplePanel
    }
  };
</script>

<style lang="scss">

  @import 'PeopleDesktop';
  @import 'PeopleMobile';
</style>
