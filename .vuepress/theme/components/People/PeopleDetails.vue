<template>

  <div>
    <div
      class="people-details"
      v-if="item && item.frontmatter">

      <div class="people-details__image-wrapper">
        <img
          class="people-details__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div class="people-details__person">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div class="people-details__position">
        {{ item.frontmatter.position }}
      </div>


      <Content :custom="false"/>

    </div>

    <People :path='"/people"'>
    </People>

  </div>

</template>

<script>
  export default {
    props: ['item']
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