<template>
  <div
    v-if="item && item.frontmatter"
    :class="$blockClassName">

    <router-link
      :to="item.path">

      <div
        :class="$e('image')"
        v-if="item.frontmatter.picture"
        :style="{backgroundImage: 'url(' + item.frontmatter.picture + ')' }">
      </div>



<!--      <div-->
<!--        :class="$e('image-wrapper')">-->

<!--        <img-->
<!--          v-if="item.frontmatter.picture"-->
<!--          :class="$e('image')"-->
<!--          :src="$withBase(item.frontmatter.picture)"-->
<!--          alt="">-->

<!--      </div>-->

      <div
        :class="$e('title')">
        {{ item.frontmatter.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PhotoPanel',
    props: ['item'],
  };
</script>

<style lang="scss">

  @import './PhotoPanelDesktop.scss';
  /*@import './PhotoPanelMobile.scss';*/
  /*@import './PhotoPanelDoubleDesktop.scss';*/
  /*@import './PhotoPanelDoubleMobile.scss';*/
</style>
