<template>

  <div class="photo-details">

    <div class="photo-detail-panel">

    </div>

    <div class="photo-details__image-wrapper">
      <img
        class="photo-details__image"
        v-if="$page.frontmatter.picture"
        :src="$withBase($page.frontmatter.picture)"
        alt="">
    </div>
    <div class="photo-details__person">
      {{ $page.frontmatter.first_name }}
      {{ $page.frontmatter.last_name }}
    </div>

    <div class="photo-details__position">
      {{$page.frontmatter.position}}
    </div>


    <Content :custom="false"/>

  </div>


<!--  <photo :path='"/photo"'>-->
<!--  </photo>-->

</template>

<script>
  export default {
  };
</script>


<style lang="scss">

  /*@import './PhotoDetails.scss';*/
</style>