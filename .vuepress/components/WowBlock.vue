<template>
  <div :class="$blockClassName">

    <div :class="$e('chronicle')">

      <main-chronicle-panel
        v-for="lastTheme in $pages('/themes', 1)"
        :item="lastTheme">
      </main-chronicle-panel>

      <people-panel
        v-for="people in $pages('/people', 2)"
        :item="people">
      </people-panel>

    </div>
  </div>
</template>

<script>
  import MainChroniclePanel
    from '../theme/components/Chronicle/MainChroniclePanel';

  import PeoplePanel
    from '../theme/components/People/PeoplePanel';

  export default {
    name: 'WowBlock',
    components: {
      PeoplePanel,
      MainChroniclePanel
    },
  };
</script>


<style lang="scss">

  @import './WowBlockDesktop.scss';
  @import './WowBlockMobile.scss';

</style>