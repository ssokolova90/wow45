<template>
  <div class="chronicle">

    <div class="chronicle__title">
      Хроника
    </div>

    <chronicle-panel
      v-for="post in $veg.filterPages($site.pages, path)"
      :item="post">
    </chronicle-panel>

  </div>
</template>

<script>
  import ChroniclePanel
    from "../theme/components/Chronicle/ChroniclePanel";

  export default {
    components: {
      ChroniclePanel
    },
    props: ["path"],
  };
</script>

<style lang="scss">

  /*.chronicle {*/

  /*  &__title {*/
  /*    font-size: 30px;*/
  /*    color: #000;*/
  /*    padding: 40px 30px;*/
  /*    text-transform: uppercase;*/
  /*  }*/

  /*  .posts {*/
  /*    display: flex;*/
  /*    flex-direction: row;*/
  /*    flex-wrap: wrap;*/
  /*    padding-left: 15px;*/
  /*  }*/

  /*  .wrapper {*/
  /*    display: flex;*/
  /*    flex: 1 1 auto;*/
  /*    width: 645px;*/
  /*    height: 430px;*/
  /*    border: 10px solid transparent;*/
  /*  }*/

  /*  .chronicle {*/
  /*    display: flex;*/
  /*    background: white;*/
  /*    width: 645px;*/
  /*    height: 430px;*/
  /*    overflow: hidden;*/

  /*    &__image-wrapper {*/
  /*      width: 645px;*/
  /*      height: 430px;*/
  /*      position: absolute;*/
  /*    }*/

  /*    &__image {*/
  /*      width: 100%;*/
  /*      height: 100%;*/
  /*    }*/

  /*    &__title {*/
  /*      color: #fff;*/
  /*      font-size: 24px;*/
  /*      line-height: 28px;*/
  /*      padding: 40px 30px;*/
  /*      position: relative;*/
  /*      text-transform: uppercase;*/
  /*      max-width: 350px;*/
  /*      top: 278px;*/
  /*      left: 30px;*/
  /*    }*/
  /*  }*/
  /*}*/

</style>
