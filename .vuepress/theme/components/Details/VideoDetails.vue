<template>

  <div class="page">

    <div class="video-details">

      <div class="video-details__image-wrapper">
        <img
          class="video-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="video-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="video-details__position">
        {{$page.frontmatter.position}}
      </div>
      
      <Content :custom="false"/>

    </div>
  </div>

</template>

</template>

<script>
  export default {
  };
</script>

<style lang="stylus">
  .video-details {
  }

</style>