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

  .chronicle {

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
