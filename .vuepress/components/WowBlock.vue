<template>
  <div class="wow-block">

    <div class="wow-block__chronicle">

      <main-chronicle-panel
        v-for="lastTheme in $veg.filterPages($site.pages, '/themes').slice(0, 1)"
        :item="lastTheme">
      </main-chronicle-panel>

      <chronicle-panel
        v-for="people in this.$veg.filterPages($site.pages, '/people').slice(0, 2)"
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