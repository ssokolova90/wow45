<template>
  <div class="photo-page">

    <div class="photo-page__title">
      Фотогалерея
    </div>

    <div class="photo-page__posts">

      <photo-panel
        v-for="(photo, index) in $veg.filterPages($site.pages, path)"
        :item="photo"
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
    props: ['path']
  };

</script>

<style lang="scss">

  /*@import './Photo.scss';*/
</style>
