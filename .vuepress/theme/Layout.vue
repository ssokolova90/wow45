<template>

  <component
    v-if="layoutPage"
    :is="layoutPage">
  </component>

</template>


<script>

  import LayoutDefault
    from './components/LayoutDefault/LayoutDefault.vue';

  import LayoutMain
    from './components/LayoutMain/LayoutMain.vue';

  export default {

    components: {
      LayoutDefault,
      LayoutMain,
    },

    computed: {
      layoutPage() {
        return this.$veg.isMainPage(this.$page)
          ? 'LayoutMain'
          : 'LayoutDefault';
      }
    }
  }
</script>

<style lang="scss">

  @import "./scss/reset";
</style>