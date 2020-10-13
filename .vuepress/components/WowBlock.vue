<template>
  <div :class="$blockClassName">

    <div :class="$e('chronicle')">

      <main-chronicle-panel
        v-for="lastTheme in $pages('/themes', 1)"
        :item="lastTheme">
      </main-chronicle-panel>

      <chronicle-panel
        v-for="people in $pages('/people', 2)"
        :item="people">
      </chronicle-panel>

    </div>
  </div>
</template>

<script>
  import MainChroniclePanel
    from '../theme/components/Chronicle/MainChroniclePanel';

  import ChroniclePanel
    from '../theme/components/Chronicle/ChroniclePanel';

  export default {
    name: 'WowBlock',
    components: {
      ChroniclePanel,
      MainChroniclePanel
    },
  };
</script>


<style lang="scss">

  /*@import './WowBlockDesktop.scss';*/
  /*@import './WowBlockMobile.scss';*/

</style>