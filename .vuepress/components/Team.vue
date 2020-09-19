<template>

  <div class="team">

    <div class="team__title">
      Команда проекта
    </div>

    <div class="team__posts">

      <team-panel
        v-for="(team, index) in $veg.filterPages($site.pages, path)"
        :key="index"
        :item="team">
      </team-panel>

    </div>
  </div>

</template>

<script>

  import TeamPanel
    from '../theme/components/Team/TeamPanel';

  export default {
    name: 'Team',
    components: {
      TeamPanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  /*@import './Team.scss';*/
</style>
