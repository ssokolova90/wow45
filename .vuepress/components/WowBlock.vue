<template>
  <div class="wow-block">

      <main-chronicle-panel
        v-for="lastTheme in $veg.filterPages($site.pages, '/themes').slice(0, 1)"
        :item="lastTheme">
      </main-chronicle-panel>

      <chronicle-panel
        v-for="people in this.$veg.filterPages($site.pages, '/people').slice(0, 2)"
        :item="people">
      </chronicle-panel>

  </div>
</template>

<script>
  import MainChroniclePanel
    from "../theme/components/Chronicle/MainChroniclePanel";

  import ChroniclePanel
    from "../theme/components/Chronicle/ChroniclePanel";

  export default {
    name: 'WowBlock',
    components: {
      ChroniclePanel,
      MainChroniclePanel
    },
  };
</script>



<style lang="scss">

  .wow-block {
  }

  /*  padding-top: 15px;*/

  /*  a {*/
  /*    font-weight: 500;*/
  /*    color: #000000;*/
  /*  }*/

  /*  &__title {*/
  /*    font-size: 30px;*/
  /*    color: #000;*/
  /*    padding: 40px 30px;*/
  /*    text-transform: uppercase;*/
  /*  }*/

  /*  .wow-block-posts {*/
  /*    display: flex;*/
  /*    flex-direction: row;*/
  /*    flex-wrap: wrap;*/
  /*    padding-left: 15px;*/
  /*  }*/

  /*  .wrapper {*/
  /*    display: flex;*/
  /*    flex: 1 1 auto;*/
  /*    width: 308px;*/
  /*    border: 10px solid transparent;*/
  /*    padding-top: 7px;*/
  /*  }*/

  /*}*/
</style>