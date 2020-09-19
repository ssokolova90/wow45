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

  /*@import './PhotoPanelDesktop.scss';*/
  /*@import './PhotoPanelMobile.scss';*/
  /*@import './PhotoPanelDoubleDesktop.scss';*/
  /*@import './PhotoPanelDoubleMobile.scss';*/
</style>
