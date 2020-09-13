<template>
  <div class="people">

    <div class="people__title">
      Участники
    </div>

    <div class="people__posts">

      <people-panel
        v-for="(people, index) in $veg.filterPages($site.pages, path)"
        :key="index"
        :item="people">
      </people-panel>
    </div>
  </div>
</template>

<script>

  import PeoplePanel
    from '../theme/components/People/PeoplePanel';

  export default {
    name: 'People',
    props: ['path'],
    components: {
      PeoplePanel
    }
  };
</script>

<style lang="scss">

  /*@import './People.scss';*/
</style>
