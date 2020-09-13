<template>
  <div class="chronicle">

    <div class="chronicle__title">
      Хроника
    </div>

    <div class="chronicle__posts">

      <chronicle-panel
        v-for="post in $veg.filterPages($site.pages, path)"
        :item="post">
      </chronicle-panel>

    </div>
  </div>
</template>

<script>
  import ChroniclePanel
    from '../theme/components/Chronicle/ChroniclePanel';

  export default {
    components: {
      ChroniclePanel
    },
    props: ['path'],
  };
</script>

<style lang="scss">

  /*@import "./Chronicle.scss";*/

</style>
