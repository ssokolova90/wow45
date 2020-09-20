<template>

  <div :class="$blockClassName">

    <div :class="$e('title')">
      Команда проекта
    </div>

    <div :class="$e('posts')">

      <team-panel
        v-for="(team, index) in $pages(path)"
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

  /*@import './TeamDesktop.scss';*/
  /*@import './TeamMobile.scss';*/
</style>
