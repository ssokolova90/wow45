<template>

  <div :class="$blockClassName">

    <div :class="$e('details')">

      <div :class="$e('image-wrapper')">
        <img
          :class="$e('image')"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div :class="$e('person')">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div :class="$e('position')">
        {{$page.frontmatter.position}}
      </div>

      <div :class="$e('content')">
        <Content :custom="false"/>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'VideoDetails'
  };
</script>

<style lang="scss">

  /*@import './VideoDetailsDesktop.scss';*/
  /*@import './VideoDetailsMobile.scss';*/

</style>