<template>
  <div class="photo-page">

    <div class="photo-page__title">
      Фотогалерея
    </div>

    <div class="photo-page__posts">

      <photo-panel
        v-for="(photo, index) in $veg.filterPages($site.pages, path)"
        item="photo"
        :key="index"
        :doubleSize="index < 2">

      </photo-panel>

    </div>
  </div>

</template>

<script>

  import PhotoPanel
    from '../theme/components/Photo/PhotoPanel';

  export default {
    components: {
      PhotoPanel
    },
  };

</script>

<style lang="scss">

  .photo-page {

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
