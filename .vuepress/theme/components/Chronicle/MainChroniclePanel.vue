<template>

  <div
    class="main-chronicle-panel"
    v-if="item && item.frontmatter">

    <router-link :to="item.path" style="width: 100%">
      <div class="main-chronicle-panel__image-wrapper">

        <p>
          <img
            class="main-chronicle-panel__image"
            v-if="item.frontmatter.picture"
            :src="$withBase(item.frontmatter.picture)"
            alt="">

        <div class="main-chronicle-panel__title">
          {{ item.frontmatter.title }}
        </div>

        <div class="main-chronicle-panel__description">
          {{ item.frontmatter.description }}
        </div>

        <div class="main-chronicle-panel__more-details">
          Подробнее
        </div>
      </div>
    </router-link>
  </div>

</template>


<script>
  export default {
    props: ['item']
  };
</script>

<style lang="scss">

  .main-chronicle-panel {

    display: flex;
    background: #E6D4B6;
    width: 645px;
    height: 430px;
    padding: 15px;
    margin: 15px;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      text-transform: uppercase;
      color: #000000;
      padding-bottom: 15px;
    }

    &__description {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: #000000;
    }

    &__image-wrapper {
      width: 100%;
      height: 100%;
    }

    &__image {
      -webkit-box-shadow: 10px 10px 0px 0px rgba(213, 174, 117, 1);
      -moz-box-shadow: 10px 10px 0px 0px rgba(213, 174, 117, 1);
      box-shadow: 10px 10px 0px 0px rgba(213, 174, 117, 1);
      float: left;
      margin-right: 15px;
      margin-bottom: 11px;
    }

    &__more-details {
    }
  }

</style>
