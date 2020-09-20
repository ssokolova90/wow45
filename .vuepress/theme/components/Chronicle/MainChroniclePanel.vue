<template>

  <div
    :class="$blockClassName"
    v-if="item && item.frontmatter">

    <router-link
      :to="item.path"
      style="width: 100%">

      <div :class="$e('image-wrapper')">

        <p>
          <img
            :class="$e('image')"
            v-if="item.frontmatter.picture"
            :src="$withBase(item.frontmatter.picture)"
            alt="">

        <div :class="$e('title')">
          {{ item.frontmatter.title }}
        </div>

        <div :class="$e('description')">
          {{ item.frontmatter.description }}
        </div>

        <div :class="$e('more-details')">
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
