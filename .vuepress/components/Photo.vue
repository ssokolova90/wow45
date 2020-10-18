<template>
  <div :class="$blockClassName">

    <div :class="$e('title')">
      Фотогалерея
    </div>

    <div :class="$e('posts')">

      <photo-panel
        v-for="(photo, index) in $pages(path)"
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
    name: 'Photo',
    components: {
      PhotoPanel
    },
    props: ['path']
  };

</script>

<style lang="scss">

  @import './PhotoDesktop.scss';
  @import './PhotoMobile.scss';
</style>
