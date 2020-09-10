<template>

  <component
    v-if="layoutPage"
    :is="layoutPage">
  </component>

</template>


<script>

  import LayoutDefault from './LayoutDefault';
  import LayoutMain from './LayoutMain';

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