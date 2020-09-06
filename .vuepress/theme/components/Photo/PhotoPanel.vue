<template>
  <div
    v-if="item && item.frontmatter"
    :class="blockClassName">

    <router-link
      :to="item.path">

      <div
        :class="$veg.b(blockClassName, 'image-wrapper')">

        <img
          v-if="item.frontmatter.picture"
          :class="$veg.b(blockClassName, 'image')"
          :src="$withBase(item.frontmatter.picture)"
          alt="">

      </div>

      <div :class="$veg.b(blockClassName, 'title')">
        {{ item.frontmatter.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['item', 'doubleSize'],
    computed: {
      blockClassName() {
        return this.$veg.b(
          'photo-panel',
          null,
          this.doubleSize ? 'double': null
        );
      }
    }
  };
</script>

<style lang="scss">

  .photo-panel {
    display: flex;
    background: white;
    width: 307px;
    height: 430px;
    overflow: hidden;

    &__image-wrapper {
      width: 308px;
      height: 198px;
    }

    &__image {
      width: 100%;
    }

    &__title {
      color: #000;
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
    }
  }

  .photo-panel--double {
    display: flex;
    background: white;
    width: 645px;
    height: 430px;
    overflow: hidden;

    &__image-wrapper {
      width: 645px;
      height: 430px;
      position: absolute;
    }

    &__image {
      width: 100%;
      height: 100%;
    }

    &__title {
      color: #fff;
      font-size: 24px;
      line-height: 28px;
      padding: 40px 30px;
      position: relative;
      text-transform: uppercase;
      max-width: 350px;
      top: 278px;
      left: 30px;
    }
  }

</style>
