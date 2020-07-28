<template>
  <div class="page">

    <div class="chronicle-details">

      <div class="chronicle-details__image-wrapper">
        <img
          class="chronicle-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="chronicle-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="chronicle-details__position">
        {{$page.frontmatter.position}}
      </div>


      <Content :custom="false"/>

    </div>
  </div>

</template>

<script>
  export default {
  };
</script>

<style lang="stylus">
  .chronicle-details

    &__image-wrapper
      position absolute
      width 983px
      height 655px
      left 300px
      top 245px

</style>