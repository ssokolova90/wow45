<template>

 <div
    v-if="item && item.frontmatter"
    :class="blockClassName">

    <router-link :to="item.path">
      <div :class="$veg.b(blockClassName, 'image-wrapper')">
        <img
          :class="$veg.b(blockClassName, 'image')"
          v-if="item.frontmatter.picture"
          :src="$withBase(item.frontmatter.picture)"
          alt="">
      </div>
      <div
        v-if="index > 1"
        :class="$veg.b(blockClassName, 'theme')">
        Темы парада памяти
      </div>

      <div :class="$veg.b(blockClassName, 'title')">
        {{ item.frontmatter.title }}
      </div>

      <div :class="$veg.b(blockClassName, 'event-date')">
        {{ $veg.formatDate(item.frontmatter.event_date) }}
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
          'theme-panel',
          null,
          this.doubleSize ? 'double': null
        );
      }
    }
  };
</script>

<style lang="scss">

  .theme-panel {
    display: flex;
    background: white;
    width: 307px;
    height: 430px;
    overflow: hidden;

    &__image-wrapper {
      width: 308px;
      height: 198px;

      &__image {
        width: 100%;
      }

      &__title {
        color: #3C3C3B;
        font-size: 24px;
        line-height: 28px;
        top: 40px;
        left: 30px;
        position: relative;
      }

      &__theme {
        color: #575756;
        position: relative;
        top: 15px;
        left: 30px;
        font-size: 13px;
        line-height: 18px;
        font-style: normal;
        font-weight: normal;
      }

      &__event-date {
        color: #575756;
        position: relative;
        top: 145px;
        left: 30px;
        font-size: 13px;
        line-height: 18px;
        font-style: normal;
        font-weight: normal;
      }
    }
  }


  .theme-panel--double {
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
      height: 430px;
    }

    &__title {
      color: #FFFFFF;
      font-size: 24px;
      line-height: 28px;
      position: relative;
      text-transform: uppercase;
      max-width: 350px;
      top: 311px;
      left: 30px;
    }

    &__theme {
      color: #FFFFFF;
      position: relative;
      top: 210px;
      left: 30px;
      font-size: 13px;
      line-height: 18px;
    }

    &__event-date {
      color: #FFFFFF;
      position: relative;
      top: 369px;
      left: 30px;
      font-size: 13px;
      line-height: 18px;
    }
  }

</style>