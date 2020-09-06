<template>
  <div
    v-if="item && item.frontmatter"
    class="people-panel">

    <router-link :to="item.path">
      <div class="people-panel__image-wrapper">
        <img
          class="people-panel__image"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div class="people-panel__person">
        {{ item.frontmatter.first_name }}
        {{ item.frontmatter.last_name }}
      </div>

      <div class="people-panel__position">
        {{ item.frontmatter.position }}
      </div>
    </router-link>
  </div>

</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">

  .people-panel {
    display: flex;
    background: white;
    width: 308px;
    overflow: hidden;

    &__image-wrapper {
      width: 308px;
      height: 360px;
    }

    &__image {
      width: 100%;
    }

    &__person {
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
      position: relative;
      top: -160px;
      color: white;
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