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
    name: 'MainChroniclePanel',
    props: ['item']
  };
</script>

<style lang="scss">

  /*@import './MainChroniclePanelDesktop.scss';*/
  /*@import './MainChroniclePanelMobile.scss';*/
</style>
