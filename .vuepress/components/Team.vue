<template>

  <div class="team">

    <div class="team__title">
      Команда проекта
    </div>

    <div class="team__posts">

      <team-panel
        v-for="(team, index) in $veg.filterPages($site.pages, path)"
        :key="index"
        item="team">
      </team-panel>

    </div>
  </div>

</template>

<script>

  import TeamPanel
    from '../theme/components/Team/TeamPanel';

  export default {
    components: {
      TeamPanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  .team {

    &__title {
      font-size: 30px;
      color: #000;
      padding: 40px 30px;
      text-transform: uppercase;
    }

    &__posts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 15px;
    }
  }

</style>
