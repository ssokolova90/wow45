<template>
  <div class="people">
    <div class="people__title">
      Участники
    </div>

    <div class="people__posts">
      <PeoplePanel
        v-for="people in $veg.filterPages($site.pages, path)"
        :item="people">
      </PeoplePanel>
    </div>
  </div>
</template>

<script>
  export default {

    props: ["path"]
  };
</script>

<style lang="scss">

  .people {

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

    /*.wrapper {*/
    /*  display: flex;*/
    /*  flex: 1 1 auto;*/
    /*  width: 308px;*/
    /*  height: 346px;*/
    /*  border: 10px solid transparent;*/
    /*}*/
  }
</style>
