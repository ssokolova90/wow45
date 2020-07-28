<template>

  <div class="page">

    <div class="people-details">

      <div class="people-details__image-wrapper">
        <img
          class="people-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="people-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="people-details__position">
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
  .people-details {
  }

</style>