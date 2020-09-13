<template>

  <div class="page">

    <div class="team-details">

      <div class="team-details__image-wrapper">
        <img
          class="team-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="team-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="team-details__position">
        {{ $page.frontmatter.position }}
      </div>

      <Content :custom="false"/>

    </div>

<!--    <team :path='"/team"'>-->
<!--    </team>-->

  </div>

</template>

<script>
  export default {
  };
</script>

<style lang="scss">

  /*@import './TeamDetails.scss';*/

</style>