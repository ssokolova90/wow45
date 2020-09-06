<template>
  <div
    v-if="item && item.frontmatter"
    class="chronicle-detail-panel">

    <div class="chronicle-detail-panel__image-wrapper">
      <img
        class="chronicle-detail-panel__image"
        v-if="item.frontmatter.picture"
        :src="$withBase(item.frontmatter.picture)"
        alt="">
    </div>

    <div class="chronicle-detail-panel__person">
      {{ item.frontmatter.first_name }}
      {{ item.frontmatter.last_name }}
    </div>

    <div class="chronicle-detail-panel__position">
      {{ item.frontmatter.position }}
    </div>

    <slot>
    </slot>
  </div>

</template>

<script>
  export default {
    params: ['item']
  }
</script>

<style lang="scss">

  .chronicle-detail-panel {

    &__image-wrapper {
      position: relative;
    }

    &__image {
    }

    &__person {
      color: #000;
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
      position: relative;
      top: -160px;
    }

    &__position {
      color: #D5AE75;
      font-size: 13px;
      line-height: 18px;
      padding: 0 30px;
      position: relative;
      top: -169px;
    }
  }

</style>