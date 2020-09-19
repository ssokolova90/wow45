<template>

  <div class="page">

    <div class="theme-details">

      <div class="theme-details__image-wrapper">
        <img
          class="theme-details__image"
          v-if="$page.frontmatter.picture"
          :src="$withBase($page.frontmatter.picture)"
          alt="">
      </div>
      <div class="theme-details__person">
        {{ $page.frontmatter.first_name }}
        {{ $page.frontmatter.last_name }}
      </div>

      <div class="theme-details__position">
        {{$page.frontmatter.position}}
      </div>


      <Content :custom="false"/>

    </div>

<!--    <Theme :path='"/themes"'>-->
<!--    </Theme>-->

  </div>

</template>

<script>
  export default {
  };
</script>

<style lang="scss">

  /*@import './ThemeDetailsDesktop.scss';*/
  /*@import './ThemeDetailsMobile.scss';*/
</style>