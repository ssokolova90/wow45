<template>

  <div :class="$blockClassName">

    <div
      v-if="$page && $page.frontmatter && $page.frontmatter.picture"
      :class="$e('details')">

      <img
        v-if="$page.frontmatter.picture"
        :class="$e('image')"
        :src="$withBase($page.frontmatter.picture)"
        alt="">

    </div>


    <photo :path='"/photo"'>
    </photo>

  </div>

</template>

<script>
  export default {
    name: 'PhotoDetails'
  };
</script>


<style lang="scss">

  @import './PhotoDetailsDesktop.scss';
  @import './PhotoDetailsMobile.scss';
</style>