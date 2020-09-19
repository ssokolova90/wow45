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
<!--      v-if="index > 1"-->
      <div
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


  /*@import './ThemePanelDesktop.scss';*/
  /*@import './ThemePanelMobile.scss';*/
  /*@import './ThemePanelDoubleDesktop.scss';*/
  /*@import './ThemePanelDoubleMobile.scss';*/

</style>