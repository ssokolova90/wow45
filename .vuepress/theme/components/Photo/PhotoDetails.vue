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


<!--    <Photo :path='"/photo"'>-->
<!--    </Photo>-->

</template>

<script>
  export default {
  };
</script>

<style lang="scss">
  .photo-details {

    margin: 15px;
    padding: 15px;
    background: white;
    min-height: 360px;

    &__image {
      float: left;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
</style>