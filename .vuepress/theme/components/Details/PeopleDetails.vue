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

    <People :path='"/people"'>
    </People>

  </div>

</template>

<script>
  export default {
  };
</script>

<style lang="scss">

  .people-details {
    margin: 15px;
    padding: 15px;
    background: white;
    min-height: 345px;

    &__image {
      float: left;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }

</style>