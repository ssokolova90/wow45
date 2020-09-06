<template>
  <div class="page">

    <div class="default-details">

      <div class="default-details__image-wrapper">
        <img
          class="default-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="default-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="default-details__position">
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

<style lang="scss">

  .default-details {
  }

</style>